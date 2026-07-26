"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const apps = [
  { name: "SoundDial", href: "/#sounddial" },
  { name: "Stash", href: "/#stash" },
  { name: "Double Calc", href: "/#doublecalc" },
  { name: "Fisheye", href: "/#fisheye" },
  { name: "Warden", href: "/#warden" },
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
          {apps.map((a) => (
            <Link key={a.name} href={a.href} className="ac-nl text-[12.5px] font-medium" style={{ color: "#e7e4dc" }}>
              {a.name}
            </Link>
          ))}
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
            className="fixed inset-0 top-[68px] z-40 lg:hidden" style={{ background: "var(--ac-bg)" }}>
            <div className="flex flex-col items-center justify-center gap-6 pt-16">
              {[...apps, ...more].map((l) => (
                <Link key={l.name} href={l.href} onClick={() => setOpen(false)}
                  className="font-serif text-2xl" style={{ fontFamily: "var(--font-fraunces)" }}>
                  {l.name}
                </Link>
              ))}
              <button onClick={toggleLang} className="text-2xl">{lang === "en" ? "🇩🇪" : "🇺🇸"}</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .ac-nl { transition: color 0.2s; white-space: nowrap; }
        .ac-nl:hover { color: var(--ac-gold) !important; }
      `}</style>
    </nav>
  );
}
