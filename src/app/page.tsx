"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 px-6">
      {/* Foto Profil */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-6 sm:mb-8"
      >
        <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden shadow-lg border-4 border-blue-500 dark:border-blue-400">
          <Image
            src="/profile.jpeg"
            alt="Evan Profile"
            width={176}
            height={176}
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>

      {/* Nama */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
      >
        Hi, I’m{" "}
        <span className="text-blue-500 dark:text-blue-400">Evan Faadillah</span>{" "}
        👋
      </motion.h1>

      {/* Deskripsi */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl sm:max-w-2xl leading-relaxed"
      >
        I’m a junior web developer passionate about UI/UX and clean design.
        Currently learning Next.js and building cool stuff 🚀
      </motion.p>

      {/* Tombol Aksi */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8 flex flex-col sm:flex-row gap-4"
      >
        <Link
          href="/projects"
          className="px-5 sm:px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-blue-500/30 text-sm sm:text-base"
        >
          View My Work
        </Link>
        <Link
          href="/contact"
          className="px-5 sm:px-6 py-3 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 text-sm sm:text-base"
        >
          Contact Me
        </Link>
      </motion.div>
    </section>
  );
}
