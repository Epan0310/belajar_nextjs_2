"use client";

import { motion } from "framer-motion";
import { FaJs, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "JavaScript",
      icon: FaJs,
      color: "#F7DF1E",
      level: 90,
      desc: "Mahir menggunakan JavaScript untuk membuat website interaktif dan logika aplikasi.",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "#000000",
      level: 85,
      desc: "Membangun website modern dan cepat dengan Next.js serta optimalisasi SEO.",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#38BDF8",
      level: 88,
      desc: "Menggunakan Tailwind untuk membuat tampilan yang responsif dan modern dengan cepat.",
    },
    {
      name: "UI/UX Design (Figma)",
      icon: FaFigma,
      color: "#F24E1E",
      level: 95,
      desc: "Mendesain antarmuka yang intuitif, menarik, dan berfokus pada pengalaman pengguna.",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      {/* Background gradient & glow animasi */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-black opacity-80"></div>
      <motion.div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/30 blur-[120px] rounded-full animate-pulse"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      ></motion.div>

      {/* Judul & deskripsi */}
      <div className="relative text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold mb-4"
        >
          My <span className="text-blue-500 dark:text-blue-400">Skills</span> ⚡
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Beberapa kemampuan utama yang terus saya asah untuk menciptakan karya
          digital yang berkesan.
        </motion.p>
      </div>

      {/* Skill cards */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.06 }}
            className="flex flex-col items-center justify-between bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-lg hover:shadow-blue-400/40 transition-all duration-300"
          >
            <div
              className="p-5 rounded-full mb-4"
              style={{
                boxShadow: `0 0 25px ${skill.color}55`,
                backgroundColor: `${skill.color}15`,
              }}
            >
              <skill.icon
                className="w-12 h-12"
                style={{ color: skill.color }}
              />
            </div>
            <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 text-center">
              {skill.desc}
            </p>

            {/* Progress bar */}
            <div className="w-full bg-gray-300/30 rounded-full h-3 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: skill.color }}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ delay: index * 0.4, duration: 1.2 }}
              ></motion.div>
            </div>
            <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
              {skill.level}%
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
