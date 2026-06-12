import { enArticles } from "./en";
import { csArticles } from "./cs";
import { hrArticles } from "./hr";
import { jaArticles } from "./ja";
import { nlArticles } from "./nl";
import { skArticles } from "./sk";
import { ukArticles } from "./uk";
import { esArticles } from "./es";
import { ptArticles } from "./pt";
import { thArticles } from "./th";
import { elArticles } from "./el";
// import { trArticles } from "./tr"; // incomplete — re-translate later

export type Locale =
  | "en" | "de" | "fr" | "es" | "pt" | "it" | "nl"
  | "ja" | "ko" | "zh" | "zh-Hant"
  | "ru" | "tr" | "pl" | "sv" | "da" | "no" | "fi"
  | "ar" | "he" | "th" | "ms" | "vi" | "uk" | "ca"
  | "el" | "hr" | "sk" | "cs" | "ro" | "hu" | "id" | "hi";

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
  { code: "de", label: "Deutsch", dir: "ltr" },
  { code: "fr", label: "Français", dir: "ltr" },
  { code: "es", label: "Español", dir: "ltr" },
  { code: "pt", label: "Português", dir: "ltr" },
  { code: "it", label: "Italiano", dir: "ltr" },
  { code: "nl", label: "Nederlands", dir: "ltr" },
  { code: "ja", label: "日本語", dir: "ltr" },
  { code: "ko", label: "한국어", dir: "ltr" },
  { code: "zh", label: "中文(简)", dir: "ltr" },
  { code: "zh-Hant", label: "中文(繁)", dir: "ltr" },
  { code: "ru", label: "Русский", dir: "ltr" },
  { code: "tr", label: "Türkçe", dir: "ltr" },
  { code: "pl", label: "Polski", dir: "ltr" },
  { code: "sv", label: "Svenska", dir: "ltr" },
  { code: "da", label: "Dansk", dir: "ltr" },
  { code: "no", label: "Norsk", dir: "ltr" },
  { code: "fi", label: "Suomi", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
  { code: "he", label: "עברית", dir: "rtl" },
  { code: "th", label: "ไทย", dir: "ltr" },
  { code: "ms", label: "Melayu", dir: "ltr" },
  { code: "vi", label: "Tiếng Việt", dir: "ltr" },
  { code: "uk", label: "Українська", dir: "ltr" },
  { code: "ca", label: "Català", dir: "ltr" },
  { code: "el", label: "Ελληνικά", dir: "ltr" },
  { code: "hr", label: "Hrvatski", dir: "ltr" },
  { code: "sk", label: "Slovenčina", dir: "ltr" },
  { code: "cs", label: "Čeština", dir: "ltr" },
  { code: "ro", label: "Română", dir: "ltr" },
  { code: "hu", label: "Magyar", dir: "ltr" },
  { code: "id", label: "Indonesia", dir: "ltr" },
  { code: "hi", label: "हिन्दी", dir: "ltr" },
];

// Add locale imports here as translation files are created.
// Example: import { deArticles } from "./de";
// Then add to the articles map: de: deArticles,
const articles: Record<string, ArticleSet> = {
  en: enArticles,
  cs: csArticles,
  hr: hrArticles,
  ja: jaArticles,
  nl: nlArticles,
  sk: skArticles,
  uk: ukArticles,
  es: esArticles,
  pt: ptArticles,
  th: thArticles,
  el: elArticles,
  // tr: trArticles, // incomplete
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
