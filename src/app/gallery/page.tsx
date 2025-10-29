"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function GalleryPage() {
  // Foto + kategori
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
  const [selected, setSelected] = useState("All");
  const [preview, setPreview] = useState(null); // buat lightbox foto

  const filteredPhotos =
    selected === "All" ? photos : photos.filter((p) => p.category === selected);

  return (
    <section className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 px-6 py-20">
      {/* Judul */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
        My <span className="text-blue-500 dark:text-blue-400">Gallery</span> 📷
      </h1>

      {/* Filter kategori */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              selected === cat
                ? "bg-blue-500 text-white shadow-md shadow-blue-500/30"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid foto */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      >
        {filteredPhotos.map((photo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => setPreview(photo.src)}
            className="relative overflow-hidden rounded-xl shadow-md cursor-pointer group"
          >
            {/* Efek glow */}
            <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"></div>

            {/* Foto */}
            <Image
              src={photo.src}
              alt={`Gallery photo ${index + 1}`}
              width={300}
              height={300}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110 rounded-xl"
            />

            {/* Overlay kategori */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-sm text-center py-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {photo.category}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Preview */}
      {preview && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
          onClick={() => setPreview(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-3xl w-full mx-4"
          >
            <Image
              src={preview}
              alt="Preview"
              width={1000}
              height={1000}
              className="rounded-lg shadow-2xl w-full h-auto"
            />
            <button
              className="absolute top-3 right-3 bg-black/60 text-white px-3 py-1 rounded-full hover:bg-black transition"
              onClick={() => setPreview(null)}
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
