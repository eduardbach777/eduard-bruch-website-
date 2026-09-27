import { A, LegalPage, Provider, Ul, type LegalSection } from "../_legal";

export const metadata = {
  title: "Nutzungsbedingungen / Terms of Use — SoundDial",
  description:
    "Nutzungsbedingungen für SoundDial, den Lautstärkemixer pro App für macOS. Terms of Use for SoundDial, the per-app volume mixer for macOS.",
  alternates: { canonical: "https://www.eduardbruch.com/sounddial/terms" },
};

const EULA = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";
const REFUND = "https://reportaproblem.apple.com";

const de: LegalSection[] = [
  {
    h: "Anbieter und Geltungsbereich",
    body: (
      <>
        <p>Anbieter der App SoundDial („App“) ist:</p>
        <Provider />
        <p>
          Die App wird ausschließlich über den Mac App Store von Apple vertrieben. Für den Erwerb und die Nutzung gilt der
          Lizenzvertrag für lizenzierte Apps von Apple (<A href={EULA}>Standard-EULA</A>) zwischen Ihnen und uns. Diese
          Nutzungsbedingungen ergänzen die Standard-EULA; bei Widersprüchen hat die Standard-EULA Vorrang, soweit nicht
          zwingendes Recht etwas anderes bestimmt.
        </p>
      </>
    ),
  },
  {
    h: "Leistungsbeschreibung",
    body: (
      <>
        <p>SoundDial ist ein Lautstärkemixer pro App für macOS in der Menüleiste. Die App bietet insbesondere:</p>
        <Ul>
          <li>Lautstärke pro App von 0 % bis 200 %, Stummschaltung und Pegelanzeigen</li>
          <li>Equalizer mit 10 Bändern und Voreinstellungen sowie Links/Rechts-Balance pro App</li>
          <li>Ausgabe einzelner Apps auf ein eigenes Ausgabegerät</li>
          <li>Automatisches Absenken anderer Apps während Anrufen (Auto-Ducking)</li>
          <li>Lautstärkeprofile</li>
          <li>Steuerung von Ausgabegeräten einschließlich Abtastrate und Software-Lautstärke</li>
          <li>Tastenkürzel, Aktionen für die Kurzbefehle-App und sounddial://-Links</li>
          <li>Geführte Einrichtung</li>
        </Ul>
        <p>
          Voraussetzung ist macOS 14.2 oder neuer sowie die macOS-Berechtigung „Nur Aufnahme von Systemaudio“. Einzelne
          Apps oder Geräte können sich aufgrund von Vorgaben von Apple oder Drittanbietern anders verhalten; der Funktionsumfang
          richtet sich nach der jeweils aktuellen Version und der Beschreibung im Mac App Store.
        </p>
      </>
    ),
  },
  {
    h: "Nutzungsrecht",
    body: (
      <p>
        Sie erhalten ein einfaches, nicht übertragbares Recht, die App im Rahmen der Standard-EULA und der Nutzungsregeln
        des App Store auf Apple-Geräten zu nutzen, die Sie besitzen oder kontrollieren. Eine Dekompilierung oder Bearbeitung
        ist nur zulässig, soweit das Gesetz sie zwingend erlaubt (§§ 69d, 69e UrhG).
      </p>
    ),
  },
  {
    h: "Preis, Kauf und Rückerstattung",
    body: (
      <p>
        SoundDial ist ein Einmalkauf ohne Abonnement, ohne In-App-Käufe und ohne Benutzerkonto; Updates sind enthalten. Der
        Kauf, die Zahlung und Rückerstattungen werden ausschließlich von Apple abgewickelt. Ihr gesetzliches Widerrufsrecht
        und Rückerstattungen richten sich nach den Bedingungen von Apple; Rückerstattungen können Sie unter{" "}
        <A href={REFUND}>reportaproblem.apple.com</A> beantragen.
      </p>
    ),
  },
  {
    h: "Gewährleistung und Updates",
    body: (
      <p>
        Es gelten die gesetzlichen Mängelrechte, für Verbraucher insbesondere die Vorschriften über digitale Produkte
        (§§ 327 ff. BGB), einschließlich der Pflicht, erforderliche Aktualisierungen bereitzustellen. Diese Rechte werden
        durch diese Nutzungsbedingungen nicht eingeschränkt.
      </p>
    ),
  },
  {
    h: "Haftung",
    body: (
      <>
        <p>
          Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit, bei Verletzung von Leben, Körper oder Gesundheit,
          bei arglistig verschwiegenen Mängeln, im Rahmen einer übernommenen Garantie sowie nach dem Produkthaftungsgesetz.
        </p>
        <p>
          Bei leichter Fahrlässigkeit haften wir nur bei Verletzung einer wesentlichen Vertragspflicht, deren Erfüllung die
          ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung Sie regelmäßig
          vertrauen dürfen (Kardinalpflicht), und nur für den vertragstypischen, vorhersehbaren Schaden. Im Übrigen ist die
          Haftung für leichte Fahrlässigkeit ausgeschlossen.
        </p>
      </>
    ),
  },
  {
    h: "Apps von Drittanbietern",
    body: (
      <p>
        SoundDial steuert die Audioausgabe anderer Programme. Für das Verhalten, die Kompatibilität und die Inhalte von Apps
        und Geräten Dritter sind deren Anbieter verantwortlich.
      </p>
    ),
  },
  {
    h: "Datenschutz",
    body: (
      <p>
        Die App erhebt keine personenbezogenen Daten. Einzelheiten finden Sie in der{" "}
        <A href="/sounddial/privacy">Datenschutzerklärung von SoundDial</A>.
      </p>
    ),
  },
  {
    h: "Anwendbares Recht und Gerichtsstand",
    body: (
      <p>
        Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Sind Sie Verbraucher mit
        gewöhnlichem Aufenthalt in einem anderen Staat, bleibt Ihnen der Schutz durch die zwingenden Vorschriften dieses
        Staates erhalten (Art. 6 Rom-I-VO). Ist der Nutzer Kaufmann, juristische Person des öffentlichen Rechts oder
        öffentlich-rechtliches Sondervermögen, ist Gerichtsstand Hamburg.
      </p>
    ),
  },
  {
    h: "Verbraucherstreitbeilegung",
    body: (
      <p>
        Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
        teilzunehmen (§ 36 VSBG).
      </p>
    ),
  },
  {
    h: "Änderungen und Kontakt",
    body: (
      <p>
        Wir können diese Nutzungsbedingungen für künftige Versionen der App anpassen. Es gilt die jeweils unter{" "}
        <A href="/sounddial/terms">eduardbruch.com/sounddial/terms</A> veröffentlichte Fassung. Fragen richten Sie bitte an{" "}
        <A href="mailto:support@eduardbruch.com">support@eduardbruch.com</A>. Anbieterangaben finden Sie im{" "}
        <A href="/impressum">Impressum</A>.
      </p>
    ),
  },
];

const en: LegalSection[] = [
  {
    h: "Provider and scope",
    body: (
      <>
        <p>The SoundDial app (“App”) is provided by:</p>
        <Provider />
        <p>
          The App is distributed exclusively through Apple&apos;s Mac App Store. Purchase and use are governed by
          Apple&apos;s Licensed Application End User License Agreement (<A href={EULA}>Standard EULA</A>) between you and
          us. These Terms supplement the Standard EULA; if they conflict, the Standard EULA prevails unless mandatory law
          provides otherwise.
        </p>
      </>
    ),
  },
  {
    h: "Description of the App",
    body: (
      <>
        <p>SoundDial is a per-app volume mixer for the macOS menu bar. In particular, the App offers:</p>
        <Ul>
          <li>Per-app volume from 0% to 200%, mute and level meters</li>
          <li>A 10-band equalizer with presets and left/right balance for each app</li>
          <li>Sending individual apps to their own output device</li>
          <li>Automatically lowering other apps during calls (auto-ducking)</li>
          <li>Volume profiles</li>
          <li>Output device control including sample rate and software volume</li>
          <li>Keyboard shortcuts, Shortcuts app actions and sounddial:// links</li>
          <li>Guided setup</li>
        </Ul>
        <p>
          The App requires macOS 14.2 or later and the macOS “System Audio Recording Only” permission. Individual apps or
          devices may behave differently due to requirements set by Apple or third parties; the features are those of the
          current version and its Mac App Store description.
        </p>
      </>
    ),
  },
  {
    h: "License",
    body: (
      <p>
        You receive a simple, non-transferable right to use the App on Apple devices you own or control, within the
        Standard EULA and the App Store Usage Rules. Decompiling or modifying the App is only permitted where mandatory law
        allows it (§§ 69d, 69e German Copyright Act).
      </p>
    ),
  },
  {
    h: "Price, purchase and refunds",
    body: (
      <p>
        SoundDial is a one-time purchase with no subscription, no in-app purchases and no account; updates are included.
        Purchase, payment and refunds are handled exclusively by Apple. Your statutory right of withdrawal and refunds are
        governed by Apple&apos;s terms; you can request a refund at <A href={REFUND}>reportaproblem.apple.com</A>.
      </p>
    ),
  },
  {
    h: "Warranty and updates",
    body: (
      <p>
        Statutory warranty rights apply, for consumers in particular the rules on digital products (§§ 327 et seq. German
        Civil Code), including the obligation to provide necessary updates. These Terms do not limit those rights.
      </p>
    ),
  },
  {
    h: "Liability",
    body: (
      <>
        <p>
          We are liable without limitation for intent and gross negligence, for injury to life, body or health, for
          fraudulently concealed defects, under a guarantee we have given, and under the German Product Liability Act.
        </p>
        <p>
          For slight negligence we are liable only for breach of an essential contractual obligation — one whose fulfilment
          makes proper performance of the contract possible and on which you may regularly rely — and only for typical,
          foreseeable damage. Otherwise, liability for slight negligence is excluded.
        </p>
      </>
    ),
  },
  {
    h: "Third-party apps",
    body: (
      <p>
        SoundDial controls the audio output of other programs. The providers of third-party apps and devices are
        responsible for their behavior, compatibility and content.
      </p>
    ),
  },
  {
    h: "Privacy",
    body: (
      <p>
        The App collects no personal data. For details, see the <A href="/sounddial/privacy">SoundDial Privacy Policy</A>.
      </p>
    ),
  },
  {
    h: "Governing law and jurisdiction",
    body: (
      <p>
        German law applies, excluding the UN Convention on Contracts for the International Sale of Goods. If you are a
        consumer habitually resident in another country, you keep the protection of that country&apos;s mandatory
        provisions (Art. 6 Rome I Regulation). If the user is a merchant, a legal entity under public law or a special fund
        under public law, the place of jurisdiction is Hamburg, Germany.
      </p>
    ),
  },
  {
    h: "Consumer dispute resolution",
    body: (
      <p>
        We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration
        board (§ 36 German Consumer Dispute Resolution Act, VSBG).
      </p>
    ),
  },
  {
    h: "Changes and contact",
    body: (
      <p>
        We may adapt these Terms for future versions of the App. The version published at{" "}
        <A href="/sounddial/terms">eduardbruch.com/sounddial/terms</A> applies. Please send questions to{" "}
        <A href="mailto:support@eduardbruch.com">support@eduardbruch.com</A>. Provider details are in the{" "}
        <A href="/impressum">Impressum (legal notice)</A>.
      </p>
    ),
  },
];

export default function SoundDialTerms() {
  return (
    <LegalPage
      title="Nutzungsbedingungen / Terms of Use"
      updatedDe="Stand: 27. September 2026"
      updatedEn="Last updated: September 27, 2026"
      de={de}
      en={en}
    />
  );
}
