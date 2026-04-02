import Link from "next/link";
import { getAllArticles } from "./_data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PDF Creator Blog — Scan, Convert, Merge & Edit PDFs",
  description:
    "Guides on scanning documents to PDF, converting images, merging files, compressing PDFs, OCR text recognition, and mobile document scanning tips.",
  keywords: [
    "scan to pdf",
    "how to scan a document",
    "image to pdf",
    "merge pdf",
    "compress pdf",
    "pdf converter",
    "ocr pdf",
    "mobile document scanner",
    "pdf editor",
    "split pdf",
  ],
};

const LOCALES = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "pt", label: "Português" },
  { code: "it", label: "Italiano" },
  { code: "nl", label: "Nederlands" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "zh", label: "中文" },
  { code: "ar", label: "العربية" },
  { code: "hi", label: "हिन्दी" },
  { code: "tr", label: "Türkçe" },
  { code: "ru", label: "Русский" },
  { code: "pl", label: "Polski" },
  { code: "sv", label: "Svenska" },
];

export default function BlogIndexPage() {
  const articles = getAllArticles("en");

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Hero */}
      <section className="px-6 pt-20 pb-16 sm:pt-28 sm:pb-20 max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-rose-500 mb-4">
          PDF Creator — Scanner & OCR
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-neutral-900 leading-[1.05] tracking-tight max-w-4xl">
          PDF Guides &<br />
          Scanning Tips
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-neutral-500 font-light max-w-2xl leading-relaxed">
          How to scan documents, convert images to PDF, merge files, compress
          PDFs, and get the most out of your mobile document scanner.
        </p>

        {/* Language Switcher */}
        <nav className="mt-10 flex flex-wrap gap-2">
          {LOCALES.map((loc) => (
            <Link
              key={loc.code}
              href={`/pdfcreator/blog/${loc.code}`}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                loc.code === "en"
                  ? "bg-rose-500 text-white shadow-lg shadow-rose-500/25"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
              }`}
            >
              {loc.label}
            </Link>
          ))}
        </nav>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-neutral-200" />
      </div>

      {/* Article Grid */}
      <section className="px-6 py-16 sm:py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/pdfcreator/blog/en/${article.slug}`}
              className="group rounded-2xl border border-neutral-200 bg-white p-7 transition-all hover:border-rose-300 hover:shadow-xl hover:shadow-rose-500/5 flex flex-col"
            >
              <time className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                {article.date}
              </time>
              <h2 className="mt-3 text-xl font-bold text-neutral-900 leading-snug group-hover:text-rose-500 transition-colors">
                {article.title}
              </h2>
              <p className="mt-3 text-sm text-neutral-500 leading-relaxed flex-1">
                {article.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-rose-500 group-hover:gap-2 transition-all">
                Read more
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 sm:py-20 max-w-6xl mx-auto text-center">
        <div className="rounded-3xl bg-gradient-to-br from-rose-50 to-orange-50 border border-rose-200 px-8 py-14 sm:px-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
            Scan, Convert & Edit PDFs
          </h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-lg mx-auto">
            29 PDF tools in one app. Scan documents with OCR, merge, split,
            compress, watermark, and more.
          </p>
          <a
            href="https://apps.apple.com/app/pdf-creator-scanner-ocr/id6743597940"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-rose-500 text-white px-10 py-4 text-base font-bold uppercase tracking-wider transition hover:bg-rose-400 shadow-lg shadow-rose-500/30"
          >
            Download PDF Creator Free
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 max-w-6xl mx-auto border-t border-neutral-200">
        <nav className="flex items-center justify-center gap-6 text-sm text-neutral-400">
          <Link
            href="/pdfcreator/privacy"
            className="hover:text-neutral-900 transition"
          >
            Privacy
          </Link>
          <Link
            href="/pdfcreator/terms"
            className="hover:text-neutral-900 transition"
          >
            Terms
          </Link>
          <span className="text-rose-500 font-medium">Blog</span>
        </nav>
      </footer>
    </main>
  );
}
