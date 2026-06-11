import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Fisheye Camera - WideEye",
  description:
    "Privacy policy for Fisheye Camera - WideEye, a photo and video camera app by Eduard Bruch.",
};

export default function FisheyePrivacyPolicy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <p className="mb-4 text-sm tracking-[0.25em] text-white/35 uppercase">
        Fisheye Camera - WideEye
      </p>
      <h1 className="mb-4 text-4xl font-bold text-white">Privacy Policy</h1>
      <p className="mb-10 text-sm text-neutral-500">
        Last updated: May 17, 2026
      </p>

      <p className="mb-6">
        This Privacy Policy explains how Fisheye Camera - WideEye
        (&quot;the App&quot;) handles information when you use the App to
        create fisheye photos and videos. The App is published by Eduard Bruch.
      </p>

      <div className="mb-10 rounded-lg border border-white/10 bg-white/[0.03] p-6">
        <h2 className="mb-3 text-xl font-semibold text-white">
          Short Version
        </h2>
        <ul className="list-disc space-y-2 pl-6 text-neutral-300">
          <li>No account is required.</li>
          <li>We do not sell your data.</li>
          <li>We do not use third-party advertising or behavioral tracking.</li>
          <li>
            Photos and videos you create are stored on your device and, when you
            choose to save them, in your photo library.
          </li>
          <li>
            Camera and microphone access are used only to provide camera and
            video recording features.
          </li>
          <li>
            Any diagnostic details are shared only if you choose to send them to
            support.
          </li>
        </ul>
      </div>

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

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        2. Information the App Processes
      </h2>
      <p className="mb-4">
        The App processes the following information locally on your device so it
        can provide its camera features:
      </p>
      <ul className="mb-6 list-disc space-y-2 pl-6">
        <li>
          <strong>Camera preview data:</strong> live camera frames are processed
          on-device to display the fisheye effect.
        </li>
        <li>
          <strong>Photos:</strong> photos you capture may be processed on-device
          to apply the selected fisheye strength and then saved if you choose to
          save them.
        </li>
        <li>
          <strong>Videos:</strong> video recordings may be processed on-device to
          apply the selected fisheye effect and then saved if you choose to save
          them.
        </li>
        <li>
          <strong>Microphone audio:</strong> when recording video, the App may
          request microphone access so video can include audio if that feature is
          enabled by the device and App version.
        </li>
        <li>
          <strong>Photo library items:</strong> the App may access saved media
          only to display, save, share, or delete captures you create with the
          App.
        </li>
        <li>
          <strong>Basic app settings:</strong> preferences such as the selected
          mode or lens strength may be stored locally.
        </li>
      </ul>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        3. Information We Do Not Collect
      </h2>
      <ul className="mb-6 list-disc space-y-2 pl-6">
        <li>We do not require you to create an account.</li>
        <li>We do not operate a server that stores your photos or videos.</li>
        <li>We do not collect your camera feed remotely.</li>
        <li>We do not collect precise location data.</li>
        <li>We do not use advertising SDKs.</li>
        <li>We do not sell personal information.</li>
        <li>We do not share personal information for behavioral advertising.</li>
      </ul>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        4. Device Permissions
      </h2>
      <div className="space-y-5">
        <section>
          <h3 className="mb-2 font-medium text-white">Camera</h3>
          <p>
            Camera access is required to show the live camera preview and
            capture photos or videos. Camera frames are processed on-device for
            the fisheye effect.
          </p>
        </section>
        <section>
          <h3 className="mb-2 font-medium text-white">Microphone</h3>
          <p>
            Microphone access may be requested for video recording with audio.
            You can deny microphone access if you do not want audio recording.
          </p>
        </section>
        <section>
          <h3 className="mb-2 font-medium text-white">Photo Library</h3>
          <p>
            Photo library access is used to save captures, show your in-app
            gallery, share media, and delete media when you choose to do so.
          </p>
        </section>
      </div>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        5. Local Storage and Deletion
      </h2>
      <p className="mb-6">
        Captures are stored on your device and may be saved to your photo
        library. You can delete captures inside the App where deletion is
        available, delete them from your photo library, or remove App data by
        uninstalling the App. If a file has already been shared outside the App,
        deletion inside the App will not delete copies held by other apps,
        services, or people.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        6. Sharing
      </h2>
      <p className="mb-6">
        If you use the share button, the selected photo or video is passed to
        the iOS share sheet. From that point, the privacy practices of the app or
        service you choose to share with apply.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        7. Diagnostics and Support
      </h2>
      <p className="mb-6">
        The App may create local diagnostic messages to help troubleshoot
        problems such as capture, processing, or saving errors. These diagnostic
        messages stay on your device unless you choose to share them with us for
        support. Please avoid sending sensitive photos, videos, or personal
        information unless it is necessary for your support request.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        8. Third-Party Services
      </h2>
      <p className="mb-6">
        The App does not use third-party advertising or analytics services. If
        this changes in a future version, this Privacy Policy will be updated to
        identify the relevant service providers and purposes.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        9. Children
      </h2>
      <p className="mb-6">
        The App is not directed to children under 13. We do not knowingly
        collect personal information from children. Because the App is a camera
        tool, parents and guardians should supervise use where appropriate.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        10. Legal Bases Under GDPR
      </h2>
      <ul className="mb-6 list-disc space-y-2 pl-6">
        <li>
          <strong>Contract performance:</strong> processing necessary to provide
          camera, capture, saving, gallery, and sharing features.
        </li>
        <li>
          <strong>Consent:</strong> optional permissions such as camera,
          microphone, and photo library access are controlled by your device
          settings.
        </li>
        <li>
          <strong>Legitimate interests:</strong> responding to support requests
          and troubleshooting issues you report.
        </li>
      </ul>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        11. Your Rights
      </h2>
      <p className="mb-4">
        Depending on your location, you may have rights to access, correct,
        delete, restrict, or object to processing of your personal data. Because
        the App stores captures locally, most data can be controlled directly on
        your device.
      </p>
      <p className="mb-6">
        To contact us about privacy rights, email{" "}
        <a
          href="mailto:support@eduardbruch.com"
          className="text-indigo-400 underline"
        >
          support@eduardbruch.com
        </a>
        .
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        12. California Privacy Notice
      </h2>
      <p className="mb-6">
        We do not sell personal information and do not share personal
        information for cross-context behavioral advertising. To make a privacy
        request, contact support@eduardbruch.com.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        13. Changes to This Policy
      </h2>
      <p className="mb-6">
        We may update this Privacy Policy when the App changes or when legal
        requirements change. The updated date at the top shows when the policy
        was last revised.
      </p>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="/fisheye/terms"
          className="rounded bg-white/10 px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/20 hover:text-white"
        >
          Terms of Service
        </Link>
        <Link
          href="/fisheye/support"
          className="rounded bg-white/10 px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/20 hover:text-white"
        >
          Support
        </Link>
      </div>
    </main>
  );
}
