"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="min-h-screen flex flex-col">
      {/* Header - same height as navbar */}
      <div className="h-20" />

      <div className="flex-1 flex items-center justify-center py-16 md:py-24">
        <div className="w-full max-w-lg mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] mb-4">CONTACT</h1>
            <div className="w-12 h-px bg-white/30 mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <a
              href="mailto:contact@eduardbruch.com"
              className="text-lg text-white/70 hover:text-white transition-colors tracking-wider"
            >
              contact@eduardbruch.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {isSubmitted ? (
              <div className="text-center py-16">
                <p className="text-white/60 text-lg mb-8">Message sent. Thank you.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-white/40 hover:text-white transition-colors text-xs tracking-[0.15em] uppercase"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div>
                  <label htmlFor="name" className="block text-xs tracking-[0.15em] text-white/40 mb-3 uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white placeholder:text-white/20 focus:border-white focus:outline-none transition-colors text-base"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs tracking-[0.15em] text-white/40 mb-3 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white placeholder:text-white/20 focus:border-white focus:outline-none transition-colors text-base"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs tracking-[0.15em] text-white/40 mb-3 uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white placeholder:text-white/20 focus:border-white focus:outline-none transition-colors resize-none text-base"
                  />
                </div>

                <div className="pt-8 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
