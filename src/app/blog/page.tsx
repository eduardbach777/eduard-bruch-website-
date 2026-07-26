import Link from "next/link";
import {
  getHubLabels,
  getAppSections,
  BLOG_LOCALES,
} from "./_data";
import type { ArticleCard } from "./_data";

export const metadata = {
  title: "Blog — Eduard Bruch",
  description:
    "Guides, tips, and how-tos for iPhone privacy, PDF tools, and Mac system monitoring.",
  alternates: {
    languages: Object.fromEntries(
      BLOG_LOCALES.map((l) => [l.code, `/blog/${l.code}`]),
    ),
  },
};

function getExcerpt(text: string, maxLen = 100): string {
  const clean = text.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
  if (clean.length <= maxLen) return clean;
  return clean.slice(0, maxLen).replace(/\s+\S*$/, "") + "...";
}

export default function BlogHub() {
  const locale = "en";
  const l = getHubLabels(locale);
  const apps = getAppSections(locale);
  const currentLabel =
    BLOG_LOCALES.find((loc) => loc.code === locale)?.label ?? "English";

  return (
    <main className="min-h-screen bg-[#050506] text-white">
      <section className="mx-auto max-w-5xl px-6 md:px-12 pt-36 pb-14">
        <p className="font-mono text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-[#d4ad5e] mb-5">
          Blog
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl font-semibold leading-[1.02] tracking-tight text-white">
          {l.heading}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-neutral-300 leading-relaxed">
          {l.subtitle}
        </p>

        <details className="ac-lang group mt-9 inline-block" dir="ltr">
          <summary className="flex w-fit cursor-pointer list-none items-center gap-2 rounded-full border border-neutral-800 bg-white/[0.03] px-4 py-2 text-sm text-neutral-300 transition-colors hover:border-[#d4ad5e]/50 hover:text-white">
            <svg className="h-4 w-4 text-[#d4ad5e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" /></svg>
            <span>{currentLabel}</span>
            <svg className="h-3.5 w-3.5 text-neutral-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </summary>
          <nav className="mt-3 flex max-w-3xl flex-wrap gap-1.5">
            {BLOG_LOCALES.map((loc) => (
              <Link
                key={loc.code}
                href={loc.code === "en" ? "/blog" : `/blog/${loc.code}`}
                className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-all ${
                  loc.code === locale
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

      <div className="mx-auto max-w-5xl px-6 md:px-12"><div className="h-px bg-neutral-800" /></div>

      <div className="mx-auto max-w-5xl px-6 md:px-12 py-14 pb-24">
        {apps.map((app) => (
          <section key={app.name} className="mb-20">
            <h2 className="font-serif mb-8 text-2xl sm:text-3xl font-semibold text-[#d4ad5e]">
              {app.name}
            </h2>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {app.articles.map((article: ArticleCard) => (
                <Link
                  key={article.href + article.title}
                  href={article.href}
                  className="group flex flex-col rounded-2xl border border-neutral-800 bg-white/[0.02] p-6 transition-all hover:border-[#d4ad5e]/50 hover:bg-white/[0.04]"
                >
                  <h3 className="font-serif text-lg font-semibold leading-snug text-white transition-colors group-hover:text-[#d4ad5e]">
                    {article.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-neutral-400 line-clamp-3">
                    {getExcerpt(article.description, 100)}
                  </p>
                  {article.date && (
                    <span className="mt-4 block text-[11px] font-medium uppercase tracking-wider text-neutral-500">
                      {article.date}
                    </span>
                  )}
                  <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-[#d4ad5e] transition-all group-hover:gap-2">
                    Read more
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
