export const metadata = {
  title: "Privacy Policy — Stash: Private Photo Vault",
  description:
    "Privacy policy for Stash: Private Photo Vault — encrypted file vault with disguise modes.",
};

export default function VaultPrivacy() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24 text-white text-lg leading-relaxed">
      {/* Header */}
      <header className="mb-12 border-b border-neutral-800 pb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-xl text-neutral-300">
          Stash: Private Photo Vault
        </p>
        <p className="mt-1 text-base text-neutral-400">
          Last updated: March 18, 2026
        </p>
      </header>

      <p className="mb-10">
        This privacy policy applies to the application &quot;Stash: Private
        Photo Vault&quot; (&quot;Stash&quot;, &quot;the App&quot;), published by
        Eduard Bruch. Stash is an encrypted file vault that allows users to
        securely store photos, videos, documents, audio files, and other files
        on their device. The App includes disguise modes (calculator, fitness
        tracker, music player), a decoy vault, intruder detection, a private
        browser, and secure notes.
      </p>

      <p className="mb-10">
        We take your privacy seriously. This policy explains in detail what data
        the App collects, how it is processed, where it is stored, and what
        rights you have.
      </p>

      {/* 1 */}
      <Section number="1" title="Data Controller">
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
      </Section>

      {/* 2 */}
      <Section number="2" title="Fundamental Principle: On-Device Only">
        <p>
          <strong>
            We do not operate any servers that receive, store, or process your
            data.
          </strong>{" "}
          All vault content — including photos, videos, documents, audio files,
          notes, browsing data, and settings — is stored exclusively on your
          device. We have no technical ability to access, view, retrieve, or
          recover any of your encrypted data. We cannot see what you store, how
          you use the App, or how often you open it.
        </p>
      </Section>

      {/* 3 */}
      <Section number="3" title="Data We Collect and Process">
        <SubSection title="3.1 Vault Content (Photos, Videos, Documents, Audio, Files)">
          <p>
            Files you import into the vault — including photos, videos, PDFs,
            documents, MP3s, audio files, and any other file type — are
            encrypted using <strong>AES-256-CBC encryption</strong> with a
            randomly generated 256-bit key and per-file initialization vectors
            (IV). Encrypted files are stored locally in the App&apos;s sandboxed
            storage directory. The encryption key is stored in the{" "}
            <strong>iOS Keychain</strong> (or Android Keystore on Android
            devices), protected by the operating system&apos;s hardware-backed
            security.
          </p>
          <p className="mt-3">
            Files are <strong>never transmitted</strong> to any external server,
            cloud service, or third party. Thumbnails for photos are also
            encrypted and stored locally. Non-image files (documents, audio,
            etc.) do not generate thumbnails.
          </p>
        </SubSection>

        <SubSection title="3.2 PIN Code">
          <p>
            Your PIN is stored as a{" "}
            <strong>salted SHA-256 cryptographic hash</strong> in the
            device&apos;s local database. A unique random salt is generated for
            each PIN and stored alongside the hash. The original PIN is never
            stored in plaintext. Because SHA-256 is a one-way hash function and
            the salt prevents precomputed attacks, your PIN cannot be
            reverse-engineered, recovered, or read by us or anyone else —
            including law enforcement.
          </p>
          <p className="mt-3">
            To protect against brute-force attacks, the App enforces a lockout
            policy after multiple failed PIN attempts: 30 seconds after 5
            failed attempts, 5 minutes after 10, and 30 minutes after 15 or
            more.
          </p>
        </SubSection>

        <SubSection title="3.3 Decoy PIN">
          <p>
            If you set up a decoy PIN, it is stored as a separate salted
            SHA-256 hash with its own unique salt, under the same conditions as
            the main PIN. The decoy PIN opens a separate vault containing only
            items you have explicitly marked as decoy content. This feature
            exists to provide plausible deniability under duress.
          </p>
        </SubSection>

        <SubSection title="3.4 Secure Notes">
          <p>
            Notes created within the App are encrypted on-device using the same
            AES-256-CBC encryption as vault files. Both the note title and
            content are encrypted before storage. Encrypted notes are never
            transmitted externally.
          </p>
        </SubSection>

        <SubSection title="3.5 Biometric Data (Face ID / Touch ID)">
          <p>
            If you enable biometric unlock, authentication is handled entirely
            by the operating system&apos;s LocalAuthentication framework (iOS)
            or BiometricPrompt API (Android). The App{" "}
            <strong>
              never receives, stores, processes, or transmits your biometric
              data
            </strong>
            . It receives only a boolean success or failure result from the
            operating system. No fingerprint templates, facial geometry, or
            biometric identifiers are accessible to the App at any time.
          </p>
        </SubSection>

        <SubSection title="3.6 Intruder Detection Photos">
          <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
            <p>
              When you enable the intruder detection feature (premium only) and
              an incorrect PIN is entered, the App captures a photograph using
              the device&apos;s front-facing camera. These photographs are:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                <span>
                  <strong>Encrypted</strong> using the same AES-256-CBC
                  encryption as vault files before being saved to disk
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                <span>
                  Stored <strong>locally on your device only</strong>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                <span>
                  <strong>Never transmitted</strong> to any external server or
                  third party
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                <span>
                  Accessible only after successful authentication within the App
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                <span>Deletable by you at any time from within the App</span>
              </li>
            </ul>
            <p className="mt-3 text-base text-neutral-300">
              The intruder detection feature is disabled by default and requires
              your explicit opt-in. It captures only when triggered by a failed
              PIN attempt, not continuously.
            </p>
            <p className="mt-3 text-base text-neutral-300">
              Legal basis: Art. 6(1)(a) GDPR (your explicit consent when
              enabling the feature) and Art. 6(1)(f) GDPR (legitimate interest
              in protecting the security of your device and personal data).
            </p>
          </div>
        </SubSection>

        <SubSection title="3.7 Disguise Modes">
          <p>
            Stash includes three disguise modes: a fully functional calculator,
            a fitness tracker, and a music player. Each disguise stores
            non-sensitive surface-level data (calculator history, simulated step
            counts, or music library metadata) locally on your device. This data
            exists solely to make the disguise appear genuine and is never
            transmitted externally.
          </p>
        </SubSection>

        <SubSection title="3.8 Private Browser">
          <p>
            The built-in private browser uses a standard WebView component.
            Browsing history (URLs and page titles) is stored locally in the
            App&apos;s database and can be cleared at any time from within the
            App using the &quot;Clear browsing data&quot; option. Cookies and
            local storage created by visited websites are stored by the WebView
            engine and are also cleared when you clear browsing data. The App
            does not transmit your browsing activity to any external server.
            Websites you visit may independently collect data according to their
            own privacy policies.
          </p>
        </SubSection>

        <SubSection title="3.9 Recovery Email">
          <p>
            If you choose to provide a recovery email address, it is stored
            locally in plaintext in the App&apos;s database on your device. It
            is never transmitted to our servers or any third party. This feature
            is optional.
          </p>
        </SubSection>

        <SubSection title="3.10 Temporary Decrypted Files">
          <p>
            When you open a file to view or share it, the App temporarily writes
            a decrypted copy to the device&apos;s temporary directory. These
            temporary files are automatically deleted when the vault is locked,
            when the App moves to the background (if auto-lock is enabled), or
            when the operating system clears temporary storage.
          </p>
        </SubSection>

        <SubSection title="3.11 Recovery Key">
          <p>
            If you generate a recovery key, the App stores a{" "}
            <strong>salted SHA-256 hash</strong> of the key along with a
            PBKDF2-wrapped copy of your encryption master key (100,000
            iterations). The recovery key plaintext is shown to you once and is
            never stored by the App. The wrapped master key can only be
            unwrapped with the correct recovery key. This data is stored
            locally and never transmitted externally.
          </p>
        </SubSection>

        <SubSection title="3.12 Cloud Backup (iCloud / Google Drive)">
          <p>
            Stash offers optional encrypted backup to iCloud or Google Drive.
            When you create a backup, the App wraps your encryption master key
            using <strong>PBKDF2-HMAC-SHA256</strong> (100,000 iterations)
            derived from your PIN, then uploads the encrypted vault files, a
            copy of the database, and the wrapped key to your personal cloud
            storage account. All files remain AES-256 encrypted throughout.
          </p>
          <p className="mt-3">
            We do not have access to your iCloud or Google Drive account. The
            backup is stored in your personal cloud storage and can only be
            decrypted with your PIN. Backups are initiated manually by you and
            are never created automatically.
          </p>
        </SubSection>

        <SubSection title="3.13 App Settings and Preferences">
          <p>
            Your app settings (disguise mode selection, biometrics toggle,
            intruder detection toggle, auto-lock preferences, etc.) are stored
            locally in the App&apos;s SQLite database. These are never
            transmitted externally.
          </p>
        </SubSection>
      </Section>

      {/* 4 */}
      <Section number="4" title="Subscription Data and Third-Party Services">
        <SubSection title="4.1 In-App Purchases">
          <p>
            Subscriptions and one-time purchases are processed by{" "}
            <strong>Apple (App Store)</strong> or{" "}
            <strong>Google (Google Play)</strong>. We do not have access to your
            payment information, credit card number, or billing address.
            Subscription status is verified through{" "}
            <strong>RevenueCat, Inc.</strong> (San Francisco, USA), which
            receives anonymized transaction identifiers from Apple or Google to
            confirm your subscription status.
          </p>
          <p className="mt-3">
            RevenueCat does not receive any vault content, personal files, PIN,
            biometric data, or personal identifying information beyond what
            Apple or Google provides as part of the standard purchase
            verification process.
          </p>
          <p className="mt-3">
            Legal basis: Art. 6(1)(b) GDPR (performance of contract). Data
            transfer to the USA is covered by the EU-U.S. Data Privacy
            Framework. See{" "}
            <a
              href="https://www.revenuecat.com/privacy"
              className="text-indigo-400 hover:text-indigo-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              RevenueCat&apos;s Privacy Policy
            </a>
            .
          </p>
        </SubSection>

        <SubSection title="4.2 iCloud and Google Drive (Optional Backup)">
          <p>
            If you choose to use the cloud backup feature, encrypted backup
            data is uploaded to your personal iCloud (Apple) or Google Drive
            (Google) account. Authentication with Google Drive uses the
            standard Google Sign-In SDK. We do not receive or store your Google
            or Apple credentials. The backup data stored in your cloud account
            is fully encrypted and cannot be read without your PIN.
          </p>
          <p className="mt-3">
            Legal basis: Art. 6(1)(a) GDPR (your explicit consent when
            initiating a backup). See{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-indigo-400 hover:text-indigo-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google&apos;s Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://www.apple.com/legal/privacy/"
              className="text-indigo-400 hover:text-indigo-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple&apos;s Privacy Policy
            </a>
            .
          </p>
        </SubSection>

        <SubSection title="4.3 Google Fonts">
          <p>
            The App uses Google Fonts for typography. Font files may be
            downloaded from Google&apos;s servers on first launch. This is a
            standard HTTP request that does not transmit personal data. See{" "}
            <a
              href="https://developers.google.com/fonts/faq/privacy"
              className="text-indigo-400 hover:text-indigo-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Fonts Privacy FAQ
            </a>
            .
          </p>
        </SubSection>
      </Section>

      {/* 5 */}
      <Section number="5" title="Analytics, Tracking, and Advertising">
        <p>
          The App does <strong>not</strong> use any analytics frameworks (no
          Firebase Analytics, no Crashlytics, no Mixpanel, no Amplitude, no
          Flurry, or similar). The App does <strong>not</strong> contain any
          advertising SDKs or ad networks. The App does <strong>not</strong>{" "}
          track your usage behavior, feature interactions, session duration, or
          any other telemetry. No usage data is collected, stored, or
          transmitted. We have zero visibility into how you use the App.
        </p>
      </Section>

      {/* 6 */}
      <Section number="6" title="Device Permissions">
        <p className="mb-4">
          The App requests the following device permissions, each for a specific
          and limited purpose:
        </p>
        <div className="space-y-4">
          <PermissionRow
            permission="Photo Library (Read)"
            purpose="Import photos and videos from your gallery into the encrypted vault"
          />
          <PermissionRow
            permission="Photo Library (Write)"
            purpose="Export decrypted items back to your gallery (user-initiated only)"
          />
          <PermissionRow
            permission="Camera"
            purpose="Capture intruder detection photos on failed unlock attempts (opt-in feature)"
          />
          <PermissionRow
            permission="Face ID / Touch ID"
            purpose="Optional biometric vault unlock. No biometric data is accessed by the App."
          />
          <PermissionRow
            permission="Microphone"
            purpose="Required by the system when importing videos that contain audio tracks. The App does not record audio."
          />
          <PermissionRow
            permission="File Access"
            purpose="Import files (PDFs, documents, audio, etc.) from the device file system via the system file picker"
          />
        </div>
        <p className="mt-4 text-base text-neutral-400">
          All permissions are requested at runtime and can be revoked at any
          time through your device&apos;s Settings app. The App functions with
          reduced capability if permissions are denied.
        </p>
      </Section>

      {/* 7 */}
      <Section number="7" title="Data Sharing">
        <p>
          We do not sell, rent, lease, trade, or share your personal data with
          any third party. The only third-party services that receive any data
          are RevenueCat for subscription verification (Section 4.1) and,
          optionally, iCloud or Google Drive for encrypted backups you
          explicitly initiate (Section 4.2). No vault content is ever shared
          in unencrypted form. No biometric information is ever shared with
          anyone.
        </p>
      </Section>

      {/* 8 */}
      <Section number="8" title="Data Retention and Deletion">
        <p>
          All data is stored on your device for as long as the App is installed.
          You can delete individual items, notes, albums, intruder photos, and
          browser data at any time from within the App. You can delete all App
          data at once using the &quot;Reset Vault&quot; option in the
          App&apos;s settings. Uninstalling the App permanently deletes all
          locally stored data, including encrypted files and the encryption key.
          Once deleted, encrypted data cannot be recovered by anyone.
        </p>
      </Section>

      {/* 9 */}
      <Section number="9" title="Data Security">
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              <strong>Encryption algorithm:</strong> AES-256-CBC with PKCS7
              padding
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              <strong>Encryption key:</strong> 256-bit key generated using a
              cryptographically secure random number generator, stored in the
              iOS Keychain (KeychainAccessibility.first_unlock) or Android
              Keystore
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              <strong>Initialization vectors:</strong> Unique 16-byte IV
              randomly generated for each encryption operation and prepended to
              ciphertext
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              <strong>PIN storage:</strong> Salted SHA-256 one-way hash with a
              unique random salt per PIN — not reversible
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              <strong>Brute-force protection:</strong> Exponential lockout
              after failed PIN attempts (30s at 5 attempts, 5min at 10, 30min
              at 15+)
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              <strong>Recovery key:</strong> PBKDF2-HMAC-SHA256 with 100,000
              iterations for master key wrapping
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              <strong>Intruder photos:</strong> Encrypted with AES-256-CBC
              before being written to disk
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              <strong>File naming:</strong> Encrypted files use randomized UUID
              filenames that reveal no information about the original file
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              <strong>In-memory caching:</strong> Decrypted data is temporarily
              held in memory for display and cleared when the vault is locked
            </span>
          </li>
        </ul>
      </Section>

      {/* 10 */}
      <Section number="10" title="Your Rights Under GDPR">
        <p className="mb-4">
          If you are located in the European Economic Area (EEA), the United
          Kingdom, or Switzerland, you have the following rights under the
          General Data Protection Regulation:
        </p>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              <strong>Access</strong> (Art. 15) — request confirmation of what
              data we process. Because all data is stored on your device only,
              we hold no personal data about you on our systems.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              <strong>Rectification</strong> (Art. 16) — correct inaccurate data
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              <strong>Erasure</strong> (Art. 17) — delete your data via the
              App&apos;s settings or by uninstalling the App
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              <strong>Restriction of Processing</strong> (Art. 18) — restrict
              processing of your data
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              <strong>Data Portability</strong> (Art. 20) — receive your data in
              a portable format
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              <strong>Objection</strong> (Art. 21) — object to processing based
              on legitimate interest
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              <strong>Withdraw Consent</strong> (Art. 7(3)) — withdraw consent
              at any time, for example by disabling intruder detection
            </span>
          </li>
        </ul>
        <p className="mt-4">
          To exercise any of these rights, contact us at{" "}
          <a
            href="mailto:support@eduardbruch.com"
            className="text-indigo-400 hover:text-indigo-300 underline"
          >
            support@eduardbruch.com
          </a>
          .
        </p>
      </Section>

      {/* 11 */}
      <Section number="11" title="California Residents (CCPA / CPRA)">
        <p>
          If you are a California resident, you have additional rights under the
          California Consumer Privacy Act (CCPA) and the California Privacy
          Rights Act (CPRA):
        </p>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              We do <strong>not sell</strong> your personal information.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              We do <strong>not share</strong> your personal information for
              cross-context behavioral advertising.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            <span>
              We do <strong>not use</strong> sensitive personal information for
              purposes beyond what is necessary to provide the App.
            </span>
          </li>
        </ul>
        <p className="mt-3">
          California residents may contact{" "}
          <a
            href="mailto:support@eduardbruch.com"
            className="text-indigo-400 hover:text-indigo-300 underline"
          >
            support@eduardbruch.com
          </a>{" "}
          to exercise their CCPA/CPRA rights.
        </p>
      </Section>

      {/* 12 */}
      <Section number="12" title="Right to Lodge a Complaint">
        <p>
          If you believe your data protection rights have been violated, you
          have the right to lodge a complaint with a supervisory authority. Our
          competent authority is:
        </p>
        <div className="mt-3">
          <p>
            Der Hamburgische Beauftragte f&uuml;r Datenschutz und
            Informationsfreiheit
          </p>
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
        </div>
      </Section>

      {/* 13 */}
      <Section number="13" title="Children's Privacy">
        <p>
          The App is not directed at children under the age of 13 (as defined by
          COPPA) or under the age of 16 (as defined by GDPR). We do not
          knowingly collect personal information from children. If we become
          aware that a child has provided personal information, we will take
          steps to delete such information.
        </p>
      </Section>

      {/* 14 */}
      <Section number="14" title="International Data Transfers">
        <p>
          International data transfers occur through RevenueCat (USA) for
          subscription verification and, if you opt in, through Apple (iCloud)
          or Google (Google Drive) for encrypted backups. These transfers are
          protected under the EU-U.S. Data Privacy Framework. All backup data
          transferred to cloud services remains AES-256 encrypted. All other
          data remains on your device and is never transferred internationally.
        </p>
      </Section>

      {/* 15 */}
      <Section number="15" title="Changes to This Policy">
        <p>
          We may update this privacy policy from time to time to reflect changes
          in the App, applicable law, or our practices. Changes will be
          reflected on this page with an updated &quot;Last updated&quot; date.
          We encourage you to review this policy periodically. Your continued
          use of the App after changes constitutes acceptance of the updated
          policy.
        </p>
      </Section>

      {/* 16 */}
      <Section number="16" title="Contact">
        <p>
          For questions, concerns, or requests regarding this privacy policy or
          your data, contact:
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

function PermissionRow({
  permission,
  purpose,
}: {
  permission: string;
  purpose: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
      <span>
        <strong>{permission}:</strong> {purpose}
      </span>
    </div>
  );
}
