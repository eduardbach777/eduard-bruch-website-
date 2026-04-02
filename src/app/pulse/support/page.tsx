export const metadata = {
  title: "Support — Pulse - System Monitor",
};

export default function PulseSupport() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-neutral-200">
      <h1 className="mb-8 text-3xl font-bold text-white">Pulse - System Monitor Support</h1>

      <p className="mb-6">
        Need help with Pulse? We&apos;re here to assist you.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">Frequently Asked Questions</h2>

      <div className="mb-4">
        <h3 className="mb-1 font-medium text-white">How do I see system stats in the menu bar?</h3>
        <p className="text-neutral-400">
          After launching Pulse, it appears in your Mac&apos;s menu bar. Click the icon to
          see the detailed stats dropdown. You can configure which metrics appear in the menu
          bar via Settings.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="mb-1 font-medium text-white">How do I add desktop widgets?</h3>
        <p className="text-neutral-400">
          Right-click your desktop and select &quot;Edit Widgets&quot;. Search for
          &quot;Pulse&quot; to find CPU, Memory, Battery, and Network widgets. Drag them
          to your desktop.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="mb-1 font-medium text-white">Why does Pulse need an internet connection?</h3>
        <p className="text-neutral-400">
          Pulse makes only one optional network request — to detect your public IP address.
          All other monitoring is completely offline. You can disable public IP detection
          if you prefer zero network activity.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="mb-1 font-medium text-white">Is Pulse safe for my Mac?</h3>
        <p className="text-neutral-400">
          Pulse uses only read-only macOS system APIs. It cannot modify, alter, or interfere
          with your system in any way. It runs in the App Sandbox for maximum security.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="mb-1 font-medium text-white">How do I export my stats?</h3>
        <p className="text-neutral-400">
          Go to Settings &rarr; Data and click &quot;Export CSV&quot;. This saves your
          CPU, memory, and network history as a CSV file.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="mb-1 font-medium text-white">Pulse doesn&apos;t launch at startup</h3>
        <p className="text-neutral-400">
          Open Pulse Settings &rarr; General and enable &quot;Launch at Login&quot;. This
          ensures Pulse starts automatically when you log in to your Mac.
        </p>
      </div>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">System Requirements</h2>
      <ul className="mb-6 list-disc pl-6 space-y-1 text-neutral-400">
        <li>macOS 14.0 (Sonoma) or later</li>
        <li>Apple Silicon or Intel Mac</li>
      </ul>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">Contact Us</h2>
      <p className="mb-6">
        If you have a question, bug report, or feature request, please email us at{" "}
        <a href="mailto:support@eduardbruch.com" className="text-indigo-400 underline">
          support@eduardbruch.com
        </a>
        .
      </p>

      <p className="mt-12 text-sm text-neutral-500">
        Pulse - System Monitor v1.0 — developed by Eduard Bruch
      </p>
    </main>
  );
}
