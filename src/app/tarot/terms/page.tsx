export const metadata = {
  title: "Terms of Use — Aurum Tarot",
  description:
    "Terms of use for Aurum Tarot by Eduard Bruch: entertainment purposes, subscriptions, acceptable use, and liability.",
};

export default function TarotTerms() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">Terms of Use</h1>
      <p className="mb-2 text-lg text-neutral-300">Aurum Tarot Card Reading</p>
      <p className="mb-10 text-sm text-neutral-500">Last updated: August 2, 2026</p>

      <p className="mb-6">
        These terms govern your use of Aurum Tarot (&quot;the App&quot;),
        published by Eduard Bruch, Kleinfeld 28c, 21149 Hamburg, Germany
        (&quot;we&quot;). By using the App you agree to these terms.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        1. Entertainment &amp; Reflection Only
      </h2>
      <p className="mb-4 border-l-4 border-amber-500 pl-4 font-medium text-white">
        Tarot readings and AI-generated interpretations are provided for
        entertainment, inspiration, and personal reflection only. They are not
        medical, psychological, legal, or financial advice and must not be
        relied upon as such.
      </p>
      <p className="mb-6">
        If you are struggling, please reach out to a qualified professional or
        a local helpline. The App includes pointers to support resources, but
        it is not a crisis service.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        2. Subscriptions &amp; Purchases
      </h2>
      <p className="mb-4">
        Premium features (including AI interpretations, follow-up questions,
        and premium spreads) require a paid subscription or one-time purchase,
        billed through your Apple or Google account. Subscriptions renew
        automatically until cancelled in your store account settings; renewal
        is charged up to 24 hours before the current period ends. Free-trial
        periods, where offered, convert into a paid subscription unless
        cancelled before the trial ends.
      </p>
      <p className="mb-6">
        Statutory withdrawal and refund rights remain unaffected. Refunds for
        store purchases are handled by Apple or Google under their policies.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        3. Acceptable Use
      </h2>
      <p className="mb-6">
        You may not abuse the AI features (including attempts to extract
        unrelated model output, automate requests, or circumvent rate limits
        or purchase checks), reverse-engineer the App except where permitted
        by law, or use the App in violation of applicable law. We may
        restrict access in cases of abuse.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        4. Intellectual Property
      </h2>
      <p className="mb-6">
        The App, including its card artwork, design, and texts, is protected
        by copyright. You receive a personal, non-transferable,
        non-exclusive licence to use the App on your devices. Generated
        readings are for your personal use.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        5. Availability &amp; Changes
      </h2>
      <p className="mb-6">
        AI features depend on third-party model providers and may be
        temporarily unavailable. We may modify, expand, or discontinue
        features to a reasonable extent, taking your interests into account.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        6. Liability
      </h2>
      <p className="mb-6">
        We are liable without limitation for intent and gross negligence, and
        for injury to life, body, or health. For slight negligence we are
        liable only for breaches of essential contractual obligations
        (cardinal duties), limited to the foreseeable damage typical for this
        type of contract. Liability under the German Product Liability Act
        remains unaffected. Decisions you make based on readings are your own
        responsibility (see Section 1).
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        7. Governing Law
      </h2>
      <p className="mb-6">
        German law applies, excluding the UN Convention on Contracts for the
        International Sale of Goods. Mandatory consumer-protection provisions
        of your country of residence remain unaffected.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        8. Contact
      </h2>
      <p className="mb-6">
        Eduard Bruch · Kleinfeld 28c, 21149 Hamburg, Germany ·{" "}
        <a
          href="mailto:support@eduardbruch.com"
          className="text-indigo-400 underline"
        >
          support@eduardbruch.com
        </a>
      </p>
    </main>
  );
}
