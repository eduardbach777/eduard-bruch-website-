"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function AboutPage() {
  const { lang } = useLanguage();

  return (
    <section className="min-h-screen">
      <div style={{ height: "150px" }} />

      <div className="max-w-3xl mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-light tracking-wider mb-12">
            Eduard Bruch
          </h1>

          <div className="space-y-5 mb-16">
            <ProfileRow label={t.about.yearOfBirth[lang]} value="2003" />
            <ProfileRow label={t.about.languages[lang]} value={t.about.langValues[lang]} />
            <ProfileRow label={t.about.residence[lang]} value="Hamburg" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-light tracking-wider mb-12">{t.about.aboutMe[lang]}</h2>

          <div className="space-y-8 text-white text-lg leading-[1.8]">
            <p>{t.about.bio1[lang]}</p>
            <p>{t.about.bio5[lang]}{" "}
              <Link href="/creative" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors">
                {t.about.softwarePage[lang]}
              </Link>{" "}
              {t.about.page[lang]}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mb-20" />
    </section>
  );
}

function ProfileRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-6">
      <span className="text-white text-lg font-semibold w-44 shrink-0">{label}</span>
      <span className="text-white text-lg">{value}</span>
    </div>
  );
}
