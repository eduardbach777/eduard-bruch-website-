import { getAllArticles as getVaultArticles } from "@/app/vault/blog/_data/index";
import { getAllArticles as getPdfArticles } from "@/app/pdfcreator/blog/_data/index";
import { getContent as getPulseContent } from "@/app/pulse/_data/content";
import { getAllArticles as getPulseArticles } from "@/app/pulse/blog/_data/index";

export interface ArticleCard {
  title: string;
  description: string;
  href: string;
  date?: string;
}

export interface AppSection {
  name: string;
  articles: ArticleCard[];
  accent: string;
}

export const BLOG_LOCALES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "nl", label: "Nederlands", flag: "🇳🇱" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "pl", label: "Polski", flag: "🇵🇱" },
  { code: "sv", label: "Svenska", flag: "🇸🇪" },
];

export const VALID_LOCALE_CODES = BLOG_LOCALES.map((l) => l.code);

const VAULT_LOCALES = ["en", "de", "es", "ar", "fr"];

interface HubLabels {
  heading: string;
  subtitle: string;
  vaultName: string;
  pdfName: string;
  pulseName: string;
}

const labels: Record<string, HubLabels> = {
  en: {
    heading: "BLOG",
    subtitle: "Guides, tips, and how-tos across all apps.",
    vaultName: "Stash — Secret File Vault",
    pdfName: "PDF Creator & Scanner",
    pulseName: "Pulse — System Monitor",
  },
  de: {
    heading: "BLOG",
    subtitle: "Anleitungen, Tipps und Hilfestellungen für alle Apps.",
    vaultName: "Stash — Geheimer Foto Tresor",
    pdfName: "PDF Creator & Scanner",
    pulseName: "Pulse — Systemmonitor",
  },
  es: {
    heading: "BLOG",
    subtitle: "Guías, consejos y tutoriales para todas las apps.",
    vaultName: "Stash — Bóveda Secreta",
    pdfName: "PDF Creator & Scanner",
    pulseName: "Pulse — Monitor del Sistema",
  },
  fr: {
    heading: "BLOG",
    subtitle: "Guides, astuces et tutoriels pour toutes les apps.",
    vaultName: "Stash — Coffre-Fort Secret",
    pdfName: "PDF Creator & Scanner",
    pulseName: "Pulse — Moniteur Système",
  },
  pt: {
    heading: "BLOG",
    subtitle: "Guias, dicas e tutoriais para todos os apps.",
    vaultName: "Stash — Cofre Secreto",
    pdfName: "PDF Creator & Scanner",
    pulseName: "Pulse — Monitor do Sistema",
  },
  it: {
    heading: "BLOG",
    subtitle: "Guide, consigli e tutorial per tutte le app.",
    vaultName: "Stash — Cassaforte Segreta",
    pdfName: "PDF Creator & Scanner",
    pulseName: "Pulse — Monitor di Sistema",
  },
  nl: {
    heading: "BLOG",
    subtitle: "Handleidingen, tips en how-to's voor alle apps.",
    vaultName: "Stash — Geheime Kluis",
    pdfName: "PDF Creator & Scanner",
    pulseName: "Pulse — Systeemmonitor",
  },
  ja: {
    heading: "ブログ",
    subtitle: "すべてのアプリのガイド、ヒント、使い方。",
    vaultName: "Stash — 秘密ファイル金庫",
    pdfName: "PDF Creator & Scanner",
    pulseName: "Pulse — システムモニター",
  },
  ko: {
    heading: "블로그",
    subtitle: "모든 앱에 대한 가이드, 팁, 사용법.",
    vaultName: "Stash — 비밀 파일 금고",
    pdfName: "PDF Creator & Scanner",
    pulseName: "Pulse — 시스템 모니터",
  },
  zh: {
    heading: "博客",
    subtitle: "所有应用的指南、技巧和教程。",
    vaultName: "Stash — 秘密文件保险箱",
    pdfName: "PDF Creator & Scanner",
    pulseName: "Pulse — 系统监控器",
  },
  ar: {
    heading: "المدونة",
    subtitle: "أدلة ونصائح وإرشادات لجميع التطبيقات.",
    vaultName: "Stash — خزنة الملفات السرية",
    pdfName: "PDF Creator & Scanner",
    pulseName: "Pulse — مراقب النظام",
  },
  hi: {
    heading: "ब्लॉग",
    subtitle: "सभी ऐप्स के लिए गाइड, टिप्स और हाउ-टू।",
    vaultName: "Stash — सीक्रेट फाइल वॉल्ट",
    pdfName: "PDF Creator & Scanner",
    pulseName: "Pulse — सिस्टम मॉनिटर",
  },
  tr: {
    heading: "BLOG",
    subtitle: "Tüm uygulamalar için kılavuzlar, ipuçları ve nasıl yapılır.",
    vaultName: "Stash — Gizli Dosya Kasası",
    pdfName: "PDF Creator & Scanner",
    pulseName: "Pulse — Sistem Monitörü",
  },
  ru: {
    heading: "БЛОГ",
    subtitle: "Руководства, советы и инструкции для всех приложений.",
    vaultName: "Stash — Секретное Хранилище",
    pdfName: "PDF Creator & Scanner",
    pulseName: "Pulse — Системный Монитор",
  },
  pl: {
    heading: "BLOG",
    subtitle: "Poradniki, wskazówki i instrukcje dla wszystkich aplikacji.",
    vaultName: "Stash — Sekretny Sejf",
    pdfName: "PDF Creator & Scanner",
    pulseName: "Pulse — Monitor Systemu",
  },
  sv: {
    heading: "BLOGG",
    subtitle: "Guider, tips och instruktioner för alla appar.",
    vaultName: "Stash — Hemligt Filvalv",
    pdfName: "PDF Creator & Scanner",
    pulseName: "Pulse — Systemövervakare",
  },
};

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function getExcerpt(text: string, maxLen = 120): string {
  const clean = stripHtml(text);
  if (clean.length <= maxLen) return clean;
  return clean.slice(0, maxLen).replace(/\s+\S*$/, "") + "...";
}

export function getHubLabels(locale: string): HubLabels {
  return labels[locale] ?? labels.en;
}

export function getAppSections(locale: string): AppSection[] {
  const l = getHubLabels(locale);

  // Vault: only 5 locales — fall back to English for others
  const vaultLocale = VAULT_LOCALES.includes(locale) ? locale : "en";
  const vaultArticles: ArticleCard[] = getVaultArticles(
    vaultLocale as "en" | "de" | "es" | "ar" | "fr",
  ).map((a) => ({
    title: a.title,
    description: a.description || getExcerpt(a.content),
    href: `/vault/blog/${vaultLocale}/${a.slug}`,
    date: a.date,
  }));

  // PDF: supports all 16 locales (falls back to English internally)
  const pdfArticles: ArticleCard[] = getPdfArticles(locale as never).map(
    (a) => ({
      title: a.title,
      description: a.description || getExcerpt(a.content),
      href: `/pdfcreator/blog/${locale}/${a.slug}`,
      date: a.date,
    }),
  );

  // Pulse: blog articles + Q&A sections
  const pulseBlogArticles: ArticleCard[] = getPulseArticles(locale as never).map(
    (a) => ({
      title: a.title,
      description: a.description || getExcerpt(a.content),
      href: `/pulse/blog/${locale}/${a.slug}`,
      date: a.date,
    }),
  );

  const pulseData = getPulseContent(locale);
  const pulseQaCards: ArticleCard[] = [];
  for (const section of pulseData.sections) {
    if (section.title === "About Pulse") continue;
    pulseQaCards.push({
      title: section.title,
      description: section.qas
        .slice(0, 3)
        .map((qa) => qa.q)
        .join(" / "),
      href: `/pulse/${locale}`,
    });
  }

  const pulseArticles: ArticleCard[] = [...pulseBlogArticles, ...pulseQaCards];

  return [
    {
      name: l.vaultName,
      articles: vaultArticles,
      accent: "border-l-amber-500",
    },
    { name: l.pdfName, articles: pdfArticles, accent: "border-l-red-500" },
    {
      name: l.pulseName,
      articles: pulseArticles,
      accent: "border-l-indigo-500",
    },
  ];
}
