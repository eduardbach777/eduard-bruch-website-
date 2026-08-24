import type { Metadata } from "next";
import Link from "next/link";

import { TOOL_PAGES } from "./_data";

export const metadata: Metadata = {
  title: "Developer Tool Guides — Bellows for Mac",
  description:
    "How to decode a JWT, format JSON, test a regex and read a cron expression on macOS without pasting your data into someone else's website.",
  alternates: { canonical: "https://www.eduardbruch.com/bellows/tools" },
};

export default function ToolsIndex() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-neutral-200">
      <nav className="mb-6 text-sm text-neutral-500">
        <Link href="/bellows" className="text-indigo-400 hover:underline">
          Bellows
        </Link>
      </nav>

      <h1 className="mb-4 text-4xl font-bold text-white">Developer tool guides</h1>
      <p className="mb-10 text-xl leading-relaxed text-neutral-300">
        The jobs people reach for a website to do, and why doing them on your own
        machine is usually the better answer.
      </p>

      <ul className="mb-12 space-y-6">
        {TOOL_PAGES.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/bellows/tools/${p.slug}`}
              className="text-lg font-semibold text-white hover:text-indigo-300"
            >
              {p.title}
            </Link>
            <p className="mt-1 text-sm leading-relaxed text-neutral-400">{p.lede}</p>
          </li>
        ))}
      </ul>

      <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-5">
        <p className="mb-1 font-semibold text-white">All of these run offline</p>
        <p className="mb-3 text-sm leading-relaxed text-neutral-400">
          Bellows is a native Mac app with 41 developer tools. It ships without a
          network entitlement, so macOS refuses to let it connect — a permission it
          does not have rather than a promise it makes.
        </p>
        <Link href="/bellows" className="text-sm text-indigo-400 underline">
          What Bellows is →
        </Link>
      </div>
    </main>
  );
}
