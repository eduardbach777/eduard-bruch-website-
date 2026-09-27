import Link from "next/link";
import { buildStoreUrl, campaignFor } from "@/lib/appstore";

export const metadata = {
  title: "SoundDial — Per-App Volume Mixer for Mac",
  description:
    "Give every app on your Mac its own volume slider: 0–200% per app, per-app EQ and output device, auto-ducking during calls, profiles and DAC control. A native menu bar app.",
  alternates: { canonical: "https://www.eduardbruch.com/sounddial" },
};

const STORE_URL = buildStoreUrl({ appSlug: "sounddial", appId: "6772792641", campaign: campaignFor.landing("sounddial") });

const FEATURES = [
  {
    title: "Per-app volume, 0–200%",
    body: "Turn Spotify down during a Zoom call, boost a quiet video in Chrome past 100% — every app gets its own slider with a live level meter. The system volume stays where it is.",
  },
  {
    title: "Works with every app",
    body: "Safari, Chrome, Firefox, Spotify, Music, Zoom, Discord and Electron apps. Helper processes are grouped under the app they belong to.",
  },
  {
    title: "Per-app equalizer",
    body: "10 bands and 11 presets — Bass Boost, Vocal, Podcast, Late Night and more — plus left/right balance for each app.",
  },
  {
    title: "Output per app",
    body: "Play music on your USB DAC while calls stay on your headphones, at the same time.",
  },
  {
    title: "Auto-ducking during calls",
    body: "When a call starts in Zoom, Teams, FaceTime, Webex, Slack, Discord, Skype, WhatsApp, Telegram or a browser, other apps get quieter — and come back when the call ends.",
  },
  {
    title: "Profiles, shortcuts, automation",
    body: "Save your whole mix as Work or Late Night and switch in one click. Control-Option-S opens SoundDial; Shortcuts actions and sounddial:// links work with Raycast, Alfred and Stream Deck.",
  },
  {
    title: "Made for DACs",
    body: "Switch output devices, change the sample rate and get a software volume for DACs and audio interfaces without their own volume control.",
  },
  {
    title: "Guided setup",
    body: "Walks you through the one macOS permission and confirms that everything really works — in 34 languages.",
  },
];

export default function SoundDialLanding() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-neutral-200">
      <p className="mb-3 text-sm font-medium uppercase tracking-wider text-indigo-400">macOS</p>
      <h1 className="mb-4 text-4xl font-bold text-white">SoundDial</h1>
      <p className="mb-8 text-xl text-neutral-300">A volume slider for every app on your Mac.</p>

      <p className="mb-10 text-neutral-400">
        macOS has one volume for everything. SoundDial gives every app its own — right in your menu bar, with an
        equalizer, its own output device and automatic ducking during calls.
      </p>

      <a
        href={STORE_URL}
        className="mb-12 inline-block rounded-lg bg-indigo-500 px-5 py-2.5 font-semibold text-white hover:bg-indigo-400"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download on the Mac App Store
      </a>

      <div className="mb-12 grid gap-6 sm:grid-cols-2">
        {FEATURES.map((f) => (
          <div key={f.title}>
            <h2 className="mb-1 font-semibold text-white">{f.title}</h2>
            <p className="text-sm leading-relaxed text-neutral-400">{f.body}</p>
          </div>
        ))}
      </div>

      <div className="mb-12 rounded-lg border border-neutral-800 bg-neutral-900/50 p-5">
        <p className="mb-1 font-semibold text-white">Private by design. Pay once.</p>
        <p className="text-sm text-neutral-400">
          Audio is processed on your Mac in real time — nothing is recorded, stored or sent anywhere. No account, no
          analytics, no internet connection. One purchase on the Mac App Store, every update included.
        </p>
      </div>

      <h2 className="mb-3 text-lg font-semibold text-white">Requirements</h2>
      <p className="mb-10 text-sm text-neutral-400">
        macOS 14.2 (Sonoma) or later and the macOS “System Audio Recording Only” permission — the guided setup explains
        each step.
      </p>

      <h2 className="mb-3 text-lg font-semibold text-white">Guides</h2>
      <p className="mb-10 text-sm text-neutral-400">
        Too-quiet FaceTime calls, per-app volume, late-night movie audio and more:{" "}
        <Link href="/sounddial/blog" className="text-indigo-400 underline">
          SoundDial guides
        </Link>
        .
      </p>

      <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-neutral-800 pt-8 text-sm">
        <a href={STORE_URL} className="text-indigo-400 underline" target="_blank" rel="noopener noreferrer">
          App Store
        </a>
        <Link href="/sounddial/privacy" className="text-indigo-400 underline">
          Privacy Policy / Datenschutz
        </Link>
        <Link href="/sounddial/terms" className="text-indigo-400 underline">
          Terms of Use / Nutzungsbedingungen
        </Link>
        <Link href="/support" className="text-indigo-400 underline">
          Support
        </Link>
        <a href="mailto:support@eduardbruch.com" className="text-indigo-400 underline">
          support@eduardbruch.com
        </a>
        <Link href="/impressum" className="text-indigo-400 underline">
          Impressum
        </Link>
      </div>
    </main>
  );
}
