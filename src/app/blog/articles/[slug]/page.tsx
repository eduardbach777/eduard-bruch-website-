import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getArticle, getAllSlugs } from "../_data";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${article.title} — Eduard Bruch`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
    },
    alternates: {
      canonical: `/blog/articles/${slug}`,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Top bar */}
      <div className="px-6 pt-36 max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition group"
        >
          <svg
            className="w-4 h-4 transition group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>
      </div>

      {/* Header */}
      <header className="px-6 pt-12 pb-10 sm:pt-16 sm:pb-14 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-white/50">
          <time>{article.date}</time>
          <span className="text-white/20">·</span>
          <span>{article.readTime}</span>
        </div>
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

      {/* Content */}
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
            "[&_a]:text-white [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-white/30 [&_a]:hover:decoration-white",
            "[&_strong]:text-white [&_strong]:font-semibold",
            "[&_code]:text-[0.9em] [&_code]:bg-white/[0.08] [&_code]:text-white [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded",
            "[&_pre]:bg-white/[0.04] [&_pre]:border [&_pre]:border-white/[0.08] [&_pre]:rounded-lg [&_pre]:p-4 [&_pre]:mb-6 [&_pre]:overflow-x-auto",
            "[&_pre_code]:bg-transparent [&_pre_code]:px-0 [&_pre_code]:py-0 [&_pre_code]:text-sm [&_pre_code]:text-neutral-200",
            "[&_blockquote]:border-l-4 [&_blockquote]:border-white/20 [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-neutral-300 [&_blockquote]:my-6",
          ].join(" ")}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>

      {/* Footer */}
      <footer className="px-6 py-10 max-w-4xl mx-auto border-t border-neutral-800">
        <nav className="flex items-center justify-center gap-6 text-sm text-neutral-500">
          <Link href="/blog" className="hover:text-white transition">
            All Articles
          </Link>
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </nav>
      </footer>
    </main>
  );
}
