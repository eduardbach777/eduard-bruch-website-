export const metadata = {
  title: "Warden — Privacy Policy",
  description:
    "Privacy Policy for the Warden family location & safety app by Eduard Bruch.",
};

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-sm font-light tracking-[0.15em] text-white mb-6 uppercase">
    {children}
  </h2>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-6 text-sm leading-relaxed text-white/60">{children}</p>
);

const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <p className="mb-4 text-sm leading-relaxed text-white/60">
    <span className="text-white/85">{label}</span> — {children}
  </p>
);

export default function WardenPrivacy() {
  return (
    <main className="max-w-3xl mx-auto px-8 md:px-12 pt-44 pb-32 text-neutral-200">
      <h1 className="text-2xl md:text-3xl font-light tracking-[0.2em] mb-6 text-white">
        WARDEN — PRIVACY POLICY
      </h1>
      <p className="text-sm text-white/40 tracking-[0.1em] mb-2">
        App: Warden — Family Location &amp; Safety
      </p>
      <p className="text-xs text-white/25 tracking-[0.1em] mb-20">
        Last updated: 22 July 2026
      </p>

      <H2>1. Who we are</H2>
      <P>
        Warden (&quot;Warden&quot;, &quot;we&quot;, &quot;us&quot;) is a family location and
        safety app operated by Eduard Bruch, Kleinfeld 28c, 21149 Hamburg, Germany. For any
        privacy question or request, contact{" "}
        <a
          href="mailto:support@eduardbruch.com"
          className="text-white/60 underline underline-offset-4 decoration-white/20 hover:text-white transition-colors"
        >
          support@eduardbruch.com
        </a>
        .
      </P>

      <H2>2. Who this is for — and children</H2>
      <P>
        Warden connects a parent/guardian and a child (or other family members) so they can see
        each other on a shared map and reach each other in an emergency. The parent/guardian sets
        up the family and invites members with a one-time code. Every member&apos;s device shows a
        consent screen before any location is shared and states clearly who can see their
        location. A child can leave the family and stop sharing at any time from their own device.
      </P>
      <P>
        Because Warden processes a child&apos;s location, the parent/guardian is responsible for
        obtaining any consent required for their child and for using Warden lawfully. In the
        EU/EEA we rely on the consent of the holder of parental responsibility where required
        (GDPR Art. 8); the age of digital consent varies by country (e.g. 16 in Germany). Warden
        is not intended for children to install without a parent/guardian&apos;s involvement.
        Warden is not a substitute for emergency services — in an emergency, always call your
        local emergency number.
      </P>

      <H2>3. What data we collect</H2>
      <P>
        We collect only what the app needs to work. We do not use advertising, and we do not
        embed any third-party analytics, tracking, or ad SDKs.
      </P>
      <Row label="Precise location">
        GPS latitude/longitude, accuracy and speed from each member&apos;s device (including in
        the background) — to show family on the map, trigger place arrival/departure alerts,
        locate-now and SOS. A downsampled location history is kept up to 30 days (a premium
        feature).
      </Row>
      <Row label="Battery level">the device battery percentage, for low-battery alerts.</Row>
      <Row label="Physical activity (motion)">
        processed on the device only to adjust GPS frequency for battery life; it is never
        transmitted to our servers.
      </Row>
      <Row label="Profile info">
        the first name/nickname you enter, your family name, and the invite code.
      </Row>
      <Row label="Messages &amp; events">
        text/quick messages between family members, and safety events (arrivals, departures,
        check-ins, SOS, inactivity).
      </Row>
      <Row label="Push token">an Apple (APNs) or Google (FCM) identifier, to send notifications.</Row>
      <Row label="Apple identifier (optional)">
        if you use &quot;Sign in with Apple&quot; to secure/recover your account, we store the
        stable Apple identifier only. We do not receive or store your email or name from Apple.
      </Row>
      <Row label="Purchase status">
        subscription/entitlement status and a purchase identifier, via our payment providers.
      </Row>
      <P>
        We do not collect your email address, contacts, photos, browsing history or audio. Warden
        has no &quot;listen-in&quot;/ambient-audio feature.
      </P>

      <H2>4. How we use it</H2>
      <P>
        Only to: show family members on a map; send safety alerts and messages; provide SOS and
        check-in; manage subscriptions; secure and recover accounts; keep the service working and
        free of abuse; and comply with law. We do not sell your data and do not use it for
        advertising or profiling. Legal bases (GDPR) are your consent, performance of the service,
        and our legitimate interest in a safe, working product.
      </P>

      <H2>5. Who we share it with</H2>
      <P>
        We share data only with the providers needed to run Warden, under contract and only for
        these purposes:
      </P>
      <Row label="Cloudflare, Inc.">hosting &amp; database (Cloudflare Workers + D1) that store your family&apos;s data.</Row>
      <Row label="Apple Inc.">push notifications (APNs), Sign in with Apple, and App Store purchases.</Row>
      <Row label="Google LLC">
        push notifications (Firebase Cloud Messaging), Google Play purchases, and, on Android, the
        Google Maps SDK (which receives location to render the map).
      </Row>
      <Row label="RevenueCat, Inc.">subscription management (receives a purchase and app-user identifier).</Row>
      <P>
        We may disclose data if required by law or to protect users&apos; safety. We do not
        otherwise share your data. Some providers may process data outside the EU/EEA, including
        in the United States, under appropriate safeguards (e.g. EU Standard Contractual Clauses).
      </P>

      <H2>6. How long we keep it</H2>
      <P>
        Live location is continuously overwritten (we keep the latest position). Location history
        is automatically deleted after 30 days. Account, family, message and profile data are
        kept until you delete your account or leave the family. You can delete your account and
        all associated data at any time from Settings → Delete account in the app.
      </P>

      <H2>7. Security</H2>
      <P>
        Data is encrypted in transit (TLS/HTTPS) and at rest on our providers&apos;
        infrastructure, and access is authenticated with per-device tokens. Warden is not
        end-to-end encrypted: to show a member&apos;s location to the rest of the family, our
        servers necessarily process that location. We minimise data by default (history is
        downsampled, only stored for premium families, and auto-deleted).
      </P>

      <H2>8. Your rights</H2>
      <P>
        Under the GDPR (and similar laws) you can access, correct, delete, restrict or object to
        processing of your data, request portability, and withdraw consent at any time. You can do
        the core of this in the app (delete account, leave family, revoke the location permission
        in your OS settings) or contact{" "}
        <a
          href="mailto:support@eduardbruch.com"
          className="text-white/60 underline underline-offset-4 decoration-white/20 hover:text-white transition-colors"
        >
          support@eduardbruch.com
        </a>
        . You may also complain to your local data-protection authority.
      </P>

      <H2>9. Changes &amp; contact</H2>
      <P>
        We may update this policy; we will change the &quot;Last updated&quot; date and, for
        material changes, notify you in the app. Questions: Eduard Bruch, Kleinfeld 28c, 21149
        Hamburg, Germany — support@eduardbruch.com.
      </P>
    </main>
  );
}
