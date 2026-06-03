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
        Last updated: June 3, 2026
      </p>

      <p className="mb-6">
        This privacy policy applies to all spiritual and entertainment
        applications published under the Esotherik brand by Eduard Bruch,
        including: Aurum Tarot, SpellBook, Witch&apos;s Herbal, Tarot Reader,
        Aura Reader, Daily Horoscope, Dream Dictionary, Human Design,
        Manifestation Timer, Moon Calendar, Palm Reader, Witch&apos;s Calendar,
        Zodiac Compatibility, Affirmation Cards, Astrology Memes, Biorhythm,
        Birth Chart, Chakra Scanner, Chinese Zodiac, Coffee Cup Reading, Face
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
        leaves your device and is strictly necessary for the functioning of
        the Apps (§ 25(2) Nr. 2 TTDSG).
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">
        2.2 Subscription Data
      </h3>
      <p className="mb-4">
        If you purchase a subscription, the transaction is processed by Apple
        through the App Store. We use RevenueCat, Inc. (USA) as a data
        processor to verify your subscription status. RevenueCat receives
        anonymized transaction data (purchase tokens, transaction IDs, and a
        pseudonymous app user ID). We do not have access to your payment
        information. RevenueCat retains this data for the duration of your
        subscription and a reasonable period thereafter for legal obligations.
        Legal basis: Art. 6(1)(b) GDPR (performance of a contract). Data
        transfer to the USA is secured under the EU-U.S. Data Privacy
        Framework. See{" "}
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
        2.5 Journal Entries (Dream Dictionary, Lucid Dreaming, Aurum Tarot)
      </h3>
      <p className="mb-4">
        Dream journal entries, tarot reading history, and personal notes are
        stored on your device only. They are not transmitted externally. This
        data is retained until you delete it via the app&apos;s &quot;Delete All
        My Data&quot; function or by uninstalling the app.
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">
        2.6 AI-Powered Interpretations (Aurum Tarot)
      </h3>
      <p className="mb-4">
        Aurum Tarot offers optional AI-powered tarot interpretations as a
        premium feature. When you request an AI interpretation, the following
        data is sent to our server for processing:
      </p>
      <ul className="mb-4 list-disc pl-6 space-y-1">
        <li>Card names, positions, and orientation (upright/reversed)</li>
        <li>Your question or intention (if entered)</li>
        <li>Your selected mood (if entered)</li>
        <li>A pseudonymous device identifier for rate limiting</li>
      </ul>
      <p className="mb-4">
        This data is processed by our Cloudflare Worker (EU/US infrastructure)
        which forwards it to <strong>DeepSeek</strong>, a third-party AI
        service operated by DeepSeek Inc. (People&apos;s Republic of China),
        to generate the interpretation. DeepSeek&apos;s servers are located in
        China and are subject to Chinese data protection laws (PIPL,
        Cybersecurity Law). <strong>There is no adequacy decision by the
        European Commission for China</strong>, meaning the level of data
        protection may not be equivalent to that in the EU/EEA. In particular,
        Chinese authorities may have access to data under local law.
      </p>
      <p className="mb-4">
        <strong>No personal information</strong> (name, email, account data) is
        included in the data sent. We do not store your questions or AI
        responses on our servers. The AI response is returned directly to your
        device and saved locally. For DeepSeek&apos;s own data handling
        practices, please refer to{" "}
        <a
          href="https://www.deepseek.com/privacy"
          className="text-indigo-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          DeepSeek&apos;s Privacy Policy
        </a>
        .
      </p>
      <p className="mb-4">
        Before your first AI interpretation, the app will ask for your explicit
        consent. You can use all other app features without any data leaving
        your device. You may withdraw your consent at any time by deleting
        your data in the app settings. Legal basis: Art. 6(1)(a) GDPR (your
        explicit consent); data transfer to China: Art. 49(1)(a) GDPR
        (explicit consent after being informed of the risks).
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">
        2.7 Analytics and Tracking
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
          notification permissions, AI interpretation data transfer (Aurum
          Tarot).
        </li>
        <li>
          <strong>Art. 6(1)(b) GDPR — Contract:</strong> Subscription
          processing, core app functionality.
        </li>
        <li>
          <strong>§ 25(2) Nr. 2 TTDSG:</strong> Storing app preferences on
          your device (strictly necessary for the service).
        </li>
      </ul>

      {/* 5. Data Sharing */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        5. Data Sharing and International Transfers
      </h2>
      <p className="mb-4">
        We do not sell, rent, or share your personal data with third parties for
        marketing purposes. Third-party services that may receive data:
      </p>
      <ul className="mb-6 list-disc pl-6 space-y-2">
        <li>
          <strong>RevenueCat, Inc.</strong> (USA) — subscription verification.
          Data transfer to the USA is secured under the EU-U.S. Data Privacy
          Framework (adequacy decision of July 10, 2023). See{" "}
          <a href="https://www.revenuecat.com/privacy" className="text-indigo-400 underline" target="_blank" rel="noopener noreferrer">RevenueCat&apos;s Privacy Policy</a>.
        </li>
        <li>
          <strong>Cloudflare, Inc.</strong> (USA) — request routing and rate
          limiting for AI interpretations. Data transfer secured under the
          EU-U.S. Data Privacy Framework.
        </li>
        <li>
          <strong>DeepSeek Inc.</strong> (People&apos;s Republic of China) — AI
          interpretation processing in Aurum Tarot only, when you explicitly
          request an AI reading. No adequacy decision exists for China. Data
          transfer is based on your explicit consent after being informed of
          the risks (Art. 49(1)(a) GDPR). See section 2.6 for details.
        </li>
      </ul>

      {/* 6. Data Retention */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        6. Data Retention
      </h2>
      <ul className="mb-6 list-disc pl-6 space-y-2">
        <li>
          <strong>On-device data</strong> (readings, journal, preferences):
          Retained until you delete it via &quot;Delete All My Data&quot; in
          Settings or by uninstalling the app.
        </li>
        <li>
          <strong>Subscription data</strong> (RevenueCat): Retained for the
          duration of your subscription and as required by applicable tax and
          accounting laws.
        </li>
        <li>
          <strong>AI interpretation requests</strong>: Not stored on our
          servers. Cloudflare rate-limiting data (pseudonymous device ID and IP
          address) expires automatically after 1 hour.
        </li>
      </ul>

      {/* 7. CCPA */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        7. California Residents (CCPA)
      </h2>
      <p className="mb-6">
        We do not sell personal information. We do not share personal
        information for cross-context behavioral advertising. California
        residents may contact us at support@eduardbruch.com to exercise their
        rights under the CCPA.
      </p>

      {/* 8. Your Rights */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        8. Your Rights (GDPR)
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
          settings (&quot;Delete All My Data&quot;) or by uninstalling the app.
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
          any time without affecting the lawfulness of prior processing. You
          can withdraw AI consent by deleting your data in the app settings.
        </li>
      </ul>

      {/* 9. Complaint */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        9. Right to Lodge a Complaint
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

      {/* 10. Children */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        10. Children&apos;s Privacy
      </h2>
      <p className="mb-6">
        The Apps are not directed at children under the age of 16. We do not
        knowingly collect personal information from children under 16 (GDPR
        Art. 8) or under 13 (COPPA). If you believe a child has provided us
        with personal information, please contact us so we can take appropriate
        action.
      </p>

      {/* 11. Changes */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        11. Changes to This Policy
      </h2>
      <p className="mb-6">
        We may update this privacy policy from time to time. Material changes
        will be communicated to you through the app before they take effect.
        The updated policy will be reflected on this page with an updated date.
      </p>

      {/* 12. Contact */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        12. Contact
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
