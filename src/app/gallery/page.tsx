"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Lightbox from "@/components/Lightbox";

interface GalleryImage {
  src: string;
  name: string;
}

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [isColorMode, setIsColorMode] = useState(false);

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch("/api/gallery");
        const data = await res.json();
        setImages(data.images);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const goToPrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };
  const goToNext = () => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  return (
    <>
      <section className="min-h-screen bg-black pb-20">
        {/* Spacer for navbar */}
        <div className="h-32" />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header with title and toggle */}
          <div className="flex items-center justify-between mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-light tracking-[0.2em]"
            >
              GALLERY
            </motion.h1>

            {/* Color Toggle Button */}
            <button
              onClick={() => setIsColorMode(!isColorMode)}
              className={`flex items-center gap-2 px-4 py-2 text-xs tracking-[0.15em] uppercase transition-all duration-300 border ${
                isColorMode
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white/60 border-white/20 hover:border-white/40 hover:text-white"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isColorMode ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                ) : (
                  <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
                )}
              </svg>
              {isColorMode ? "Color" : "B/W"}
            </button>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            </div>
          ) : images.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 border border-white/10"
            >
              <p className="text-white/50 mb-4">No images yet</p>
              <p className="text-white/30 text-sm">
                Add images to <code className="bg-white/10 px-2 py-1">/public/images/gallery/</code>
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
            >
              {images.map((image, index) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="relative aspect-square bg-white/5 cursor-pointer group overflow-hidden"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.name}
                    fill
                    className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                      isColorMode ? "" : "grayscale"
                    }`}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && images[selectedIndex] && (
        <Lightbox
          isOpen={selectedIndex !== null}
          imageSrc={images[selectedIndex].src}
          onClose={closeLightbox}
          onPrev={selectedIndex > 0 ? goToPrev : undefined}
          onNext={selectedIndex < images.length - 1 ? goToNext : undefined}
        />
      )}
    </>
  );
}
