"use client";
import React from "react";

function IconMail(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 6v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconInstagram(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  );
}

function IconPhone(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconMap(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      {/* Judul */}
      <h1 className="text-4xl font-bold mb-6">Contact Me 💬</h1>

      {/* Deskripsi */}
      <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-xl">
        Let’s connect! You can reach me through email, Instagram, or phone.
      </p>

      {/* Info Kontak */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl w-full">
        {/* Email */}
        <div className="flex flex-col items-center p-6 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm">
          <IconMail className="text-blue-500 mb-3" />
          <h3 className="font-semibold text-lg">Email</h3>
          <a
            href="mailto:epanfaadillah@gmail.com"
            className="text-blue-500 hover:underline mt-1"
          >
            epanfaadillah@gmail.com
          </a>
        </div>

        {/* Instagram */}
        <div className="flex flex-col items-center p-6 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm">
          <IconInstagram className="text-pink-500 mb-3" />
          <h3 className="font-semibold text-lg">Instagram</h3>
          <a
            href="https://instagram.com/evanfaadillah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-1"
          >
            @evanfaadillah
          </a>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center p-6 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm">
          <IconPhone className="text-green-500 mb-3" />
          <h3 className="font-semibold text-lg">Phone</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            +62 812-1560-0081
          </p>
        </div>

        {/* Location (spans full width on small screens) */}
        <div className="flex flex-col items-center p-6 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm sm:col-span-2 md:col-span-3">
          <IconMap className="text-red-500 mb-3" />
          <h3 className="font-semibold text-lg">Location</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Purwokerto, Indonesia
          </p>
        </div>
      </div>
    </div>
  );
}
