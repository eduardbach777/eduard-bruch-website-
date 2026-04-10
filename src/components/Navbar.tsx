"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

const navLinks = [
  { href: "/about", key: "about" as const },
  { href: "/creative", key: "software" as const },
  { href: "/pdfcreator/blog", key: "pdfScanner" as const },
  { href: "/pulse/blog", key: "pulseApp" as const },
  { href: "/vault/blog", key: "stashVault" as const },
  { href: "/blog", key: "blog" as const },
  { href: "/contact", key: "contact" as const },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-8 md:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link
            href="/"
            className="text-xs tracking-[0.3em] font-light hover:opacity-70 transition-opacity"
          >
            EDUARD BRUCH
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] tracking-[0.2em] text-white/50 hover:text-white transition-colors uppercase"
              >
                {t.nav[link.key][lang]}
              </Link>
            ))}
            <button
              onClick={toggleLang}
              className="text-sm ml-2 hover:opacity-70 transition-opacity"
              aria-label={lang === "en" ? "Switch to German" : "Switch to English"}
            >
              {lang === "en" ? "🇩🇪" : "🇺🇸"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-px bg-white block"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-px bg-white block"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-px bg-white block"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-24 bg-black z-40"
          >
            <div className="flex flex-col items-center justify-center h-full gap-12">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl tracking-[0.2em] text-white/70 hover:text-white transition-colors uppercase"
                  >
                    {t.nav[link.key][lang]}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: navLinks.length * 0.1 }}
              >
                <button
                  onClick={toggleLang}
                  className="text-2xl hover:opacity-70 transition-opacity"
                  aria-label={lang === "en" ? "Switch to German" : "Switch to English"}
                >
                  {lang === "en" ? "🇩🇪" : "🇺🇸"}
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
