"use client";

/**
 * SkillsGrid.tsx
 * Renders a grid of skill categories with terminal-style category labels
 * and individual skill chips.
 * Uses dynamic react-icons (Simple Icons / Si set).
 */

import dynamic from "next/dynamic";
import type { SkillCategory } from "../data/skills";
import * as SI from "react-icons/si";
import type { IconType } from "react-icons";

type Props = {
  categories: SkillCategory[];
};

/** Safely get icon from react-icons/si by string name */
function getIcon(name: string): IconType | null {
  return (SI as Record<string, IconType>)[name] ?? null;
}

export default function SkillsGrid({ categories }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {categories.map((cat) => (
        <div
          key={cat.category}
          className="card p-5"
        >
          {/* Terminal-style category label */}
          <p className="terminal-label mb-4">{cat.label}</p>
          <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
            {cat.category}
          </h3>

          {/* Skill chips */}
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill) => {
              const Icon = getIcon(skill.icon);
              return (
                <span
                  key={skill.name}
                  className="flex items-center gap-1.5 tech-badge text-[0.72rem] px-2.5 py-1.5"
                >
                  {Icon && <Icon size={13} />}
                  {skill.name}
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
