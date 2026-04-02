import Link from "next/link";
import { notFound } from "next/navigation";
import { LOCALES, VALID_LOCALES, getContent } from "../_data/content";

export function generateStaticParams() {
  return LOCALES.map((l) => ({ locale: l.code }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!VALID_LOCALES.includes(locale)) return {};
  const c = getContent(locale);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      languages: Object.fromEntries(
        LOCALES.map((l) => [l.code, `/pulse/${l.code}`]),
      ),
    },
  };
}

export default async function PulseLocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!VALID_LOCALES.includes(locale)) notFound();

  const c = getContent(locale);
  const isRtl = locale === "ar";

  return (
    <main
      className="min-h-screen bg-neutral-950 text-white"
      dir={isRtl ? "rtl" : undefined}
    >
      {/* Top Bar */}
      <div className="px-6 pt-10 sm:pt-16 max-w-4xl mx-auto">
        <Link
          href="/pulse"
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
          Back
        </Link>
      </div>

      {/* Language Switcher */}
      <div className="px-6 pt-6 max-w-4xl mx-auto">
        <nav className="flex flex-wrap gap-2" dir="ltr">
          {LOCALES.map((l) => (
            <Link
              key={l.code}
              href={`/pulse/${l.code}`}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                l.code === locale
                  ? "bg-indigo-500 text-white"
                  : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Hero Header */}
      <header className="px-6 pt-12 pb-10 sm:pt-16 sm:pb-14 max-w-4xl mx-auto">
        <span className="text-sm font-medium uppercase tracking-wider text-indigo-400">
          Pulse — System Monitor
        </span>
        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
          {c.hero.subtitle}
        </h1>
        <p className="mt-6 text-xl text-neutral-300 font-light leading-relaxed max-w-2xl">
          {c.hero.description}
        </p>
      </header>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-neutral-800" />
      </div>

      {/* Features Grid */}
      <section className="px-6 py-12 sm:py-16 max-w-4xl mx-auto">
        <h2 className="mb-8 text-2xl font-bold text-white">
          {c.featuresTitle}
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {c.features.map((f) => (
            <div
              key={f.label}
              className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5"
            >
              <span className="mb-2 block text-xs font-semibold tracking-widest text-indigo-400">
                {f.icon}
              </span>
              <p className="mb-1 text-base font-medium text-white">{f.label}</p>
              <p className="text-sm leading-relaxed text-neutral-300">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Q&A Sections */}
      <section className="px-6 py-12 sm:py-16 max-w-4xl mx-auto">
        <h2 className="mb-10 text-2xl font-bold text-white">
          {c.faqTitle}
        </h2>

        {c.sections.map((section) => (
          <div key={section.title} className="mb-14">
            <h2 className="mb-8 text-xl font-bold text-white">
              {section.title}
            </h2>
            {section.qas.map((qa) => (
              <div key={qa.q} className="mb-8">
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {qa.q}
                </h3>
                <p className="text-[17px] leading-[1.8] text-neutral-200">
                  {qa.a}
                </p>
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* CTA Banner */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-600/20 to-indigo-900/20 border border-indigo-500/20 px-8 py-12 sm:px-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {c.cta.headline}
          </h2>
          <p className="mt-4 text-lg text-neutral-300 max-w-md mx-auto">
            {c.cta.sub}
          </p>
          <a
            href="https://apps.apple.com/app/pulse-system-monitor/id6744194761"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-indigo-500 text-white px-10 py-4 text-base font-bold uppercase tracking-wider transition hover:bg-indigo-400 shadow-lg shadow-indigo-500/30"
          >
            {c.cta.button}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 max-w-4xl mx-auto border-t border-neutral-800">
        <nav
          className="flex items-center justify-center gap-6 text-sm text-neutral-500"
          dir="ltr"
        >
          <Link href="/pulse/support" className="hover:text-white transition">
            Support
          </Link>
          <Link href="/pulse/privacy" className="hover:text-white transition">
            Privacy
          </Link>
          <Link href="/pulse/terms" className="hover:text-white transition">
            Terms
          </Link>
          <Link
            href="/pulse"
            className="text-indigo-400 font-medium hover:text-indigo-300 transition"
          >
            Blog
          </Link>
        </nav>
      </footer>
    </main>
  );
}
