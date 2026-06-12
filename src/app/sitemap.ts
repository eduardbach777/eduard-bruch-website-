import type { MetadataRoute } from "next";
import { getAllArticles, LOCALES } from "./vault/blog/_data";

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
      alternates: {
        languages: Object.fromEntries(
          LOCALES.filter((candidate) =>
            getAllArticles(candidate.code).some(
              (localizedArticle) => localizedArticle.slug === article.slug,
            ),
          ).map((candidate) => [
            candidate.code,
            `${SITE_URL}/vault/blog/${candidate.code}/${article.slug}`,
          ]),
        ),
      },
    })),
  );

  return [...blogIndexes, ...articlePages];
}
