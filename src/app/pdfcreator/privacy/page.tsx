export const metadata = {
  title: "Privacy Policy — PDF Creator",
};

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-neutral-200">
      <h1 className="mb-8 text-3xl font-bold text-white">
        Privacy Policy / Datenschutzerklärung
      </h1>
      <p className="mb-4 text-sm text-neutral-400">Last updated: February 1, 2026</p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        1. Data Controller (Verantwortlicher)
      </h2>
      <p className="mb-1">Eduard Bruch</p>
      <p className="mb-1">Kleinfeld 28c</p>
      <p className="mb-1">21149 Hamburg, Deutschland</p>
      <p className="mb-6">
        E-Mail:{" "}
        <a href="mailto:eduardbruch777@gmail.com" className="text-indigo-400 underline">
          eduardbruch777@gmail.com
        </a>
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        2. Overview
      </h2>
      <p className="mb-6">
        PDF Creator (&quot;the App&quot;) is a document scanner and PDF toolkit for iOS.
        We take the protection of your personal data seriously. This privacy policy explains
        what data is processed when you use the App and on what legal basis.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        3. Data Collection and Processing
      </h2>

      <h3 className="mb-2 mt-4 font-medium text-white">3.1 Local Data Storage</h3>
      <p className="mb-4">
        All documents you scan, import, or create are stored <strong>locally on your
        device only</strong>. No document data is transmitted to external servers. The legal
        basis is Art. 6(1)(b) DSGVO (performance of a contract / provision of the service).
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">3.2 Camera Access</h3>
      <p className="mb-4">
        The App requests access to your device&apos;s camera for scanning documents. Camera
        data is processed locally and is not shared with any third party. The legal basis is
        Art. 6(1)(a) DSGVO (your consent, granted via the iOS permission dialog).
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">3.3 In-App Purchases</h3>
      <p className="mb-4">
        The App offers auto-renewable subscriptions (weekly, monthly, and annual plans) processed by Apple through the App Store.
        We do not have access to your payment information. Purchase validation is handled by
        RevenueCat, Inc. (USA), which processes anonymized transaction data (purchase tokens,
        transaction IDs, device identifiers) to verify entitlements. RevenueCat acts as a data
        processor on our behalf. The legal basis is Art. 6(1)(b) DSGVO (performance of a
        contract). See{" "}
        <a
          href="https://www.revenuecat.com/privacy"
          className="text-indigo-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          RevenueCat&apos;s Privacy Policy
        </a>{" "}
        for details.
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">3.4 Analytics and Tracking</h3>
      <p className="mb-6">
        The App does <strong>not</strong> use any analytics, tracking, or advertising
        frameworks. No usage data is collected or transmitted.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        4. Data Sharing with Third Parties
      </h2>
      <p className="mb-6">
        Your data is not sold or shared with third parties for marketing purposes. Data is
        only shared with RevenueCat as described above for the purpose of processing in-app
        purchases. RevenueCat is based in the USA; data transfer is secured under the
        EU-U.S. Data Privacy Framework.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        5. Data Retention
      </h2>
      <p className="mb-6">
        Documents are stored on your device until you delete them. Purchase validation data
        is retained by RevenueCat as long as necessary to provide the service. We do not
        store any personal data on our own servers.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        6. Your Rights (Ihre Rechte)
      </h2>
      <p className="mb-4">
        Under the DSGVO/GDPR, you have the following rights regarding your personal data:
      </p>
      <ul className="mb-6 list-disc pl-6 space-y-2">
        <li><strong>Right of access</strong> (Art. 15 DSGVO) — request information about your stored data</li>
        <li><strong>Right to rectification</strong> (Art. 16 DSGVO) — request correction of inaccurate data</li>
        <li><strong>Right to erasure</strong> (Art. 17 DSGVO) — request deletion of your data</li>
        <li><strong>Right to restriction</strong> (Art. 18 DSGVO) — request restricted processing</li>
        <li><strong>Right to data portability</strong> (Art. 20 DSGVO) — receive your data in a portable format</li>
        <li><strong>Right to object</strong> (Art. 21 DSGVO) — object to data processing</li>
        <li><strong>Right to withdraw consent</strong> (Art. 7(3) DSGVO) — withdraw consent at any time without affecting prior processing</li>
      </ul>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        7. Right to Lodge a Complaint
      </h2>
      <p className="mb-6">
        You have the right to lodge a complaint with a supervisory authority. The responsible
        authority for Hamburg is:
      </p>
      <p className="mb-1">Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit</p>
      <p className="mb-1">Ludwig-Erhard-Str. 22, 7. OG</p>
      <p className="mb-1">20459 Hamburg</p>
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

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        8. Children&apos;s Privacy
      </h2>
      <p className="mb-6">
        The App is not directed at children under the age of 16 and does not knowingly
        collect personal information from children.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        9. Changes to This Policy
      </h2>
      <p className="mb-6">
        We may update this privacy policy from time to time. Any changes will be reflected
        on this page with an updated date.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        10. Contact
      </h2>
      <p>
        For any questions about this privacy policy or your data, contact:{" "}
        <a href="mailto:eduardbruch777@gmail.com" className="text-indigo-400 underline">
          eduardbruch777@gmail.com
        </a>
      </p>
    </main>
  );
}
