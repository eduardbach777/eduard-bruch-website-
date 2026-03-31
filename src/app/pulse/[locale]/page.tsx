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
        LOCALES.map((l) => [l.code, `/pulse/${l.code}`])
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
      className="mx-auto max-w-3xl px-6 py-20 text-neutral-200"
      dir={isRtl ? "rtl" : undefined}
    >
      {/* Language switcher */}
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {LOCALES.map((l) => (
          <Link
            key={l.code}
            href={`/pulse/${l.code}`}
            className={`rounded-full border px-3 py-1 text-xs transition-colors ${
              l.code === locale
                ? "border-indigo-400 bg-indigo-400/10 text-indigo-300"
                : "border-white/10 text-white/40 hover:border-white/25 hover:text-white/70"
            }`}
          >
            {l.flag} {l.label}
          </Link>
        ))}
      </div>

      {/* Hero */}
      <section className="mb-20 text-center">
        <h1 className="mb-4 text-4xl font-light tracking-[0.25em] text-white">
          PULSE
        </h1>
        <p className="mb-2 text-lg tracking-wide text-white/70">
          {c.hero.subtitle}
        </p>
        <p className="mx-auto mb-10 max-w-lg text-sm leading-relaxed text-neutral-400">
          {c.hero.description}
        </p>
        <a
          href="https://apps.apple.com/app/pulse-system-monitor/id6744194761"
          className="btn btn-primary"
        >
          DOWNLOAD ON THE MAC APP STORE
        </a>
      </section>

      {/* Features Grid */}
      <section className="mb-20">
        <h2 className="mb-8 text-center text-xl font-semibold tracking-[0.15em] text-white">
          {c.featuresTitle}
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {c.features.map((f) => (
            <div
              key={f.label}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-4"
            >
              <span className="mb-2 block text-xs font-semibold tracking-widest text-indigo-400">
                {f.icon}
              </span>
              <p className="mb-1 text-sm font-medium text-white">{f.label}</p>
              <p className="text-xs leading-relaxed text-neutral-500">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Q&A Sections */}
      <section className="mb-20">
        <h2 className="mb-10 text-center text-xl font-semibold tracking-[0.15em] text-white">
          {c.faqTitle}
        </h2>

        {c.sections.map((section) => (
          <div key={section.title} className="mb-12">
            <h2 className="mb-6 text-lg font-semibold text-white">
              {section.title}
            </h2>
            {section.qas.map((qa) => (
              <div key={qa.q} className="mb-6">
                <h3 className="mb-1 font-medium text-white">{qa.q}</h3>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {qa.a}
                </p>
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="mb-16 text-center">
        <div className="rounded-xl border border-white/10 bg-white/[0.02] px-8 py-12">
          <h2 className="mb-3 text-2xl font-light tracking-[0.15em] text-white">
            {c.cta.headline}
          </h2>
          <p className="mb-8 text-sm text-neutral-400">{c.cta.sub}</p>
          <a
            href="https://apps.apple.com/app/pulse-system-monitor/id6744194761"
            className="btn btn-primary"
          >
            {c.cta.button}
          </a>
        </div>
      </section>

      {/* Next article funnel */}
      <section className="mb-12">
        <Link
          href={c.next.href}
          className="group flex items-center justify-between rounded-lg border border-white/10 p-5 transition-colors hover:border-white/25 hover:bg-white/[0.02]"
        >
          <div>
            <span className="mb-1 block text-xs tracking-widest text-indigo-400">
              {c.next.label}
            </span>
            <span className="text-sm font-medium text-white">
              {c.next.title}
            </span>
          </div>
          <span className="text-lg text-white/30 transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </Link>
      </section>

      {/* Footer Links */}
      <div className="flex justify-center gap-6 text-xs text-neutral-500">
        <Link href="/pulse/support" className="hover:text-neutral-300">
          Support
        </Link>
        <Link href="/pulse/privacy" className="hover:text-neutral-300">
          Privacy Policy
        </Link>
        <Link href="/pulse/terms" className="hover:text-neutral-300">
          Terms of Service
        </Link>
      </div>
    </main>
  );
}
