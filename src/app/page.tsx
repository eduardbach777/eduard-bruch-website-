"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function Home() {
  const { lang } = useLanguage();

  return (
    <>
      {/* Hero Section with Gallery */}
      <section className="relative min-h-screen flex flex-col justify-center pt-36 pb-48">
        <div className="relative z-10 text-center px-8 md:px-12 mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.3em] mb-12"
          >
            EDUARD BRUCH
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="/reel" className="btn btn-primary">
              {t.home.reel[lang]}
            </Link>
            <Link href="/contact" className="btn btn-outline">
              {t.home.contact[lang]}
            </Link>
          </motion.div>
        </div>


        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-white/30 text-xs tracking-[0.2em] uppercase">{t.home.scroll[lang]}</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent"
            />
          </div>
        </motion.div>
      </section>

      {/* Reel Section */}
      <section className="py-48 md:py-64">
        <div className="flex flex-col items-center justify-center px-8 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-[0.25em] mb-8 text-center">
              {t.home.showreel[lang]}
            </h2>
            <div className="w-12 h-px bg-white/20 mb-10" />
            <p className="text-white/40 text-sm md:text-base tracking-wide mb-16 max-w-md leading-relaxed text-center">
              {t.home.showreelDesc[lang]}
            </p>
            <Link href="/reel" className="btn btn-outline">
              {t.home.watchReel[lang]}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-48 md:py-64">
        <div className="flex flex-col items-center justify-center px-8 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-[0.25em] mb-8 text-center">
              {t.home.getInTouch[lang]}
            </h2>
            <div className="w-12 h-px bg-white/20 mb-10" />
            <p className="text-white/40 text-sm md:text-base tracking-wide mb-16 max-w-md leading-relaxed text-center">
              {t.home.getInTouchDesc[lang]}
            </p>
            <Link href="/contact" className="btn btn-primary">
              {t.home.contact[lang]}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
