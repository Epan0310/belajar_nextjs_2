"use client";

/**
 * About Page (/about)
 *
 * Sections:
 *   1. Bio     — two-column: profile photo (left) + biography text (right)
 *   2. Skills  — SkillsGrid by category
 *   3. Social  — icon links (GitHub, LinkedIn, Instagram, Email)
 */


import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, MapPin, GraduationCap, Briefcase } from "lucide-react";
import SkillsGrid from "../components/SkillsGrid";
import Reveal from "../components/Reveal";
import { skillCategories } from "../data/skills";

const socialLinks = [
  { href: "https://github.com/Epan0310",           icon: Github,    label: "GitHub",    color: "hover:text-white"           },
  { href: "https://linkedin.com/in/evanfaadillah", icon: Linkedin,  label: "LinkedIn",  color: "hover:text-[#0A66C2]"       },
  { href: "https://instagram.com/evanfaadillah",   icon: Instagram, label: "Instagram", color: "hover:text-[#E1306C]"       },
  { href: "mailto:epanfaadillah@gmail.com",        icon: Mail,      label: "Email",     color: "hover:text-[var(--accent)]" },
];

export default function About() {
  return (
    <div className="relative overflow-hidden">

      {/* Dot grid bg */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      {/* Glow blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[var(--accent-violet)]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 py-20">

        {/* ════════════════════════════ BIO SECTION ════════════════════ */}
        <section className="flex flex-col lg:flex-row gap-12 items-start mb-20">

          {/* Left — Photo + Social */}
          <Reveal delay={0.05}>
            <div className="flex flex-col items-center gap-6 lg:sticky lg:top-24 lg:w-56 flex-shrink-0">

              {/* Profile photo with rotating glow */}
              <div className="relative">
                <motion.div
                  className="absolute -inset-1 rounded-2xl"
                  style={{
                    background: "linear-gradient(135deg, var(--accent), var(--accent-violet), var(--accent))",
                    backgroundSize: "200% 200%",
                  }}
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden">
                  <Image
                    src="/profile.jpeg"
                    alt="Evan Faadillah"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Name + role */}
              <div className="text-center">
                <h2 className="text-lg font-bold text-[var(--text-primary)]">Evan Faadillah</h2>
                <p className="text-sm text-[var(--accent)] font-mono mt-0.5">Frontend Engineer</p>
              </div>

              {/* Social icons */}
              <div className="flex gap-3">
                {socialLinks.map(({ href, icon: Icon, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`p-2.5 rounded-xl border border-[var(--bg-border)] text-[var(--text-secondary)] ${color} hover:border-current transition-all duration-200`}
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>

              {/* Quick info */}
              <div className="w-full space-y-2 text-xs text-[var(--text-secondary)] font-mono">
                <div className="flex items-center gap-2">
                  <MapPin size={12} className="text-[var(--accent)]" />
                  Purwokerto, Indonesia
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap size={12} className="text-[var(--accent)]" />
                  SMK Telkom Purwokerto
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase size={12} className="text-[var(--accent)]" />
                  Open to internship
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — Bio text */}
          <div className="flex-1">
            <Reveal delay={0.1}>
              <p className="terminal-label mb-2">// about_me</p>
              <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">
                Turning ideas into{" "}
                <span className="gradient-text">digital reality.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Hey there! I'm <span className="text-[var(--text-primary)] font-semibold">Evan Faadillah</span>, a
                  passionate frontend engineer and UI/UX enthusiast currently studying Software Engineering (RPL) at
                  SMK Telkom Purwokerto. My journey into web development started with a spark of curiosity about how
                  beautiful interfaces are made — and it quickly became an obsession.
                </p>
                <p>
                  I specialize in building <span className="text-[var(--accent)]">performant, accessible, and
                  visually stunning</span> web applications using modern technologies like{" "}
                  <strong className="text-[var(--text-primary)]">Next.js, TypeScript, and Tailwind CSS</strong>.
                  I believe great software isn't just about functionality — it's about crafting experiences that
                  feel intuitive and delightful.
                </p>
                <p>
                  Beyond the code, I'm deeply interested in <strong className="text-[var(--text-primary)]">design systems
                  and UI/UX principles</strong>. I spend time in Figma prototyping interfaces before writing a single
                  line of code, which helps me bridge the gap between design and engineering effectively.
                </p>
                <p>
                  When I'm not pushing pixels or debugging components, you'll find me exploring the latest design
                  trends, contributing to open-source projects, or experimenting with new tools in the JavaScript
                  ecosystem. I'm actively looking for internship and collaboration opportunities where I can grow,
                  contribute, and build something meaningful.
                </p>
              </div>
            </Reveal>

            {/* Timeline highlights */}
            <Reveal delay={0.3}>
              <div className="mt-8 space-y-4">
                <p className="terminal-label">// timeline</p>
                {[
                  { year: "2024 – Now", event: "Building professional portfolio & open-source projects" },
                  { year: "2023",       event: "Started learning Next.js, TypeScript & advanced Tailwind" },
                  { year: "2022",       event: "Enrolled at SMK Telkom Purwokerto — RPL Major" },
                  { year: "2022",       event: "First Android app built with Kotlin & Material Design" },
                ].map(({ year, event }) => (
                  <div key={year} className="flex gap-4 items-start">
                    <span className="text-xs font-mono text-[var(--accent)] w-24 flex-shrink-0 pt-0.5">{year}</span>
                    <div className="flex-1 flex items-start gap-3">
                      <div className="w-px h-full min-h-[1.5rem] bg-[var(--bg-border)] mt-2 flex-shrink-0" />
                      <p className="text-sm text-[var(--text-secondary)]">{event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ════════════════════════════ SKILLS SECTION ═════════════════ */}
        <section>
          <Reveal delay={0.05}>
            <p className="terminal-label mb-2">// tech_stack</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8">
              Skills & Technologies
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <SkillsGrid categories={skillCategories} />
          </Reveal>
        </section>

      </div>
    </div>
  );
}
