export const metadata = {
  title: "Privacy Policy — PDF Creator",
};

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-neutral-200">
      <h1 className="mb-8 text-3xl font-bold text-white">
        Privacy Policy / Datenschutzerklärung
      </h1>
      <p className="mb-4 text-sm text-neutral-400">Last updated: March 17, 2026</p>

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
        PDF Creator (&quot;the App&quot;) is a document scanner and PDF toolkit for iOS,
        offering 29 professional tools including scanning, merging, splitting, signing,
        OCR text extraction, watermarking, password protection, compression, and more.
        We take the protection of your personal data seriously. This privacy policy explains
        what data is processed when you use the App and on what legal basis.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        3. Data Collection and Processing
      </h2>

      <h3 className="mb-2 mt-4 font-medium text-white">3.1 Local Data Storage</h3>
      <p className="mb-4">
        All documents you scan, import, or create are stored <strong>locally on your
        device</strong> by default. No document data is transmitted to external servers
        unless you explicitly enable cloud sync features (see Sections 3.5 and 3.6).
        The legal basis is Art. 6(1)(b) DSGVO (performance of a contract / provision of the service).
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">3.2 Camera Access</h3>
      <p className="mb-4">
        The App requests access to your device&apos;s camera for scanning documents,
        ID cards, passports, and QR codes. Camera data is processed locally and is not
        shared with any third party. The App does not record video or audio. The legal basis is
        Art. 6(1)(a) DSGVO (your consent, granted via the iOS permission dialog).
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">3.3 Photo Library Access</h3>
      <p className="mb-4">
        The App may request access to your photo library to import images for conversion
        to PDF, photo enhancement, or passport photo creation. Photos are processed locally
        on your device and are not transmitted to external servers. The legal basis is
        Art. 6(1)(a) DSGVO (your consent, granted via the iOS permission dialog).
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">3.4 OCR and Text Recognition</h3>
      <p className="mb-4">
        The App uses Apple&apos;s built-in Vision framework to perform optical character
        recognition (OCR) on scanned documents. All text recognition is processed entirely
        on your device. No document content is sent to any external server for OCR processing.
        The legal basis is Art. 6(1)(b) DSGVO (performance of a contract).
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">3.5 iCloud Sync (Optional)</h3>
      <p className="mb-4">
        If you enable iCloud Sync in the App&apos;s settings, your documents will be uploaded
        to and stored in your personal Apple iCloud account. This data transfer is governed by
        Apple&apos;s iCloud Terms of Service and Apple&apos;s Privacy Policy. iCloud Sync is
        disabled by default and only activated at your explicit request. The legal basis is
        Art. 6(1)(a) DSGVO (your consent).
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">3.6 Google Drive Sync (Optional)</h3>
      <p className="mb-4">
        If you enable Google Drive Sync, the App will use Google Sign-In to authenticate your
        Google account. Upon successful authentication, your documents will be uploaded to and
        stored in your personal Google Drive account. The following data is shared with Google:
      </p>
      <ul className="mb-4 list-disc pl-6 space-y-2">
        <li>Your Google account identity (name, email address) for authentication purposes</li>
        <li>Your PDF documents, for storage in your Google Drive</li>
      </ul>
      <p className="mb-4">
        Google Drive Sync is disabled by default and only activated at your explicit request.
        Google acts as a separate data controller for data stored in Google Drive. Data transfer
        to the USA is secured under the EU–U.S. Data Privacy Framework. See{" "}
        <a
          href="https://policies.google.com/privacy"
          className="text-indigo-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google&apos;s Privacy Policy
        </a>{" "}
        for details. The legal basis is Art. 6(1)(a) DSGVO (your consent).
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">3.7 In-App Purchases</h3>
      <p className="mb-4">
        The App offers auto-renewable subscriptions (weekly and annual plans) processed by Apple
        through the App Store. We do not have access to your payment information. Purchase
        validation is handled by RevenueCat, Inc. (USA), which processes anonymized transaction
        data (purchase tokens, transaction IDs, device identifiers) to verify entitlements.
        RevenueCat acts as a data processor on our behalf. The legal basis is Art. 6(1)(b)
        DSGVO (performance of a contract). See{" "}
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

      <h3 className="mb-2 mt-4 font-medium text-white">3.8 Web to PDF</h3>
      <p className="mb-4">
        The App includes a Web to PDF feature that loads web pages within the App to convert
        them to PDF format. The web page is fetched directly from the website&apos;s server to
        your device. No browsing data is collected, stored, or transmitted by the Developer.
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">3.9 Analytics and Tracking</h3>
      <p className="mb-6">
        The App does <strong>not</strong> use any analytics, tracking, or advertising
        frameworks. No usage data is collected or transmitted.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        4. Data Sharing with Third Parties
      </h2>
      <p className="mb-4">
        Your data is not sold or shared with third parties for marketing purposes. Data sharing
        occurs only with the following services, and only as described above:
      </p>
      <ul className="mb-6 list-disc pl-6 space-y-2">
        <li>
          <strong>RevenueCat</strong> — for in-app purchase processing and subscription
          management. RevenueCat is based in the USA; data transfer is secured under the
          EU–U.S. Data Privacy Framework.
        </li>
        <li>
          <strong>Apple (iCloud)</strong> — only if you enable iCloud Sync. Governed by
          Apple&apos;s Privacy Policy and iCloud Terms of Service.
        </li>
        <li>
          <strong>Google (Drive & Sign-In)</strong> — only if you enable Google Drive Sync.
          Governed by Google&apos;s Privacy Policy. Data transfer to the USA is secured under
          the EU–U.S. Data Privacy Framework.
        </li>
      </ul>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        5. Data Retention
      </h2>
      <p className="mb-6">
        Documents are stored on your device until you delete them. If you enable cloud sync,
        documents are also stored in your iCloud or Google Drive account according to those
        services&apos; retention policies. Purchase validation data is retained by RevenueCat
        as long as necessary to provide the service. We do not store any personal data on our
        own servers.
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
