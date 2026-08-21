export const metadata = {
  title: "Terms of Service — Bellows",
  description:
    "Terms of service for Bellows, the offline developer toolbox for macOS. One-time purchase, no subscription, every future update included.",
};

export default function BellowsTerms() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">Terms of Service</h1>
      <p className="mb-2 text-lg text-neutral-300">Bellows — Developer Tools</p>
      <p className="mb-10 text-sm text-neutral-500">Last updated: August 21, 2026</p>

      <p className="mb-6">
        These terms govern your use of Bellows (&quot;the App&quot;), a macOS
        application developed by Eduard Bruch. By downloading or using the App you
        agree to them.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">1. License Grant</h2>
      <p className="mb-6">
        Subject to these terms and the Mac App Store terms, you are granted a
        non-exclusive, non-transferable license to use the App on Apple devices
        you own or control. The App is licensed, not sold.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        2. What the App Does
      </h2>
      <p className="mb-4">
        The App provides a collection of developer utilities that transform and
        inspect text on your Mac: formatters for JSON, XML and SQL; encoders and
        decoders for Base64, URLs and HTML entities; a JWT decoder; generators for
        UUIDs, hashes, passwords and placeholder text; converters for timestamps,
        number bases, colours and byte sizes; and text tools including a regular
        expression tester, a diff, a case converter and find-and-replace.
      </p>
      <p className="mb-6">
        The App runs entirely offline. It is a developer convenience, not a
        security product. In particular the JWT tool <strong>decodes</strong>{" "}
        tokens for inspection and does <strong>not</strong> verify their
        signatures, and the hash tools produce digests but make no claim about the
        cryptographic suitability of any algorithm for your use case. See section 6.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        3. Purchase and Payment
      </h2>
      <p className="mb-4">
        The App is a <strong>one-time purchase</strong>. There is no subscription,
        no recurring charge and no account to create. Every future update is
        included at no additional cost for as long as the App is maintained; you
        will never be asked to pay again to keep receiving updates.
      </p>
      <p className="mb-6">
        The current price is shown before you buy and varies by App Store
        storefront and local tax. All payments are processed by Apple through the
        Mac App Store and are subject to Apple&apos;s terms. Refunds are handled
        solely by Apple through{" "}
        <a
          href="https://reportaproblem.apple.com"
          className="text-indigo-400 underline"
          rel="noreferrer"
        >
          reportaproblem.apple.com
        </a>
        ; the developer cannot issue them directly.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        4. Trial Version
      </h2>
      <p className="mb-6">
        Where a trial is offered, it provides the complete App for a limited
        period, with no account and no payment details required up front. When the
        trial ends the App stops functioning until a licence is purchased; nothing
        you created with it is deleted, and no charge occurs automatically.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        5. System Requirements
      </h2>
      <p className="mb-6">
        The App requires macOS 14.0 (Sonoma) or later. It requires no permissions
        beyond access to files you explicitly open, and it requests no network
        access — see the{" "}
        <a href="/bellows/privacy" className="text-indigo-400 underline">
          Privacy Policy
        </a>
        . Optional global keyboard shortcuts, if you assign them, are registered
        with macOS in the ordinary way.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        6. Your Data Is Your Responsibility
      </h2>
      <p className="mb-4">
        This deserves to be stated plainly rather than buried. The App transforms
        text you give it. It does its best to do so correctly, and its
        transformations are covered by an automated test suite, but{" "}
        <strong>
          you remain responsible for verifying any output you rely on
        </strong>
        , particularly where the result affects production systems, security
        decisions or data you cannot reconstruct.
      </p>
      <p className="mb-4">Specifically:</p>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li>
          the JWT tool decodes and displays a token; it does not validate the
          signature, and a decoded token must never be treated as an
          authenticated one;
        </li>
        <li>
          formatting, minifying and converting are lossy for some inputs — for
          example, comments and key ordering may not survive a round trip;
        </li>
        <li>
          generated passwords and UUIDs come from the system&apos;s cryptographic
          random source, but their suitability for a given purpose is your
          judgement to make;
        </li>
        <li>
          find-and-replace and regular expressions do exactly what you ask,
          including when that is not what you meant.
        </li>
      </ul>
      <p className="mb-6">
        Keep your own backups of anything important before transforming it.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        7. Privacy
      </h2>
      <p className="mb-6">
        The App collects no data and cannot transmit any, because it ships without
        a network entitlement. The{" "}
        <a href="/bellows/privacy" className="text-indigo-400 underline">
          Privacy Policy
        </a>{" "}
        explains this in full, including how to verify it yourself.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        8. Acceptable Use
      </h2>
      <p className="mb-6">
        You agree not to use the App to process material you have no right to
        possess, and not to reverse engineer, decompile or redistribute it except
        to the extent that applicable law expressly permits despite this
        restriction.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        9. Intellectual Property
      </h2>
      <p className="mb-6">
        The App, its name, icon and design remain the property of the developer.
        Text you process with it remains entirely yours; no licence to it is
        granted or implied, and the developer never receives it.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        10. Open-Source Components
      </h2>
      <p className="mb-6">
        The App includes open-source libraries used under their respective
        licences, covering preferences storage, keyboard shortcut handling,
        launch-at-login and opening the Settings window. Each remains subject to
        its own licence terms; all operate locally.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        11. Warranty Disclaimer
      </h2>
      <p className="mb-6">
        The App is provided &quot;as is&quot; and &quot;as available&quot;,
        without warranty of any kind, whether express or implied, including
        warranties of merchantability, fitness for a particular purpose and
        non-infringement. No warranty is given that the App will be uninterrupted,
        error-free, or that its output will be correct for every possible input.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        12. Limitation of Liability
      </h2>
      <p className="mb-6">
        To the fullest extent permitted by law, the developer is not liable for
        indirect, incidental, special, consequential or punitive damages, or for
        any loss of data, profits or revenue arising from your use of the App.
        Total liability is limited to the amount you paid for the App. Nothing in
        these terms excludes liability that cannot lawfully be excluded, including
        liability for death or personal injury caused by negligence, for fraud, or
        under mandatory German consumer law.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        13. Changes to These Terms
      </h2>
      <p className="mb-6">
        These terms may be updated as the App changes. Material changes will be
        reflected here with a new date at the top of the page. Continuing to use
        the App after a change constitutes acceptance of the updated terms.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        14. Governing Law
      </h2>
      <p className="mb-6">
        These terms are governed by the laws of the Federal Republic of Germany,
        excluding its conflict-of-law rules. If you are a consumer resident in the
        EU, you retain the protection of the mandatory provisions of the law of
        your country of residence.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">15. Contact</h2>
      <p className="mb-6">
        Eduard Bruch, Kleinfeld 28c, 21149 Hamburg, Deutschland —{" "}
        <a href="mailto:support@eduardbruch.com" className="text-indigo-400 underline">
          support@eduardbruch.com
        </a>
      </p>
    </main>
  );
}
