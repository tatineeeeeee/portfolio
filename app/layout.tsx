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
  title: "Justine Cesaro Campo | Frontend Developer Portfolio",
  description: "BS Information Technology student passionate about creating exceptional web experiences with modern technologies. Specializing in Next.js, React, TypeScript, and Tailwind CSS.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Web Developer", "Portfolio", "Justine Cesaro Campo"],
  authors: [{ name: "Justine Cesaro Campo" }],
  creator: "Justine Cesaro Campo",
  openGraph: {
    title: "Justine Cesaro Campo | Frontend Developer",
    description: "BS Information Technology student passionate about creating exceptional web experiences with modern technologies.",
    url: "https://justinecesarocampo.vercel.app",
    siteName: "Justine Cesaro Campo Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Justine Cesaro Campo | Frontend Developer",
    description: "BS Information Technology student passionate about creating exceptional web experiences with modern technologies.",
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
