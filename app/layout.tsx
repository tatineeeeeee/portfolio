import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Justine Cesar Ocampo | Full-Stack Web Developer",
  description: "BS Information Technology graduate and full-stack web developer specializing in Next.js, React, TypeScript, and Tailwind CSS. Building production-ready web applications.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "Web Developer", "Junior Developer", "Portfolio", "Justine Cesar Ocampo"],
  authors: [{ name: "Justine Cesar Ocampo" }],
  creator: "Justine Cesar Ocampo",
  openGraph: {
    title: "Justine Cesar Ocampo | Full-Stack Web Developer",
    description: "BS IT graduate and full-stack web developer building production-ready applications with Next.js, React, and TypeScript.",
    url: "https://justinecesarocampo.vercel.app",
    siteName: "Justine Cesar Ocampo Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Justine Cesar Ocampo | Full-Stack Web Developer",
    description: "BS IT graduate and full-stack web developer building production-ready applications with Next.js, React, and TypeScript.",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#hero" className="skip-to-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
