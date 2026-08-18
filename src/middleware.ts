import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Edge-level block for crawlers that ignore robots.txt.
 *
 * robots.txt is voluntary. Bytespider (ByteDance) and PetalBot (Huawei) are
 * widely reported to crawl regardless, which is what actually burns bandwidth.
 * This returns 403 before any page is rendered or transferred.
 *
 * TRADE-OFF, read before assuming this is free: middleware runs as an Edge
 * Function, so every request it inspects is a function invocation. It saves
 * bandwidth (the far scarcer Hobby limit — 100 GB/mo) at the cost of
 * invocations. The `matcher` below therefore skips static assets entirely, so
 * only real page requests are inspected.
 *
 * The cheaper option, if it covers your case, is Vercel's Firewall — it blocks
 * at the edge BEFORE middleware runs, so it costs no invocation at all. See
 * the note at the bottom of this file.
 */
const BLOCKED_UA = [
  // ignore robots.txt, very high volume
  "bytespider",
  "petalbot",
  // commercial SEO scrapers
  "ahrefsbot",
  "semrushbot",
  "mj12bot",
  "dotbot",
  "dataforseobot",
  "blexbot",
  "serpstatbot",
  "zoominfobot",
  "barkrowler",
  // generic scraping tooling
  "scrapy",
  "python-requests",
  "curl/",
  "wget/",
  // AI training crawlers
  "gptbot",
  "ccbot",
  "claudebot",
  "anthropic-ai",
  "perplexitybot",
  "imagesiftbot",
  "omgilibot",
  "diffbot",
];

export function middleware(request: NextRequest) {
  const ua = request.headers.get("user-agent")?.toLowerCase() ?? "";

  // An empty UA on a page request is almost always a scraper; real browsers
  // and the search engines we care about always send one.
  if (!ua || BLOCKED_UA.some((bot) => ua.includes(bot))) {
    return new NextResponse("Forbidden", {
      status: 403,
      headers: {
        // tell well-behaved clients not to retry for a day
        "Retry-After": "86400",
        "Cache-Control": "public, max-age=86400",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  /**
   * Only inspect real page requests. Static assets, images, the sitemap and
   * robots.txt are skipped so they never cost an invocation — and so search
   * engines can always read robots.txt/sitemap.xml even if something here
   * were ever misconfigured.
   */
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|woff|woff2|ttf|mp4)$).*)",
  ],
};

/**
 * WHAT THIS FILE CANNOT DO — the rest has to be done in the Vercel dashboard:
 *
 *   Project → Firewall
 *     • "Attack Challenge Mode" — one toggle, challenges all suspicious
 *       traffic. Best emergency lever if you're being hammered right now.
 *     • Custom rules — block/challenge by user agent, path, IP, ASN or
 *       COUNTRY. Blocking by country is the only reliable way to stop
 *       residential-proxy traffic, which rotates UA and IP and will walk
 *       straight past both this file and robots.txt.
 *     • Rules here run BEFORE middleware, so they cost no invocation.
 *
 *   Project → Settings → Deployment Protection
 *     • Useful for preview deployments, which bots also crawl.
 */
