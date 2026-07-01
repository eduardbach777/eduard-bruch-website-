export const metadata = {
  title: "Privacy Policy — QR Scanner & Code Creator",
  description:
    "Privacy policy for QR Scanner & Code Creator by Eduard Bruch. Scans are processed on-device, history stays local, no tracking or analytics.",
};

export default function QrScannerPrivacy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">Privacy Policy</h1>
      <p className="mb-2 text-lg text-neutral-300">
        QR Scanner &amp; Code Creator
      </p>
      <p className="mb-10 text-sm text-neutral-500">
        Last updated: July 1, 2026
      </p>

      <p className="mb-6">
        This privacy policy describes how QR Scanner &amp; Code Creator
        (&quot;the App&quot;), published by Eduard Bruch, handles your data. In
        short:{" "}
        <strong>
          your scans are processed on your device, your history never leaves
          your device, and the App contains no advertising, analytics, or
          tracking
        </strong>
        . There is no account and no registration.
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

      {/* 2. Camera */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        2. Camera
      </h2>
      <p className="mb-4 border-l-4 border-emerald-500 pl-4 font-medium text-white">
        The camera is used only to detect codes in real time. Camera frames are
        processed live on your device and are never stored, uploaded, or
        transmitted.
      </p>
      <p className="mb-6">
        The App requests camera access solely so you can scan QR codes and
        barcodes. Decoding happens entirely on-device using Apple&apos;s system
        frameworks. The App does not take or save photos, and no image data
        leaves your device. You can revoke camera access at any time in iOS
        Settings.
      </p>

      {/* 3. Scan & Generation History */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        3. Scan &amp; Generation History
      </h2>
      <p className="mb-6">
        Codes you scan or create are saved locally on your device so you can
        view them later, mark favorites, and show recent items in the home-screen
        widget. This history is stored on-device (and, for the widget, in a
        private app group container on the same device). It is never sent to us
        or any third party, and it is deleted when you clear your history or
        delete the App.
      </p>

      {/* 4. Link Safety Check */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        4. Link Safety Check
      </h2>
      <p className="mb-6">
        When you scan a link, the App may flag potentially suspicious URLs (for
        example, common link shorteners or phishing-style patterns). This check
        runs entirely on-device against a built-in list. No scanned link,
        browsing activity, or URL is sent to any server as part of this feature.
      </p>

      {/* 5. Subscriptions */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        5. Subscriptions &amp; Purchases
      </h2>
      <p className="mb-4">
        Premium features are offered through auto-renewable subscriptions.
        Purchases are handled by <strong>Apple</strong> through the App Store;
        we never see or receive your payment details.
      </p>
      <p className="mb-4">
        To verify your subscription status across your devices, the App uses{" "}
        <strong>RevenueCat, Inc.</strong> (USA) as a data processor. RevenueCat
        receives a pseudonymous app user identifier together with purchase and
        receipt information and basic device/OS information. It does not receive
        your name, email, or any scan data. Legal basis: Art. 6(1)(b) GDPR
        (performance of a contract). Because RevenueCat is based in the USA, this
        involves a transfer of data outside the EU/EEA.
      </p>
      <p className="mb-6">
        See{" "}
        <a
          href="https://www.revenuecat.com/privacy"
          className="text-indigo-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          RevenueCat&apos;s Privacy Policy
        </a>{" "}
        and{" "}
        <a
          href="https://www.apple.com/legal/privacy/"
          className="text-indigo-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple&apos;s Privacy Policy
        </a>{" "}
        for details on how they process this data.
      </p>

      {/* 6. What We Do NOT Do */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        6. What We Do Not Do
      </h2>
      <p className="mb-4 border-l-4 border-emerald-500 pl-4 font-medium text-white">
        No analytics. No advertising. No third-party tracking. No selling or
        sharing of personal data. No account.
      </p>
      <p className="mb-6">
        The App does not contain any advertising or analytics SDKs and does not
        build a profile of you.
      </p>

      {/* 7. Data Retention */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        7. Data Retention
      </h2>
      <ul className="mb-6 list-disc space-y-2 pl-6">
        <li>
          <strong>Scan &amp; generation history:</strong> stored on your device
          until you delete it or remove the App.
        </li>
        <li>
          <strong>Subscription data</strong> (RevenueCat): retained for the
          duration of your subscription and as required for financial/legal
          record-keeping.
        </li>
      </ul>

      {/* 8. California (CCPA) */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        8. California Residents (CCPA)
      </h2>
      <p className="mb-6">
        We do not sell your personal information and do not share it for
        cross-context behavioral advertising. California residents have the
        right to know, delete, and opt out; because we do not sell or share
        personal information, there is nothing to opt out of.
      </p>

      {/* 9. Your Rights (GDPR) */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        9. Your Rights (GDPR)
      </h2>
      <p className="mb-3">Under the GDPR, you have the right to:</p>
      <ul className="mb-6 list-disc space-y-2 pl-6">
        <li>Access the personal data we process about you</li>
        <li>Request correction or deletion of your data</li>
        <li>Restrict or object to processing</li>
        <li>Data portability</li>
        <li>Lodge a complaint with a supervisory authority</li>
      </ul>
      <p className="mb-6">
        Most data (your history) lives only on your device and is fully under
        your control. For subscription data held by our processor, contact us at{" "}
        <a
          href="mailto:support@eduardbruch.com"
          className="text-indigo-400 underline"
        >
          support@eduardbruch.com
        </a>
        .
      </p>

      {/* 10. Children */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        10. Children
      </h2>
      <p className="mb-6">
        The App is not directed at children under 16 (GDPR Art. 8) or under 13
        (COPPA) and does not knowingly collect data from them.
      </p>

      {/* 11. Changes */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        11. Changes to This Policy
      </h2>
      <p className="mb-6">
        We may update this policy from time to time. Material changes will be
        reflected by updating the &quot;Last updated&quot; date above.
      </p>

      {/* 12. Contact */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        12. Contact
      </h2>
      <p className="mb-6">
        Questions about this policy? Email{" "}
        <a
          href="mailto:support@eduardbruch.com"
          className="text-indigo-400 underline"
        >
          support@eduardbruch.com
        </a>
        .
      </p>
    </main>
  );
}
