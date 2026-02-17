export const metadata = {
  title: "Privacy Policy — Esotherik Apps",
  description:
    "Privacy policy for all Esotherik spiritual and entertainment apps by Eduard Bruch.",
};

export default function EsotherikPrivacy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">Privacy Policy</h1>
      <p className="mb-2 text-lg text-neutral-300">Esotherik Apps</p>
      <p className="mb-10 text-sm text-neutral-500">
        Last updated: February 17, 2026
      </p>

      <p className="mb-6">
        This privacy policy applies to all spiritual and entertainment
        applications published under the Esotherik brand by Eduard Bruch,
        including: SpellBook, Witch&apos;s Herbal, Tarot Reader, Aura Reader,
        Daily Horoscope, Dream Dictionary, Human Design, Manifestation Timer,
        Moon Calendar, Palm Reader, Witch&apos;s Calendar, Zodiac
        Compatibility, Affirmation Cards, Astrology Memes, Biorhythm, Birth
        Chart, Chakra Scanner, Chinese Zodiac, Coffee Cup Reading, Face
        Reading, I Ching, Lucid Dreaming, Mercury Retrograde, Numerology,
        Oracle Cards, Past Life, Pendulum, Reiki Timer, Rune Reading, Sigil
        Generator, Smudging Guide, Soul Name, Sound Healing, Spirit Animal, and
        Vedic Astrology (collectively, &quot;the Apps&quot;).
      </p>

      {/* 1. Data Controller */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        1. Data Controller
      </h2>
      <p className="mb-1">Eduard Bruch</p>
      <p className="mb-1">Kleinfeld 28c, 21149 Hamburg, Germany</p>
      <p className="mb-6">
        Email:{" "}
        <a
          href="mailto:support@eduardbruch.com"
          className="text-indigo-400 underline"
        >
          support@eduardbruch.com
        </a>
      </p>

      {/* 2. Data We Collect */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        2. Data We Collect
      </h2>

      <h3 className="mb-2 mt-4 font-medium text-white">
        2.1 App Preferences (All Apps)
      </h3>
      <p className="mb-4">
        We store your app preferences (theme, notification settings, feature
        selections) using on-device storage (UserDefaults). This data never
        leaves your device.
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">
        2.2 Subscription Data
      </h3>
      <p className="mb-4">
        If you purchase a subscription, the transaction is processed by Apple
        through the App Store. We use RevenueCat, Inc. (USA) as a data
        processor to verify your subscription status. RevenueCat receives
        anonymized transaction data (purchase tokens, transaction IDs, and an
        anonymous app user ID). We do not have access to your payment
        information. Legal basis: Art. 6(1)(b) GDPR (performance of a
        contract). See{" "}
        <a
          href="https://www.revenuecat.com/privacy"
          className="text-indigo-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          RevenueCat&apos;s Privacy Policy
        </a>
        .
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">
        2.3 Camera Images (Aura Reader, Face Reading, Palm Reader, Coffee Cup
        Reading)
      </h3>
      <p className="mb-4">
        Certain apps request camera access to provide their entertainment
        experience (e.g., palm reading, aura reading). <strong>Images are
        processed entirely on your device.</strong> They are not transmitted to
        any external server, not stored beyond the current session (unless you
        explicitly save a result), and are not used for any purpose other than
        generating the in-app reading. Legal basis: Art. 6(1)(a) GDPR (your
        consent via the iOS permission dialog).
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">
        2.4 Birth Date and Name (Numerology, Soul Name, Birth Chart, Vedic
        Astrology, Human Design)
      </h3>
      <p className="mb-4">
        Some apps ask for your birth date, birth time, birth location, or name
        to generate entertainment-based readings. This data is stored on your
        device only and is not transmitted to any server.
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">
        2.5 Journal Entries (Dream Dictionary, Lucid Dreaming)
      </h3>
      <p className="mb-4">
        Dream journal entries and personal notes are stored on your device only.
        They are not transmitted externally.
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">
        2.6 Analytics and Tracking
      </h3>
      <p className="mb-6">
        The Apps do <strong>not</strong> use any analytics, advertising, or
        tracking frameworks. No usage data is collected or transmitted.
      </p>

      {/* 3. Entertainment Purpose */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        3. Entertainment Purpose
      </h2>
      <p className="mb-6">
        All content provided by the Apps (tarot readings, horoscopes,
        numerology reports, aura analyses, etc.) is generated for{" "}
        <strong>entertainment and spiritual exploration purposes only</strong>.
        It does not constitute medical, psychological, legal, or financial
        advice.
      </p>

      {/* 4. Legal Basis */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        4. Legal Basis for Processing
      </h2>
      <ul className="mb-6 list-disc pl-6 space-y-2">
        <li>
          <strong>Art. 6(1)(a) GDPR — Consent:</strong> Camera access,
          notification permissions.
        </li>
        <li>
          <strong>Art. 6(1)(b) GDPR — Contract:</strong> Subscription
          processing, core app functionality.
        </li>
      </ul>

      {/* 5. Data Sharing */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        5. Data Sharing
      </h2>
      <p className="mb-6">
        We do not sell, rent, or share your personal data with third parties for
        marketing purposes. The only third-party service receiving any data is
        RevenueCat for subscription verification, as described above. Data
        transfer to the USA is secured under the EU-U.S. Data Privacy
        Framework.
      </p>

      {/* 6. CCPA */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        6. California Residents (CCPA)
      </h2>
      <p className="mb-6">
        We do not sell personal information. We do not share personal
        information for cross-context behavioral advertising. California
        residents may contact us at support@eduardbruch.com to exercise their
        rights under the CCPA.
      </p>

      {/* 7. Your Rights */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        7. Your Rights (GDPR)
      </h2>
      <p className="mb-3">
        Under the GDPR, you have the right to:
      </p>
      <ul className="mb-6 list-disc pl-6 space-y-2">
        <li>
          <strong>Access</strong> (Art. 15) — request what data we hold about
          you
        </li>
        <li>
          <strong>Rectification</strong> (Art. 16) — correct inaccurate data
        </li>
        <li>
          <strong>Erasure</strong> (Art. 17) — request deletion of your data.
          Since all data is on-device, you can delete it via the app&apos;s
          settings (&quot;Delete My Data&quot;) or by uninstalling the app.
        </li>
        <li>
          <strong>Restriction</strong> (Art. 18) — restrict processing
        </li>
        <li>
          <strong>Data Portability</strong> (Art. 20) — receive your data in a
          portable format
        </li>
        <li>
          <strong>Object</strong> (Art. 21) — object to processing
        </li>
        <li>
          <strong>Withdraw Consent</strong> (Art. 7(3)) — withdraw consent at
          any time without affecting the lawfulness of prior processing
        </li>
      </ul>

      {/* 8. Complaint */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        8. Right to Lodge a Complaint
      </h2>
      <p className="mb-2">
        You may lodge a complaint with the supervisory authority:
      </p>
      <p className="mb-1">
        Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit
      </p>
      <p className="mb-1">Ludwig-Erhard-Str. 22, 7. OG</p>
      <p className="mb-1">20459 Hamburg</p>
      <p className="mb-6">
        <a
          href="https://datenschutz-hamburg.de"
          className="text-indigo-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://datenschutz-hamburg.de
        </a>
      </p>

      {/* 9. Children */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        9. Children&apos;s Privacy
      </h2>
      <p className="mb-6">
        The Apps are not directed at children under the age of 13. We do not
        knowingly collect personal information from children under 13 (COPPA) or
        under 16 (GDPR). If you believe a child has provided us with personal
        information, please contact us so we can take appropriate action.
      </p>

      {/* 10. Changes */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        10. Changes to This Policy
      </h2>
      <p className="mb-6">
        We may update this privacy policy from time to time. Changes will be
        reflected on this page with an updated date.
      </p>

      {/* 11. Contact */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        11. Contact
      </h2>
      <p>
        For questions about this privacy policy or your data, contact:{" "}
        <a
          href="mailto:support@eduardbruch.com"
          className="text-indigo-400 underline"
        >
          support@eduardbruch.com
        </a>
      </p>
    </main>
  );
}
