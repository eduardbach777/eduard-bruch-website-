export const metadata = {
  title: "Privacy Policy — PDF Creator",
};

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-neutral-200">
      <h1 className="mb-8 text-3xl font-bold text-white">Privacy Policy</h1>
      <p className="mb-4 text-sm text-neutral-400">Last updated: February 1, 2026</p>

      <p className="mb-6">
        PDF Creator (&quot;the App&quot;) is developed by Eduard Bruch. This privacy policy
        explains how the App handles your data.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">Data Collection</h2>
      <p className="mb-6">
        The App does <strong>not</strong> collect, store, or transmit any personal data to
        external servers. All documents you scan, import, or create are stored locally on
        your device and are never uploaded to any server.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">Camera Access</h2>
      <p className="mb-6">
        The App requests access to your device&apos;s camera solely for the purpose of
        scanning documents. Camera data is processed locally and is not shared with any
        third party.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">In-App Purchases</h2>
      <p className="mb-6">
        The App offers a one-time in-app purchase to unlock premium features. Purchases are
        processed by Apple through the App Store. We do not have access to your payment
        information. Purchase validation is handled by RevenueCat, which may process
        anonymized transaction data. See{" "}
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

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">Analytics</h2>
      <p className="mb-6">
        The App does not use any analytics or tracking tools.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">Children&apos;s Privacy</h2>
      <p className="mb-6">
        The App is not directed at children under the age of 13 and does not knowingly
        collect personal information from children.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">Changes to This Policy</h2>
      <p className="mb-6">
        We may update this privacy policy from time to time. Any changes will be reflected
        on this page with an updated date.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">Contact</h2>
      <p>
        If you have any questions about this privacy policy, please contact us at{" "}
        <a href="mailto:eduardbruch777@gmail.com" className="text-indigo-400 underline">
          eduardbruch777@gmail.com
        </a>
        .
      </p>
    </main>
  );
}
