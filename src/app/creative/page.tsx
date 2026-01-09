"use client";

import { motion } from "framer-motion";

export default function CreativePage() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-3xl mx-auto px-6 text-center py-32">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] mb-6">CREATIVE</h1>
          <div className="w-12 h-px bg-white/30 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-white/60 text-base md:text-lg tracking-wide leading-relaxed max-w-xl mx-auto">
            Beyond acting, I collaborate on creative projects through my production company.
          </p>
        </motion.div>

        {/* 300px spacer */}
        <div style={{ height: '300px' }} />

        {/* Bottom Section - Angel Company Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="https://angelcompanysolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="border border-white/20 p-16 md:p-20 transition-all duration-500 hover:border-white/50 hover:bg-white/5">
              <h2 className="text-2xl md:text-3xl font-light tracking-[0.15em] mb-6 group-hover:text-white transition-colors">
                ANGEL COMPANY SOLUTIONS
              </h2>
              <p className="text-white/50 text-base md:text-lg tracking-wide mb-10">
                Creative production and digital solutions
              </p>
              <span className="inline-flex items-center gap-3 text-white/40 text-sm tracking-[0.15em] uppercase group-hover:text-white transition-colors">
                Visit Website
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
