import type { MetadataRoute } from "next";
import { getAllArticles, LOCALES } from "./vault/blog/_data";
import { TOOL_PAGES } from "./bellows/tools/_data";

import * as sounddialData from "./sounddial/blog/_data";
import * as jettyData from "./jetty/blog/_data";
import * as loupeData from "./loupe/blog/_data";
import * as dayedgeData from "./dayedge/blog/_data";
import * as renymData from "./renym/blog/_data";
import * as opticData from "./optic/blog/_data";
import * as lockinData from "./lockin/blog/_data";
import * as tomeData from "./tome/blog/_data";
import * as mediasmithData from "./mediasmith/blog/_data";
import * as bellowsData from "./bellows/blog/_data";
import * as tickpullData from "./tickpull/blog/_data";
import * as deskcloakData from "./deskcloak/blog/_data";
import * as canopyData from "./canopy/blog/_data";

const SITE_URL = "https://www.eduardbruch.com";

/**
 * The 13 per-app blogs. Locales come from each app's own getAvailableLocales(),
 * NOT from the full locale list — most apps have real articles in `en` only and
 * empty stubs for the rest, and those stub routes notFound(). Enumerating them
 * would seed the sitemap with 404s.
 */
interface AppBlog {
  route: string;
  locales: () => string[];
  articles: (locale: string) => { slug: string; date: string }[];
}

/** Most apps expose getAvailableLocales(); SoundDial predates it and exposes LOCALES. */
function standardBlog(
  route: string,
  data: {
    getAvailableLocales: () => string[];
    getAllArticles: (locale: string) => { slug: string; date: string }[];
  },
): AppBlog {
  return { route, locales: data.getAvailableLocales, articles: data.getAllArticles };
}

const APP_BLOGS: AppBlog[] = [
  {
    route: "sounddial",
    locales: () =>
      sounddialData.LOCALES.map((l) => l.code).filter(
        (code) => sounddialData.getAllArticles(code).length > 0,
      ),
    articles: (locale) =>
      sounddialData.getAllArticles(locale as sounddialData.Locale),
  },
  standardBlog("jetty", jettyData),
  standardBlog("loupe", loupeData),
  standardBlog("dayedge", dayedgeData),
  standardBlog("renym", renymData),
  standardBlog("optic", opticData),
  standardBlog("lockin", lockinData),
  standardBlog("tome", tomeData),
  standardBlog("mediasmith", mediasmithData),
  standardBlog("bellows", bellowsData),
  standardBlog("tickpull", tickpullData),
  standardBlog("deskcloak", deskcloakData),
  standardBlog("canopy", canopyData),
];

/** Standalone marketing / info pages that had no sitemap entry at all. */
const STATIC_PAGES = [
  { path: "", priority: 1.0 },
  { path: "overview", priority: 0.9 },
  { path: "apps", priority: 0.7 },
  { path: "about", priority: 0.6 },
  { path: "contact", priority: 0.5 },
  { path: "loupe", priority: 0.8 },
  { path: "optic", priority: 0.8 },
  { path: "lockin", priority: 0.8 },
  { path: "tome", priority: 0.8 },
  { path: "mediasmith", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const blogIndexes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/vault/blog`,
      lastModified: new Date("2026-06-12"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...LOCALES.map((locale) => ({
      url: `${SITE_URL}/vault/blog/${locale.code}`,
      lastModified: new Date("2026-06-12"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];

  const articlePages = LOCALES.flatMap((locale) =>
    getAllArticles(locale.code).map((article) => ({
      url: `${SITE_URL}/vault/blog/${locale.code}/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: article.cluster ? 0.75 : 0.6,
    })),
  );

  // Bellows: the product page and its tool guides. The guides are what have a
  // chance of ranking — they answer the question someone types before they know
  // an app exists — so they carry the higher priority of the two.
  const bellowsPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/bellows`,
      lastModified: new Date("2026-08-24"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/bellows/tools`,
      lastModified: new Date("2026-08-24"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...TOOL_PAGES.map((p) => ({
      url: `${SITE_URL}/bellows/tools/${p.slug}`,
      lastModified: new Date(p.updated),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];

  // The 13 per-app blogs: index per available locale, plus every article.
  const appBlogPages: MetadataRoute.Sitemap = APP_BLOGS.flatMap(
    ({ route, locales, articles }) =>
      locales().flatMap((locale) => [
        {
          url: `${SITE_URL}/${route}/blog/${locale}`,
          lastModified: new Date("2026-09-06"),
          changeFrequency: "weekly" as const,
          priority: 0.8,
        },
        ...articles(locale).map((article) => ({
          url: `${SITE_URL}/${route}/blog/${locale}/${article.slug}`,
          lastModified: new Date(article.date),
          changeFrequency: "monthly" as const,
          priority: 0.7,
        })),
      ]),
  );

  const staticPages: MetadataRoute.Sitemap = STATIC_PAGES.map((p) => ({
    url: p.path ? `${SITE_URL}/${p.path}` : SITE_URL,
    lastModified: new Date("2026-09-13"),
    changeFrequency: "monthly" as const,
    priority: p.priority,
  }));

  return [
    ...staticPages,
    ...blogIndexes,
    ...articlePages,
    ...bellowsPages,
    ...appBlogPages,
  ];
}
