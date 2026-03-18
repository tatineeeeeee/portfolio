"use client";
import { forwardRef } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiVercel,
} from "react-icons/si";

const skills = [
  { name: "React", category: "Frontend", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", category: "Frontend", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", category: "Frontend", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", category: "Frontend", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "HTML", category: "Frontend", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", category: "Frontend", icon: SiCss3, color: "#1572B6" },
  { name: "Node.js", category: "Backend", icon: SiNodedotjs, color: "#339933" },
  { name: "PostgreSQL", category: "Database", icon: SiPostgresql, color: "#336791" },
  { name: "MySQL", category: "Database", icon: SiMysql, color: "#4479A1" },
  { name: "Git", category: "Tools", icon: SiGit, color: "#F05032" },
  { name: "Vercel", category: "Cloud", icon: SiVercel, color: "#ffffff" },
];

interface TechStackSectionProps {
  isVisible: boolean;
}

const TechStackSection = forwardRef<HTMLElement, TechStackSectionProps>(
  ({ isVisible }, ref) => {
    return (
      <section
        ref={ref}
        id="skills"
        className="py-20 border-t border-slate-800/50 relative z-10"
        aria-label="Technical skills"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Technologies I use to bring ideas to life
            </p>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 max-w-5xl mx-auto"
            role="list"
            aria-label="Skills list"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  role="listitem"
                  className={`bg-slate-900/50 rounded-2xl p-6 border border-slate-800/50 hover:border-red-500/30 hover:bg-slate-900/70 transition-all duration-500 hover:scale-110 group ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="group-hover:scale-125 transition-transform duration-300">
                      <Icon className="w-8 h-8" style={{ color: skill.color }} aria-hidden="true" />
                    </div>
                    <span className="text-slate-300 font-medium text-center group-hover:text-red-300 transition-colors text-sm">
                      {skill.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
);

TechStackSection.displayName = "TechStackSection";
export default TechStackSection;
