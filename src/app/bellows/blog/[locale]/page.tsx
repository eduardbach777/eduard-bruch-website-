import Link from "next/link";
import { notFound } from "next/navigation";
import BlogListClient from "@/components/BlogListClient";
import { getAllArticles, getAvailableLocales } from "../_data";
import { LOCALES, LOCALE_CODES, READ_MORE } from "@/lib/locales";
import type { Metadata } from "next";
import { buildStoreUrl, campaignFor } from "@/lib/appstore";

const APP_STORE_URL = buildStoreUrl({
  appSlug: "bellows",
  appId: "6805032839",
  campaign: campaignFor.blogIndex("bellows"),
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Bellows — Developer Tools Blog",
    description: "41 developer tools in one native Mac app — JSON, JWT, Base64, hashes, and more.",
  };
}

export function generateStaticParams() {
  const available = getAvailableLocales();
  return available.map((locale) => ({ locale }));
}

export default async function BellowsBlogPage({
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
        <p className="font-mono text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-[#FF9F0A] mb-5">
          Bellows — Developer Tools
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.02] tracking-tight max-w-4xl">
          Developer Tools
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-2xl leading-relaxed">
          41 developer tools in one native Mac app — JSON, JWT, Base64, hashes, and more.
        </p>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-80"
          style={{ borderColor: "#FF9F0A66", background: "#FF9F0A14" }}
        >
          <svg viewBox="0 0 384 512" className="h-4 w-4 fill-current"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 80.6c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.3zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
          View on the App Store
        </a>
      </section>

      <div className="max-w-6xl mx-auto px-6"><div className="h-px bg-neutral-800" /></div>

      <section className="px-6 py-14 sm:py-16 max-w-6xl mx-auto">
        <BlogListClient
          articles={articles}
          locale={locale}
          basePath="/bellows/blog"
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
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">Bellows</h2>
            <p className="mt-4 text-lg text-neutral-300 max-w-lg mx-auto">
              41 developer tools in one native Mac app — JSON, JWT, Base64, hashes, and more.
            </p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl text-black px-10 py-4 text-base font-bold tracking-wide transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #34C759, #5dd87a)", boxShadow: "0 8px 28px rgba(52,199,89,0.2), inset 0 1px 0 rgba(255,255,255,0.25)" }}
            >
              Get Bellows
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 py-10 max-w-6xl mx-auto border-t border-neutral-800">
        <nav className="flex items-center justify-center gap-6 text-sm text-neutral-500" dir="ltr">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
          <span className="text-[#FF9F0A] font-medium">Blog</span>
        </nav>
      </footer>
    </main>
  );
}
