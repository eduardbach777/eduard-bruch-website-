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
      <header style={{ paddingTop: '160px', paddingBottom: '80px' }} className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{ marginBottom: '24px' }} className="text-2xl md:text-4xl font-light tracking-[0.25em]">
            SOFTWARE DEVELOPMENT
          </h1>
          <p style={{ marginBottom: '0', fontSize: '17px', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.1em' }}>
            {totalApps} iOS applications across {categories.length} categories
          </p>
        </motion.div>
      </header>

      {/* App Categories */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 40px 160px 40px' }}>
        {categories.map((category, catIndex) => (
          <motion.section
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 * catIndex }}
            style={{ marginBottom: '100px' }}
          >
            {/* Category Title */}
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '32px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '16px' }}>
              <h2 style={{ fontSize: '14px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase' }}>
                {category.title}
                <span style={{ color: 'rgba(255,255,255,0.25)', marginLeft: '12px' }}>
                  {category.apps.length}
                </span>
              </h2>
              <Link
                href={category.privacyUrl}
                className="hover:text-white/60 transition-colors"
                style={{ fontSize: '12px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)' }}
              >
                Privacy
              </Link>
            </div>

            {/* Apps */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px 60px' }}>
              {category.apps.map((app) => (
                <div key={app.name}>
                  <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.95)', letterSpacing: '0.02em', marginBottom: '6px' }}>
                    {app.name}
                  </p>
                  <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.6' }}>
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
          style={{ marginTop: '60px' }}
        >
          <a
            href="https://angelcompanysolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
            style={{ textAlign: 'center', padding: '80px 0', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <h2 className="group-hover:text-white transition-colors" style={{ fontSize: '18px', fontWeight: '300', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.6)', marginBottom: '12px' }}>
              ANGEL COMPANY SOLUTIONS
            </h2>
            <p style={{ fontSize: '13px', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.25)' }}>
              Creative production and digital solutions
            </p>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
