import Link from "next/link";

export const metadata = {
  title: "Optic — Screen OCR for Mac",
  description:
    "Screen OCR that reads anything on your display. Select any text or QR code on screen — instantly recognized, copied, and ready to use. A native Mac menu bar app.",
};

const FEATURES = [
  {
    title: "Instant text capture",
    body: "Press ⌘⇧2, drag a selection over any text — web pages, PDFs, images, code. Optic extracts every character and copies it to your clipboard.",
  },
  {
    title: "QR code scanning",
    body: "Press ⌘⇧3, select a QR code on screen. The encoded URL is copied and ready to open in one click.",
  },
  {
    title: "Text preview window",
    body: "Click any capture to see the full recognized text in a floating window — selectable, searchable, with character count. No competitor does this.",
  },
  {
    title: "Text-to-speech",
    body: "Hit Speak on any text capture and Optic reads it aloud. Auto-detects the language — English, German, Japanese, and 18 more.",
  },
  {
    title: "21 languages, zero setup",
    body: "All recognition languages are enabled out of the box. Powered by Apple Vision for offline, private text recognition.",
  },
  {
    title: "Capture history",
    body: "Your last 20 captures with thumbnails, timestamps, and confidence scores. One-click copy, delete what you don't need.",
  },
];

export default function OpticLanding() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-neutral-200">
      <p className="mb-3 text-sm font-medium uppercase tracking-wider text-amber-400">
        macOS
      </p>
      <h1 className="mb-4 text-4xl font-bold text-white">Optic</h1>
      <p className="mb-8 text-xl text-neutral-300">
        Screen OCR that reads anything on your display.
      </p>

      <p className="mb-10 text-neutral-400">
        Most screen capture tools just take pictures. Optic reads what&apos;s on
        your screen — select any text or QR code, and it&apos;s instantly
        recognized, copied, and ready to use. A native Mac app that lives in
        your menu bar.
      </p>

      <div className="mb-12 grid gap-6 sm:grid-cols-2">
        {FEATURES.map((f) => (
          <div key={f.title}>
            <h2 className="mb-1 font-semibold text-white">{f.title}</h2>
            <p className="text-sm leading-relaxed text-neutral-400">{f.body}</p>
          </div>
        ))}
      </div>

      <div className="mb-12 rounded-lg border border-neutral-800 bg-neutral-900/50 p-5">
        <p className="mb-1 font-semibold text-white">
          Pay once. Every update included.
        </p>
        <p className="text-sm text-neutral-400">
          No subscription and no account. One purchase on the Mac App Store
          covers every future version.
        </p>
      </div>

      <h2 className="mb-3 text-lg font-semibold text-white">Requirements</h2>
      <p className="mb-10 text-sm text-neutral-400">
        macOS 14.0 (Sonoma) or later. Optic only accesses screen content you
        select — no network, no telemetry.
      </p>

      <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-neutral-800 pt-8 text-sm">
        <a
          href="#"
          className="text-amber-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          App Store
        </a>
        <Link href="/optic/privacy" className="text-amber-400 underline">
          Privacy Policy
        </Link>
        <Link href="/optic/terms" className="text-amber-400 underline">
          Terms of Service
        </Link>
        <Link href="/support" className="text-amber-400 underline">
          Support
        </Link>
        <a
          href="mailto:support@eduardbruch.com"
          className="text-amber-400 underline"
        >
          support@eduardbruch.com
        </a>
      </div>
    </main>
  );
}
