import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticle, getLocaleArticle, getAllArticles, getAllSlugs, LOCALES } from "../../_data";
import type { Locale } from "../../_data";
import type { Metadata } from "next";

const APP_STORE_URL = "https://apps.apple.com/app/sounddial/id6772792641";

const labels: Record<string, { back: string; download: string; nextArticle: string }> = {
  en: { back: "Back to Blog", download: "Get SoundDial", nextArticle: "Next Article" },
  de: { back: "Zurück zum Blog", download: "SoundDial laden", nextArticle: "Nächster Artikel" },
  fr: { back: "Retour au Blog", download: "Obtenir SoundDial", nextArticle: "Article suivant" },
  es: { back: "Volver al Blog", download: "Obtener SoundDial", nextArticle: "Siguiente artículo" },
  pt: { back: "Voltar ao Blog", download: "Obter SoundDial", nextArticle: "Próximo artigo" },
  it: { back: "Torna al Blog", download: "Ottieni SoundDial", nextArticle: "Articolo successivo" },
  nl: { back: "Terug naar Blog", download: "Download SoundDial", nextArticle: "Volgend artikel" },
  ja: { back: "ブログに戻る", download: "SoundDialを入手", nextArticle: "次の記事" },
  ko: { back: "블로그로 돌아가기", download: "SoundDial 받기", nextArticle: "다음 기사" },
  zh: { back: "返回博客", download: "获取SoundDial", nextArticle: "下一篇文章" },
  "zh-Hant": { back: "返回部落格", download: "取得SoundDial", nextArticle: "下一篇文章" },
  ru: { back: "Назад к блогу", download: "Скачать SoundDial", nextArticle: "Следующая статья" },
  tr: { back: "Bloga Dön", download: "SoundDial İndir", nextArticle: "Sonraki makale" },
  pl: { back: "Powrót do Bloga", download: "Pobierz SoundDial", nextArticle: "Następny artykuł" },
  sv: { back: "Tillbaka till Bloggen", download: "Hämta SoundDial", nextArticle: "Nästa artikel" },
  da: { back: "Tilbage til Blog", download: "Hent SoundDial", nextArticle: "Næste artikel" },
  no: { back: "Tilbake til Bloggen", download: "Hent SoundDial", nextArticle: "Neste artikkel" },
  fi: { back: "Takaisin blogiin", download: "Lataa SoundDial", nextArticle: "Seuraava artikkeli" },
  ar: { back: "العودة إلى المدونة", download: "احصل على SoundDial", nextArticle: "المقال التالي" },
  he: { back: "חזרה לבלוג", download: "הורד SoundDial", nextArticle: "המאמר הבא" },
  th: { back: "กลับไปที่บล็อก", download: "รับ SoundDial", nextArticle: "บทความถัดไป" },
  ms: { back: "Kembali ke Blog", download: "Dapatkan SoundDial", nextArticle: "Artikel seterusnya" },
  vi: { back: "Quay lại Blog", download: "Tải SoundDial", nextArticle: "Bài viết tiếp theo" },
  uk: { back: "Назад до блогу", download: "Завантажити SoundDial", nextArticle: "Наступна стаття" },
  ca: { back: "Tornar al Blog", download: "Obtenir SoundDial", nextArticle: "Article següent" },
  el: { back: "Πίσω στο Blog", download: "Λήψη SoundDial", nextArticle: "Επόμενο άρθρο" },
  hr: { back: "Natrag na Blog", download: "Preuzmi SoundDial", nextArticle: "Sljedeći članak" },
  sk: { back: "Späť na Blog", download: "Stiahnuť SoundDial", nextArticle: "Ďalší článok" },
  cs: { back: "Zpět na Blog", download: "Stáhnout SoundDial", nextArticle: "Další článek" },
  ro: { back: "Înapoi la Blog", download: "Obține SoundDial", nextArticle: "Articolul următor" },
  hu: { back: "Vissza a Bloghoz", download: "SoundDial letöltése", nextArticle: "Következő cikk" },
  id: { back: "Kembali ke Blog", download: "Dapatkan SoundDial", nextArticle: "Artikel berikutnya" },
  hi: { back: "ब्लॉग पर वापस", download: "SoundDial प्राप्त करें", nextArticle: "अगला लेख" },
};

const VALID_LOCALES = LOCALES.map((l) => l.code);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticle(locale as Locale, slug);

  if (!article) return { title: "Article Not Found" };

  const alternates: Record<string, string> = {};
  for (const loc of LOCALES) {
    const locArticle = getLocaleArticle(loc.code, slug);
    if (locArticle) {
      alternates[loc.code] = `/sounddial/blog/${loc.code}/${slug}`;
    }
  }

  return {
    title: `${article.title} — SoundDial Blog`,
    description: article.description,
    openGraph: { title: article.title, description: article.description, type: "article", publishedTime: article.date },
    alternates: { canonical: `/sounddial/blog/${locale}/${slug}`, languages: alternates },
  };
}

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  const slugs = getAllSlugs();

  for (const loc of LOCALES) {
    for (const slug of slugs) {
      const article = getLocaleArticle(loc.code, slug);
      if (article) {
        params.push({ locale: loc.code, slug });
      }
    }
  }

  return params;
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!VALID_LOCALES.includes(locale as Locale)) notFound();

  const article = getArticle(locale as Locale, slug);
  if (!article) notFound();

  const l = labels[locale] ?? labels.en;
  const isRtl = locale === "ar" || locale === "he";

  const availableLocales = LOCALES.filter((loc) => getLocaleArticle(loc.code, slug));

  const allArticles = getAllArticles(locale as Locale);
  const currentIndex = allArticles.findIndex((a) => a.slug === slug);
  const nextArticle = allArticles[(currentIndex + 1) % allArticles.length];

  return (
    <main className="min-h-screen bg-neutral-950 text-white" dir={isRtl ? "rtl" : undefined}>
      <div className="px-6 pt-36 max-w-4xl mx-auto">
        <Link
          href={`/sounddial/blog/${locale}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition group"
        >
          <svg
            className={`w-4 h-4 transition group-hover:-translate-x-1 ${isRtl ? "rotate-180" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          {l.back}
        </Link>
      </div>

      {availableLocales.length > 1 && (
        <div className="px-6 pt-6 max-w-4xl mx-auto">
          <nav className="flex flex-wrap gap-2" dir="ltr">
            {availableLocales.map((loc) => (
              <Link
                key={loc.code}
                href={`/sounddial/blog/${loc.code}/${slug}`}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  loc.code === locale
                    ? "bg-purple-500 text-white"
                    : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white"
                }`}
              >
                {loc.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <header className="px-6 pt-12 pb-10 sm:pt-16 sm:pb-14 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-purple-400">
          <time>{article.date}</time>
          {article.readTime && (
            <>
              <span className="text-neutral-700">·</span>
              <span className="text-neutral-500">{article.readTime}</span>
            </>
          )}
        </div>
        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
          {article.title}
        </h1>
        <p className="mt-6 text-xl text-neutral-300 font-light leading-relaxed max-w-2xl">
          {article.description}
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-6"><div className="h-px bg-neutral-800" /></div>

      <article className="px-6 py-12 sm:py-16 max-w-4xl mx-auto">
        <div
          className={[
            "max-w-3xl",
            "text-[17px] leading-[1.8]",
            "[&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:leading-tight [&_h2]:tracking-tight",
            "[&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:leading-snug",
            "[&_p]:text-neutral-200 [&_p]:mb-5",
            "[&_ul]:space-y-2 [&_ul]:mb-6 [&_ul]:text-neutral-200 [&_ul]:list-disc [&_ul]:pl-5",
            "[&_ol]:space-y-2 [&_ol]:mb-6 [&_ol]:text-neutral-200 [&_ol]:list-decimal [&_ol]:pl-5",
            "[&_li]:pl-1 [&_li]:leading-relaxed",
            "[&_a]:text-purple-400 [&_a]:hover:text-purple-300 [&_a]:underline [&_a]:underline-offset-2",
            "[&_strong]:text-white [&_strong]:font-semibold",
            "[&_em]:text-neutral-100 [&_em]:italic",
            "[&_code]:text-[0.9em] [&_code]:bg-white/[0.08] [&_code]:text-white [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded",
            "[&_blockquote]:border-l-4 [&_blockquote]:border-purple-500 [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-neutral-300 [&_blockquote]:my-6",
            "[&_table]:w-full [&_table]:border-collapse [&_table]:mb-6 [&_table]:text-sm",
            "[&_th]:border [&_th]:border-neutral-700 [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:text-white [&_th]:bg-neutral-800/80 [&_th]:font-semibold",
            "[&_td]:border [&_td]:border-neutral-700 [&_td]:px-4 [&_td]:py-3 [&_td]:text-neutral-200",
          ].join(" ")}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>

      {nextArticle && nextArticle.slug !== slug && (
        <section className="px-6 pb-8 max-w-4xl mx-auto">
          <Link
            href={`/sounddial/blog/${locale}/${nextArticle.slug}`}
            className="group block rounded-2xl border border-neutral-800 bg-neutral-900/50 p-7 transition-all hover:border-purple-500/60 hover:bg-neutral-900 hover:shadow-xl hover:shadow-purple-500/5"
          >
            <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">{l.nextArticle}</span>
            <h3 className="mt-2 text-xl font-bold text-white leading-snug group-hover:text-purple-400 transition-colors">
              {nextArticle.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{nextArticle.description}</p>
          </Link>
        </section>
      )}

      <section className="px-6 py-16 max-w-4xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-purple-600/20 to-purple-900/20 border border-purple-500/20 px-8 py-12 sm:px-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">SoundDial</h2>
          <p className="mt-4 text-lg text-neutral-300 max-w-md mx-auto">
            Per-app volume control for macOS. €14.99 one-time purchase.
          </p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-purple-500 text-white px-10 py-4 text-base font-bold uppercase tracking-wider transition hover:bg-purple-400 shadow-lg shadow-purple-500/30"
          >
            {l.download}
          </a>
        </div>
      </section>

      <footer className="px-6 py-10 max-w-4xl mx-auto border-t border-neutral-800">
        <nav className="flex items-center justify-center gap-6 text-sm text-neutral-500" dir="ltr">
          <Link href={`/sounddial/blog/${locale}`} className="hover:text-white transition">Blog</Link>
          <Link href="/sounddial/privacy" className="hover:text-white transition">Privacy</Link>
          <Link href="/sounddial/terms" className="hover:text-white transition">Terms</Link>
        </nav>
      </footer>
    </main>
  );
}
