export const metadata = {
  title: "Support — Aurum Tarot",
  description:
    "Get help with Aurum Tarot. Contact support, FAQs, subscriptions, AI interpretations, and data privacy.",
};

export default function TarotSupport() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">Support</h1>
      <p className="mb-2 text-lg text-neutral-300">Aurum Tarot</p>
      <p className="mb-12 text-lg text-neutral-400">
        Need help with Aurum Tarot? We&apos;re here to assist you.
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
              Open Aurum Tarot, go to Settings, and tap &quot;Restore
              Purchases&quot;. This restores any active subscription or
              previous purchase linked to your Apple ID.
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
              , select Aurum Tarot, and change or cancel your plan. Deleting
              the app does not cancel a subscription. Auto-renewing
              subscriptions renew unless cancelled at least 24 hours before the
              end of the current period.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-medium text-white">
              What is the one-time interpretation purchase?
            </h3>
            <p className="text-neutral-400">
              The monthly reading offers a one-time purchase that unlocks the
              full AI interpretation, follow-up questions, and all card
              meanings for that reading. It is a single purchase &mdash; not a
              subscription &mdash; and does not auto-renew.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-medium text-white">
              How do the AI interpretations work?
            </h3>
            <p className="text-neutral-400">
              AI interpretations are an optional feature. The first time you
              use it, the app asks for your consent. Your card and reading
              details are processed by a third-party AI service via our secure
              server to generate the interpretation. Personal identifiers are
              removed before processing, and we do not store your readings on
              our servers. You can withdraw consent at any time in Settings.
              See our{" "}
              <a href="/tarot/privacy" className="text-indigo-400 underline">
                Privacy Policy
              </a>{" "}
              for details.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-medium text-white">
              Are the readings real predictions?
            </h3>
            <p className="text-neutral-400">
              Aurum Tarot is provided for entertainment and personal
              reflection only. Readings and interpretations are not predictions
              of the future and are not a substitute for professional medical,
              psychological, legal, or financial advice.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-medium text-white">
              How do I delete my data?
            </h3>
            <p className="text-neutral-400">
              Your readings, journal, and preferences are stored on your
              device. To erase everything, open{" "}
              <span className="text-neutral-300">
                Settings &rarr; Delete All My Data
              </span>{" "}
              in the app, or delete the app. This is immediate and
              irreversible.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-medium text-white">
              I&apos;m going through a difficult time.
            </h3>
            <p className="text-neutral-400">
              Aurum Tarot is not a crisis or counseling service. If you are in
              distress or may be a danger to yourself or others, please contact
              your local emergency services or a qualified professional
              immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Legal links */}
      <section className="border-t border-neutral-800 pt-8">
        <p className="text-neutral-400">
          See also our{" "}
          <a href="/tarot/privacy" className="text-indigo-400 underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/tarot/terms" className="text-indigo-400 underline">
            Terms of Service
          </a>
          .
        </p>
      </section>
    </main>
  );
}
