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
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "0",
        alignItems: "center",
        minHeight: "600px",
        padding: "80px 0",
      }}
    >
      {/* Screenshot */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          order: isEven ? 0 : 1,
        }}
      >
        {app.screenshot ? (
          <motion.div
            animate={{ y: [0, -18, 0], scale: [1, 1.02, 1] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ width: "100%", maxWidth: "480px" }}
          >
            <Image
              src={app.screenshot}
              alt={`${app.name} screenshot`}
              width={960}
              height={1440}
              style={{ width: "100%", height: "auto", borderRadius: "16px", objectFit: "contain" }}
              priority={index < 2}
            />
          </motion.div>
        ) : (
          <div style={{
            width: "100%",
            maxWidth: "480px",
            aspectRatio: "3/4",
            borderRadius: "16px",
            backgroundColor: "rgb(23,23,23)",
            border: "1px solid rgb(38,38,38)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <span style={{ color: "rgb(82,82,82)", fontSize: "14px", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Coming Soon
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div
        style={{
          order: isEven ? 1 : 0,
          padding: isEven ? "0 0 0 60px" : "0 60px 0 0",
        }}
      >
        <p style={{ fontSize: "14px", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "14px" }}>
          {app.platform}
        </p>
        <h2 style={{ fontSize: "52px", fontWeight: 300, color: "#fff", marginBottom: "10px", letterSpacing: "0.02em", lineHeight: 1.1, textShadow: "0 0 40px rgba(255,255,255,0.15), 0 0 80px rgba(255,255,255,0.08)" }}>
          {app.name}
        </h2>
        <p style={{ fontSize: "22px", color: "rgba(255,255,255,0.7)", marginBottom: "32px", letterSpacing: "0.05em", textShadow: "0 0 30px rgba(255,255,255,0.1)" }}>
          {app.tagline}
        </p>
        <p style={{ fontSize: "19px", color: "rgba(255,255,255,0.9)", lineHeight: 1.85, marginBottom: "40px", maxWidth: "500px" }}>
          {app.description}
        </p>
        <div style={{ display: "flex", gap: "24px" }}>
          <Link
            href={app.privacyUrl}
            className="hover:text-white transition-colors"
            style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", textDecoration: "underline", textUnderlineOffset: "4px", textDecorationColor: "rgba(255,255,255,0.3)" }}
          >
            Privacy
          </Link>
          {app.termsUrl && (
            <Link
              href={app.termsUrl}
              className="hover:text-white transition-colors"
              style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", textDecoration: "underline", textUnderlineOffset: "4px", textDecorationColor: "rgba(255,255,255,0.3)" }}
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
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px 160px 40px" }}>
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
