import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import infidelity301 from "../stash-infidelity-301.json";

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
  // NOTE: mainstream AI crawlers (GPTBot, ClaudeBot, PerplexityBot, CCBot) are
  // deliberately ALLOWED — being cited/recommended by AI drives app installs.
  // Only data resellers that never attribute are blocked here.
  "imagesiftbot",
  "omgilibot",
  "diffbot",
];

// stash-infidelity-301.json: the relationship articles of the old Stash blog (every locale) moved to
// stashphotovault.com (owner decision 2026-10-08). 301 to the same or closest kept article; to the language page only
// when that translation is listed in `translated` (data-driven: going live in a language is a json change), else the
// English page. Next.js redirects() in next.config.ts do not overlap these slugs and run before this middleware.
const STASH_301 = infidelity301 as {
  target: string;
  localeToLang: Record<string, string>;
  translated: Record<string, string[]>;
  slugs: Record<string, string>;
};
const STASH_301_RE = /^\/vault\/blog\/([^/]+)\/([^/]+)\/?$/;

/** Target URL for an old /vault/blog/<locale>/<slug> path, or null when it is not one of these articles. */
function stashInfidelityTarget(pathname: string): string | null {
  const m = STASH_301_RE.exec(pathname);
  if (!m || !Object.hasOwn(STASH_301.slugs, m[2])) return null;
  const slug = STASH_301.slugs[m[2]];
  const lang = STASH_301.localeToLang[m[1]] ?? m[1];
  const localized = lang !== "en" && STASH_301.translated[lang]?.includes(slug);
  return `${STASH_301.target}${localized ? `/${lang}` : ""}/blog/${slug}`;
}

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

  const stashTarget = stashInfidelityTarget(request.nextUrl.pathname);
  if (stashTarget) return NextResponse.redirect(stashTarget, 301);

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
    // explicit so the Stash 301 check always runs for blog articles (the .txt/.png-style exclusions below cannot match a slug anyway)
    "/vault/blog/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|robots.txt|llms.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|txt|woff|woff2|ttf|mp4)$).*)",
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
