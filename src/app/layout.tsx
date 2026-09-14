/**
 * layout.tsx — Root Layout (Server Component)
 *
 * IMPORTANT: This file must NOT have "use client" so that the Metadata
 * export works correctly with Next.js App Router.
 * Client-side providers are wrapped via <Providers> (components/Providers.tsx).
 */

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Providers from "./components/Providers";

/* ─── SEO Metadata ─────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: "Evan Faadillah — Frontend Engineer & UI/UX Enthusiast",
    template: "%s | Evan Faadillah",
  },
  description:
    "Portfolio of Evan Faadillah — a frontend engineer crafting modern, performant digital experiences with Next.js, TypeScript, and Tailwind CSS.",
  keywords: [
    "Evan Faadillah",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "UI/UX Designer",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
    "Web Development Indonesia",
  ],
  authors: [{ name: "Evan Faadillah", url: "https://evanfaadillah.vercel.app" }],
  creator: "Evan Faadillah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://evanfaadillah.vercel.app",
    siteName: "Evan Faadillah Portfolio",
    title: "Evan Faadillah — Frontend Engineer & UI/UX Enthusiast",
    description:
      "Crafting modern, performant digital experiences. Specialized in Frontend Engineering & UI/UX with Next.js, TypeScript, and Tailwind CSS.",
    images: [
      {
        url: "/profile.jpeg",
        width: 400,
        height: 400,
        alt: "Evan Faadillah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evan Faadillah — Frontend Engineer",
    description: "Crafting modern, performant digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ─── Layout ────────────────────────────────────────────────────────────── */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col transition-colors duration-300">
        <Providers>
          {/* Sticky top navbar */}
          <Navbar />

          {/* Page content — each page manages its own padding/width */}
          <main className="flex-1 pt-16">
            {children}
          </main>

          {/* Global footer */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
