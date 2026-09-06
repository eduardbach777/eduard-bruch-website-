import Link from "next/link";

export const metadata = {
  title: "Loupe — Quick Look Preview for Mac",
  description:
    "Preview folders and archives without opening them. ZIP, RAR, 7z, TAR — select in Finder, press Space. No network access, completely free.",
};

const FEATURES = [
  {
    title: "Folders at a glance",
    body: "Select a folder in Finder and press Space to see its contents — file names, sizes, and structure — without opening a window.",
  },
  {
    title: "Five archive formats",
    body: "ZIP, RAR, 7z, and TAR including gzip and bzip2 compressed variants. Preview what is inside before deciding whether to extract.",
  },
  {
    title: "One toggle to set up",
    body: "Enable Loupe in System Settings → Extensions → Quick Look and it works everywhere Finder does. No configuration, no preferences to learn.",
  },
  {
    title: "Strictly read-only",
    body: "Loupe never writes, modifies, extracts, or deletes anything. It reads just enough to render the preview and nothing more.",
  },
  {
    title: "Private by construction",
    body: "The app ships without the network entitlement, so it cannot send anything anywhere even if it wanted to. No account, no analytics, no telemetry.",
  },
];

export default function LoupeLanding() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-neutral-200">
      <p className="mb-3 text-sm font-medium uppercase tracking-wider text-emerald-400">
        macOS
      </p>
      <h1 className="mb-4 text-4xl font-bold text-white">Loupe</h1>
      <p className="mb-8 text-xl text-neutral-300">
        Preview folders and archives without opening them.
      </p>

      <p className="mb-10 text-neutral-400">
        Select a folder or archive in Finder, press Space, and see what is
        inside. ZIP, RAR, 7z, TAR — one QuickLook extension handles them all.
        Nothing is extracted, nothing is uploaded, and nothing costs anything.
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
        <p className="mb-1 font-semibold text-white">Completely free</p>
        <p className="text-sm text-neutral-400">
          Download Loupe from the Mac App Store at no cost. There is no
          purchase, no in-app purchase, no subscription, and nothing that
          expires. Every feature is included from the first launch.
        </p>
      </div>

      <a
        href="https://apps.apple.com/app/id6806599791"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-12 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
      >
        Download on the Mac App Store
      </a>

      <h2 className="mb-3 mt-4 text-lg font-semibold text-white">Requirements</h2>
      <p className="mb-10 text-sm text-neutral-400">
        Available only on the Mac App Store. macOS 15.0 (Sequoia) or later, on
        Apple silicon or Intel. No internet connection is required, or used. See
        the{" "}
        <Link href="/loupe/terms" className="text-emerald-400 underline">
          terms
        </Link>{" "}
        for detail.
      </p>

      <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-neutral-800 pt-8 text-sm">
        <Link
          href="/loupe/privacy"
          className="text-emerald-400 underline"
        >
          Privacy Policy
        </Link>
        <Link href="/loupe/terms" className="text-emerald-400 underline">
          Terms of Service
        </Link>
        <Link href="/loupe/support" className="text-emerald-400 underline">
          Support
        </Link>
        <a
          href="mailto:support@eduardbruch.com"
          className="text-emerald-400 underline"
        >
          support@eduardbruch.com
        </a>
      </div>
    </main>
  );
}
