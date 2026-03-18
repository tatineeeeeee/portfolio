"use client";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/motion/ScrollReveal";
import StaggerContainer, { staggerItemVariants } from "@/components/motion/StaggerContainer";
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
  SiSupabase,
  SiFigma,
} from "react-icons/si";
import type { IconType } from "react-icons";

// Convex doesn't have an icon in react-icons — using official logo paths
function ConvexIcon({ className }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} viewBox="31 31.5 122 125" fill="none" aria-hidden="true">
      <path d="M108.092 130.021C126.258 128.003 143.385 118.323 152.815 102.167C148.349 142.128 104.653 167.385 68.9858 151.878C65.6992 150.453 62.8702 148.082 60.9288 145.034C52.9134 132.448 50.2786 116.433 54.0644 101.899C64.881 120.567 86.8748 132.01 108.092 130.021Z" fill="#F3B01C"/>
      <path d="M53.4012 90.1735C46.0375 107.191 45.7186 127.114 54.7463 143.51C22.9759 119.608 23.3226 68.4578 54.358 44.7949C57.2286 42.6078 60.64 41.3097 64.2178 41.1121C78.9312 40.336 93.8804 46.0225 104.364 56.6193C83.0637 56.831 62.318 70.4756 53.4012 90.1735Z" fill="#8D2676"/>
      <path d="M114.637 61.8552C103.89 46.8701 87.0686 36.6684 68.6387 36.358C104.264 20.1876 148.085 46.4045 152.856 85.1654C153.3 88.7635 152.717 92.4322 151.122 95.6775C144.466 109.195 132.124 119.679 117.702 123.559C128.269 103.96 126.965 80.0151 114.637 61.8552Z" fill="#EE342F"/>
    </svg>
  );
}

interface Skill {
  name: string;
  category: string;
  icon: IconType;
  color: string;
  span?: number; // col span on md+
  label?: string; // extra label for large tiles
}

const skills: Skill[] = [
  { name: "React", category: "Frontend", icon: SiReact, color: "#61DAFB", span: 2, label: "UI Library" },
  { name: "Next.js", category: "Frontend", icon: SiNextdotjs, color: "#ffffff", span: 2, label: "React Framework" },
  { name: "TypeScript", category: "Frontend", icon: SiTypescript, color: "#3178C6", span: 2, label: "Type-Safe JS" },
  { name: "JavaScript", category: "Frontend", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "HTML", category: "Frontend", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", category: "Frontend", icon: SiCss3, color: "#1572B6" },
  { name: "Node.js", category: "Backend", icon: SiNodedotjs, color: "#339933" },
  { name: "Supabase", category: "Backend", icon: SiSupabase, color: "#3FCF8E" },
  { name: "Convex", category: "Backend", icon: ConvexIcon as unknown as IconType, color: "#F3722C" },
  { name: "PostgreSQL", category: "Database", icon: SiPostgresql, color: "#336791" },
  { name: "MySQL", category: "Database", icon: SiMysql, color: "#4479A1" },
  { name: "Git", category: "Tools", icon: SiGit, color: "#F05032" },
  { name: "Figma", category: "Design", icon: SiFigma, color: "#F24E1E" },
  { name: "Vercel", category: "Cloud", icon: SiVercel, color: "#ffffff" },
];

const TechStackSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      ref={ref}
      id="skills"
      className="py-20 border-t border-slate-800/50 relative z-10"
      aria-label="Technical skills"
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Technologies I use to bring ideas to life
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            const isLarge = skill.span === 2;
            return (
              <motion.div
                key={skill.name}
                variants={staggerItemVariants}
                role="listitem"
                className={`bg-slate-900/50 rounded-2xl border border-slate-800/50 hover:border-red-500/30 hover:bg-slate-900/70 transition-all duration-500 hover:scale-105 group ${
                  isLarge ? "md:col-span-2 p-6" : "p-5"
                }`}
                style={{
                  boxShadow: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 10px 30px ${skill.color}15`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className={`flex ${isLarge ? "flex-row items-center gap-4" : "flex-col items-center space-y-3"}`}>
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    <Icon
                      className={isLarge ? "w-10 h-10" : "w-8 h-8"}
                      style={{ color: skill.color }}
                      aria-hidden="true"
                    />
                  </div>
                  <div className={isLarge ? "" : "text-center"}>
                    <span className="text-slate-200 font-medium group-hover:text-red-300 transition-colors text-sm block">
                      {skill.name}
                    </span>
                    {isLarge && skill.label && (
                      <span className="text-slate-500 text-xs font-mono">
                        {skill.label}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
});

TechStackSection.displayName = "TechStackSection";
export default TechStackSection;
