/** ─── Project Data ─────────────────────────────────────────────────────────
 *  Update this file to add, edit, or remove projects from the portfolio.
 *  Fields:
 *  - id         : unique slug
 *  - title      : project display name
 *  - description: short summary (1–2 sentences)
 *  - tech       : array of technology names (shown as badges)
 *  - liveUrl    : deployed URL (optional)
 *  - repoUrl    : GitHub repository URL (optional)
 *  - featured   : if true, shown in the Hero section (max 3 recommended)
 * ──────────────────────────────────────────────────────────────────────── */

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "portfolio-v2",
    title: "Developer Portfolio V2",
    description:
      "A professional dark-mode portfolio built with Next.js 16, Tailwind CSS v4, and Framer Motion. Features animated hero, project showcase, and dynamic skill grid.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://evanfaadillah.vercel.app",
    repoUrl: "https://github.com/Epan0310/portfolio",
    featured: true,
  },
  {
    id: "wisata-app",
    title: "Wisata Nusantara App",
    description:
      "An Android app showcasing Indonesian tourist destinations with dynamic RecyclerView, Glide image loading, and a clean Material Design 3 interface.",
    tech: ["Kotlin", "Android", "RecyclerView", "Glide", "Material Design"],
    repoUrl: "https://github.com/Epan0310/wisata-app",
    featured: true,
  },
  {
    id: "ui-design-concept",
    title: "E-Commerce UI Concept",
    description:
      "A modern e-commerce UI concept designed in Figma. Focuses on minimalist product cards, a streamlined checkout flow, and consistent design tokens.",
    tech: ["Figma", "UI/UX", "Prototyping", "Design System"],
    liveUrl: "https://www.figma.com/community",
    featured: true,
  },
  {
    id: "blog-cms",
    title: "Blog CMS",
    description:
      "A headless blog platform powered by Next.js App Router with Markdown/MDX support, full-text search, and an admin dashboard for managing posts.",
    tech: ["Next.js", "MDX", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/Epan0310/blog-cms",
    featured: false,
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "A real-time weather dashboard consuming the OpenWeatherMap API. Features 7-day forecasts, hourly charts, and geolocation-based auto-detection.",
    tech: ["React", "TypeScript", "Chart.js", "OpenWeatherMap API"],
    repoUrl: "https://github.com/Epan0310/weather-dashboard",
    featured: false,
  },
];

/** Returns only featured projects (used in Hero section) */
export const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
