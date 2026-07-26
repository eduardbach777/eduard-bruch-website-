import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import BlogListClient from "@/components/BlogListClient";
import {
  getAllArticles,
  getLocaleConfig,
  getLocaleUi,
  LOCALES,
} from "../_data";
import type { Locale } from "../_data";
import type { Metadata } from "next";
import { getAppScreenshot, getAppStoreUrl } from "../_data/store";

const VALID_LOCALES = LOCALES.map((l) => l.code);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = getLocaleUi(locale as Locale);
  return {
    title: `${l.tagline} Blog - ${l.indexHeading}`,
    description: l.indexSubtitle,
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

  if (!VALID_LOCALES.includes(locale as Locale)) {
    notFound();
  }

  let articles = getAllArticles(locale as Locale);
  if (articles.length === 0) {
    articles = getAllArticles("en");
  }

  const typedLocale = locale as Locale;
  const l = getLocaleUi(typedLocale);
  const isRtl = getLocaleConfig(typedLocale).dir === "rtl";
  const appStoreUrl = getAppStoreUrl(typedLocale);
  const appScreenshot = getAppScreenshot(typedLocale);

  return (
    <main
      className="min-h-screen bg-[#050506] text-white"
      dir={isRtl ? "rtl" : undefined}
      lang={locale}
    >
      {/* Hero */}
      <section className="px-6 pt-36 pb-14 sm:pb-16 max-w-6xl mx-auto">
        <p className="font-mono text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-[#d4ad5e] mb-5">
          {l.tagline}
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.02] tracking-tight max-w-4xl whitespace-pre-line">
          {l.indexHeading}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-2xl leading-relaxed">
          {l.indexSubtitle}
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-neutral-800" />
      </div>

      {/* Article Grid */}
      <section className="px-6 py-14 sm:py-16 max-w-6xl mx-auto">
        <BlogListClient
          articles={articles}
          locale={locale}
          basePath="/vault/blog"
          locales={LOCALES.map((loc) => ({ code: loc.code, label: loc.label }))}
          readMore={l.readMore}
          isRtl={isRtl}
        />
      </section>

      {/* CTA */}
      <section className="px-6 py-14 sm:py-16 max-w-6xl mx-auto text-center">
        <div className="rounded-3xl border border-[#d4ad5e]/25 bg-gradient-to-br from-[#d4ad5e]/[0.12] to-[#d4ad5e]/[0.03] px-8 py-14 sm:px-16">
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={l.indexCtaButton}
          >
            <Image
              src={appScreenshot}
              alt={l.screenshotAlt}
              width={1290}
              height={2796}
              className="mx-auto mb-8 h-72 w-auto rounded-2xl border border-white/10 object-cover object-top shadow-2xl"
            />
          </a>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">
            {l.indexCtaTitle}
          </h2>
          <p className="mt-4 text-lg text-neutral-300 max-w-lg mx-auto">
            {l.indexCtaDescription}
          </p>
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-[#d4ad5e] text-black px-10 py-4 text-base font-bold uppercase tracking-wider transition hover:bg-[#e0bd72] shadow-lg shadow-[#d4ad5e]/25"
          >
            {l.indexCtaButton}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 max-w-6xl mx-auto border-t border-neutral-800">
        <nav className="flex items-center justify-center gap-6 text-sm text-neutral-500" dir="ltr">
          <Link href="/vault/privacy" className="hover:text-white transition">
            Privacy
          </Link>
          <Link href="/vault/terms" className="hover:text-white transition">
            Terms
          </Link>
          <span className="text-[#d4ad5e] font-medium">Blog</span>
        </nav>
      </footer>
    </main>
  );
}
