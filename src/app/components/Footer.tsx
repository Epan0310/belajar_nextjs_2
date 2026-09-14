/**
 * Footer.tsx
 * Site-wide footer with social links and copyright.
 */

import Link from "next/link";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/Epan0310",
    icon: Github,
    label: "GitHub",
    hoverClass: "hover:text-white hover:border-white/30",
  },
  {
    href: "https://linkedin.com/in/evanfaadillah",
    icon: Linkedin,
    label: "LinkedIn",
    hoverClass: "hover:text-[#0A66C2] hover:border-[#0A66C2]/40",
  },
  {
    href: "mailto:epanfaadillah@gmail.com",
    icon: Mail,
    label: "Email",
    hoverClass: "hover:text-[var(--accent)] hover:border-[var(--accent)]/40",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--bg-border)] bg-[var(--bg-surface)] mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2 text-[var(--text-secondary)]">
          <Code2 size={18} className="text-[var(--accent)]" />
          <span className="font-mono text-sm">
            <span className="text-[var(--text-primary)] font-semibold">Evan Faadillah</span>
            <span className="mx-2 opacity-40">/</span>
            <span className="text-[var(--accent)]">evan.dev</span>
          </span>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3">
          {socialLinks.map(({ href, icon: Icon, label, hoverClass }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className={`
                flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--bg-border)]
                text-[var(--text-secondary)] text-sm font-medium
                transition-all duration-200 ${hoverClass}
              `}
            >
              <Icon size={15} />
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-[var(--text-muted)] font-mono text-center md:text-right">
          © {year} Evan Faadillah. Built with Next.js & ♥
        </p>
      </div>
    </footer>
  );
}
