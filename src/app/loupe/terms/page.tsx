export const metadata = {
  title: "Terms of Service — Loupe",
  description:
    "Terms of service for Loupe, the free Quick Look extension for macOS. No purchase, no subscription, no account.",
};

export default function LoupeTerms() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">Terms of Service</h1>
      <p className="mb-2 text-lg text-neutral-300">Loupe — Quick Look Preview</p>
      <p className="mb-10 text-sm text-neutral-500">Last updated: September 2, 2026</p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">1. Agreement</h2>
      <p className="mb-6">
        These terms govern your use of Loupe (&quot;the App&quot;), a free macOS
        QuickLook extension published by Eduard Bruch (&quot;the Developer&quot;)
        and distributed <strong>exclusively through the Mac App Store</strong>.
        There is no direct download and no licence key. By downloading or using
        the App you accept these terms, and Apple&apos;s{" "}
        <a
          href="https://www.apple.com/legal/internet-services/itunes/"
          className="text-indigo-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Licensed Application End User License Agreement
        </a>{" "}
        also applies. Where these terms and Apple&apos;s conflict, Apple&apos;s
        prevail for App Store downloads.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">2. Licence</h2>
      <p className="mb-6">
        You are granted a non-exclusive, non-transferable, revocable licence to
        install and use the App on Apple-branded devices you own or control, for
        personal or commercial purposes. The App is licensed, not sold. The
        Developer retains all rights not expressly granted.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        3. Acceptable Use
      </h2>
      <p className="mb-4">You agree not to:</p>
      <ul className="mb-6 list-disc space-y-1 pl-6">
        <li>
          redistribute, sell, rent, sublicense or lease the App or any part of
          it;
        </li>
        <li>
          circumvent any licensing or copy-protection mechanism;
        </li>
        <li>
          decompile, disassemble or reverse engineer the App, except to the
          extent such restriction is prohibited by applicable law — in
          particular your rights under §§ 69d and 69e UrhG and Art. 6 of
          Directive 2009/24/EC remain unaffected.
        </li>
      </ul>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        4. Your Files
      </h2>
      <p className="mb-6">
        Loupe only reads files for the purpose of rendering a Quick Look
        preview. It <strong>never writes, modifies, extracts, or deletes</strong>{" "}
        any file on your system. The QuickLook extension only sees the single
        file or folder that macOS hands it — it has no broader file system
        access.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">5. Privacy</h2>
      <p className="mb-6">
        The App has no network access and collects no data. See the{" "}
        <a href="/loupe/privacy" className="text-indigo-400 underline">
          Privacy Policy
        </a>{" "}
        for detail.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        6. Warranty
      </h2>
      <p className="mb-6">
        The App is provided &quot;as is&quot;. To the maximum extent permitted by
        applicable law, the Developer disclaims all implied warranties including
        merchantability, fitness for a particular purpose and non-infringement.{" "}
        <strong>
          Your statutory warranty rights as a consumer (Gewährleistung, §§ 434 ff.
          BGB) are not affected by this clause.
        </strong>{" "}
        Preview rendering depends on file format and contents; the Developer does
        not warrant that every file will produce a complete or pixel-perfect
        preview.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        7. Limitation of Liability
      </h2>
      <p className="mb-6">
        To the extent permitted by law, the Developer is not liable for indirect,
        incidental or consequential damages arising from use of the App.{" "}
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
        8. Updates and Availability
      </h2>
      <p className="mb-6">
        The Developer may release updates that change, add or remove features.
        The Developer may discontinue the App at any time; a downloaded copy
        remains usable for versions already installed, subject to continued
        compatibility with macOS, which the Developer does not control.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        9. Third-Party Components
      </h2>
      <p className="mb-6">
        The App does not include third-party open-source components.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        10. Governing Law
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
        11. Online Dispute Resolution
      </h2>
      <p className="mb-6">
        The Developer is neither obliged nor willing to participate in dispute
        resolution proceedings before a consumer arbitration board
        (Verbraucherschlichtungsstelle).
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        12. Severability and Changes
      </h2>
      <p className="mb-6">
        If any provision is found unenforceable, the remainder stays in effect.
        These terms may be updated; the &quot;last updated&quot; date above
        reflects the current version. Continued use after a change constitutes
        acceptance.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">13. Contact</h2>
      <p className="mb-1">Eduard Bruch</p>
      <p className="mb-1">Kleinfeld 28c, 21149 Hamburg, Deutschland</p>
      <p className="mb-6">
        E-Mail:{" "}
        <a href="mailto:support@eduardbruch.com" className="text-indigo-400 underline">
          support@eduardbruch.com
        </a>
      </p>

      <p className="mt-12 text-sm text-neutral-500">
        <a href="/loupe/privacy" className="underline">
          Privacy Policy
        </a>{" "}
        ·{" "}
        <a href="/loupe/support" className="underline">
          Support
        </a>
      </p>
    </main>
  );
}
