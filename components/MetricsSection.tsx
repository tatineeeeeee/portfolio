"use client";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/motion/ScrollReveal";
import StaggerContainer, { staggerItemVariants } from "@/components/motion/StaggerContainer";
import { metrics } from "@/lib/data";

const MetricsSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      ref={ref}
      className="py-16 px-6 relative z-10"
      aria-label="Key metrics and achievements"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">By the Numbers</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Quantified proof of production-grade development practices
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={staggerItemVariants}
              className="group"
            >
              <div className="bg-gradient-to-br from-red-100/40 dark:from-red-900/20 to-red-50/40 dark:to-red-800/20 rounded-2xl p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/20 hover:-translate-y-1 text-center h-full">
                <div className="text-3xl font-bold text-red-500 dark:text-red-400 mb-1 group-hover:scale-110 transition-transform duration-300">
                  {metric.value}
                </div>
                <div className="text-slate-800 dark:text-slate-200 font-medium text-sm">
                  {metric.label}
                </div>
                <div className="text-slate-500 text-xs mt-1">
                  {metric.detail}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
});

MetricsSection.displayName = "MetricsSection";
export default MetricsSection;
