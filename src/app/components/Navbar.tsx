"use client";

/**
 * Navbar.tsx
 * Responsive navigation bar with:
 * - Active link highlight via usePathname
 * - Animated mobile hamburger menu (Framer Motion)
 * - Dark/Light mode toggle
 * - Resume external link
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Sun, Moon, Menu, X, ExternalLink } from "lucide-react";

const navLinks = [
  { href: "/",         label: "Home"     },
  { href: "/about",    label: "About"    },
  { href: "/projects", label: "Projects" },
  { href: "/gallery",  label: "Gallery"  },
];

const RESUME_URL = "https://drive.google.com/drive/folders/1oDn29NG9yF4sM87E6M9O6pz7rIh91Q0g";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-[var(--bg-border)] bg-[var(--bg-surface)]/80 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* ── Brand ── */}
        <Link
          href="/"
          className="flex items-center gap-2 font-mono font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-200"
        >
          <Code2 size={20} className="text-[var(--accent)]" />
          <span>evan<span className="text-[var(--accent)]">.dev</span></span>
        </Link>

        {/* ── Desktop Links ── */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`
                  relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${isActive
                    ? "text-[var(--accent)] bg-[var(--accent)]/8"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]"
                  }
                `}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="activeLink"
                    className="absolute inset-0 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}

          {/* Resume external link */}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 ml-2 px-4 py-2 rounded-lg text-sm font-semibold bg-[var(--accent)] text-[var(--bg-base)] hover:opacity-90 transition-opacity duration-200"
          >
            Resume
            <ExternalLink size={12} />
          </a>
        </div>

        {/* ── Theme Toggle + Hamburger ── */}
        <div className="flex items-center gap-2">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-[var(--bg-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden p-2 rounded-lg border border-[var(--bg-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[var(--bg-border)] bg-[var(--bg-surface)] md:hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map(({ href, label }) => {
                const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`
                      px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200
                      ${isActive
                        ? "text-[var(--accent)] bg-[var(--accent)]/10"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]"
                      }
                    `}
                  >
                    {label}
                  </Link>
                );
              })}
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mt-2 px-4 py-3 rounded-lg text-sm font-semibold bg-[var(--accent)] text-[var(--bg-base)] hover:opacity-90 transition-opacity"
              >
                Resume <ExternalLink size={13} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
