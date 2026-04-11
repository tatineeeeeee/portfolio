"use client";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/motion/ScrollReveal";
import StaggerContainer, { staggerItemVariants } from "@/components/motion/StaggerContainer";
import { skills, skillCategories } from "@/lib/data";
import type { IconType } from "react-icons";

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

        <div className="max-w-5xl mx-auto space-y-10">
          {skillCategories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <div key={category}>
                <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {categorySkills.map((skill) => {
                    const Icon = skill.icon as IconType;
                    const isLarge = skill.span === 2;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={staggerItemVariants}
                        role="listitem"
                        className={`bg-slate-900/50 rounded-2xl border border-slate-800/50 hover:border-red-500/30 hover:bg-slate-900/70 transition-all duration-500 hover:scale-105 group ${
                          isLarge ? "md:col-span-2 p-6" : "p-5"
                        }`}
                        style={{ boxShadow: "none" }}
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
            );
          })}
        </div>
      </div>
    </section>
  );
});

TechStackSection.displayName = "TechStackSection";
export default TechStackSection;
