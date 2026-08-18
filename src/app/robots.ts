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
  "Bytespider",   // ByteDance — AI, but ignores robots.txt and crawls abusively
  "PetalBot",
  "Amazonbot",
  "ImagesiftBot",
  "Scrapy",
  "python-requests",
];

/**
 * AI crawlers — ALLOWED ON PURPOSE.
 *
 * Being cited in ChatGPT / Perplexity / Gemini answers and recommended when
 * someone asks for a Mac utility is a real acquisition channel for the apps,
 * so these are treated like search engines rather than parasites.
 *
 * Two kinds matter, and both are wanted:
 *   • answer/search bots (OAI-SearchBot, PerplexityBot, Claude-SearchBot) —
 *     these produce the live citation with a link back;
 *   • training bots (GPTBot, ClaudeBot, Google-Extended, CCBot) — these get
 *     the apps *into* the model, so it can recommend them unprompted.
 *
 * Note Google-Extended and Applebot-Extended are training-only signals; they
 * do NOT affect Google Search or Siri ranking either way.
 */
const AI_CRAWLERS_ALLOWED = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "meta-externalagent",
  "FacebookBot",
  "CCBot",
  "cohere-ai",
];

/**
 * Data resellers and image scrapers. These harvest content to sell it on and
 * never cite the source — no traffic, no attribution, no model presence.
 */
const DATA_RESELLERS = [
  "Diffbot",
  "Omgilibot",
  "ImagesiftBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...SEARCH_ENGINES.map((userAgent) => ({ userAgent, allow: "/" })),
      ...AI_CRAWLERS_ALLOWED.map((userAgent) => ({ userAgent, allow: "/" })),
      ...[...SEO_SCRAPERS, ...AGGRESSIVE, ...DATA_RESELLERS].map((userAgent) => ({
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
