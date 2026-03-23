"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function AboutPage() {
  const { lang } = useLanguage();

  return (
    <section className="min-h-screen">
      {/* Fixed scroll-down arrow — always visible */}
      <button
        onClick={() => {
          const el = document.getElementById("about-me");
          if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 130;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 text-white hover:text-white/60 transition-colors duration-300"
        aria-label="Scroll to About Me"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <div style={{ height: "150px" }} />

      <div className="w-full px-8 md:px-12" style={{ paddingLeft: "clamp(2rem, 10vw, 150px)" }}>

        {/* ===== Photo | CV Details | Résumé — three columns ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-14">

            {/* Column 1: CV Details */}
            <div className="shrink-0 lg:w-[320px] pt-0 lg:pt-2">
              <h1 className="text-3xl md:text-4xl font-light tracking-wider mb-12">
                Eduard Bruch
              </h1>

              <div className="space-y-5">
                <ProfileRow label={t.about.yearOfBirth[lang]} value="2003" />
                <ProfileRow label={t.about.height[lang]} value="173 cm / 5'8 ft" />
                <ProfileRow label={t.about.hairColour[lang]} value={t.about.brown[lang]} />
                <ProfileRow label={t.about.eyeColour[lang]} value={t.about.brown[lang]} />
                <ProfileRow label={t.about.languages[lang]} value={t.about.langValues[lang]} />
                <ProfileRow label={t.about.vehicleLicence[lang]} value={t.about.none[lang]} />
                <ProfileRow label={t.about.residence[lang]} value="Hamburg" />
                <ProfileRow label={t.about.skills[lang]} value={t.about.toBeUpdated[lang]} />
              </div>

            </div>

            {/* Column 3: Résumé */}
            <div className="flex-1 pt-0 lg:pt-2">
              <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-12">
                {t.about.resume[lang]}
              </h2>

              {/* Commercial */}
              <div className="mb-12">
                <p className="text-sm tracking-[0.2em] uppercase text-white mb-6">{t.about.commercial[lang]}</p>
                <ResumeRow year="2019" title="Tchibo" detail="dir. Nico Beier" />
              </div>

              {/* Short Film */}
              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-white mb-6">{t.about.shortFilm[lang]}</p>
                <ResumeRow year="2026" title="ANKERPLATZ" detail="main role · diploma project · dir. Svyatoslav Kolesov · SAE Berlin" />
                <ResumeRow year="2026" title="THE VANISHED WITNESS" detail="main role · Universität Kiel" />
                <ResumeRow year="2024" title="999" detail="Medien-Akademie Bayreuth" />
              </div>
            </div>
          </div>
        </motion.div>


      </div>

      {/* ===== About Me (centered, outside the left-padded container) ===== */}
      <motion.div
        id="about-me"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-2 max-w-3xl mx-auto px-8 text-left"
      >
        <h2 className="text-3xl font-light tracking-wider mb-12">{t.about.aboutMe[lang]}</h2>

        <div className="space-y-8 text-white text-lg leading-[1.8]">
          <p>{t.about.bio1[lang]}</p>
          <p>{t.about.bio2[lang]}</p>
          <p>{t.about.bio3[lang]}</p>
          <p>{t.about.bio4[lang]}</p>
          <p>
            {t.about.bio5[lang]}{" "}
            <Link href="/creative" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors">
              {t.about.softwarePage[lang]}
            </Link>{" "}
            {t.about.page[lang]}
          </p>
        </div>
      </motion.div>

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

function ResumeRow({ year, title, detail }: { year: string; title: string; detail: string }) {
  return (
    <div className="flex gap-6 mb-6">
      <span className="text-white/80 text-lg w-28 shrink-0">{year}</span>
      <div>
        <p className="text-white text-lg font-semibold">{title}</p>
        <p className="text-white/80 text-lg mt-1">{detail}</p>
      </div>
    </div>
  );
}
