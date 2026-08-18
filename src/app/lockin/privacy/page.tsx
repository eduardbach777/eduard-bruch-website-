export const metadata = {
  title: "Privacy Policy — Lock In!",
  description:
    "Privacy policy for Lock In!, the website and app blocker for macOS. The content filter runs entirely on your Mac — no browsing history is logged, stored or transmitted.",
};

export default function LockInPrivacyPolicy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">
        Privacy Policy
      </h1>
      <p className="mb-2 text-lg text-neutral-300">Lock In! — Focus</p>
      <p className="mb-10 text-sm text-neutral-500">Last updated: August 18, 2026</p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        1. Data Controller (Verantwortlicher)
      </h2>
      <p className="mb-1">Eduard Bruch</p>
      <p className="mb-1">Kleinfeld 28c</p>
      <p className="mb-1">21149 Hamburg, Deutschland</p>
      <p className="mb-6">
        E-Mail:{" "}
        <a href="mailto:support@eduardbruch.com" className="text-indigo-400 underline">
          support@eduardbruch.com
        </a>
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">2. Overview</h2>
      <p className="mb-6">
        Lock In! (&quot;the App&quot;) is a macOS focus utility that blocks
        distracting websites and applications during timed focus sessions. To
        block websites across every browser rather than just one, the App
        installs a macOS <strong>Network Extension content filter</strong>. That
        filter necessarily sees the destinations your Mac connects to while a
        session is running. This policy explains exactly what it sees, what it
        does with it, and what it never does. In short:{" "}
        <strong>
          nothing about your browsing is recorded, stored, or sent anywhere.
        </strong>{" "}
        The App has no server, no account system, and makes no network requests
        of its own.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        3. The Content Filter — What It Actually Sees
      </h2>
      <p className="mb-4">
        This is the most privacy-sensitive part of the App, so it is described in
        full detail rather than summarised.
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">
        3.1 How blocking works
      </h3>
      <p className="mb-4">
        The App installs a system extension using Apple&apos;s{" "}
        <code className="rounded bg-neutral-800 px-1 py-0.5 text-sm">
          NEFilterDataProvider
        </code>{" "}
        API. While a focus session is active, macOS routes outbound network flows
        through this extension so it can decide whether each connection should be
        allowed or dropped. To make that decision it needs to know the destination
        host, which it determines from one of the following, in order:
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li>the hostname macOS already associates with the connection;</li>
        <li>
          the domain name inside an outgoing <strong>DNS query</strong> (the
          extension reads the queried name so it can block resolution of a
          blocked domain);
        </li>
        <li>
          the <strong>Server Name Indication (SNI)</strong> field of a TLS
          ClientHello — the unencrypted hostname a browser sends when opening an
          HTTPS connection;
        </li>
        <li>the <strong>Host</strong> header of a plain HTTP request.</li>
      </ul>
      <p className="mb-4">
        This is required because browsers such as Chrome use their own DNS
        resolver, which means the hostname is not otherwise available to the
        system. Connections whose destination cannot be identified and which use
        QUIC (UDP port 443) are dropped during a session so that the browser falls
        back to a connection the filter can evaluate.
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">
        3.2 What the filter does NOT do
      </h3>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li>
          It does <strong>not</strong> log, store, or write your browsing history
          to disk — no history file, no database, no cache.
        </li>
        <li>
          It does <strong>not</strong> transmit any hostname, DNS query, URL, or
          connection metadata off your Mac. The extension makes no outbound
          network requests whatsoever.
        </li>
        <li>
          It does <strong>not</strong> decrypt HTTPS. It never installs a root
          certificate and never performs TLS interception. It reads only the
          hostname portion of the connection handshake, which is transmitted in
          the clear by design.
        </li>
        <li>
          It does <strong>not</strong> read, inspect, or retain the content of any
          page, message, request body, or response.
        </li>
        <li>
          It does <strong>not</strong> run outside a focus session. When no
          session is active, all traffic is allowed through without evaluation.
        </li>
      </ul>
      <p className="mb-6">
        Each hostname is compared against your blocklist in memory and discarded
        immediately. The evaluation is ephemeral: nothing about the connection
        survives the decision. The legal basis is Art. 6(1)(b) DSGVO (performance
        of a contract — providing the blocking feature you enabled).
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">
        3.3 How your blocklist reaches the filter
      </h3>
      <p className="mb-6">
        Because the system extension runs as a separate privileged process, your
        list of blocked domains is passed to it through the{" "}
        <code className="rounded bg-neutral-800 px-1 py-0.5 text-sm">
          vendorConfiguration
        </code>{" "}
        field of the macOS filter configuration. This stays on your Mac and is
        managed by macOS itself.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        4. App Blocking
      </h2>
      <p className="mb-6">
        If you add applications to a session, the App observes application-launch
        notifications from macOS (
        <code className="rounded bg-neutral-800 px-1 py-0.5 text-sm">
          NSWorkspace
        </code>
        ) so it can quit a blocked app when you open it during a session. It sees
        only that an application was launched and its identifier. It cannot see
        inside any application, and this information is neither stored nor
        transmitted.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        5. Data Stored on Your Device
      </h2>
      <p className="mb-4">
        The following is saved locally using macOS UserDefaults and never leaves
        your Mac:
      </p>
      <ul className="mb-6 list-disc space-y-1 pl-6">
        <li>your focus sessions (names, durations, rules, icons);</li>
        <li>your blocklists — the domains and applications you chose to block;</li>
        <li>
          focus statistics: minutes focused per day, sessions completed or
          stopped, and your daily goal;
        </li>
        <li>app preferences such as sound, appearance, and keyboard shortcuts.</li>
      </ul>
      <p className="mb-6">
        There is no account, no sign-in, and no cloud sync. Deleting the App
        removes this data.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        6. No Analytics, Tracking or Advertising
      </h2>
      <p className="mb-6">
        The App contains no analytics SDK, no crash reporting service, no
        advertising identifier, and no third-party tracking of any kind. It does
        not build a profile of you and does not use your data for any purpose
        other than performing the blocking you configured.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        7. Data Sharing with Third Parties
      </h2>
      <p className="mb-6">
        No data is shared with third parties, because no data is collected. The
        App is distributed through the Mac App Store; Apple processes your
        purchase and may collect its own data under{" "}
        <a
          href="https://www.apple.com/legal/privacy/"
          className="text-indigo-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple&apos;s Privacy Policy
        </a>
        . We receive only anonymous, aggregated sales figures from Apple and never
        your identity.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        8. Data Retention
      </h2>
      <p className="mb-6">
        Since no personal data is collected or transmitted, there is nothing for
        us to retain. Data stored locally on your Mac remains until you delete it
        or uninstall the App.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        9. Your Rights (DSGVO / GDPR)
      </h2>
      <p className="mb-4">
        Under the GDPR you have the right of access (Art. 15), rectification
        (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data
        portability (Art. 20), and objection (Art. 21), as well as the right to
        lodge a complaint with a supervisory authority (Art. 77).
      </p>
      <p className="mb-6">
        In practice we hold no personal data about you, so there is nothing for us
        to disclose, correct, or erase. All data created by the App is under your
        direct control on your own device. You may still contact us at any time
        with a request.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        10. Children&apos;s Privacy
      </h2>
      <p className="mb-6">
        The App is not directed at children under 13 and collects no data from
        anyone, including children.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        11. Changes to This Privacy Policy
      </h2>
      <p className="mb-6">
        This policy may be updated as the App changes. The &quot;last
        updated&quot; date above always reflects the current version. Material
        changes to how the content filter works will be described here.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">12. Contact</h2>
      <p className="mb-1">Eduard Bruch</p>
      <p className="mb-1">Kleinfeld 28c, 21149 Hamburg, Deutschland</p>
      <p className="mb-6">
        E-Mail:{" "}
        <a href="mailto:support@eduardbruch.com" className="text-indigo-400 underline">
          support@eduardbruch.com
        </a>
      </p>

      <p className="mt-12 text-sm text-neutral-500">
        <a href="/lockin" className="underline">
          ← Back to Lock In!
        </a>
      </p>
    </main>
  );
}
