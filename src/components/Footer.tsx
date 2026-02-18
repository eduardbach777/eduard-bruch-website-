import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 pt-24 pb-16 md:pt-32 md:pb-20">
      <div className="max-w-5xl mx-auto px-8 md:px-12">
        {/* Logo */}
        <div className="text-center mb-16">
          <Link
            href="/"
            className="text-xs tracking-[0.3em] font-light text-white hover:opacity-70 transition-opacity"
          >
            EDUARD BRUCH
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-10 md:gap-14 mb-20">
          <Link
            href="/reel"
            className="text-[11px] tracking-[0.2em] text-white/40 hover:text-white transition-colors uppercase"
          >
            Reel
          </Link>
          <Link
            href="/gallery"
            className="text-[11px] tracking-[0.2em] text-white/40 hover:text-white transition-colors uppercase"
          >
            Gallery
          </Link>
          <Link
            href="/creative"
            className="text-[11px] tracking-[0.2em] text-white/40 hover:text-white transition-colors uppercase"
          >
            Software
          </Link>
          <Link
            href="/contact"
            className="text-[11px] tracking-[0.2em] text-white/40 hover:text-white transition-colors uppercase"
          >
            Contact
          </Link>
          <Link
            href="/apps"
            className="text-[11px] tracking-[0.2em] text-white/40 hover:text-white transition-colors uppercase"
          >
            Apps
          </Link>
        </nav>

        {/* Legal */}
        <nav className="flex flex-wrap items-center justify-center gap-10 mb-16">
          <Link
            href="/impressum"
            className="text-[11px] tracking-[0.15em] text-white/25 hover:text-white/50 transition-colors"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="text-[11px] tracking-[0.15em] text-white/25 hover:text-white/50 transition-colors"
          >
            Datenschutz
          </Link>
          <Link
            href="/support"
            className="text-[11px] tracking-[0.15em] text-white/25 hover:text-white/50 transition-colors"
          >
            Support
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-white/20 text-[11px] tracking-[0.15em] text-center">
          &copy; {new Date().getFullYear()} Eduard Bruch
        </p>
      </div>
    </footer>
  );
}
