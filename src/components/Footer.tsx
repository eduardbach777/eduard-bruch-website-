"use client";

import Link from "next/link";

const links = [
  { name: "Work", href: "/#work" },
  { name: "Guides", href: "/#guides" },
  { name: "About", href: "/about" },
  { name: "Impressum", href: "/impressum" },
  { name: "Datenschutz", href: "/datenschutz" },
  { name: "Support", href: "/support" },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--ac-line)" }} className="py-16">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-5 px-6 md:px-10">
        <div className="flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.16em]">
          <span style={{ color: "var(--ac-gold)", fontFamily: "var(--font-fraunces)", fontSize: 15 }}>✦</span>
          Eduard Bruch — Angel Company
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((l) => (
            <Link
              key={l.name}
              href={l.href}
              className="ac-fl text-[12.5px] font-medium uppercase tracking-[0.08em]"
              style={{ color: "var(--ac-mut)" }}
            >
              {l.name}
            </Link>
          ))}
        </div>
        <div
          className="text-[12px] tracking-[0.14em]"
          style={{ color: "var(--ac-soft)", fontFamily: "var(--font-geist-mono)" }}
        >
          © 2026 · Hamburg
        </div>
      </div>
      <style jsx global>{`
        .ac-fl {
          transition: color 0.2s;
        }
        .ac-fl:hover {
          color: var(--ac-gold) !important;
        }
      `}</style>
    </footer>
  );
}
