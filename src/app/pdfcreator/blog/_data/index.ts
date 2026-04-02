export type Locale = "en" | "de" | "es" | "fr" | "pt" | "it" | "nl" | "ja" | "ko" | "zh" | "ar" | "hi" | "tr" | "ru" | "pl" | "sv";

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
  { code: "es", label: "Español", dir: "ltr" },
  { code: "fr", label: "Français", dir: "ltr" },
  { code: "pt", label: "Português", dir: "ltr" },
  { code: "it", label: "Italiano", dir: "ltr" },
  { code: "nl", label: "Nederlands", dir: "ltr" },
  { code: "ja", label: "日本語", dir: "ltr" },
  { code: "ko", label: "한국어", dir: "ltr" },
  { code: "zh", label: "中文", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
  { code: "hi", label: "हिन्दी", dir: "ltr" },
  { code: "tr", label: "Türkçe", dir: "ltr" },
  { code: "ru", label: "Русский", dir: "ltr" },
  { code: "pl", label: "Polski", dir: "ltr" },
  { code: "sv", label: "Svenska", dir: "ltr" },
];

// English articles — imported from separate files for manageability
import { enArticlesBatch1 } from "./en-batch-1";
import { enArticlesBatch2 } from "./en-batch-2";
import { enArticlesBatch3 } from "./en-batch-3";
import { enArticlesBatch4 } from "./en-batch-4";
import { enArticlesBatch5 } from "./en-batch-5";
// Localized articles
import { deArticles } from "./de";
import { esArticles } from "./es";
import { frArticles } from "./fr";
import { ptArticles } from "./pt";
import { itArticles } from "./it";
import { nlArticles } from "./nl";
import { jaArticles } from "./ja";
import { koArticles } from "./ko";
import { zhArticles } from "./zh";
import { arArticles } from "./ar";
import { hiArticles } from "./hi";
import { trArticles } from "./tr";
import { ruArticles } from "./ru";
import { plArticles } from "./pl";
import { svArticles } from "./sv";

const enArticles: ArticleSet = {
  ...enArticlesBatch1,
  ...enArticlesBatch2,
  ...enArticlesBatch3,
  ...enArticlesBatch4,
  ...enArticlesBatch5,
};

const articles: Record<Locale, ArticleSet> = {
  en: enArticles,
  de: deArticles,
  es: esArticles,
  fr: frArticles,
  pt: ptArticles,
  it: itArticles,
  nl: nlArticles,
  ja: jaArticles,
  ko: koArticles,
  zh: zhArticles,
  ar: arArticles,
  hi: hiArticles,
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
