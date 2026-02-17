"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface App {
  name: string;
  description: string;
}

interface Category {
  title: string;
  icon: string;
  accent: string;
  bg: string;
  privacyUrl: string;
  apps: App[];
}

const categories: Category[] = [
  {
    title: "Spiritual & Esotherik",
    icon: "🔮",
    accent: "border-purple-500/60",
    bg: "bg-purple-500/5",
    privacyUrl: "/esotherik/privacy",
    apps: [
      { name: "Tarot Reader", description: "Daily tarot card readings and interpretations" },
      { name: "Daily Horoscope", description: "Personalized daily zodiac horoscope readings" },
      { name: "Birth Chart", description: "Generate and interpret your natal birth chart" },
      { name: "Vedic Astrology", description: "Jyotish-based astrological readings and insights" },
      { name: "Zodiac Compatibility", description: "Check love and friendship zodiac compatibility" },
      { name: "Chinese Zodiac", description: "Explore your Chinese zodiac sign and traits" },
      { name: "Mercury Retrograde", description: "Track planetary retrogrades and their effects" },
      { name: "Moon Calendar", description: "Track lunar phases and plan moon rituals" },
      { name: "Palm Reader", description: "AI-powered palm line analysis and readings" },
      { name: "Aura Reader", description: "Scan and interpret your personal energy aura" },
      { name: "Face Reading", description: "Analyze facial features for personality insights" },
      { name: "Coffee Cup Reading", description: "Turkish coffee cup fortune telling" },
      { name: "Numerology", description: "Discover the spiritual meaning of your numbers" },
      { name: "Human Design", description: "Discover your unique energy type and strategy" },
      { name: "Soul Name", description: "Discover your spiritual soul name" },
      { name: "Biorhythm", description: "Track physical, emotional, and intellectual cycles" },
      { name: "Dream Dictionary", description: "Decode the hidden meaning behind your dreams" },
      { name: "Lucid Dreaming", description: "Tools and techniques for conscious dreaming" },
      { name: "SpellBook", description: "Discover and cast spells for spiritual practice" },
      { name: "Witch's Herbal", description: "Encyclopedia of magical herbs and their properties" },
      { name: "Witch's Calendar", description: "Sabbats, moon phases, and magical planning" },
      { name: "Smudging Guide", description: "Step-by-step cleansing and smudging rituals" },
      { name: "Sigil Generator", description: "Create magical sigils from your intentions" },
      { name: "I Ching", description: "Ancient Chinese divination oracle readings" },
      { name: "Rune Reading", description: "Cast and interpret Norse rune stones" },
      { name: "Oracle Cards", description: "Draw and interpret oracle guidance cards" },
      { name: "Pendulum", description: "Digital dowsing pendulum for yes/no guidance" },
      { name: "Past Life", description: "Explore your past life connections and karma" },
      { name: "Spirit Animal", description: "Find and connect with your spirit animal guide" },
      { name: "Chakra Scanner", description: "Scan and balance your seven energy centers" },
      { name: "Reiki Timer", description: "Timed sessions for Reiki energy healing" },
      { name: "Sound Healing", description: "Healing frequencies and sound bath sessions" },
      { name: "Manifestation Timer", description: "Guided manifestation and visualization timer" },
      { name: "Affirmation Cards", description: "Daily positive affirmation card draws" },
      { name: "Astrology Memes", description: "Fun and relatable astrology humor content" },
    ],
  },
  {
    title: "Vault & Privacy",
    icon: "🔒",
    accent: "border-amber-500/60",
    bg: "bg-amber-500/5",
    privacyUrl: "/vault/privacy",
    apps: [
      { name: "CalcVault", description: "Secret photo and video vault disguised as a calculator" },
      { name: "CameraVault", description: "Encrypted media vault disguised as a camera app" },
      { name: "BrowserVault", description: "Private encrypted web browser with vault storage" },
      { name: "FitnessVault", description: "Private vault hidden behind a fitness tracker" },
      { name: "GameVault", description: "Encrypted media vault disguised as a game" },
      { name: "MailVault", description: "Secure vault hidden behind a mail client" },
      { name: "MusicVault", description: "Private vault disguised as a music player" },
      { name: "TranslatorVault", description: "Encrypted vault hidden behind a translator" },
    ],
  },
  {
    title: "Quit Addiction",
    icon: "💪",
    accent: "border-emerald-500/60",
    bg: "bg-emerald-500/5",
    privacyUrl: "/apps/privacy",
    apps: [
      { name: "Quit Vaping", description: "Track your vaping cessation journey" },
      { name: "Quit Nicotine Pouches", description: "Break free from nicotine pouch addiction" },
      { name: "Quit Smoking Tracker", description: "Monitor your smoke-free progress" },
      { name: "Quit Weed", description: "Track your cannabis-free journey" },
      { name: "Quit Porn", description: "Recovery tracker for pornography addiction" },
    ],
  },
  {
    title: "Religious Study",
    icon: "📖",
    accent: "border-blue-500/60",
    bg: "bg-blue-500/5",
    privacyUrl: "/apps/privacy",
    apps: [
      { name: "Bible Study", description: "Read and study the Holy Bible" },
      { name: "Quran Study", description: "Read and study the Holy Quran" },
      { name: "Gita Study", description: "Read and study the Bhagavad Gita" },
      { name: "Torah Study", description: "Read and study the Torah" },
      { name: "Dhamma Study", description: "Read and study Buddhist teachings" },
      { name: "Guru Granth", description: "Read and study the Guru Granth Sahib" },
    ],
  },
  {
    title: "Utility & Productivity",
    icon: "⚙️",
    accent: "border-neutral-400/60",
    bg: "bg-neutral-400/5",
    privacyUrl: "/apps/privacy",
    apps: [
      { name: "PDF Creator", description: "Create, scan, edit, and manage PDF documents" },
      { name: "Double Calculator", description: "Dual-screen calculator for quick math" },
      { name: "Unit Convert", description: "Convert between hundreds of measurement units" },
      { name: "Voice Recorder", description: "High-quality audio recording and playback" },
      { name: "QR Scanner", description: "Scan QR codes and barcodes instantly" },
      { name: "Teleprompter", description: "Professional teleprompter for speeches and videos" },
      { name: "PDF Scanner", description: "Scan physical documents and create PDFs" },
    ],
  },
  {
    title: "Health & Family",
    icon: "👶",
    accent: "border-pink-500/60",
    bg: "bg-pink-500/5",
    privacyUrl: "/apps/privacy",
    apps: [
      { name: "BabyBump", description: "Track your pregnancy journey week by week" },
    ],
  },
];

const totalApps = categories.reduce((sum, c) => sum + c.apps.length, 0);

export default function SoftwareDevelopmentPage() {
  return (
    <section className="min-h-screen pt-40 pb-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-3xl md:text-5xl font-light tracking-[0.2em] mb-6">
            SOFTWARE DEVELOPMENT
          </h1>
          <div className="w-16 h-px bg-white/20 mx-auto mb-8" />
          <p className="text-white/50 text-sm md:text-base tracking-widest leading-relaxed max-w-xl mx-auto">
            {totalApps} iOS apps across {categories.length} categories
            <br />
            <span className="text-white/30">
              designed, developed, and published by Eduard Bruch
            </span>
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-16">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 * catIndex }}
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <span className="text-2xl" role="img" aria-label={category.title}>
                    {category.icon}
                  </span>
                  <div>
                    <h2 className="text-lg md:text-xl font-light tracking-[0.15em] text-white uppercase">
                      {category.title}
                    </h2>
                    <p className="text-xs text-white/30 tracking-widest mt-1">
                      {category.apps.length} APP{category.apps.length !== 1 ? "S" : ""}
                    </p>
                  </div>
                </div>
                <Link
                  href={category.privacyUrl}
                  className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-xs tracking-wider text-white/40 hover:border-white/30 hover:text-white/70 transition-all"
                >
                  Privacy Policy
                </Link>
              </div>

              {/* App Grid */}
              <div className={`rounded-xl border ${category.accent} ${category.bg} p-5 md:p-8`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.apps.map((app) => (
                    <div
                      key={app.name}
                      className="group rounded-lg border border-white/[0.06] bg-black/30 px-5 py-4 hover:border-white/15 hover:bg-white/[0.03] transition-all duration-300"
                    >
                      <p className="text-white text-sm font-medium tracking-wide mb-1.5">
                        {app.name}
                      </p>
                      <p className="text-white/35 text-xs leading-relaxed">
                        {app.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile privacy link */}
              <div className="sm:hidden mt-4 text-center">
                <Link
                  href={category.privacyUrl}
                  className="inline-flex items-center gap-2 text-xs tracking-wider text-white/40 hover:text-white/70 transition-colors"
                >
                  Privacy Policy →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Angel Company Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24"
        >
          <a
            href="https://angelcompanysolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="border border-white/10 p-14 md:p-20 text-center transition-all duration-500 hover:border-white/30 hover:bg-white/[0.02] rounded-xl">
              <h2 className="text-xl md:text-2xl font-light tracking-[0.2em] mb-4 text-white/80 group-hover:text-white transition-colors">
                ANGEL COMPANY SOLUTIONS
              </h2>
              <p className="text-white/30 text-sm tracking-widest mb-10">
                Creative production and digital solutions
              </p>
              <span className="inline-flex items-center gap-3 text-white/30 text-xs tracking-[0.2em] uppercase group-hover:text-white/70 transition-colors">
                Visit Website
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
