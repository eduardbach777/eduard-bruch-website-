export const metadata = {
  title: "Legal Notice — Stash: Private Photo Vault",
  description:
    "Legal notice and imprint for Stash: Private Photo Vault by Eduard Bruch.",
};

export default function VaultImprint() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24 text-white text-lg leading-relaxed">
      {/* Header */}
      <header className="mb-12 border-b border-neutral-800 pb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Legal Notice
        </h1>
        <p className="mt-2 text-xl text-neutral-300">
          Stash: Private Photo Vault
        </p>
        <p className="mt-1 text-base text-neutral-400">
          Last updated: June 14, 2026
        </p>
      </header>

      {/* 1. Information pursuant to § 5 DDG */}
      <Section number="1" title="Information Pursuant to § 5 DDG (German Digital Services Act)">
        <p>Eduard Bruch</p>
        <p>Kleinfeld 28c</p>
        <p>21149 Hamburg, Germany</p>
        <p className="mt-4">
          Email:{" "}
          <a
            href="mailto:support@eduardbruch.com"
            className="text-indigo-400 hover:text-indigo-300 underline"
          >
            support@eduardbruch.com
          </a>
        </p>
        <p className="mt-1">
          Phone:{" "}
          <a
            href="tel:+4917681363293"
            className="text-indigo-400 hover:text-indigo-300 underline"
          >
            +49 176 81363293
          </a>
        </p>
      </Section>

      {/* 2. VAT ID */}
      <Section number="2" title="VAT Identification Number">
        <p>
          VAT identification number pursuant to § 27a of the German Value Added
          Tax Act (UStG): <strong>DE348394507</strong>
        </p>
      </Section>

      {/* 3. Responsible for Content */}
      <Section number="3" title="Responsible for Content Pursuant to § 18(2) MStV">
        <p>Eduard Bruch</p>
        <p>Kleinfeld 28c</p>
        <p>21149 Hamburg, Germany</p>
      </Section>

      {/* 4. Scope */}
      <Section number="4" title="Scope">
        <p>
          This legal notice applies to the website{" "}
          <a
            href="https://eduardbruch.com"
            className="text-indigo-400 hover:text-indigo-300 underline"
          >
            eduardbruch.com
          </a>{" "}
          and all mobile applications published by Eduard Bruch, including but
          not limited to <strong>Stash: Private Photo Vault</strong> and all
          associated vault applications (BrowserVault, CameraVault,
          FitnessVault, GameVault, MailVault, MusicVault, TranslatorVault,
          CalcVault).
        </p>
      </Section>

      {/* 5. Disclaimer — Liability for Content */}
      <Section number="5" title="Disclaimer — Liability for Content">
        <p>
          The contents of this website and the associated mobile applications
          have been created with the utmost care. However, Eduard Bruch cannot
          guarantee the accuracy, completeness, or timeliness of the content
          provided. As a service provider, Eduard Bruch is responsible for his
          own content on these pages in accordance with general legislation
          pursuant to § 7(1) DDG. Pursuant to §§ 8–10 DDG, Eduard Bruch is not
          obligated to monitor transmitted or stored third-party information or
          to investigate circumstances that indicate illegal activity.
          Obligations to remove or block the use of information under general
          law remain unaffected. However, liability in this regard is only
          possible from the time of knowledge of a specific infringement. Upon
          becoming aware of corresponding infringements, Eduard Bruch will
          remove the content immediately.
        </p>
      </Section>

      {/* 6. Disclaimer — Liability for Links */}
      <Section number="6" title="Disclaimer — Liability for Links">
        <p>
          This website and the applications may contain links to external
          third-party websites over whose content Eduard Bruch has no influence.
          Therefore, Eduard Bruch cannot assume any liability for this
          third-party content. The respective provider or operator of the linked
          pages is always responsible for the content of those pages. The linked
          pages were checked for possible legal violations at the time of
          linking. Illegal content was not recognizable at the time of linking.
          Permanent monitoring of the linked pages is unreasonable without
          concrete evidence of a violation. Upon becoming aware of legal
          violations, Eduard Bruch will remove such links immediately.
        </p>
      </Section>

      {/* 7. Copyright */}
      <Section number="7" title="Copyright">
        <p>
          The content and works created by Eduard Bruch on this website and
          within the associated applications are subject to German copyright
          law. Duplication, processing, distribution, and any kind of
          exploitation outside the limits of copyright law require the written
          consent of Eduard Bruch. Downloads and copies of this site are only
          permitted for private, non-commercial use. Insofar as the content on
          this site was not created by Eduard Bruch, the copyrights of third
          parties are respected. Should you nevertheless become aware of a
          copyright infringement, please notify Eduard Bruch accordingly. Upon
          becoming aware of legal violations, such content will be removed
          immediately.
        </p>
      </Section>

      {/* 8. Data Protection */}
      <Section number="8" title="Data Protection">
        <p>
          For details on how personal data is handled, please refer to the{" "}
          <a
            href="/vault/privacy"
            className="text-indigo-400 hover:text-indigo-300 underline"
          >
            Privacy Policy
          </a>
          .
        </p>
      </Section>

      {/* 9. Online Dispute Resolution */}
      <Section number="9" title="Online Dispute Resolution">
        <p>
          The European Commission provides a platform for online dispute
          resolution (ODR):{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 underline"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
        <p className="mt-4">
          Eduard Bruch is neither willing nor obligated to participate in
          dispute resolution proceedings before a consumer arbitration board.
        </p>
      </Section>
    </main>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-white mb-4">
        {number}. {title}
      </h2>
      <div className="text-neutral-300 space-y-4">{children}</div>
    </section>
  );
}
