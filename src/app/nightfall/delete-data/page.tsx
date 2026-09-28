export const metadata = {
  title: "Delete Your Data — Nightfall",
  description:
    "How to delete your Nightfall - Undead Survivor account and data, what is deleted and what is kept.",
};

export default function NightfallDeleteData() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">
        Delete Your Nightfall Data
      </h1>
      <p className="mb-10 text-lg text-neutral-400">
        Nightfall - Undead Survivor, published by Eduard Bruch.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        Option 1: In the app (immediate)
      </h2>
      <ol className="mb-6 list-decimal space-y-2 pl-6">
        <li>Open Nightfall and go to the Shop.</li>
        <li>Scroll to the bottom and tap Delete Account &amp; Cloud Data.</li>
        <li>Confirm both dialogs.</li>
      </ol>
      <p className="mb-6">
        Your data is deleted from our server right away and the app starts
        fresh on your device.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        Option 2: By email
      </h2>
      <p className="mb-6">
        If you no longer have the app installed, email{" "}
        <a href="mailto:support@eduardbruch.com" className="text-indigo-400 underline">
          support@eduardbruch.com
        </a>{" "}
        with the subject &quot;Delete Nightfall data&quot; and your player name
        (and player ID, if you have it). We delete your data within 30 days and
        confirm by email.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        What is deleted
      </h2>
      <ul className="mb-6 list-disc space-y-2 pl-6">
        <li>Your cloud save (progress, gear, currency, settings).</li>
        <li>Your leaderboard entries in all seasons.</li>
        <li>Your account links (Sign in with Apple or Google).</li>
        <li>On iPhone and iPad, the save copy in iCloud.</li>
        <li>The save data on the device you deleted from.</li>
      </ul>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        What is kept, and for how long
      </h2>
      <ul className="mb-6 list-disc space-y-2 pl-6">
        <li>
          Purchase transaction IDs, with your player ID removed. They are kept
          as long as the app is offered, only to prevent the same purchase from
          being delivered twice. They are not linked to you after deletion.
        </li>
        <li>
          Purchase records held by Apple, Google and our payment service
          RevenueCat, as required for tax and accounting law (up to 10 years
          under German law). Apple and Google keep your purchases on your store
          account, so paid unlocks can be restored with Restore Purchases.
        </li>
        <li>
          Server logs, kept for at most 30 days for security, then deleted.
        </li>
      </ul>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">Legal</h2>
      <p className="space-x-4">
        <a href="/nightfall/privacy" className="text-indigo-400 underline">
          Privacy Policy
        </a>
        <a href="/nightfall/support" className="text-indigo-400 underline">
          Support
        </a>
      </p>
    </main>
  );
}
