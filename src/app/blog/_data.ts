import { getAllArticles as getVaultArticles } from "@/app/vault/blog/_data/index";
import { getAllArticles as getSoundDialArticles } from "@/app/sounddial/blog/_data/index";
import { getAllArticles as getJettyArticles } from "@/app/jetty/blog/_data/index";
import { getAllArticles as getTickpullArticles } from "@/app/tickpull/blog/_data/index";
import { getAllArticles as getRenymArticles } from "@/app/renym/blog/_data/index";
import { getAllArticles as getCanopyArticles } from "@/app/canopy/blog/_data/index";
import { getAllArticles as getDeskCloakArticles } from "@/app/deskcloak/blog/_data/index";
import { getAllArticles as getDayedgeArticles } from "@/app/dayedge/blog/_data/index";
import { getAllArticles as getLoupeArticles } from "@/app/loupe/blog/_data/index";
import { getAllArticles as getOpticArticles } from "@/app/optic/blog/_data/index";
import { getAllArticles as getTomeArticles } from "@/app/tome/blog/_data/index";
import { getAllArticles as getLockInArticles } from "@/app/lockin/blog/_data/index";
import { getAllArticles as getMediasmithArticles } from "@/app/mediasmith/blog/_data/index";
import { getAllArticles as getBellowsArticles } from "@/app/bellows/blog/_data/index";

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
  soundDialName?: string;
  vaultName: string;
  pdfName: string;
}

const labels: Record<string, HubLabels> = {
  en: {
    heading: "BLOG",
    subtitle: "Guides, tips, and how-tos across all apps.",
    soundDialName: "SoundDial — Per-App Volume Mixer",
    vaultName: "Stash — Secret File Vault",
    pdfName: "PDF Creator & Scanner",
  },
  de: {
    heading: "BLOG",
    subtitle: "Anleitungen, Tipps und Hilfestellungen für alle Apps.",
    vaultName: "Stash — Geheimer Foto Tresor",
    pdfName: "PDF Creator & Scanner",
  },
  es: {
    heading: "BLOG",
    subtitle: "Guías, consejos y tutoriales para todas las apps.",
    vaultName: "Stash — Bóveda Secreta",
    pdfName: "PDF Creator & Scanner",
  },
  fr: {
    heading: "BLOG",
    subtitle: "Guides, astuces et tutoriels pour toutes les apps.",
    vaultName: "Stash — Coffre-Fort Secret",
    pdfName: "PDF Creator & Scanner",
  },
  pt: {
    heading: "BLOG",
    subtitle: "Guias, dicas e tutoriais para todos os apps.",
    vaultName: "Stash — Cofre Secreto",
    pdfName: "PDF Creator & Scanner",
  },
  it: {
    heading: "BLOG",
    subtitle: "Guide, consigli e tutorial per tutte le app.",
    vaultName: "Stash — Cassaforte Segreta",
    pdfName: "PDF Creator & Scanner",
  },
  nl: {
    heading: "BLOG",
    subtitle: "Handleidingen, tips en how-to's voor alle apps.",
    vaultName: "Stash — Geheime Kluis",
    pdfName: "PDF Creator & Scanner",
  },
  ja: {
    heading: "ブログ",
    subtitle: "すべてのアプリのガイド、ヒント、使い方。",
    vaultName: "Stash — 秘密ファイル金庫",
    pdfName: "PDF Creator & Scanner",
  },
  ko: {
    heading: "블로그",
    subtitle: "모든 앱에 대한 가이드, 팁, 사용법.",
    vaultName: "Stash — 비밀 파일 금고",
    pdfName: "PDF Creator & Scanner",
  },
  zh: {
    heading: "博客",
    subtitle: "所有应用的指南、技巧和教程。",
    vaultName: "Stash — 秘密文件保险箱",
    pdfName: "PDF Creator & Scanner",
  },
  ar: {
    heading: "المدونة",
    subtitle: "أدلة ونصائح وإرشادات لجميع التطبيقات.",
    vaultName: "Stash — خزنة الملفات السرية",
    pdfName: "PDF Creator & Scanner",
  },
  hi: {
    heading: "ब्लॉग",
    subtitle: "सभी ऐप्स के लिए गाइड, टिप्स और हाउ-टू।",
    vaultName: "Stash — सीक्रेट फाइल वॉल्ट",
    pdfName: "PDF Creator & Scanner",
  },
  tr: {
    heading: "BLOG",
    subtitle: "Tüm uygulamalar için kılavuzlar, ipuçları ve nasıl yapılır.",
    vaultName: "Stash — Gizli Dosya Kasası",
    pdfName: "PDF Creator & Scanner",
  },
  ru: {
    heading: "БЛОГ",
    subtitle: "Руководства, советы и инструкции для всех приложений.",
    vaultName: "Stash — Секретное Хранилище",
    pdfName: "PDF Creator & Scanner",
  },
  pl: {
    heading: "BLOG",
    subtitle: "Poradniki, wskazówki i instrukcje dla wszystkich aplikacji.",
    vaultName: "Stash — Sekretny Sejf",
    pdfName: "PDF Creator & Scanner",
  },
  sv: {
    heading: "BLOGG",
    subtitle: "Guider, tips och instruktioner för alla appar.",
    vaultName: "Stash — Hemligt Filvalv",
    pdfName: "PDF Creator & Scanner",
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

  // SoundDial: show articles in the current locale (falls back to English).
  const soundDialArticles: ArticleCard[] =
    getSoundDialArticles("en").map((a) => ({
      title: a.title,
      description: a.description,
      href: `/sounddial/blog/${locale}/${a.slug}`,
      date: a.date,
    }));

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

  const sections: AppSection[] = [];

  // ── macOS Audio ──
  if (soundDialArticles.length > 0) {
    sections.push({
      name: l.soundDialName ?? "SoundDial",
      articles: soundDialArticles,
      accent: "border-l-purple-500",
    });
  }

  // ── macOS Productivity ──
  const productivityApps: { name: string; getter: () => { slug: string; title: string; description: string; date: string }[]; route: string; accent: string }[] = [
    { name: "Lock In! — Website Blocker", getter: getLockInArticles, route: "lockin", accent: "border-l-red-500" },
    { name: "Dayedge — Calendar Sidebar", getter: getDayedgeArticles, route: "dayedge", accent: "border-l-orange-500" },
    { name: "Tickpull — Menu Bar Timer", getter: getTickpullArticles, route: "tickpull", accent: "border-l-red-400" },
    { name: "Jetty — Dock Launcher", getter: getJettyArticles, route: "jetty", accent: "border-l-blue-400" },
    { name: "DeskCloak — Desktop Cover", getter: getDeskCloakArticles, route: "deskcloak", accent: "border-l-gray-400" },
  ];

  // ── macOS Files & Media ──
  const filesApps: { name: string; getter: () => { slug: string; title: string; description: string; date: string }[]; route: string; accent: string }[] = [
    { name: "Mediasmith — Media Converter", getter: getMediasmithArticles, route: "mediasmith", accent: "border-l-emerald-500" },
    { name: "Canopy — Disk Space Visualizer", getter: getCanopyArticles, route: "canopy", accent: "border-l-green-500" },
    { name: "Renym — Batch File Renamer", getter: getRenymArticles, route: "renym", accent: "border-l-violet-500" },
    { name: "Loupe — Archive & Folder Viewer", getter: getLoupeArticles, route: "loupe", accent: "border-l-cyan-400" },
    { name: "Optic — Screen OCR", getter: getOpticArticles, route: "optic", accent: "border-l-blue-500" },
  ];

  // ── macOS Developer & Data ──
  const devApps: { name: string; getter: () => { slug: string; title: string; description: string; date: string }[]; route: string; accent: string }[] = [
    { name: "Bellows — Developer Tools", getter: getBellowsArticles, route: "bellows", accent: "border-l-amber-400" },
    { name: "Tome — SQLite Browser", getter: getTomeArticles, route: "tome", accent: "border-l-purple-400" },
  ];

  const allMacApps = [...productivityApps, ...filesApps, ...devApps];

  for (const app of allMacApps) {
    const articles: ArticleCard[] = app.getter().map((a) => ({
      title: a.title,
      description: a.description,
      href: `/${app.route}/blog/en/${a.slug}`,
      date: a.date,
    }));
    if (articles.length > 0) {
      sections.push({ name: app.name, articles, accent: app.accent });
    }
  }

  // ── iOS — Stash last ──
  sections.push({
    name: l.vaultName,
    articles: vaultArticles,
    accent: "border-l-amber-500",
  });

  return sections;
}
