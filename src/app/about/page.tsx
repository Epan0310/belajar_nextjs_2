"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Mail, Github } from "lucide-react";
import { useInView } from "react-intersection-observer";
import FadeInSection from "../components/FadeInSection";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className={`pt-32 pb-20 max-w-3xl mx-auto text-center transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Efek aura glow di belakang foto */}
      <FadeInSection>
        <div className="relative mb-8 flex justify-center">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg z-10"
          >
            <Image
              src="/profile.jpeg"
              alt="Evan Profile"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Cahaya berputar di belakang foto */}
          <motion.div
            className="absolute inset-0 flex justify-center items-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute w-52 h-52 bg-blue-500/20 blur-3xl rounded-full" />
          </motion.div>
        </div>

        {/* Judul & Deskripsi */}
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed px-4">
          I’m Evan, a student at SMK Telkom Purwokerto majoring in Software
          Engineering (RPL). I love designing modern interfaces in Figma and
          building responsive websites with Next.js and Tailwind CSS. My goal is
          to become a full-stack developer who creates meaningful digital
          experiences.
        </p>

        {/* Sosmed */}
        <div className="mt-8 flex justify-center gap-6 text-2xl">
          <a
            href="https://instagram.com/evanfaadillah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-transform hover:scale-110"
          >
            <Instagram size={28} />
          </a>
          <a
            href="mailto:epanfaadillah@gmail.com"
            className="hover:text-blue-400 transition-transform hover:scale-110"
          >
            <Mail size={28} />
          </a>
          <a
            href="https://github.com/Epan0310"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition-transform hover:scale-110"
          >
            <Github size={28} />
          </a>
        </div>
      </FadeInSection>
    </section>
  );
}
