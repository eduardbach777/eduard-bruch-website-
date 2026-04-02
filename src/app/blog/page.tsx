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

  return (
    <main
      className="mx-auto max-w-5xl px-6 md:px-12 pt-36 pb-24"
      style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
    >
      <h1 className="mb-4 text-4xl font-light tracking-[0.2em] text-white">
        {l.heading}
      </h1>
      <p className="mb-16 text-sm text-white/40">{l.subtitle}</p>

      {apps.map((app) => (
        <section key={app.name} className="mb-20">
          <h2 className="mb-8 text-xl font-semibold tracking-wide text-white">
            {app.name}
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {app.articles.map((article: ArticleCard) => (
              <Link
                key={article.href + article.title}
                href={article.href}
                className={`group block rounded-lg border-l-2 ${app.accent} border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:bg-white/[0.05] hover:border-white/[0.12]`}
              >
                <h3 className="mb-2 text-[15px] font-medium leading-snug text-white group-hover:text-white/90">
                  {article.title}
                </h3>
                <p className="text-xs leading-relaxed text-white/35">
                  {getExcerpt(article.description, 100)}
                </p>
                {article.date && (
                  <span className="mt-3 block text-[10px] text-white/20">
                    {article.date}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </section>
      ))}

      {/* Language switcher */}
      <nav className="mt-8 flex flex-wrap justify-center gap-2">
        {BLOG_LOCALES.map((loc) => (
          <Link
            key={loc.code}
            href={loc.code === "en" ? "/blog" : `/blog/${loc.code}`}
            className={`rounded-full border px-3 py-1 text-xs transition-colors ${
              loc.code === locale
                ? "border-white/30 bg-white/10 text-white"
                : "border-white/10 text-white/40 hover:border-white/25 hover:text-white/70"
            }`}
          >
            {loc.flag} {loc.label}
          </Link>
        ))}
      </nav>
    </main>
  );
}
