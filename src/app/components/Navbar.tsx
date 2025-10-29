"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 backdrop-blur-md bg-[var(--background)]/80 border-b border-gray-200 dark:border-gray-800 shadow-sm z-50 transition-all duration-300">
      {/* Logo / Title */}
      <h1 className="text-xl font-semibold text-[var(--foreground)]">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          🌍 MySite
        </Link>
      </h1>

      {/* Nav Links */}
      <div className="hidden sm:flex gap-6 text-[var(--foreground)] font-medium">
        <Link
          href="/"
          className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          Projects
        </Link>
        <Link
          href="/gallery"
          className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          Gallery
        </Link>
        <Link
          href="/contact"
          className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          Contact
        </Link>
        <Link
          href="/skills"
          className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          Skills
        </Link>
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="ml-4 rounded-full border border-gray-400 dark:border-gray-600 p-2 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
        aria-label="Toggle Dark Mode"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      {/* Mobile Menu Button */}
      <div className="sm:hidden flex items-center">
        <details className="relative">
          <summary className="list-none cursor-pointer ml-3 p-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            ☰
          </summary>
          <div className="absolute right-0 mt-2 w-40 bg-[var(--background)] border border-gray-200 dark:border-gray-700 rounded-lg shadow-md py-2 flex flex-col text-sm">
            <Link
              href="/"
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Projects
            </Link>
            <Link
              href="/gallery"
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Contact
            </Link>
          </div>
        </details>
      </div>
    </nav>
  );
}
