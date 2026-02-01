export const metadata = {
  title: "Support — PDF Creator",
};

export default function Support() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-neutral-200">
      <h1 className="mb-8 text-3xl font-bold text-white">PDF Creator Support</h1>

      <p className="mb-6">
        Need help with PDF Creator? We&apos;re here to assist you.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">Frequently Asked Questions</h2>

      <div className="mb-4">
        <h3 className="mb-1 font-medium text-white">How do I scan a document?</h3>
        <p className="text-neutral-400">
          Tap the scan button on the home screen, point your camera at the document, and
          the app will automatically detect and capture the page.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="mb-1 font-medium text-white">How do I unlock premium features?</h3>
        <p className="text-neutral-400">
          Go to Settings and tap &quot;Upgrade to Premium&quot;. PDF Creator offers a
          one-time purchase that unlocks all tools forever — no subscription required.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="mb-1 font-medium text-white">How do I restore my purchase?</h3>
        <p className="text-neutral-400">
          Go to Settings and tap &quot;Restore Purchases&quot;. This will restore your
          premium access if you previously purchased it.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="mb-1 font-medium text-white">Where are my PDFs stored?</h3>
        <p className="text-neutral-400">
          All documents are stored locally on your device. They are not uploaded to any
          server.
        </p>
      </div>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">Contact Us</h2>
      <p className="mb-6">
        If you have a question, bug report, or feature request, please email us at{" "}
        <a href="mailto:eduardbruch777@gmail.com" className="text-indigo-400 underline">
          eduardbruch777@gmail.com
        </a>
        .
      </p>

      <p className="mt-12 text-sm text-neutral-500">
        PDF Creator v1.0 — developed by Eduard Bruch
      </p>
    </main>
  );
}
