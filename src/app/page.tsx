"use client";

/**
 * Home Page (/)
 *
 * Sections:
 *   1. Hero       — headline, subtitle, profile photo, CTA buttons
 *   2. Tech Strip — horizontal scrolling technology name strip
 *   3. Featured   — top 3 featured ProjectCards with "View All" CTA
 */

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles, Mail } from "lucide-react";
import { featuredProjects } from "./data/projects";
import ProjectCard from "./components/ProjectCard";
import Reveal from "./components/Reveal";

/* Tech stack for the marquee strip */
const techStack = [
  "TypeScript", "Next.js", "React", "Tailwind CSS",
  "Framer Motion", "Figma", "Kotlin", "Git", "Vercel",
  "Node.js", "REST API", "UI/UX Design",
];

const RESUME_URL = "https://drive.google.com/drive/folders/1oDn29NG9yF4sM87E6M9O6pz7rIh91Q0g";

export default function Home() {
  return (
    <div className="relative overflow-hidden">

      {/* ── Dot grid background ── */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* ── Glow blob behind hero ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[var(--accent)]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* ══════════════════════════════ HERO ══════════════════════════════ */}
      <section className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 flex flex-col-reverse lg:flex-row items-center gap-16 min-h-[90vh]">

        {/* Left — Text content */}
        <div className="flex-1 text-center lg:text-left">

          {/* Badge */}
          <Reveal delay={0.05}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/8 text-[var(--accent)] text-xs font-mono font-semibold">
              <Sparkles size={12} />
              Available for work
            </span>
          </Reveal>

          {/* Headline */}
          <Reveal delay={0.15}>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight text-[var(--text-primary)] mb-4">
              Crafting{" "}
              <span className="gradient-text">modern, performant</span>
              <br />
              digital experiences.
            </h1>
          </Reveal>

          {/* Sub-headline */}
          <Reveal delay={0.25}>
            <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Hi, I'm{" "}
              <span className="text-[var(--text-primary)] font-semibold">Evan Faadillah</span>
              {" "}— a Frontend Engineer & UI/UX enthusiast from Indonesia.
              I build beautiful, accessible interfaces with Next.js, TypeScript, and Tailwind CSS.
            </p>
          </Reveal>

          {/* CTA buttons */}
          <Reveal delay={0.35}>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] text-[var(--bg-base)] font-semibold text-sm hover:opacity-90 transition-all duration-200 glow-cyan-sm"
              >
                View All Projects
                <ArrowRight size={15} />
              </Link>
              <a
                href={`mailto:epanfaadillah@gmail.com`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--bg-border)] text-[var(--text-secondary)] font-semibold text-sm hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-all duration-200"
              >
                <Mail size={15} />
                Contact Me
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--bg-border)] text-[var(--text-secondary)] font-semibold text-sm hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-all duration-200"
              >
                <Download size={15} />
                Resume
              </a>
            </div>
          </Reveal>

          {/* Stat badges */}
          <Reveal delay={0.45}>
            <div className="flex gap-6 mt-10 justify-center lg:justify-start">
              {[
                { value: "5+",  label: "Projects Built"     },
                { value: "2+",  label: "Years Learning"     },
                { value: "∞",   label: "Lines of Code"      },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl font-bold text-[var(--accent)] font-mono">{value}</p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right — Profile photo */}
        <Reveal delay={0.1}>
          <div className="relative flex-shrink-0">
            {/* Rotating glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, var(--accent), transparent, var(--accent-violet), transparent, var(--accent))",
                padding: "3px",
                borderRadius: "9999px",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />

            {/* Photo container */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[var(--bg-surface)] ring-4 ring-[var(--accent)]/20">
              <Image
                src="/profile.jpeg"
                alt="Evan Faadillah — Frontend Engineer"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating "status" badge */}
            <motion.div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 bg-[var(--bg-surface)] border border-[var(--bg-border)] rounded-full text-xs font-mono text-[var(--text-secondary)] whitespace-nowrap shadow-lg"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
              Open to opportunities
            </motion.div>
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════ TECH STRIP ═══════════════════════ */}
      <section className="border-y border-[var(--bg-border)] bg-[var(--bg-surface)]/50 py-4 overflow-hidden">
        <div className="flex gap-8 w-max animate-[scroll_30s_linear_infinite]">
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="text-xs font-mono font-medium text-[var(--text-muted)] flex items-center gap-2 whitespace-nowrap">
              <span className="text-[var(--accent)]">▹</span>
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════ FEATURED PROJECTS ════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <Reveal delay={0.05}>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="terminal-label mb-2">// featured_work</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
                Selected Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200"
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Mobile "View All" */}
        <div className="sm:hidden mt-8 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:underline"
          >
            View all projects <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════ CTA BANNER ═══════════════════════ */}
      <section className="border-t border-[var(--bg-border)]">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Let's build something{" "}
              <span className="gradient-text">amazing</span> together.
            </h2>
            <p className="text-[var(--text-secondary)] max-w-md mx-auto mb-8">
              Have a project in mind? I'd love to hear about it.
            </p>
            <a
              href="mailto:epanfaadillah@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[var(--accent)] text-[var(--bg-base)] font-semibold hover:opacity-90 transition-opacity glow-cyan"
            >
              Get In Touch <Mail size={16} />
            </a>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
