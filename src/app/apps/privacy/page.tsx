export const metadata = {
  title: "Privacy Policy — Health, Religious, Utility & Productivity Apps",
  description:
    "Privacy policy for quit addiction apps, religious study apps, utility apps, PDF Scanner, and BabyBump by Eduard Bruch.",
};

export default function AppsPrivacy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">Privacy Policy</h1>
      <p className="mb-2 text-lg text-neutral-300">
        Health, Religious, Utility &amp; Productivity Apps
      </p>
      <p className="mb-10 text-sm text-neutral-500">
        Last updated: February 17, 2026
      </p>

      <p className="mb-6">
        This privacy policy applies to the following applications published by
        Eduard Bruch: Quit Vaping, Quit Nicotine Pouches, Quit Smoking Tracker,
        Quit Weed, Quit Porn, Bible Study, Quran Study, Gita Study, Torah
        Study, Dhamma Study, Guru Granth, Double Calculator, Unit Convert, Voice
        Recorder, QR Scanner, Teleprompter, PDF Scanner, and BabyBump
        (collectively, &quot;the Apps&quot;).
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

      {/* 2. General */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        2. General Principles
      </h2>
      <p className="mb-6">
        All Apps store data <strong>locally on your device only</strong>. We do
        not operate servers that collect or store your personal data. We do not
        use analytics, advertising, or tracking frameworks. The only
        third-party service used is RevenueCat for subscription verification in
        apps that offer subscriptions.
      </p>

      {/* Section A */}
      <div className="mb-10 rounded-lg border border-white/10 p-6">
        <h2 className="mb-4 text-xl font-semibold text-white">
          Section A — Quit Addiction Apps
        </h2>
        <p className="mb-2 text-sm text-neutral-400">
          Quit Vaping, Quit Nicotine Pouches, Quit Smoking Tracker, Quit Weed,
          Quit Porn
        </p>

        <h3 className="mb-2 mt-4 font-medium text-white">Data Collected</h3>
        <ul className="mb-4 list-disc pl-6 space-y-1">
          <li>
            Quit date and days-since-quit counter
          </li>
          <li>Craving logs, triggers, and daily check-ins</li>
          <li>Personal notes and journal entries</li>
          <li>Money saved / health milestone calculations</li>
        </ul>

        <h3 className="mb-2 mt-4 font-medium text-white">
          Health Data (GDPR Art. 9)
        </h3>
        <p className="mb-4 border-l-4 border-emerald-500 pl-4">
          Addiction and health tracking data constitutes special category data
          under GDPR Art. 9. This data is processed exclusively under{" "}
          <strong>Art. 9(2)(a) — your explicit consent</strong>, given when you
          choose to enter this information. All health data is{" "}
          <strong>stored on your device only</strong> and is never transmitted
          to any external server.
        </p>

        <h3 className="mb-2 mt-4 font-medium text-white">Medical Disclaimer</h3>
        <p className="text-neutral-300">
          These apps do not provide medical advice. They are tools to support
          your personal journey. Always consult a healthcare professional for
          medical guidance regarding addiction or substance use.
        </p>
      </div>

      {/* Section B */}
      <div className="mb-10 rounded-lg border border-white/10 p-6">
        <h2 className="mb-4 text-xl font-semibold text-white">
          Section B — BabyBump
        </h2>

        <h3 className="mb-2 mt-4 font-medium text-white">Data Collected</h3>
        <ul className="mb-4 list-disc pl-6 space-y-1">
          <li>Due date and pregnancy week</li>
          <li>Symptom tracking and personal notes</li>
          <li>Weight and health entries</li>
        </ul>

        <h3 className="mb-2 mt-4 font-medium text-white">
          Pregnancy Data (GDPR Art. 9)
        </h3>
        <p className="mb-4 border-l-4 border-pink-500 pl-4">
          Pregnancy-related data is extremely sensitive health data under GDPR
          Art. 9. <strong>All pregnancy-related data is stored on your device
          only and is never shared with third parties.</strong> We do not
          collect, store, or transmit pregnancy-related data to any server.
          Processing is based on Art. 9(2)(a) — your explicit consent.
        </p>

        <h3 className="mb-2 mt-4 font-medium text-white">
          U.S. State-Specific Notice
        </h3>
        <p className="text-neutral-300">
          For users in the United States: we do not collect, store, or transmit
          any pregnancy-related data to any server or third party. All data
          remains exclusively on your device under your control.
        </p>
      </div>

      {/* Section C */}
      <div className="mb-10 rounded-lg border border-white/10 p-6">
        <h2 className="mb-4 text-xl font-semibold text-white">
          Section C — Religious Study Apps
        </h2>
        <p className="mb-2 text-sm text-neutral-400">
          Bible Study, Quran Study, Gita Study, Torah Study, Dhamma Study, Guru
          Granth
        </p>

        <h3 className="mb-2 mt-4 font-medium text-white">Data Collected</h3>
        <ul className="mb-4 list-disc pl-6 space-y-1">
          <li>Reading progress and bookmarks</li>
          <li>Personal notes and highlights</li>
          <li>Daily reading streak data</li>
          <li>Notification preferences</li>
        </ul>

        <h3 className="mb-2 mt-4 font-medium text-white">
          Religious Data (GDPR Art. 9)
        </h3>
        <p className="border-l-4 border-blue-500 pl-4">
          Reading history in a religious text may reveal religious beliefs, which
          constitutes special category data under GDPR Art. 9. Your reading
          history, bookmarks, and notes are{" "}
          <strong>stored on your device only</strong> and are never transmitted
          externally. Processing is based on Art. 9(2)(a) — your explicit
          consent, given by your choice to use the app.
        </p>
      </div>

      {/* Section D */}
      <div className="mb-10 rounded-lg border border-white/10 p-6">
        <h2 className="mb-4 text-xl font-semibold text-white">
          Section D — Utility &amp; Productivity Apps
        </h2>
        <p className="mb-2 text-sm text-neutral-400">
          Double Calculator, Unit Convert, Voice Recorder, QR Scanner,
          Teleprompter, PDF Scanner
        </p>

        <h3 className="mb-2 mt-4 font-medium text-white">Data Collected</h3>
        <ul className="mb-4 list-disc pl-6 space-y-1">
          <li>
            <strong>Voice Recorder:</strong> Audio recordings are stored
            on-device only and are never transmitted externally.
          </li>
          <li>
            <strong>PDF Scanner:</strong> Scanned documents are stored on-device
            only. Camera access is used solely for scanning; images are not
            retained beyond the scan.
          </li>
          <li>
            <strong>QR Scanner:</strong> Camera access is used for scanning QR
            codes and barcodes. Camera data is processed in real-time and is not
            stored or transmitted.
          </li>
          <li>
            <strong>Teleprompter:</strong> Scripts and text are stored on-device
            only.
          </li>
          <li>
            <strong>Double Calculator / Unit Convert:</strong> Minimal data
            collection. App preferences stored via on-device UserDefaults.
          </li>
        </ul>
      </div>

      {/* 3. Subscription Data */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        3. Subscription Data
      </h2>
      <p className="mb-6">
        Apps that offer subscriptions use RevenueCat, Inc. (USA) for
        subscription verification. RevenueCat receives anonymized transaction
        data (purchase tokens, transaction IDs). We do not have access to your
        payment information. Legal basis: Art. 6(1)(b) GDPR. See{" "}
        <a
          href="https://www.revenuecat.com/privacy"
          className="text-indigo-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          RevenueCat&apos;s Privacy Policy
        </a>
        .
      </p>

      {/* 4. Data Sharing */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        4. Data Sharing
      </h2>
      <p className="mb-6">
        We do not sell, rent, or share your personal data with third parties for
        marketing purposes. The only third-party data processing is through
        RevenueCat for subscription management. Transfer to the USA is secured
        under the EU-U.S. Data Privacy Framework.
      </p>

      {/* 5. CCPA */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        5. California Residents (CCPA)
      </h2>
      <p className="mb-6">
        We do not sell personal information. We do not share personal
        information for cross-context behavioral advertising. Contact
        support@eduardbruch.com to exercise your CCPA rights.
      </p>

      {/* 6. GDPR Rights */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        6. Your Rights (GDPR)
      </h2>
      <ul className="mb-6 list-disc pl-6 space-y-2">
        <li>
          <strong>Access</strong> (Art. 15) — request information about your
          data
        </li>
        <li>
          <strong>Rectification</strong> (Art. 16) — correct inaccurate data
        </li>
        <li>
          <strong>Erasure</strong> (Art. 17) — delete data via app settings or
          uninstall
        </li>
        <li>
          <strong>Restriction</strong> (Art. 18) — restrict processing
        </li>
        <li>
          <strong>Data Portability</strong> (Art. 20) — receive data in portable
          format
        </li>
        <li>
          <strong>Object</strong> (Art. 21) — object to processing
        </li>
        <li>
          <strong>Withdraw Consent</strong> (Art. 7(3)) — withdraw at any time
        </li>
      </ul>

      {/* 7. Complaint */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        7. Right to Lodge a Complaint
      </h2>
      <p className="mb-1">
        Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit
      </p>
      <p className="mb-1">Ludwig-Erhard-Str. 22, 7. OG, 20459 Hamburg</p>
      <p className="mb-6">
        <a
          href="https://datenschutz-hamburg.de"
          className="text-indigo-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://datenschutz-hamburg.de
        </a>
      </p>

      {/* 8. Children */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        8. Children&apos;s Privacy
      </h2>
      <p className="mb-6">
        The Apps are not directed at children under 13 (COPPA) or 16 (GDPR). We
        do not knowingly collect personal information from children.
      </p>

      {/* 9. Changes */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        9. Changes to This Policy
      </h2>
      <p className="mb-6">
        We may update this privacy policy from time to time. Changes will be
        reflected on this page with an updated date.
      </p>

      {/* 10. Contact */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        10. Contact
      </h2>
      <p>
        For questions about this privacy policy, contact:{" "}
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
