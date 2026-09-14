"use client";

/**
 * Projects Page (/projects)
 *
 * Displays all projects from data/projects.ts in a responsive grid.
 * Includes a "All / Featured" filter toggle.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Star } from "lucide-react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";

type Filter = "all" | "featured";

const filterOptions: { value: Filter; label: string; icon: React.ReactNode }[] = [
  { value: "all",      label: "All Projects", icon: <Layers size={14} />  },
  { value: "featured", label: "Featured",     icon: <Star   size={14} />  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filtered = activeFilter === "featured"
    ? projects.filter((p) => p.featured)
    : projects;

  return (
    <div className="relative overflow-hidden min-h-screen">

      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      {/* Glow blob */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--accent)]/4 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-20">

        {/* ── Page header ── */}
        <Reveal delay={0.05}>
          <div className="mb-12 text-center">
            <p className="terminal-label mb-2">// my_work</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-4">
              All{" "}
              <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
              A showcase of what I've built — from web apps to design concepts and Android apps.
              Each project is a learning milestone.
            </p>
          </div>
        </Reveal>

        {/* ── Filter toggle ── */}
        <Reveal delay={0.15}>
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1 rounded-xl bg-[var(--bg-surface)] border border-[var(--bg-border)] gap-1">
              {filterOptions.map(({ value, label, icon }) => (
                <button
                  key={value}
                  onClick={() => setActiveFilter(value)}
                  className={`
                    flex items-center gap-1.5 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${activeFilter === value
                      ? "bg-[var(--accent)] text-[var(--bg-base)] shadow-sm"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]"
                    }
                  `}
                >
                  {icon}
                  {label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Projects grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-[var(--text-muted)]">
            <Layers size={40} className="mx-auto mb-4 opacity-30" />
            <p className="font-mono text-sm">No projects found.</p>
          </div>
        )}

        {/* ── Count footer ── */}
        <div className="mt-10 text-center">
          <p className="text-xs font-mono text-[var(--text-muted)]">
            Showing {filtered.length} of {projects.length} projects
          </p>
        </div>

      </div>
    </div>
  );
}
