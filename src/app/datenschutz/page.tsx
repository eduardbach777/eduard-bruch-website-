export const metadata = {
  title: "Datenschutzerklärung — eduardbruch.com",
  description:
    "Datenschutzerklärung (Privacy Policy) for the website eduardbruch.com by Eduard Bruch.",
};

export default function Datenschutz() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">
        Datenschutzerklärung
      </h1>
      <p className="mb-2 text-lg text-neutral-300">
        Website: eduardbruch.com
      </p>
      <p className="mb-10 text-sm text-neutral-500">
        Stand: 18. Februar 2026
      </p>

      {/* 1. Verantwortlicher */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        1. Verantwortlicher
      </h2>
      <p className="mb-1">Eduard Bruch</p>
      <p className="mb-1">Kleinfeld 28c, 21149 Hamburg, Deutschland</p>
      <p className="mb-6">
        E-Mail:{" "}
        <a
          href="mailto:support@eduardbruch.com"
          className="text-indigo-400 underline"
        >
          support@eduardbruch.com
        </a>
      </p>

      {/* 2. Hosting */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        2. Hosting
      </h2>
      <p className="mb-6">
        Diese Website wird bei <strong>Vercel Inc.</strong> (340 S Lemon Ave
        #4133, Walnut, CA 91789, USA) gehostet. Beim Aufruf der Website werden
        automatisch technische Daten (IP-Adresse, Browsertyp, Zeitpunkt des
        Zugriffs) an die Server von Vercel übermittelt. Dies ist für die
        Auslieferung der Website technisch erforderlich. Rechtsgrundlage:{" "}
        <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> (berechtigtes Interesse an
        der Bereitstellung der Website). Vercel ist unter dem{" "}
        <strong>EU-U.S. Data Privacy Framework</strong> zertifiziert. Weitere
        Informationen:{" "}
        <a
          href="https://vercel.com/legal/privacy-policy"
          className="text-indigo-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vercel Privacy Policy
        </a>
        .
      </p>

      {/* 3. Web Analytics */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        3. Vercel Web Analytics
      </h2>
      <p className="mb-4">
        Wir verwenden <strong>Vercel Web Analytics</strong>, einen
        datenschutzfreundlichen Analysedienst von Vercel Inc. Dieser Dienst
        erfasst anonymisierte Nutzungsdaten, um die Leistung und Nutzung der
        Website zu analysieren.
      </p>
      <h3 className="mb-2 font-medium text-white">Erfasste Daten</h3>
      <ul className="mb-4 list-disc pl-6 space-y-1">
        <li>Seitenaufrufe (Page Views)</li>
        <li>Verweisquelle (Referrer)</li>
        <li>Land / Region (basierend auf IP-Geolokalisierung)</li>
        <li>Gerätetyp, Betriebssystem und Browser</li>
      </ul>
      <h3 className="mb-2 font-medium text-white">Datenschutzmaßnahmen</h3>
      <ul className="mb-4 list-disc pl-6 space-y-1">
        <li>
          <strong>Keine Cookies:</strong> Vercel Web Analytics verwendet keine
          Cookies und setzt keine Tracker.
        </li>
        <li>
          <strong>Keine personenbezogene Zuordnung:</strong> Es werden keine
          IP-Adressen gespeichert und keine Nutzerprofile erstellt.
        </li>
        <li>
          <strong>DSGVO-konform:</strong> Da keine personenbezogenen Daten
          verarbeitet werden, ist kein Cookie-Banner erforderlich.
        </li>
      </ul>
      <p className="mb-6">
        Rechtsgrundlage:{" "}
        <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> (berechtigtes Interesse an
        der Analyse der Websitenutzung). Weitere Informationen:{" "}
        <a
          href="https://vercel.com/docs/analytics/privacy-policy"
          className="text-indigo-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vercel Analytics Privacy Policy
        </a>
        .
      </p>

      {/* 4. Keine weiteren Dienste */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        4. Keine weiteren Dienste
      </h2>
      <p className="mb-6">
        Diese Website verwendet <strong>keine</strong> Werbe-Tracker, keine
        Social-Media-Plugins, keine Schriftarten von externen CDNs (Google
        Fonts werden lokal geladen) und keine sonstigen Drittanbieter-Dienste,
        die personenbezogene Daten verarbeiten.
      </p>

      {/* 5. Keine Kontaktformulare */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        5. Kontaktaufnahme
      </h2>
      <p className="mb-6">
        Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben zur
        Bearbeitung der Anfrage gespeichert. Rechtsgrundlage:{" "}
        <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>.
      </p>

      {/* 6. Ihre Rechte */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        6. Ihre Rechte (DSGVO)
      </h2>
      <ul className="mb-6 list-disc pl-6 space-y-2">
        <li>
          <strong>Auskunft</strong> (Art. 15) — Welche Daten wir über Sie
          verarbeiten
        </li>
        <li>
          <strong>Berichtigung</strong> (Art. 16) — Korrektur unrichtiger Daten
        </li>
        <li>
          <strong>Löschung</strong> (Art. 17) — Löschung Ihrer Daten
        </li>
        <li>
          <strong>Einschränkung</strong> (Art. 18) — Einschränkung der
          Verarbeitung
        </li>
        <li>
          <strong>Datenübertragbarkeit</strong> (Art. 20) — Daten in portablem
          Format
        </li>
        <li>
          <strong>Widerspruch</strong> (Art. 21) — Widerspruch gegen
          Verarbeitung
        </li>
      </ul>

      {/* 7. Beschwerderecht */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        7. Beschwerderecht
      </h2>
      <p className="mb-1">
        Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit
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

      {/* 8. Änderungen */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        8. Änderungen
      </h2>
      <p className="mb-6">
        Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren. Die
        aktuelle Version finden Sie stets auf dieser Seite.
      </p>

      {/* English translation */}
      <section className="mt-16 border-t border-white/10 pt-12">
        <h2 className="mb-6 text-2xl font-semibold text-white">
          Privacy Policy (English Translation)
        </h2>
        <p className="mb-2 text-lg text-neutral-300">
          Website: eduardbruch.com
        </p>
        <p className="mb-10 text-sm text-neutral-500">
          Last updated: February 18, 2026
        </p>

        <h3 className="mb-3 text-xl font-semibold text-white">
          1. Data Controller
        </h3>
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

        <h3 className="mb-3 mt-8 text-xl font-semibold text-white">
          2. Hosting
        </h3>
        <p className="mb-6">
          This website is hosted by <strong>Vercel Inc.</strong> (USA). When you
          visit the website, technical data (IP address, browser type, access
          time) is transmitted to Vercel&apos;s servers. This is technically
          necessary to deliver the website. Legal basis:{" "}
          <strong>Art. 6(1)(f) GDPR</strong> (legitimate interest). Vercel is
          certified under the EU-U.S. Data Privacy Framework.
        </p>

        <h3 className="mb-3 mt-8 text-xl font-semibold text-white">
          3. Vercel Web Analytics
        </h3>
        <p className="mb-4">
          We use <strong>Vercel Web Analytics</strong>, a privacy-friendly
          analytics service by Vercel Inc. It collects anonymized usage data to
          analyze website performance and usage.
        </p>
        <ul className="mb-4 list-disc pl-6 space-y-1">
          <li>Page views, referrer, country/region, device type, browser</li>
          <li>
            <strong>No cookies</strong> are used and{" "}
            <strong>no personal data</strong> is stored
          </li>
          <li>No IP addresses are retained and no user profiles are created</li>
        </ul>
        <p className="mb-6">
          Legal basis: <strong>Art. 6(1)(f) GDPR</strong> (legitimate interest
          in website analytics).
        </p>

        <h3 className="mb-3 mt-8 text-xl font-semibold text-white">
          4. No Other Services
        </h3>
        <p className="mb-6">
          This website does not use advertising trackers, social media plugins,
          external font CDNs, or any other third-party services that process
          personal data. Google Fonts are loaded locally.
        </p>

        <h3 className="mb-3 mt-8 text-xl font-semibold text-white">
          5. Your Rights (GDPR)
        </h3>
        <p className="mb-6">
          You have the right to access (Art. 15), rectification (Art. 16),
          erasure (Art. 17), restriction (Art. 18), data portability (Art. 20),
          and objection (Art. 21). Contact us at support@eduardbruch.com.
        </p>

        <h3 className="mb-3 mt-8 text-xl font-semibold text-white">
          6. Supervisory Authority
        </h3>
        <p className="mb-1">
          Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit
        </p>
        <p className="mb-1">Ludwig-Erhard-Str. 22, 7. OG, 20459 Hamburg</p>
        <p>
          <a
            href="https://datenschutz-hamburg.de"
            className="text-indigo-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://datenschutz-hamburg.de
          </a>
        </p>
      </section>
    </main>
  );
}
