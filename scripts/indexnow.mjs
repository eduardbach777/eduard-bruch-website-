#!/usr/bin/env node
// Tells Bing (and Yandex, Seznam, Naver, Yep via IndexNow) about changed pages, so they re-crawl them quickly.
// Bing feeds Microsoft Copilot and part of ChatGPT search. Google does not use IndexNow.
//
//   node scripts/indexnow.mjs                 # every SoundDial URL from the live sitemap
//   node scripts/indexnow.mjs /sounddial ...  # only URLs starting with these paths
//
// Run it after a deploy is live. The key file public/<KEY>.txt must be reachable on the site.
import { readdirSync } from "node:fs";

const HOST = "www.eduardbruch.com";
const KEY = readdirSync(new URL("../public/", import.meta.url)).find((f) => /^[0-9a-f]{32}\.txt$/.test(f))?.slice(0, 32);
if (!KEY) throw new Error("IndexNow key file public/<32 hex>.txt not found");

const prefixes = process.argv.slice(2).length ? process.argv.slice(2) : ["/sounddial"];
const sitemap = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => m[1])
  .filter((u) => prefixes.some((p) => new URL(u).pathname.startsWith(p)));
if (!urls.length) throw new Error(`no sitemap URLs under ${prefixes.join(", ")}`);

for (let i = 0; i < urls.length; i += 10000) {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls.slice(i, i + 10000) }),
  });
  console.log(`IndexNow: ${urls.slice(i, i + 10000).length} URLs → HTTP ${res.status}`);
}
