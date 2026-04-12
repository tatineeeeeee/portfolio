"use client";
import { forwardRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { HiOutlineEnvelope } from "react-icons/hi2";
import Image from "next/image";
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
  const ItemWrapper = prefersReducedMotion ? "div" : motion.div;

  return (
    <section
      ref={ref}
      id="hero"
      className="pt-32 pb-20 px-6 relative z-10"
      aria-label="Introduction"
    >
      {/* Light mode accent blob */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-red-500/5 dark:bg-transparent rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Text Column */}
          <div className="flex-1 text-center md:text-left">
            <Wrapper
              {...(!prefersReducedMotion && {
                variants: container,
                initial: "hidden",
                animate: "visible",
              })}
            >
              {/* Availability Badge */}
              <ItemWrapper
                variants={prefersReducedMotion ? undefined : item}
                className="mb-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                    Available for full-time roles &mdash; BS IT, 2026
                  </span>
                </div>
              </ItemWrapper>

              {/* Name + Hook Headline */}
              <ItemWrapper
                variants={prefersReducedMotion ? undefined : item}
                className="mb-6"
              >
                <p className="text-red-500 dark:text-red-400 text-sm font-medium mb-3 tracking-wide uppercase">
                  Justine Cesar Ocampo
                </p>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-4 leading-[1.1]">
                  I ship apps that{" "}
                  <span className="bg-gradient-to-r from-red-500 via-red-600 to-amber-500 dark:from-red-400 dark:via-red-300 dark:to-amber-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    handle real payments
                  </span>
                </h1>
                <h2 className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-mono tracking-wide">
                  Full-Stack Developer &mdash; Next.js, React, TypeScript
                </h2>
              </ItemWrapper>

              {/* Personal Paragraph */}
              <ItemWrapper
                variants={prefersReducedMotion ? undefined : item}
              >
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-xl leading-relaxed mx-auto md:mx-0">
                  I built a production tour marketplace processing real
                  payments at ServeBeez, led a 306-commit capstone for a
                  live resort business, and shipped a finance tracker backed
                  by 121 automated tests. I write code that businesses
                  depend on.
                </p>
              </ItemWrapper>

              {/* CTA Buttons */}
              <ItemWrapper
                variants={prefersReducedMotion ? undefined : item}
                className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start mb-10"
              >
                <MagneticButton
                  href="#projects"
                  className="group bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center hover:shadow-lg hover:shadow-red-500/25"
                >
                  <span>View My Work</span>
                </MagneticButton>
                <MagneticButton
                  href="mailto:justinecesarocampo@gmail.com"
                  className="border border-slate-300 dark:border-slate-700 hover:border-red-500 dark:hover:border-red-400 text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400 px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                >
                  <HiOutlineEnvelope className="w-5 h-5" aria-hidden="true" />
                  <span>Contact Me</span>
                </MagneticButton>
                <MagneticButton
                  href="https://github.com/tatineeeeeee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-slate-300 dark:border-slate-700 hover:border-red-500 dark:hover:border-red-400 text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400 px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                >
                  <SiGithub className="w-5 h-5" aria-hidden="true" />
                  <span>GitHub</span>
                </MagneticButton>
              </ItemWrapper>

              {/* Terminal Code Card */}
              <ItemWrapper
                variants={prefersReducedMotion ? undefined : item}
                className="hidden lg:block max-w-md"
              >
                <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden shadow-2xl">
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 border-b border-slate-800">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-slate-500 text-xs ml-2 font-mono">portfolio.tsx</span>
                  </div>
                  <pre className="p-4 text-sm font-mono leading-relaxed text-slate-300">
                    <code>
                      <span className="text-violet-400">const</span>{" "}
                      <span className="text-cyan-300">developer</span>{" "}
                      <span className="text-slate-500">=</span>{" "}
                      <span className="text-slate-400">{"{"}</span>{"\n"}
                      {"  "}<span className="text-amber-300">name</span><span className="text-slate-500">:</span>{" "}<span className="text-green-400">&quot;Justine&quot;</span><span className="text-slate-500">,</span>{"\n"}
                      {"  "}<span className="text-amber-300">stack</span><span className="text-slate-500">:</span>{" "}<span className="text-green-400">&quot;Next.js + TypeScript&quot;</span><span className="text-slate-500">,</span>{"\n"}
                      {"  "}<span className="text-amber-300">tests</span><span className="text-slate-500">:</span>{" "}<span className="text-red-400">121</span><span className="text-slate-500">,</span>{"\n"}
                      {"  "}<span className="text-amber-300">shipped</span><span className="text-slate-500">:</span>{" "}<span className="text-red-400">true</span><span className="text-slate-500">,</span>{"\n"}
                      {"  "}<span className="text-amber-300">payments</span><span className="text-slate-500">:</span>{" "}<span className="text-red-400">true</span><span className="text-slate-500">,</span>{"\n"}
                      <span className="text-slate-400">{"}"}</span><span className="text-slate-500">;</span>
                    </code>
                  </pre>
                </div>
              </ItemWrapper>
            </Wrapper>
          </div>

          {/* Photo Column */}
          <motion.div
            className="flex-shrink-0 relative"
            initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.9 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-red-500/20 via-amber-400/10 to-transparent blur-sm" aria-hidden="true" />
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/80 dark:border-slate-800/80 shadow-2xl shadow-red-500/10 bg-slate-200 dark:bg-slate-800">
              <Image
                src="/projects/profile.png"
                alt="Justine Cesar Ocampo - Full-Stack Web Developer"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 320px"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Code Elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none z-5"
        aria-hidden="true"
        initial={prefersReducedMotion ? undefined : { opacity: 0 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1 }}
        transition={prefersReducedMotion ? undefined : { duration: 1.2, delay: 1 }}
      >
        <div className="absolute top-40 right-20 text-red-500/8 dark:text-red-500/8 text-6xl font-mono animate-float">
          {"{ }"}
        </div>
        <div className="absolute bottom-32 left-10 text-red-400/8 dark:text-red-400/8 text-4xl font-mono animate-float" style={{ animationDelay: "1s" }}>
          {"</>"}
        </div>
        <div className="absolute bottom-20 right-1/2 text-red-300/8 dark:text-red-300/8 text-5xl font-mono animate-float" style={{ animationDelay: "2s" }}>
          {"( )"}
        </div>
      </motion.div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";
export default HeroSection;
