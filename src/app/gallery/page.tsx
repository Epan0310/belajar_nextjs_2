"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function GalleryPage() {
  const photos = [
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/5.jpg",
    "/gallery/6.jpg",
  ];

  return (
    <section className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 px-6 py-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        My <span className="text-blue-500 dark:text-blue-400">Gallery</span> 📷
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      >
        {photos.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
          >
            <Image
              src={src}
              alt={`Gallery photo ${index + 1}`}
              width={300}
              height={300}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
