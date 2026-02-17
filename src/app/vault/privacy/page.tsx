export const metadata = {
  title: "Privacy Policy — Vault Apps",
  description:
    "Privacy policy for BrowserVault, CameraVault, FitnessVault, GameVault, MailVault, MusicVault, TranslatorVault, and CalcVault.",
};

export default function VaultPrivacy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">Privacy Policy</h1>
      <p className="mb-2 text-lg text-neutral-300">Vault Apps</p>
      <p className="mb-10 text-sm text-neutral-500">
        Last updated: February 17, 2026
      </p>

      <p className="mb-6">
        This privacy policy applies to the following applications published by
        Eduard Bruch: BrowserVault, CameraVault, FitnessVault, GameVault,
        MailVault, MusicVault, TranslatorVault, and CalcVault (collectively,
        &quot;the Apps&quot;). These Apps provide secure, encrypted on-device
        storage for private content.
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

      {/* 2. Data We Collect */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        2. Data We Collect and Process
      </h2>

      <h3 className="mb-2 mt-4 font-medium text-white">
        2.1 PIN Code
      </h3>
      <p className="mb-4">
        Your PIN is stored as a cryptographic hash (SHA-256) in the device&apos;s
        secure storage (iOS Keychain / Android Secure Storage). Your PIN is
        <strong> never stored in plaintext</strong> and cannot be recovered by
        us or anyone else.
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">
        2.2 Photos and Videos
      </h3>
      <p className="mb-4">
        Media files you store in the vault are encrypted using AES-256
        encryption and stored <strong>locally on your device only</strong>. They
        are never transmitted to any external server, never included in device
        backups (unless you explicitly enable this), and never accessible to us
        or any third party.
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">
        2.3 Secure Notes
      </h3>
      <p className="mb-4">
        Notes stored in the vault are encrypted on-device using the same AES-256
        encryption and are never transmitted externally.
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">
        2.4 Biometric Data (Face ID / Touch ID)
      </h3>
      <p className="mb-4">
        If you enable biometric unlock, authentication is handled entirely by
        the operating system (iOS LocalAuthentication framework). The App{" "}
        <strong>never receives, stores, or processes your biometric data
        </strong>. It only receives a success/failure result from the system.
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">
        2.5 Intruder Detection Photos
      </h3>
      <p className="mb-4 border-l-4 border-amber-500 pl-4">
        When the intruder detection feature is enabled and an incorrect PIN is
        entered, the App may capture a photo using the front-facing camera.
        These photos are <strong>stored locally on your device and encrypted
        </strong>. They are <strong>never transmitted to any external server
        </strong> and are only accessible within the App after successful
        authentication. You can delete intruder photos at any time from within
        the App. Legal basis: Art. 6(1)(f) GDPR (legitimate interest in device
        security) and Art. 6(1)(a) GDPR (your consent when enabling the
        feature).
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">
        2.6 Web Browsing Data (BrowserVault)
      </h3>
      <p className="mb-4">
        BrowserVault stores browsing history and bookmarks locally on your
        device. This data is clearable at any time from within the App and is
        never transmitted externally.
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">
        2.7 Disguise Layer Data
      </h3>
      <p className="mb-4">
        Each App includes a disguise layer (e.g., calculator, fitness tracker,
        browser) that stores non-sensitive surface-level data (step counts, game
        scores, calculator history) locally on your device.
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">
        2.8 Subscription Data
      </h3>
      <p className="mb-6">
        Subscriptions are processed by Apple / Google and verified through
        RevenueCat, Inc. (USA). RevenueCat receives anonymized transaction data
        to verify your subscription status. We do not have access to your
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

      {/* 3. On-Device Storage */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        3. On-Device Storage Only
      </h2>
      <p className="mb-6">
        <strong>
          We do not operate any servers that store your data.
        </strong>{" "}
        All vault content (photos, videos, notes, browsing data) is stored
        exclusively on your device. We have no ability to access, view, or
        recover your encrypted data.
      </p>

      {/* 4. Right to Erasure */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        4. Data Deletion
      </h2>
      <p className="mb-6">
        You can delete all your data at any time by using the &quot;Reset
        Vault&quot; option in the App&apos;s settings, or by uninstalling the
        App. Once deleted, encrypted data cannot be recovered.
      </p>

      {/* 5. Data Sharing */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        5. Data Sharing
      </h2>
      <p className="mb-6">
        We do not sell, rent, or share your personal data with third parties.
        The only third-party service involved is RevenueCat for subscription
        verification. Data transfer to the USA is covered by the EU-U.S. Data
        Privacy Framework.
      </p>

      {/* 6. CCPA */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        6. California Residents (CCPA)
      </h2>
      <p className="mb-6">
        We do not sell personal information. We do not share personal
        information for cross-context behavioral advertising. California
        residents may contact us at support@eduardbruch.com to exercise their
        CCPA rights.
      </p>

      {/* 7. GDPR Rights */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        7. Your Rights (GDPR)
      </h2>
      <ul className="mb-6 list-disc pl-6 space-y-2">
        <li>
          <strong>Access</strong> (Art. 15) — request what data we hold
        </li>
        <li>
          <strong>Rectification</strong> (Art. 16) — correct inaccurate data
        </li>
        <li>
          <strong>Erasure</strong> (Art. 17) — delete your data via app settings
          or by uninstalling
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
          <strong>Withdraw Consent</strong> (Art. 7(3)) — withdraw consent at
          any time
        </li>
      </ul>

      {/* 8. Complaint */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        8. Right to Lodge a Complaint
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

      {/* 9. Children */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        9. Children&apos;s Privacy
      </h2>
      <p className="mb-6">
        The Apps are not directed at children under 13 (COPPA) or 16 (GDPR). We
        do not knowingly collect personal information from children.
      </p>

      {/* 10. Analytics */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        10. Analytics and Tracking
      </h2>
      <p className="mb-6">
        The Apps do <strong>not</strong> use any analytics, advertising, or
        tracking frameworks. No usage data is collected or transmitted.
      </p>

      {/* 11. Changes */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        11. Changes to This Policy
      </h2>
      <p className="mb-6">
        We may update this privacy policy from time to time. Changes will be
        reflected on this page with an updated date.
      </p>

      {/* 12. Contact */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        12. Contact
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
