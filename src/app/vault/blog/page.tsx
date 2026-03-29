import Link from "next/link";
import { getAllArticles } from "./_data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stash Blog — Secret Photo Vault App, Calculator Vault, Hide Photos iPhone",
  description:
    "Privacy guides, calculator vault app reviews, how to hide photos on iPhone, decoy password tips, and break-in alert guides for Stash: Secret File Vault.",
  keywords: [
    "calculator vault app",
    "secret photo vault",
    "hide photos iPhone",
    "decoy password",
    "break-in alert vault app",
    "private browser no history",
    "best photo vault app",
    "Keepsafe alternative",
    "encrypted file storage",
    "iPhone privacy settings",
  ],
};

const LOCALES = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
  { code: "ar", label: "العربية" },
  { code: "fr", label: "Français" },
];

export default function BlogIndexPage() {
  const articles = getAllArticles("en");

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Hero */}
      <section className="px-6 pt-20 pb-16 sm:pt-28 sm:pb-20 max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
          Stash — Secret File Vault
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight max-w-4xl">
          Privacy Guides &<br />
          Security Tips
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-neutral-300 font-light max-w-2xl leading-relaxed">
          How to hide photos, protect files, and keep your digital life private.
          Guides for calculator vault apps, decoy passwords, break-in alerts, and more.
        </p>

        {/* Language Switcher */}
        <nav className="mt-10 flex flex-wrap gap-2">
          {LOCALES.map((loc) => (
            <Link
              key={loc.code}
              href={`/vault/blog/${loc.code}`}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                loc.code === "en"
                  ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white"
              }`}
            >
              {loc.label}
            </Link>
          ))}
        </nav>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-neutral-800" />
      </div>

      {/* Article Grid */}
      <section className="px-6 py-16 sm:py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/vault/blog/en/${article.slug}`}
              className="group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-7 transition-all hover:border-indigo-500/60 hover:bg-neutral-900 hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col"
            >
              <time className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                {article.date}
              </time>
              <h2 className="mt-3 text-xl font-bold text-white leading-snug group-hover:text-indigo-400 transition-colors">
                {article.title}
              </h2>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed flex-1">
                {article.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-indigo-400 group-hover:gap-2 transition-all">
                Read more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 sm:py-20 max-w-6xl mx-auto text-center">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-600/20 to-indigo-900/20 border border-indigo-500/20 px-8 py-14 sm:px-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Hide Photos, Videos & Files
          </h2>
          <p className="mt-4 text-lg text-neutral-300 max-w-lg mx-auto">
            AES-256 encryption. Calculator disguise. Decoy vault. Intruder detection.
            Everything stays on your device.
          </p>
          <a
            href="https://apps.apple.com/app/id6759871587"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-indigo-500 text-white px-10 py-4 text-base font-bold uppercase tracking-wider transition hover:bg-indigo-400 shadow-lg shadow-indigo-500/30"
          >
            Download Stash Free
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 max-w-6xl mx-auto border-t border-neutral-800">
        <nav className="flex items-center justify-center gap-6 text-sm text-neutral-500">
          <Link href="/vault/privacy" className="hover:text-white transition">
            Privacy
          </Link>
          <Link href="/vault/terms" className="hover:text-white transition">
            Terms
          </Link>
          <span className="text-indigo-400 font-medium">Blog</span>
        </nav>
      </footer>
    </main>
  );
}
