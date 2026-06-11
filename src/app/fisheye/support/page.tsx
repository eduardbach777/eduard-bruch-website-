import Link from "next/link";

export const metadata = {
  title: "Support — Fisheye Camera - WideEye",
  description:
    "Support page for Fisheye Camera - WideEye by Eduard Bruch.",
};

export default function FisheyeSupport() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <p className="mb-4 text-sm tracking-[0.25em] text-white/35 uppercase">
        Fisheye Camera - WideEye
      </p>
      <h1 className="mb-4 text-4xl font-bold text-white">Support</h1>
      <p className="mb-10 text-lg text-neutral-400">
        Help for live fisheye photos, videos, saving, gallery, and sharing.
      </p>

      <section className="mb-12 rounded-lg border border-white/10 bg-white/[0.03] p-6">
        <h2 className="mb-4 text-2xl font-semibold text-white">Contact</h2>
        <p className="mb-2">
          Email:{" "}
          <a
            href="mailto:support@eduardbruch.com"
            className="text-indigo-400 underline"
          >
            support@eduardbruch.com
          </a>
        </p>
        <p className="text-neutral-400">
          Please include your device model, iOS version, App version, and a
          short description of what happened.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-7">
          <div>
            <h3 className="mb-2 text-lg font-medium text-white">
              Why does the App need camera permission?
            </h3>
            <p className="text-neutral-400">
              Camera permission is required to show the live preview and capture
              fisheye photos or videos.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-medium text-white">
              Why does the App need microphone permission?
            </h3>
            <p className="text-neutral-400">
              Microphone permission may be used for video recording with audio.
              If you do not want audio, you can deny microphone access in iOS
              settings.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-medium text-white">
              Where are photos and videos saved?
            </h3>
            <p className="text-neutral-400">
              Captures are saved on your device and may be added to your photo
              library when you choose to save them. The App does not upload your
              captures to a server.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-medium text-white">
              The gallery does not show a capture. What should I try?
            </h3>
            <p className="text-neutral-400">
              Make sure the App has photo library permission, then close and
              reopen the App. If the issue persists, contact support with the
              capture type, device model, and whether it was a photo or video.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-medium text-white">
              The saved media looks different from the preview.
            </h3>
            <p className="text-neutral-400">
              Please update to the latest version from the App Store. If the
              issue continues, send a support email with the selected strength
              mode and whether the issue occurred with photo or video.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-medium text-white">
              How do I delete a capture?
            </h3>
            <p className="text-neutral-400">
              Open the capture in the in-app gallery and use the delete button
              where available. You can also delete saved items directly from the
              iOS Photos app.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-white">Legal</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/fisheye/privacy"
            className="rounded bg-white/10 px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/20 hover:text-white"
          >
            Privacy Policy
          </Link>
          <Link
            href="/fisheye/terms"
            className="rounded bg-white/10 px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/20 hover:text-white"
          >
            Terms of Service
          </Link>
        </div>
      </section>

      <p className="mt-12 text-sm text-neutral-500">
        Developed by Eduard Bruch — Hamburg, Germany
      </p>
    </main>
  );
}
