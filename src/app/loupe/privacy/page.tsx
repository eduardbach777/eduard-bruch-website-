export const metadata = {
  title: "Privacy Policy — Loupe",
  description:
    "Privacy policy for Loupe, the Quick Look extension for macOS. Loupe has no network access at all — your files never leave your Mac, and nothing is collected.",
};

export default function LoupePrivacyPolicy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">Privacy Policy</h1>
      <p className="mb-2 text-lg text-neutral-300">Loupe — Quick Look Preview</p>
      <p className="mb-10 text-sm text-neutral-500">Last updated: September 2, 2026</p>

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

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">2. Summary</h2>
      <p className="mb-6">
        Loupe (&quot;the App&quot;) is a free macOS QuickLook extension that
        previews folders and archives (ZIP, RAR, 7z, TAR) directly in Finder. It
        is a sandboxed macOS application that{" "}
        <strong>has no network entitlement</strong>. That is not a policy
        promise — it is a technical fact enforced by macOS. The App cannot open a
        network connection, contact a server, or upload a file, because the
        capability was never requested and the operating system would refuse it.
      </p>
      <p className="mb-6">
        Consequently: <strong>no personal data is collected, transmitted, or
        shared with anyone</strong>. There is no account, no sign-in, no
        analytics, no crash reporting, no advertising and no tracking of any
        kind. The developer never sees your files, your file names, or anything
        about how you use the App.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        3. Your Files
      </h2>
      <p className="mb-4">
        The App reads the single file or folder that macOS hands to the
        QuickLook extension (com.eduardbruch.loupe.quicklook) when you press
        Space in Finder. It reads just enough to render a preview — listing
        folder contents or inspecting archive entries. Everything happens
        entirely on your Mac.
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li>
          Files are read locally to render a preview. They are never copied,
          extracted, or sent anywhere.
        </li>
        <li>
          The QuickLook extension only sees the single file or folder the system
          hands it. It has no access to your Documents, Desktop, Photos library,
          or anything else.
        </li>
        <li>
          Loupe is strictly read-only. It never writes, modifies, or deletes any
          file on your system.
        </li>
      </ul>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        4. What Is Stored On Your Mac
      </h2>
      <p className="mb-4">
        The App stores its own settings locally, in the standard macOS
        preferences store for the application. This never leaves your device
        except as part of a backup you choose to make (for example Time Machine
        or iCloud device backup, both governed by Apple&apos;s own terms).
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li>Window state and whether the welcome screen has been shown.</li>
        <li>Extension configuration preferences.</li>
      </ul>
      <p className="mb-6">
        Deleting the App and its preferences removes all of this. None of it is
        ever sent anywhere.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        5. No Purchase Data
      </h2>
      <p className="mb-6">
        Loupe is completely free. There is no purchase, no in-app purchase, and
        no subscription. The App contains no payment code at all, and the
        developer never receives any payment information.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        6. Required Reason APIs
      </h2>
      <p className="mb-6">
        In line with Apple&apos;s privacy manifest requirements, the App declares
        exactly one API category with a required reason:{" "}
        <code className="rounded bg-neutral-800 px-1 py-0.5 text-sm">
          NSPrivacyAccessedAPICategoryUserDefaults
        </code>{" "}
        with reason{" "}
        <code className="rounded bg-neutral-800 px-1 py-0.5 text-sm">CA92.1</code>{" "}
        — reading and writing settings that belong to this app alone. No data
        types are declared as collected, and no tracking domains are declared,
        because there are none.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        7. Legal Basis and Your Rights (GDPR)
      </h2>
      <p className="mb-4">
        Because the developer does not collect or process any personal data,
        there is no processing to which a legal basis under Art. 6 GDPR would
        attach, and there is no data for the developer to disclose, correct or
        erase.
      </p>
      <p className="mb-6">
        Your rights under Art. 15–21 GDPR — access, rectification, erasure,
        restriction, portability and objection — remain available to you, and you
        may exercise them at any time using the contact address below. In
        practice a request will be answered with confirmation that no personal
        data concerning you is held. You also have the right to lodge a complaint
        with a supervisory authority; for Hamburg this is the{" "}
        <em>Hamburgische Beauftragte für Datenschutz und Informationsfreiheit</em>.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        8. Children
      </h2>
      <p className="mb-6">
        The App is not directed at children and collects no data from anyone,
        regardless of age.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        9. Changes To This Policy
      </h2>
      <p className="mb-6">
        This policy may be updated if the App changes. The &quot;last
        updated&quot; date above reflects the current version. If a future
        version of the App ever gained a network capability, this policy would be
        revised before that version shipped, and the change described plainly.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">10. Contact</h2>
      <p className="mb-1">Eduard Bruch</p>
      <p className="mb-1">Kleinfeld 28c, 21149 Hamburg, Deutschland</p>
      <p className="mb-6">
        E-Mail:{" "}
        <a href="mailto:support@eduardbruch.com" className="text-indigo-400 underline">
          support@eduardbruch.com
        </a>
      </p>

      <p className="mt-12 text-sm text-neutral-500">
        <a href="/loupe/terms" className="underline">
          Terms of Service
        </a>{" "}
        ·{" "}
        <a href="/loupe/support" className="underline">
          Support
        </a>
      </p>
    </main>
  );
}
