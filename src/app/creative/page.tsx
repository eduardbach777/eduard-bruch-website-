"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface App {
  name: string;
  description: string;
}

interface Category {
  title: string;
  privacyUrl: string;
  apps: App[];
}

const categories: Category[] = [
  {
    title: "Spiritual & Esotherik",
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
    privacyUrl: "/apps/privacy",
    apps: [
      { name: "BabyBump", description: "Track your pregnancy journey week by week" },
    ],
  },
];

const totalApps = categories.reduce((sum, c) => sum + c.apps.length, 0);

export default function SoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero / Page Header */}
      <header className="pt-48 pb-24 md:pt-56 md:pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-6">
            Eduard Bruch
          </p>
          <h1 className="text-2xl md:text-4xl font-light tracking-[0.25em] mb-8">
            SOFTWARE DEVELOPMENT
          </h1>
          <div className="w-12 h-px bg-white/15 mx-auto mb-8" />
          <p className="text-white/35 text-xs md:text-sm tracking-[0.15em]">
            {totalApps} iOS applications across {categories.length} categories
          </p>
        </motion.div>
      </header>

      {/* App Categories */}
      <div className="max-w-3xl mx-auto px-10 md:px-16 pb-40">
        {categories.map((category, catIndex) => (
          <motion.section
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 * catIndex }}
            className="mb-24 last:mb-0"
          >
            {/* Category Title */}
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="text-xs md:text-sm tracking-[0.2em] text-white/80 uppercase">
                {category.title}
                <span className="text-white/20 ml-4">
                  {category.apps.length}
                </span>
              </h2>
              <Link
                href={category.privacyUrl}
                className="text-[10px] md:text-xs tracking-[0.1em] text-white/20 hover:text-white/50 transition-colors"
              >
                Privacy
              </Link>
            </div>

            <div className="w-full h-px bg-white/5 mb-10" />

            {/* Apps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-20 md:gap-y-8">
              {category.apps.map((app) => (
                <div key={app.name}>
                  <p className="text-sm text-white/80 tracking-wide mb-1">
                    {app.name}
                  </p>
                  <p className="text-xs text-white/25 leading-relaxed">
                    {app.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        ))}

        {/* Angel Company Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32"
        >
          <a
            href="https://angelcompanysolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block group text-center py-24 border border-white/5 hover:border-white/15 transition-all duration-500"
          >
            <p className="text-xs tracking-[0.3em] text-white/20 uppercase mb-4">
              Also visit
            </p>
            <h2 className="text-base md:text-lg font-light tracking-[0.25em] text-white/60 group-hover:text-white transition-colors mb-3">
              ANGEL COMPANY SOLUTIONS
            </h2>
            <p className="text-xs tracking-[0.15em] text-white/20">
              Creative production and digital solutions
            </p>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
