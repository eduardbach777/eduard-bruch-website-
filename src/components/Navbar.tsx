"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const macTop = [
  { name: "SoundDial", href: "/sounddial/blog" },
  { name: "Jetty", href: "/jetty/blog" },
  { name: "Loupe", href: "/loupe" },
  { name: "Dayedge", href: "/dayedge/blog" },
  { name: "Renym", href: "/renym/blog" },
  { name: "Optic", href: "/optic" },
  { name: "Lock In!", href: "/lockin" },
];
const macRest = [
  { name: "Tome", href: "/tome" },
  { name: "Mediasmith", href: "/mediasmith" },
  { name: "Bellows", href: "/bellows" },
  { name: "Tickpull", href: "/tickpull/blog" },
  { name: "DeskCloak", href: "/deskcloak/blog" },
  { name: "Canopy", href: "/canopy/blog" },
];
const iosApps = [
  { name: "Stash", href: "/#stash" },
  { name: "Warden", href: "/#warden" },
  { name: "Double Calculator", href: "/#doublecalc" },
  { name: "Fisheye", href: "/#fisheye" },
];
const more = [
  { name: "About", href: "/about" },
  { name: "Guides", href: "/#guides" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "linear-gradient(#050506cc, transparent)", backdropFilter: "blur(4px)" }}>
      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between gap-6 px-6 md:px-10">
        <Link href="/" className="flex items-center gap-2.5 whitespace-nowrap">
          <span aria-hidden style={{ color: "var(--ac-gold)", fontFamily: "var(--font-fraunces)", fontSize: 20, lineHeight: 1 }}>✦</span>
          <span className="text-[13px] font-semibold uppercase tracking-[0.16em]">
            Eduard Bruch <span style={{ color: "var(--ac-gold)" }}>— Angel Company</span>
          </span>
        </Link>

        <div className="hidden items-center gap-4 lg:flex">
          <details className="ac-dd group relative">
            <summary className="ac-nl flex cursor-pointer list-none items-center gap-1 text-[12.5px] font-medium" style={{ color: "#e7e4dc" }}>
              macOS
              <svg className="h-3 w-3 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="ac-panel">
              {macTop.map((a) => (
                <Link key={a.name} href={a.href} className="ac-pl ac-pl-top">{a.name}</Link>
              ))}
              <span className="ac-pdiv" />
              {macRest.map((a) => (
                <Link key={a.name} href={a.href} className="ac-pl">{a.name}</Link>
              ))}
            </div>
          </details>

          <details className="ac-dd group relative">
            <summary className="ac-nl flex cursor-pointer list-none items-center gap-1 text-[12.5px] font-medium" style={{ color: "#e7e4dc" }}>
              iOS &amp; Android
              <svg className="h-3 w-3 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="ac-panel">
              {iosApps.map((a) => (
                <Link key={a.name} href={a.href} className="ac-pl ac-pl-top">{a.name}</Link>
              ))}
              <span className="ac-pdiv" />
              <Link href="/apps" className="ac-pl">All apps →</Link>
            </div>
          </details>

          <Link href="/overview" className="ac-nl text-[12.5px] font-medium" style={{ color: "#e7e4dc" }}>
            Overview
          </Link>

          <span style={{ width: 1, height: 13, background: "var(--ac-line)" }} />
          {more.map((m) => (
            <Link key={m.name} href={m.href} className="ac-nl text-[12.5px] font-medium" style={{ color: "var(--ac-soft)" }}>
              {m.name}
            </Link>
          ))}
          <button onClick={toggleLang} className="ml-1 text-sm hover:opacity-70" aria-label="Toggle language">
            {lang === "en" ? "🇩🇪" : "🇺🇸"}
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden" aria-label="Menu">
          <motion.span animate={open ? { rotate: 45, y: 6 } : {}} className="block h-px w-6 bg-white" />
          <motion.span animate={open ? { opacity: 0 } : {}} className="block h-px w-6 bg-white" />
          <motion.span animate={open ? { rotate: -45, y: -6 } : {}} className="block h-px w-6 bg-white" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 top-[68px] z-40 overflow-y-auto lg:hidden" style={{ background: "var(--ac-bg)" }}>
            <div className="flex flex-col items-center gap-3 px-6 pb-16 pt-12">
              <span className="ac-mgroup">macOS</span>
              {[...macTop, ...macRest].map((l) => (
                <Link key={l.name} href={l.href} onClick={() => setOpen(false)}
                  className="font-serif text-xl" style={{ fontFamily: "var(--font-fraunces)" }}>
                  {l.name}
                </Link>
              ))}
              <span className="ac-mgroup">iOS &amp; Android</span>
              {iosApps.map((l) => (
                <Link key={l.name} href={l.href} onClick={() => setOpen(false)}
                  className="font-serif text-xl" style={{ fontFamily: "var(--font-fraunces)" }}>
                  {l.name}
                </Link>
              ))}
              <Link href="/apps" onClick={() => setOpen(false)} className="font-serif text-xl" style={{ fontFamily: "var(--font-fraunces)", color: "var(--ac-soft)" }}>
                All apps →
              </Link>
              <Link href="/overview" onClick={() => setOpen(false)} className="font-serif text-xl" style={{ fontFamily: "var(--font-fraunces)", color: "var(--ac-gold)" }}>
                Overview
              </Link>
              <span className="ac-mgroup">&nbsp;</span>
              {more.map((l) => (
                <Link key={l.name} href={l.href} onClick={() => setOpen(false)}
                  className="font-serif text-xl" style={{ fontFamily: "var(--font-fraunces)" }}>
                  {l.name}
                </Link>
              ))}
              <button onClick={toggleLang} className="mt-2 text-2xl">{lang === "en" ? "🇩🇪" : "🇺🇸"}</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .ac-nl { transition: color 0.2s; white-space: nowrap; }
        .ac-nl:hover { color: var(--ac-gold) !important; }
        .ac-dd summary::-webkit-details-marker { display: none; }
        .ac-panel {
          position: absolute; top: calc(100% + 14px); left: 50%; transform: translateX(-50%);
          min-width: 208px; padding: 10px; border-radius: 10px; border: 1px solid var(--ac-line);
          background: #0b0b0dee; backdrop-filter: blur(10px);
          box-shadow: 0 24px 60px -20px rgba(0,0,0,0.8);
          display: flex; flex-direction: column;
        }
        .ac-pl { padding: 7px 10px; border-radius: 6px; font-size: 13px; color: var(--ac-soft); transition: 0.15s; white-space: nowrap; }
        .ac-pl:hover { background: rgba(255,255,255,0.06); color: var(--ac-gold); }
        .ac-pl-top { color: #e7e4dc; font-weight: 500; }
        .ac-pdiv { display: block; height: 1px; margin: 6px 4px; background: var(--ac-line); }
        .ac-mgroup { margin-top: 10px; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ac-gold); font-weight: 600; }
      `}</style>
    </nav>
  );
}
