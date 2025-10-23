"use client";

export default function Projects() {
  const projectList = [
    {
      name: "Portfolio Website",
      desc: "A personal portfolio built with Next.js and TailwindCSS, featuring dark mode and responsive design.",
    },
    {
      name: "UI Design Concept",
      desc: "A creative UI concept made in Figma, focusing on modern minimalism and user experience.",
    },
    {
      name: "Wisata App",
      desc: "An Android app showcasing tourist attractions using RecyclerView and Glide.",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-20 bg-[var(--background)] transition-colors duration-300">
      <h1 className="text-4xl font-bold mb-10 text-center">
        My <span className="text-blue-500 dark:text-blue-400">Projects</span>
      </h1>

      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((p, i) => (
          <li
            key={i}
            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
              {p.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{p.desc}</p>
            <button className="px-4 py-2 text-sm font-medium border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors">
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
