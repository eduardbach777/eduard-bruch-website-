export const metadata = {
  title: "Impressum — PDF Creator",
};

export default function Impressum() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-neutral-200">
      <h1 className="mb-8 text-3xl font-bold text-white">Impressum</h1>

      <h2 className="mb-3 text-xl font-semibold text-white">
        Angaben gemäß § 5 DDG
      </h2>

      <p className="mb-1">Eduard Bruch</p>
      <p className="mb-1">Kleinfeld 28c</p>
      <p className="mb-4">21149 Hamburg, Deutschland</p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">Kontakt</h2>
      <p className="mb-1">
        Telefon: +49 176 81363293
      </p>
      <p className="mb-4">
        E-Mail:{" "}
        <a href="mailto:eduardbruch777@gmail.com" className="text-indigo-400 underline">
          eduardbruch777@gmail.com
        </a>
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
      </h2>
      <p className="mb-1">Eduard Bruch</p>
      <p className="mb-1">Kleinfeld 28c</p>
      <p className="mb-4">21149 Hamburg, Deutschland</p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        EU-Streitschlichtung
      </h2>
      <p className="mb-4">
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
        (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          className="text-indigo-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        . Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        Verbraucherstreitbeilegung / Universalschlichtungsstelle
      </h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
        einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </main>
  );
}
