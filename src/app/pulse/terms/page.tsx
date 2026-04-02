export const metadata = {
  title: "Terms of Use — Pulse - System Monitor",
  description:
    "Terms of use for the Pulse system monitor app for macOS by Eduard Bruch.",
};

export default function PulseTerms() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">
        Terms of Use / Nutzungsbedingungen
      </h1>
      <p className="mb-2 text-lg text-neutral-300">Pulse - System Monitor</p>
      <p className="mb-10 text-sm text-neutral-500">
        Last updated: March 30, 2026
      </p>

      <p className="mb-6">
        These Terms of Use (&quot;Terms&quot;) govern your use of Pulse - System
        Monitor (&quot;the App&quot;), a system monitoring application for macOS,
        developed and published by Eduard Bruch (&quot;Developer&quot;,
        &quot;we&quot;, &quot;us&quot;). By downloading, installing, or using the
        App, you agree to be bound by these Terms. If you do not agree, do not
        use the App.
      </p>

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
        <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the App;</li>
        <li>Sublicense, rent, lease, lend, or transfer the App or any rights therein to any third party;</li>
        <li>Modify, adapt, or create derivative works based on the App;</li>
        <li>Remove, alter, or obscure any proprietary notices in the App.</li>
      </ul>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        2. App Description and Intended Use
      </h2>
      <p className="mb-4">
        Pulse is a system monitoring application for macOS that displays real-time
        hardware and software metrics in your Mac&apos;s menu bar, including:
      </p>
      <ul className="mb-4 list-disc pl-6 space-y-2">
        <li><strong>CPU:</strong> Per-core usage, load averages, top processes</li>
        <li><strong>Memory:</strong> Used/free/wired/compressed breakdown, memory pressure, swap usage</li>
        <li><strong>Disk:</strong> Volume capacity, read/write speeds, S.M.A.R.T. health status</li>
        <li><strong>Network:</strong> Upload/download speeds, local and public IP</li>
        <li><strong>Battery:</strong> Charge, health, cycle count, power draw, time remaining</li>
        <li><strong>GPU:</strong> Utilization, VRAM usage</li>
        <li><strong>Temperature:</strong> Per-sensor temperature readings</li>
        <li><strong>Fans:</strong> RPM and utilization for all fans</li>
        <li><strong>Widgets:</strong> macOS desktop widgets for CPU, memory, battery, and network</li>
      </ul>
      <p className="mb-6">
        The App uses read-only macOS system APIs. It does not modify, alter, or
        interfere with your system in any way. All data processing occurs locally
        on your device.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        3. Purchase and Payment
      </h2>
      <p className="mb-6">
        The App is available as a one-time purchase through the Mac App Store.
        Payment is charged to your Apple ID account at confirmation of purchase.
        All billing is handled by Apple. We do not have access to your payment
        information.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        4. Refund Policy
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

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        5. No Analytics or Tracking
      </h2>
      <p className="mb-6">
        The App does not use any analytics, tracking, advertising, or behavioral
        monitoring frameworks. No user identifiers are collected. No cookies are
        used. No data is sold to or shared with third parties for marketing
        purposes. The only optional network request is to detect your public IP
        address via ipify.org.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        6. Intellectual Property
      </h2>
      <p className="mb-6">
        All code, designs, graphics, icons, and software contained in the App
        are the intellectual property of Eduard Bruch and are protected by
        copyright and other intellectual property laws. You may not copy, modify,
        distribute, or reverse engineer the App or any of its components.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        7. Disclaimer of Warranties
      </h2>
      <p className="mb-4">
        The App is provided &quot;as is&quot; and &quot;as available&quot;
        without warranties of any kind, either express or implied, including but
        not limited to implied warranties of merchantability, fitness for a
        particular purpose, and non-infringement. We do not warrant that the App
        will be uninterrupted, secure, or error-free.
      </p>
      <p className="mb-6">
        System metrics displayed by the App are approximations based on macOS
        system APIs and may not be perfectly accurate in all circumstances.
        This disclaimer does not affect your statutory warranty rights under
        German law (§§ 434–437 BGB).
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        8. Limitation of Liability
      </h2>
      <p className="mb-4">
        To the maximum extent permitted by applicable law, Eduard Bruch shall
        not be liable for any indirect, incidental, special, consequential, or
        punitive damages resulting from your use of or inability to use the App.
      </p>
      <p className="mb-6">
        Under German law (BGB § 276, § 280), liability for gross negligence
        (grobe Fahrlässigkeit), willful misconduct (Vorsatz), and personal
        injury cannot be excluded or limited.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        9. Apple — Third-Party Beneficiary
      </h2>
      <p className="mb-4">
        You acknowledge that these Terms are between you and the Developer only,
        and not with Apple Inc. (&quot;Apple&quot;). Apple is not responsible for
        the App or its content.
      </p>
      <ul className="mb-6 list-disc pl-6 space-y-2">
        <li>Apple has no obligation to furnish any maintenance and support services with respect to the App.</li>
        <li>Apple has no warranty obligation with respect to the App.</li>
        <li>Apple is not responsible for addressing any claims relating to the App.</li>
        <li>Apple and its subsidiaries are third-party beneficiaries of these Terms.</li>
      </ul>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        10. German Consumer Protection Notice
      </h2>
      <p className="mb-4">
        Your statutory rights as a consumer under the German Civil Code
        (Bürgerliches Gesetzbuch, BGB) are not limited by these Terms.
      </p>
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

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        11. Modifications to Terms
      </h2>
      <p className="mb-6">
        We may update these Terms from time to time. Continued use of the App
        after changes constitutes acceptance of the updated Terms.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        12. Governing Law and Jurisdiction
      </h2>
      <p className="mb-6">
        These Terms are governed by the laws of the Federal Republic of Germany.
        The place of jurisdiction is Hamburg, Germany. If you are a consumer
        within the European Union, you also enjoy the protection of the
        mandatory provisions of consumer protection law in your country of
        residence.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        13. Privacy Policy
      </h2>
      <p className="mb-6">
        Your use of the App is also governed by our Privacy Policy, available
        at{" "}
        <a
          href="https://eduardbruch.com/pulse/privacy"
          className="text-indigo-400 underline"
        >
          https://eduardbruch.com/pulse/privacy
        </a>
        .
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        14. Contact
      </h2>
      <p className="mb-1">Eduard Bruch</p>
      <p className="mb-1">Kleinfeld 28c</p>
      <p className="mb-1">21149 Hamburg, Deutschland</p>
      <p>
        E-Mail:{" "}
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
