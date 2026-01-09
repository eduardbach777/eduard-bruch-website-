"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface AboutImage {
  src: string;
  name: string;
}

export default function AboutPage() {
  const [images, setImages] = useState<AboutImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch("/api/about");
        const data = await res.json();
        setImages(data.images);
      } catch (error) {
        console.error("Error fetching about images:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  const headshot = images[0];

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] mb-4">ABOUT</h1>
          <div className="w-12 h-px bg-white/30 mx-auto" />
        </motion.div>

        {/* Two column layout - centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left - Headshot */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative aspect-[3/4] w-full max-w-sm bg-white/5 overflow-hidden">
              {loading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 border border-white/30 border-t-white rounded-full animate-spin" />
                </div>
              ) : headshot ? (
                <Image
                  src={headshot.src}
                  alt="Eduard Bruch"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-white/30 text-sm">
                  <span>Add images to /public/images/about/</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-8">
              Eduard Bruch
            </h2>

            <div className="space-y-6 text-white/60 leading-relaxed">
              <p>
                Actor based in Germany. Passionate about bringing authentic characters
                to life on screen and stage.
              </p>
              <p>
                With a background in both classical theater and contemporary film,
                I bring depth and nuance to every role.
              </p>
            </div>

            {/* Info */}
            <div className="flex gap-16 mt-12 pt-8 border-t border-white/10">
              <div>
                <p className="text-white/40 text-xs tracking-[0.15em] mb-2 uppercase">Based in</p>
                <p className="text-lg">Germany</p>
              </div>
              <div>
                <p className="text-white/40 text-xs tracking-[0.15em] mb-2 uppercase">Languages</p>
                <p className="text-lg">German, English</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
