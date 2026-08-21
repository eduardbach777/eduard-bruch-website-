export const metadata = {
  title: "Privacy Policy — Mediasmith",
  description:
    "Privacy policy for Mediasmith, the media converter for macOS. Mediasmith has no network access at all — your files never leave your Mac, and nothing is collected.",
};

export default function MediasmithPrivacyPolicy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">Privacy Policy</h1>
      <p className="mb-2 text-lg text-neutral-300">Mediasmith — Convert Video, Images & Audio</p>
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

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">2. Summary</h2>
      <p className="mb-6">
        Mediasmith (&quot;the App&quot;) converts and cleans up video, images and audio on
        your Mac. It is a sandboxed macOS application that{" "}
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
        The App reads the image files you explicitly give it — by dragging them
        in, choosing them in the open panel, or opening them with the App from
        Finder — and writes new image files where you tell it to. Both happen
        entirely on your Mac.
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li>
          Files are read, processed on your Mac and written back to disk. They are
          never copied anywhere else.
        </li>
        <li>
          The App can read image metadata (EXIF, including GPS coordinates
          recorded by a camera or phone) because removing that metadata is one of
          its features. This happens locally. The metadata is never inspected,
          logged or transmitted by the developer.
        </li>
        <li>
          The macOS sandbox restricts the App to the files and folders you have
          selected. It has no access to your Photos library, your Documents
          folder, or anything else you have not handed it.
        </li>
        <li>
          Original files are never modified or deleted. Output is written as new
          files, and a file that would collide with an existing one is given a
          numbered name instead.
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
        <li>Your saved presets and the current pipeline of operations.</li>
        <li>
          Output settings: format, quality, metadata policy, filename pattern.
        </li>
        <li>
          A <strong>security-scoped bookmark</strong> for the output folder you
          chose, and for a watermark image if you selected one. A bookmark is
          how macOS lets a sandboxed app keep access to a folder you picked
          across restarts. It grants access only to that specific location.
        </li>
        <li>
          Window state, whether the welcome screen has been shown, and a counter
          of completed batches used to decide when — if ever — to show a rating
          prompt.
        </li>
        <li>A cached flag recording whether the paid version has been unlocked.</li>
      </ul>
      <p className="mb-6">
        Deleting the App and its preferences removes all of this. None of it is
        ever sent anywhere.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        5. Purchases
      </h2>
      <p className="mb-6">
        Mediasmith offers a single optional one-time in-app purchase that removes
        the free version&apos;s batch-size limit. The purchase is handled
        entirely by <strong>Apple</strong> through the App Store and StoreKit.
        The App receives only a yes/no answer about whether the purchase is
        active. It never sees your name, your email address, your Apple Account,
        or any payment details, and no payment information is transmitted to the
        developer at any point. Apple&apos;s handling of that transaction is
        governed by{" "}
        <a
          href="https://www.apple.com/legal/privacy/"
          className="text-indigo-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple&apos;s Privacy Policy
        </a>
        .
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
        <a href="/mediasmith/terms" className="underline">
          Terms of Service
        </a>{" "}
        ·{" "}
        <a href="/mediasmith/support" className="underline">
          Support
        </a>
      </p>
    </main>
  );
}
