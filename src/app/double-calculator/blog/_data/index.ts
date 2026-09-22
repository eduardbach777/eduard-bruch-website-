import { enArticles } from "./en";

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  content: string;
}

export interface ArticleSet {
  [slug: string]: Article;
}

export type Locale = string;

const articles: Record<string, ArticleSet> = {
  en: enArticles,
};

export function getArticle(locale: string, slug: string): Article | undefined {
  return articles[locale]?.[slug] || articles.en?.[slug];
}

export function getAllArticles(locale?: string): Article[] {
  const set = locale && articles[locale] && Object.keys(articles[locale]).length > 0
    ? articles[locale]
    : articles.en;
  return Object.values(set).sort((a, b) => b.date.localeCompare(a.date));
}

export function getAllSlugs(): string[] {
  return Object.keys(articles.en);
}

export function getAvailableLocales(): string[] {
  return Object.entries(articles)
    .filter(([, set]) => Object.keys(set).length > 0)
    .map(([code]) => code);
}
