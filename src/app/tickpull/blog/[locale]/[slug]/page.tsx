import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticle, getAllArticles, getAllSlugs, getAvailableLocales } from "../../_data";
import { LOCALE_CODES, STORE_CC, BACK_LABEL, NEXT_ARTICLE } from "@/lib/locales";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticle(locale, slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} — Tickpull Blog`,
    description: article.description,
    openGraph: { title: article.title, description: article.description, type: "article", publishedTime: article.date },
    alternates: { canonical: `/tickpull/blog/en/${slug}` },
  };
}

export function generateStaticParams() {
  const slugs = getAllSlugs();
  const locales = getAvailableLocales();
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export default async function TickpullArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!LOCALE_CODES.includes(locale as any)) notFound();

  const article = getArticle(locale, slug);
  if (!article) notFound();

  const cc = STORE_CC[locale] ?? "us";
  const storeUrl = `https://apps.apple.com/${cc}/app/tickpull/id6806640763`;
  const isRtl = locale === "ar" || locale === "he";

  const content = article.content.replace(
    /https:\/\/apps\.apple\.com\/(?:[a-z]{2}(?:-[A-Za-z]+)?\/)?app\/(?:tickpull\/)?id6806640763/g,
    storeUrl,
  );

  const allArticles = getAllArticles(locale);
  const currentIndex = allArticles.findIndex((a) => a.slug === slug);
  const related = [1, 2, 3]
    .map((k) => allArticles[(currentIndex + k) % allArticles.length])
    .filter((a, i, arr) => a && a.slug !== slug && arr.findIndex((x) => x.slug === a.slug) === i);

  const backLabel = BACK_LABEL[locale] ?? BACK_LABEL.en;
  const nextLabel = NEXT_ARTICLE[locale] ?? NEXT_ARTICLE.en;

  return (
    <main className="min-h-screen bg-[#050506] text-white" dir={isRtl ? "rtl" : undefined}>
      <div className="px-6 pt-36 max-w-4xl mx-auto">
        <Link
          href={`/tickpull/blog/${locale}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition group"
        >
          <svg className={`w-4 h-4 transition ${isRtl ? "group-hover:translate-x-1 rotate-180" : "group-hover:-translate-x-1"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          {backLabel}
        </Link>
      </div>

      <header className="px-6 pt-12 pb-10 sm:pt-16 sm:pb-14 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-[#FF6B6B]">
          <time>{article.date}</time>
          {article.readTime && (
            <>
              <span className="text-neutral-700">·</span>
              <span className="text-neutral-500">{article.readTime}</span>
            </>
          )}
        </div>
        <h1 className="font-serif mt-4 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
          {article.title}
        </h1>
        <p className="mt-6 text-xl text-neutral-300 font-light leading-relaxed max-w-2xl">
          {article.description}
        </p>
      </header>

      <div className="px-6 max-w-4xl mx-auto mb-6">
        <a
          href={storeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block rounded-2xl overflow-hidden transition-all hover:scale-[1.005]"
          style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(40px) saturate(1.8)", WebkitBackdropFilter: "blur(40px) saturate(1.8)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 2px 16px rgba(0,0,0,0.3)" }}
        >
          <div className="absolute inset-x-0 top-0 h-1/2 pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.04), transparent)" }} />
          <div className="relative flex items-center justify-between gap-4 px-6 py-5 sm:px-8">
            <div>
              <span className="text-[15px] font-semibold text-white">Tickpull</span>
              <span className="block mt-1 text-[13px] text-neutral-400">Set a timer by dragging — no clicks, no typing, just one gesture.</span>
            </div>
            <span
              className="hidden sm:inline-flex shrink-0 items-center rounded-xl px-5 py-2.5 text-xs font-bold tracking-wide text-black transition-transform group-hover:scale-[1.03]"
              style={{ background: "linear-gradient(135deg, #34C759, #5dd87a)", boxShadow: "0 4px 16px rgba(52,199,89,0.2), inset 0 1px 0 rgba(255,255,255,0.2)" }}
            >
              Get Tickpull
            </span>
          </div>
        </a>
      </div>

      <article className="px-6 py-12 sm:py-16 max-w-4xl mx-auto">
        <div
          className={[
            "max-w-3xl",
            "text-[17px] leading-[1.8]",
            "[&_h2]:font-serif [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:leading-tight [&_h2]:tracking-tight",
            "[&_h3]:font-serif [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:leading-snug",
            "[&_p]:text-neutral-200 [&_p]:mb-5",
            "[&_ul]:space-y-2 [&_ul]:mb-6 [&_ul]:text-neutral-200 [&_ul]:list-disc [&_ul]:pl-5",
            "[&_ol]:space-y-2 [&_ol]:mb-6 [&_ol]:text-neutral-200 [&_ol]:list-decimal [&_ol]:pl-5",
            "[&_li]:pl-1 [&_li]:leading-relaxed",
            "[&_a]:text-[#FF6B6B] [&_a]:hover:text-[#ff8989] [&_a]:underline [&_a]:underline-offset-2",
            "[&_strong]:text-white [&_strong]:font-semibold",
            "[&_em]:text-neutral-100 [&_em]:italic",
            "[&_code]:text-[0.9em] [&_code]:bg-white/[0.08] [&_code]:text-white [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded",
            "[&_blockquote]:border-l-4 [&_blockquote]:border-[#FF6B6B] [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-neutral-300 [&_blockquote]:my-6",
          ].join(" ")}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>

      {related.length > 0 && (
        <section className="px-6 pb-8 max-w-4xl mx-auto">
          <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">{nextLabel}</span>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {related.map((a) => (
              <Link
                key={a.slug}
                href={`/tickpull/blog/${locale}/${a.slug}`}
                className="group block rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 transition-all hover:border-[#FF6B6B]/60 hover:bg-neutral-900 hover:shadow-xl hover:shadow-[#FF6B6B]/5"
              >
                <h3 className="font-serif text-lg font-bold text-white leading-snug group-hover:text-[#FF6B6B] transition-colors">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed line-clamp-3">{a.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="px-6 py-20 max-w-4xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden px-8 py-14 sm:px-14 sm:py-16 text-center"
          style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(40px) saturate(1.8)", WebkitBackdropFilter: "blur(40px) saturate(1.8)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 40px rgba(0,0,0,0.3)" }}
        >
          <div className="absolute inset-x-0 top-0 h-[45%] pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.03), transparent)" }} />
          <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[300px] h-[60px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(52,199,89,0.2), transparent 70%)" }} />
          <div className="relative">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">Tickpull</h2>
            <p className="mt-4 text-lg text-neutral-400 max-w-md mx-auto leading-relaxed">
              Set a timer by dragging — no clicks, no typing, just one gesture.
            </p>
            <a
              href={storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl text-black px-8 py-3.5 text-sm font-bold tracking-wide transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #34C759, #5dd87a)", boxShadow: "0 8px 28px rgba(52,199,89,0.2), inset 0 1px 0 rgba(255,255,255,0.25)" }}
            >
              Get Tickpull on the Mac App Store
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 py-10 max-w-4xl mx-auto border-t border-neutral-800">
        <nav className="flex items-center justify-center gap-6 text-sm text-neutral-500" dir="ltr">
          <Link href={`/tickpull/blog/${locale}`} className="hover:text-white transition">Blog</Link>
          <Link href="/tickpull/privacy" className="hover:text-white transition">Privacy</Link>
          <Link href="/tickpull/terms" className="hover:text-white transition">Terms</Link>
        </nav>
      </footer>
    </main>
  );
}
