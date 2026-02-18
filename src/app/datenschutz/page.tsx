export const metadata = {
  title: "Datenschutzerklärung — eduardbruch.com",
  description:
    "Datenschutzerklärung (Privacy Policy) for the website eduardbruch.com by Eduard Bruch.",
};

export default function Datenschutz() {
  return (
    <main className="max-w-3xl mx-auto px-8 md:px-12 pt-44 pb-32 text-neutral-200">
      <h1 className="text-2xl md:text-3xl font-light tracking-[0.2em] mb-6 text-white">
        DATENSCHUTZERKLÄRUNG
      </h1>
      <p className="text-sm text-white/40 tracking-[0.1em] mb-2">
        Website: eduardbruch.com
      </p>
      <p className="text-xs text-white/25 tracking-[0.1em] mb-20">
        Stand: 18. Februar 2026
      </p>

      {/* 1. Verantwortlicher */}
      <h2 className="text-sm font-light tracking-[0.15em] text-white mb-6 uppercase">
        1. Verantwortlicher
      </h2>
      <p className="mb-1 text-sm leading-relaxed text-white/60">Eduard Bruch</p>
      <p className="mb-1 text-sm leading-relaxed text-white/60">Kleinfeld 28c, 21149 Hamburg, Deutschland</p>
      <p className="mb-16 text-sm leading-relaxed text-white/60">
        E-Mail:{" "}
        <a
          href="mailto:support@eduardbruch.com"
          className="text-white/60 underline underline-offset-4 decoration-white/20 hover:text-white transition-colors"
        >
          support@eduardbruch.com
        </a>
      </p>

      {/* 2. Hosting */}
      <h2 className="text-sm font-light tracking-[0.15em] text-white mb-6 uppercase">
        2. Hosting
      </h2>
      <p className="mb-16 text-sm leading-relaxed text-white/60">
        Diese Website wird bei <span className="text-white/80">Vercel Inc.</span> (340 S Lemon Ave
        #4133, Walnut, CA 91789, USA) gehostet. Beim Aufruf der Website werden
        automatisch technische Daten (IP-Adresse, Browsertyp, Zeitpunkt des
        Zugriffs) an die Server von Vercel übermittelt. Dies ist für die
        Auslieferung der Website technisch erforderlich. Rechtsgrundlage:{" "}
        <span className="text-white/80">Art. 6 Abs. 1 lit. f DSGVO</span> (berechtigtes Interesse an
        der Bereitstellung der Website). Vercel ist unter dem{" "}
        EU-U.S. Data Privacy Framework zertifiziert. Weitere
        Informationen:{" "}
        <a
          href="https://vercel.com/legal/privacy-policy"
          className="text-white/60 underline underline-offset-4 decoration-white/20 hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vercel Privacy Policy
        </a>
        .
      </p>

      {/* 3. Web Analytics */}
      <h2 className="text-sm font-light tracking-[0.15em] text-white mb-6 uppercase">
        3. Vercel Web Analytics
      </h2>
      <p className="mb-8 text-sm leading-relaxed text-white/60">
        Wir verwenden <span className="text-white/80">Vercel Web Analytics</span>, einen
        datenschutzfreundlichen Analysedienst von Vercel Inc. Dieser Dienst
        erfasst anonymisierte Nutzungsdaten, um die Leistung und Nutzung der
        Website zu analysieren.
      </p>

      <p className="text-xs text-white/40 tracking-[0.1em] mb-4 uppercase">Erfasste Daten</p>
      <ul className="mb-8 list-none space-y-2 text-sm leading-relaxed text-white/50 pl-4">
        <li>— Seitenaufrufe (Page Views)</li>
        <li>— Verweisquelle (Referrer)</li>
        <li>— Land / Region (basierend auf IP-Geolokalisierung)</li>
        <li>— Gerätetyp, Betriebssystem und Browser</li>
      </ul>

      <p className="text-xs text-white/40 tracking-[0.1em] mb-4 uppercase">Datenschutzmaßnahmen</p>
      <ul className="mb-8 list-none space-y-2 text-sm leading-relaxed text-white/50 pl-4">
        <li>— <span className="text-white/70">Keine Cookies:</span> Vercel Web Analytics verwendet keine Cookies und setzt keine Tracker.</li>
        <li>— <span className="text-white/70">Keine personenbezogene Zuordnung:</span> Es werden keine IP-Adressen gespeichert und keine Nutzerprofile erstellt.</li>
        <li>— <span className="text-white/70">DSGVO-konform:</span> Da keine personenbezogenen Daten verarbeitet werden, ist kein Cookie-Banner erforderlich.</li>
      </ul>

      <p className="mb-16 text-sm leading-relaxed text-white/60">
        Rechtsgrundlage:{" "}
        <span className="text-white/80">Art. 6 Abs. 1 lit. f DSGVO</span> (berechtigtes Interesse an
        der Analyse der Websitenutzung). Weitere Informationen:{" "}
        <a
          href="https://vercel.com/docs/analytics/privacy-policy"
          className="text-white/60 underline underline-offset-4 decoration-white/20 hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vercel Analytics Privacy Policy
        </a>
        .
      </p>

      {/* 4. Keine weiteren Dienste */}
      <h2 className="text-sm font-light tracking-[0.15em] text-white mb-6 uppercase">
        4. Keine weiteren Dienste
      </h2>
      <p className="mb-16 text-sm leading-relaxed text-white/60">
        Diese Website verwendet keine Werbe-Tracker, keine
        Social-Media-Plugins, keine Schriftarten von externen CDNs (Google
        Fonts werden lokal geladen) und keine sonstigen Drittanbieter-Dienste,
        die personenbezogene Daten verarbeiten.
      </p>

      {/* 5. Kontaktaufnahme */}
      <h2 className="text-sm font-light tracking-[0.15em] text-white mb-6 uppercase">
        5. Kontaktaufnahme
      </h2>
      <p className="mb-16 text-sm leading-relaxed text-white/60">
        Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben zur
        Bearbeitung der Anfrage gespeichert. Rechtsgrundlage:{" "}
        <span className="text-white/80">Art. 6 Abs. 1 lit. f DSGVO</span>.
      </p>

      {/* 6. Ihre Rechte */}
      <h2 className="text-sm font-light tracking-[0.15em] text-white mb-6 uppercase">
        6. Ihre Rechte (DSGVO)
      </h2>
      <ul className="mb-16 list-none space-y-3 text-sm leading-relaxed text-white/50 pl-4">
        <li>— <span className="text-white/70">Auskunft</span> (Art. 15) — Welche Daten wir über Sie verarbeiten</li>
        <li>— <span className="text-white/70">Berichtigung</span> (Art. 16) — Korrektur unrichtiger Daten</li>
        <li>— <span className="text-white/70">Löschung</span> (Art. 17) — Löschung Ihrer Daten</li>
        <li>— <span className="text-white/70">Einschränkung</span> (Art. 18) — Einschränkung der Verarbeitung</li>
        <li>— <span className="text-white/70">Datenübertragbarkeit</span> (Art. 20) — Daten in portablem Format</li>
        <li>— <span className="text-white/70">Widerspruch</span> (Art. 21) — Widerspruch gegen Verarbeitung</li>
      </ul>

      {/* 7. Beschwerderecht */}
      <h2 className="text-sm font-light tracking-[0.15em] text-white mb-6 uppercase">
        7. Beschwerderecht
      </h2>
      <p className="mb-1 text-sm leading-relaxed text-white/60">
        Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit
      </p>
      <p className="mb-1 text-sm leading-relaxed text-white/60">Ludwig-Erhard-Str. 22, 7. OG, 20459 Hamburg</p>
      <p className="mb-16 text-sm leading-relaxed">
        <a
          href="https://datenschutz-hamburg.de"
          className="text-white/60 underline underline-offset-4 decoration-white/20 hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://datenschutz-hamburg.de
        </a>
      </p>

      {/* 8. Änderungen */}
      <h2 className="text-sm font-light tracking-[0.15em] text-white mb-6 uppercase">
        8. Änderungen
      </h2>
      <p className="mb-24 text-sm leading-relaxed text-white/60">
        Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren. Die
        aktuelle Version finden Sie stets auf dieser Seite.
      </p>

      {/* English translation */}
      <section className="pt-16 border-t border-white/5">
        <h2 className="text-base font-light tracking-[0.15em] text-white mb-6 uppercase">
          Privacy Policy (English Translation)
        </h2>
        <p className="text-sm text-white/40 tracking-[0.1em] mb-2">
          Website: eduardbruch.com
        </p>
        <p className="text-xs text-white/25 tracking-[0.1em] mb-20">
          Last updated: February 18, 2026
        </p>

        <h3 className="text-sm font-light tracking-[0.1em] text-white mb-6 uppercase">
          1. Data Controller
        </h3>
        <p className="mb-1 text-sm leading-relaxed text-white/60">Eduard Bruch</p>
        <p className="mb-1 text-sm leading-relaxed text-white/60">Kleinfeld 28c, 21149 Hamburg, Germany</p>
        <p className="mb-16 text-sm leading-relaxed text-white/60">
          Email:{" "}
          <a
            href="mailto:support@eduardbruch.com"
            className="text-white/60 underline underline-offset-4 decoration-white/20 hover:text-white transition-colors"
          >
            support@eduardbruch.com
          </a>
        </p>

        <h3 className="text-sm font-light tracking-[0.1em] text-white mb-6 uppercase">
          2. Hosting
        </h3>
        <p className="mb-16 text-sm leading-relaxed text-white/60">
          This website is hosted by <span className="text-white/80">Vercel Inc.</span> (USA). When you
          visit the website, technical data (IP address, browser type, access
          time) is transmitted to Vercel&apos;s servers. This is technically
          necessary to deliver the website. Legal basis:{" "}
          <span className="text-white/80">Art. 6(1)(f) GDPR</span> (legitimate interest). Vercel is
          certified under the EU-U.S. Data Privacy Framework.
        </p>

        <h3 className="text-sm font-light tracking-[0.1em] text-white mb-6 uppercase">
          3. Vercel Web Analytics
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-white/60">
          We use <span className="text-white/80">Vercel Web Analytics</span>, a privacy-friendly
          analytics service by Vercel Inc. It collects anonymized usage data to
          analyze website performance and usage.
        </p>
        <ul className="mb-6 list-none space-y-2 text-sm leading-relaxed text-white/50 pl-4">
          <li>— Page views, referrer, country/region, device type, browser</li>
          <li>— <span className="text-white/70">No cookies</span> are used and <span className="text-white/70">no personal data</span> is stored</li>
          <li>— No IP addresses are retained and no user profiles are created</li>
        </ul>
        <p className="mb-16 text-sm leading-relaxed text-white/60">
          Legal basis: <span className="text-white/80">Art. 6(1)(f) GDPR</span> (legitimate interest
          in website analytics).
        </p>

        <h3 className="text-sm font-light tracking-[0.1em] text-white mb-6 uppercase">
          4. No Other Services
        </h3>
        <p className="mb-16 text-sm leading-relaxed text-white/60">
          This website does not use advertising trackers, social media plugins,
          external font CDNs, or any other third-party services that process
          personal data. Google Fonts are loaded locally.
        </p>

        <h3 className="text-sm font-light tracking-[0.1em] text-white mb-6 uppercase">
          5. Your Rights (GDPR)
        </h3>
        <p className="mb-16 text-sm leading-relaxed text-white/60">
          You have the right to access (Art. 15), rectification (Art. 16),
          erasure (Art. 17), restriction (Art. 18), data portability (Art. 20),
          and objection (Art. 21). Contact us at support@eduardbruch.com.
        </p>

        <h3 className="text-sm font-light tracking-[0.1em] text-white mb-6 uppercase">
          6. Supervisory Authority
        </h3>
        <p className="mb-1 text-sm leading-relaxed text-white/60">
          Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit
        </p>
        <p className="mb-1 text-sm leading-relaxed text-white/60">Ludwig-Erhard-Str. 22, 7. OG, 20459 Hamburg</p>
        <p className="text-sm leading-relaxed">
          <a
            href="https://datenschutz-hamburg.de"
            className="text-white/60 underline underline-offset-4 decoration-white/20 hover:text-white transition-colors"
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
