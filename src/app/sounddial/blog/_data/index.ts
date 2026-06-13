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
import { arArticles } from "./ar";
import { deArticles } from "./de";
import { idArticles } from "./id";
import { itArticles } from "./it";
import { koArticles } from "./ko";
import { msArticles } from "./ms";
import { roArticles } from "./ro";
import { ruArticles } from "./ru";
import { viArticles } from "./vi";
import { frArticles } from "./fr";
import { heArticles } from "./he";
import { hiArticles } from "./hi";
import { plArticles } from "./pl";
import { svArticles } from "./sv";
import { zhHantArticles } from "./zh-Hant";
import { caArticles } from "./ca";
import { daArticles } from "./da";
import { fiArticles } from "./fi";
import { huArticles } from "./hu";
import { noArticles } from "./no";
import { trArticles } from "./tr";
import { zhArticles } from "./zh";

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

const articles: Record<string, ArticleSet> = {
  en: enArticles,
  ar: arArticles,
  cs: csArticles,
  de: deArticles,
  el: elArticles,
  es: esArticles,
  fr: frArticles,
  he: heArticles,
  hi: hiArticles,
  hr: hrArticles,
  hu: huArticles,
  id: idArticles,
  it: itArticles,
  ja: jaArticles,
  ko: koArticles,
  ms: msArticles,
  nl: nlArticles,
  no: noArticles,
  pl: plArticles,
  pt: ptArticles,
  ro: roArticles,
  ru: ruArticles,
  sk: skArticles,
  sv: svArticles,
  th: thArticles,
  tr: trArticles,
  uk: ukArticles,
  vi: viArticles,
  ca: caArticles,
  da: daArticles,
  fi: fiArticles,
  zh: zhArticles,
  "zh-Hant": zhHantArticles,
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
