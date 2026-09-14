"use client";

/**
 * Providers.tsx
 * Client-side wrapper for context providers (ThemeProvider).
 * Kept separate so that layout.tsx can remain a Server Component
 * and export Next.js Metadata.
 */

import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      {children}
    </ThemeProvider>
  );
}
