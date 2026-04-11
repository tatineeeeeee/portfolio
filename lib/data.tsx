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
    <svg
      className={className}
      viewBox="31 31.5 122 125"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M108.092 130.021C126.258 128.003 143.385 118.323 152.815 102.167C148.349 142.128 104.653 167.385 68.9858 151.878C65.6992 150.453 62.8702 148.082 60.9288 145.034C52.9134 132.448 50.2786 116.433 54.0644 101.899C64.881 120.567 86.8748 132.01 108.092 130.021Z"
        fill="#F3B01C"
      />
      <path
        d="M53.4012 90.1735C46.0375 107.191 45.7186 127.114 54.7463 143.51C22.9759 119.608 23.3226 68.4578 54.358 44.7949C57.2286 42.6078 60.64 41.3097 64.2178 41.1121C78.9312 40.336 93.8804 46.0225 104.364 56.6193C83.0637 56.831 62.318 70.4756 53.4012 90.1735Z"
        fill="#8D2676"
      />
      <path
        d="M114.637 61.8552C103.89 46.8701 87.0686 36.6684 68.6387 36.358C104.264 20.1876 148.085 46.4045 152.856 85.1654C153.3 88.7635 152.717 92.4322 151.122 95.6775C144.466 109.195 132.124 119.679 117.702 123.559C128.269 103.96 126.965 80.0151 114.637 61.8552Z"
        fill="#EE342F"
      />
    </svg>
  );
}

export function PlaywrightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.996 7.462c-.056.837-.257 2.135-.716 3.85c-.995 3.715-4.27 10.874-10.42 9.227c-6.15-1.65-5.407-9.487-4.412-13.201c.46-1.716.934-2.94 1.305-3.694c.42-.853.846-.289 1.815.523c.684.573 2.41 1.791 5.011 2.488s4.706.506 5.583.352c1.245-.219 1.897-.494 1.834.455m-9.807 3.863s-.127-1.819-1.773-2.286c-1.644-.467-2.613 1.04-2.613 1.04Zm4.058 4.539l-7.769-2.172s.446 2.306 3.338 3.153c2.862.836 4.43-.98 4.43-.981Zm2.701-2.51s-.13-1.818-1.773-2.286c-1.644-.469-2.612 1.038-2.612 1.038ZM8.57 18.23c-4.749 1.279-7.261-4.224-8.021-7.08C.197 9.831.044 8.832.003 8.188c-.047-.73.455-.52 1.415-.354c.677.118 2.3.261 4.308-.28a11.3 11.3 0 0 0 2.41-.956q-.087.295-.17.61c-.433 1.618-.827 4.055-.632 6.426c-1.976.732-2.267 2.423-2.267 2.423l2.524-.715c.227 1.002.6 1.987 1.15 2.838zm-4.188-6.298c1.265-.333 1.363-1.631 1.363-1.631l-3.374.888s.745 1.076 2.01.743Z" />
    </svg>
  );
}

export function PayMongoIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 153 156"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M110.14,12.88c3.89,0,7.62,.63,11.06,2.51,8.48,4.34,11.44,14.6,8.97,23.41-3.95,15.72-7.88,31.45-11.82,47.17-.73,2.9-2.08,3.97-5.05,3.98-5.69,0-11.38,0-17.07,0-3.27,0-4.74,1.19-5.51,4.3-1.48,6.02-2.98,12.03-4.48,18.04-.64,2.55-2.19,3.76-4.95,3.77-6,.03-12,.08-18,0-2.82-.04-4.74,1.59-5.32,4.14-1.32,5.79-2.86,11.53-4.29,17.29-.76,3.06-2.23,4.24-5.37,4.24-5.28,0-10.55,.02-15.83,0-3.24,.11-5.35-2.67-4.61-5.63,1.36-5.62,2.76-11.23,4.19-16.84,.6-2.36,2.25-3.59,4.77-3.59,6.1-.02,12.21,0,18.32,0,2.77,0,4.33-1.16,5.02-3.87,1.48-5.8,2.94-11.61,4.38-17.42,.8-3.25,2.1-4.34,5.59-4.36,5.74-.03,11.49,.02,17.23-.03,2.38,.06,4.76-1.04,5.18-3.62,3.5-13.65,6.7-27.39,10.32-41.01,1.18-4.22-1.48-6.73-5.32-6.71-21.52,.1-43.05,.04-64.57,.06-3.03,.31-5.75-2.52-4.89-5.54,1.35-5.46,2.77-10.91,4.09-16.38,.62-2.56,2.54-3.93,5.17-3.92,12.36,.06,60.89,.03,72.79,.02Z" />
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
  role: "Solo developer. Architected the full stack, wrote 109 unit tests with Vitest and convex-test, 12 end-to-end tests with Playwright, configured CI/CD via GitHub Actions, conducted an OWASP Top 10 security audit, and shipped as a PWA.",
  outcomes: [
    "109 unit tests ensuring code reliability across the entire stack",
    "12 end-to-end tests with Playwright covering critical user flows",
    "CI/CD pipeline via GitHub Actions — tests run on every push",
    "OWASP Top 10 security audit completed and documented",
    "PWA — installable on any device, works offline",
    "Real-time financial health scoring algorithm",
  ],
  tech: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Convex",
    "Clerk",
    "Vitest",
    "Playwright",
    "GitHub Actions",
  ],
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
    role: "Lead developer in a 3-person capstone team. Built the customer booking flow, integrated PayMongo payment processing, designed the admin dashboard, and implemented OCR payment verification.",
    outcomes: [
      "Real-time availability — eliminates double-bookings",
      "Secure payment processing via PayMongo API for live transactions",
      "Admin dashboard reducing manual work for resort staff",
      "AI chatbot handling 200+ FAQs for customer support",
      "306 commits across the project lifecycle",
    ],
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PayMongo API",
    ],
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
    role: "Web developer in a 2-person intern team at ServeBeez. Built the full-stack web platform: multi-step checkout with PayMongo payments, real-time messaging, organizer dashboard, admin panel, AI-powered tour search, and 23+ transactional email templates via AWS SES.",
    outcomes: [
      "Live production marketplace serving real paying customers",
      "28-table database schema handling the full booking lifecycle",
      "Multi-step checkout with PayMongo (GCash, PayMaya, card)",
      "AI-powered tour search and trip guide using Claude and Gemini",
      "10+ automated cron jobs for slot holds, reminders, and scheduling",
      "Role-based access for travelers, organizers, and admins",
    ],
    tech: [
      "Next.js 16",
      "TypeScript",
      "Convex",
      "Clerk",
      "PayMongo",
      "Tailwind CSS",
      "Claude API",
      "Gemini API",
      "AWS SES",
      "MapLibre GL",
    ],
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
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Convex",
      "Clerk",
      "Leaflet",
      "Sentry",
    ],
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
  {
    name: "React",
    category: "Frontend",
    icon: SiReact,
    color: "#61DAFB",
    span: 2,
    label: "UI Library",
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: SiNextdotjs,
    color: "#ffffff",
    span: 2,
    label: "React Framework",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: SiTypescript,
    color: "#3178C6",
    span: 2,
    label: "Type-Safe JS",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Framer Motion",
    category: "Frontend",
    icon: SiFramer,
    color: "#0055FF",
  },
  { name: "HTML", category: "Frontend", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", category: "Frontend", icon: SiCss3, color: "#1572B6" },
  // Backend
  { name: "Node.js", category: "Backend", icon: SiNodedotjs, color: "#339933" },
  {
    name: "Convex",
    category: "Backend",
    icon: ConvexIcon as unknown as IconType,
    color: "#F3722C",
  },
  { name: "Supabase", category: "Backend", icon: SiSupabase, color: "#3FCF8E" },
  {
    name: "PostgreSQL",
    category: "Backend",
    icon: SiPostgresql,
    color: "#336791",
  },
  { name: "MySQL", category: "Backend", icon: SiMysql, color: "#4479A1" },
  // Auth & Payments
  {
    name: "Clerk",
    category: "Auth & Payments",
    icon: SiClerk,
    color: "#6C47FF",
  },
  {
    name: "PayMongo",
    category: "Auth & Payments",
    icon: PayMongoIcon as unknown as IconType,
    color: "#00D1B2",
  },
  // Testing
  { name: "Vitest", category: "Testing", icon: SiVitest, color: "#6E9F18" },
  {
    name: "Playwright",
    category: "Testing",
    icon: PlaywrightIcon as unknown as IconType,
    color: "#2EAD33",
  },
  {
    name: "convex-test",
    category: "Testing",
    icon: ConvexIcon as unknown as IconType,
    color: "#F3722C",
  },
  // DevOps & Tools
  {
    name: "GitHub Actions",
    category: "DevOps & Tools",
    icon: SiGithubactions,
    color: "#2088FF",
  },
  { name: "Git", category: "DevOps & Tools", icon: SiGit, color: "#F05032" },
  {
    name: "Vercel",
    category: "DevOps & Tools",
    icon: SiVercel,
    color: "#ffffff",
  },
  {
    name: "AWS SES",
    category: "DevOps & Tools",
    icon: SiAmazonsimpleemailservice,
    color: "#DD344C",
  },
  {
    name: "Figma",
    category: "DevOps & Tools",
    icon: SiFigma,
    color: "#F24E1E",
  },
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
  "Test-Driven Development",
  "Database Optimization",
  "CI/CD Best Practices",
  "API Design Patterns",
];
