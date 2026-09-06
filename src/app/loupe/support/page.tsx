export const metadata = {
  title: "Support — Loupe",
  description:
    "Help with Loupe, the Quick Look extension for macOS. FAQs on enabling the extension, supported formats, troubleshooting, and contact support.",
};

export default function LoupeSupport() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-neutral-200">
      <h1 className="mb-8 text-3xl font-bold text-white">Loupe Support</h1>

      <p className="mb-6">
        Need help with Loupe? Email{" "}
        <a href="mailto:support@eduardbruch.com" className="text-indigo-400 underline">
          support@eduardbruch.com
        </a>{" "}
        and you will get a reply from a person, usually within two working days.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        Frequently Asked Questions
      </h2>

      <div className="mb-4">
        <h3 className="mb-1 font-medium text-white">
          How do I enable the Loupe extension?
        </h3>
        <p className="text-neutral-400">
          Open System Settings → Extensions → Quick Look and enable Loupe. Once
          enabled, select a folder or archive in Finder and press Space to see
          the preview.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="mb-1 font-medium text-white">
          What formats does Loupe support?
        </h3>
        <p className="text-neutral-400">
          Folders, ZIP, RAR, 7z, and TAR — including gzip- and bzip2-compressed
          tar archives (.tar.gz, .tar.bz2, .tgz, .tbz2).
        </p>
      </div>

      <div className="mb-4">
        <h3 className="mb-1 font-medium text-white">
          How does it work?
        </h3>
        <p className="text-neutral-400">
          Select a folder or archive in Finder and press Space. Loupe&apos;s
          QuickLook extension renders a preview of the contents — file names,
          sizes, and structure — without opening or extracting anything.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="mb-1 font-medium text-white">
          Nothing happens when I press Space.
        </h3>
        <p className="text-neutral-400">
          First, check that the extension is enabled in System Settings →
          Extensions → Quick Look. If it is enabled but still not working,
          another Quick Look extension may be claiming the same file type — try
          disabling other extensions temporarily. Restarting Finder (Option-click
          the Finder icon in the Dock → Relaunch) can also resolve extension
          loading issues.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="mb-1 font-medium text-white">
          Does Loupe extract or modify archives?
        </h3>
        <p className="text-neutral-400">
          No. Loupe is strictly read-only. It reads just enough of the archive to
          list its contents for the preview. It never extracts, writes, modifies,
          or deletes any file on your system.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="mb-1 font-medium text-white">
          Does it need internet?
        </h3>
        <p className="text-neutral-400">
          No. Loupe has no network access at all — the network entitlement was
          never requested, so macOS itself prevents any connection. Everything
          happens locally on your Mac.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="mb-1 font-medium text-white">
          Is Loupe free?
        </h3>
        <p className="text-neutral-400">
          Yes, completely free. There is no purchase, no in-app purchase, no
          subscription, and nothing that expires. Every feature is included from
          the first launch.
        </p>
      </div>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        System Requirements
      </h2>
      <p className="mb-6 text-neutral-400">
        macOS 15.0 (Sequoia) or later. Apple silicon and Intel are both supported.
        No internet connection is required, or used.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">Contact</h2>
      <p className="mb-1">Eduard Bruch</p>
      <p className="mb-1">Kleinfeld 28c, 21149 Hamburg, Deutschland</p>
      <p className="mb-6">
        E-Mail:{" "}
        <a href="mailto:support@eduardbruch.com" className="text-indigo-400 underline">
          support@eduardbruch.com
        </a>
      </p>

      <p className="mt-12 text-sm text-neutral-500">
        <a href="/loupe/privacy" className="underline">
          Privacy Policy
        </a>{" "}
        ·{" "}
        <a href="/loupe/terms" className="underline">
          Terms of Service
        </a>
      </p>
    </main>
  );
}
