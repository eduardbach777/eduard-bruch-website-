import type { MetadataRoute } from "next";

/**
 * Search engines we WANT — the blog exists to rank, so these stay fully allowed.
 * Listing them explicitly also protects them from the catch-all rules below.
 */
const SEARCH_ENGINES = [
  "Googlebot",
  "Googlebot-Image",
  "Bingbot",
  "DuckDuckBot",
  "Applebot",          // powers Siri / Spotlight suggestions
  "YandexBot",
  "Slurp",             // Yahoo
];

/**
 * Commercial SEO scrapers. They crawl aggressively and index the whole site to
 * resell the data — no traffic comes back. These generally DO honour robots.txt.
 */
const SEO_SCRAPERS = [
  "AhrefsBot",
  "SemrushBot",
  "DotBot",            // Moz
  "MJ12bot",           // Majestic
  "DataForSeoBot",
  "BLEXBot",
  "rogerbot",
  "Barkrowler",
  "SerpstatBot",
  "ZoominfoBot",
];

/**
 * High-volume crawlers that are the usual cause of a bandwidth spike.
 * Bytespider (ByteDance) and PetalBot (Huawei) are the two worst offenders and
 * are frequently reported to IGNORE robots.txt — see the note in the firewall
 * section of README. Blocking them here is necessary but not sufficient.
 */
const AGGRESSIVE = [
  "Bytespider",
  "PetalBot",
  "Amazonbot",
  "ImagesiftBot",
  "Scrapy",
  "python-requests",
];

/**
 * AI training crawlers. Blocked by default — they consume bandwidth and return
 * no traffic. Remove any you'd rather allow.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "CCBot",             // Common Crawl — feeds most training sets
  "Google-Extended",   // Gemini training (does NOT affect Google Search ranking)
  "Applebot-Extended", // Apple AI training (does NOT affect Applebot/Siri)
  "FacebookBot",
  "meta-externalagent",
  "Diffbot",
  "Omgilibot",
  "cohere-ai",
  "PerplexityBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...SEARCH_ENGINES.map((userAgent) => ({ userAgent, allow: "/" })),
      ...[...SEO_SCRAPERS, ...AGGRESSIVE, ...AI_CRAWLERS].map((userAgent) => ({
        userAgent,
        disallow: "/",
      })),
      // Everything else: allowed, but keep build/asset noise out of the index.
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/static/chunks/"],
      },
    ],
    sitemap: "https://www.eduardbruch.com/sitemap.xml",
    host: "https://www.eduardbruch.com",
  };
}
