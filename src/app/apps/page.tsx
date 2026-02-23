import Link from "next/link";

export const metadata = {
  title: "Apps — Eduard Bruch",
  description:
    "All mobile applications by Eduard Bruch — spiritual, vault, health, religious study, utility, and productivity apps.",
};

interface AppNiche {
  name: string;
  description: string;
  privacyUrl: string;
  termsUrl: string;
  apps: string[];
  color: string;
}

const niches: AppNiche[] = [
  {
    name: "Spiritual & Esotherik",
    description:
      "Spiritual exploration and entertainment apps for tarot, astrology, numerology, and more.",
    privacyUrl: "/esotherik/privacy",
    termsUrl: "/esotherik/terms",
    color: "border-purple-500",
    apps: [
      "Tarot Reader",
      "Daily Horoscope",
      "Birth Chart",
      "Vedic Astrology",
      "Zodiac Compatibility",
      "Chinese Zodiac",
      "Mercury Retrograde",
      "Moon Calendar",
      "Palm Reader",
      "Aura Reader",
      "Face Reading",
      "Coffee Cup Reading",
      "Numerology",
      "Human Design",
      "Soul Name",
      "Biorhythm",
      "Dream Dictionary",
      "Lucid Dreaming",
      "SpellBook",
      "Witch's Herbal",
      "Witch's Calendar",
      "Smudging Guide",
      "Sigil Generator",
      "I Ching",
      "Rune Reading",
      "Oracle Cards",
      "Pendulum",
      "Past Life",
      "Spirit Animal",
      "Chakra Scanner",
      "Reiki Timer",
      "Sound Healing",
      "Manifestation Timer",
      "Affirmation Cards",
      "Astrology Memes",
    ],
  },
  {
    name: "Vault & Privacy",
    description:
      "Secure, encrypted on-device storage apps disguised as everyday utilities.",
    privacyUrl: "/vault/privacy",
    termsUrl: "/vault/terms",
    color: "border-amber-500",
    apps: [
      "CalcVault",
      "CameraVault",
      "BrowserVault",
      "FitnessVault",
      "GameVault",
      "MailVault",
      "MusicVault",
      "TranslatorVault",
    ],
  },
  {
    name: "Quit Addiction",
    description:
      "Tracking and motivation tools to help you quit smoking, vaping, and other habits.",
    privacyUrl: "/apps/privacy",
    termsUrl: "/apps/terms",
    color: "border-emerald-500",
    apps: [
      "Quit Vaping",
      "Quit Nicotine Pouches",
      "Quit Smoking Tracker",
      "Quit Weed",
      "Quit Porn",
    ],
  },
  {
    name: "Religious Study",
    description:
      "Read, study, and annotate sacred texts from major world religions.",
    privacyUrl: "/apps/privacy",
    termsUrl: "/apps/terms",
    color: "border-blue-500",
    apps: [
      "Bible Study",
      "Quran Study",
      "Gita Study",
      "Torah Study",
      "Dhamma Study",
      "Guru Granth",
    ],
  },
  {
    name: "PDF Creator",
    description:
      "Scan documents, merge, split, compress & edit PDFs. All-in-one PDF toolkit.",
    privacyUrl: "/pdfcreator/privacy",
    termsUrl: "/pdfcreator/terms",
    color: "border-indigo-500",
    apps: ["PDF Creator"],
  },
  {
    name: "Utility & Productivity",
    description: "Everyday tools for scanning, recording, converting, and more.",
    privacyUrl: "/apps/privacy",
    termsUrl: "/apps/terms",
    color: "border-neutral-400",
    apps: [
      "Double Calculator",
      "Unit Convert",
      "Voice Recorder",
      "QR Scanner",
      "Teleprompter",
    ],
  },
  {
    name: "Health & Family",
    description: "Track your pregnancy journey week by week.",
    privacyUrl: "/apps/privacy",
    termsUrl: "/apps/terms",
    color: "border-pink-500",
    apps: ["BabyBump"],
  },
];

export default function AppsPage() {
  const totalApps = niches.reduce((sum, n) => sum + n.apps.length, 0);

  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">Our Apps</h1>
      <p className="mb-12 text-lg text-neutral-400">
        {totalApps} apps across {niches.length} categories — all developed by
        Eduard Bruch.
      </p>

      <div className="space-y-12">
        {niches.map((niche) => (
          <section
            key={niche.name}
            className={`rounded-lg border-l-4 ${niche.color} bg-white/[0.03] p-6 md:p-8`}
          >
            {/* Niche Header */}
            <div className="mb-6">
              <h2 className="mb-2 text-2xl font-semibold text-white">
                {niche.name}
              </h2>
              <p className="mb-4 text-neutral-400">{niche.description}</p>

              {/* Legal Links */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href={niche.privacyUrl}
                  className="inline-flex items-center gap-1.5 rounded bg-white/10 px-3 py-1.5 text-sm text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                >
                  Privacy Policy
                </Link>
                <Link
                  href={niche.termsUrl}
                  className="inline-flex items-center gap-1.5 rounded bg-white/10 px-3 py-1.5 text-sm text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* App List */}
            <div className="flex flex-wrap gap-2">
              {niche.apps.map((app) => (
                <span
                  key={app}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-neutral-300"
                >
                  {app}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm text-neutral-500">
              {niche.apps.length} app{niche.apps.length !== 1 ? "s" : ""}
            </p>
          </section>
        ))}
      </div>

      {/* Shared Legal Pages */}
      <section className="mt-16 rounded-lg border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          Shared Legal Pages
        </h2>
        <p className="mb-6 text-neutral-400">
          The following pages apply to all {totalApps} apps:
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/impressum"
            className="inline-flex items-center gap-1.5 rounded bg-white/10 px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/20 hover:text-white"
          >
            Impressum (Legal Notice)
          </Link>
          <Link
            href="/support"
            className="inline-flex items-center gap-1.5 rounded bg-white/10 px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/20 hover:text-white"
          >
            Support
          </Link>
        </div>
      </section>

      <p className="mt-12 text-sm text-neutral-500">
        Developed by Eduard Bruch — Hamburg, Germany
      </p>
    </main>
  );
}
