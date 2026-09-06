export const metadata = {
  title: "Terms of Use — Tome - SQLite Browser",
  description:
    "Terms of use for Tome - SQLite Browser for macOS by Eduard Bruch.",
};

export default function TomeTerms() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">
        Terms of Use / Nutzungsbedingungen
      </h1>
      <p className="mb-2 text-lg text-neutral-300">Tome — SQLite Browser</p>
      <p className="mb-10 text-sm text-neutral-500">
        Last updated: August 30, 2026
      </p>

      <p className="mb-6">
        These Terms of Use (&quot;Terms&quot;) govern your use of Tome
        (&quot;the App&quot;), a native macOS SQLite database browser, developed
        and published by Eduard Bruch (&quot;Developer&quot;, &quot;we&quot;,
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
        Tome is a native macOS SQLite database browser that allows you to open,
        browse, edit, and query SQLite database files. Key features include:
      </p>
      <ul className="mb-4 list-disc pl-6 space-y-2">
        <li><strong>Database Browsing:</strong> Open and explore SQLite databases, tables, views, and indexes</li>
        <li><strong>Data Editing:</strong> Edit cell values, insert rows, and delete records</li>
        <li><strong>SQL Query Editor:</strong> Write and execute SQL queries with syntax highlighting</li>
        <li><strong>Schema Viewer:</strong> Inspect table schemas, columns, and relationships</li>
        <li><strong>Export:</strong> Export data to CSV and JSON formats</li>
      </ul>
      <p className="mb-6">
        The App operates entirely locally on your Mac. All database operations
        are performed using the bundled SQLite C library. No data is transmitted
        to any external server.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        3. Purchase and Payment
      </h2>
      <p className="mb-6">
        Tome is available through the Mac App Store. Payment is processed by
        Apple. All purchases are subject to Apple&apos;s standard App Store
        terms and refund policies. We do not process payments directly. To
        request a refund, visit{" "}
        <a
          href="https://reportaproblem.apple.com"
          className="text-indigo-400 underline"
        >
          reportaproblem.apple.com
        </a>
        .
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        4. Your Data and Databases
      </h2>
      <p className="mb-4">
        Tome is a local-only tool. Your database files remain on your Mac at all
        times. We have no access to your files, queries, or any data you work
        with in the App.
      </p>
      <p className="mb-6">
        <strong>Important:</strong> While Tome is designed to handle databases
        safely, you should always keep backups of important data. We are not
        responsible for data loss caused by bugs, user error, or database
        corruption. See our{" "}
        <a
          href="/tome/privacy"
          className="text-indigo-400 underline"
        >
          Privacy Policy
        </a>{" "}
        for full details.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        5. Disclaimer of Warranties
      </h2>
      <p className="mb-6">
        The App is provided &quot;as is&quot; and &quot;as available&quot;
        without warranties of any kind, whether express or implied, including
        but not limited to implied warranties of merchantability, fitness for a
        particular purpose, and non-infringement. We do not warrant that the App
        will be uninterrupted, error-free, or compatible with all database files
        or macOS configurations.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        6. Limitation of Liability
      </h2>
      <p className="mb-6">
        To the maximum extent permitted by applicable law, in no event shall the
        Developer be liable for any indirect, incidental, special, consequential,
        or punitive damages, or any loss of profits or revenues, whether incurred
        directly or indirectly, or any loss of data, use, goodwill, or other
        intangible losses, resulting from (a) your use of or inability to use
        the App; (b) any data loss or corruption; (c) any errors in SQL query
        execution.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        7. Updates
      </h2>
      <p className="mb-6">
        We may release updates to the App from time to time through the Mac App
        Store. Updates may include bug fixes, new features, or compatibility
        improvements. We are not obligated to provide updates or continued
        support for any specific version.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        8. Termination
      </h2>
      <p className="mb-6">
        You may stop using the App at any time by uninstalling it. We reserve
        the right to terminate or suspend your access to the App if you violate
        these Terms. Upon termination, all rights granted to you under these
        Terms will immediately cease.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        9. Governing Law
      </h2>
      <p className="mb-6">
        These Terms shall be governed by and construed in accordance with the
        laws of the Federal Republic of Germany, without regard to its conflict
        of law provisions. The exclusive place of jurisdiction is Hamburg,
        Germany, to the extent permitted by law.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        10. Changes to These Terms
      </h2>
      <p className="mb-6">
        We may update these Terms from time to time. The latest version will
        always be available at{" "}
        <a
          href="https://eduardbruch.com/tome/terms"
          className="text-indigo-400 underline"
        >
          eduardbruch.com/tome/terms
        </a>
        . Continued use of the App after changes constitutes acceptance of the
        new Terms.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        11. Contact
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
