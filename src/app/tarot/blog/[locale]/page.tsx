import Link from "next/link";
import { notFound } from "next/navigation";
import BlogListClient from "@/components/BlogListClient";
import { getAllArticles, getAvailableLocales } from "../_data";
import { LOCALES, LOCALE_CODES, READ_MORE } from "@/lib/locales";
import type { Metadata } from "next";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.eduardbruch.aurumtarot";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Aurum Tarot Blog",
    description: "Tarot card meanings, spreads, and how-to guides.",
  };
}

export function generateStaticParams() {
  const available = getAvailableLocales();
  return available.map((locale) => ({ locale }));
}

export default async function TarotBlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!LOCALE_CODES.includes(locale as any)) notFound();

  const articles = getAllArticles(locale);
  if (articles.length === 0) notFound();

  const isRtl = locale === "ar" || locale === "he";
  const readMore = READ_MORE[locale] ?? READ_MORE.en;

  return (
    <main className="min-h-screen bg-[#050506] text-white" dir={isRtl ? "rtl" : undefined}>
      <section className="px-6 pt-36 pb-14 sm:pb-16 max-w-6xl mx-auto">
        <p className="font-mono text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-[#4A9EFF] mb-5">
          Aurum Tarot
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.02] tracking-tight max-w-4xl">
          Tarot Blog
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-2xl leading-relaxed">
          Tarot card meanings, spreads, and how-to guides.
        </p>
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-80"
          style={{ borderColor: "#4A9EFF66", background: "#4A9EFF14" }}
        >
          <svg viewBox="0 0 512 512" className="h-4 w-4 fill-current"><path d="M325.3 234.3L104.6 13.6c-5-5-13.7-1.5-13.7 5.7v473.4c0 7.2 8.7 10.7 13.7 5.7l220.7-220.7c3.1-3.1 3.1-8.2 0-11.4zM47.6 0C34.3 0 24 10.6 24 23.9v464.2c0 13.3 10.3 23.9 23.6 23.9 4.6 0 9.1-1.3 13.1-3.8L384 384 47.6 0z"/></svg>
          Get it on Google Play
        </a>
      </section>

      <div className="max-w-6xl mx-auto px-6"><div className="h-px bg-neutral-800" /></div>

      <section className="px-6 py-14 sm:py-16 max-w-6xl mx-auto">
        <BlogListClient
          articles={articles}
          locale={locale}
          basePath="/tarot/blog"
          locales={LOCALES}
          readMore={readMore}
          isRtl={isRtl}
        />
      </section>

      <section className="px-6 py-14 sm:py-16 max-w-6xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden px-8 py-14 sm:px-16 text-center"
          style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(40px) saturate(1.8)", WebkitBackdropFilter: "blur(40px) saturate(1.8)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 40px rgba(0,0,0,0.3)" }}
        >
          <div className="absolute inset-x-0 top-0 h-[45%] pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.03), transparent)" }} />
          <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[300px] h-[60px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(52,199,89,0.2), transparent 70%)" }} />
          <div className="relative">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">Aurum Tarot</h2>
            <p className="mt-4 text-lg text-neutral-300 max-w-lg mx-auto">
              Tarot card meanings, spreads, and how-to guides.
            </p>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl text-black px-10 py-4 text-base font-bold tracking-wide transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #34C759, #5dd87a)", boxShadow: "0 8px 28px rgba(52,199,89,0.2), inset 0 1px 0 rgba(255,255,255,0.25)" }}
            >
              Get Aurum Tarot
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 py-10 max-w-6xl mx-auto border-t border-neutral-800">
        <nav className="flex items-center justify-center gap-6 text-sm text-neutral-500" dir="ltr">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
          <span className="text-[#4A9EFF] font-medium">Blog</span>
        </nav>
      </footer>
    </main>
  );
}
