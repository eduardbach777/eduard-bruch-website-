export const metadata = {
  title: "Terms of Use — PDF Creator",
  description:
    "Terms of use for the PDF Creator document scanner and PDF toolkit app by Eduard Bruch.",
};

export default function PdfCreatorTerms() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">
        Terms of Use / Nutzungsbedingungen
      </h1>
      <p className="mb-2 text-lg text-neutral-300">PDF Creator</p>
      <p className="mb-10 text-sm text-neutral-500">
        Last updated: February 23, 2026
      </p>

      <p className="mb-6">
        These Terms of Use (&quot;Terms&quot;) govern your use of PDF Creator
        (&quot;the App&quot;), a document scanner and PDF toolkit for iOS,
        developed and published by Eduard Bruch (&quot;Developer&quot;,
        &quot;we&quot;, &quot;us&quot;). By downloading, installing, or using the
        App, you agree to be bound by these Terms. If you do not agree, do not
        use the App.
      </p>

      {/* 1. License Grant */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        1. License Grant
      </h2>
      <p className="mb-4">
        Subject to your compliance with these Terms, we grant you a limited,
        non-exclusive, non-transferable, revocable license to download, install,
        and use the App on Apple-branded devices that you own or control, as
        permitted by the App Store Terms of Service.
      </p>
      <p className="mb-6">You may not:</p>
      <ul className="mb-6 list-disc pl-6 space-y-2">
        <li>
          Reverse engineer, decompile, disassemble, or attempt to derive the
          source code of the App;
        </li>
        <li>
          Sublicense, rent, lease, lend, or transfer the App or any rights
          therein to any third party;
        </li>
        <li>
          Modify, adapt, or create derivative works based on the App;
        </li>
        <li>
          Remove, alter, or obscure any proprietary notices in the App.
        </li>
      </ul>

      {/* 2. App Description & Intended Use */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        2. App Description and Intended Use
      </h2>
      <p className="mb-4">
        PDF Creator is a document scanner and PDF toolkit that allows you to
        scan documents using your device&apos;s camera, and merge, split,
        compress, and edit PDF files.
      </p>
      <ul className="mb-6 list-disc pl-6 space-y-2">
        <li>The App uses your device camera solely for document scanning.</li>
        <li>
          All document processing occurs locally on your device. No documents
          are uploaded to external servers.
        </li>
        <li>
          You retain full ownership of all documents you create, scan, or
          process using the App.
        </li>
      </ul>

      {/* 3. Subscriptions and Payments */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        3. Subscriptions and Payments
      </h2>
      <p className="mb-4">
        The App offers premium features through auto-renewable subscriptions
        with three tiers: weekly, monthly, and annual.
      </p>
      <ul className="mb-6 list-disc pl-6 space-y-2">
        <li>
          Payment will be charged to your Apple ID account at confirmation of
          purchase.
        </li>
        <li>
          Subscriptions automatically renew unless canceled at least 24 hours
          before the end of the current period.
        </li>
        <li>
          Your account will be charged for renewal within 24 hours prior to the
          end of the current period at the rate of the selected plan.
        </li>
        <li>
          You can manage and cancel your subscriptions by going to{" "}
          <strong>Settings → [Your Name] → Subscriptions</strong> on your iOS
          device.
        </li>
        <li>
          All billing is handled by Apple through the App Store. We do not have
          access to your payment information.
        </li>
        <li>
          RevenueCat, Inc. is used as an intermediary for subscription
          management and entitlement verification.
        </li>
      </ul>

      {/* 4. Free Trial Terms */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        4. Free Trial Terms
      </h2>
      <p className="mb-6">
        If a free trial is offered, it provides temporary access to premium
        features. Any unused portion of the free trial period will be forfeited
        when you purchase a subscription. The free trial automatically converts
        to a paid subscription at the end of the trial period unless you cancel
        at least 24 hours before the trial expires.
      </p>

      {/* 5. Refund Policy */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        5. Refund Policy
      </h2>
      <p className="mb-4">
        All purchases are processed by Apple. Refund requests must be directed
        to Apple through their support channels at{" "}
        <a
          href="https://support.apple.com"
          className="text-indigo-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://support.apple.com
        </a>
        .
      </p>
      <p className="mb-6">
        If you are a consumer in the European Union, you have the right to
        withdraw from a purchase within 14 days without giving any reason, as
        provided under EU consumer protection law. However, you acknowledge that
        by requesting immediate access to digital content upon purchase, you may
        lose your right of withdrawal once the digital content has been fully
        provided, in accordance with Art. 16(m) of Directive 2011/83/EU.
      </p>

      {/* 6. Camera Permission and Usage */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        6. Camera Permission and Usage
      </h2>
      <ul className="mb-6 list-disc pl-6 space-y-2">
        <li>
          The App requests camera access solely for the purpose of scanning
          documents.
        </li>
        <li>
          All camera data is processed locally on your device and is never
          uploaded or transmitted to external servers.
        </li>
        <li>The App does not record video or audio.</li>
        <li>
          You can revoke camera access at any time through{" "}
          <strong>iOS Settings → Privacy & Security → Camera</strong>.
        </li>
      </ul>

      {/* 7. Local Data Storage */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        7. Local Data Storage
      </h2>
      <ul className="mb-6 list-disc pl-6 space-y-2">
        <li>
          All documents you scan, create, or process are stored exclusively on
          your device.
        </li>
        <li>
          No document data is transmitted to any cloud service or external
          server.
        </li>
        <li>
          Deleting the App will remove all locally stored documents from your
          device.
        </li>
        <li>
          You are responsible for maintaining your own backups of important
          documents.
        </li>
      </ul>

      {/* 8. No Analytics or Tracking */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        8. No Analytics or Tracking
      </h2>
      <p className="mb-6">
        The App does not use any analytics, tracking, advertising, or behavioral
        monitoring frameworks. No user identifiers are collected. No cookies are
        used. No data is sold to or shared with third parties for marketing
        purposes.
      </p>

      {/* 9. Intellectual Property */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        9. Intellectual Property
      </h2>
      <p className="mb-4">
        All code, designs, graphics, icons, and software contained in the App
        are the intellectual property of Eduard Bruch and are protected by
        copyright and other intellectual property laws.
      </p>
      <p className="mb-6">
        You retain full ownership of all documents you create, scan, or process
        using the App. The Developer makes no claim to any user-generated
        content. You may not copy, modify, distribute, or reverse engineer the
        App or any of its components.
      </p>

      {/* 10. User Conduct */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        10. User Conduct
      </h2>
      <p className="mb-6">
        You agree to use the App only for lawful purposes and in accordance with
        these Terms. You may not use the App in any manner that could damage,
        disable, overburden, or impair the service, or attempt to circumvent any
        payment mechanisms.
      </p>

      {/* 11. Disclaimer of Warranties */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        11. Disclaimer of Warranties
      </h2>
      <p className="mb-4">
        The App is provided &quot;as is&quot; and &quot;as available&quot;
        without warranties of any kind, either express or implied, including but
        not limited to implied warranties of merchantability, fitness for a
        particular purpose, and non-infringement. We do not warrant that the App
        will be uninterrupted, secure, or error-free.
      </p>
      <p className="mb-6">
        This disclaimer does not affect your statutory warranty rights under
        German law (§§ 434–437 BGB), which remain fully applicable.
      </p>

      {/* 12. Limitation of Liability */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        12. Limitation of Liability
      </h2>
      <p className="mb-4">
        To the maximum extent permitted by applicable law, Eduard Bruch shall
        not be liable for any indirect, incidental, special, consequential, or
        punitive damages, or any loss of profits, revenues, data, use, goodwill,
        or other intangible losses, resulting from (a) your use of or inability
        to use the App; (b) any loss of documents or data; or (c) unauthorized
        access to or alteration of your data.
      </p>
      <p className="mb-4">
        Our maximum aggregate liability for any claims arising from or related
        to these Terms or the App shall not exceed the total amount you paid for
        the App in the twelve (12) months preceding the claim.
      </p>
      <p className="mb-6">
        Under German law (BGB § 276, § 280), liability for gross negligence
        (grobe Fahrlässigkeit), willful misconduct (Vorsatz), and personal
        injury cannot be excluded or limited.
      </p>

      {/* 13. Apple — Third-Party Beneficiary */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        13. Apple — Third-Party Beneficiary
      </h2>
      <p className="mb-4">
        You acknowledge that these Terms are between you and the Developer only,
        and not with Apple Inc. (&quot;Apple&quot;). Apple is not responsible for
        the App or its content.
      </p>
      <ul className="mb-6 list-disc pl-6 space-y-2">
        <li>
          Apple has no obligation whatsoever to furnish any maintenance and
          support services with respect to the App.
        </li>
        <li>
          Apple has no warranty obligation with respect to the App.
        </li>
        <li>
          Apple is not responsible for addressing any claims by you or any third
          party relating to the App, including product liability claims,
          regulatory compliance claims, or intellectual property infringement
          claims.
        </li>
        <li>
          Apple and its subsidiaries are third-party beneficiaries of these
          Terms and, upon your acceptance, Apple will have the right (and will
          be deemed to have accepted the right) to enforce these Terms against
          you as a third-party beneficiary thereof.
        </li>
      </ul>

      {/* 14. Third-Party Services */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        14. Third-Party Services
      </h2>
      <p className="mb-4">The App uses the following third-party services:</p>
      <ul className="mb-4 list-disc pl-6 space-y-2">
        <li>
          <strong>RevenueCat</strong> — for subscription processing and
          entitlement management (
          <a
            href="https://www.revenuecat.com/privacy"
            className="text-indigo-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          )
        </li>
        <li>
          <strong>Apple App Store</strong> — for payment processing and app
          distribution (
          <a
            href="https://www.apple.com/legal/privacy/"
            className="text-indigo-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          )
        </li>
      </ul>
      <p className="mb-6">
        The Developer is not responsible for the practices or content of
        third-party services.
      </p>

      {/* 15. Termination */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        15. Termination
      </h2>
      <p className="mb-6">
        Your rights under these Terms will terminate automatically without
        notice if you fail to comply with any provision. The Developer may also
        terminate your access for violations of these Terms. Upon termination,
        you must cease all use of the App. Any active subscription will continue
        until its current period ends, as governed by Apple&apos;s terms.
      </p>

      {/* 16. German Consumer Protection Notice */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        16. German Consumer Protection Notice
      </h2>
      <p className="mb-4">
        Your statutory rights as a consumer under the German Civil Code
        (Bürgerliches Gesetzbuch, BGB) are not limited by these Terms.
      </p>
      <ul className="mb-4 list-disc pl-6 space-y-2">
        <li>
          You have the right to demand rectification for defects in the App
          (§ 437 BGB).
        </li>
        <li>
          Mandatory consumer protection law takes precedence over any
          conflicting provision in these Terms.
        </li>
      </ul>
      <p className="mb-6">
        In accordance with the Verbraucherstreitbeilegungsgesetz (VSBG), we
        inform you that the Developer is not obligated and not willing to
        participate in dispute resolution proceedings before a consumer
        arbitration body. The European Commission provides an online dispute
        resolution (ODR) platform at{" "}
        <a
          href="https://ec.europa.eu/consumers/odr"
          className="text-indigo-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr
        </a>
        .
      </p>

      {/* 17. EU Digital Content Compliance */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        17. EU Digital Content Compliance
      </h2>
      <ul className="mb-6 list-disc pl-6 space-y-2">
        <li>
          The App conforms to the description provided on the App Store listing.
        </li>
        <li>
          Security updates will be provided during the subscription period as
          necessary.
        </li>
        <li>
          Material modifications to the App will be communicated to you in
          advance.
        </li>
        <li>
          You have the right to terminate your subscription if a material change
          negatively affects your use of the App.
        </li>
      </ul>

      {/* 18. Modifications to Terms */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        18. Modifications to Terms
      </h2>
      <p className="mb-4">
        We may update these Terms from time to time. Continued use of the App
        after changes constitutes acceptance of the updated Terms.
      </p>
      <p className="mb-6">
        For material changes affecting your subscription terms, we will provide
        at least 30 days&apos; notice. You have the right to cancel your
        subscription if the updated terms are unfavorable to you.
      </p>

      {/* 19. Severability */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        19. Severability
      </h2>
      <p className="mb-6">
        If any provision of these Terms is held to be invalid or unenforceable,
        the remaining provisions shall remain in full force and effect. The
        invalid provision shall be replaced with a valid provision that most
        closely reflects the original intent.
      </p>

      {/* 20. Governing Law and Jurisdiction */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        20. Governing Law and Jurisdiction
      </h2>
      <p className="mb-6">
        These Terms are governed by the laws of the Federal Republic of Germany.
        The place of jurisdiction is Hamburg, Germany. If you are a consumer
        within the European Union, you also enjoy the protection of the
        mandatory provisions of consumer protection law in your country of
        residence.
      </p>

      {/* 21. Privacy Policy */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        21. Privacy Policy
      </h2>
      <p className="mb-6">
        Your use of the App is also governed by our Privacy Policy, available
        at{" "}
        <a
          href="https://eduardbruch.com/pdfcreator/privacy"
          className="text-indigo-400 underline"
        >
          https://eduardbruch.com/pdfcreator/privacy
        </a>
        .
      </p>

      {/* 22. Contact */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        22. Contact
      </h2>
      <p className="mb-1">Eduard Bruch</p>
      <p className="mb-1">Kleinfeld 28c</p>
      <p className="mb-1">21149 Hamburg, Deutschland</p>
      <p>
        E-Mail:{" "}
        <a
          href="mailto:eduardbruch777@gmail.com"
          className="text-indigo-400 underline"
        >
          eduardbruch777@gmail.com
        </a>
      </p>
    </main>
  );
}
