export const metadata = {
  title: "Privacy Policy — Aurum Tarot",
  description:
    "Privacy policy for Aurum Tarot by Eduard Bruch. Readings stay on your device, AI interpretations are generated without accounts or tracking profiles, ads on Android only with your consent.",
};

export default function TarotPrivacy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">Privacy Policy</h1>
      <p className="mb-2 text-lg text-neutral-300">Aurum Tarot Card Reading</p>
      <p className="mb-10 text-sm text-neutral-500">Last updated: August 2, 2026</p>

      <p className="mb-6">
        This privacy policy describes how Aurum Tarot (&quot;the App&quot;),
        published by Eduard Bruch, handles your data on iOS and Android. In
        short:{" "}
        <strong>
          there are no user accounts, your readings and journal stay on your
          device, and the only data that leaves your device is what is needed
          to generate your AI reading, process purchases, and — on Android,
          only with your consent — show advertising to free users
        </strong>
        .
      </p>

      {/* 1. Data Controller */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        1. Data Controller
      </h2>
      <p className="mb-1">Eduard Bruch</p>
      <p className="mb-1">Kleinfeld 28c, 21149 Hamburg, Germany</p>
      <p className="mb-6">
        Email:{" "}
        <a
          href="mailto:support@eduardbruch.com"
          className="text-indigo-400 underline"
        >
          support@eduardbruch.com
        </a>
      </p>

      {/* 2. No accounts */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        2. No Accounts, No Registration
      </h2>
      <p className="mb-6">
        The App has no login and no user accounts. We do not know your email
        address, phone number, or identity. Where an identifier is technically
        required (purchases, rate limiting), a randomly generated, pseudonymous
        ID is used that is not linked to your name or contact details.
      </p>

      {/* 3. On-device data */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        3. Data That Stays on Your Device
      </h2>
      <p className="mb-4 border-l-4 border-emerald-500 pl-4 font-medium text-white">
        Your reading history, journal entries, streaks, preferences, and daily
        cards are stored locally on your device and are never uploaded.
      </p>
      <p className="mb-6">
        You can erase all locally stored data at any time via Settings &rarr;
        Delete All Data, or by uninstalling the App.
      </p>

      {/* 4. AI readings */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        4. AI-Generated Readings
      </h2>
      <p className="mb-4">
        When you request an AI interpretation, the App transmits the drawn
        cards, the spread type, your question or intention (if you typed one),
        and — if you provided them during onboarding — your first name and
        zodiac sign to our server. This data is used solely to generate your
        reading and the answers to your follow-up questions.
      </p>
      <p className="mb-4">
        Processing happens on our infrastructure (Cloudflare) and through a
        large-language-model provider acting as our processor. We do not build
        profiles from your questions, we do not sell this data, and we do not
        use it for advertising. Requests are protected by rate limiting keyed
        to a pseudonymous ID.
      </p>
      <p className="mb-6">
        Legal basis: performance of contract (Art. 6(1)(b) GDPR) — generating
        the reading you requested.
      </p>

      {/* 5. Purchases */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        5. Purchases &amp; Subscriptions
      </h2>
      <p className="mb-4">
        Payments are processed entirely by Apple (App Store) or Google (Google
        Play). We never see your payment details. To activate your purchase,
        our subscription processor RevenueCat receives the store receipt and a
        pseudonymous app-user ID.
      </p>
      <p className="mb-6">
        Legal basis: performance of contract (Art. 6(1)(b) GDPR). See{" "}
        <a
          href="https://www.revenuecat.com/privacy"
          className="text-indigo-400 underline"
        >
          RevenueCat&apos;s privacy policy
        </a>
        .
      </p>

      {/* 6. Advertising */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        6. Advertising (Android, Free Version Only)
      </h2>
      <p className="mb-4 border-l-4 border-amber-500 pl-4 font-medium text-white">
        The iOS version and all premium subscriptions are completely ad-free.
        Ads are shown only to free users of the Android version.
      </p>
      <p className="mb-4">
        On Android, free users see ads served by Google AdMob. AdMob may
        process your advertising ID, IP address (including approximate
        location derived from it), and ad interaction data. In the European
        Economic Area and the UK, personalized advertising happens only after
        you give consent through the consent dialog shown in the App; without
        consent, ads are limited or non-personalized.
      </p>
      <p className="mb-4">
        You can change or withdraw your consent at any time in Settings &rarr;
        Advertising Privacy Options, and reset your advertising ID in your
        device&apos;s Google settings.
      </p>
      <p className="mb-6">
        Legal basis: consent (Art. 6(1)(a) GDPR). See{" "}
        <a
          href="https://policies.google.com/privacy"
          className="text-indigo-400 underline"
        >
          Google&apos;s privacy policy
        </a>{" "}
        and{" "}
        <a
          href="https://support.google.com/admob/answer/9012903"
          className="text-indigo-400 underline"
        >
          AdMob&apos;s partner information
        </a>
        .
      </p>

      {/* 7. Notifications */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        7. Notifications
      </h2>
      <p className="mb-6">
        Daily card reminders are scheduled locally on your device. No push
        infrastructure is used and no data leaves your device for this
        feature. You can disable reminders in Settings or in your system
        notification settings.
      </p>

      {/* 8. International transfers */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        8. International Data Transfers
      </h2>
      <p className="mb-6">
        Some of our processors (Cloudflare, RevenueCat, Google) process data
        on servers outside the EU/EEA, including in the United States. These
        transfers are safeguarded by the EU Standard Contractual Clauses
        and/or the EU–US Data Privacy Framework certifications of the
        respective providers.
      </p>

      {/* 9. Retention */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        9. Data Retention
      </h2>
      <p className="mb-6">
        Local data remains on your device until you delete it. AI request
        content is processed transiently to generate your reading and is not
        retained by us in an identifiable form; rate-limiting counters expire
        automatically. Purchase records are kept as long as required for the
        operation of your subscription and by law.
      </p>

      {/* 10. Your rights */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        10. Your Rights (GDPR)
      </h2>
      <p className="mb-4">
        You have the right to access, rectification, erasure, restriction of
        processing, data portability, and objection (Art. 15–21 GDPR), and the
        right to withdraw any consent at any time with effect for the future.
        To exercise these rights, contact{" "}
        <a
          href="mailto:support@eduardbruch.com"
          className="text-indigo-400 underline"
        >
          support@eduardbruch.com
        </a>
        . Because the App uses only pseudonymous identifiers, we may ask you
        for information (e.g. your order number) needed to locate data
        relating to you.
      </p>
      <p className="mb-6">
        You also have the right to lodge a complaint with a data protection
        supervisory authority, e.g. the Hamburg Commissioner for Data
        Protection and Freedom of Information (HmbBfDI).
      </p>

      {/* 11. Children */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        11. Children
      </h2>
      <p className="mb-6">
        The App is intended for adults (18+) and is not directed at children.
        We do not knowingly process children&apos;s data.
      </p>

      {/* 12. Changes */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        12. Changes to This Policy
      </h2>
      <p className="mb-6">
        We may update this policy when the App or legal requirements change.
        The current version is always available at this address.
      </p>
    </main>
  );
}
