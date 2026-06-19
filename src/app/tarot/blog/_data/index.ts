import { enArticles } from "./en";

// English-only for now. Codex will add the other Apple-supported locales later by
// adding `<locale>.ts` files and extending LOCALES + the `articles` map below.
export type Locale = "en";

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  content: string; // HTML
}

export interface ArticleSet {
  [slug: string]: Article;
}

export const LOCALES: { code: Locale; label: string; dir: "ltr" | "rtl" }[] = [
  { code: "en", label: "English", dir: "ltr" },
];

const articles: Record<string, ArticleSet> = {
  en: enArticles,
};

export function getArticle(locale: Locale, slug: string): Article | undefined {
  return articles[locale]?.[slug] || articles.en?.[slug];
}

export function getLocaleArticle(locale: Locale, slug: string): Article | undefined {
  return articles[locale]?.[slug];
}

export function getAllArticles(locale: Locale): Article[] {
  const localeArticles = articles[locale];
  if (localeArticles && Object.keys(localeArticles).length > 0) {
    return Object.values(localeArticles).sort((a, b) => b.date.localeCompare(a.date));
  }
  return Object.values(articles.en).sort((a, b) => b.date.localeCompare(a.date));
}

export function getAllSlugs(): string[] {
  return Object.keys(articles.en);
}
