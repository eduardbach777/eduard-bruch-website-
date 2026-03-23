"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function GalleryPage() {
  const { lang } = useLanguage();

  return (
    <section className="min-h-screen bg-black pb-20">
      <div className="h-32" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-light tracking-[0.2em]"
        >
          {t.gallery.heading[lang]}
        </motion.h1>
      </div>
    </section>
  );
}
