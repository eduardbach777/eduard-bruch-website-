export const metadata = {
  title: "Privacy Policy — Optic - Screen OCR",
  description:
    "Privacy policy for Optic - Screen OCR for macOS. No analytics, no telemetry, no network calls — your screen captures stay on your Mac.",
};

export default function OpticPrivacyPolicy() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-neutral-200">
      <h1 className="mb-8 text-3xl font-bold text-white">
        Privacy Policy / Datenschutzerklärung
      </h1>
      <p className="mb-2 text-lg text-neutral-300">Optic — Screen OCR</p>
      <p className="mb-4 text-sm text-neutral-400">Last updated: September 1, 2026</p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        1. Data Controller (Verantwortlicher)
      </h2>
      <p className="mb-1">Eduard Bruch</p>
      <p className="mb-1">Kleinfeld 28c</p>
      <p className="mb-1">21149 Hamburg, Deutschland</p>
      <p className="mb-6">
        E-Mail:{" "}
        <a href="mailto:support@eduardbruch.com" className="text-amber-400 underline">
          support@eduardbruch.com
        </a>
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        2. Overview
      </h2>
      <p className="mb-6">
        Optic (&quot;the App&quot;) is a native macOS screen OCR tool that lets
        you capture and recognize text and QR codes from anything on your
        display. The App is designed with privacy as a core principle. We take
        the protection of your personal data seriously. This privacy policy
        explains what data is processed when you use the App and on what legal
        basis.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        3. Data Collection and Processing
      </h2>

      <h3 className="mb-2 mt-4 font-medium text-white">3.1 Local Processing Only</h3>
      <p className="mb-4">
        All screen captures and text recognition occur <strong>entirely locally
        on your device</strong>. Optic uses Apple Vision framework to recognize
        text and QR codes from screen selections. No captured content is ever
        transmitted to any external server. The legal basis is Art. 6(1)(b)
        DSGVO (performance of a contract / provision of the service).
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">3.2 User Preferences</h3>
      <p className="mb-4">
        The App stores your preferences and settings locally on your Mac using
        macOS UserDefaults. This data never leaves your device. It includes:
        window positions, capture history, and appearance settings.
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">3.3 No Network Requests</h3>
      <p className="mb-4">
        Optic makes <strong>zero network requests</strong>. The App does not
        connect to the internet for any purpose. There is no analytics, no
        telemetry, no crash reporting, no update checking, and no data
        transmission of any kind. The App runs in the macOS sandbox with no
        network entitlements.
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">3.4 No Analytics or Tracking</h3>
      <p className="mb-4">
        We do not use any analytics frameworks, tracking pixels, advertising
        identifiers, or third-party SDKs. We do not collect usage statistics,
        device information, or behavioral data.
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">3.5 Screen Captures</h3>
      <p className="mb-6">
        Optic accesses screen content only when you explicitly initiate a
        capture via keyboard shortcut. Captured regions are processed locally
        for text recognition and stored temporarily in the capture history on
        your device. No screen content is ever transmitted anywhere or accessed
        without your action.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        4. Data Sharing with Third Parties
      </h2>
      <p className="mb-6">
        We do not share any data with third parties. There are no third-party
        services, SDKs, or integrations in the App.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        5. Data Retention
      </h2>
      <p className="mb-6">
        Since no personal data is collected or transmitted, there is no data to
        retain on our end. Local preferences stored on your Mac persist until
        you uninstall the App or delete them manually.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        6. Purchases
      </h2>
      <p className="mb-6">
        Optic is distributed through the Mac App Store. All purchases and
        payment processing are handled entirely by Apple. We do not have access
        to your payment information, Apple ID, or purchase history.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        7. Your Rights (DSGVO / GDPR)
      </h2>
      <p className="mb-4">
        Under the General Data Protection Regulation (DSGVO), you have the
        following rights:
      </p>
      <ul className="mb-6 list-disc pl-6 space-y-2">
        <li><strong>Right of Access (Art. 15 DSGVO)</strong> — You may request information about any personal data we process. Since we process none, there is nothing to disclose.</li>
        <li><strong>Right to Erasure (Art. 17 DSGVO)</strong> — You may request deletion of your personal data. Uninstalling the App removes all locally stored preferences.</li>
        <li><strong>Right to Data Portability (Art. 20 DSGVO)</strong> — Not applicable as no personal data is collected.</li>
        <li><strong>Right to Lodge a Complaint</strong> — You may lodge a complaint with the Hamburg Commissioner for Data Protection and Freedom of Information (HmbBfDI).</li>
      </ul>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        8. Children&apos;s Privacy
      </h2>
      <p className="mb-6">
        The App does not collect personal data from anyone, including children
        under the age of 13 (or 16 under DSGVO). The App is suitable for all
        ages.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        9. Changes to This Privacy Policy
      </h2>
      <p className="mb-6">
        We may update this privacy policy from time to time. The latest version
        will always be available at{" "}
        <a
          href="https://eduardbruch.com/optic/privacy"
          className="text-amber-400 underline"
        >
          eduardbruch.com/optic/privacy
        </a>
        . We encourage you to review this page periodically.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        10. Contact
      </h2>
      <p className="mb-2">
        If you have questions about this privacy policy, contact us at:
      </p>
      <p className="mb-1">Eduard Bruch</p>
      <p className="mb-1">Kleinfeld 28c, 21149 Hamburg, Deutschland</p>
      <p className="mb-6">
        <a href="mailto:support@eduardbruch.com" className="text-amber-400 underline">
          support@eduardbruch.com
        </a>
      </p>
    </main>
  );
}
