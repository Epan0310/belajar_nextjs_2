"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 px-6">
      <Reveal delay={0.1}>
        <div className="w-32 h-32 md:w-40 md:h-40 mb-6 rounded-full overflow-hidden shadow-lg border-4 border-blue-500 dark:border-blue-400 mx-auto">
          <Image
            src="/profile.jpeg"
            alt="Evan Profile"
            width={176}
            height={176}
            className="object-cover w-full h-full"
          />
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I’m{" "}
          <span className="text-blue-500 dark:text-blue-400">
            Evan Faadillah
          </span>{" "}
          👋
        </h1>
      </Reveal>

      <Reveal delay={0.3}>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          I’m a junior web developer passionate about UI/UX and clean design.
          Currently learning Next.js and building cool stuff 🚀
        </p>
      </Reveal>

      <Reveal delay={0.4}>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/projects"
            className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-blue-500/30"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
