import type { ReactNode } from "react";

/** One numbered section of a SoundDial legal page. */
export interface LegalSection {
  h: string;
  body: ReactNode;
}

/**
 * Bilingual legal page: the full German text first (German law applies), then the
 * full English text. Both versions have the same structure and content.
 */
export function LegalPage({
  title,
  updatedDe,
  updatedEn,
  de,
  en,
}: {
  title: string;
  updatedDe: string;
  updatedEn: string;
  de: LegalSection[];
  en: LegalSection[];
}) {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-neutral-200">
      <h1 className="mb-2 text-3xl font-bold text-white">{title}</h1>
      <p className="mb-6 text-lg text-neutral-300">SoundDial</p>
      <p className="mb-10 text-sm">
        <a href="#de" className="text-indigo-400 underline">Deutsch</a>
        <span className="mx-2 text-neutral-600">·</span>
        <a href="#en" className="text-indigo-400 underline">English</a>
      </p>

      <Version id="de" lang="de" label="Deutsch" updated={updatedDe} sections={de} />
      <hr className="my-14 border-neutral-800" />
      <Version id="en" lang="en" label="English" updated={updatedEn} sections={en} />
    </main>
  );
}

function Version({
  id,
  lang,
  label,
  updated,
  sections,
}: {
  id: string;
  lang: string;
  label: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <section id={id} lang={lang} className="scroll-mt-24">
      <h2 className="mb-1 text-sm font-medium uppercase tracking-wider text-indigo-400">{label}</h2>
      <p className="mb-8 text-sm text-neutral-400">{updated}</p>
      {sections.map((s, i) => (
        <div key={s.h} className="mb-8">
          <h3 className="mb-3 text-xl font-semibold text-white">
            {i + 1}. {s.h}
          </h3>
          <div className="space-y-3 leading-relaxed text-neutral-300">{s.body}</div>
        </div>
      ))}
    </section>
  );
}

export const A = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} className="text-indigo-400 underline" {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
    {children}
  </a>
);

export const Ul = ({ children }: { children: ReactNode }) => (
  <ul className="list-disc space-y-1.5 pl-5">{children}</ul>
);

/** Provider / controller block, identical to the Impressum. */
export const Provider = () => (
  <p>
    Eduard Bruch
    <br />
    Kleinfeld 28c
    <br />
    21149 Hamburg, Deutschland / Germany
    <br />
    E-Mail: <A href="mailto:support@eduardbruch.com">support@eduardbruch.com</A>
    <br />
    Tel.: +49 176 81363293
  </p>
);
