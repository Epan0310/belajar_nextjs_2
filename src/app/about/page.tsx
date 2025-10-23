import React from "react";

export default function About() {
  return (
    <section className="pt-32 pb-20 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        I’m Evan, a student at SMK Telkom Purwokerto majoring in Software
        Engineering (RPL). I love designing modern interfaces in Figma and
        building responsive websites with Next.js and Tailwind CSS. My goal is
        to become a full-stack developer who creates meaningful digital
        experiences.
      </p>

      <div className="mt-8 flex justify-center gap-6 text-2xl">
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500"
        >
          📷
        </a>
        <a href="mailto:youremail@example.com" className="hover:text-blue-400">
          📧
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-500"
        >
          💻
        </a>
      </div>
    </section>
  );
}
