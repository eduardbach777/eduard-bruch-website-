import Link from "next/link";
import { getAllArticles } from "./_data";
import { getPulseAppStoreUrl } from "../app-store-links";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pulse Blog — Mac System Monitor Guides, CPU Temperature, Memory Pressure",
  description:
    "In-depth guides on Mac performance monitoring — CPU temperature, memory pressure, network speed, battery health, and system monitor app comparisons for Pulse: System Monitor.",
  keywords: [
    "mac system monitor",
    "cpu temperature mac",
    "memory pressure mac",
    "best system monitor mac",
    "network speed mac",
    "battery health macbook",
    "istat menus alternative",
    "mac running slow fix",
    "mac performance monitor",
    "menu bar monitor mac",
  ],
};

const LOCALES = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
  { code: "it", label: "Italiano" },
  { code: "nl", label: "Nederlands" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "zh", label: "中文" },
  { code: "ar", label: "العربية" },
  { code: "tr", label: "Türkçe" },
  { code: "ru", label: "Русский" },
  { code: "pl", label: "Polski" },
  { code: "sv", label: "Svenska" },
];

export default function BlogIndexPage() {
  const articles = getAllArticles("en");
  const [featured, ...rest] = articles;

  return (
    <main className="min-h-screen bg-[#050506] text-white">
      {/* Hero */}
      <section className="px-6 pt-36 pb-14 sm:pb-16 max-w-6xl mx-auto">
        <p className="font-mono text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-[#d4ad5e] mb-5">
          Pulse — System Monitor
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.02] tracking-tight max-w-4xl">
          Mac Performance<br />
          Guides
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-2xl leading-relaxed">
          How to monitor CPU temperature, memory pressure, network speed, battery health,
          and diagnose performance issues on your Mac.
        </p>

        {/* Language Switcher */}
        <details className="ac-lang group mt-9 inline-block">
          <summary className="flex w-fit cursor-pointer list-none items-center gap-2 rounded-full border border-neutral-800 bg-white/[0.03] px-4 py-2 text-sm text-neutral-300 transition-colors hover:border-[#d4ad5e]/50 hover:text-white">
            <svg className="h-4 w-4 text-[#d4ad5e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" /></svg>
            <span>English</span>
            <svg className="h-3.5 w-3.5 text-neutral-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </summary>
          <nav className="mt-3 flex max-w-3xl flex-wrap gap-1.5">
            {LOCALES.map((loc) => (
              <Link
                key={loc.code}
                href={`/pulse/blog/${loc.code}`}
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
            href={`/pulse/blog/en/${featured.slug}`}
            className="group mb-6 block rounded-3xl border border-neutral-800 bg-gradient-to-br from-white/[0.04] to-transparent p-8 sm:p-10 transition-all hover:border-[#d4ad5e]/50 hover:from-[#d4ad5e]/[0.06]"
          >
            <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-[#d4ad5e]">
              <span>Latest</span>
              <span className="text-neutral-700">·</span>
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
              href={`/pulse/blog/en/${article.slug}`}
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
              <span className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-[#d4ad5e] transition-all group-hover:gap-2">
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
      <section className="px-6 py-14 sm:py-16 max-w-6xl mx-auto">
        <div className="rounded-3xl border border-[#d4ad5e]/25 bg-gradient-to-br from-[#d4ad5e]/[0.12] to-[#d4ad5e]/[0.03] px-8 py-14 sm:px-16 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">
            Take Control of Your Mac&apos;s Performance
          </h2>
          <p className="mt-4 text-lg text-neutral-300 max-w-lg mx-auto">
            CPU, memory, network, battery, temperature, disk, GPU, and fan
            monitoring — all from your menu bar.
          </p>
          <a
            href={getPulseAppStoreUrl("en")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-[#d4ad5e] text-black px-10 py-4 text-base font-bold uppercase tracking-wider transition hover:bg-[#e0bd72] shadow-lg shadow-[#d4ad5e]/25"
          >
            Download Pulse
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 max-w-6xl mx-auto border-t border-neutral-800">
        <nav className="flex items-center justify-center gap-6 text-sm text-neutral-500">
          <Link href="/pulse/support" className="hover:text-white transition">
            Support
          </Link>
          <Link href="/pulse/privacy" className="hover:text-white transition">
            Privacy
          </Link>
          <Link href="/pulse/terms" className="hover:text-white transition">
            Terms
          </Link>
          <span className="text-[#d4ad5e] font-medium">Blog</span>
        </nav>
      </footer>
    </main>
  );
}
