export const metadata = {
  title: "Support — Eduard Bruch Apps",
  description:
    "Get help with any app developed by Eduard Bruch. Contact support, FAQs, and troubleshooting.",
};

export default function Support() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">Support</h1>
      <p className="mb-12 text-lg text-neutral-400">
        Need help with one of our apps? We&apos;re here to assist you.
      </p>

      {/* Contact */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-white">Contact Us</h2>
        <p className="mb-2">
          Email:{" "}
          <a
            href="mailto:support@eduardbruch.com"
            className="text-indigo-400 underline"
          >
            support@eduardbruch.com
          </a>
        </p>
        <p className="mb-6 text-neutral-400">
          We typically respond within 48 hours during business days.
        </p>
      </section>

      {/* General FAQ */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-white">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-lg font-medium text-white">
              How do I restore my purchase?
            </h3>
            <p className="text-neutral-400">
              Open the app, go to Settings, and tap &quot;Restore
              Purchases&quot;. This will restore any active subscriptions or
              previous purchases linked to your Apple ID or Google account.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-medium text-white">
              How do I cancel my subscription?
            </h3>
            <p className="text-neutral-400">
              Subscriptions are managed through your Apple ID or Google Play
              account. On iPhone: Settings &rarr; Apple ID &rarr; Subscriptions.
              On Android: Google Play Store &rarr; Menu &rarr; Subscriptions.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-medium text-white">
              Is my data stored on your servers?
            </h3>
            <p className="text-neutral-400">
              No. All of our apps store data locally on your device. We do not
              operate servers that collect or store your personal data. The only
              third-party service we use is RevenueCat for subscription
              management.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-medium text-white">
              How do I delete my data?
            </h3>
            <p className="text-neutral-400">
              Since all data is stored on your device, you can delete it by using
              the &quot;Delete My Data&quot; option in the app&apos;s settings,
              or by uninstalling the app. Once deleted, data cannot be recovered.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-medium text-white">
              The app is not working correctly. What should I do?
            </h3>
            <p className="text-neutral-400">
              Try closing and reopening the app. If the issue persists, make sure
              you have the latest version from the App Store or Google Play. If
              it still doesn&apos;t work, email us at support@eduardbruch.com
              with your device model, OS version, and a description of the
              issue.
            </p>
          </div>
        </div>
      </section>

      {/* App Categories */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-white">
          App-Specific Help
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-lg font-medium text-white">
              Spiritual &amp; Esotherik Apps
            </h3>
            <p className="text-neutral-400">
              Tarot Reader, Palm Reader, Aura Reader, Birth Chart, Moon
              Calendar, and 30 more spiritual tools. All readings are for
              entertainment purposes only. For questions about readings or app
              features, email us.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-medium text-white">Vault Apps</h3>
            <p className="text-neutral-400">
              BrowserVault, CameraVault, CalcVault, and more. If you forgot your
              PIN, unfortunately we cannot recover it &mdash; data is encrypted
              on-device and we have no access. Please make sure to remember your
              PIN.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-medium text-white">
              Quit Addiction Apps
            </h3>
            <p className="text-neutral-400">
              Quit Vaping, Quit Smoking, Quit Nicotine Pouches, Quit Weed, Quit
              Porn. These apps are tools to support your journey &mdash; they are
              not medical advice. Please consult a healthcare professional for
              medical guidance.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-medium text-white">
              Religious Study Apps
            </h3>
            <p className="text-neutral-400">
              Bible Study, Quran Study, Gita Study, Torah Study, Dhamma Study,
              Guru Granth. Your reading progress and notes are stored locally on
              your device.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-medium text-white">
              Utility &amp; Productivity Apps
            </h3>
            <p className="text-neutral-400">
              Double Calculator, Unit Convert, Voice Recorder, QR Scanner,
              Teleprompter, PDF Scanner, BabyBump. For feature requests or bug
              reports, email us.
            </p>
          </div>
        </div>
      </section>

      <p className="mt-12 text-sm text-neutral-500">
        Developed by Eduard Bruch &mdash; Hamburg, Germany
      </p>
    </main>
  );
}
