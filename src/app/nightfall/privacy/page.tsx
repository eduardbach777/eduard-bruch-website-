export const metadata = {
  title: "Privacy Policy — Nightfall",
  description:
    "Privacy policy for Nightfall - Undead Survivor by Eduard Bruch.",
};

const Link = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-indigo-400 underline"
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
  >
    {children}
  </a>
);

export default function NightfallPrivacy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">Privacy Policy</h1>
      <p className="mb-2 text-lg text-neutral-300">
        Nightfall - Undead Survivor
      </p>
      <p className="mb-10 text-sm text-neutral-500">
        Last updated: August 3, 2026
      </p>

      <p className="mb-6">
        This policy explains how Nightfall (&quot;the App&quot;), published by
        Eduard Bruch, handles information when you play, use cloud save or
        leaderboards, view ads, sign in with Apple, or make a purchase.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        1. Data Controller
      </h2>
      <p className="mb-1">Eduard Bruch</p>
      <p className="mb-1">Kleinfeld 28c, 21149 Hamburg, Germany</p>
      <p className="mb-6">
        Email: <Link href="mailto:support@eduardbruch.com">support@eduardbruch.com</Link>
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        2. Information the App Processes
      </h2>
      <ul className="mb-6 list-disc space-y-2 pl-6">
        <li>
          <strong>Game progress and cloud saves:</strong> inventory, currency,
          unlocks, settings, and progress are stored on your device and backed
          up using a randomly generated player ID. Apple iCloud key-value
          storage may also hold a copy when iCloud is available.
        </li>
        <li>
          <strong>Leaderboards:</strong> your chosen player name, score, title,
          and pseudonymous player ID are sent when you use leaderboard features.
        </li>
        <li>
          <strong>Optional Sign in with Apple:</strong> if you choose account
          backup, the App receives Apple&apos;s stable user identifier. It does
          not request your name or email address.
        </li>
        <li>
          <strong>Purchases:</strong> Apple processes payment. RevenueCat
          receives purchase receipts, transaction information, product IDs,
          and a pseudonymous app-user ID to unlock and restore purchases.
        </li>
        <li>
          <strong>Advertising:</strong> Google AdMob may process device and
          advertising identifiers, IP address, approximate location derived
          from IP, ad interactions, and diagnostics. Tracking or personalized
          advertising is used only where you have given the required consent.
        </li>
      </ul>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        3. Purposes and Legal Bases
      </h2>
      <ul className="mb-6 list-disc space-y-2 pl-6">
        <li>
          Provide gameplay, saves, leaderboards, purchases, and restoration:
          performance of the service or contract (GDPR Art. 6(1)(b)).
        </li>
        <li>
          Prevent fraud, protect purchases, and secure online features:
          legitimate interests (GDPR Art. 6(1)(f)).
        </li>
        <li>
          Personalized advertising and tracking, where offered: consent (GDPR
          Art. 6(1)(a)). You can refuse tracking without losing access to the
          game.
        </li>
      </ul>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        4. Service Providers
      </h2>
      <p className="mb-4">The App uses the following processors:</p>
      <ul className="mb-6 list-disc space-y-2 pl-6">
        <li>
          Apple for App Store payments, iCloud, and optional Sign in with Apple
        </li>
        <li>
          <Link href="https://www.revenuecat.com/privacy">RevenueCat</Link> for
          purchase and subscription management
        </li>
        <li>
          <Link href="https://policies.google.com/privacy">Google AdMob</Link>{" "}
          for advertising
        </li>
        <li>
          <Link href="https://www.cloudflare.com/privacypolicy/">Cloudflare</Link>{" "}
          for cloud saves and leaderboards
        </li>
      </ul>
      <p className="mb-6">
        We do not sell your personal information. Providers may process data
        outside the EU/EEA using legally recognized transfer safeguards.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        5. Advertising Choices
      </h2>
      <p className="mb-6">
        On iOS, the App asks for permission before allowing cross-app tracking.
        You can change this later in iOS Settings &rarr; Privacy &amp; Security
        &rarr; Tracking. Where required, the App also presents Google&apos;s
        consent choices and a way to revisit them. Refusing consent may result
        in non-personalized or limited ads.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        6. Retention and Deletion
      </h2>
      <p className="mb-6">
        Local data remains until you delete the App or clear its data. Cloud
        save, leaderboard, Apple-link, and purchase records are retained while
        needed to operate and secure those features, meet legal obligations,
        and preserve purchased currency and entitlements. To request deletion
        of server-side data, email support with your Nightfall player name and,
        if available, your player ID. Some transaction records may need to be
        retained for legal or fraud-prevention purposes.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        7. Your Rights
      </h2>
      <p className="mb-6">
        Depending on where you live, you may request access, correction,
        deletion, restriction, portability, or objection, and withdraw consent
        at any time. Contact <Link href="mailto:support@eduardbruch.com">support@eduardbruch.com</Link>.
        EU/EEA users may also complain to their local supervisory authority,
        including the Hamburg Commissioner for Data Protection and Freedom of
        Information.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        8. Children
      </h2>
      <p className="mb-6">
        Nightfall is not directed to children under 13. We do not knowingly
        collect personal information from children under 13. If you believe a
        child has provided information, contact us so we can delete it.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        9. Changes
      </h2>
      <p>
        We may update this policy when the App, its providers, or legal
        requirements change. The latest version will remain available here.
      </p>
    </main>
  );
}

