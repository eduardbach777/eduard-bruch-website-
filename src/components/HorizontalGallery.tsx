"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Lightbox from "./Lightbox";

interface GalleryImage {
  src: string;
  name: string;
}

export default function HorizontalGallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [isColorMode, setIsColorMode] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener("scroll", checkScroll);
      checkScroll();
      return () => scrollEl.removeEventListener("scroll", checkScroll);
    }
  }, [images]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="w-6 h-6 border border-white/30 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  if (images.length === 0) {
    return null;
  }

  return (
    <>
      <div className="relative group">
        {/* Color Toggle Button */}
        <div className="flex justify-end px-6 md:px-12 mb-4">
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

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-black/50 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white hover:text-black ${
            canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll left"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-black/50 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white hover:text-black ${
            canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll right"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Scrollable Gallery */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-6 md:px-12 py-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex-shrink-0 snap-center cursor-pointer group/item"
              onClick={() => openLightbox(index)}
            >
              <div className="relative h-[50vh] md:h-[60vh] w-auto aspect-[3/4] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.name}
                  fill
                  className={`object-cover transition-all duration-700 group-hover/item:scale-105 ${
                    isColorMode ? "" : "grayscale"
                  }`}
                  sizes="(max-width: 768px) 80vw, 40vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover/item:bg-black/20 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          <span className="text-white/30 text-xs tracking-[0.3em] uppercase">
            Scroll or swipe
          </span>
          <svg className="w-4 h-4 text-white/30 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>

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
