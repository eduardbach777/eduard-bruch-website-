import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticle, getAllArticles, getAllSlugs, LOCALES } from "../../_data";
import type { Locale } from "../../_data";
import type { Metadata } from "next";

// Placeholder until the app is live — swap to the App Store URL on release.
const APP_URL = "/tarot";
const SITE = "https://eduardbruch.com";

const VALID_LOCALES = LOCALES.map((l) => l.code);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticle(locale as Locale, slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} — Aurum Tarot`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
    },
    alternates: { canonical: `/tarot/blog/${locale}/${slug}` },
  };
}

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const loc of LOCALES) {
    for (const slug of getAllSlugs()) {
      params.push({ locale: loc.code, slug });
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

  const allArticles = getAllArticles(locale as Locale);
  const currentIndex = allArticles.findIndex((a) => a.slug === slug);
  const nextArticle = allArticles[(currentIndex + 1) % allArticles.length];

  // Structured data — helps Google rich results + AI/GEO answer engines.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: locale,
    author: { "@type": "Organization", name: "Aurum Tarot" },
    publisher: { "@type": "Organization", name: "Eduard Bruch" },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}/tarot/blog/${locale}/${slug}` },
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="px-6 pt-36 max-w-4xl mx-auto">
        <Link
          href={`/tarot/blog/${locale}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition group"
        >
          <svg className="w-4 h-4 transition group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>
      </div>

      <header className="px-6 pt-12 pb-10 sm:pt-16 sm:pb-14 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-amber-400">
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
            "[&_a]:text-amber-400 [&_a]:hover:text-amber-300 [&_a]:underline [&_a]:underline-offset-2",
            "[&_strong]:text-white [&_strong]:font-semibold",
            "[&_em]:text-neutral-100 [&_em]:italic",
            "[&_blockquote]:border-l-4 [&_blockquote]:border-amber-500 [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-neutral-300 [&_blockquote]:my-6",
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
            href={`/tarot/blog/${locale}/${nextArticle.slug}`}
            className="group block rounded-2xl border border-neutral-800 bg-neutral-900/50 p-7 transition-all hover:border-amber-500/60 hover:bg-neutral-900"
          >
            <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">Next Article</span>
            <h3 className="mt-2 text-xl font-bold text-white leading-snug group-hover:text-amber-400 transition-colors">
              {nextArticle.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{nextArticle.description}</p>
          </Link>
        </section>
      )}

      <section className="px-6 py-16 max-w-4xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-amber-600/20 to-amber-900/20 border border-amber-500/20 px-8 py-12 sm:px-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">Coming soon</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">Aurum Tarot</h2>
          <p className="mt-4 text-lg text-neutral-300 max-w-md mx-auto">
            Stop guessing what your cards mean. Aurum&apos;s AI reads the exact cards you draw, in the
            context of your question — like having a tarot reader in your pocket.
          </p>
          <Link
            href={APP_URL}
            className="mt-8 inline-block rounded-full bg-amber-500 text-neutral-950 px-10 py-4 text-base font-bold uppercase tracking-wider transition hover:bg-amber-400 shadow-lg shadow-amber-500/30"
          >
            Get Early Access
          </Link>
        </div>
      </section>

      <footer className="px-6 py-10 max-w-4xl mx-auto border-t border-neutral-800">
        <nav className="flex items-center justify-center gap-6 text-sm text-neutral-500">
          <Link href={`/tarot/blog/${locale}`} className="hover:text-white transition">Blog</Link>
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </nav>
      </footer>
    </main>
  );
}
