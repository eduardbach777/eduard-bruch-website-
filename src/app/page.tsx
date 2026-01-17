"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HorizontalGallery from "@/components/HorizontalGallery";

export default function Home() {
  return (
    <>
      {/* Showreel Video Section */}
      <section className="pt-32 pb-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          <div className="aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/RYViCj1ebkM"
              title="Eduard Bruch Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Hero Section with Gallery */}
      <section className="relative min-h-screen flex flex-col justify-center py-32">
        <div className="relative z-10 text-center px-6 mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.3em] mb-8"
          >
            EDUARD BRUCH
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="/reel" className="btn btn-primary">
              Reel
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Contact
            </Link>
          </motion.div>
        </div>

        {/* Gallery in Hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
        >
          <HorizontalGallery />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <Link
            href="/gallery"
            className="text-white/50 text-sm tracking-[0.15em] uppercase hover:text-white transition-colors inline-flex items-center gap-3"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-white/30 text-xs tracking-[0.2em] uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent"
            />
          </div>
        </motion.div>
      </section>

      {/* Reel Section */}
      <section className="py-32 md:py-48 border-t border-white/10">
        <div className="flex flex-col items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em] mb-6 text-center">
              SHOWREEL
            </h2>
            <div className="w-12 h-px bg-white/30 mb-10" />
            <p className="text-white/50 text-base md:text-lg tracking-wide mb-16 max-w-lg leading-relaxed text-center">
              Selected work from film, television, and stage productions
            </p>
            <Link href="/reel" className="btn btn-outline">
              Watch Reel
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 md:py-48 border-t border-white/10">
        <div className="flex flex-col items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em] mb-6 text-center">
              GET IN TOUCH
            </h2>
            <div className="w-12 h-px bg-white/30 mb-10" />
            <p className="text-white/50 text-base md:text-lg tracking-wide mb-16 max-w-lg leading-relaxed text-center">
              Available for film, television, and commercial projects
            </p>
            <Link href="/contact" className="btn btn-primary">
              Contact
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
