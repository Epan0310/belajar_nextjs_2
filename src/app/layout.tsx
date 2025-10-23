"use client";

import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }:{children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen transition-colors duration-300 bg-[var(--background)] text-[var(--foreground)]">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <Navbar />
          <main className="max-w-5xl mx-auto px-4 pt-24 pb-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
