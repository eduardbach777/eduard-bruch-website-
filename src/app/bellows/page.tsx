import Link from "next/link";

export const metadata = {
  title: "Bellows — Offline Developer Tools for Mac",
  description:
    "41 developer tools in one native Mac app: JSON, JWT, Base64, hashes, regex, diff, timestamps, cron, QR. Ships with no network entitlement, so macOS blocks it from connecting at all. One-time purchase.",
};

const FEATURES = [
  {
    title: "It cannot reach the internet",
    body: "Bellows ships without a network entitlement, so macOS refuses outbound connections at the kernel level. Not a promise in a privacy policy — a permission the app does not have, and one you can confirm yourself with a single codesign command.",
  },
  {
    title: "41 tools, browsable",
    body: "Formatters for JSON, XML, SQL and Markdown. Encoders for Base64, URLs, HTML entities, hex and Unicode. A JWT decoder, hashes, UUIDs, passwords. Converters for timestamps, time zones, number bases, colours, byte sizes, IP subnets, YAML and CSV. Regex tester, text diff, cron builder, QR codes.",
  },
  {
    title: "Grouped by what they do",
    body: "Every rival is a search box that assumes you already know the name of the tool you want. Bellows sorts tools into categories you can browse, so you can find one without knowing what it is called.",
  },
  {
    title: "Copy, press, done",
    body: "Copy a JWT anywhere in macOS and press your shortcut — the right tool is already open with your token in it. Or press ⌘P and type; the launcher opens on whatever you used last.",
  },
  {
    title: "Answers, not raw values",
    body: "The JWT decoder says a token expired two years ago instead of printing 1700000000. The byte converter distinguishes KB from KiB. The semver tool knows 1.0.0-2 sorts below 1.0.0-10.",
  },
  {
    title: "Native and small",
    body: "SwiftUI, no Electron, no web wrapper. It looks like a Mac app because it is one.",
  },
];

export default function BellowsLanding() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-neutral-200">
      <p className="mb-3 text-sm font-medium uppercase tracking-wider text-indigo-400">
        macOS
      </p>
      <h1 className="mb-4 text-4xl font-bold text-white">Bellows</h1>
      <p className="mb-8 text-xl text-neutral-300">
        Developer tools that never send your data anywhere — because they
        cannot.
      </p>

      <p className="mb-10 text-neutral-400">
        Every online JSON formatter and JWT decoder asks you to paste your data
        into someone else&apos;s web page. Often enough that data is a
        production token, a customer record, or an API response you would not
        email to a stranger. Bellows does the same work on your Mac, in a window
        that has no way to reach the network.
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
          No subscription and no account. Unlike a perpetual licence that stops
          receiving updates after a year, buying Bellows once means every future
          version is yours too.
        </p>
      </div>

      <h2 className="mb-3 text-lg font-semibold text-white">
        Verify the privacy claim yourself
      </h2>
      <p className="mb-4 text-sm text-neutral-400">
        You do not have to take it on trust. Run this in Terminal and read the
        entitlements the app was signed with:
      </p>
      <pre className="mb-10 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 text-xs text-neutral-300">
        <code>codesign -d --entitlements - /Applications/Bellows.app</code>
      </pre>
      <p className="mb-10 text-sm text-neutral-400">
        Neither{" "}
        <code className="rounded bg-neutral-800 px-1 py-0.5 text-xs">
          com.apple.security.network.client
        </code>{" "}
        nor{" "}
        <code className="rounded bg-neutral-800 px-1 py-0.5 text-xs">
          com.apple.security.network.server
        </code>{" "}
        is in the list. Without them, macOS will not let the app open a
        connection.
      </p>

      <h2 className="mb-3 text-lg font-semibold text-white">Requirements</h2>
      <p className="mb-10 text-sm text-neutral-400">
        macOS 14.0 (Sonoma) or later. No permissions beyond access to files you
        open yourself. The JWT tool decodes and inspects tokens; it does not
        verify signatures — see the{" "}
        <Link href="/bellows/terms" className="text-indigo-400 underline">
          terms
        </Link>{" "}
        for what that means in practice.
      </p>

      <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-neutral-800 pt-8 text-sm">
        <Link href="/bellows/privacy" className="text-indigo-400 underline">
          Privacy Policy
        </Link>
        <Link href="/bellows/terms" className="text-indigo-400 underline">
          Terms of Service
        </Link>
        <Link href="/support" className="text-indigo-400 underline">
          Support
        </Link>
        <a
          href="mailto:support@eduardbruch.com"
          className="text-indigo-400 underline"
        >
          support@eduardbruch.com
        </a>
      </div>
    </main>
  );
}
