import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Main row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-14">
          {/* Logo */}
          <Link
            href="/"
            className="text-base tracking-[0.3em] font-light text-white hover:opacity-70 transition-opacity"
          >
            EDUARD BRUCH
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <Link
              href="/reel"
              className="text-sm tracking-[0.15em] text-white/50 hover:text-white transition-colors uppercase"
            >
              Reel
            </Link>
            <Link
              href="/gallery"
              className="text-sm tracking-[0.15em] text-white/50 hover:text-white transition-colors uppercase"
            >
              Gallery
            </Link>
            <Link
              href="/creative"
              className="text-sm tracking-[0.15em] text-white/50 hover:text-white transition-colors uppercase"
            >
              Software
            </Link>
            <Link
              href="/contact"
              className="text-sm tracking-[0.15em] text-white/50 hover:text-white transition-colors uppercase"
            >
              Contact
            </Link>
            <Link
              href="/apps"
              className="text-sm tracking-[0.15em] text-white/50 hover:text-white transition-colors uppercase"
            >
              Apps
            </Link>
          </nav>
        </div>

        {/* Legal row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10 border-t border-white/10">
          <nav className="flex flex-wrap items-center justify-center gap-8">
            <Link
              href="/impressum"
              className="text-sm tracking-[0.1em] text-white/40 hover:text-white/70 transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-sm tracking-[0.1em] text-white/40 hover:text-white/70 transition-colors"
            >
              Datenschutz
            </Link>
            <Link
              href="/support"
              className="text-sm tracking-[0.1em] text-white/40 hover:text-white/70 transition-colors"
            >
              Support
            </Link>
          </nav>
          <p className="text-white/30 text-sm tracking-wider">
            &copy; {new Date().getFullYear()} Eduard Bruch
          </p>
        </div>
      </div>
    </footer>
  );
}
