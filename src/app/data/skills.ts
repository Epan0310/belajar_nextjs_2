/** ─── Skills Data ──────────────────────────────────────────────────────────
 *  Organized by category. `icon` maps to a react-icons/si icon name.
 *  See https://react-icons.github.io/react-icons/icons/si/ for names.
 * ──────────────────────────────────────────────────────────────────────── */

export type Skill = {
  name: string;
  /** react-icons/si component name, e.g. "SiReact" */
  icon: string;
};

export type SkillCategory = {
  category: string;
  /** Terminal-style comment label, e.g. "// languages" */
  label: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    label: "// languages",
    skills: [
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "Kotlin",     icon: "SiKotlin"     },
      { name: "HTML5",      icon: "SiHtml5"       },
      { name: "CSS3",       icon: "SiCss3"        },
      { name: "SQL",        icon: "SiMysql"        },
    ],
  },
  {
    category: "Frameworks & Libraries",
    label: "// frameworks",
    skills: [
      { name: "Next.js",       icon: "SiNextdotjs"    },
      { name: "React",         icon: "SiReact"        },
      { name: "Tailwind CSS",  icon: "SiTailwindcss"  },
      { name: "Framer Motion", icon: "SiFramer"       },
      { name: "Android SDK",   icon: "SiAndroid"      },
    ],
  },
  {
    category: "Tools & Platforms",
    label: "// tools",
    skills: [
      { name: "Git",        icon: "SiGit"        },
      { name: "GitHub",     icon: "SiGithub"     },
      { name: "VS Code",    icon: "SiVisualstudiocode" },
      { name: "Vercel",     icon: "SiVercel"     },
      { name: "Postman",    icon: "SiPostman"    },
      { name: "npm",        icon: "SiNpm"        },
    ],
  },
  {
    category: "Design",
    label: "// design",
    skills: [
      { name: "Figma",         icon: "SiFigma"         },
      { name: "Adobe XD",      icon: "SiAdobexd"       },
      { name: "Canva",         icon: "SiCanva"         },
    ],
  },
];
