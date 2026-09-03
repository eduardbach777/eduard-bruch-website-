export const metadata = {
  title: "Privacy Policy — Canopy",
  description:
    "Privacy policy for Canopy - Disk Space Visualizer by Eduard Bruch. No data collected, no tracking, no analytics.",
};

export default function CanopyPrivacy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">Privacy Policy</h1>
      <p className="mb-2 text-lg text-neutral-300">
        Canopy &mdash; Disk Space Visualizer
      </p>
      <p className="mb-10 text-sm text-neutral-500">
        Last updated: September 3, 2026
      </p>

      <p className="mb-6">
        This privacy policy describes how Canopy (&quot;the
        App&quot;), published by Eduard Bruch, handles your data. In short:{" "}
        <strong>
          the App does not collect, store, or transmit any personal data
        </strong>
        . There is no account, no registration, and no server-side processing.
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

      {/* 2. Data We Collect */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        2. Data We Collect
      </h2>
      <p className="mb-4 border-l-4 border-emerald-500 pl-4 font-medium text-white">
        None. Canopy collects zero personal data.
      </p>
      <p className="mb-6">
        The App is a paid, one-time-purchase macOS utility that visualizes disk
        usage as a treemap and helps you find duplicate files. It does not
        require an account, does not use analytics or tracking frameworks, does
        not contain advertising, and does not transmit any data to external
        servers. All scan results and preferences are stored exclusively on your
        device and are never sent anywhere.
      </p>

      {/* 3. File System Scanning */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        3. File System Scanning
      </h2>
      <p className="mb-6">
        The App scans folders on your Mac to build a visual treemap of disk
        usage and identify duplicate files. All scanning and analysis is
        performed entirely on your device. File names, sizes, and paths are
        processed locally and are never transmitted to any server.
      </p>

      {/* 4. Local Storage */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        4. Locally Stored Data
      </h2>
      <p className="mb-4">
        The following data may be stored on your device only:
      </p>
      <ul className="mb-6 list-disc pl-6 space-y-2">
        <li>Scan results and cached folder data</li>
        <li>Duplicate file detection results</li>
        <li>App display preferences and window state</li>
      </ul>
      <p className="mb-6">
        This data exists solely on your device. You can delete it at any time by
        clearing the app&apos;s data in your device settings or by uninstalling
        the App.
      </p>

      {/* 5. Third-Party Services */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        5. Third-Party Services
      </h2>
      <p className="mb-6">
        Canopy does not integrate any third-party services. There are no
        analytics providers, no advertising networks, no crash reporting tools,
        and no subscription management services. The App is a one-time purchase
        with no in-app purchases or subscriptions.
      </p>

      {/* 6. Permissions */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        6. Device Permissions
      </h2>
      <p className="mb-6">
        Canopy may request Full Disk Access permission to scan all folders on
        your Mac, including system and protected directories. This permission is
        used solely to read file metadata (names, sizes, dates) for building
        the treemap visualization. No file contents are read, and no data is
        transmitted externally. You can revoke this permission at any time in
        System Settings &gt; Privacy &amp; Security &gt; Full Disk Access.
      </p>

      {/* 7. Apple Diagnostics */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        7. Apple Diagnostics
      </h2>
      <p className="mb-6">
        If you have opted in to sharing diagnostics with Apple, Apple may
        collect anonymized crash logs and usage statistics. This data is
        collected by Apple, not by Eduard Bruch, and is subject to
        Apple&apos;s privacy policy. You can opt out of Apple diagnostics in
        System Settings &gt; Privacy &amp; Security &gt; Analytics &amp;
        Improvements.
      </p>

      {/* 8. Data Sharing */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        8. Data Sharing
      </h2>
      <p className="mb-6">
        We do not sell, rent, share, or disclose any personal data to third
        parties, because we do not collect any personal data in the first place.
      </p>

      {/* 9. Children */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        9. Children&apos;s Privacy
      </h2>
      <p className="mb-6">
        The App does not collect personal information from anyone, including
        children. It is safe for use by all ages. We comply with COPPA (Children&apos;s
        Online Privacy Protection Act) and GDPR provisions regarding minors.
      </p>

      {/* 10. GDPR */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        10. Your Rights Under GDPR
      </h2>
      <p className="mb-4">
        Under the General Data Protection Regulation (EU) 2016/679, you have the
        right to:
      </p>
      <ul className="mb-6 list-disc pl-6 space-y-2">
        <li>
          <strong>Access</strong> (Art. 15) &mdash; request information about
          your data
        </li>
        <li>
          <strong>Erasure</strong> (Art. 17) &mdash; delete data by clearing app
          data or uninstalling
        </li>
        <li>
          <strong>Data Portability</strong> (Art. 20) &mdash; receive your data
          in a portable format
        </li>
        <li>
          <strong>Object</strong> (Art. 21) &mdash; object to processing
        </li>
        <li>
          <strong>Withdraw Consent</strong> (Art. 7(3)) &mdash; withdraw at any
          time
        </li>
      </ul>
      <p className="mb-6">
        Since the App does not collect or process any personal data, these rights
        are inherently fulfilled. Should you have any questions, please contact
        us.
      </p>

      {/* 11. CCPA */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        11. California Residents (CCPA)
      </h2>
      <p className="mb-6">
        We do not collect, sell, or share personal information as defined by the
        California Consumer Privacy Act. Since no personal data is collected,
        there is no data to disclose, delete, or opt out of.
      </p>

      {/* 12. Complaint */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        12. Right to Lodge a Complaint
      </h2>
      <p className="mb-1">
        Der Hamburgische Beauftragte f&uuml;r Datenschutz und
        Informationsfreiheit
      </p>
      <p className="mb-1">Ludwig-Erhard-Str. 22, 7. OG, 20459 Hamburg</p>
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

      {/* 13. Changes */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        13. Changes to This Policy
      </h2>
      <p className="mb-6">
        We may update this privacy policy from time to time. Changes will be
        reflected on this page with an updated date. Continued use of the App
        after changes constitutes acceptance of the revised policy.
      </p>

      {/* 14. Contact */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        14. Contact
      </h2>
      <p>
        For questions about this privacy policy, contact:{" "}
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
