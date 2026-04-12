"use client";
import { forwardRef } from "react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { experiences } from "@/lib/data";
import type { ExperienceEntry } from "@/lib/data";

function TypeBadge({ type }: { type: ExperienceEntry["type"] }) {
  const config = {
    internship: {
      label: "Internship",
      className: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
    },
    capstone: {
      label: "Capstone Project",
      className: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
    },
    freelance: {
      label: "Freelance",
      className: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
    },
    "full-time": {
      label: "Full-Time",
      className: "bg-purple-500/15 text-purple-600 dark:text-purple-400",
    },
  };
  const { label, className } = config[type];
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${className}`}>
      {label}
    </span>
  );
}

function TimelineEntry({ experience }: { experience: ExperienceEntry }) {
  return (
    <article className="relative pl-14 md:pl-20 group">
      {/* Timeline dot */}
      <div
        className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full border-4 border-red-500 dark:border-red-400 bg-white dark:bg-slate-950 group-hover:scale-125 transition-transform duration-300"
        aria-hidden="true"
      />

      {/* Card */}
      <div className="bg-white/80 dark:bg-slate-900/40 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800/50 hover:border-red-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors">
              {experience.role}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              {experience.company}
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <TypeBadge type={experience.type} />
            <time className="text-sm text-slate-400 dark:text-slate-500 font-mono">
              {experience.dateRange}
            </time>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          {experience.description}
        </p>

        {/* Accomplishments */}
        <ul className="space-y-2 mb-6" role="list">
          {experience.accomplishments.map((accomplishment) => (
            <li
              key={accomplishment}
              className="flex items-start text-slate-600 dark:text-slate-300 text-sm"
            >
              <span
                className="w-1.5 h-1.5 bg-red-500 dark:bg-red-400 rounded-full mr-3 mt-1.5 flex-shrink-0"
                aria-hidden="true"
              />
              {accomplishment}
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2" aria-label="Technologies used">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

const ExperienceSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      ref={ref}
      id="experience"
      className="py-20 px-6 relative z-10"
      aria-label="Professional experience"
    >
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="font-mono text-xs text-red-500/40 dark:text-red-400/40 block mb-2">
            {"// 02"}
          </span>
          <h2 className="text-4xl font-display font-bold mb-4 bg-gradient-to-r from-slate-800 dark:from-slate-100 to-red-500 dark:to-red-300 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Where I&apos;ve built production software for real users
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-red-500/50 via-red-400/30 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ScrollReveal key={experience.id} delay={index * 0.15}>
                <TimelineEntry experience={experience} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ExperienceSection.displayName = "ExperienceSection";
export default ExperienceSection;
