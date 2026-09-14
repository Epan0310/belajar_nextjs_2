"use client";

/**
 * ProjectCard.tsx
 * Reusable card component for displaying a single project.
 * Renders tech badges, optional live/repo links, and a glowing hover effect.
 */

import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import type { Project } from "../data/projects";

type Props = {
  project: Project;
  /** Stagger index for entrance animation */
  index?: number;
};

export default function ProjectCard({ project, index = 0 }: Props) {
  const { title, description, tech, liveUrl, repoUrl, featured } = project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group relative flex flex-col p-6 h-full"
    >
      {/* Featured badge */}
      {featured && (
        <span className="absolute top-4 right-4 flex items-center gap-1 text-[0.65rem] font-mono font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full">
          <Star size={10} fill="currentColor" />
          Featured
        </span>
      )}

      {/* Title */}
      <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 pr-16 group-hover:text-[var(--accent)] transition-colors duration-200">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1 mb-5">
        {description}
      </p>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {tech.map((t) => (
          <span key={t} className="tech-badge">
            {t}
          </span>
        ))}
      </div>

      {/* Action Links */}
      <div className="flex items-center gap-3 mt-auto">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-[var(--accent)] text-[var(--bg-base)] hover:opacity-90 transition-opacity duration-200"
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
        )}
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg border border-[var(--bg-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-all duration-200"
          >
            <Github size={13} />
            Source
          </a>
        )}
      </div>
    </motion.article>
  );
}
