import Link from "next/link";

export const metadata = {
  title: "Overview — Eduard Bruch",
  description: "Every app at a glance — 13 native macOS utilities plus iOS & Android apps, all built solo.",
};

interface AppEntry {
  name: string;
  tagline: string;
  desc: string;
  href: string;
  storeUrl?: string;
  accent: string;
  img?: string;
}

const MAC_APPS: AppEntry[] = [
  { name: "SoundDial", tagline: "Per-App Volume Mixer", desc: "Independent volume sliders, profiles, auto-ducking, and per-app mute.", href: "/sounddial/blog", storeUrl: "https://apps.apple.com/app/sounddial/id6772792641", accent: "#d4ad5e", img: "/apps/sounddial.png" },
  { name: "Jetty", tagline: "Dock Launcher", desc: "Launch any app from the menu bar — grouped panels, one click.", href: "/jetty/blog", storeUrl: "https://apps.apple.com/app/jetty/id6806639647", accent: "#4A9EFF", img: "/apps/jetty.png" },
  { name: "Loupe", tagline: "Archive & Folder Viewer", desc: "Preview ZIP, RAR, and folder contents with Quick Look — no extracting.", href: "/loupe", storeUrl: "https://apps.apple.com/app/loupe/id6806599791", accent: "#5AC8FA", img: "/apps/loupe.png" },
  { name: "Dayedge", tagline: "Calendar Sidebar", desc: "Pin a slim calendar timeline to your screen edge — always visible.", href: "/dayedge/blog", storeUrl: "https://apps.apple.com/app/dayedge/id6806600925", accent: "#FF9500", img: "/apps/dayedge.png" },
  { name: "Renym", tagline: "Batch File Renamer", desc: "Rename hundreds of files with visual pipelines — regex, numbering, case changes.", href: "/renym/blog", storeUrl: "https://apps.apple.com/app/renym/id6806640534", accent: "#7C5CFC", img: "/apps/renym.png" },
  { name: "Optic", tagline: "Screen OCR", desc: "Select any text on screen and copy it — images, PDFs, dialogs, anything.", href: "/optic", storeUrl: "https://apps.apple.com/app/optic/id6806597766", accent: "#007AFF", img: "/apps/optic.png" },
  { name: "Lock In!", tagline: "Website Blocker", desc: "Block distracting websites and apps during focus sessions — system-wide.", href: "/lockin", storeUrl: "https://apps.apple.com/app/lockin/id6802325423", accent: "#FF3B30", img: "/apps/lockin.png" },
  { name: "Tome", tagline: "SQLite Browser", desc: "Browse, query, and edit SQLite databases in a native Mac app.", href: "/tome", storeUrl: "https://apps.apple.com/app/tome/id6806639875", accent: "#AF52DE", img: "/apps/tome.png" },
  { name: "Mediasmith", tagline: "Media Converter", desc: "Convert video, images, and audio in batch with a visual pipeline.", href: "/mediasmith", storeUrl: "https://apps.apple.com/app/mediasmith/id6805031846", accent: "#30D158", img: "/apps/mediasmith.png" },
  { name: "Bellows", tagline: "Developer Tools", desc: "41 developer tools in one native Mac app — JSON, JWT, Base64, hashes, and more.", href: "/bellows", storeUrl: "https://apps.apple.com/app/bellows/id6805032839", accent: "#FF9F0A", img: "/apps/bellows.png" },
  { name: "Tickpull", tagline: "Menu Bar Timer", desc: "Set a timer by dragging — no clicks, no typing, just one gesture.", href: "/tickpull/blog", storeUrl: "https://apps.apple.com/app/tickpull/id6806640763", accent: "#FF6B6B", img: "/apps/tickpull.png" },
  { name: "DeskCloak", tagline: "Desktop Cover", desc: "Cover your messy desktop in one click — wallpaper, blur, or solid color.", href: "/deskcloak/blog", storeUrl: "https://apps.apple.com/app/deskcloak/id6806639170", accent: "#8E8E93", img: "/apps/deskcloak.png" },
  { name: "Canopy", tagline: "Disk Space Visualizer", desc: "See exactly where your disk space goes with an interactive treemap.", href: "/canopy/blog", storeUrl: "https://apps.apple.com/app/canopy/id6806640970", accent: "#34C759", img: "/apps/canopy.png" },
];

const IOS_APPS: AppEntry[] = [
  { name: "Stash", tagline: "Secret File Vault", desc: "An encrypted vault disguised as a calculator — Face ID, intruder detection.", href: "/#stash", storeUrl: "https://apps.apple.com/app/id6759873487", accent: "#E8B33D", img: "/apps/stash-v2.png" },
  { name: "Warden", tagline: "Family Location & Safety", desc: "One shared map, place alerts, check-in, and an SOS button. Privacy-first.", href: "/warden/privacy", accent: "#34C759" },
  { name: "Double Calculator", tagline: "Tax & VAT", desc: "Dual-screen calculator with instant VAT/tax for 40+ countries.", href: "/#doublecalc", storeUrl: "https://apps.apple.com/app/id6760940001", accent: "#FF9F0A", img: "/apps/double-calculator.png" },
  { name: "Fisheye", tagline: "Camera", desc: "Wide, warped, retro fisheye photos & video, straight from your phone.", href: "/#fisheye", storeUrl: "https://apps.apple.com/app/id6760895260", accent: "#5AC8FA", img: "/apps/fisheye.png" },
];

const APPLE_PATH = "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 80.6c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.3zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z";

function AppCard({ app }: { app: AppEntry }) {
  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-[#0b0b0d] transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--accent)]"
      style={{ ["--accent" as string]: app.accent }}
    >
      <div
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
        style={{ background: app.accent }}
      />

      <Link href={app.href} className="absolute inset-0 z-10" aria-label={app.name}>
        <span className="sr-only">{app.name}</span>
      </Link>

      <div className="relative aspect-[16/10] overflow-hidden bg-[#08080a]">
        {app.img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={app.img}
            alt={app.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{ background: `radial-gradient(120% 120% at 65% 20%, ${app.accent}26, #08080a 68%)` }}
          >
            <span className="font-serif text-6xl" style={{ color: app.accent }}>✦</span>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0b0b0d] to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6 pt-5">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: app.accent }}>
          {app.tagline}
        </div>
        <h3 className="mt-1.5 font-serif text-2xl font-semibold text-white">{app.name}</h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-neutral-400">{app.desc}</p>

        <div className="mt-5 flex items-center gap-4 border-t border-neutral-800/80 pt-4">
          <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-white transition-all group-hover:gap-1.5">
            View
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </span>
          {app.storeUrl ? (
            <a
              href={app.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20 ml-auto inline-flex items-center gap-1.5 rounded-full border border-neutral-700 px-3.5 py-1.5 text-[12px] font-medium text-neutral-300 transition hover:border-white/40 hover:text-white"
            >
              <svg viewBox="0 0 384 512" className="h-3 w-3 fill-current"><path d={APPLE_PATH} /></svg>
              App Store
            </a>
          ) : (
            <span className="ml-auto rounded-full border border-neutral-800 px-3.5 py-1.5 text-[12px] font-medium text-neutral-600">
              Coming soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function Section({ kicker, title, apps }: { kicker: string; title: string; apps: AppEntry[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:px-12">
      <div className="mb-10 flex items-baseline justify-between border-t border-neutral-800 pt-8">
        <div>
          <div className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-[#d4ad5e]">{kicker}</div>
          <h2 className="mt-2 font-serif text-4xl font-semibold text-white sm:text-5xl">{title}</h2>
        </div>
        <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 sm:block">
          {apps.length} apps
        </span>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {apps.map((app) => <AppCard key={app.name} app={app} />)}
      </div>
    </section>
  );
}

export default function OverviewPage() {
  return (
    <main className="min-h-screen bg-[#050506] text-white">
      <section className="mx-auto max-w-6xl px-6 pt-40 pb-6 md:px-12">
        <p className="font-mono text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-[#d4ad5e] mb-5">
          Overview
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl font-semibold leading-[1.02] tracking-tight text-white">
          Every app, at a glance
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-neutral-300 leading-relaxed">
          {MAC_APPS.length} native macOS utilities and {IOS_APPS.length} iOS &amp; Android apps — all designed, built, and shipped solo.
        </p>
      </section>

      <Section kicker="Desktop" title="macOS" apps={MAC_APPS} />
      <Section kicker="Mobile" title="iOS & Android" apps={IOS_APPS} />

      <div className="mx-auto max-w-6xl px-6 pb-24 md:px-12">
        <Link
          href="/apps"
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-400 transition hover:text-white"
        >
          Browse the full app catalog (40+ apps) →
        </Link>
      </div>
    </main>
  );
}
