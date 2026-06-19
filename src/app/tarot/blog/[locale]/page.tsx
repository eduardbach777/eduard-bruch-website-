import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllArticles, LOCALES } from "../_data";
import type { Locale } from "../_data";
import type { Metadata } from "next";

// Placeholder until the app is live — swap to the App Store URL on release.
const APP_URL = "/tarot";

const TAGLINE = "Aurum Tarot — Learn the Cards";
const HEADING = "Understand Every\nCard You Draw";
const SUBTITLE =
  "In-depth, beginner-friendly tarot guides — card meanings, spreads, and how to read for yourself, written to actually answer the question you came with.";

const VALID_LOCALES = LOCALES.map((l) => l.code);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  await params;
  return {
    title: "Tarot Guides & Card Meanings — Aurum Tarot Blog",
    description: SUBTITLE,
    openGraph: { title: "Tarot Guides & Card Meanings", description: SUBTITLE, type: "website" },
  };
}

export function generateStaticParams() {
  return LOCALES.map((l) => ({ locale: l.code }));
}

export default async function LocaleBlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!VALID_LOCALES.includes(locale as Locale)) notFound();

  const articles = getAllArticles(locale as Locale);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="px-6 pt-36 pb-16 sm:pb-20 max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-400 mb-4">{TAGLINE}</p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight max-w-4xl whitespace-pre-line">
          {HEADING}
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-neutral-300 font-light max-w-2xl leading-relaxed">
          {SUBTITLE}
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6"><div className="h-px bg-neutral-800" /></div>

      <section className="px-6 py-16 sm:py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/tarot/blog/${locale}/${article.slug}`}
              className="group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-7 transition-all hover:border-amber-500/60 hover:bg-neutral-900 hover:shadow-xl hover:shadow-amber-500/5 flex flex-col"
            >
              <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-neutral-500">
                <time>{article.date}</time>
                {article.readTime && (
                  <>
                    <span className="text-neutral-700">·</span>
                    <span>{article.readTime}</span>
                  </>
                )}
              </div>
              <h2 className="mt-3 text-xl font-bold text-white leading-snug group-hover:text-amber-400 transition-colors">
                {article.title}
              </h2>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed flex-1">{article.description}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-amber-400 group-hover:gap-2 transition-all">
                Read more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20 max-w-6xl mx-auto text-center">
        <div className="rounded-3xl bg-gradient-to-br from-amber-600/20 to-amber-900/20 border border-amber-500/20 px-8 py-14 sm:px-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">Coming soon</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">Aurum Tarot</h2>
          <p className="mt-4 text-lg text-neutral-300 max-w-xl mx-auto">
            A tarot app with an AI reader that interprets the exact cards you draw — in the context of the
            question you actually asked. Hand-painted deck, daily card, and personal readings.
          </p>
          <Link
            href={APP_URL}
            className="mt-8 inline-block rounded-full bg-amber-500 text-neutral-950 px-10 py-4 text-base font-bold uppercase tracking-wider transition hover:bg-amber-400 shadow-lg shadow-amber-500/30"
          >
            Get Early Access
          </Link>
        </div>
      </section>

      <footer className="px-6 py-10 max-w-6xl mx-auto border-t border-neutral-800">
        <nav className="flex items-center justify-center gap-6 text-sm text-neutral-500">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
          <span className="text-amber-400 font-medium">Tarot Blog</span>
        </nav>
      </footer>
    </main>
  );
}
