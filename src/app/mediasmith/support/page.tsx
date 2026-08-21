export const metadata = {
  title: "Support — Mediasmith",
  description:
    "Help with Mediasmith, the media converter for macOS. FAQs on video and HEIC conversion, MP3 export, colour profiles, metadata removal, and contact support.",
};

export default function MediasmithSupport() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-neutral-200">
      <h1 className="mb-8 text-3xl font-bold text-white">Mediasmith Support</h1>

      <p className="mb-6">
        Need help with Mediasmith? Email{" "}
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
          How do I convert HEIC photos to JPG?
        </h3>
        <p className="text-neutral-400">
          Drag the photos — or the whole folder — into the left column. In the
          middle column under Output, choose JPG as the format and set the
          quality. Press Process. Nothing is uploaded; the conversion happens on
          your Mac.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="mb-1 font-medium text-white">
          Where do the processed files go?
        </h3>
        <p className="text-neutral-400">
          By default, next to the originals. Under Destination in the middle
          column you can pick any folder instead. Your originals are never
          modified or deleted, and a file that would collide with an existing one
          gets a numbered name rather than replacing it.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="mb-1 font-medium text-white">
          Why are my portrait photos coming out sideways in other apps?
        </h3>
        <p className="text-neutral-400">
          They should not be. Phone photos store their pixels sideways plus a
          separate orientation tag, and many tools strip that tag when removing
          metadata — which tips the photo over. Mediasmith rotates the actual
          pixels before removing the tag, so the result is upright regardless of
          the metadata setting. If you are seeing sideways output, please email
          us with one example file.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="mb-1 font-medium text-white">
          Does it keep my colour profile?
        </h3>
        <p className="text-neutral-400">
          Yes. Display P3 stays Display P3, and a 16-bit image stays 16-bit
          through resizing, watermarking and cropping. Most batch tools flatten
          everything to 8-bit device RGB, which shifts colours subtly.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="mb-1 font-medium text-white">
          How do I remove GPS location from photos?
        </h3>
        <p className="text-neutral-400">
          In the Output section, set Metadata to &quot;Strip GPS Only&quot; to
          remove just the location while keeping camera information, or
          &quot;Strip All&quot; to remove everything. This happens locally and
          the metadata is never sent anywhere.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="mb-1 font-medium text-white">
          Can it export WebP?
        </h3>
        <p className="text-neutral-400">
          Mediasmith reads WebP but cannot write it. macOS itself has no WebP
          encoder — this is a limitation of the operating system, not a missing
          feature. WebP files you drop in are converted to JPG, PNG, HEIC or TIFF
          normally.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="mb-1 font-medium text-white">
          What does the free version limit?
        </h3>
        <p className="text-neutral-400">
          Only the number of files per batch. Every feature works without
          paying, and the free version is not a trial — it does not expire. A
          single one-time purchase removes the batch limit permanently. It is not
          a subscription.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="mb-1 font-medium text-white">
          I paid but the limit is still there.
        </h3>
        <p className="text-neutral-400">
          Open the upgrade screen and choose Restore Purchase, making sure you
          are signed in with the same Apple Account used for the purchase. If it
          still does not unlock, email us — no receipt or order number is needed
          to get help.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="mb-1 font-medium text-white">
          Can I cancel a batch that is running?
        </h3>
        <p className="text-neutral-400">
          Yes. The Cancel button in the bottom bar stops the run between files.
          Files already written stay; the rest are left untouched. No
          half-written files are left behind.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="mb-1 font-medium text-white">
          My output folder stopped working after I restarted the Mac.
        </h3>
        <p className="text-neutral-400">
          It should not — Mediasmith stores a security-scoped bookmark so the
          folder keeps working across restarts. If you see an error about the
          output folder no longer being accessible, choose the folder again under
          Destination. This can happen legitimately if the folder was moved,
          renamed, or lives on a drive that is not mounted.
        </p>
      </div>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        System Requirements
      </h2>
      <p className="mb-6 text-neutral-400">
        macOS 14.0 (Sonoma) or later. Apple silicon and Intel are both supported.
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
        <a href="/mediasmith/privacy" className="underline">
          Privacy Policy
        </a>{" "}
        ·{" "}
        <a href="/mediasmith/terms" className="underline">
          Terms of Service
        </a>
      </p>
    </main>
  );
}
