"use client";
import { forwardRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { HiOutlineEnvelope } from "react-icons/hi2";
import MagneticButton from "@/components/motion/MagneticButton";

const HeroSection = forwardRef<HTMLElement>((_props, ref) => {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const Wrapper = prefersReducedMotion ? "div" : motion.div;

  return (
    <section
      ref={ref}
      id="hero"
      className="pt-32 pb-20 px-6 relative z-10"
      aria-label="Introduction"
    >
      <div className="max-w-4xl mx-auto relative z-20">
        <Wrapper
          {...(!prefersReducedMotion && {
            variants: container,
            initial: "hidden",
            animate: "visible",
          })}
        >
          <motion.div
            variants={prefersReducedMotion ? undefined : item}
            className="mb-6"
          >
            <p className="text-red-400 text-sm font-medium mb-2">
              Hello, I&apos;m
            </p>
            <div className="relative">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[96px] font-bold mb-4 bg-gradient-to-r from-slate-100 via-red-200 to-slate-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Justine
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl text-slate-400 mb-6">
              Full-Stack Web Developer
            </h2>
          </motion.div>

          <motion.p
            variants={prefersReducedMotion ? undefined : item}
            className="text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed"
          >
            I build and ship production web applications — from booking
            platforms processing live payments to finance trackers backed by
            109 automated tests and CI/CD pipelines. Fresh grad,
            production-grade standards.
          </motion.p>

          <motion.div
            variants={prefersReducedMotion ? undefined : item}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
          >
            <MagneticButton
              href="#projects"
              className="group bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center hover:shadow-lg hover:shadow-red-500/25"
            >
              <span>View My Work</span>
            </MagneticButton>
            <MagneticButton
              href="mailto:justinecesarocampo@gmail.com"
              className="border border-slate-700 hover:border-red-400 text-slate-300 hover:text-red-400 px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:bg-slate-800/50"
            >
              <HiOutlineEnvelope className="w-5 h-5" aria-hidden="true" />
              <span>Contact Me</span>
            </MagneticButton>
            <MagneticButton
              href="https://github.com/tatineeeeeee"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-700 hover:border-red-400 text-slate-300 hover:text-red-400 px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:bg-slate-800/50"
            >
              <SiGithub className="w-5 h-5" aria-hidden="true" />
              <span>GitHub</span>
            </MagneticButton>
          </motion.div>
        </Wrapper>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-5" aria-hidden="true">
        <div className="absolute top-20 right-10 text-red-500/10 text-6xl font-mono animate-float">
          {"{ }"}
        </div>
        <div className="absolute bottom-32 left-10 text-red-400/10 text-4xl font-mono animate-float" style={{ animationDelay: "1s" }}>
          {"</>"}
        </div>
        <div className="absolute top-1/2 right-1/4 text-red-300/10 text-5xl font-mono animate-float" style={{ animationDelay: "2s" }}>
          {"( )"}
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";
export default HeroSection;
