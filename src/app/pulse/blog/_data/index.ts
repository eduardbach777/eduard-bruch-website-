import { enArticles } from "./en";
import { zhArticles } from "./zh";

export type Locale = "en" | "zh";

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string; // HTML content
}

export interface ArticleSet {
  [slug: string]: Article;
}

export const LOCALES: { code: Locale; label: string; dir: "ltr" | "rtl" }[] = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "zh", label: "中文", dir: "ltr" },
];

const articles: Record<Locale, ArticleSet> = {
  en: enArticles,
  zh: zhArticles,
};

export function getArticle(
  locale: Locale,
  slug: string,
): Article | undefined {
  return articles[locale]?.[slug] || articles.en?.[slug];
}

export function getAllArticles(locale: Locale): Article[] {
  const localeArticles = articles[locale];
  if (localeArticles && Object.keys(localeArticles).length > 0) {
    return Object.values(localeArticles);
  }
  return Object.values(articles.en);
}

export function getAllSlugs(): string[] {
  return Object.keys(articles.en);
}
