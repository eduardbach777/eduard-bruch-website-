import type { MetadataRoute } from "next";
import { getAllArticles, LOCALES } from "./vault/blog/_data";
import { TOOL_PAGES } from "./bellows/tools/_data";

const SITE_URL = "https://www.eduardbruch.com";

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

  return [...blogIndexes, ...articlePages, ...bellowsPages];
}
