"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface AppEntry {
  name: string;
  tagline: string;
  description: string;
  screenshot: string | null;
  platform: "iOS" | "macOS" | "iOS & macOS";
  privacyUrl: string;
  termsUrl?: string;
  appStoreUrl?: string;
}

const apps: AppEntry[] = [
  {
    name: "Aurum Tarot",
    tagline: "AI-Powered Card Reading",
    description:
      "Draw daily tarot cards with AI-generated interpretations. Explore the Major and Minor Arcana, save readings to your journal, and discover guidance across love, career, and personal growth. Beautiful golden aesthetic with 3D card animations.",
    screenshot: "/apps/aurum-tarot.png",
    platform: "iOS",
    privacyUrl: "/tarot/privacy",
    termsUrl: "/tarot/terms",
  },
  {
    name: "Stash",
    tagline: "Secret File Vault",
    description:
      "Encrypted vault disguised as a calculator, fitness tracker, or music player. Hide photos, videos, PDFs, and any file behind a passcode with Face ID. Intruder detection, guest mode, and iCloud backup. Your privacy, protected.",
    screenshot: "/apps/stash.png",
    platform: "iOS",
    privacyUrl: "/vault/privacy",
    termsUrl: "/vault/terms",
  },
  {
    name: "Pulse",
    tagline: "System Monitor",
    description:
      "Beautiful macOS menu bar system monitor. Track CPU, memory, disk, GPU, network, battery, temperature, and fans in real-time. Desktop widgets, customizable themes, and detailed process management — all from your menu bar.",
    screenshot: "/apps/pulse.png",
    platform: "macOS",
    privacyUrl: "/pulse/privacy",
    termsUrl: "/pulse/terms",
  },
  {
    name: "Human Design",
    tagline: "Chart & Type",
    description:
      "Discover your unique energy type, strategy, authority, and profile. Generate your personal Human Design body graph from your birth data and explore what makes you, you. Gates, channels, centers — all decoded.",
    screenshot: null,
    platform: "iOS",
    privacyUrl: "/esotherik/privacy",
    termsUrl: "/esotherik/terms",
  },
  {
    name: "369 Manifest",
    tagline: "Daily Journal",
    description:
      "The 369 manifestation method turned into a guided daily ritual. Write your desire 3 times each morning, 6 times each afternoon, and 9 times each evening. 140 affirmation cards, 29 sound frequencies, scripting journal, gratitude log, and streak tracking.",
    screenshot: "/apps/369-manifest.png",
    platform: "iOS",
    privacyUrl: "/esotherik/privacy",
    termsUrl: "/esotherik/terms",
  },
  {
    name: "Dream Journal",
    tagline: "Lucid Dreams",
    description:
      "Log your dreams, detect symbols automatically from 196 archetypes, track lucidity levels, and discover recurring patterns. Mood tracking, vividness stars, and a full dream symbol dictionary with interpretations.",
    screenshot: "/apps/dream-journal.png",
    platform: "iOS",
    privacyUrl: "/esotherik/privacy",
    termsUrl: "/esotherik/terms",
  },
  {
    name: "SoundDial",
    tagline: "Per-App Volume Mixer",
    description:
      "Control the volume of every app independently from your macOS menu bar. Profiles, auto-ducking, per-app mute, and boost. The volume mixer macOS should have built in.",
    screenshot: "/apps/sounddial.png",
    platform: "macOS",
    privacyUrl: "/sounddial/privacy",
    termsUrl: "/sounddial/terms",
  },
  {
    name: "PDF OPUS",
    tagline: "Edit, Sign, OCR & Convert",
    description:
      "Complete PDF toolkit for macOS. Merge, split, compress, annotate, redact, watermark, lock, OCR, fill forms, and convert. 25 tools in one native app — fast, private, no subscription required.",
    screenshot: null,
    platform: "macOS",
    privacyUrl: "/pdfcreator/privacy",
    termsUrl: "/pdfcreator/terms",
  },
  {
    name: "Double Calculator",
    tagline: "Tax & VAT",
    description:
      "Dual-screen calculator with instant tax and VAT calculations. Country-specific rates, custom percentages, pinned results, and a clean split-screen interface for comparing values side by side.",
    screenshot: "/apps/double-calculator.png",
    platform: "iOS",
    privacyUrl: "/double-calculator/privacy",
    termsUrl: "/double-calculator/terms",
  },
  {
    name: "Unit Convert",
    tagline: "WideUnit",
    description:
      "Convert between hundreds of measurement units instantly. Length, weight, temperature, speed, volume, area, time, data, and more. Clean interface, offline, and fast.",
    screenshot: null,
    platform: "iOS",
    privacyUrl: "/apps/privacy",
  },
  {
    name: "Click Clack",
    tagline: "Keyboard Sounds",
    description:
      "Mechanical keyboard sounds for your Mac. Cherry MX Blue, Holy Panda, Boba U4T, and 36 more switches. ASMR typing with key-up sounds, mouse clicks, and per-key audio. Satisfying every keystroke.",
    screenshot: "/apps/click-clack.png",
    platform: "macOS",
    privacyUrl: "/apps/privacy",
  },
  {
    name: "Fisheye Camera",
    tagline: "WideEye",
    description:
      "Live fisheye lens effects for photos and videos. Five distortion levels from soft to ultra. See the effect in real-time before you shoot. Skate, nature, architecture — everything looks better through a fisheye.",
    screenshot: "/apps/fisheye.png",
    platform: "iOS",
    privacyUrl: "/fisheye/privacy",
    termsUrl: "/fisheye/terms",
  },
];

function AppSection({
  app,
  index,
}: {
  app: AppEntry;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex flex-col md:flex-row items-center gap-8 md:gap-16 py-20 md:py-28"
      style={{ flexDirection: isEven ? undefined : undefined }}
    >
      {/* Screenshot — left on even, right on odd */}
      <div
        className={`w-full md:w-1/2 flex justify-center ${!isEven ? "md:order-2" : ""}`}
      >
        {app.screenshot ? (
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full max-w-md"
          >
            <Image
              src={app.screenshot}
              alt={`${app.name} screenshot`}
              width={800}
              height={1200}
              className="w-full h-auto rounded-2xl"
              style={{ objectFit: "contain" }}
              priority={index < 2}
            />
          </motion.div>
        ) : (
          <div className="w-full max-w-md aspect-[3/4] rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
            <span className="text-neutral-600 text-sm tracking-widest uppercase">
              Coming Soon
            </span>
          </div>
        )}
      </div>

      {/* Info — right on even, left on odd */}
      <div
        className={`w-full md:w-1/2 ${!isEven ? "md:order-1" : ""}`}
      >
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-2">
          {app.platform}
        </p>
        <h2 className="text-3xl md:text-4xl font-light text-white mb-2 tracking-wide">
          {app.name}
        </h2>
        <p className="text-lg text-neutral-400 mb-6 tracking-wide">
          {app.tagline}
        </p>
        <p className="text-base text-neutral-300 leading-relaxed mb-8 max-w-lg">
          {app.description}
        </p>
        <div className="flex gap-6">
          <Link
            href={app.privacyUrl}
            className="text-sm text-neutral-500 hover:text-white transition-colors underline underline-offset-4 decoration-neutral-700"
          >
            Privacy
          </Link>
          {app.termsUrl && (
            <Link
              href={app.termsUrl}
              className="text-sm text-neutral-500 hover:text-white transition-colors underline underline-offset-4 decoration-neutral-700"
            >
              Terms
            </Link>
          )}
        </div>
      </div>
    </motion.section>
  );
}

export default function SoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="text-center" style={{ paddingTop: "160px", paddingBottom: "60px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl md:text-4xl font-light tracking-[0.25em] mb-4">
            SOFTWARE DEVELOPMENT
          </h1>
          <p className="text-base text-neutral-400 tracking-wider">
            {apps.length} applications across iOS &amp; macOS
          </p>
        </motion.div>
      </header>

      {/* Apps */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 pb-40">
        {apps.map((app, index) => (
          <AppSection key={app.name} app={app} index={index} />
        ))}

        {/* Divider */}
        <div className="border-t border-neutral-800 my-20" />

        {/* Angel Company */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <a
            href="https://angelcompanysolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block group text-center py-20 border border-neutral-800 rounded-xl hover:border-neutral-600 transition-colors"
          >
            <h2 className="text-lg font-light tracking-[0.25em] text-neutral-300 group-hover:text-white transition-colors mb-3">
              ANGEL COMPANY SOLUTIONS
            </h2>
            <p className="text-sm tracking-wider text-neutral-600">
              Creative production and digital solutions
            </p>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
