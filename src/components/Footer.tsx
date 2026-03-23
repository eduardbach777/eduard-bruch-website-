"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="bg-neutral-950 pt-24 pb-16 md:pt-32 md:pb-20">
      <div className="max-w-5xl mx-auto px-8 md:px-12">
        {/* Logo */}
        <div className="text-center mb-16">
          <Link
            href="/"
            className="text-xs tracking-[0.3em] font-light text-white hover:opacity-70 transition-opacity"
          >
            EDUARD BRUCH
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-10 md:gap-14 mb-20">
          <Link
            href="/creative"
            className="text-[11px] tracking-[0.2em] text-white/40 hover:text-white transition-colors uppercase"
          >
            {t.footer.software[lang]}
          </Link>
          <Link
            href="/contact"
            className="text-[11px] tracking-[0.2em] text-white/40 hover:text-white transition-colors uppercase"
          >
            {t.footer.contact[lang]}
          </Link>
          <Link
            href="/apps"
            className="text-[11px] tracking-[0.2em] text-white/40 hover:text-white transition-colors uppercase"
          >
            {t.footer.apps[lang]}
          </Link>
        </nav>

        {/* Legal */}
        <nav className="flex flex-wrap items-center justify-center gap-10 mb-16">
          <Link
            href="/impressum"
            className="text-[11px] tracking-[0.15em] text-white/25 hover:text-white/50 transition-colors"
          >
            {t.footer.impressum[lang]}
          </Link>
          <Link
            href="/datenschutz"
            className="text-[11px] tracking-[0.15em] text-white/25 hover:text-white/50 transition-colors"
          >
            {t.footer.datenschutz[lang]}
          </Link>
          <Link
            href="/support"
            className="text-[11px] tracking-[0.15em] text-white/25 hover:text-white/50 transition-colors"
          >
            {t.footer.support[lang]}
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-white/20 text-[11px] tracking-[0.15em] text-center">
          &copy; {new Date().getFullYear()} Eduard Bruch
        </p>
      </div>
    </footer>
  );
}
