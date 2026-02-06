import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <Link href="/" className="text-xs tracking-[0.25em] font-light">
            EDUARD BRUCH
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6 md:gap-8">
            <Link
              href="/reel"
              className="text-xs tracking-[0.15em] text-white/40 hover:text-white transition-colors uppercase"
            >
              Reel
            </Link>
            <Link
              href="/gallery"
              className="text-xs tracking-[0.15em] text-white/40 hover:text-white transition-colors uppercase"
            >
              Gallery
            </Link>
            <Link
              href="/creative"
              className="text-xs tracking-[0.15em] text-white/40 hover:text-white transition-colors uppercase"
            >
              Creative
            </Link>
            <Link
              href="/contact"
              className="text-xs tracking-[0.15em] text-white/40 hover:text-white transition-colors uppercase"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Legal row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
          <div className="flex items-center gap-6">
            <Link
              href="/pdfcreator/impressum"
              className="text-[10px] tracking-[0.1em] text-white/30 hover:text-white/60 transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/pdfcreator/privacy"
              className="text-[10px] tracking-[0.1em] text-white/30 hover:text-white/60 transition-colors"
            >
              Datenschutz
            </Link>
          </div>
          <p className="text-white/20 text-[10px] tracking-wider">
            © {new Date().getFullYear()} Eduard Bruch
          </p>
        </div>
      </div>
    </footer>
  );
}
