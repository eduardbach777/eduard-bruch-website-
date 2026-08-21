export const metadata = {
  title: "Terms of Service — Mediasmith",
  description:
    "Terms of service for Mediasmith, the media converter for macOS. One-time purchase, no subscription, no account.",
};

export default function MediasmithTerms() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">Terms of Service</h1>
      <p className="mb-2 text-lg text-neutral-300">Mediasmith — Convert Video, Images & Audio</p>
      <p className="mb-10 text-sm text-neutral-500">Last updated: August 21, 2026</p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">1. Agreement</h2>
      <p className="mb-6">
        These terms govern your use of Mediasmith (&quot;the App&quot;), a macOS
        application published by Eduard Bruch (&quot;the Developer&quot;). By
        downloading or using the App you accept them. If the App was obtained
        through the Mac App Store, Apple&apos;s{" "}
        <a
          href="https://www.apple.com/legal/internet-services/itunes/"
          className="text-indigo-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Licensed Application End User License Agreement
        </a>{" "}
        also applies. Where these terms and Apple&apos;s conflict, Apple&apos;s
        prevail for App Store purchases.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">2. Licence</h2>
      <p className="mb-6">
        You are granted a non-exclusive, non-transferable, revocable licence to
        install and use the App on Apple-branded devices you own or control, for
        personal or commercial purposes. The App is licensed, not sold. The
        Developer retains all rights not expressly granted.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        3. Free Version and Purchase
      </h2>
      <p className="mb-4">
        The App is free to download and use. Every feature — resizing, cropping,
        rotation, watermarking, colour adjustment, metadata removal and renaming
        — works without payment. The free version processes a limited number of
        files per batch; the current limit is stated inside the App and on its
        store listing.
      </p>
      <p className="mb-6">
        A single optional <strong>one-time in-app purchase</strong> removes that
        limit permanently. It is not a subscription, it does not renew, and it
        does not expire. It includes future updates to the App at no additional
        cost. Purchases are processed by Apple; the Developer receives no payment
        information.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        4. Right of Withdrawal (Widerrufsrecht)
      </h2>
      <p className="mb-6">
        For purchases made through the Mac App Store, Apple is the merchant of
        record and its refund process applies. Consumers in the European Union
        have a statutory right of withdrawal for digital content; where the App
        Store requires you to consent to immediate delivery, that right may lapse
        on delivery in accordance with § 356 Abs. 5 BGB. Refund requests should
        be directed to Apple via{" "}
        <a
          href="https://reportaproblem.apple.com"
          className="text-indigo-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          reportaproblem.apple.com
        </a>
        .
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        5. Acceptable Use
      </h2>
      <p className="mb-4">You agree not to:</p>
      <ul className="mb-6 list-disc space-y-1 pl-6">
        <li>
          redistribute, sell, rent, sublicense or lease the App or any part of
          it;
        </li>
        <li>
          circumvent the free-version limit or any licensing mechanism;
        </li>
        <li>
          decompile, disassemble or reverse engineer the App, except to the
          extent such restriction is prohibited by applicable law — in
          particular your rights under §§ 69d and 69e UrhG and Art. 6 of
          Directive 2009/24/EC remain unaffected;
        </li>
        <li>
          use the App to process files you have no right to process, or to
          remove metadata, watermarks or attribution in order to misrepresent
          authorship or ownership.
        </li>
      </ul>
      <p className="mb-6">
        The App is a tool. You are solely responsible for the images you process
        with it and for complying with copyright and any other rights attaching
        to them.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        6. Your Files and Backups
      </h2>
      <p className="mb-6">
        The App writes new files and does not modify or delete your originals. It
        will not overwrite a source file of a running batch, and by default it
        gives a colliding output file a numbered name rather than replacing
        anything. The App also offers a setting that permits replacing existing
        files; enabling it is your decision.{" "}
        <strong>
          You remain responsible for maintaining backups of your images.
        </strong>{" "}
        Batch processing operates on many files at once and the Developer
        strongly recommends a backup before any large run.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">7. Privacy</h2>
      <p className="mb-6">
        The App has no network access and collects no data. See the{" "}
        <a href="/mediasmith/privacy" className="text-indigo-400 underline">
          Privacy Policy
        </a>{" "}
        for detail.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        8. Warranty
      </h2>
      <p className="mb-6">
        The App is provided &quot;as is&quot;. To the maximum extent permitted by
        applicable law, the Developer disclaims all implied warranties including
        merchantability, fitness for a particular purpose and non-infringement.{" "}
        <strong>
          Your statutory warranty rights as a consumer (Gewährleistung, §§ 434 ff.
          BGB) are not affected by this clause.
        </strong>{" "}
        Image processing is inherently lossy for some formats; the Developer does
        not warrant that output will be visually identical to input.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        9. Limitation of Liability
      </h2>
      <p className="mb-6">
        To the extent permitted by law, the Developer is not liable for indirect,
        incidental or consequential damages, including loss of data or lost
        profits, arising from use of the App.{" "}
        <strong>
          This limitation does not apply to damages arising from intent or gross
          negligence, from injury to life, body or health, from the breach of
          material contractual obligations (Kardinalpflichten), or under the
          German Product Liability Act (Produkthaftungsgesetz).
        </strong>{" "}
        Where liability for slight negligence in respect of a material
        contractual obligation exists, it is limited to damage typical for this
        type of contract and reasonably foreseeable at the time of conclusion.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        10. Updates and Availability
      </h2>
      <p className="mb-6">
        The Developer may release updates that change, add or remove features.
        The Developer may discontinue the App at any time; a purchased licence
        remains valid for versions already installed, subject to continued
        compatibility with macOS, which the Developer does not control.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        11. Third-Party Components
      </h2>
      <p className="mb-6">
        The App includes open-source components licensed under the MIT licence.
        Their copyright notices are reproduced within the App and their terms
        continue to apply to those components.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        12. Governing Law
      </h2>
      <p className="mb-6">
        These terms are governed by the law of the Federal Republic of Germany,
        excluding the UN Convention on Contracts for the International Sale of
        Goods.{" "}
        <strong>
          If you are a consumer, this choice of law does not deprive you of the
          protection of mandatory provisions of the law of your country of
          habitual residence.
        </strong>{" "}
        Where permitted, the place of jurisdiction is Hamburg, Germany.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        13. Online Dispute Resolution
      </h2>
      <p className="mb-6">
        The Developer is neither obliged nor willing to participate in dispute
        resolution proceedings before a consumer arbitration board
        (Verbraucherschlichtungsstelle).
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        14. Severability and Changes
      </h2>
      <p className="mb-6">
        If any provision is found unenforceable, the remainder stays in effect.
        These terms may be updated; the &quot;last updated&quot; date above
        reflects the current version. Continued use after a change constitutes
        acceptance.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">15. Contact</h2>
      <p className="mb-1">Eduard Bruch</p>
      <p className="mb-1">Kleinfeld 28c, 21149 Hamburg, Deutschland</p>
      <p className="mb-6">
        E-Mail:{" "}
        <a href="mailto:support@eduardbruch.com" className="text-indigo-400 underline">
          support@eduardbruch.com
        </a>
      </p>

      <p className="mt-12 text-sm text-neutral-500">
        <a href="/mediasmith/privacy" className="underline">
          Privacy Policy
        </a>{" "}
        ·{" "}
        <a href="/mediasmith/support" className="underline">
          Support
        </a>
      </p>
    </main>
  );
}
