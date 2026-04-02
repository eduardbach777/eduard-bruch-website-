import { enArticles } from "./en";
import { deArticles } from "./de";
import { frArticles } from "./fr";
import { esArticles } from "./es";
import { ptArticles } from "./pt";
import { itArticles } from "./it";
import { nlArticles } from "./nl";
import { jaArticles } from "./ja";
import { koArticles } from "./ko";
import { zhArticles } from "./zh";
import { arArticles } from "./ar";
import { trArticles } from "./tr";
import { ruArticles } from "./ru";
import { plArticles } from "./pl";
import { svArticles } from "./sv";

export type Locale =
  | "en" | "de" | "fr" | "es" | "pt" | "it" | "nl"
  | "ja" | "ko" | "zh" | "ar" | "tr" | "ru" | "pl" | "sv";

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
  { code: "de", label: "Deutsch", dir: "ltr" },
  { code: "fr", label: "Français", dir: "ltr" },
  { code: "es", label: "Español", dir: "ltr" },
  { code: "pt", label: "Português", dir: "ltr" },
  { code: "it", label: "Italiano", dir: "ltr" },
  { code: "nl", label: "Nederlands", dir: "ltr" },
  { code: "ja", label: "日本語", dir: "ltr" },
  { code: "ko", label: "한국어", dir: "ltr" },
  { code: "zh", label: "中文", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
  { code: "tr", label: "Türkçe", dir: "ltr" },
  { code: "ru", label: "Русский", dir: "ltr" },
  { code: "pl", label: "Polski", dir: "ltr" },
  { code: "sv", label: "Svenska", dir: "ltr" },
];

const articles: Record<Locale, ArticleSet> = {
  en: enArticles,
  de: deArticles,
  fr: frArticles,
  es: esArticles,
  pt: ptArticles,
  it: itArticles,
  nl: nlArticles,
  ja: jaArticles,
  ko: koArticles,
  zh: zhArticles,
  ar: arArticles,
  tr: trArticles,
  ru: ruArticles,
  pl: plArticles,
  sv: svArticles,
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
