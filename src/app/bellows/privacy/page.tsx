export const metadata = {
  title: "Privacy Policy — Bellows",
  description:
    "Privacy policy for Bellows, the offline developer toolbox for macOS. The app ships with no network entitlement — it cannot reach the internet, and nothing you paste into it ever leaves your Mac.",
};

export default function BellowsPrivacyPolicy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">Privacy Policy</h1>
      <p className="mb-2 text-lg text-neutral-300">Bellows — Developer Tools</p>
      <p className="mb-10 text-sm text-neutral-500">Last updated: August 21, 2026</p>

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
      <p className="mb-4">
        Bellows (&quot;the App&quot;) is a macOS utility containing developer
        tools that format, encode, decode, convert and inspect text — JSON, JWTs,
        Base64, hashes, timestamps, regular expressions and so on.
      </p>
      <p className="mb-6">
        People paste sensitive material into tools like this: production tokens,
        API responses, customer records, configuration files. So the important
        statement comes first.{" "}
        <strong>
          The App collects no data, transmits no data, and has no ability to
          transmit data.
        </strong>{" "}
        There is no server, no account, no analytics and no advertising. This is
        not merely a promise in a policy — it is enforced by macOS, and section 3
        explains how you can verify it yourself.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        3. No Network Entitlement — Enforced by macOS
      </h2>
      <p className="mb-4">
        The App runs inside Apple&apos;s App Sandbox. A sandboxed app can only do
        what its entitlements permit, and network access is an entitlement that
        must be requested explicitly. The App requests exactly two:
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li>
          <code className="rounded bg-neutral-800 px-1 py-0.5 text-sm">
            com.apple.security.app-sandbox
          </code>{" "}
          — run inside the sandbox at all.
        </li>
        <li>
          <code className="rounded bg-neutral-800 px-1 py-0.5 text-sm">
            com.apple.security.files.user-selected.read-write
          </code>{" "}
          — read and write files you explicitly choose in an open or save dialog.
        </li>
      </ul>
      <p className="mb-4">
        Neither{" "}
        <code className="rounded bg-neutral-800 px-1 py-0.5 text-sm">
          com.apple.security.network.client
        </code>{" "}
        nor{" "}
        <code className="rounded bg-neutral-800 px-1 py-0.5 text-sm">
          com.apple.security.network.server
        </code>{" "}
        is present. Without them, macOS refuses outbound connections at the
        kernel level. The App could not send your data anywhere even if it
        contained code that tried to.
      </p>
      <p className="mb-6">
        You do not have to take this on trust. Right-click the App in Finder,
        choose <strong>Show Package Contents</strong>, and inspect the code
        signature — or run{" "}
        <code className="rounded bg-neutral-800 px-1 py-0.5 text-sm">
          codesign -d --entitlements - /Applications/Bellows.app
        </code>{" "}
        in Terminal. The entitlements are listed in full, and network access is
        not among them.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        4. What the App Processes
      </h2>
      <p className="mb-4">
        Everything you type or paste into a tool is held in memory for as long as
        that tool window is open, transformed on your Mac by the CPU in front of
        you, and discarded when you clear the field, switch tools or quit. None
        of it is written to disk by the App, and none of it is included in any
        stored setting.
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">4.1 Clipboard access</h3>
      <p className="mb-4">
        The App reads your clipboard in exactly two situations, both of which you
        initiate: when you press the <strong>Paste</strong> button inside a tool,
        and when you press the <strong>Inspect Clipboard</strong> global shortcut,
        if you have assigned one. In the second case the App examines the
        clipboard text only to decide which tool fits it — for example, text
        beginning with <code className="rounded bg-neutral-800 px-1 py-0.5 text-sm">eyJ</code>{" "}
        suggests a JWT — and then fills that tool in for you. The App does not
        monitor the clipboard in the background and does not read it while idle.
      </p>

      <h3 className="mb-2 mt-4 font-medium text-white">4.2 Files</h3>
      <p className="mb-6">
        The App only ever touches files you select yourself through a standard
        macOS dialog. It has no access to your Documents, Desktop, Downloads or
        any other location unless you explicitly point it there in that dialog.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        5. The Markdown Preview and Its Web View
      </h2>
      <p className="mb-6">
        One tool, <strong>Markdown Preview</strong>, renders your Markdown using a
        system web view so that you see a formatted page rather than raw HTML.
        This is disclosed because &quot;web view&quot; understandably sounds like
        a network feature. It is not one. The generated HTML is handed to the view
        directly as a string with no base URL, JavaScript is disabled, and the
        sandbox has no network entitlement — so there is no origin to load remote
        resources from and no way to request them. Nothing about your Markdown
        leaves the machine.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        6. Data Stored on Your Device
      </h2>
      <p className="mb-4">
        The App saves a small amount of preference data locally, in the standard
        macOS preferences store for the App. It never leaves your Mac, other than
        through your own iCloud or Time Machine backups, which are under your
        control. It consists of:
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li>which tools you used most recently, so the Recents list works;</li>
        <li>which tool was last open;</li>
        <li>your keyboard shortcut assignments;</li>
        <li>whether the App launches at login and whether it appears in the Dock;</li>
        <li>the date you last dismissed the review prompt, so you are not asked again.</li>
      </ul>
      <p className="mb-6">
        Note what is <em>not</em> in that list: none of the text you process is
        stored, and the Recents list records tool names only — never their
        contents. Deleting the App removes this data.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        7. No Analytics, Tracking or Advertising
      </h2>
      <p className="mb-6">
        The App contains no analytics SDK, no crash reporting service, no
        advertising identifier and no third-party tracking of any kind. It builds
        no profile of you and there is nothing to opt out of. The open-source
        components it uses — for preferences, keyboard shortcuts, launch-at-login
        and opening the Settings window — all operate purely locally.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        8. Data Sharing with Third Parties
      </h2>
      <p className="mb-4">
        No personal data is shared, sold or transmitted, because none is
        collected. Two third parties are nonetheless involved in ordinary use and
        should be named:
      </p>
      <ul className="mb-6 list-disc space-y-2 pl-6">
        <li>
          <strong>Apple</strong> — if you obtain or purchase the App through the
          Mac App Store, Apple processes the download and payment under its own
          privacy policy. The developer receives only anonymised, aggregated sales
          and download reports; these cannot identify you.
        </li>
        <li>
          <strong>Apple&apos;s review prompt</strong> — if you choose to leave a
          review, Apple&apos;s standard rating dialog handles it. The App neither
          sees nor stores your rating or review text.
        </li>
      </ul>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">9. Data Retention</h2>
      <p className="mb-6">
        Text you process is retained only in memory, for the lifetime of the
        window. Preferences persist on your Mac until you delete the App. Nothing
        is retained anywhere else, because nothing is sent anywhere else.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        10. Your Rights (DSGVO / GDPR)
      </h2>
      <p className="mb-4">
        Under the General Data Protection Regulation you have the right to access,
        rectification, erasure, restriction of processing, data portability and
        objection, and the right to lodge a complaint with a supervisory
        authority.
      </p>
      <p className="mb-6">
        In practice these rights have no data to attach to here: the developer
        holds no personal data about you and has no means of identifying you. Any
        data the App creates lives on your own device and is deleted when you
        delete the App. If you would like this confirmed in writing, contact the
        address in section 1.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        11. Children&apos;s Privacy
      </h2>
      <p className="mb-6">
        The App is a developer utility and is not directed at children. It
        collects no data from anyone, including children under 16.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        12. Changes to This Privacy Policy
      </h2>
      <p className="mb-6">
        This policy may be updated if the App changes. Any change that would
        affect how data is handled — in particular, adding a network entitlement —
        would be reflected here and in the App&apos;s release notes before it took
        effect. The date at the top of this page shows the current version.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">13. Contact</h2>
      <p className="mb-6">
        Questions about this policy or about how the App handles data:{" "}
        <a href="mailto:support@eduardbruch.com" className="text-indigo-400 underline">
          support@eduardbruch.com
        </a>
      </p>
    </main>
  );
}
