"use client";

import { motion } from "framer-motion";

interface Video {
  src: string;
  name: string;
  type: string;
}

// Static video list - add new videos here
const videos: Video[] = [
  { src: "/videos/reel/999%20ausschnitt.mp4", name: "999", type: "video/mp4" },
  { src: "/videos/reel/casting%20demons%201%20eduard%20bruch.mp4", name: "Casting Demons 1", type: "video/mp4" },
  { src: "/videos/reel/casting%20demons%202.mp4", name: "Casting Demons 2", type: "video/mp4" },
  { src: "/videos/reel/THE%20VANISHED%20WITNESS%20Rough%20Cut%202%20%5BeF9vYs6z6BU%5D%20Kopie.MOV", name: "The Vanished Witness", type: "video/quicktime" },
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
                key={video.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-6"
              >
                <div className="relative aspect-video bg-white/5">
                  <video
                    controls
                    playsInline
                    className="w-full h-full"
                    preload="auto"
                  >
                    <source src={video.src} type={video.type} />
                    Your browser does not support the video tag.
                  </video>
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
