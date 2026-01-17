"use client";

import { motion } from "framer-motion";

interface Video {
  youtubeId: string;
  name: string;
}

// YouTube video list - add YouTube video IDs here
// To get the ID: from https://www.youtube.com/watch?v=XXXXX, the ID is XXXXX
const videos: Video[] = [
  { youtubeId: "RYViCj1ebkM", name: "Showreel" },
  { youtubeId: "YXubRh1TxAk", name: "The Vanished Witness" },
  { youtubeId: "D3rnVWu00Ws", name: "999" },
  { youtubeId: "WrLpPx3PEpc", name: "Casting Demons 1" },
  { youtubeId: "Xv8LJVgs4iU", name: "Casting Demons 2" },
];

export default function ReelPage() {
  const loading = false;

  return (
    <section className="min-h-screen flex flex-col">
      {/* Header - same height as navbar */}
      <div className="h-20" />

      <div className="flex-1 flex flex-col max-w-5xl mx-auto px-6 md:px-12 w-full py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] mb-4">REEL</h1>
          <div className="w-12 h-px bg-white/30 mx-auto" />
        </motion.div>

        {loading ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="w-6 h-6 border border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        ) : videos.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-1 flex flex-col items-center justify-center text-center"
          >
            <p className="text-white/60 text-lg tracking-wider mb-4">No videos yet</p>
            <p className="text-white/40 text-sm">
              Add videos to <code className="bg-white/10 px-2 py-1 rounded">/public/videos/reel/</code>
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-20"
          >
            {videos.map((video, index) => (
              <motion.div
                key={video.youtubeId}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-6"
              >
                <div className="relative aspect-video bg-white/5 overflow-hidden rounded-sm">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
                    title={video.name}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="text-center text-white/50 text-sm tracking-wider uppercase">
                  {video.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
