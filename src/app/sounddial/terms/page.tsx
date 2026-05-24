export const metadata = {
  title: "Terms of Use — SoundDial",
  description:
    "Terms of use for the SoundDial per-app volume mixer for macOS by Eduard Bruch.",
};

export default function SoundDialTerms() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">
        Terms of Use / Nutzungsbedingungen
      </h1>
      <p className="mb-2 text-lg text-neutral-300">SoundDial</p>
      <p className="mb-10 text-sm text-neutral-500">
        Last updated: May 24, 2026
      </p>

      <p className="mb-6">
        These Terms of Use (&quot;Terms&quot;) govern your use of SoundDial
        (&quot;the App&quot;), a per-app volume mixer for macOS, developed and
        published by Eduard Bruch (&quot;Developer&quot;, &quot;we&quot;,
        &quot;us&quot;). By downloading, installing, or using the App, you agree
        to be bound by these Terms. If you do not agree, do not use the App.
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
        SoundDial is a per-app volume mixer for macOS that allows you to control
        the volume of individual applications independently. Key features include:
      </p>
      <ul className="mb-4 list-disc pl-6 space-y-2">
        <li><strong>Per-App Volume:</strong> Individual volume sliders for each running application (0% to 200%)</li>
        <li><strong>Auto-Ducking:</strong> Automatically lowers non-call app volumes when communication apps (Zoom, Teams, FaceTime, Discord, Slack) are active</li>
        <li><strong>Volume Profiles:</strong> Save and restore named volume configurations</li>
        <li><strong>Master Volume:</strong> System-wide volume control and output device selection</li>
        <li><strong>Menu Bar Interface:</strong> Accessible from your Mac&apos;s menu bar</li>
      </ul>
      <p className="mb-6">
        The App uses Apple&apos;s Core Audio Tap API to intercept and adjust
        per-app audio output in real-time. The App requires the &quot;Screen &amp;
        System Audio Recording&quot; permission to function.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        3. Purchase and Payment
      </h2>
      <p className="mb-6">
        SoundDial is available as a one-time purchase through the Mac App Store.
        Payment is processed by Apple. All purchases are subject to Apple&apos;s
        standard App Store terms and refund policies. We do not process payments
        directly.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        4. System Requirements
      </h2>
      <p className="mb-6">
        SoundDial requires macOS 14.2 (Sonoma) or later. The App uses the Core
        Audio Tap API introduced in macOS 14.2. The App may not function
        correctly on unsupported macOS versions.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        5. Audio Permission and Behavior
      </h2>
      <p className="mb-4">
        To control per-app volume, SoundDial intercepts audio output using
        Apple&apos;s Core Audio Tap API. This requires the &quot;Screen &amp;
        System Audio Recording&quot; permission. When active, macOS displays a
        purple indicator dot in the menu bar — this is standard macOS behavior
        for any app using this API.
      </p>
      <p className="mb-6">
        The App does not record, store, or transmit any audio data. The audio
        tap is used solely for real-time volume adjustment.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        6. Privacy
      </h2>
      <p className="mb-6">
        Your privacy is important to us. SoundDial collects no personal data,
        makes no network requests, and includes no analytics or tracking. For
        full details, see our{" "}
        <a
          href="/sounddial/privacy"
          className="text-indigo-400 underline"
        >
          Privacy Policy
        </a>
        .
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        7. Disclaimer of Warranties
      </h2>
      <p className="mb-6">
        The App is provided &quot;as is&quot; and &quot;as available&quot;
        without warranties of any kind, whether express or implied, including
        but not limited to implied warranties of merchantability, fitness for a
        particular purpose, and non-infringement. We do not warrant that the App
        will be uninterrupted, error-free, or compatible with all hardware
        configurations, audio devices, or third-party applications.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        8. Limitation of Liability
      </h2>
      <p className="mb-6">
        To the maximum extent permitted by applicable law, in no event shall the
        Developer be liable for any indirect, incidental, special, consequential,
        or punitive damages, or any loss of profits or revenues, whether incurred
        directly or indirectly, or any loss of data, use, goodwill, or other
        intangible losses, resulting from (a) your use of or inability to use
        the App; (b) any audio interruption, distortion, or loss caused by the
        App; (c) any unauthorized access to or alteration of your system audio.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        9. Third-Party Software
      </h2>
      <p className="mb-6">
        SoundDial interacts with audio output from third-party applications
        installed on your Mac. We are not responsible for the behavior,
        compatibility, or audio output of third-party applications. Some
        applications (e.g., FaceTime, certain VoIP clients) may restrict audio
        interception due to Apple privacy policies.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        10. Updates
      </h2>
      <p className="mb-6">
        We may release updates to the App from time to time through the Mac App
        Store. Updates may include bug fixes, new features, or compatibility
        improvements. We are not obligated to provide updates or continued
        support for any specific version.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        11. Termination
      </h2>
      <p className="mb-6">
        You may stop using the App at any time by uninstalling it. We reserve
        the right to terminate or suspend your access to the App if you violate
        these Terms. Upon termination, all rights granted to you under these
        Terms will immediately cease.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        12. Governing Law
      </h2>
      <p className="mb-6">
        These Terms shall be governed by and construed in accordance with the
        laws of the Federal Republic of Germany, without regard to its conflict
        of law provisions. The exclusive place of jurisdiction is Hamburg,
        Germany, to the extent permitted by law.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        13. Changes to These Terms
      </h2>
      <p className="mb-6">
        We may update these Terms from time to time. The latest version will
        always be available at{" "}
        <a
          href="https://eduardbruch.com/sounddial/terms"
          className="text-indigo-400 underline"
        >
          eduardbruch.com/sounddial/terms
        </a>
        . Continued use of the App after changes constitutes acceptance of the
        new Terms.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        14. Contact
      </h2>
      <p className="mb-2">
        If you have questions about these Terms, contact us at:
      </p>
      <p className="mb-1">Eduard Bruch</p>
      <p className="mb-1">Kleinfeld 28c, 21149 Hamburg, Deutschland</p>
      <p className="mb-6">
        <a href="mailto:support@eduardbruch.com" className="text-indigo-400 underline">
          support@eduardbruch.com
        </a>
      </p>
    </main>
  );
}
