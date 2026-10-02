import AnalyticsOptOut from "@/components/AnalyticsOptOut";
import ConsentSettingsButton from "@/components/ConsentSettingsButton";

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
        Stand: 2. Oktober 2026
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
        Diese Website wird bei <span className="text-white/80">Vercel Inc.</span>, 440 N Barranca Avenue #4133, Covina, CA 91723, USA, gehostet. Beim Aufruf werden technisch notwendige Daten verarbeitet (IP-Adresse, Datum und Uhrzeit, aufgerufene Adresse, Referrer, Browser und Betriebssystem), um die Seiten auszuliefern und die Sicherheit des Betriebs zu gewährleisten. Rechtsgrundlage ist <span className="text-white/80">Art. 6 Abs. 1 lit. f DSGVO</span>; unser berechtigtes Interesse liegt in einer zuverlässigen und sicheren Bereitstellung der Website. Vercel verarbeitet die Daten als Auftragsverarbeiter auf Grundlage eines Vertrags nach Art. 28 DSGVO. Server-Protokolle werden nur so lange gespeichert, wie es für den Betrieb und die Sicherheit erforderlich ist, und anschließend gelöscht. Eine Übermittlung in die USA erfolgt auf Grundlage des Angemessenheitsbeschlusses der EU-Kommission vom 10. Juli 2023 (EU-US Data Privacy Framework, Art. 45 DSGVO); Vercel ist danach zertifiziert. Weitere Informationen: <a href="https://vercel.com/legal/privacy-policy" className="text-white/60 underline underline-offset-4 decoration-white/20 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Vercel Privacy Policy</a>.
      </p>

      {/* 3. Web Analytics */}
      <h2 className="text-sm font-light tracking-[0.15em] text-white mb-6 uppercase">
        3. Vercel Web Analytics
      </h2>
      <p className="mb-8 text-sm leading-relaxed text-white/60">
        Wir verwenden <span className="text-white/80">Vercel Web Analytics</span>, einen
        datenschutzfreundlichen Analysedienst von Vercel Inc. Dieser Dienst
        erfasst pseudonymisierte, aggregiert ausgewertete Nutzungsdaten, um die Leistung
        und Nutzung der Website zu analysieren.
      </p>

      <p className="text-xs text-white/40 tracking-[0.1em] mb-4 uppercase">Erfasste Daten</p>
      <ul className="mb-8 list-none space-y-2 text-sm leading-relaxed text-white/50 pl-4">
        <li>— Seitenaufrufe (Page Views)</li>
        <li>— Verweisquelle (Referrer)</li>
        <li>— Land / Region (basierend auf IP-Geolokalisierung)</li>
        <li>— Gerätetyp, Betriebssystem und Browser</li>
        <li>
          — <span className="text-white/70">Klicks auf App-Store-Links</span> (Ereignis
          „appstore_click&quot;): die angeklickte Kampagnen-Kennung sowie der Pfad der
          Seite, von der aus geklickt wurde. Damit lässt sich auswerten, welche Inhalte zu
          Besuchen im App Store führen.
        </li>
        <li>
          — <span className="text-white/70">Ladezeit-Messwerte</span> (Vercel Speed
          Insights): technische Kennzahlen zur Seitenperformance (Core Web Vitals).
        </li>
      </ul>

      <p className="text-xs text-white/40 tracking-[0.1em] mb-4 uppercase">Datenschutzmaßnahmen</p>
      <ul className="mb-8 list-none space-y-2 text-sm leading-relaxed text-white/50 pl-4">
        <li>— <span className="text-white/70">Keine Cookies:</span> Vercel Web Analytics und Speed Insights verwenden keine Cookies und speichern keine Informationen auf Ihrem Endgerät. Für diesen Dienst ist daher keine Einwilligung nach § 25 TDDDG erforderlich.</li>
        <li>— <span className="text-white/70">Keine Nutzerprofile:</span> Es werden keine IP-Adressen dauerhaft gespeichert, keine geräteübergreifende Wiedererkennung vorgenommen und keine Profile gebildet.</li>
        <li>— <span className="text-white/70">Keine Weitergabe zu Werbezwecken:</span> Die Daten werden ausschließlich zur Reichweitenmessung genutzt und nicht an Dritte zu Werbezwecken übermittelt.</li>
      </ul>

      <p className="mb-8 text-sm leading-relaxed text-white/60">
        Rechtsgrundlage:{" "}
        <span className="text-white/80">Art. 6 Abs. 1 lit. f DSGVO</span>. Das berechtigte
        Interesse besteht darin, nachvollziehen zu können, welche Inhalte gefunden und
        genutzt werden und welche Beiträge zu Besuchen im App Store führen — dies ist
        Grundlage der wirtschaftlichen Tätigkeit dieser Website. Auftragsverarbeiter ist
        die Vercel Inc. (USA); die Verarbeitung erfolgt auf Grundlage eines Vertrags zur
        Auftragsverarbeitung nach Art. 28 DSGVO. Weitere Informationen:{" "}
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

      <p className="text-xs text-white/40 tracking-[0.1em] mb-4 uppercase">
        Widerspruchsrecht (Art. 21 DSGVO)
      </p>
      <p className="mb-6 text-sm leading-relaxed text-white/60">
        Sie können der Reichweitenmessung jederzeit mit Wirkung für die Zukunft
        widersprechen. Der folgende Schalter deaktiviert die Erfassung unmittelbar in
        diesem Browser. Die dafür nötige Einstellung wird lokal gespeichert und dient
        ausschließlich der Umsetzung Ihres Widerspruchs.
      </p>

      <AnalyticsOptOut lang="de" />

      <p className="mb-16 text-sm leading-relaxed text-white/60">
        Hinweis zu App-Store-Links: Links zum Apple App Store enthalten eine
        Kampagnen-Kennung (Parameter <span className="text-white/80">ct</span>), anhand
        derer Apple uns aggregiert mitteilt, über welchen Kanal Besucher in den App Store
        gelangt sind. Dabei werden keine Informationen auf Ihrem Endgerät gespeichert oder
        ausgelesen. Für die Verarbeitung nach dem Aufruf des App Store ist Apple
        verantwortlich.
      </p>

      {/* 3a. Google Analytics 4 (nur mit Einwilligung) */}
      <h2 className="text-sm font-light tracking-[0.15em] text-white mb-6 uppercase">
        3a. Google Analytics 4 (nur mit Einwilligung)
      </h2>
      <p className="mb-6 text-sm leading-relaxed text-white/60">
        Nur wenn Sie im Einwilligungsbanner <span className="text-white/80">„Akzeptieren“</span> wählen, nutzen wir Google Analytics 4, einen Dienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google“). Zweck ist die statistische Auswertung, welche Seiten und Artikel aufgerufen werden und wie Besucher auf die Website gelangen. Vorher wird Google Analytics nicht geladen, es besteht keine Verbindung zu Google und es wird nichts auf Ihrem Gerät gespeichert.
      </p>
      <ul className="mb-6 list-none space-y-2 text-sm leading-relaxed text-white/50 pl-4">
        <li>— Verarbeitete Daten: u. a. aufgerufene Seiten, Zeitpunkt und Dauer des Besuchs, Verweisquelle, Scrolltiefe, Klicks auf externe Links und Datei-Downloads, ungefährer Standort (Land/Region), Gerätetyp, Betriebssystem, Browser und Bildschirmauflösung sowie eine zufällige Kennung aus dem Cookie</li>
        <li>— Gespeichert auf Ihrem Gerät werden die Cookies <span className="text-white/80">_ga</span> (Unterscheidung von Besuchern) und <span className="text-white/80">_ga_9M6ZSF925S</span> (Sitzungsstatus), jeweils mit einer Laufzeit von bis zu 2 Jahren</li>
        <li>— IP-Adressen: Nach Angaben von Google werden Daten aus der EU über Server in der EU entgegengenommen; die IP-Adresse wird dort nur zur Ableitung des ungefähren Standorts verwendet und danach verworfen, also nicht protokolliert oder gespeichert</li>
        <li>— Einstellungen: Google-Signale, Funktionen für personalisierte Werbung, die Erfassung nutzerbereitgestellter Daten und Verknüpfungen mit Werbediensten sind deaktiviert; Ereignis- und nutzerbezogene Daten werden in Google Analytics spätestens nach 14 Monaten gelöscht</li>
      </ul>
      <p className="mb-6 text-sm leading-relaxed text-white/60">
        <span className="text-white/80">Empfänger und Rolle:</span> Google verarbeitet die Daten als Auftragsverarbeiter auf Grundlage der Datenverarbeitungsbedingungen von Google (Art. 28 DSGVO). Dabei kann Google LLC, USA, auf die Daten zugreifen. Die Übermittlung stützt sich auf den Angemessenheitsbeschluss der EU-Kommission zum EU-US Data Privacy Framework (Art. 45 DSGVO), unter dem Google LLC zertifiziert ist, ergänzend auf Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO).
      </p>
      <p className="mb-6 text-sm leading-relaxed text-white/60">
        <span className="text-white/80">Rechtsgrundlage:</span> Ihre Einwilligung nach <span className="text-white/80">§ 25 Abs. 1 TDDDG</span> (Speichern und Auslesen auf Ihrem Gerät) und <span className="text-white/80">Art. 6 Abs. 1 lit. a DSGVO</span> (weitere Verarbeitung). Die Einwilligung ist freiwillig; ohne sie können Sie die Website uneingeschränkt nutzen.
      </p>
      <p className="mb-6 text-sm leading-relaxed text-white/60">
        <span className="text-white/80">Widerruf:</span> Sie können Ihre Einwilligung jederzeit über „Cookie-Einstellungen“ im Seitenfuß oder über die Schaltfläche unten widerrufen. Danach werden keine Daten mehr an Google gesendet und die Google-Analytics-Cookies dieser Website gelöscht. Der Widerruf berührt nicht die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung. Weitere Informationen: <a href="https://policies.google.com/privacy" className="text-white/60 underline underline-offset-4 decoration-white/20 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Datenschutzerklärung von Google</a> und <a href="https://support.google.com/analytics/answer/12017362" className="text-white/60 underline underline-offset-4 decoration-white/20 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Google Analytics und Datenschutz</a>.
      </p>
      <ConsentSettingsButton lang="de" />

      {/* 4. Weitere Dienste */}
      <h2 className="text-sm font-light tracking-[0.15em] text-white mb-6 uppercase">
        4. Weitere Dienste
      </h2>
      <p className="mb-10 text-sm leading-relaxed text-white/60">
        Abgesehen von den hier beschriebenen Diensten (Vercel als Hoster und für die Reichweitenmessung, Google Analytics 4 nur mit Einwilligung, YouTube-Videos auf der passwortgeschützten Seite /reel nur nach Klick) binden wir keine Werbe-Tracker, Social-Media-Plugins oder externen Schriftarten ein; Schriftarten werden von unserem eigenen Server geladen.
      </p>
      <h2 className="text-sm font-light tracking-[0.15em] text-white mb-6 uppercase">
        4a. YouTube (nur nach Klick)
      </h2>
      <p className="mb-10 text-sm leading-relaxed text-white/60">
        Auf der passwortgeschützten Seite /reel können Videos über YouTube (Google Ireland Limited) im erweiterten Datenschutzmodus angesehen werden. Ein Video wird erst geladen, wenn Sie es anklicken; dabei werden Ihre IP-Adresse und technische Daten an Google übermittelt und es können Informationen auf Ihrem Gerät gespeichert werden. Rechtsgrundlage ist Ihre Einwilligung durch den Klick (<span className="text-white/80">§ 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a DSGVO</span>); eine Übermittlung in die USA stützt sich auf das EU-US Data Privacy Framework. Google ist hierfür eigenständig verantwortlich: <a href="https://policies.google.com/privacy" className="text-white/60 underline underline-offset-4 decoration-white/20 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.
      </p>
      <h2 className="text-sm font-light tracking-[0.15em] text-white mb-6 uppercase">
        4b. Notwendige Speicherung auf Ihrem Gerät
      </h2>
      <p className="mb-16 text-sm leading-relaxed text-white/60">
        Ohne Einwilligung speichern wir nur Informationen, die für einen von Ihnen gewünschten Dienst unbedingt erforderlich sind (<span className="text-white/80">§ 25 Abs. 2 Nr. 2 TDDDG</span>): im lokalen Speicher Ihres Browsers Ihre Entscheidung im Einwilligungsbanner („eb-consent-ga“, mit Versionsnummer und Datum, ohne Kennung), Ihren Widerspruch gegen die Reichweitenmessung („eb-analytics-opt-out“) und Ihre gewählte Sprache („lang“); diese Einträge bleiben, bis Sie sie im Browser löschen. Nach Eingabe des Passworts auf der Seite /reel setzen wir das Cookie „reel_access“ für 24 Stunden, um den Zugang zu ermöglichen. Diese Informationen werden nicht an Dritte übermittelt.
      </p>

      {/* 5. Kontaktaufnahme */}
      <h2 className="text-sm font-light tracking-[0.15em] text-white mb-6 uppercase">
        5. Kontaktaufnahme
      </h2>
      <p className="mb-6 text-sm leading-relaxed text-white/60">
        Wenn Sie uns per E-Mail schreiben oder das Kontaktformular nutzen, verarbeiten wir Ihren Namen, Ihre E-Mail-Adresse und Ihre Nachricht, um die Anfrage zu beantworten. Das Kontaktformular übermittelt nichts an unseren Server, sondern öffnet Ihr eigenes E-Mail-Programm; die Nachricht erreicht uns erst, wenn Sie sie dort absenden. Unser E-Mail-Postfach wird über einen E-Mail-Dienstleister betrieben. Rechtsgrundlage ist <span className="text-white/80">Art. 6 Abs. 1 lit. b DSGVO</span>, soweit die Anfrage einen Vertrag oder eine App betrifft, im Übrigen <span className="text-white/80">Art. 6 Abs. 1 lit. f DSGVO</span> (Interesse an der Beantwortung). Wir löschen die Korrespondenz, sobald die Anfrage erledigt ist, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
      </p>
      <p className="mb-16 text-sm leading-relaxed text-white/60">
        Ein Datenschutzbeauftragter ist nicht benannt, da hierzu keine gesetzliche Pflicht besteht. Sie sind nicht verpflichtet, uns personenbezogene Daten bereitzustellen. Eine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne von Art. 22 DSGVO findet nicht statt.
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
        <li>— <span className="text-white/70">Widerruf</span> (Art. 7 Abs. 3) — erteilte Einwilligungen jederzeit mit Wirkung für die Zukunft widerrufen</li>
      </ul>

      {/* 7. Beschwerderecht */}
      <h2 className="text-sm font-light tracking-[0.15em] text-white mb-6 uppercase">
        7. Beschwerderecht
      </h2>
      <p className="mb-4 text-sm leading-relaxed text-white/60">
        Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO), insbesondere in dem Mitgliedstaat Ihres Aufenthaltsorts. Für uns zuständig ist:
      </p>
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
        <p className="mb-6 text-xs text-white/40">In case of doubt, the German version prevails.</p>
        <p className="text-sm text-white/40 tracking-[0.1em] mb-2">
          Website: eduardbruch.com
        </p>
        <p className="text-xs text-white/25 tracking-[0.1em] mb-20">
          Last updated: October 2, 2026
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
          This website is hosted by <span className="text-white/80">Vercel Inc.</span>, 440 N Barranca Avenue #4133, Covina, CA 91723, USA. When you visit, technically necessary data is processed (IP address, date and time, requested URL, referrer, browser and operating system) to deliver the pages and keep the service secure. Legal basis: <span className="text-white/80">Art. 6(1)(f) GDPR</span>; our legitimate interest is reliable and secure delivery of the website. Vercel acts as our processor under an agreement pursuant to Art. 28 GDPR. Server logs are kept only as long as needed for operation and security and are then deleted. Transfers to the USA rely on the European Commission&apos;s adequacy decision of 10 July 2023 (EU-US Data Privacy Framework, Art. 45 GDPR), under which Vercel is certified. More information: <a href="https://vercel.com/legal/privacy-policy" className="text-white/60 underline underline-offset-4 decoration-white/20 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Vercel Privacy Policy</a>.
        </p>

        <h3 className="text-sm font-light tracking-[0.1em] text-white mb-6 uppercase">
          3. Vercel Web Analytics
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-white/60">
          We use <span className="text-white/80">Vercel Web Analytics</span>, a privacy-friendly
          analytics service by Vercel Inc. It collects pseudonymized usage data, evaluated in
          aggregate, to analyze website performance and usage.
        </p>
        <ul className="mb-6 list-none space-y-2 text-sm leading-relaxed text-white/50 pl-4">
          <li>— Page views, referrer, country/region, device type, browser</li>
          <li>
            — <span className="text-white/70">App Store link clicks</span> (the
            &quot;appstore_click&quot; event): the campaign identifier of the link and the
            path of the page it was clicked from, so we can tell which content leads
            people to the App Store
          </li>
          <li>
            — <span className="text-white/70">Page performance metrics</span> (Vercel Speed
            Insights): technical Core Web Vitals measurements
          </li>
          <li>— <span className="text-white/70">No cookies</span> are used and nothing is stored on or read from your device, so no consent under § 25 TDDDG is required for this service</li>
          <li>— No IP addresses are retained and no user profiles are created</li>
        </ul>
        <p className="mb-6 text-sm leading-relaxed text-white/60">
          Legal basis: <span className="text-white/80">Art. 6(1)(f) GDPR</span>. The
          legitimate interest is understanding which content is found and used, and which
          articles lead to App Store visits — the basis of this website&apos;s commercial
          activity. The processor is Vercel Inc. (USA), acting under a data processing
          agreement pursuant to Art. 28 GDPR.
        </p>

        <p className="text-xs text-white/40 tracking-[0.1em] mb-4 uppercase">
          Right to object (Art. 21 GDPR)
        </p>
        <p className="mb-6 text-sm leading-relaxed text-white/60">
          You may object to this analytics processing at any time with effect for the
          future. The toggle below disables collection immediately in this browser. The
          setting it stores is used solely to carry out your objection.
        </p>

        <AnalyticsOptOut lang="en" />

        <p className="mb-16 text-sm leading-relaxed text-white/60">
          A note on App Store links: links to the Apple App Store carry a campaign
          identifier (the <span className="text-white/80">ct</span> parameter), which lets
          Apple report to us in aggregate which channel visitors arrived from. Nothing is
          stored on or read from your device in the process. Once you reach the App Store,
          Apple is the controller for any further processing.
        </p>

        <h3 className="text-sm font-light tracking-[0.1em] text-white mb-6 uppercase">
          3a. Google Analytics 4 (only with consent)
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-white/60">
          Only if you choose <span className="text-white/80">&quot;Accept&quot;</span> in the consent banner do we use Google Analytics 4, a service of Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland (&quot;Google&quot;). The purpose is statistical analysis of which pages and articles are viewed and how visitors reach the site. Before that, Google Analytics is not loaded, no connection to Google is made and nothing is stored on your device.
        </p>
        <ul className="mb-6 list-none space-y-2 text-sm leading-relaxed text-white/50 pl-4">
          <li>— Data processed: among others pages viewed, time and duration of the visit, referrer, scroll depth, clicks on external links and file downloads, approximate location (country/region), device type, operating system, browser and screen resolution, and a random identifier from the cookie</li>
          <li>— Information stored on your device: the cookies <span className="text-white/80">_ga</span> (distinguishes visitors) and <span className="text-white/80">_ga_9M6ZSF925S</span> (session state), each kept for up to 2 years</li>
          <li>— IP addresses: according to Google, data from the EU is received on servers in the EU, where the IP address is used only to derive approximate location and is then discarded, i.e. not logged or stored</li>
          <li>— Settings: Google signals, ad personalization features, collection of user-provided data and links to advertising products are switched off; event-level and user-level data in Google Analytics is deleted after 14 months at the latest</li>
        </ul>
        <p className="mb-6 text-sm leading-relaxed text-white/60">
          <span className="text-white/80">Recipient and role:</span> Google processes the data as our processor under Google&apos;s data processing terms (Art. 28 GDPR). Google LLC, USA, may access the data. Transfers rely on the European Commission&apos;s adequacy decision for the EU-US Data Privacy Framework (Art. 45 GDPR), under which Google LLC is certified, and additionally on standard contractual clauses (Art. 46(2)(c) GDPR).
        </p>
        <p className="mb-6 text-sm leading-relaxed text-white/60">
          <span className="text-white/80">Legal basis:</span> your consent under <span className="text-white/80">§ 25(1) TDDDG</span> (storing and reading information on your device) and <span className="text-white/80">Art. 6(1)(a) GDPR</span> (further processing). Consent is voluntary; you can use the whole website without it.
        </p>
        <p className="mb-6 text-sm leading-relaxed text-white/60">
          <span className="text-white/80">Withdrawal:</span> you can withdraw consent at any time via &quot;Cookie-Einstellungen&quot; (cookie settings) in the footer or the button below. Afterwards no further data is sent to Google and the Google Analytics cookies for this site are deleted. Withdrawal does not affect the lawfulness of processing carried out before it. More information: <a href="https://policies.google.com/privacy" className="text-white/60 underline underline-offset-4 decoration-white/20 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a> and <a href="https://support.google.com/analytics/answer/12017362" className="text-white/60 underline underline-offset-4 decoration-white/20 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Google Analytics and privacy</a>.
        </p>
        <ConsentSettingsButton lang="en" />

        <h3 className="text-sm font-light tracking-[0.1em] text-white mb-6 uppercase">
          4. Other Services
        </h3>
        <p className="mb-10 text-sm leading-relaxed text-white/60">
          Apart from the services described here (Vercel for hosting and audience measurement, Google Analytics 4 only with consent, YouTube videos on the password-protected page /reel only after a click) we embed no advertising trackers, social media plugins or external fonts; fonts are served from our own server.
        </p>
        <h3 className="text-sm font-light tracking-[0.1em] text-white mb-6 uppercase">
          4a. YouTube (only after a click)
        </h3>
        <p className="mb-10 text-sm leading-relaxed text-white/60">
          On the password-protected page /reel, videos can be watched via YouTube (Google Ireland Limited) in privacy-enhanced mode. A video is only loaded when you click it; your IP address and technical data are then sent to Google and information may be stored on your device. Legal basis is your consent given by the click (<span className="text-white/80">§ 25(1) TDDDG, Art. 6(1)(a) GDPR</span>); transfers to the USA rely on the EU-US Data Privacy Framework. Google is an independent controller for this: <a href="https://policies.google.com/privacy" className="text-white/60 underline underline-offset-4 decoration-white/20 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.
        </p>
        <h3 className="text-sm font-light tracking-[0.1em] text-white mb-6 uppercase">
          4b. Necessary storage on your device
        </h3>
        <p className="mb-16 text-sm leading-relaxed text-white/60">
          Without consent we store only information that is strictly necessary for a service you request (<span className="text-white/80">§ 25(2) no. 2 TDDDG</span>): in your browser&apos;s local storage, your choice in the consent banner (&quot;eb-consent-ga&quot;, with version number and date, no identifier), your objection to audience measurement (&quot;eb-analytics-opt-out&quot;) and your selected language (&quot;lang&quot;); these entries remain until you clear them in your browser. After you enter the password on /reel we set the cookie &quot;reel_access&quot; for 24 hours to grant access. This information is not shared with third parties.
        </p>
        <h3 className="text-sm font-light tracking-[0.1em] text-white mb-6 uppercase">
          5. Contact
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-white/60">
          If you e-mail us or use the contact form, we process your name, e-mail address and message to answer your request. The contact form sends nothing to our server; it opens your own e-mail program, and the message only reaches us once you send it there. Our mailbox is operated through an e-mail service provider. Legal basis is <span className="text-white/80">Art. 6(1)(b) GDPR</span> where the request concerns a contract or an app, otherwise <span className="text-white/80">Art. 6(1)(f) GDPR</span> (interest in answering). We delete the correspondence once the matter is closed, unless statutory retention duties apply.
        </p>
        <p className="mb-16 text-sm leading-relaxed text-white/60">
          No data protection officer has been appointed as there is no legal obligation to do so. You are not obliged to provide personal data. No automated decision-making, including profiling, within the meaning of Art. 22 GDPR takes place.
        </p>

        <h3 className="text-sm font-light tracking-[0.1em] text-white mb-6 uppercase">
          6. Your Rights (GDPR)
        </h3>
        <p className="mb-16 text-sm leading-relaxed text-white/60">
          You have the right to access (Art. 15), rectification (Art. 16),
          erasure (Art. 17), restriction (Art. 18), data portability (Art. 20),
          objection (Art. 21), and to withdraw consent at any time with effect for the future (Art. 7(3)). Contact us at support@eduardbruch.com.
        </p>

        <h3 className="text-sm font-light tracking-[0.1em] text-white mb-6 uppercase">
          7. Supervisory Authority
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-white/60">
          You have the right to lodge a complaint with a supervisory authority (Art. 77 GDPR), in particular in the Member State of your residence. The authority responsible for us is:
        </p>
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
