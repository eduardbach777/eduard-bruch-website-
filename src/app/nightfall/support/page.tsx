export const metadata = {
  title: "Support — Nightfall",
  description: "Support and troubleshooting for Nightfall - Undead Survivor.",
};

export default function NightfallSupport() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">Nightfall Support</h1>
      <p className="mb-10 text-lg text-neutral-400">
        Help with saves, purchases, ads, and gameplay.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">Contact</h2>
      <p className="mb-6">
        Email{" "}
        <a href="mailto:support@eduardbruch.com" className="text-indigo-400 underline">
          support@eduardbruch.com
        </a>{" "}
        with your device model, iOS version, Nightfall version, and a short
        description of the problem. We normally respond within two business
        days.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        Restore a Purchase
      </h2>
      <p className="mb-6">
        Open the Shop and tap Restore Purchases. Restorable purchases and an
        active VIP membership tied to your Apple ID will be recovered. Gem
        packs are consumable purchases and are protected through Nightfall&apos;s
        cloud-save system rather than Apple&apos;s restore function.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        Recover Progress on Another Device
      </h2>
      <p className="mb-6">
        On the original device, open the Shop and choose Back up account
        (Apple). On the new device, use the same option with the same Apple ID.
        Keep iCloud enabled for an additional device backup.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        Manage VIP
      </h2>
      <p className="mb-6">
        Apple manages subscriptions. On iPhone or iPad, open Settings, tap your
        name, then Subscriptions. Select Nightfall to view, change, or cancel
        VIP.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        Delete Your Data
      </h2>
      <p className="mb-6">
        Uninstalling removes local data, but cloud backups and purchase records
        may remain so progress and paid items can be recovered. To request
        deletion of Nightfall server data, email support with your player name
        and player ID if available.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">Legal</h2>
      <p className="space-x-4">
        <a href="/nightfall/privacy" className="text-indigo-400 underline">
          Privacy Policy
        </a>
        <a href="/nightfall/terms" className="text-indigo-400 underline">
          Terms of Use
        </a>
      </p>
    </main>
  );
}

