"use client";
import { forwardRef } from "react";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  status: string;
  highlight?: boolean;
  image: string;
}

const projects: Project[] = [
  {
    title: "Kampo Ibayo Resort - Booking System",
    description:
      "Full-stack resort booking platform handling real customer reservations and payments. Built with PayMongo API for secure payment processing, Supabase for real-time availability management, and an admin dashboard for resort staff. Processes live transactions for an operating business.",
    tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Supabase", "PayMongo API"],
    github: "https://github.com/tatineeeeeee/kampo-ibayo-UI-",
    demo: "https://kampo-ibayo-resort.vercel.app/",
    status: "Live",
    highlight: true,
    image: "/projects/kampo-ibayo.png",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js and Tailwind CSS featuring responsive design, scroll-triggered animations, a contact form with database storage via Nhost, and SEO optimization with sitemap generation.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "React", "Nhost"],
    github: "https://github.com/tatineeeeeee/portfolio",
    demo: "https://justinecesarocampo.vercel.app",
    status: "Live",
    image: "/projects/portfolio.png",
  },
  {
    title: "CollabSpace",
    description:
      "A real-time collaboration workspace combining document editing and kanban boards. Features user authentication with Clerk, a rich text editor with 25+ block types, drag-and-drop project management, and real-time data sync with Convex.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Convex", "Clerk"],
    github: "https://github.com/tatineeeeeee/CollabSpace",
    demo: "",
    status: "In Progress",
    image: "/projects/collabspace.png",
  },
  {
    title: "DevLearn - Tutorial Platform",
    description:
      "Developer learning platform with structured MDX tutorial content, full-text search, code syntax highlighting, and mobile-first navigation. Built to explore content-driven application architecture and SEO best practices.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MDX"],
    github: "https://github.com/tatineeeeeee/devlearn",
    demo: "https://devlearn-tutorial.vercel.app",
    status: "Live",
    image: "/projects/devlearn.png",
  },
];

interface ProjectsSectionProps {
  isVisible: boolean;
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

const ProjectsSection = forwardRef<HTMLElement, ProjectsSectionProps>(
  ({ isVisible, onImageClick }, ref) => {
    return (
      <section
        ref={ref}
        id="projects"
        className="py-20 bg-slate-900/20 px-6 relative z-10"
        aria-label="Featured projects"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A selection of projects that showcase my skills and growth as a developer
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`group transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`bg-slate-900/40 rounded-2xl border border-slate-800/50 overflow-hidden
                    hover:border-red-500/30 transition-all duration-500 group-hover:bg-slate-900/60 hover:scale-105
                    hover:shadow-2xl hover:shadow-red-500/10 group-hover:-translate-y-2
                    ${project.highlight ? "md:flex md:items-center min-h-[320px]" : "p-0"}`}
                >
                  {project.highlight ? (
                    <>
                      <div className="md:w-1/2 p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-red-400 text-sm font-medium">Featured Project</span>
                          <StatusBadge status={project.status} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-red-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6" aria-label="Technologies used">
                          {project.tech.map((tech) => (
                            <span key={tech} className="bg-slate-800/80 text-slate-300 px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <ProjectLinks github={project.github} demo={project.demo} />
                      </div>
                      <button
                        className="md:w-1/2 h-64 md:h-full min-h-[280px] relative overflow-hidden cursor-pointer block w-full"
                        onClick={() => onImageClick(project.image)}
                        aria-label={`View ${project.title} screenshot`}
                        type="button"
                      >
                        <Image
                          src={project.image}
                          alt={`Screenshot of ${project.title}`}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                      </button>
                    </>
                  ) : (
                    <div className="flex flex-col md:flex-row">
                      <button
                        className="md:w-2/5 h-48 md:h-auto min-h-[200px] relative overflow-hidden cursor-pointer block w-full"
                        onClick={() => onImageClick(project.image)}
                        aria-label={`View ${project.title} screenshot`}
                        type="button"
                      >
                        <Image
                          src={project.image}
                          alt={`Screenshot of ${project.title}`}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                      </button>
                      <div className="md:w-3/5 p-6 flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-semibold group-hover:text-red-400 transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex-shrink-0 ml-3">
                            <StatusBadge status={project.status} />
                          </div>
                        </div>
                        <p className="text-slate-300 mb-6 leading-relaxed flex-grow">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6" aria-label="Technologies used">
                          {project.tech.map((tech) => (
                            <span key={tech} className="bg-slate-800/80 text-slate-300 px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="mt-auto">
                          <ProjectLinks github={project.github} demo={project.demo} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

ProjectsSection.displayName = "ProjectsSection";
export default ProjectsSection;
