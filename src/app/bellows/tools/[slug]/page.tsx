import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { TOOL_PAGES, getToolPage, type Section } from "../_data";

const SITE = "https://www.eduardbruch.com";

export function generateStaticParams() {
  return TOOL_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getToolPage(slug);
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.description,
    alternates: { canonical: `${SITE}/bellows/tools/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.description,
      url: `${SITE}/bellows/tools/${page.slug}`,
      type: "article",
    },
  };
}

function SectionBlock({ s }: { s: Section }) {
  return (
    <section className="mb-9">
      <h2 className="mb-3 text-xl font-semibold text-white">{s.h}</h2>

      {s.body?.map((p, i) => (
        <p key={i} className="mb-3 leading-relaxed text-neutral-400">
          {p}
        </p>
      ))}

      {s.list && (
        <ul className="mb-3 space-y-2">
          {s.list.map((li, i) => (
            <li key={i} className="flex gap-3 leading-relaxed text-neutral-400">
              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
              <span>{li}</span>
            </li>
          ))}
        </ul>
      )}

      {s.code && (
        <pre className="mb-2 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900/60 p-4 text-xs leading-relaxed text-neutral-300">
          <code>{s.code}</code>
        </pre>
      )}
      {s.codeCaption && <p className="text-sm text-neutral-500">{s.codeCaption}</p>}
    </section>
  );
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getToolPage(slug);
  if (!page) notFound();

  const related = page.related
    .map((s) => getToolPage(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  // FAQPage markup only. No SoftwareApplication block with an invented rating —
  // there are no reviews yet, and marking up a rating that does not exist is
  // both a manual-action risk and a lie.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-neutral-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <nav className="mb-6 text-sm text-neutral-500">
        <Link href="/bellows" className="text-indigo-400 hover:underline">
          Bellows
        </Link>
        <span className="mx-2">/</span>
        <Link href="/bellows/tools" className="text-indigo-400 hover:underline">
          Tools
        </Link>
      </nav>

      <h1 className="mb-4 text-4xl font-bold leading-tight text-white">{page.title}</h1>
      <p className="mb-10 text-xl leading-relaxed text-neutral-300">{page.lede}</p>

      {page.sections.map((s, i) => (
        <SectionBlock key={i} s={s} />
      ))}

      <div className="mb-10 rounded-lg border border-neutral-800 bg-neutral-900/50 p-5">
        <p className="mb-1 font-semibold text-white">
          {page.tool} is one of 41 tools in Bellows
        </p>
        <p className="mb-3 text-sm leading-relaxed text-neutral-400">
          A native Mac app that ships with no network entitlement, so macOS blocks it from
          connecting at all. One-time purchase, every future update included.
        </p>
        <Link href="/bellows" className="text-sm text-indigo-400 underline">
          What Bellows is →
        </Link>
      </div>

      <h2 className="mb-4 text-xl font-semibold text-white">Questions</h2>
      <div className="mb-10 space-y-5">
        {page.faqs.map((f, i) => (
          <div key={i}>
            <h3 className="mb-1 font-medium text-white">{f.q}</h3>
            <p className="text-sm leading-relaxed text-neutral-400">{f.a}</p>
          </div>
        ))}
      </div>

      {related.length > 0 && (
        <>
          <h2 className="mb-4 text-xl font-semibold text-white">Related</h2>
          <ul className="mb-10 space-y-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/bellows/tools/${r.slug}`}
                  className="text-indigo-400 hover:underline"
                >
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-neutral-800 pt-8 text-sm">
        <Link href="/bellows" className="text-indigo-400 underline">
          Bellows
        </Link>
        <Link href="/bellows/privacy" className="text-indigo-400 underline">
          Privacy Policy
        </Link>
        <Link href="/support" className="text-indigo-400 underline">
          Support
        </Link>
      </div>
    </main>
  );
}
