export const metadata = {
  title: "Privacy Policy — Pulse - System Monitor",
};

export default function PulsePrivacyPolicy() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-neutral-200">
      <h1 className="mb-8 text-3xl font-bold text-white">
        Privacy Policy / Datenschutzerklärung
      </h1>
      <p className="mb-2 text-lg text-neutral-300">Pulse - System Monitor</p>
      <p className="mb-4 text-sm text-neutral-400">Last updated: March 30, 2026</p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        1. Data Controller (Verantwortlicher)
      </h2>
      <p className="mb-1">Eduard Bruch</p>
      <p className="mb-1">Kleinfeld 28c</p>
      <p className="mb-1">21149 Hamburg, Deutschland</p>
      <p className="mb-6">
        E-Mail:{" "}
        <a href="mailto:support@eduardbruch.com" className="text-indigo-400 underline">
          support@eduardbruch.com
        </a>
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        2. Overview
      </h2>
      <p className="mb-6">
        Pulse - System Monitor (&quot;the App&quot;) is a macOS system monitoring
        application that displays real-time CPU, memory, disk, network, battery, GPU,
        temperature, and fan statistics in your Mac&apos;s menu bar. The App is designed
        with privacy as a core principle. We take the protection of your personal data
        seriously. This privacy policy explains what data is processed when you use the
        App and on what legal basis.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        3. Data Collection and Processing
      </h2>

      <h3 className="mb-2 mt-4 font-medium text-white">3.1 Local Data Only</h3>
      <p className="mb-4">
        All system metrics (CPU usage, memory usage, disk activity, network speeds,
        battery status, GPU utilization, temperatures, fan speeds, and process information)
        are read from your Mac&apos;s operating system using standard, read-only macOS APIs.
        This data is processed and displayed <strong>entirely locally on your device</strong>.
        No system metrics are transmitted to any external server. The legal basis is
        Art. 6(1)(b) DSGVO (performance of a contract / provision of the service).
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">3.2 Public IP Detection (Optional)</h3>
      <p className="mb-4">
        The App includes an optional feature that detects your public IP address by making
        a request to <code className="text-indigo-300">api.ipify.org</code>. This is the
        only network request the App makes. The request is a simple HTTP GET that returns
        your public IP address — no personal data, cookies, or identifiers are sent. The
        result is cached locally for 5 minutes and is never stored permanently or transmitted
        elsewhere. The legal basis is Art. 6(1)(a) DSGVO (your consent, as the feature is
        opt-in).
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">3.3 History and Export</h3>
      <p className="mb-4">
        The App stores usage history (CPU, memory, network charts) locally on your Mac
        in <code className="text-indigo-300">~/Library/Application Support/Pulse/</code>.
        You can export this data as CSV files. All storage and export is local — no data
        leaves your device unless you manually share the exported files.
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">3.4 macOS Widgets</h3>
      <p className="mb-4">
        The App provides desktop widgets via Apple&apos;s WidgetKit framework. Widget data
        is shared between the main app and the widget extension through an App Group
        container on your device. No data is transmitted externally.
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">3.5 Analytics and Tracking</h3>
      <p className="mb-6">
        The App does <strong>not</strong> use any analytics, tracking, advertising, or
        telemetry frameworks. No usage data is collected or transmitted. No crash reports
        are sent (other than what Apple collects through its standard crash reporting, which
        you control in macOS Settings).
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        4. Data Sharing with Third Parties
      </h2>
      <p className="mb-4">
        Your data is not sold or shared with third parties for any purpose. The only
        external service contacted is:
      </p>
      <ul className="mb-6 list-disc pl-6 space-y-2">
        <li>
          <strong>ipify.org</strong> — for optional public IP detection only. No personal
          data is sent. See{" "}
          <a
            href="https://www.ipify.org"
            className="text-indigo-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            ipify.org
          </a>{" "}
          for details.
        </li>
        <li>
          <strong>Apple (App Store)</strong> — for payment processing. We do not have access
          to your payment information.
        </li>
      </ul>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        5. Data Retention
      </h2>
      <p className="mb-6">
        System metrics are displayed in real-time and stored locally for charting purposes
        only. History data is automatically discarded if older than 2 hours. CSV exports
        remain on your device until you delete them. We do not store any personal data on
        our own servers.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        6. Your Rights (Ihre Rechte)
      </h2>
      <p className="mb-4">
        Under the DSGVO/GDPR, you have the following rights regarding your personal data:
      </p>
      <ul className="mb-6 list-disc pl-6 space-y-2">
        <li><strong>Right of access</strong> (Art. 15 DSGVO) — request information about your stored data</li>
        <li><strong>Right to rectification</strong> (Art. 16 DSGVO) — request correction of inaccurate data</li>
        <li><strong>Right to erasure</strong> (Art. 17 DSGVO) — request deletion of your data</li>
        <li><strong>Right to restriction</strong> (Art. 18 DSGVO) — request restricted processing</li>
        <li><strong>Right to data portability</strong> (Art. 20 DSGVO) — receive your data in a portable format</li>
        <li><strong>Right to object</strong> (Art. 21 DSGVO) — object to data processing</li>
        <li><strong>Right to withdraw consent</strong> (Art. 7(3) DSGVO) — withdraw consent at any time</li>
      </ul>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        7. Right to Lodge a Complaint
      </h2>
      <p className="mb-6">
        You have the right to lodge a complaint with a supervisory authority. The responsible
        authority for Hamburg is:
      </p>
      <p className="mb-1">Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit</p>
      <p className="mb-1">Ludwig-Erhard-Str. 22, 7. OG</p>
      <p className="mb-1">20459 Hamburg</p>
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

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        8. Children&apos;s Privacy
      </h2>
      <p className="mb-6">
        The App is not directed at children under the age of 16 and does not knowingly
        collect personal information from children.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        9. Changes to This Policy
      </h2>
      <p className="mb-6">
        We may update this privacy policy from time to time. Any changes will be reflected
        on this page with an updated date.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        10. Contact
      </h2>
      <p>
        For any questions about this privacy policy or your data, contact:{" "}
        <a href="mailto:support@eduardbruch.com" className="text-indigo-400 underline">
          support@eduardbruch.com
        </a>
      </p>
    </main>
  );
}
