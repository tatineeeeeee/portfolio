"use client";
import { forwardRef, useState } from "react";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import ScrollReveal from "@/components/motion/ScrollReveal";
import TiltCard from "@/components/motion/TiltCard";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  status: string;
  image: string;
}

interface FeaturedProject extends Project {
  problem: string;
  role: string;
  outcomes: string[];
}

const featuredProject: FeaturedProject = {
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
    "302 commits across the project lifecycle",
  ],
  tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Supabase", "PayMongo API"],
  github: "https://github.com/tatineeeeeee/kampo-ibayo-UI-",
  demo: "https://kampo-ibayo-resort.vercel.app/",
  status: "Live",
  image: "/projects/kampo-ibayo.png",
};

const otherProjects: Project[] = [
  {
    title: "CollabSpace",
    description:
      "Solo project — real-time collaboration workspace combining document editing and kanban boards. Features Clerk auth, a rich text editor with 25+ block types, drag-and-drop project management, and real-time data sync with Convex.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Convex", "Clerk"],
    github: "https://github.com/tatineeeeeee/CollabSpace",
    demo: "",
    status: "In Progress",
    image: "/projects/collabspace.png",
  },
  {
    title: "DevLearn - Tutorial Platform",
    description:
      "Solo project — developer learning platform with structured MDX tutorial content, full-text search, code syntax highlighting with Shiki, and mobile-first navigation.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MDX"],
    github: "https://github.com/tatineeeeeee/devlearn",
    demo: "https://devlearn-tutorial.vercel.app",
    status: "Live",
    image: "/projects/devlearn.png",
  },
  {
    title: "Portfolio Website",
    description:
      "Solo project — this portfolio itself, built with scroll-triggered Framer Motion animations, a contact form with Nhost database and Resend email notifications, and full SEO optimization.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "Nhost"],
    github: "https://github.com/tatineeeeeee/portfolio",
    demo: "https://justinecesarocampo.vercel.app",
    status: "Live",
    image: "/projects/portfolio.png",
  },
];

interface ProjectsSectionProps {
  onImageClick: (image: string) => void;
}

function StatusBadge({ status }: { status: string }) {
  const colorClass =
    status === "Live"
      ? "bg-emerald-500/20 text-emerald-400"
      : status === "Completed"
        ? "bg-blue-500/20 text-blue-400"
        : "bg-amber-500/20 text-amber-400";

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorClass}`}>
      {status}
    </span>
  );
}

function ProjectLinks({ github, demo }: { github: string; demo: string }) {
  return (
    <div className="flex gap-4">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-slate-400 hover:text-red-400 transition-colors"
        aria-label="View source code on GitHub"
      >
        <SiGithub className="w-5 h-5 mr-2" aria-hidden="true" />
        View Code
      </a>
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-slate-400 hover:text-red-400 transition-colors"
          aria-label="View live demo"
        >
          <HiOutlineArrowTopRightOnSquare className="w-5 h-5 mr-2" aria-hidden="true" />
          Live Demo
        </a>
      )}
    </div>
  );
}

function ProjectImage({ src, alt, onClick }: { src: string; alt: string; onClick: () => void }) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
        <span className="text-4xl font-bold text-slate-600">
          {alt.split(" ").map(w => w[0]).join("").slice(0, 2)}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-contain group-hover:scale-105 transition-transform duration-500"
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      onError={() => setImgError(true)}
    />
  );
}

const ProjectsSection = forwardRef<HTMLElement, ProjectsSectionProps>(
  ({ onImageClick }, ref) => {
    return (
      <section
        ref={ref}
        id="projects"
        className="py-20 bg-slate-900/20 px-6 relative z-10"
        aria-label="Featured projects"
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Projects that showcase real-world problem-solving and production-ready development
            </p>
          </ScrollReveal>

          {/* Featured Project — Case Study */}
          <ScrollReveal className="mb-12">
            <TiltCard>
              <article className="group bg-slate-900/40 rounded-2xl border border-slate-800/50 overflow-hidden hover:border-red-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10">
                {/* Hero Image */}
                <button
                  className="w-full h-64 md:h-80 relative overflow-hidden cursor-pointer block"
                  onClick={() => onImageClick(featuredProject.image)}
                  aria-label={`View ${featuredProject.title} screenshot`}
                  type="button"
                >
                  <ProjectImage
                    src={featuredProject.image}
                    alt={`Screenshot of ${featuredProject.title}`}
                    onClick={() => onImageClick(featuredProject.image)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-6 flex items-center gap-3">
                    <span className="text-red-400 text-sm font-medium bg-slate-900/70 backdrop-blur-sm px-3 py-1 rounded-full">
                      Featured Project
                    </span>
                    <StatusBadge status={featuredProject.status} />
                  </div>
                </button>

                {/* Case Study Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-6 group-hover:text-red-400 transition-colors">
                    {featuredProject.title}
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-2">
                        The Problem
                      </h4>
                      <p className="text-slate-300 leading-relaxed">
                        {featuredProject.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-2">
                        My Role
                      </h4>
                      <p className="text-slate-300 leading-relaxed">
                        {featuredProject.role}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3">
                      Key Outcomes
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {featuredProject.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start text-slate-300 text-sm">
                          <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6" aria-label="Technologies used">
                    {featuredProject.tech.map((tech) => (
                      <span key={tech} className="bg-slate-800/80 text-slate-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ProjectLinks github={featuredProject.github} demo={featuredProject.demo} />
                </div>
              </article>
            </TiltCard>
          </ScrollReveal>

          {/* Other Projects */}
          <div className="grid lg:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.1}>
                <TiltCard className="h-full">
                  <article className="group h-full">
                    <div className="bg-slate-900/40 rounded-2xl border border-slate-800/50 overflow-hidden hover:border-red-500/30 transition-all duration-500 group-hover:bg-slate-900/60 hover:shadow-2xl hover:shadow-red-500/10 h-full flex flex-col">
                      <button
                        className="w-full h-48 relative overflow-hidden cursor-pointer block flex-shrink-0"
                        onClick={() => onImageClick(project.image)}
                        aria-label={`View ${project.title} screenshot`}
                        type="button"
                      >
                        <ProjectImage
                          src={project.image}
                          alt={`Screenshot of ${project.title}`}
                          onClick={() => onImageClick(project.image)}
                        />
                      </button>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-lg font-semibold group-hover:text-red-400 transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex-shrink-0 ml-3">
                            <StatusBadge status={project.status} />
                          </div>
                        </div>
                        <p className="text-slate-300 text-sm mb-4 leading-relaxed flex-grow">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mb-4" aria-label="Technologies used">
                          {project.tech.map((tech) => (
                            <span key={tech} className="bg-slate-800/80 text-slate-400 px-2 py-0.5 rounded-full text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="mt-auto">
                          <ProjectLinks github={project.github} demo={project.demo} />
                        </div>
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

ProjectsSection.displayName = "ProjectsSection";
export default ProjectsSection;
