export const metadata = {
  title: "Privacy Policy — Muslim Quran: Ramadan 2026",
  description:
    "Privacy policy for the Muslim Quran: Ramadan 2026 iOS app by Eduard Bruch. Covers advertising, location, AI features, and religious data.",
};

export default function QuranStudyPrivacy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">Privacy Policy</h1>
      <p className="mb-2 text-lg text-neutral-300">
        Muslim Quran: Ramadan 2026
      </p>
      <p className="mb-10 text-sm text-neutral-500">
        Last updated: February 23, 2026
      </p>

      <p className="mb-6">
        This privacy policy applies to the &quot;Muslim Quran: Ramadan
        2026&quot; application (&quot;the App&quot;) published by Eduard Bruch.
        By downloading, installing, or using the App, you consent to the data
        practices described in this policy.
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

      {/* 2. Data Stored Locally */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        2. Data Stored Locally on Your Device
      </h2>
      <p className="mb-4">
        The following data is created and stored exclusively on your device. We
        do not have access to it and it is never transmitted to our servers:
      </p>
      <ul className="mb-6 list-disc pl-6 space-y-1">
        <li>Quran reading progress, bookmarks, and highlights</li>
        <li>Personal study notes (up to 5 for free users, unlimited for subscribers)</li>
        <li>Tasbih/dhikr counter history and sessions</li>
        <li>Dua bookmarks and favorites</li>
        <li>Fasting tracker data and logs</li>
        <li>Prayer time notification preferences</li>
        <li>App settings and theme preferences</li>
      </ul>

      {/* 3. Religious Data */}
      <div className="mb-10 rounded-lg border border-white/10 p-6">
        <h2 className="mb-3 text-xl font-semibold text-white">
          3. Religious Data (GDPR Art. 9)
        </h2>
        <p className="border-l-4 border-blue-500 pl-4">
          Your use of a Quran study app, reading history, bookmarks, prayer
          data, and fasting logs may reveal your religious beliefs, which
          constitutes special category data under GDPR Art. 9. All such data is{" "}
          <strong>stored on your device only</strong> and is never transmitted to
          our servers. Processing is based on Art. 9(2)(a) — your explicit
          consent, given by your choice to use the App.
        </p>
      </div>

      {/* 4. Location Data */}
      <div className="mb-10 rounded-lg border border-white/10 p-6">
        <h2 className="mb-3 text-xl font-semibold text-white">
          4. Location Data
        </h2>
        <p className="mb-4">
          The App requests access to your device location for the following
          features:
        </p>
        <ul className="mb-4 list-disc pl-6 space-y-1">
          <li>
            <strong>Qibla Compass:</strong> Your location is used to calculate
            the direction to the Kaaba in Mecca.
          </li>
          <li>
            <strong>Prayer Times:</strong> Your location is used to calculate
            accurate prayer times for your geographic position.
          </li>
        </ul>
        <p className="border-l-4 border-green-500 pl-4">
          Location data is processed <strong>on your device only</strong> and is
          never transmitted to our servers or any third party. Location access
          is optional — you may deny the permission and manually set your
          location in the App settings. Legal basis: Art. 6(1)(a) GDPR —
          consent.
        </p>
      </div>

      {/* 5. AI Features */}
      <div className="mb-10 rounded-lg border border-white/10 p-6">
        <h2 className="mb-3 text-xl font-semibold text-white">
          5. AI-Powered Q&amp;A (Premium Feature)
        </h2>
        <p className="mb-4">
          The App offers an AI-powered question-and-answer feature that allows
          subscribers to ask questions about Quranic verses. When you use this
          feature:
        </p>
        <ul className="mb-4 list-disc pl-6 space-y-1">
          <li>
            Your question and the relevant verse text are sent to a third-party
            AI service provider (OpenAI or Anthropic) for processing.
          </li>
          <li>
            No personally identifiable information (name, email, device ID) is
            included in the request.
          </li>
          <li>
            AI responses are generated in real-time and are not stored by the AI
            provider beyond the processing session.
          </li>
        </ul>
        <p className="border-l-4 border-purple-500 pl-4">
          Use of the AI feature is optional and only available to premium
          subscribers. By using this feature, you consent to the transmission of
          your question text to the AI provider. Legal basis: Art. 6(1)(a) GDPR
          — consent.
        </p>
      </div>

      {/* 6. Advertising */}
      <div className="mb-10 rounded-lg border border-white/10 p-6">
        <h2 className="mb-3 text-xl font-semibold text-white">
          6. Advertising (Free Users)
        </h2>
        <p className="mb-4">
          The free version of the App displays advertisements served by{" "}
          <strong>Google AdMob</strong> (Google LLC, 1600 Amphitheatre Parkway,
          Mountain View, CA 94043, USA). AdMob may collect and process the
          following data:
        </p>
        <ul className="mb-4 list-disc pl-6 space-y-1">
          <li>Device advertising identifier (IDFA, subject to your ATT consent)</li>
          <li>IP address (for approximate geographic targeting)</li>
          <li>Device type, operating system, and screen size</li>
          <li>Ad interaction data (impressions, clicks)</li>
        </ul>

        <h3 className="mb-2 mt-4 font-medium text-white">
          App Tracking Transparency (ATT)
        </h3>
        <p className="mb-4">
          On iOS 14.5+, the App will request your permission via Apple&apos;s
          App Tracking Transparency framework before accessing your advertising
          identifier. You may decline this request; ads will still be shown but
          will be less personalized.
        </p>

        <h3 className="mb-2 mt-4 font-medium text-white">
          Google User Messaging Platform (UMP)
        </h3>
        <p className="mb-4">
          For users in the European Economic Area (EEA) and UK, a consent dialog
          is presented under the Google User Messaging Platform in compliance
          with the TCF 2.0 framework. You can choose to consent to or reject
          personalized advertising.
        </p>

        <p className="border-l-4 border-amber-500 pl-4">
          <strong>Premium subscribers see no ads.</strong> Subscribing to the
          premium plan removes all advertising and associated data collection by
          AdMob. See{" "}
          <a
            href="https://policies.google.com/privacy"
            className="text-indigo-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google&apos;s Privacy Policy
          </a>{" "}
          for more information on how Google processes data.
        </p>
      </div>

      {/* 7. Subscription Data */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        7. Subscription Data
      </h2>
      <p className="mb-6">
        The App uses <strong>RevenueCat, Inc.</strong> (USA) for subscription
        management and verification. RevenueCat receives anonymized transaction
        data (purchase tokens, transaction IDs) from Apple. We do not have
        access to your payment information (credit card, billing address).
        Legal basis: Art. 6(1)(b) GDPR — performance of a contract. Transfer to
        the USA is secured under the EU-U.S. Data Privacy Framework. See{" "}
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

      {/* 8. iCloud Sync */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        8. iCloud Sync (Premium Feature)
      </h2>
      <p className="mb-6">
        Premium subscribers may enable iCloud sync to back up their data
        (bookmarks, notes, reading progress) across devices. This data is stored
        in your personal iCloud account managed by Apple. We do not have access
        to your iCloud data. See{" "}
        <a
          href="https://www.apple.com/legal/privacy/"
          className="text-indigo-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple&apos;s Privacy Policy
        </a>{" "}
        for details on iCloud data handling.
      </p>

      {/* 9. Data Sharing */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        9. Data Sharing Summary
      </h2>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/20 text-left">
              <th className="pb-2 pr-4 font-medium text-white">Third Party</th>
              <th className="pb-2 pr-4 font-medium text-white">Data Shared</th>
              <th className="pb-2 pr-4 font-medium text-white">Purpose</th>
              <th className="pb-2 font-medium text-white">Users Affected</th>
            </tr>
          </thead>
          <tbody className="text-neutral-300">
            <tr className="border-b border-white/10">
              <td className="py-2 pr-4">Google AdMob</td>
              <td className="py-2 pr-4">IDFA, IP, device info</td>
              <td className="py-2 pr-4">Advertising</td>
              <td className="py-2">Free users only</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="py-2 pr-4">RevenueCat</td>
              <td className="py-2 pr-4">Transaction tokens</td>
              <td className="py-2 pr-4">Subscription management</td>
              <td className="py-2">Subscribers only</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="py-2 pr-4">AI Provider</td>
              <td className="py-2 pr-4">Question text, verse context</td>
              <td className="py-2 pr-4">AI Q&amp;A responses</td>
              <td className="py-2">Opt-in (premium)</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Apple iCloud</td>
              <td className="py-2 pr-4">Bookmarks, notes, progress</td>
              <td className="py-2 pr-4">Cross-device sync</td>
              <td className="py-2">Opt-in (premium)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        We do not sell, rent, or share your personal data with third parties for
        marketing purposes.
      </p>

      {/* 10. CCPA */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        10. California Residents (CCPA)
      </h2>
      <p className="mb-6">
        We do not sell personal information. Google AdMob may collect data for
        advertising purposes as described in Section 6. You may opt out of
        personalized advertising by declining the App Tracking Transparency
        prompt or adjusting your device privacy settings. Contact
        support@eduardbruch.com to exercise your CCPA rights.
      </p>

      {/* 11. GDPR Rights */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        11. Your Rights (GDPR)
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
          <strong>Erasure</strong> (Art. 17) — delete data by clearing app data
          or uninstalling
        </li>
        <li>
          <strong>Restriction</strong> (Art. 18) — restrict processing
        </li>
        <li>
          <strong>Data Portability</strong> (Art. 20) — receive data in a
          portable format
        </li>
        <li>
          <strong>Object</strong> (Art. 21) — object to processing, including
          objecting to personalized advertising
        </li>
        <li>
          <strong>Withdraw Consent</strong> (Art. 7(3)) — withdraw at any time
          without affecting prior lawful processing
        </li>
      </ul>

      {/* 12. Complaint */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        12. Right to Lodge a Complaint
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

      {/* 13. Children */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        13. Children&apos;s Privacy
      </h2>
      <p className="mb-6">
        The App is not directed at children under 13 (COPPA) or 16 (GDPR). We
        do not knowingly collect personal information from children. If you
        believe a child has provided us with personal data, please contact us
        at support@eduardbruch.com.
      </p>

      {/* 14. Data Retention */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        14. Data Retention
      </h2>
      <p className="mb-6">
        Locally stored data remains on your device until you delete it or
        uninstall the App. RevenueCat retains transaction data for the duration
        of your subscription and as required by law. AdMob data is retained
        according to Google&apos;s retention policies.
      </p>

      {/* 15. Changes */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        15. Changes to This Policy
      </h2>
      <p className="mb-6">
        We may update this privacy policy from time to time. Changes will be
        reflected on this page with an updated date. We encourage you to review
        this page periodically.
      </p>

      {/* 16. Contact */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        16. Contact
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
