import { A, LegalPage, Provider, Ul, type LegalSection } from "../_legal";

export const metadata = {
  title: "Datenschutzerklärung / Privacy Policy — SoundDial",
  description:
    "Datenschutzerklärung für SoundDial, den Lautstärkemixer pro App für macOS. Keine Analyse, kein Tracking, keine Netzwerkverbindung. Privacy policy for SoundDial.",
  alternates: { canonical: "https://www.eduardbruch.com/sounddial/privacy" },
};

const APPLE_PRIVACY = "https://www.apple.com/legal/privacy/";
const HMBBFDI = "https://datenschutz-hamburg.de";

const de: LegalSection[] = [
  {
    h: "Verantwortlicher",
    body: (
      <>
        <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) für die App SoundDial ist:</p>
        <Provider />
        <p>
          Ein Datenschutzbeauftragter ist nicht bestellt, da die gesetzlichen Voraussetzungen dafür nicht vorliegen
          (Art. 37 DSGVO, § 38 BDSG). Bei Fragen zum Datenschutz wenden Sie sich bitte an die oben genannte E-Mail-Adresse.
        </p>
      </>
    ),
  },
  {
    h: "Grundsatz: Keine Erhebung personenbezogener Daten durch die App",
    body: (
      <>
        <p>
          SoundDial ist ein Lautstärkemixer pro App für macOS. Die App verarbeitet Audio ausschließlich lokal auf Ihrem Mac,
          in Echtzeit. SoundDial hat keine Netzwerkverbindung: Die App enthält weder Analyse- noch Tracking-Werkzeuge,
          kein Benutzerkonto, keine Werbung und keine Drittanbieter-SDKs und überträgt keine Daten an uns oder an Dritte.
        </p>
      </>
    ),
  },
  {
    h: "Audioverarbeitung und Berechtigung „Nur Aufnahme von Systemaudio“",
    body: (
      <>
        <p>
          Um die Lautstärke anderer Apps zu ändern, nutzt SoundDial die von Apple bereitgestellte Core-Audio-Schnittstelle.
          Dafür verlangt macOS die Berechtigung „Nur Aufnahme von Systemaudio“ (Systemeinstellungen › Datenschutz &amp;
          Sicherheit › Aufnahme von Bildschirm &amp; Systemaudio). Das Audiosignal wird dabei ausschließlich im Arbeitsspeicher
          verarbeitet (Lautstärke, Equalizer, Balance, Pegelanzeige) und sofort an das Ausgabegerät weitergegeben. Es wird
          nicht aufgezeichnet, nicht gespeichert, nicht analysiert und nicht übertragen.
        </p>
        <p>
          Sie können die Berechtigung jederzeit in den Systemeinstellungen widerrufen; SoundDial kann dann andere Apps
          nicht mehr steuern.
        </p>
      </>
    ),
  },
  {
    h: "Lokal gespeicherte Einstellungen",
    body: (
      <>
        <p>
          SoundDial speichert Ihre Einstellungen lokal auf Ihrem Mac (macOS-Einstellungsspeicher im App-Container), z. B.
          Lautstärke, Stummschaltung, Equalizer und Balance pro App, gespeicherte Profile, Ausgabegeräte, Tastenkürzel
          und Anzeigeoptionen. Diese Daten verlassen Ihr Gerät nicht und sind für uns nicht zugänglich. Sie werden
          gelöscht, wenn Sie die App deinstallieren und ihren Container entfernen.
        </p>
      </>
    ),
  },
  {
    h: "Support-Anfragen per E-Mail",
    body: (
      <>
        <p>
          Wenn Sie uns per E-Mail kontaktieren (auch über „Support“ oder „Diagnose kopieren“ in der App), verarbeiten wir
          Ihre E-Mail-Adresse, Ihren Namen (falls angegeben), den Inhalt Ihrer Nachricht und – nur wenn Sie diese selbst
          einfügen oder mitsenden – technische Diagnoseangaben (z. B. macOS-Version, App-Version, erkannte Audiogeräte und
          App-Namen, Fehlermeldungen). Die App versendet nichts automatisch; eine E-Mail wird erst gesendet, wenn Sie sie in
          Ihrem Mailprogramm selbst abschicken.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung des Vertrags bzw. vorvertragliche Anfragen) sowie
          Art. 6 Abs. 1 lit. f DSGVO (unser berechtigtes Interesse an der Beantwortung Ihrer Anfrage). Wir löschen die
          Daten, sobald Ihre Anfrage abschließend bearbeitet ist, spätestens nach 12 Monaten, sofern keine gesetzlichen
          Aufbewahrungspflichten entgegenstehen.
        </p>
      </>
    ),
  },
  {
    h: "Kauf und Download über den Mac App Store",
    body: (
      <>
        <p>
          SoundDial wird ausschließlich über den Mac App Store von Apple vertrieben. Kauf, Zahlung, Download, Updates und
          Rückerstattungen wickelt Apple in eigener Verantwortung ab; wir erhalten dabei keine Zahlungsdaten. Anonyme bzw.
          zusammengefasste Verkaufs- und Nutzungsstatistiken, die Apple Entwicklern bereitstellt, lassen keine Rückschlüsse
          auf einzelne Personen zu. Informationen zur Datenverarbeitung durch Apple finden Sie in der{" "}
          <A href={APPLE_PRIVACY}>Datenschutzrichtlinie von Apple</A>.
        </p>
      </>
    ),
  },
  {
    h: "Empfänger, Drittlandübermittlung, automatisierte Entscheidungen",
    body: (
      <p>
        Durch die App werden keine personenbezogenen Daten an Dritte weitergegeben und keine Daten in Drittländer
        übermittelt. Es findet keine automatisierte Entscheidungsfindung einschließlich Profiling (Art. 22 DSGVO) statt.
      </p>
    ),
  },
  {
    h: "Ihre Rechte",
    body: (
      <>
        <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
        <Ul>
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>
            Recht auf Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO aus Gründen, die sich
            aus Ihrer besonderen Situation ergeben (Art. 21 DSGVO)
          </li>
          <li>Recht auf Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
        </Ul>
        <p>
          Zur Ausübung genügt eine formlose Nachricht an <A href="mailto:support@eduardbruch.com">support@eduardbruch.com</A>.
          Sie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Für uns
          zuständig ist der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit (
          <A href={HMBBFDI}>datenschutz-hamburg.de</A>).
        </p>
      </>
    ),
  },
  {
    h: "Kinder",
    body: (
      <p>
        SoundDial richtet sich nicht gezielt an Kinder. Da die App keine personenbezogenen Daten erhebt, werden auch keine
        Daten von Kindern verarbeitet.
      </p>
    ),
  },
  {
    h: "Website",
    body: (
      <p>
        Für den Besuch dieser Website gilt die gesonderte <A href="/datenschutz">Datenschutzerklärung der Website</A>.
        Anbieterangaben finden Sie im <A href="/impressum">Impressum</A>.
      </p>
    ),
  },
  {
    h: "Änderungen",
    body: (
      <p>
        Wir passen diese Datenschutzerklärung an, wenn sich die App oder die Rechtslage ändert. Es gilt die jeweils unter{" "}
        <A href="/sounddial/privacy">eduardbruch.com/sounddial/privacy</A> veröffentlichte Fassung.
      </p>
    ),
  },
];

const en: LegalSection[] = [
  {
    h: "Controller",
    body: (
      <>
        <p>The controller within the meaning of the General Data Protection Regulation (GDPR) for the SoundDial app is:</p>
        <Provider />
        <p>
          No data protection officer has been appointed, as the legal requirements for this are not met (Art. 37 GDPR,
          § 38 BDSG). For privacy questions, please contact the email address above.
        </p>
      </>
    ),
  },
  {
    h: "Principle: the app does not collect personal data",
    body: (
      <p>
        SoundDial is a per-app volume mixer for macOS. The app processes audio exclusively on your Mac, in real time.
        SoundDial has no network connection: it contains no analytics or tracking tools, no user account, no advertising
        and no third-party SDKs, and it transmits no data to us or to anyone else.
      </p>
    ),
  },
  {
    h: "Audio processing and the “System Audio Recording Only” permission",
    body: (
      <>
        <p>
          To change the volume of other apps, SoundDial uses Apple&apos;s Core Audio interface. For this, macOS requires
          the “System Audio Recording Only” permission (System Settings › Privacy &amp; Security › Screen &amp; System Audio
          Recording). The audio signal is processed only in memory (volume, equalizer, balance, level meters) and passed
          straight to the output device. It is never recorded, stored, analyzed or transmitted.
        </p>
        <p>
          You can revoke the permission at any time in System Settings; SoundDial can then no longer control other apps.
        </p>
      </>
    ),
  },
  {
    h: "Settings stored locally",
    body: (
      <p>
        SoundDial stores your settings locally on your Mac (the macOS preferences store in the app&apos;s container), for
        example per-app volume, mute, equalizer and balance, saved profiles, output devices, keyboard shortcuts and display
        options. This data never leaves your device and is not accessible to us. It is deleted when you uninstall the app
        and remove its container.
      </p>
    ),
  },
  {
    h: "Support requests by email",
    body: (
      <>
        <p>
          If you contact us by email (including via “Support” or “Copy Diagnostics” in the app), we process your email
          address, your name (if given), the content of your message and — only if you paste or attach it yourself —
          technical diagnostics (e.g. macOS version, app version, detected audio devices and app names, error messages).
          The app sends nothing automatically; an email is only sent when you send it from your mail app.
        </p>
        <p>
          The legal basis is Art. 6(1)(b) GDPR (performance of the contract or pre-contractual requests) and Art. 6(1)(f)
          GDPR (our legitimate interest in answering your request). We delete the data once your request has been
          resolved, at the latest after 12 months, unless statutory retention obligations apply.
        </p>
      </>
    ),
  },
  {
    h: "Purchase and download via the Mac App Store",
    body: (
      <p>
        SoundDial is distributed exclusively through Apple&apos;s Mac App Store. Apple handles purchase, payment,
        download, updates and refunds under its own responsibility; we receive no payment data. The anonymous or aggregated
        sales and usage statistics Apple provides to developers do not identify individual people. For Apple&apos;s data
        processing, see <A href={APPLE_PRIVACY}>Apple&apos;s Privacy Policy</A>.
      </p>
    ),
  },
  {
    h: "Recipients, transfers to third countries, automated decisions",
    body: (
      <p>
        The app does not share personal data with third parties and does not transfer data to third countries. There is no
        automated decision-making, including profiling (Art. 22 GDPR).
      </p>
    ),
  },
  {
    h: "Your rights",
    body: (
      <>
        <p>You have the following rights regarding your personal data:</p>
        <Ul>
          <li>Right of access (Art. 15 GDPR)</li>
          <li>Right to rectification (Art. 16 GDPR)</li>
          <li>Right to erasure (Art. 17 GDPR)</li>
          <li>Right to restriction of processing (Art. 18 GDPR)</li>
          <li>Right to data portability (Art. 20 GDPR)</li>
          <li>
            Right to object to processing based on Art. 6(1)(f) GDPR on grounds relating to your particular situation
            (Art. 21 GDPR)
          </li>
          <li>Right to withdraw consent at any time with effect for the future (Art. 7(3) GDPR)</li>
        </Ul>
        <p>
          An informal message to <A href="mailto:support@eduardbruch.com">support@eduardbruch.com</A> is enough. You also
          have the right to lodge a complaint with a data protection supervisory authority (Art. 77 GDPR). The authority
          responsible for us is the Hamburg Commissioner for Data Protection and Freedom of Information (
          <A href={HMBBFDI}>datenschutz-hamburg.de</A>).
        </p>
      </>
    ),
  },
  {
    h: "Children",
    body: (
      <p>
        SoundDial is not specifically aimed at children. Since the app collects no personal data, no data about children is
        processed either.
      </p>
    ),
  },
  {
    h: "Website",
    body: (
      <p>
        Visits to this website are covered by the separate <A href="/datenschutz">website privacy policy</A>. Provider
        details are in the <A href="/impressum">Impressum (legal notice)</A>.
      </p>
    ),
  },
  {
    h: "Changes",
    body: (
      <p>
        We update this policy when the app or the law changes. The version published at{" "}
        <A href="/sounddial/privacy">eduardbruch.com/sounddial/privacy</A> applies.
      </p>
    ),
  },
];

export default function SoundDialPrivacyPolicy() {
  return (
    <LegalPage
      title="Datenschutzerklärung / Privacy Policy"
      updatedDe="Stand: 27. September 2026"
      updatedEn="Last updated: September 27, 2026"
      de={de}
      en={en}
    />
  );
}
