"use client";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/motion/ScrollReveal";
import StaggerContainer, { staggerItemVariants } from "@/components/motion/StaggerContainer";
import { metrics, backendMetrics } from "@/lib/data";
import { useCountUp } from "@/hooks/useCountUp";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { Metric } from "@/lib/data";

function AnimatedMetric({
  metric,
  accent,
}: {
  metric: Metric;
  accent: "red" | "amber";
}) {
  const prefersReducedMotion = useReducedMotion();
  const numericValue = parseInt(metric.value.replace(/[^0-9]/g, ""), 10);
  const suffix = metric.value.replace(/[0-9]/g, "");
  const { count, ref } = useCountUp(
    numericValue,
    1500,
    !prefersReducedMotion
  );

  const isAmber = accent === "amber";
  const cardClass = isAmber
    ? "bg-gradient-to-br from-amber-100/30 dark:from-amber-900/20 to-amber-50/30 dark:to-amber-800/10 rounded-2xl p-6 border border-amber-500/20 hover:border-amber-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/15 hover:-translate-y-1 text-center h-full"
    : "bg-gradient-to-br from-red-100/40 dark:from-red-900/20 to-red-50/40 dark:to-red-800/20 rounded-2xl p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/20 hover:-translate-y-1 text-center h-full";
  const valueClass = isAmber
    ? "text-3xl font-mono font-bold text-amber-500 dark:text-amber-400 mb-1 group-hover:scale-110 transition-transform duration-300"
    : "text-3xl font-mono font-bold text-red-500 dark:text-red-400 mb-1 group-hover:scale-110 transition-transform duration-300";

  return (
    <div ref={ref} className={cardClass}>
      <div className={valueClass}>
        {prefersReducedMotion ? metric.value : `${count}${suffix}`}
      </div>
      <div className="text-slate-800 dark:text-slate-200 font-medium text-sm">
        {metric.label}
      </div>
      <div className="text-slate-500 text-xs mt-1">{metric.detail}</div>
    </div>
  );
}

const MetricsSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      ref={ref}
      className="py-16 px-6 relative z-10"
      aria-label="Key metrics and achievements"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-12">
          <span className="font-mono text-xs text-red-500/40 dark:text-red-400/40 block mb-2">
            {"// 01"}
          </span>
          <h2 className="text-3xl font-display font-bold mb-4">
            By the Numbers
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Quantified proof of production-grade development practices
          </p>
        </ScrollReveal>

        {/* Backend & Architecture Metrics */}
        <div className="mb-8">
          <ScrollReveal className="mb-4">
            <h3 className="font-mono text-xs text-amber-500/80 dark:text-amber-400/80 uppercase tracking-wider text-center">
              Architecture &amp; Backend
            </h3>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {backendMetrics.map((metric) => (
              <motion.div
                key={metric.label}
                variants={staggerItemVariants}
                className="group"
              >
                <AnimatedMetric metric={metric} accent="amber" />
              </motion.div>
            ))}
          </StaggerContainer>
        </div>

        {/* Testing & Engineering Metrics */}
        <div>
          <ScrollReveal className="mb-4">
            <h3 className="font-mono text-xs text-red-500/80 dark:text-red-400/80 uppercase tracking-wider text-center">
              Testing &amp; Engineering
            </h3>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {metrics.map((metric) => (
              <motion.div
                key={metric.label}
                variants={staggerItemVariants}
                className="group"
              >
                <AnimatedMetric metric={metric} accent="red" />
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
});

MetricsSection.displayName = "MetricsSection";
export default MetricsSection;
