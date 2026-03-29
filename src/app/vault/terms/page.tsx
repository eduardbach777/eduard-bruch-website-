export const metadata = {
  title: "Terms of Service — Stash: Private Photo Vault",
  description:
    "Terms of service for Stash: Private Photo Vault — encrypted file vault with disguise modes.",
};

export default function VaultTerms() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24 text-white text-lg leading-relaxed">
      {/* Header */}
      <header className="mb-12 border-b border-neutral-800 pb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Terms of Service
        </h1>
        <p className="mt-2 text-xl text-neutral-300">
          Stash: Private Photo Vault
        </p>
        <p className="mt-1 text-base text-neutral-400">
          Last updated: March 18, 2026
        </p>
      </header>

      <p className="mb-10">
        These Terms of Service (&quot;Terms&quot;) govern your use of
        &quot;Stash: Private Photo Vault&quot; (&quot;Stash&quot;, &quot;the
        App&quot;), published by Eduard Bruch. By downloading, installing, or
        using the App, you agree to be bound by these Terms. If you do not agree
        to these Terms, do not use the App.
      </p>

      {/* 1 */}
      <Section number="1" title="Description of the App">
        <p>
          Stash is a privacy application that provides encrypted on-device
          storage for files including photos, videos, documents, audio files,
          and other file types. The App features three disguise modes
          (calculator, fitness tracker, music player), a decoy vault, intruder
          detection, a private browser, and secure notes. All data is stored
          exclusively on your device using AES-256 encryption.
        </p>
      </Section>

      {/* 2 */}
      <Section number="2" title="Security Disclaimer">
        <div className="border-l-4 border-amber-500 pl-4">
          <p>
            While Stash uses AES-256 encryption, cryptographically secure key
            generation, and industry-standard security practices to protect your
            data, <strong>no security system is impenetrable</strong>. You
            acknowledge that:
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
              <span>
                No method of electronic storage or encryption is 100% secure
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
              <span>
                We cannot guarantee the absolute safety of your content against
                all possible threats
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
              <span>
                Physical access to an unlocked device may compromise vault
                security
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
              <span>
                The disguise modes are designed to deter casual observation but
                are not guaranteed to withstand forensic examination
              </span>
            </li>
          </ul>
        </div>
      </Section>

      {/* 3 */}
      <Section number="3" title="Data Loss and Recovery">
        <div className="border-l-4 border-red-500 pl-4">
          <p>
            All vault data is stored <strong>on your device</strong> by
            default. The App offers optional encrypted backup to iCloud or
            Google Drive, which you must manually initiate. If you have not
            created a backup and you uninstall the App, forget your PIN,
            perform a factory reset, or lose or damage your device, your
            encrypted data{" "}
            <strong>
              cannot be recovered — by you, by us, or by anyone else
            </strong>
            .
          </p>
          <p className="mt-3">
            If you have set up a recovery key, you can use it to regain access
            if you forget your PIN. The recovery key is shown to you once at
            the time of creation — we do not store it and cannot retrieve it
            for you.
          </p>
          <p className="mt-3">
            You are solely responsible for maintaining backups and storing your
            recovery key safely. Eduard Bruch is not liable for any data loss
            resulting from device failure, uninstallation, operating system
            updates, PIN loss, lost recovery key, hardware malfunction, theft,
            or any other cause.
          </p>
        </div>
      </Section>

      {/* 4 */}
      <Section number="4" title="PIN Responsibility">
        <p>
          You are solely responsible for creating, remembering, and keeping your
          PIN confidential. We do not have access to your PIN — it is stored as
          a one-way salted cryptographic hash (SHA-256 with unique random salt)
          on your device. We cannot reset, retrieve, or bypass your PIN under
          any circumstances.
        </p>
        <p className="mt-3">
          If you forget your PIN and have not set up a recovery key, your
          encrypted data becomes permanently inaccessible. The App provides a
          recovery key feature that allows you to regain access — it is your
          responsibility to generate and safely store this key.
        </p>
        <p className="mt-3">
          To protect against unauthorized access, the App enforces a lockout
          after repeated failed PIN attempts (30 seconds after 5 failed
          attempts, escalating to 30 minutes after 15+). If you share your PIN
          with others, grant physical access to your unlocked vault, or use an
          easily guessable PIN, you do so at your own risk. We recommend using
          a PIN that is at least 6 digits long and not easily associated with
          you.
        </p>
      </Section>

      {/* 5 */}
      <Section number="5" title="Decoy Vault">
        <p>
          The decoy vault feature allows you to set up a secondary PIN that
          opens a separate vault with different content. This feature is
          provided for privacy purposes. You acknowledge that:
        </p>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              The decoy vault is intended to provide plausible deniability and
              may not withstand forensic analysis of the device
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              We make no representations regarding its effectiveness in any
              specific legal, law enforcement, or personal safety situation
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              Use of the decoy vault is your sole responsibility
            </span>
          </li>
        </ul>
      </Section>

      {/* 6 */}
      <Section number="6" title="Intruder Detection">
        <p>
          When enabled, the intruder detection feature captures photographs
          using the front-facing camera upon failed PIN entry attempts. By
          enabling this feature, you acknowledge and agree that:
        </p>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              You are responsible for compliance with applicable laws regarding
              photographing individuals in your jurisdiction
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              Intruder photos are encrypted and stored locally on your device
              and are your responsibility to manage and delete
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              Eduard Bruch is not liable for any legal consequences arising from
              the use of this feature
            </span>
          </li>
        </ul>
      </Section>

      {/* 7 */}
      <Section number="7" title="Disguise Modes">
        <p>
          Stash offers three disguise modes (calculator, fitness tracker, music
          player) that make the App appear as a different application on your
          home screen. These disguises include functional surface-level features
          (e.g., a working calculator, simulated step tracking, a music
          library). You acknowledge that:
        </p>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              Disguise modes are designed to deter casual observation, not to
              guarantee concealment
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              The App may still be identifiable through system-level inspection
              (e.g., storage settings, App Store purchase history)
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              The fitness tracker disguise shows simulated data and is not a
              medical device or health tracker
            </span>
          </li>
        </ul>
      </Section>

      {/* 8 */}
      <Section number="8" title="Subscriptions and Payments">
        <SubSection title="8.1 Free Tier">
          <p>
            The free version of the App allows you to store up to 20 files and
            3 secure notes with full AES-256 encryption. Certain features
            (intruder detection, all disguise modes, decoy vault, cloud backup,
            unlimited storage) require a premium subscription.
          </p>
        </SubSection>

        <SubSection title="8.2 Premium Subscriptions">
          <ul className="space-y-2">
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
              <span>
                Payment will be charged to your Apple ID or Google Play account
                at confirmation of purchase
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
              <span>
                Subscriptions automatically renew unless canceled at least 24
                hours before the end of the current billing period
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
              <span>
                Your account will be charged for renewal within 24 hours prior
                to the end of the current period at the rate of the selected
                plan
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
              <span>
                You can manage and cancel subscriptions through your device&apos;s
                account settings (App Store or Google Play)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
              <span>
                Any unused portion of a free trial period will be forfeited upon
                purchasing a subscription
              </span>
            </li>
          </ul>
        </SubSection>

        <SubSection title="8.3 Lifetime Purchase">
          <p>
            A one-time lifetime purchase option grants permanent access to all
            premium features. This is a non-recurring payment. Lifetime access
            applies to the App as it exists at the time of purchase; future
            entirely new products are not included.
          </p>
        </SubSection>

        <SubSection title="8.4 Refunds">
          <p>
            Refund requests are handled by Apple (App Store) or Google (Google
            Play) according to their respective refund policies. We do not
            process refunds directly. If you experience a technical issue,
            please contact us at{" "}
            <a
              href="mailto:support@eduardbruch.com"
              className="text-indigo-400 hover:text-indigo-300 underline"
            >
              support@eduardbruch.com
            </a>{" "}
            and we will assist you.
          </p>
        </SubSection>
      </Section>

      {/* 9 */}
      <Section number="9" title="Acceptable Use">
        <p>
          You agree to use the App only for lawful purposes. You are solely
          responsible for the content you store in the vault. We do not monitor,
          review, access, or moderate your stored content. You agree not to:
        </p>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              Use the App to store, distribute, or facilitate access to content
              that violates applicable law
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              Reverse-engineer, decompile, disassemble, or attempt to derive the
              source code of the App
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              Circumvent, disable, or interfere with any security features of
              the App
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              Redistribute, sublicense, or create derivative works based on the
              App
            </span>
          </li>
        </ul>
      </Section>

      {/* 10 */}
      <Section number="10" title="Intellectual Property">
        <p>
          All app designs, user interface elements, graphics, icons, software
          code, and documentation are the intellectual property of Eduard Bruch
          and are protected by applicable copyright and intellectual property
          laws. Your personal content (photos, videos, documents, notes, and
          files) stored in the vault remains your property at all times. We
          claim no ownership or license over your content.
        </p>
      </Section>

      {/* 11 */}
      <Section number="11" title="Disclaimer of Warranties">
        <p>
          The App is provided on an &quot;as is&quot; and &quot;as
          available&quot; basis without warranties of any kind, either express
          or implied, including but not limited to:
        </p>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              Implied warranties of merchantability, fitness for a particular
              purpose, and non-infringement
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              Warranties that the App will be uninterrupted, error-free, or free
              of viruses or harmful components
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              Warranties that the encryption will withstand all possible attacks
              or that your data will never be compromised
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              Warranties regarding the effectiveness of disguise modes in any
              specific scenario
            </span>
          </li>
        </ul>
      </Section>

      {/* 12 */}
      <Section number="12" title="Limitation of Liability">
        <p>
          To the maximum extent permitted by applicable law, Eduard Bruch shall
          not be liable for any indirect, incidental, special, consequential, or
          punitive damages, including but not limited to:
        </p>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>Loss of data or encrypted content</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>Loss of privacy resulting from device compromise</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              Damages arising from inability to access encrypted content due to
              forgotten PIN
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              Damages arising from reliance on the disguise or decoy features
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              Any damages arising from the use or inability to use the App
            </span>
          </li>
        </ul>
        <p className="mt-3">
          Your sole and exclusive remedy for dissatisfaction with the App is to
          stop using it and uninstall it from your device.
        </p>
      </Section>

      {/* 13 */}
      <Section number="13" title="Indemnification">
        <p>
          You agree to indemnify, defend, and hold harmless Eduard Bruch from
          and against any claims, liabilities, damages, losses, and expenses
          (including reasonable legal fees) arising from or related to your use
          of the App, your violation of these Terms, or your violation of any
          applicable law.
        </p>
      </Section>

      {/* 14 */}
      <Section number="14" title="Termination">
        <p>
          You may terminate your use of the App at any time by uninstalling it.
          Upon uninstallation, all locally stored data is permanently deleted.
          We reserve the right to terminate or restrict access to the App if you
          violate these Terms, though given the App&apos;s on-device nature,
          enforcement is limited to removal from app stores.
        </p>
      </Section>

      {/* 15 */}
      <Section number="15" title="Governing Law and Jurisdiction">
        <p>
          These Terms are governed by and construed in accordance with the laws
          of the Federal Republic of Germany, without regard to its conflict of
          law provisions. If you are a consumer within the European Union, you
          also benefit from mandatory consumer protection provisions of the law
          in your country of residence. The exclusive place of jurisdiction is
          Hamburg, Germany, except where mandatory consumer protection law
          provides otherwise.
        </p>
      </Section>

      {/* 16 */}
      <Section number="16" title="Severability">
        <p>
          If any provision of these Terms is held to be invalid, illegal, or
          unenforceable, the remaining provisions shall continue in full force
          and effect. The invalid provision shall be modified to the minimum
          extent necessary to make it valid and enforceable.
        </p>
      </Section>

      {/* 17 */}
      <Section number="17" title="Entire Agreement">
        <p>
          These Terms, together with the Privacy Policy, constitute the entire
          agreement between you and Eduard Bruch regarding your use of the App,
          and supersede all prior agreements and understandings, whether written
          or oral.
        </p>
      </Section>

      {/* 18 */}
      <Section number="18" title="Changes to These Terms">
        <p>
          We may update these Terms from time to time. Changes will be reflected
          on this page with an updated &quot;Last updated&quot; date. Continued
          use of the App after changes constitutes acceptance of the updated
          Terms. If material changes are made, we will make reasonable efforts
          to notify you through the App or App Store update notes.
        </p>
      </Section>

      {/* 19 */}
      <Section number="19" title="Contact">
        <p>
          For questions or concerns about these Terms, contact:
        </p>
        <div className="mt-3">
          <p>Eduard Bruch</p>
          <p>Kleinfeld 28c, 21149 Hamburg, Germany</p>
          <p className="mt-2">
            Email:{" "}
            <a
              href="mailto:support@eduardbruch.com"
              className="text-indigo-400 hover:text-indigo-300 underline"
            >
              support@eduardbruch.com
            </a>
          </p>
        </div>
      </Section>
      {/* Navigation */}
      <nav className="mt-16 pt-8 border-t border-neutral-800 flex gap-6 text-base text-neutral-400">
        <a href="/vault/privacy" className="hover:text-white transition-colors">Privacy</a>
        <span className="text-white">Terms</span>
        <a href="/vault/blog" className="hover:text-white transition-colors">Blog</a>
      </nav>
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
      <h2 className="mb-4 text-xl font-semibold text-white">
        {number}. {title}
      </h2>
      <div className="space-y-3">{children}</div>
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
      <h3 className="mb-2 text-lg font-medium text-white">{title}</h3>
      <div>{children}</div>
    </div>
  );
}
