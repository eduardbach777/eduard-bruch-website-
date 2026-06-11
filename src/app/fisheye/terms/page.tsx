import Link from "next/link";

export const metadata = {
  title: "Terms of Service — Fisheye Camera - WideEye",
  description:
    "Terms of service for Fisheye Camera - WideEye, a photo and video camera app by Eduard Bruch.",
};

export default function FisheyeTerms() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <p className="mb-4 text-sm tracking-[0.25em] text-white/35 uppercase">
        Fisheye Camera - WideEye
      </p>
      <h1 className="mb-4 text-4xl font-bold text-white">Terms of Service</h1>
      <p className="mb-10 text-sm text-neutral-500">
        Last updated: May 17, 2026
      </p>

      <p className="mb-6">
        These Terms of Service (&quot;Terms&quot;) govern your use of Fisheye
        Camera - WideEye (&quot;the App&quot;), published by Eduard Bruch. By
        downloading, installing, or using the App, you agree to these Terms.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        1. What the App Does
      </h2>
      <p className="mb-6">
        The App is a camera tool for creating fisheye-style photos and videos.
        It provides live preview, selectable fisheye strength settings, photo
        capture, video recording, an in-app gallery, sharing, and deletion of
        captures where available.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        2. License to Use the App
      </h2>
      <p className="mb-6">
        Subject to these Terms, you receive a limited, non-exclusive,
        non-transferable, revocable license to use the App for personal,
        non-commercial purposes on devices you own or control, in accordance
        with Apple&apos;s App Store terms and applicable law.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        3. Your Photos, Videos, and Other Content
      </h2>
      <p className="mb-4">
        You keep ownership of photos and videos you create with the App. You are
        responsible for your captures and for how you save, share, publish, or
        otherwise use them.
      </p>
      <ul className="mb-6 list-disc space-y-2 pl-6">
        <li>
          Make sure you have permission before recording or photographing other
          people where required by law.
        </li>
        <li>
          Do not use the App to harass, stalk, exploit, defame, or violate the
          privacy or rights of others.
        </li>
        <li>
          Do not use the App to create, store, or distribute illegal content.
        </li>
        <li>
          If you share media to another app or service, that app or service is
          responsible for its own terms and privacy practices.
        </li>
      </ul>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        4. Camera, Microphone, and Photo Library Use
      </h2>
      <p className="mb-6">
        The App needs access to certain device features to work. Camera access
        is used for live preview and capture. Microphone access may be used for
        video recording with audio. Photo library access may be used to save,
        display, share, and delete captures. You can manage permissions in your
        device settings.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        5. No Professional Advice
      </h2>
      <p className="mb-6">
        The App is a creative camera tool. It is not intended for security,
        surveillance, evidentiary, medical, professional photography, or other
        critical use cases. Fisheye effects intentionally distort the image and
        may change how distances, proportions, faces, and objects appear.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        6. Acceptable Use
      </h2>
      <p className="mb-4">You agree not to:</p>
      <ul className="mb-6 list-disc space-y-2 pl-6">
        <li>reverse engineer, decompile, or modify the App except where allowed by law;</li>
        <li>use the App in a way that violates applicable privacy, recording, or publicity laws;</li>
        <li>use the App to infringe intellectual property rights;</li>
        <li>attempt to interfere with the App&apos;s functionality or security;</li>
        <li>misrepresent your captures as unedited or undistorted where that would be deceptive.</li>
      </ul>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        7. Purchases and Subscriptions
      </h2>
      <p className="mb-6">
        The current App version may be free or paid depending on the App Store
        listing available in your country. If future versions offer in-app
        purchases or subscriptions, pricing, renewal, cancellation, and refund
        rules will be shown in the App Store purchase flow and governed by
        Apple&apos;s terms. Subscriptions can be managed from your Apple ID
        account settings.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        8. Intellectual Property
      </h2>
      <p className="mb-6">
        The App, including its software, interface, icons, graphics, branding,
        and design, is owned by Eduard Bruch or licensed to Eduard Bruch. These
        Terms do not transfer ownership of the App to you. Your captured photos
        and videos remain yours.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        9. Availability and Changes
      </h2>
      <p className="mb-6">
        We may update, change, suspend, or discontinue parts of the App at any
        time. We aim to keep the App useful and stable, but we do not guarantee
        that every feature will always be available on every device, iOS
        version, or region.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        10. Disclaimer of Warranties
      </h2>
      <p className="mb-6">
        The App is provided &quot;as is&quot; and &quot;as available&quot;.
        To the maximum extent permitted by law, we disclaim all warranties,
        express or implied, including warranties of merchantability, fitness for
        a particular purpose, non-infringement, availability, accuracy, and
        error-free operation.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        11. Limitation of Liability
      </h2>
      <p className="mb-6">
        To the maximum extent permitted by law, Eduard Bruch will not be liable
        for indirect, incidental, special, consequential, exemplary, or punitive
        damages, or for loss of data, media, profits, goodwill, or business
        opportunities arising from your use of or inability to use the App.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        12. Apple App Store Terms
      </h2>
      <p className="mb-6">
        If you downloaded the App from the Apple App Store, Apple&apos;s terms
        also apply. Apple is not responsible for providing maintenance or
        support for the App. Apple and its subsidiaries are third-party
        beneficiaries of these Terms and may enforce them as such.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        13. Governing Law
      </h2>
      <p className="mb-6">
        These Terms are governed by the laws of the Federal Republic of Germany.
        If you are a consumer in the European Union, you also benefit from
        mandatory consumer protection rules in your country of residence.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        14. Contact
      </h2>
      <p className="mb-6">
        Questions about these Terms can be sent to{" "}
        <a
          href="mailto:support@eduardbruch.com"
          className="text-indigo-400 underline"
        >
          support@eduardbruch.com
        </a>
        .
      </p>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="/fisheye/privacy"
          className="rounded bg-white/10 px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/20 hover:text-white"
        >
          Privacy Policy
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
