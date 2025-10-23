"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function GalleryPage() {
  // Tambahkan kategori ke setiap foto
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

  // Filter foto sesuai kategori
  const filteredPhotos =
    selected === "All" ? photos : photos.filter((p) => p.category === selected);

  return (
    <section className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 px-6 py-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
        My <span className="text-blue-500 dark:text-blue-400">Gallery</span> 📷
      </h1>

      {/* Filter buttons */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              selected === cat
                ? "bg-blue-500 text-white"
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
            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
          >
            <Image
              src={photo.src}
              alt={`Gallery photo ${index + 1}`}
              width={300}
              height={300}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
            {/* Overlay kategori */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-sm text-center py-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {photo.category}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
