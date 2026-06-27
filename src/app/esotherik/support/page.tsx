export const metadata = {
  title: "Support — Esotherik Apps",
  description:
    "Get help with Esotherik apps. Contact support, FAQs, subscriptions, and data privacy.",
};

export default function EsotherikSupport() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">Support</h1>
      <p className="mb-2 text-lg text-neutral-300">Esotherik Apps</p>
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
          We typically respond within 48 hours during business days. Please tell
          us which app you&apos;re using and the device you&apos;re on so we can
          help faster.
        </p>
      </section>

      {/* FAQ */}
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
              Purchases&quot;. This restores any active subscription or previous
              purchase linked to your Apple ID.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-medium text-white">
              How do I manage or cancel my subscription?
            </h3>
            <p className="text-neutral-400">
              Subscriptions are managed by Apple. On your device, open{" "}
              <span className="text-neutral-300">
                Settings &rarr; Apple Account &rarr; Subscriptions
              </span>
              , select the app, and change or cancel your plan. Deleting the app
              does not cancel a subscription. Auto-renewing subscriptions renew
              unless cancelled at least 24 hours before the end of the current
              period.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-medium text-white">
              The audio, reminders, or notifications aren&apos;t working.
            </h3>
            <p className="text-neutral-400">
              Make sure your device is not in silent mode and the volume is up,
              and that you granted the app notification permission in{" "}
              <span className="text-neutral-300">
                iOS Settings &rarr; [App Name] &rarr; Notifications
              </span>
              . Restarting the app usually resolves playback issues.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-medium text-white">
              How do I delete my data?
            </h3>
            <p className="text-neutral-400">
              Your entries and preferences are stored on your device. To erase
              everything, delete your content within the app or delete the app
              from your device. This is immediate and irreversible.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-medium text-white">
              Are the apps a substitute for professional advice?
            </h3>
            <p className="text-neutral-400">
              Our apps are provided for personal reflection, focus, and
              entertainment only. They are not a substitute for professional
              medical, psychological, legal, or financial advice, and are not a
              crisis service. If you are in distress, please contact your local
              emergency services or a qualified professional.
            </p>
          </div>
        </div>
      </section>

      {/* Legal links */}
      <section className="border-t border-neutral-800 pt-8">
        <p className="text-neutral-400">
          See also our{" "}
          <a href="/esotherik/privacy" className="text-indigo-400 underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/esotherik/terms" className="text-indigo-400 underline">
            Terms of Service
          </a>
          .
        </p>
      </section>
    </main>
  );
}
