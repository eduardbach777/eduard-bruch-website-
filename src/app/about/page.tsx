"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface AboutImage {
  src: string;
  name: string;
}

export default function AboutPage() {
  const [images, setImages] = useState<AboutImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch("/api/about");
        const data = await res.json();
        setImages(data.images);
      } catch (error) {
        console.error("Error fetching about images:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  const headshot = images[0];

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

            {/* Column 1: Photo */}
            <div className="w-full lg:w-[380px] shrink-0">
              <div className="relative aspect-[3/4] w-full bg-white/5 overflow-hidden">
                {loading ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border border-white/30 border-t-white rounded-full animate-spin" />
                  </div>
                ) : headshot ? (
                  <Image
                    src={headshot.src}
                    alt="Eduard Bruch"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white/30 text-base">
                    <span>Add images to /public/images/about/</span>
                  </div>
                )}
              </div>
            </div>

            {/* Column 2: CV Details */}
            <div className="shrink-0 lg:w-[320px] pt-0 lg:pt-2">
              <h1 className="text-3xl md:text-4xl font-light tracking-wider mb-12">
                Eduard Bruch
              </h1>

              <div className="space-y-5">
                <ProfileRow label="Year of birth" value="2003" />
                <ProfileRow label="Height" value="173 cm / 5'8 ft" />
                <ProfileRow label="Hair colour" value="brown" />
                <ProfileRow label="Eye colour" value="brown" />
                <ProfileRow label="Languages" value="german (fluent), english (fluent), russian (mother tongue)" />
                <ProfileRow label="Vehicle licence" value="none" />
                <ProfileRow label="1st residence" value="Hamburg" />
                <ProfileRow label="Skills" value="to be updated" />
              </div>

              <div className="mt-10">
                <span className="text-white text-lg font-semibold">Training</span>
                <div className="mt-3 space-y-1 text-white text-lg">
                  <p>2021–2024 Thalia Theater RESET Gruppe (dir. Alinga Gregor)</p>
                  <p>2018–2021 Ohnsorg Jugendclub, Hamburg (Plattdeutsch theater)</p>
                </div>
              </div>
            </div>

            {/* Column 3: Résumé */}
            <div className="flex-1 pt-0 lg:pt-2">
              <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-12">
                R&eacute;sum&eacute;
              </h2>

              {/* Theatre */}
              <div className="mb-12">
                <p className="text-sm tracking-[0.2em] uppercase text-white mb-6">Theatre</p>
                <ResumeRow year="2021–2024" title="Thalia Theater RESET Gruppe" detail="ensemble · dir. Alinga Gregor · Hamburg" />
                <ResumeRow year="2018–2021" title="Ohnsorg Jugendclub" detail="Plattdeutsch theater · Hamburg" />
              </div>

              {/* Commercial */}
              <div className="mb-12">
                <p className="text-sm tracking-[0.2em] uppercase text-white mb-6">Commercial</p>
                <ResumeRow year="2019" title="Tchibo" detail="dir. Nico Beier" />
              </div>

              {/* Short Film */}
              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-white mb-6">Short Film</p>
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
        <h2 className="text-3xl font-light tracking-wider mb-12">About Me</h2>

        <div className="space-y-8 text-white text-lg leading-[1.8]">
          <p>
            Born in 2003 in Germany, Hamburg — the son of a Kazakhstani mother who emigrated
            after the fall of the Soviet Union and a Ukrainian father. Growing up between
            cultures and languages shaped everything about how I see the world. Until I was
            six, I spoke only Russian. Today, Russian is still my mother tongue, but German
            and English have become just as much a part of who I am.
          </p>

          <p>
            I found acting at fifteen. In 2018, I joined the Ohnsorg Jugendclub in Hamburg,
            where I spent three years performing plays in Plattdeutsch — a Low German dialect
            with a rich theatrical tradition. It was an unusual entry point, but it taught me
            something fundamental about language and performance: how a shift in dialect can
            completely change the texture of a character.
          </p>

          <p>
            At sixteen, I booked my first commercial — a spot for Tchibo, directed by Nico
            Beier. It was a small step, but it gave me my first real taste of working on set
            and in front of a camera.
          </p>

          <p>
            From 2021 to 2024, I worked with the Thalia Theater RESET group in Hamburg under
            the direction of Alinga Gregor. Those three years deepened my understanding of
            ensemble work and contemporary theater. Since then, I&apos;ve moved more into
            short film, which is where most of my focus is now.
          </p>

          <p>
            Outside of acting, I&apos;ve been building software since mid-2025 — everyday
            apps for everyday people. If you&apos;re curious, you can find my projects on
            the{" "}
            <Link href="/creative" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors">
              Software
            </Link>{" "}
            page.
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
