export const metadata = {
  title: "Impressum — Eduard Bruch",
  description: "Legal notice (Impressum) for all apps by Eduard Bruch.",
};

export default function Impressum() {
  return (
    <main className="max-w-3xl mx-auto px-8 md:px-12 pt-44 pb-32 text-neutral-200">
      <h1 className="text-2xl md:text-3xl font-light tracking-[0.2em] mb-16 text-white">
        IMPRESSUM
      </h1>

      {/* German */}
      <section className="mb-24">
        <h2 className="text-base font-light tracking-[0.15em] text-white mb-8 uppercase">
          Angaben gemäß § 5 DDG
        </h2>
        <p className="mb-1 text-sm leading-relaxed">Eduard Bruch</p>
        <p className="mb-1 text-sm leading-relaxed">Kleinfeld 28c</p>
        <p className="mb-10 text-sm leading-relaxed">21149 Hamburg, Deutschland</p>

        <h3 className="text-sm font-light tracking-[0.1em] text-white mb-6 uppercase">
          Kontakt
        </h3>
        <p className="mb-1 text-sm leading-relaxed">
          Telefon:{" "}
          <a href="tel:+4917681363293" className="text-white/60 underline underline-offset-4 decoration-white/20 hover:text-white transition-colors">
            +49 176 81363293
          </a>
        </p>
        <p className="mb-10 text-sm leading-relaxed">
          E-Mail:{" "}
          <a
            href="mailto:support@eduardbruch.com"
            className="text-white/60 underline underline-offset-4 decoration-white/20 hover:text-white transition-colors"
          >
            support@eduardbruch.com
          </a>
        </p>

        <h3 className="text-sm font-light tracking-[0.1em] text-white mb-6 uppercase">
          Umsatzsteuer-ID
        </h3>
        <p className="mb-10 text-sm leading-relaxed text-white/60">
          Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE348394507
        </p>

        <h3 className="text-sm font-light tracking-[0.1em] text-white mb-6 uppercase">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </h3>
        <p className="mb-1 text-sm leading-relaxed">Eduard Bruch</p>
        <p className="mb-1 text-sm leading-relaxed">Kleinfeld 28c</p>
        <p className="mb-10 text-sm leading-relaxed">21149 Hamburg, Deutschland</p>

        <h3 className="text-sm font-light tracking-[0.1em] text-white mb-6 uppercase">
          Geltungsbereich
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-white/60">
          Dieses Impressum gilt für die Website eduardbruch.com sowie für alle
          von Eduard Bruch veröffentlichten mobilen Applikationen, einschließlich
          aber nicht beschränkt auf:
        </p>
        <ul className="mb-10 list-none space-y-4 text-sm leading-relaxed text-white/50">
          <li>
            <span className="text-white/70">Esotherik-Apps:</span>{" "}
            SpellBook, Witch&apos;s Herbal, Tarot Reader, Aura Reader, Daily Horoscope, Dream Dictionary, Human Design, Manifestation Timer, Moon Calendar, Palm Reader, Witch&apos;s Calendar, Zodiac Compatibility, Affirmation Cards, Astrology Memes, Biorhythm, Birth Chart, Chakra Scanner, Chinese Zodiac, Coffee Cup Reading, Face Reading, I Ching, Lucid Dreaming, Mercury Retrograde, Numerology, Oracle Cards, Past Life, Pendulum, Reiki Timer, Rune Reading, Sigil Generator, Smudging Guide, Soul Name, Sound Healing, Spirit Animal, Vedic Astrology
          </li>
          <li>
            <span className="text-white/70">Vault-Apps:</span>{" "}
            BrowserVault, CameraVault, FitnessVault, GameVault, MailVault, MusicVault, TranslatorVault, CalcVault
          </li>
          <li>
            <span className="text-white/70">Gesundheits-Apps:</span>{" "}
            Quit Vaping, Quit Nicotine Pouches, Quit Smoking Tracker, Quit Weed, Quit Porn
          </li>
          <li>
            <span className="text-white/70">Religiöse Apps:</span>{" "}
            Bible Study, Quran Study, Gita Study, Torah Study, Dhamma Study, Guru Granth
          </li>
          <li>
            <span className="text-white/70">Utilities:</span>{" "}
            Double Calculator, Unit Convert, Voice Recorder, QR Scanner, Teleprompter, PDF Scanner
          </li>
          <li>
            <span className="text-white/70">Weitere:</span> BabyBump
          </li>
        </ul>

        <h3 className="text-sm font-light tracking-[0.1em] text-white mb-6 uppercase">
          EU-Streitschlichtung
        </h3>
        <p className="mb-10 text-sm leading-relaxed text-white/60">
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            className="text-white/60 underline underline-offset-4 decoration-white/20 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          . Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>

        <h3 className="text-sm font-light tracking-[0.1em] text-white mb-6 uppercase">
          Verbraucherstreitbeilegung / Universalschlichtungsstelle
        </h3>
        <p className="text-sm leading-relaxed text-white/60">
          Wir sind nicht bereit oder verpflichtet, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </section>

      {/* English translation */}
      <section className="pt-16 border-t border-white/5">
        <h2 className="text-base font-light tracking-[0.15em] text-white mb-12 uppercase">
          Legal Notice (English Translation)
        </h2>

        <h3 className="text-sm font-light tracking-[0.1em] text-white mb-6 uppercase">
          Information pursuant to § 5 DDG
        </h3>
        <p className="mb-1 text-sm leading-relaxed">Eduard Bruch</p>
        <p className="mb-1 text-sm leading-relaxed">Kleinfeld 28c</p>
        <p className="mb-10 text-sm leading-relaxed">21149 Hamburg, Germany</p>

        <h3 className="text-sm font-light tracking-[0.1em] text-white mb-6 uppercase">
          Contact
        </h3>
        <p className="mb-1 text-sm leading-relaxed">Phone: +49 176 81363293</p>
        <p className="mb-10 text-sm leading-relaxed">
          Email:{" "}
          <a
            href="mailto:support@eduardbruch.com"
            className="text-white/60 underline underline-offset-4 decoration-white/20 hover:text-white transition-colors"
          >
            support@eduardbruch.com
          </a>
        </p>

        <h3 className="text-sm font-light tracking-[0.1em] text-white mb-6 uppercase">
          VAT ID
        </h3>
        <p className="mb-10 text-sm leading-relaxed text-white/60">
          VAT identification number: DE348394507
        </p>

        <h3 className="text-sm font-light tracking-[0.1em] text-white mb-6 uppercase">
          Responsible for Content (§ 18 para. 2 MStV)
        </h3>
        <p className="mb-1 text-sm leading-relaxed">Eduard Bruch</p>
        <p className="mb-1 text-sm leading-relaxed">Kleinfeld 28c</p>
        <p className="mb-10 text-sm leading-relaxed">21149 Hamburg, Germany</p>

        <h3 className="text-sm font-light tracking-[0.1em] text-white mb-6 uppercase">
          Scope
        </h3>
        <p className="mb-10 text-sm leading-relaxed text-white/60">
          This legal notice applies to the website eduardbruch.com and all
          mobile applications published by Eduard Bruch across all app stores.
          See the German section above for the full list of covered apps.
        </p>

        <h3 className="text-sm font-light tracking-[0.1em] text-white mb-6 uppercase">
          EU Dispute Resolution
        </h3>
        <p className="mb-10 text-sm leading-relaxed text-white/60">
          The European Commission provides a platform for online dispute
          resolution (ODR):{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            className="text-white/60 underline underline-offset-4 decoration-white/20 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          . Our email address can be found above.
        </p>

        <h3 className="text-sm font-light tracking-[0.1em] text-white mb-6 uppercase">
          Consumer Dispute Resolution
        </h3>
        <p className="text-sm leading-relaxed text-white/60">
          We are not willing or obliged to participate in dispute resolution
          proceedings before a consumer arbitration board.
        </p>
      </section>
    </main>
  );
}
