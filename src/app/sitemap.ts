import type { MetadataRoute } from "next";
import { getAllArticles, LOCALES } from "./vault/blog/_data";
import {
  getAllArticles as getTarotArticles,
  LOCALES as TAROT_LOCALES,
} from "./tarot/blog/_data";

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

  const tarotIndexes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/tarot/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...TAROT_LOCALES.map((locale) => ({
      url: `${SITE_URL}/tarot/blog/${locale.code}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];

  const tarotArticles = TAROT_LOCALES.flatMap((locale) =>
    getTarotArticles(locale.code).map((article) => ({
      url: `${SITE_URL}/tarot/blog/${locale.code}/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  return [...blogIndexes, ...articlePages, ...tarotIndexes, ...tarotArticles];
}
