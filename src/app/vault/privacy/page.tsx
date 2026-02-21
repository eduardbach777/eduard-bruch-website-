export const metadata = {
  title: "Privacy Policy — Vault Apps",
  description:
    "Privacy policy for BrowserVault, CameraVault, FitnessVault, GameVault, MailVault, MusicVault, TranslatorVault, and CalcVault.",
};

export default function VaultPrivacy() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24 text-neutral-300 leading-relaxed">
      {/* Header */}
      <header className="mb-12 border-b border-neutral-800 pb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-lg text-neutral-400">Vault Apps</p>
        <p className="mt-1 text-sm text-neutral-500">
          Last updated: February 17, 2026
        </p>
      </header>

      <p className="mb-10 text-[15px]">
        This privacy policy applies to the following applications published by
        Eduard Bruch: BrowserVault, CameraVault, FitnessVault, GameVault,
        MailVault, MusicVault, TranslatorVault, and CalcVault (collectively,
        &quot;the Apps&quot;). These Apps provide secure, encrypted on-device
        storage for private content.
      </p>

      {/* 1 */}
      <Section number="1" title="Data Controller">
        <p>Eduard Bruch</p>
        <p>Kleinfeld 28c, 21149 Hamburg, Germany</p>
        <p className="mt-2">
          Email:{" "}
          <a href="mailto:support@eduardbruch.com" className="text-indigo-400 hover:text-indigo-300 underline">
            support@eduardbruch.com
          </a>
        </p>
      </Section>

      {/* 2 */}
      <Section number="2" title="Data We Collect and Process">
        <SubSection title="2.1 PIN Code">
          Your PIN is stored as a cryptographic hash (SHA-256) in the
          device&apos;s secure storage (iOS Keychain / Android Secure Storage).
          Your PIN is <strong className="text-white">never stored in plaintext</strong> and
          cannot be recovered by us or anyone else.
        </SubSection>

        <SubSection title="2.2 Photos and Videos">
          Media files you store in the vault are encrypted using AES-256
          encryption and stored{" "}
          <strong className="text-white">locally on your device only</strong>. They are
          never transmitted to any external server, never included in device
          backups (unless you explicitly enable this), and never accessible to
          us or any third party.
        </SubSection>

        <SubSection title="2.3 Secure Notes">
          Notes stored in the vault are encrypted on-device using the same
          AES-256 encryption and are never transmitted externally.
        </SubSection>

        <SubSection title="2.4 Biometric Data (Face ID / Touch ID)">
          If you enable biometric unlock, authentication is handled entirely by
          the operating system (iOS LocalAuthentication framework). The App{" "}
          <strong className="text-white">
            never receives, stores, or processes your biometric data
          </strong>
          . It only receives a success/failure result from the system.
        </SubSection>

        <SubSection title="2.5 Intruder Detection Photos">
          <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
            <p>
              When the intruder detection feature is enabled and an incorrect PIN
              is entered, the App may capture a photo using the front-facing
              camera. These photos are{" "}
              <strong className="text-white">stored locally on your device and encrypted</strong>.
              They are{" "}
              <strong className="text-white">never transmitted to any external server</strong>{" "}
              and are only accessible within the App after successful
              authentication. You can delete intruder photos at any time from
              within the App.
            </p>
            <p className="mt-3 text-sm text-neutral-400">
              Legal basis: Art. 6(1)(f) GDPR (legitimate interest in device
              security) and Art. 6(1)(a) GDPR (your consent when enabling the
              feature).
            </p>
          </div>
        </SubSection>

        <SubSection title="2.6 Web Browsing Data (BrowserVault)">
          BrowserVault stores browsing history and bookmarks locally on your
          device. This data is clearable at any time from within the App and is
          never transmitted externally.
        </SubSection>

        <SubSection title="2.7 Disguise Layer Data">
          Each App includes a disguise layer (e.g., calculator, fitness tracker,
          browser) that stores non-sensitive surface-level data (step counts,
          game scores, calculator history) locally on your device.
        </SubSection>

        <SubSection title="2.8 Subscription Data">
          Subscriptions are processed by Apple / Google and verified through
          RevenueCat, Inc. (USA). RevenueCat receives anonymized transaction
          data to verify your subscription status. We do not have access to your
          payment information. Legal basis: Art. 6(1)(b) GDPR. See{" "}
          <a
            href="https://www.revenuecat.com/privacy"
            className="text-indigo-400 hover:text-indigo-300 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            RevenueCat&apos;s Privacy Policy
          </a>
          .
        </SubSection>
      </Section>

      {/* 3 */}
      <Section number="3" title="On-Device Storage Only">
        <p>
          <strong className="text-white">
            We do not operate any servers that store your data.
          </strong>{" "}
          All vault content (photos, videos, notes, browsing data) is stored
          exclusively on your device. We have no ability to access, view, or
          recover your encrypted data.
        </p>
      </Section>

      {/* 4 */}
      <Section number="4" title="Data Deletion">
        <p>
          You can delete all your data at any time by using the &quot;Reset
          Vault&quot; option in the App&apos;s settings, or by uninstalling the
          App. Once deleted, encrypted data cannot be recovered.
        </p>
      </Section>

      {/* 5 */}
      <Section number="5" title="Data Sharing">
        <p>
          We do not sell, rent, or share your personal data with third parties.
          The only third-party service involved is RevenueCat for subscription
          verification. Data transfer to the USA is covered by the EU-U.S. Data
          Privacy Framework.
        </p>
      </Section>

      {/* 6 */}
      <Section number="6" title="California Residents (CCPA)">
        <p>
          We do not sell personal information. We do not share personal
          information for cross-context behavioral advertising. California
          residents may contact us at{" "}
          <a href="mailto:support@eduardbruch.com" className="text-indigo-400 hover:text-indigo-300 underline">
            support@eduardbruch.com
          </a>{" "}
          to exercise their CCPA rights.
        </p>
      </Section>

      {/* 7 */}
      <Section number="7" title="Your Rights (GDPR)">
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span><strong className="text-white">Access</strong> (Art. 15) — request what data we hold</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span><strong className="text-white">Rectification</strong> (Art. 16) — correct inaccurate data</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span><strong className="text-white">Erasure</strong> (Art. 17) — delete your data via app settings or by uninstalling</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span><strong className="text-white">Restriction</strong> (Art. 18) — restrict processing</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span><strong className="text-white">Data Portability</strong> (Art. 20) — receive data in portable format</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span><strong className="text-white">Object</strong> (Art. 21) — object to processing</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span><strong className="text-white">Withdraw Consent</strong> (Art. 7(3)) — withdraw consent at any time</span>
          </li>
        </ul>
      </Section>

      {/* 8 */}
      <Section number="8" title="Right to Lodge a Complaint">
        <p>Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit</p>
        <p>Ludwig-Erhard-Str. 22, 7. OG, 20459 Hamburg</p>
        <p className="mt-2">
          <a
            href="https://datenschutz-hamburg.de"
            className="text-indigo-400 hover:text-indigo-300 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            datenschutz-hamburg.de
          </a>
        </p>
      </Section>

      {/* 9 */}
      <Section number="9" title="Children's Privacy">
        <p>
          The Apps are not directed at children under 13 (COPPA) or 16 (GDPR).
          We do not knowingly collect personal information from children.
        </p>
      </Section>

      {/* 10 */}
      <Section number="10" title="Analytics and Tracking">
        <p>
          The Apps do <strong className="text-white">not</strong> use any analytics,
          advertising, or tracking frameworks. No usage data is collected or
          transmitted.
        </p>
      </Section>

      {/* 11 */}
      <Section number="11" title="Changes to This Policy">
        <p>
          We may update this privacy policy from time to time. Changes will be
          reflected on this page with an updated date.
        </p>
      </Section>

      {/* 12 */}
      <Section number="12" title="Contact">
        <p>
          For questions about this privacy policy, contact:{" "}
          <a
            href="mailto:support@eduardbruch.com"
            className="text-indigo-400 hover:text-indigo-300 underline"
          >
            support@eduardbruch.com
          </a>
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
    <section className="mb-10">
      <h2 className="mb-4 text-lg font-semibold text-white">
        {number}. {title}
      </h2>
      <div className="text-[15px] space-y-3">{children}</div>
    </section>
  );
}

function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-5 first:mt-0">
      <h3 className="mb-2 text-[15px] font-medium text-neutral-200">{title}</h3>
      <div className="text-[15px]">{children}</div>
    </div>
  );
}
