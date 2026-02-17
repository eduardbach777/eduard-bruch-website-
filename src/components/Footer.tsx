import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/20 bg-neutral-950 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Logo */}
          <Link href="/" className="text-sm tracking-[0.3em] font-light text-white">
            EDUARD BRUCH
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <Link
              href="/reel"
              className="text-sm tracking-[0.15em] text-white/60 hover:text-white transition-colors uppercase"
            >
              Reel
            </Link>
            <Link
              href="/gallery"
              className="text-sm tracking-[0.15em] text-white/60 hover:text-white transition-colors uppercase"
            >
              Gallery
            </Link>
            <Link
              href="/creative"
              className="text-sm tracking-[0.15em] text-white/60 hover:text-white transition-colors uppercase"
            >
              Creative
            </Link>
            <Link
              href="/contact"
              className="text-sm tracking-[0.15em] text-white/60 hover:text-white transition-colors uppercase"
            >
              Contact
            </Link>
            <Link
              href="/apps"
              className="text-sm tracking-[0.15em] text-white/60 hover:text-white transition-colors uppercase"
            >
              Apps
            </Link>
          </nav>
        </div>

        {/* Legal row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/15">
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/impressum"
              className="text-sm tracking-[0.1em] text-white/70 hover:text-white transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/support"
              className="text-sm tracking-[0.1em] text-white/70 hover:text-white transition-colors"
            >
              Support
            </Link>
          </nav>
          <p className="text-white/50 text-sm tracking-wider">
            &copy; {new Date().getFullYear()} Eduard Bruch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
