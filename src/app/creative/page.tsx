"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface App {
  name: string;
  description: string;
  privacyUrl?: string;
  termsUrl?: string;
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
      { name: "369 Manifest", description: "Daily 369 manifestation journal with affirmation cards, sound frequencies, and streak tracking", privacyUrl: "/esotherik/privacy", termsUrl: "/esotherik/terms" },
      { name: "Aurum Tarot", description: "AI-powered tarot card readings and interpretations", privacyUrl: "/tarot/privacy", termsUrl: "/tarot/terms" },
      { name: "Dream Journal", description: "Log and analyze your dreams with symbol detection and lucid dreaming tools", privacyUrl: "/esotherik/privacy", termsUrl: "/esotherik/terms" },
      { name: "Human Design", description: "Discover your unique energy type, strategy, and life chart", privacyUrl: "/esotherik/privacy", termsUrl: "/esotherik/terms" },
    ],
  },
  {
    title: "Vault & Privacy",
    privacyUrl: "/vault/privacy",
    apps: [
      { name: "Stash: Private Photo Vault", description: "Encrypted file vault with three disguise modes — hide photos, videos, PDFs, documents, and any file behind a calculator, fitness tracker, or music player", privacyUrl: "/vault/privacy", termsUrl: "/vault/terms" },
    ],
  },
  {
    title: "Utility & Productivity",
    privacyUrl: "/apps/privacy",
    apps: [
      { name: "Pulse - System Monitor", description: "Beautiful macOS menu bar system monitor — CPU, memory, disk, network, battery, GPU, temperature, fans, and widgets", privacyUrl: "/pulse/privacy", termsUrl: "/pulse/terms" },
      { name: "SoundDial", description: "Per-app volume mixer for macOS — control audio levels for every app independently", privacyUrl: "/sounddial/privacy", termsUrl: "/sounddial/terms" },
      { name: "PDF OPUS", description: "Create, scan, edit, sign, OCR, and convert PDF documents", privacyUrl: "/pdfcreator/privacy", termsUrl: "/pdfcreator/terms" },
      { name: "Double Calculator", description: "Dual-screen calculator for quick math with tax and VAT", privacyUrl: "/double-calculator/privacy", termsUrl: "/double-calculator/terms" },
      { name: "Unit Convert", description: "Convert between hundreds of measurement units" },
      { name: "Click Clack", description: "Mechanical keyboard sounds and ASMR typing experience" },
      { name: "Fisheye Camera", description: "Wide-angle lens effects for photos and videos", privacyUrl: "/fisheye/privacy", termsUrl: "/fisheye/terms" },
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
          <p style={{ marginBottom: '0', fontSize: '17px', color: 'rgba(255,255,255,0.9)', letterSpacing: '0.1em' }}>
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
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '32px', borderBottom: '1px solid rgba(255,255,255,0.25)', paddingBottom: '16px' }}>
              <h2 style={{ fontSize: '14px', letterSpacing: '0.2em', color: '#fff', textTransform: 'uppercase' }}>
                {category.title}
                <span style={{ color: 'rgba(255,255,255,0.7)', marginLeft: '12px' }}>
                  {category.apps.length}
                </span>
              </h2>
              <Link
                href={category.privacyUrl}
                className="hover:text-white transition-colors"
                style={{ fontSize: '12px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.8)' }}
              >
                Privacy
              </Link>
            </div>

            {/* Apps */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px 60px' }}>
              {category.apps.map((app) => (
                <div key={app.name}>
                  <p style={{ fontSize: '18px', color: 'rgba(255,255,255,1)', letterSpacing: '0.02em', marginBottom: '6px' }}>
                    {app.name}
                  </p>
                  <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.95)', lineHeight: '1.6', marginBottom: '6px' }}>
                    {app.description}
                  </p>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <Link
                      href={app.privacyUrl || category.privacyUrl}
                      className="hover:text-white transition-colors"
                      style={{ fontSize: '13px', color: '#fff', textDecoration: 'underline', textUnderlineOffset: '3px', textDecorationColor: 'rgba(255,255,255,0.8)' }}
                    >
                      Datenschutz / Privacy
                    </Link>
                    {app.termsUrl && (
                      <Link
                        href={app.termsUrl}
                        className="hover:text-white transition-colors"
                        style={{ fontSize: '13px', color: '#fff', textDecoration: 'underline', textUnderlineOffset: '3px', textDecorationColor: 'rgba(255,255,255,0.8)' }}
                      >
                        Terms
                      </Link>
                    )}
                  </div>
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
            style={{ textAlign: 'center', padding: '80px 0', border: '1px solid rgba(255,255,255,0.25)' }}
          >
            <h2 className="group-hover:text-white transition-colors" style={{ fontSize: '18px', fontWeight: '300', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.95)', marginBottom: '12px' }}>
              ANGEL COMPANY SOLUTIONS
            </h2>
            <p style={{ fontSize: '13px', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.7)' }}>
              Creative production and digital solutions
            </p>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
