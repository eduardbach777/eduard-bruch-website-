import Link from "next/link";
import type { Metadata } from "next";
import { getAllArticles } from "./_data";

export const metadata: Metadata = {
  title: "SoundDial Blog — Per-App Volume Mixer for Mac",
  description:
    "Guides on controlling per-app volume on macOS: independent sliders, profiles, auto-ducking, and more.",
  keywords: [
    "mac volume mixer",
    "per app volume mac",
    "macos volume control",
    "app volume control mac",
    "sounddial",
    "mac audio mixer",
    "per app audio mac",
    "macos per app volume",
  ],
};

export default function SoundDialBlogIndex() {
  const articles = getAllArticles();

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Hero */}
      <section className="px-6 pt-36 pb-16 sm:pb-20 max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-4">
          SoundDial — Per-App Volume Mixer
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight max-w-4xl">
          Control Every
          <br />
          App&apos;s Volume
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-neutral-300 font-light max-w-2xl leading-relaxed">
          Independent volume sliders, profiles, auto-ducking, and per-app mute
          — the volume mixer macOS should have built in.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-neutral-800" />
      </div>

      {/* Articles */}
      <section className="px-6 py-16 sm:py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/sounddial/blog/${article.slug}`}
              className="group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-7 transition-all hover:border-purple-500/60 hover:bg-neutral-900 hover:shadow-xl hover:shadow-purple-500/5 flex flex-col"
            >
              <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-neutral-500">
                <time>{article.date}</time>
                <span className="text-neutral-700">·</span>
                <span>{article.readTime}</span>
              </div>
              <h2 className="mt-3 text-xl font-bold text-white leading-snug group-hover:text-purple-400 transition-colors">
                {article.title}
              </h2>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed flex-1">
                {article.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-purple-400 group-hover:gap-2 transition-all">
                Read more
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 max-w-6xl mx-auto border-t border-neutral-800">
        <nav className="flex items-center justify-center gap-6 text-sm text-neutral-500">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
          <span className="text-purple-400 font-medium">Blog</span>
        </nav>
      </footer>
    </main>
  );
}
