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
import { zhHantArticles } from "./zh-Hant";
import { ruArticles } from "./ru";
import { trArticles } from "./tr";
import { plArticles } from "./pl";
import { svArticles } from "./sv";
import { daArticles } from "./da";
import { noArticles } from "./no";
import { fiArticles } from "./fi";
import { arArticles } from "./ar";
import { heArticles } from "./he";
import { thArticles } from "./th";
import { msArticles } from "./ms";
import { viArticles } from "./vi";
import { ukArticles } from "./uk";
import { caArticles } from "./ca";
import { elArticles } from "./el";
import { hrArticles } from "./hr";
import { skArticles } from "./sk";
import { csArticles } from "./cs";
import { roArticles } from "./ro";
import { huArticles } from "./hu";
import { idArticles } from "./id";
import { hiArticles } from "./hi";

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
  de: deArticles,
  fr: frArticles,
  es: esArticles,
  pt: ptArticles,
  it: itArticles,
  nl: nlArticles,
  ja: jaArticles,
  ko: koArticles,
  zh: zhArticles,
  "zh-Hant": zhHantArticles,
  ru: ruArticles,
  tr: trArticles,
  pl: plArticles,
  sv: svArticles,
  da: daArticles,
  no: noArticles,
  fi: fiArticles,
  ar: arArticles,
  he: heArticles,
  th: thArticles,
  ms: msArticles,
  vi: viArticles,
  uk: ukArticles,
  ca: caArticles,
  el: elArticles,
  hr: hrArticles,
  sk: skArticles,
  cs: csArticles,
  ro: roArticles,
  hu: huArticles,
  id: idArticles,
  hi: hiArticles,
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
