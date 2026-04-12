"use client";
import { forwardRef } from "react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import BlurReveal from "@/components/motion/BlurReveal";
import { focusAreas, currentlyExploring } from "@/lib/data";

const AboutSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      ref={ref}
      id="about"
      className="py-20 px-6 relative z-10"
      aria-label="About me"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="font-mono text-xs text-red-500/40 dark:text-red-400/40 block mb-2">
            {"// 05"}
          </span>
          <h2 className="text-4xl font-display font-bold mb-4 bg-gradient-to-r from-slate-800 dark:from-slate-100 to-red-500 dark:to-red-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Full-stack developer who ships tested, production-grade applications
          </p>
        </ScrollReveal>

        {/* Hero Statement */}
        <BlurReveal className="mb-16 text-center" delay={0.1}>
          <div className="bg-gradient-to-br from-white/60 dark:from-slate-900/40 to-slate-50/60 dark:to-slate-800/40 rounded-3xl p-8 border border-slate-300/50 dark:border-slate-700/50 hover:border-red-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10 backdrop-blur-sm">
            <p className="text-2xl md:text-3xl font-light text-slate-800 dark:text-slate-200 leading-relaxed">
              I ship production web applications with the{" "}
              <span className="text-red-400 font-semibold">
                testing discipline
              </span>{" "}
              most senior developers would expect from a mid-level engineer —
              109 unit tests, 12 E2E tests, CI/CD pipelines, and a security
              audit.{" "}
              <span className="text-red-400 font-semibold">
                All before my first full-time role.
              </span>
            </p>
          </div>
        </BlurReveal>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <ScrollReveal delay={0.15}>
              <div className="group">
                <div className="bg-gradient-to-br from-white/80 dark:from-slate-900/60 to-slate-50/80 dark:to-slate-800/60 rounded-2xl p-8 border border-slate-300/50 dark:border-slate-700/50 hover:border-red-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">My Journey</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                    During my internship at ServeBeez, I solo-built TripSulit — a
                    production tour booking platform processing real payments.
                    For my capstone, I led development on Kampo Ibayo, a resort
                    booking system, across 306 commits. Then I built GastoGuard
                    with 109 unit tests, 12 E2E tests, and a full CI/CD pipeline
                    — because I believe if your code isn&apos;t tested, it
                    isn&apos;t done.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="group">
                <div className="bg-gradient-to-br from-white/80 dark:from-slate-900/60 to-slate-50/80 dark:to-slate-800/60 rounded-2xl p-8 border border-slate-300/50 dark:border-slate-700/50 hover:border-red-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">What Sets Me Apart</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                    Most fresh graduates ship projects that work on demo day. I
                    ship projects with automated test suites, CI/CD pipelines,
                    and security audits. I&apos;ve processed real payments
                    through PayMongo, handled real customer data with proper
                    security, and built systems that real businesses depend on —
                    not just class assignments.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <ScrollReveal delay={0.2}>
              <div className="group">
                <div className="bg-gradient-to-br from-white/80 dark:from-slate-900/60 to-slate-50/80 dark:to-slate-800/60 rounded-2xl p-8 border border-slate-300/50 dark:border-slate-700/50 hover:border-red-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Focus Areas</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4" role="list">
                    {focusAreas.map((skill) => (
                      <div key={skill} className="flex items-center group/item hover:scale-105 transition-transform duration-200" role="listitem">
                        <div className="w-2 h-2 bg-red-500 dark:bg-red-400 rounded-full mr-3 group-hover/item:bg-red-400 dark:group-hover/item:bg-red-300" aria-hidden="true"></div>
                        <span className="text-slate-600 dark:text-slate-300 group-hover/item:text-red-500 dark:group-hover/item:text-red-300 transition-colors">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="group">
                <div className="bg-gradient-to-br from-white/80 dark:from-slate-900/60 to-slate-50/80 dark:to-slate-800/60 rounded-2xl p-8 border border-slate-300/50 dark:border-slate-700/50 hover:border-red-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Deepening Expertise In</h3>
                  </div>
                  <div className="space-y-3" role="list">
                    {currentlyExploring.map((learning) => (
                      <div key={learning} className="flex items-center group/item hover:scale-105 transition-transform duration-200" role="listitem">
                        <div className="w-8 h-1 bg-gradient-to-r from-red-500 to-red-300 rounded-full mr-3 group-hover/item:from-red-400 group-hover/item:to-red-200" aria-hidden="true"></div>
                        <span className="text-slate-600 dark:text-slate-300 group-hover/item:text-red-500 dark:group-hover/item:text-red-300 transition-colors">{learning}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";
export default AboutSection;
