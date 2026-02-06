import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="text-xs tracking-[0.25em] font-light">
            EDUARD BRUCH
          </Link>

          {/* Links */}
          <div className="flex items-center gap-8">
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
          </div>

          {/* Legal + Copyright */}
          <div className="flex items-center gap-6">
            <Link
              href="/pdfcreator/impressum"
              className="text-xs tracking-[0.15em] text-white/40 hover:text-white transition-colors uppercase"
            >
              Impressum
            </Link>
            <Link
              href="/pdfcreator/privacy"
              className="text-xs tracking-[0.15em] text-white/40 hover:text-white transition-colors uppercase"
            >
              Privacy
            </Link>
            <p className="text-white/30 text-xs tracking-wider">
              © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
