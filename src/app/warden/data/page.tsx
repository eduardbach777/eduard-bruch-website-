export const metadata = {
  title: "Warden — Data Policy",
  description:
    "A plain-language summary of what data the Warden family safety app collects and why.",
};

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-sm font-light tracking-[0.15em] text-white mb-6 uppercase">
    {children}
  </h2>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-6 text-sm leading-relaxed text-white/60">{children}</p>
);

const Item = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <p className="mb-4 text-sm leading-relaxed text-white/60">
    <span className="text-white/85">{label}</span> — {children}
  </p>
);

export default function WardenData() {
  return (
    <main className="max-w-3xl mx-auto px-8 md:px-12 pt-44 pb-32 text-neutral-200">
      <h1 className="text-2xl md:text-3xl font-light tracking-[0.2em] mb-6 text-white">
        WARDEN — DATA POLICY
      </h1>
      <p className="text-sm text-white/40 tracking-[0.1em] mb-2">
        A plain-language summary of the data Warden collects.
      </p>
      <p className="text-xs text-white/25 tracking-[0.1em] mb-20">
        Last updated: 22 July 2026 · See also the{" "}
        <a
          href="/warden/privacy"
          className="underline underline-offset-4 decoration-white/20 hover:text-white transition-colors"
        >
          full Privacy Policy
        </a>
      </p>

      <H2>Data we collect</H2>
      <P>
        All data below is used only to make the app work, is encrypted in transit, and can be
        deleted at any time (Settings → Delete account). We do not use ads or third-party
        analytics, and we do not sell data or use it to track you across other apps.
      </P>
      <Item label="Precise location">Required. Live map, place alerts, locate-now, SOS. Optional 30-day history for premium.</Item>
      <Item label="Battery level">Required. Low-battery alerts to the family.</Item>
      <Item label="Name &amp; family info">Required. Identify members within your family.</Item>
      <Item label="In-app messages">Optional. Family chat and the safety-events feed.</Item>
      <Item label="Device / push identifier">Required. Deliver notifications and account recovery.</Item>
      <Item label="Purchase history">Required. Manage your subscription and premium access.</Item>

      <H2>Data we do NOT collect</H2>
      <P>
        Email address (Sign in with Apple returns only an anonymous identifier), physical
        activity/motion (processed on your device only and never uploaded), contacts, photos,
        audio, browsing history, and diagnostics/analytics.
      </P>

      <H2>Who processes it</H2>
      <P>
        Cloudflare (hosting &amp; database), Apple (push, Sign in with Apple, App Store), Google
        (push, Google Play, and the Google Maps SDK on Android), and RevenueCat (subscriptions).
        They act as our processors and do not receive your data for their own advertising.
      </P>

      <H2>Your controls</H2>
      <P>
        You can revoke the location permission in your device settings, leave a family, or delete
        your account and all associated data from within the app at any time. Requests:{" "}
        <a
          href="mailto:support@eduardbruch.com"
          className="text-white/60 underline underline-offset-4 decoration-white/20 hover:text-white transition-colors"
        >
          support@eduardbruch.com
        </a>
        .
      </P>
    </main>
  );
}
