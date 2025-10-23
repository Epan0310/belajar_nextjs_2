"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center p-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/profile.jpeg"
          width={160}
          height={160}
          alt="Evan's Profile"
          className="rounded-full shadow-lg mb-4"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-4xl font-bold mb-2"
      >
        Hi, I'm Evan 👋
      </motion.h1>

      <p className="text-gray-600 max-w-md">
        I love designing creative UIs and developing web apps.
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Link href="/projects" className="mt-4 text-blue-500 hover:underline">
          See my work →
        </Link>
      </motion.div>
    </main>
  );
}
