import Link from "next/link";

export const metadata = {
  title: "Mediasmith — Media Converter for Mac",
  description:
    "Convert video, images and audio by the folder. H.264, HEVC, ProRes, animated GIF, MP3, AAC, FLAC, Opus, iPhone ringtones, HEIC and more. Everything runs on your Mac — nothing is uploaded. One-time purchase.",
};

const FEATURES = [
  {
    title: "Three queues, one window",
    body: "Drop in a mixed folder and video, images and audio each land in their own queue with their own output format. No switching apps, no converting one kind of file at a time.",
  },
  {
    title: "Video, properly",
    body: "H.264, HEVC, ProRes 422 and 4444, HEVC with transparency, animated GIF, and ready-made targets for Apple TV, iPhone and iPad. Hardware encoding is used by default on Apple silicon.",
  },
  {
    title: "Audio, including MP3",
    body: "MP3, AAC, Apple Lossless, FLAC, Opus, WAV, AIFF, and 30-second iPhone ringtones. Extract the audio track straight out of a video, or downmix to mono to halve the size of a voice recording.",
  },
  {
    title: "Images with a real pipeline",
    body: "Resize, crop, rotate, watermark, border and adjust — in the order you choose, with a live preview of the result. HEIC, JPEG, PNG and TIFF out; WebP, BMP and GIF in.",
  },
  {
    title: "Nothing is offered that cannot be produced",
    body: "Every format in the list is checked against what your Mac can genuinely write before it appears. You will not pick an output and discover afterwards that it fails on every file.",
  },
  {
    title: "Private by construction",
    body: "The app ships without the network entitlement, so it cannot send anything anywhere even if it wanted to. No account, no analytics, no telemetry.",
  },
];

export default function MediasmithLanding() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-neutral-200">
      <p className="mb-3 text-sm font-medium uppercase tracking-wider text-emerald-400">
        macOS
      </p>
      <h1 className="mb-4 text-4xl font-bold text-white">Mediasmith</h1>
      <p className="mb-8 text-xl text-neutral-300">
        Convert video, photos and audio by the folder — without opening a single
        file.
      </p>

      <p className="mb-10 text-neutral-400">
        Drag a folder in, pick what each kind of file should become, and press
        Process. Conversions run in parallel with a progress bar and a time
        estimate per file, and a file that already exists gets a numbered name
        rather than being overwritten.
      </p>

      <div className="mb-12 grid gap-6 sm:grid-cols-2">
        {FEATURES.map((f) => (
          <div key={f.title}>
            <h2 className="mb-1 font-semibold text-white">{f.title}</h2>
            <p className="text-sm leading-relaxed text-neutral-400">{f.body}</p>
          </div>
        ))}
      </div>

      <div className="mb-12 rounded-lg border border-neutral-800 bg-neutral-900/50 p-5">
        <p className="mb-1 font-semibold text-white">Pay once</p>
        <p className="text-sm text-neutral-400">
          No subscription. No account. The free version converts up to 25 files
          per batch — every feature works, only the batch size is capped.
        </p>
      </div>

      <h2 className="mb-3 text-lg font-semibold text-white">Requirements</h2>
      <p className="mb-10 text-sm text-neutral-400">
        macOS 14.0 (Sonoma) or later, on Apple silicon or Intel. Available
        formats depend on what your Mac supports — the app shows you the ones it
        can actually write. See the{" "}
        <Link href="/mediasmith/terms" className="text-emerald-400 underline">
          terms
        </Link>{" "}
        for detail.
      </p>

      <h2 className="mb-3 text-lg font-semibold text-white">
        Open source acknowledgement
      </h2>
      <p className="mb-10 text-sm text-neutral-400">
        MP3 encoding uses{" "}
        <a
          href="https://lame.sourceforge.io"
          className="text-emerald-400 underline"
        >
          LAME
        </a>
        , licensed under the GNU Lesser General Public License 2.1. It is used
        unmodified and linked dynamically, so it can be replaced with your own
        build. The full licence text is included in the app, under Settings →
        About.
      </p>

      <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-neutral-800 pt-8 text-sm">
        <Link
          href="/mediasmith/privacy"
          className="text-emerald-400 underline"
        >
          Privacy Policy
        </Link>
        <Link href="/mediasmith/terms" className="text-emerald-400 underline">
          Terms of Service
        </Link>
        <Link href="/mediasmith/support" className="text-emerald-400 underline">
          Support
        </Link>
        <a
          href="mailto:support@eduardbruch.com"
          className="text-emerald-400 underline"
        >
          support@eduardbruch.com
        </a>
      </div>
    </main>
  );
}
