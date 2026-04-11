import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiSupabase,
  SiPostgresql,
  SiMysql,
  SiClerk,
  SiVitest,
  SiGithubactions,
  SiAmazonsimpleemailservice,
  SiGit,
  SiVercel,
  SiFigma,
} from "react-icons/si";

// ── Custom SVG Icons ──────────────────────────────────────────────────

export function ConvexIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="31 31.5 122 125" fill="none" aria-hidden="true">
      <path d="M108.092 130.021C126.258 128.003 143.385 118.323 152.815 102.167C148.349 142.128 104.653 167.385 68.9858 151.878C65.6992 150.453 62.8702 148.082 60.9288 145.034C52.9134 132.448 50.2786 116.433 54.0644 101.899C64.881 120.567 86.8748 132.01 108.092 130.021Z" fill="#F3B01C"/>
      <path d="M53.4012 90.1735C46.0375 107.191 45.7186 127.114 54.7463 143.51C22.9759 119.608 23.3226 68.4578 54.358 44.7949C57.2286 42.6078 60.64 41.3097 64.2178 41.1121C78.9312 40.336 93.8804 46.0225 104.364 56.6193C83.0637 56.831 62.318 70.4756 53.4012 90.1735Z" fill="#8D2676"/>
      <path d="M114.637 61.8552C103.89 46.8701 87.0686 36.6684 68.6387 36.358C104.264 20.1876 148.085 46.4045 152.856 85.1654C153.3 88.7635 152.717 92.4322 151.122 95.6775C144.466 109.195 132.124 119.679 117.702 123.559C128.269 103.96 126.965 80.0151 114.637 61.8552Z" fill="#EE342F"/>
    </svg>
  );
}

export function PlaywrightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" aria-hidden="true">
      <path d="M189.5 82.6c-5.2 1.5-11.1 5.5-14.5 9.8-3.5 4.4-77.4 133.5-78.5 137.1-.4 1.2-.1 4 .6 6.5 1.7 5.6 6.8 10.4 12.4 11.6 5.6 1.2 10.5-.3 14.5-4.5 1.7-1.8 17.8-29.5 35.7-61.7l32.5-58.5 1.4 3.8c.8 2 10.9 30.5 22.5 63.3 11.6 32.8 21.8 61 22.8 62.6 2.3 4 7.6 7.8 12.5 9 5.7 1.5 10-.1 20.1-7.3 4.6-3.3 9.5-6.5 10.8-7.1 4.8-2.2 10.4-.4 18.7 6.1 3.3 2.6 7.4 5.2 9.2 5.9 6.8 2.6 14.5.2 18.9-5.7 3.5-4.8 3.5-12.6-.1-17.3-3.7-4.9-71.2-125.9-73.4-131.5-3.2-8.2-9.1-15.8-15.6-20.1-8.3-5.4-20.8-6.6-30-2.7z" fill="currentColor"/>
      <path d="M106.4 174.5c-4.3 1.9-7.2 4.6-9.5 8.8l-1.9 3.5v53.7c0 59.2-.1 57.2 5.2 62.4 4.5 4.5 7.7 5.6 14.6 4.8 4.6-.5 6.3-1.2 9.2-3.7 6.3-5.4 6-2.9 6-52.4 0-25.1-.4-45.6-.8-45.6-.5 0-4.3 6.3-8.5 14-8.7 15.7-10.5 17.6-15.6 16.3-4.6-1.2-6.5-5.3-5.4-11.7.4-2.5 4.2-12.9 8.5-23.3 4.3-10.3 7.8-19.3 7.8-19.9 0-.6-1-2.5-2.3-4.2-2.7-3.6-4-3.9-7.3-2.7z" fill="currentColor"/>
    </svg>
  );
}

export function PayMongoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2 7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 10h20" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

// ── Types ─────────────────────────────────────────────────────────────

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  status: "Live" | "In Progress" | "Completed";
  image: string;
}

export interface FeaturedProject extends Project {
  problem: string;
  role: string;
  outcomes: string[];
}

export interface Skill {
  name: string;
  category: string;
  icon: IconType;
  color: string;
  span?: number;
  label?: string;
}

export interface Metric {
  value: string;
  label: string;
  detail: string;
}

// ── Projects ──────────────────────────────────────────────────────────

export const featuredProject: FeaturedProject = {
  title: "GastoGuard - Personal Finance Tracker",
  description:
    "Full-stack personal finance app with production-grade testing and CI/CD — built to prove reliability, not just functionality.",
  problem:
    "Most budgeting tools help you track spending but don't enforce software quality. I wanted to build a finance app that was as reliable as it was useful — with automated testing, continuous integration, and security baked in from day one.",
  role:
    "Solo developer. Architected the full stack, wrote 109 unit tests with Vitest and convex-test, 12 end-to-end tests with Playwright, configured CI/CD via GitHub Actions, conducted an OWASP Top 10 security audit, and shipped as a PWA.",
  outcomes: [
    "109 unit tests ensuring code reliability across the entire stack",
    "12 end-to-end tests with Playwright covering critical user flows",
    "CI/CD pipeline via GitHub Actions — tests run on every push",
    "OWASP Top 10 security audit completed and documented",
    "PWA — installable on any device, works offline",
    "Real-time financial health scoring algorithm",
  ],
  tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Convex", "Clerk", "Vitest", "Playwright", "GitHub Actions"],
  github: "https://github.com/tatineeeeeee/gastoguard",
  demo: "https://gastoguard.vercel.app",
  status: "Completed",
  image: "/projects/gastoguard.png",
};

export const highlightProjects: FeaturedProject[] = [
  {
    title: "Kampo Ibayo Resort - Booking System",
    description:
      "Full-stack resort booking platform handling real customer reservations and payments for an operating business.",
    problem:
      "A real operating resort needed to replace manual booking with an online system handling reservations, payments, and staff management.",
    role:
      "Lead developer in a 3-person capstone team. Built the customer booking flow, integrated PayMongo payment processing, designed the admin dashboard, and implemented OCR payment verification.",
    outcomes: [
      "Real-time availability — eliminates double-bookings",
      "Secure payment processing via PayMongo API for live transactions",
      "Admin dashboard reducing manual work for resort staff",
      "AI chatbot handling 200+ FAQs for customer support",
      "306 commits across the project lifecycle",
    ],
    tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Supabase", "PayMongo API"],
    github: "https://github.com/tatineeeeeee/kampo-ibayo-UI-",
    demo: "https://kampo-ibayo-resort.vercel.app/",
    status: "Live",
    image: "/projects/kampo-ibayo.png",
  },
  {
    title: "TripSulit - Tour Booking Marketplace",
    description:
      "Full-stack tour booking marketplace connecting Filipino travelers with tour organizers — built during my internship at ServeBeez.",
    problem:
      "Filipino travelers had no dedicated platform to discover and book local tour packages, while tour organizers relied on manual processes to manage bookings, payments, and communication with customers.",
    role:
      "Web developer in a 2-person intern team at ServeBeez. Built the full-stack web platform: multi-step checkout with PayMongo payments, real-time messaging, organizer dashboard, admin panel, AI-powered tour search, and 23+ transactional email templates via AWS SES.",
    outcomes: [
      "Live production marketplace serving real paying customers",
      "28-table database schema handling the full booking lifecycle",
      "Multi-step checkout with PayMongo (GCash, PayMaya, card)",
      "AI-powered tour search and trip guide using Claude and Gemini",
      "10+ automated cron jobs for slot holds, reminders, and scheduling",
      "Role-based access for travelers, organizers, and admins",
    ],
    tech: ["Next.js 16", "TypeScript", "Convex", "Clerk", "PayMongo", "Tailwind CSS", "Claude API", "Gemini API", "AWS SES", "MapLibre GL"],
    github: "",
    demo: "",
    status: "Live",
    image: "/projects/tripsulit.png",
  },
];

export const otherProjects: Project[] = [
  {
    title: "Puntahan - Philippine Travel Guide",
    description:
      "Community-driven travel guide for discovering destinations across the Philippines. Browse, upvote, and share travel spots by region with interactive maps, itinerary planning, collaborative trips, and achievement badges.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Convex", "Clerk", "Leaflet", "Sentry"],
    github: "https://github.com/tatineeeeeee/puntahan",
    demo: "",
    status: "In Progress",
    image: "/projects/puntahan.png",
  },
  {
    title: "DevLearn - Tutorial Platform",
    description:
      "Developer learning platform with structured MDX tutorials, full-text search, code syntax highlighting with Shiki, and mobile-first responsive navigation.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MDX"],
    github: "https://github.com/tatineeeeeee/devlearn",
    demo: "https://devlearn-tutorial.vercel.app",
    status: "Live",
    image: "/projects/devlearn.png",
  },
];

// ── Skills ─────────────────────────────────────────────────────────────

export const skillCategories = [
  "Frontend",
  "Backend",
  "Auth & Payments",
  "Testing",
  "DevOps & Tools",
] as const;

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend", icon: SiReact, color: "#61DAFB", span: 2, label: "UI Library" },
  { name: "Next.js", category: "Frontend", icon: SiNextdotjs, color: "#ffffff", span: 2, label: "React Framework" },
  { name: "TypeScript", category: "Frontend", icon: SiTypescript, color: "#3178C6", span: 2, label: "Type-Safe JS" },
  { name: "JavaScript", category: "Frontend", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Framer Motion", category: "Frontend", icon: SiFramer, color: "#0055FF" },
  { name: "HTML", category: "Frontend", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", category: "Frontend", icon: SiCss3, color: "#1572B6" },
  // Backend
  { name: "Node.js", category: "Backend", icon: SiNodedotjs, color: "#339933" },
  { name: "Convex", category: "Backend", icon: ConvexIcon as unknown as IconType, color: "#F3722C" },
  { name: "Supabase", category: "Backend", icon: SiSupabase, color: "#3FCF8E" },
  { name: "PostgreSQL", category: "Backend", icon: SiPostgresql, color: "#336791" },
  { name: "MySQL", category: "Backend", icon: SiMysql, color: "#4479A1" },
  // Auth & Payments
  { name: "Clerk", category: "Auth & Payments", icon: SiClerk, color: "#6C47FF" },
  { name: "PayMongo", category: "Auth & Payments", icon: PayMongoIcon as unknown as IconType, color: "#00D1B2" },
  // Testing
  { name: "Vitest", category: "Testing", icon: SiVitest, color: "#6E9F18" },
  { name: "Playwright", category: "Testing", icon: PlaywrightIcon as unknown as IconType, color: "#2EAD33" },
  { name: "convex-test", category: "Testing", icon: ConvexIcon as unknown as IconType, color: "#F3722C" },
  // DevOps & Tools
  { name: "GitHub Actions", category: "DevOps & Tools", icon: SiGithubactions, color: "#2088FF" },
  { name: "Git", category: "DevOps & Tools", icon: SiGit, color: "#F05032" },
  { name: "Vercel", category: "DevOps & Tools", icon: SiVercel, color: "#ffffff" },
  { name: "AWS SES", category: "DevOps & Tools", icon: SiAmazonsimpleemailservice, color: "#DD344C" },
  { name: "Figma", category: "DevOps & Tools", icon: SiFigma, color: "#F24E1E" },
];

// ── Metrics ────────────────────────────────────────────────────────────

export const metrics: Metric[] = [
  { value: "109", label: "Unit Tests", detail: "Vitest + convex-test" },
  { value: "12", label: "E2E Tests", detail: "Playwright" },
  { value: "6", label: "Projects Shipped", detail: "Full-Stack Apps" },
  { value: "306", label: "Commits", detail: "Kampo Ibayo Capstone" },
  { value: "200+", label: "FAQs Handled", detail: "AI Chatbot" },
  { value: "1", label: "Security Audit", detail: "OWASP Top 10" },
];

// ── About Section Data ─────────────────────────────────────────────────

export const focusAreas = [
  "Full-Stack Development",
  "Automated Testing",
  "CI/CD Pipelines",
  "Payment Integration",
  "Real-Time Applications",
  "Database Design",
];

export const currentlyExploring = [
  "System Design",
  "Cloud Architecture",
  "Performance Optimization",
  "Advanced Testing Patterns",
];
