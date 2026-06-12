import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getArticle,
  getAllSlugs,
  getLocaleConfig,
  getLocaleUi,
  LOCALES,
} from "../../_data";
import type { Locale } from "../../_data";
import type { Metadata } from "next";
import { getAppScreenshot, getAppStoreUrl } from "../../_data/store";

const VALID_LOCALES = LOCALES.map((l) => l.code);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const typedLocale = locale as Locale;
  const article = getArticle(typedLocale, slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  const localeUi = getLocaleUi(typedLocale);
  const alternates: Record<string, string> = {};
  for (const loc of LOCALES) {
    const locArticle = getArticle(loc.code, slug);
    if (locArticle) {
      alternates[loc.code] = `/vault/blog/${loc.code}/${slug}`;
    }
  }

  const canonical = `https://www.eduardbruch.com/vault/blog/${locale}/${slug}`;

  return {
    title: `${article.title} — Stash Blog`,
    description: article.description,
    alternates: {
      canonical,
      languages: alternates,
    },
    openGraph: {
      type: "article",
      url: canonical,
      title: article.title,
      description: article.description,
      publishedTime: article.date,
      images: [
        {
          url: getAppScreenshot(typedLocale),
          alt: localeUi.screenshotAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [getAppScreenshot(typedLocale)],
    },
    keywords: article.primaryIntent
      ? [article.primaryIntent, article.cluster ?? "private file vault", "Stash"]
      : undefined,
  };
}

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  const slugs = getAllSlugs();

  for (const loc of LOCALES) {
    for (const slug of slugs) {
      const article = getArticle(loc.code, slug);
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

  if (!VALID_LOCALES.includes(locale as Locale)) {
    notFound();
  }

  const article = getArticle(locale as Locale, slug);
  if (!article) {
    notFound();
  }

  const typedLocale = locale as Locale;
  const l = getLocaleUi(typedLocale);
  const isRtl = getLocaleConfig(typedLocale).dir === "rtl";
  const appStoreUrl = getAppStoreUrl(typedLocale);
  const appScreenshot = getAppScreenshot(typedLocale);

  const availableLocales = LOCALES.filter((loc) => getArticle(loc.code, slug));
  const relatedArticles = (article.relatedSlugs ?? [])
    .map((relatedSlug) => getArticle(typedLocale, relatedSlug))
    .filter((related): related is NonNullable<typeof related> => Boolean(related));
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: locale,
    mainEntityOfPage: `https://www.eduardbruch.com/vault/blog/${locale}/${slug}`,
    image: `https://www.eduardbruch.com${appScreenshot}`,
    author: {
      "@type": "Person",
      name: "Eduard Bruch",
      url: "https://www.eduardbruch.com",
    },
    publisher: {
      "@type": "Person",
      name: "Eduard Bruch",
    },
  };
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Stash: Secret File Vault",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "iOS",
    downloadUrl: appStoreUrl,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Stash Blog",
        item: `https://www.eduardbruch.com/vault/blog/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: article.title,
        item: `https://www.eduardbruch.com/vault/blog/${locale}/${slug}`,
      },
    ],
  };
  const faqSchema = article.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <main
      className="min-h-screen bg-neutral-950 text-white"
      dir={isRtl ? "rtl" : undefined}
      lang={locale}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
      {/* Top Bar */}
      <div className="px-6 pt-10 sm:pt-16 max-w-4xl mx-auto">
        <Link
          href={`/vault/blog/${locale}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition group"
        >
          <svg
            className={`w-4 h-4 transition group-hover:-translate-x-1 ${isRtl ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          {l.back}
        </Link>
      </div>

      {/* Language Switcher */}
      <div className="px-6 pt-6 max-w-4xl mx-auto">
        <nav className="flex flex-wrap gap-2" dir="ltr">
          {availableLocales.map((loc) => (
            <Link
              key={loc.code}
              href={`/vault/blog/${loc.code}/${slug}`}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                loc.code === locale
                  ? "bg-indigo-500 text-white"
                  : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white"
              }`}
            >
              {loc.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Article Header */}
      <header className="px-6 pt-12 pb-10 sm:pt-16 sm:pb-14 max-w-4xl mx-auto">
        <time className="text-sm font-medium uppercase tracking-wider text-indigo-400">
          {article.date}
        </time>
        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
          {article.title}
        </h1>
        <p className="mt-6 text-xl text-neutral-300 font-light leading-relaxed max-w-2xl">
          {article.description}
        </p>
      </header>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-neutral-800" />
      </div>

      {/* Linked localized app image */}
      <section className="px-6 pt-12 sm:pt-16 max-w-4xl mx-auto">
        <a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900"
          aria-label={l.download}
        >
          <Image
            src={appScreenshot}
            alt={l.screenshotAlt}
            width={1290}
            height={2796}
            priority
            className="mx-auto h-auto max-h-[720px] w-auto transition duration-500 group-hover:scale-[1.01]"
          />
        </a>
      </section>

      {/* Article Content */}
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
            "[&_a]:text-indigo-400 [&_a]:hover:text-indigo-300 [&_a]:underline [&_a]:underline-offset-2",
            "[&_strong]:text-white [&_strong]:font-semibold",
            "[&_table]:w-full [&_table]:border-collapse [&_table]:mb-6 [&_table]:text-sm",
            "[&_th]:border [&_th]:border-neutral-700 [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:text-white [&_th]:bg-neutral-800/80 [&_th]:font-semibold",
            "[&_td]:border [&_td]:border-neutral-700 [&_td]:px-4 [&_td]:py-3 [&_td]:text-neutral-200",
            "[&_blockquote]:border-l-4 [&_blockquote]:border-indigo-500 [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-neutral-300 [&_blockquote]:my-6",
          ].join(" ")}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>

      {relatedArticles.length > 0 ? (
        <section className="px-6 pb-8 max-w-4xl mx-auto">
          <div className="border-t border-neutral-800 pt-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {l.relatedTitle}
            </h2>
            <p className="mt-2 text-neutral-400">{l.relatedDescription}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/vault/blog/${locale}/${related.slug}`}
                  className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 transition hover:border-indigo-500/60 hover:bg-neutral-900"
                >
                  <h3 className="font-semibold leading-snug text-white">
                    {related.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-400">
                    {related.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* CTA Banner */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600/20 to-indigo-900/20 border border-indigo-500/20 px-8 py-12 sm:px-14 text-center">
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={l.download}
          >
            <Image
              src={appScreenshot}
              alt={l.screenshotAlt}
              width={1290}
              height={2796}
              className="mx-auto mb-8 h-64 w-auto rounded-2xl border border-white/10 object-cover object-top shadow-2xl"
            />
          </a>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {l.appTitle}
          </h2>
          <p className="mt-4 text-lg text-neutral-300 max-w-md mx-auto">
            {l.appDescription}
          </p>
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-indigo-500 text-white px-10 py-4 text-base font-bold uppercase tracking-wider transition hover:bg-indigo-400 shadow-lg shadow-indigo-500/30"
          >
            {l.download}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 max-w-4xl mx-auto border-t border-neutral-800">
        <nav className="flex items-center justify-center gap-6 text-sm text-neutral-500" dir="ltr">
          <Link href="/vault/privacy" className="hover:text-white transition">
            Privacy
          </Link>
          <Link href="/vault/terms" className="hover:text-white transition">
            Terms
          </Link>
          <Link
            href={`/vault/blog/${locale}`}
            className="text-indigo-400 font-medium hover:text-indigo-300 transition"
          >
            Blog
          </Link>
        </nav>
      </footer>
    </main>
  );
}
