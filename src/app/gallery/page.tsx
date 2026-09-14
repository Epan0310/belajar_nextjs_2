"use client";

/**
 * Gallery Page (/gallery)
 *
 * Displays photo gallery with categories.
 */

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ImageIcon, Filter } from "lucide-react";
import Reveal from "../components/Reveal";

const photos = [
  { src: "/gallery/1.jpeg", category: "Travel" },
  { src: "/gallery/2.jpeg", category: "Work" },
  { src: "/gallery/3.jpeg", category: "Travel" },
  { src: "/gallery/4.jpeg", category: "Fun" },
  { src: "/gallery/5.jpeg", category: "Work" },
  { src: "/gallery/6.jpeg", category: "Fun" },
  { src: "/gallery/7.jpeg", category: "Travel" },
  { src: "/gallery/8.jpeg", category: "Fun" },
];

const categories = ["All", "Travel", "Work", "Fun"];

export default function GalleryPage() {
  const [selected, setSelected] = useState("All");
  const [preview, setPreview] = useState<string | null>(null);

  const filteredPhotos =
    selected === "All" ? photos : photos.filter((p) => p.category === selected);

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      {/* Glow blob */}
      <div className="absolute top-10 right-1/4 w-[500px] h-[300px] bg-[var(--accent-violet)]/4 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        
        {/* ── Page header ── */}
        <Reveal delay={0.05}>
          <div className="mb-12 text-center">
            <p className="terminal-label mb-2">// photography</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-4">
              My <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
              A collection of moments captured through my lens. Work, travel, and having fun.
            </p>
          </div>
        </Reveal>

        {/* ── Filter toggle ── */}
        <Reveal delay={0.15}>
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1 rounded-xl bg-[var(--bg-surface)] border border-[var(--bg-border)] gap-1 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelected(cat)}
                  className={`
                    flex items-center gap-1.5 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${selected === cat
                      ? "bg-[var(--accent)] text-[var(--bg-base)] shadow-sm"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]"
                    }
                  `}
                >
                  {cat === "All" ? <Filter size={14} /> : <ImageIcon size={14} />}
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Gallery grid ── */}
        <Reveal delay={0.25}>
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredPhotos.map((photo) => (
                <motion.div
                  key={photo.src}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  className="relative aspect-square overflow-hidden rounded-xl border border-[var(--bg-border)] bg-[var(--bg-surface)] cursor-pointer group shadow-sm hover:shadow-[0_8px_30px_var(--accent-glow)] hover:border-[var(--accent)] transition-all duration-300"
                  onClick={() => setPreview(photo.src)}
                >
                  <Image
                    src={photo.src}
                    alt={`Gallery ${photo.category}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-white text-sm font-medium tracking-wide">
                      {photo.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Reveal>

        {/* ── Count footer ── */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-[var(--text-muted)]">
            Showing {filteredPhotos.length} of {photos.length} photos
          </p>
        </div>
      </div>

      {/* 🖼️ Modal Preview */}
      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[100]"
            onClick={() => setPreview(null)}
          >
            <div className="relative max-w-5xl w-full px-4 flex justify-center items-center h-full">
              <button
                onClick={() => setPreview(null)}
                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
              >
                <X size={24} />
              </button>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-4xl max-h-[85vh] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/20"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={preview}
                  alt="Preview"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
