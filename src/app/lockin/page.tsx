import Link from "next/link";

export const metadata = {
  title: "Lock In! — Website Blocker & Focus Timer for Mac",
  description:
    "Block distracting websites and apps during timed focus sessions. Works in every browser at once — Safari, Chrome, Firefox, Arc, Brave. Strict mode, Pomodoro breaks, daily goals. One-time purchase.",
};

const FEATURES = [
  {
    title: "Works in every browser at once",
    body: "Most blockers are a Chrome extension you can disable in two clicks. Lock In blocks at the network level, so one session covers Safari, Chrome, Firefox, Arc, Brave — and any browser you install tomorrow.",
  },
  {
    title: "321 sites, already sorted",
    body: "Ready-made blocklists for Social, Video, News, Shopping and Adult content. Toggle whole categories per session, or add your own domains.",
  },
  {
    title: "Strict mode",
    body: "Locks the session so you cannot stop it early. For the times you do not trust yourself.",
  },
  {
    title: "Pomodoro breaks",
    body: "Automatic work and break intervals, with lengths you choose. When a session ends, an alarm rings until you dismiss it.",
  },
  {
    title: "Live timer in the menu bar",
    body: "See the countdown at a glance without opening anything. Sessions survive quitting the app or rebooting.",
  },
  {
    title: "Private by design",
    body: "Everything runs locally on your Mac. No account, no analytics, no telemetry — and your browsing is never logged or sent anywhere.",
  },
];

export default function LockInLanding() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-neutral-200">
      <p className="mb-3 text-sm font-medium uppercase tracking-wider text-indigo-400">
        macOS
      </p>
      <h1 className="mb-4 text-4xl font-bold text-white">Lock In!</h1>
      <p className="mb-8 text-xl text-neutral-300">
        Block the websites and apps that break your concentration — everywhere,
        not just in one browser.
      </p>

      <p className="mb-10 text-neutral-400">
        Start a focus session from your menu bar and the timer counts down right
        there. Blocking happens at the network level through a macOS system
        extension, so opening a different browser does not get you around it.
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
        <p className="mb-1 font-semibold text-white">Pay once</p>
        <p className="text-sm text-neutral-400">
          No subscription. No account. Buy it once and it stays yours.
        </p>
      </div>

      <h2 className="mb-3 text-lg font-semibold text-white">Requirements</h2>
      <p className="mb-10 text-sm text-neutral-400">
        macOS 14.0 (Sonoma) or later. Website blocking uses a macOS system
        extension, which you approve once during setup. Blocking is best-effort:
        it is effective for ordinary browsing but cannot guarantee that a
        determined user will not circumvent it — see the{" "}
        <Link href="/lockin/terms" className="text-indigo-400 underline">
          terms
        </Link>{" "}
        for detail.
      </p>

      <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-neutral-800 pt-8 text-sm">
        <Link href="/lockin/privacy" className="text-indigo-400 underline">
          Privacy Policy
        </Link>
        <Link href="/lockin/terms" className="text-indigo-400 underline">
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
