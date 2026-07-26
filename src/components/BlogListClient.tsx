"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime?: string;
};

type LocaleOpt = { code: string; label: string };

// Localized UI strings for the controls (search placeholder + empty state).
const UI: Record<string, { search: string; empty: string }> = {
  en: { search: "Search articles…", empty: "No matching articles." },
  de: { search: "Artikel suchen…", empty: "Keine passenden Artikel." },
  fr: { search: "Rechercher des articles…", empty: "Aucun article correspondant." },
  es: { search: "Buscar artículos…", empty: "No hay artículos coincidentes." },
  pt: { search: "Pesquisar artigos…", empty: "Nenhum artigo correspondente." },
  it: { search: "Cerca articoli…", empty: "Nessun articolo corrispondente." },
  nl: { search: "Artikelen zoeken…", empty: "Geen overeenkomende artikelen." },
  ja: { search: "記事を検索…", empty: "該当する記事がありません。" },
  ko: { search: "기사 검색…", empty: "일치하는 기사가 없습니다." },
  zh: { search: "搜索文章…", empty: "没有匹配的文章。" },
  "zh-Hant": { search: "搜尋文章…", empty: "沒有符合的文章。" },
  ru: { search: "Поиск статей…", empty: "Нет подходящих статей." },
  tr: { search: "Makale ara…", empty: "Eşleşen makale yok." },
  pl: { search: "Szukaj artykułów…", empty: "Brak pasujących artykułów." },
  sv: { search: "Sök artiklar…", empty: "Inga matchande artiklar." },
  da: { search: "Søg artikler…", empty: "Ingen matchende artikler." },
  no: { search: "Søk artikler…", empty: "Ingen samsvarende artikler." },
  fi: { search: "Hae artikkeleita…", empty: "Ei osumia." },
  ar: { search: "ابحث في المقالات…", empty: "لا توجد مقالات مطابقة." },
  he: { search: "חיפוש מאמרים…", empty: "לא נמצאו מאמרים תואמים." },
  th: { search: "ค้นหาบทความ…", empty: "ไม่พบบทความที่ตรงกัน" },
  ms: { search: "Cari artikel…", empty: "Tiada artikel yang sepadan." },
  vi: { search: "Tìm bài viết…", empty: "Không có bài viết phù hợp." },
  uk: { search: "Пошук статей…", empty: "Немає відповідних статей." },
  ca: { search: "Cerca articles…", empty: "Cap article coincident." },
  el: { search: "Αναζήτηση άρθρων…", empty: "Δεν βρέθηκαν άρθρα." },
  hr: { search: "Pretraži članke…", empty: "Nema podudarnih članaka." },
  sk: { search: "Hľadať články…", empty: "Žiadne zodpovedajúce články." },
  cs: { search: "Hledat články…", empty: "Žádné odpovídající články." },
  ro: { search: "Caută articole…", empty: "Niciun articol corespunzător." },
  hu: { search: "Cikkek keresése…", empty: "Nincs találat." },
  id: { search: "Cari artikel…", empty: "Tidak ada artikel yang cocok." },
  hi: { search: "लेख खोजें…", empty: "कोई मिलान लेख नहीं।" },
};

const arrow = (isRtl: boolean) => (isRtl ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7");

export default function BlogListClient({
  articles,
  locale,
  basePath,
  locales,
  readMore,
  isRtl = false,
}: {
  articles: Article[];
  locale: string;
  basePath: string;
  locales: LocaleOpt[];
  readMore: string;
  isRtl?: boolean;
}) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const t = UI[locale] ?? UI.en;

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return articles;
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(query) ||
        a.description.toLowerCase().includes(query),
    );
  }, [q, articles]);

  const searching = q.trim().length > 0;
  const featured = !searching ? filtered[0] : undefined;
  const grid = featured ? filtered.slice(1) : filtered;

  return (
    <div>
      {/* Controls: search + native language dropdown */}
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" dir={isRtl ? "rtl" : "ltr"}>
        <label className="relative flex-1 sm:max-w-sm">
          <svg className={`pointer-events-none absolute top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500 ${isRtl ? "right-4" : "left-4"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="11" cy="11" r="7" /><path strokeLinecap="round" d="M21 21l-4.3-4.3" />
          </svg>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t.search}
            className={`w-full rounded-full border border-neutral-800 bg-white/[0.03] py-2.5 text-sm text-white placeholder:text-neutral-500 outline-none transition-colors focus:border-[#d4ad5e]/60 ${isRtl ? "pr-11 pl-4" : "pl-11 pr-4"}`}
          />
        </label>

        <div className="relative shrink-0">
          <svg className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#d4ad5e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" /></svg>
          <select
            aria-label="Language"
            value={locale}
            onChange={(e) => router.push(`${basePath}/${e.target.value}`)}
            className="cursor-pointer appearance-none rounded-full border border-neutral-800 bg-white/[0.03] py-2.5 pl-10 pr-9 text-sm text-neutral-200 outline-none transition-colors hover:border-[#d4ad5e]/50 focus:border-[#d4ad5e]/60"
            dir="ltr"
          >
            {locales.map((loc) => (
              <option key={loc.code} value={loc.code} className="bg-[#0d0d0f] text-white">
                {loc.label}
              </option>
            ))}
          </select>
          <svg className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-neutral-500">{t.empty}</p>
      )}

      {featured && (
        <Link
          href={`${basePath}/${locale}/${featured.slug}`}
          className="group mb-6 block rounded-3xl border border-neutral-800 bg-gradient-to-br from-white/[0.04] to-transparent p-8 sm:p-10 transition-all hover:border-[#d4ad5e]/50 hover:from-[#d4ad5e]/[0.06]"
        >
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-[#d4ad5e]">
            <span>Latest</span>
            <span className="text-neutral-700">·</span>
            <time className="text-neutral-500">{featured.date}</time>
            {featured.readTime && <><span className="text-neutral-700">·</span><span className="text-neutral-500">{featured.readTime}</span></>}
          </div>
          <h2 className="font-serif mt-4 max-w-3xl text-3xl sm:text-4xl font-semibold leading-[1.1] text-white transition-colors group-hover:text-[#d4ad5e]">
            {featured.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-400">
            {featured.description}
          </p>
          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#d4ad5e] transition-all group-hover:gap-3">
            {readMore}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={arrow(isRtl)} /></svg>
          </span>
        </Link>
      )}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {grid.map((article) => (
          <Link
            key={article.slug}
            href={`${basePath}/${locale}/${article.slug}`}
            className="group flex flex-col rounded-2xl border border-neutral-800 bg-white/[0.02] p-6 transition-all hover:border-[#d4ad5e]/50 hover:bg-white/[0.04]"
          >
            <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-wider text-neutral-500">
              <time>{article.date}</time>
              {article.readTime && <><span className="text-neutral-700">·</span><span>{article.readTime}</span></>}
            </div>
            <h2 className="font-serif mt-3 text-lg font-semibold leading-snug text-white transition-colors group-hover:text-[#d4ad5e]">
              {article.title}
            </h2>
            <p className="mt-2.5 flex-1 text-sm leading-relaxed text-neutral-400 line-clamp-3">
              {article.description}
            </p>
            <span className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-[#d4ad5e] transition-all group-hover:gap-2">
              {readMore}
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={arrow(isRtl)} /></svg>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
