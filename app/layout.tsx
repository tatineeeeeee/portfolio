import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://justinecesardev.vercel.app"),
  title: "Justine Cesar Ocampo | Full-Stack Web Developer",
  description: "Full-stack web developer who ships production apps with 109+ unit tests, CI/CD pipelines, and security audits. Specializing in Next.js, React, and TypeScript.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "Web Developer", "Testing", "CI/CD", "Vitest", "Playwright", "GitHub Actions", "Production Apps", "Portfolio", "Justine Cesar Ocampo"],
  authors: [{ name: "Justine Cesar Ocampo" }],
  creator: "Justine Cesar Ocampo",
  openGraph: {
    title: "Justine Cesar Ocampo | Full-Stack Web Developer",
    description: "Full-stack web developer who ships production apps with 109+ unit tests, CI/CD pipelines, and security audits. Next.js, React, and TypeScript.",
    url: "https://justinecesardev.vercel.app",
    siteName: "Justine Cesar Ocampo Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Justine Cesar Ocampo | Full-Stack Web Developer",
    description: "Full-stack web developer who ships production apps with 109+ unit tests, CI/CD pipelines, and security audits. Next.js, React, and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <a href="#hero" className="skip-to-content">
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
