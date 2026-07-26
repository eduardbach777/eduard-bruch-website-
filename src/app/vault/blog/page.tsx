import Link from "next/link";
import Image from "next/image";
import { getAllArticles, LOCALES } from "./_data";
import type { Metadata } from "next";
import { getAppScreenshot, getAppStoreUrl } from "./_data/store";

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

export default function BlogIndexPage() {
  const articles = getAllArticles("en");
  const appStoreUrl = getAppStoreUrl("en");
  const appScreenshot = getAppScreenshot("en");
  const [featured, ...rest] = articles;

  return (
    <main className="min-h-screen bg-[#050506] text-white">
      {/* Hero */}
      <section className="px-6 pt-36 pb-14 sm:pb-16 max-w-6xl mx-auto">
        <p className="font-mono text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-[#d4ad5e] mb-5">
          Stash — Secret File Vault
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.02] tracking-tight max-w-4xl">
          Privacy Guides &<br />
          Security Tips
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-2xl leading-relaxed">
          How to hide photos, protect files, and keep your digital life private.
          Guides for calculator vault apps, decoy passwords, break-in alerts, and more.
        </p>

        {/* Language Switcher */}
        <details className="ac-lang group mt-9 inline-block" dir="ltr">
          <summary className="flex w-fit cursor-pointer list-none items-center gap-2 rounded-full border border-neutral-800 bg-white/[0.03] px-4 py-2 text-sm text-neutral-300 transition-colors hover:border-[#d4ad5e]/50 hover:text-white">
            <svg className="h-4 w-4 text-[#d4ad5e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" /></svg>
            <span>English</span>
            <svg className="h-3.5 w-3.5 text-neutral-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </summary>
          <nav className="mt-3 flex max-w-3xl flex-wrap gap-1.5">
            {LOCALES.map((loc) => (
              <Link
                key={loc.code}
                href={`/vault/blog/${loc.code}`}
                className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-all ${
                  loc.code === "en"
                    ? "bg-[#d4ad5e] text-black"
                    : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white"
                }`}
              >
                {loc.label}
              </Link>
            ))}
          </nav>
        </details>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-neutral-800" />
      </div>

      {/* Article Grid */}
      <section className="px-6 py-14 sm:py-16 max-w-6xl mx-auto">
        {featured && (
          <Link
            href={`/vault/blog/en/${featured.slug}`}
            className="group mb-6 block rounded-3xl border border-neutral-800 bg-gradient-to-br from-white/[0.04] to-transparent p-8 sm:p-10 transition-all hover:border-[#d4ad5e]/50 hover:from-[#d4ad5e]/[0.06]"
          >
            <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-[#d4ad5e]">
              <time className="text-neutral-500">{featured.date}</time>
            </div>
            <h2 className="font-serif mt-4 max-w-3xl text-3xl sm:text-4xl font-semibold leading-[1.1] text-white transition-colors group-hover:text-[#d4ad5e]">
              {featured.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-400">
              {featured.description}
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#d4ad5e] transition-all group-hover:gap-3">
              Read more
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </span>
          </Link>
        )}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((article) => (
            <Link
              key={article.slug}
              href={`/vault/blog/en/${article.slug}`}
              className="group flex flex-col rounded-2xl border border-neutral-800 bg-white/[0.02] p-6 transition-all hover:border-[#d4ad5e]/50 hover:bg-white/[0.04]"
            >
              <time className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
                {article.date}
              </time>
              <h2 className="font-serif mt-3 text-lg font-semibold leading-snug text-white transition-colors group-hover:text-[#d4ad5e]">
                {article.title}
              </h2>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-neutral-400 line-clamp-3">
                {article.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-[#d4ad5e] group-hover:gap-2 transition-all">
                Read more
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-14 sm:py-16 max-w-6xl mx-auto text-center">
        <div className="rounded-3xl border border-[#d4ad5e]/25 bg-gradient-to-br from-[#d4ad5e]/[0.12] to-[#d4ad5e]/[0.03] px-8 py-14 sm:px-16">
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Stash Free"
          >
            <Image
              src={appScreenshot}
              alt="Stash encrypted private file vault on iPhone"
              width={1290}
              height={2796}
              className="mx-auto mb-8 h-72 w-auto rounded-2xl border border-white/10 object-cover object-top shadow-2xl"
            />
          </a>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">
            Hide Photos, Videos & Files
          </h2>
          <p className="mt-4 text-lg text-neutral-300 max-w-lg mx-auto">
            AES-256 encryption. Calculator disguise. Decoy vault. Intruder detection.
            Everything stays on your device.
          </p>
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-[#d4ad5e] text-black px-10 py-4 text-base font-bold uppercase tracking-wider transition hover:bg-[#e0bd72] shadow-lg shadow-[#d4ad5e]/25"
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
          <span className="text-[#d4ad5e] font-medium">Blog</span>
        </nav>
      </footer>
    </main>
  );
}
