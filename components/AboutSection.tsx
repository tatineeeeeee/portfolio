"use client";
import { forwardRef } from "react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import BlurReveal from "@/components/motion/BlurReveal";

const focusAreas = [
  "Full-Stack Development",
  "Responsive Design",
  "Database Integration",
  "Payment API Integration",
  "Modern Web Standards",
  "User Experience",
];

const currentlyExploring = [
  "Advanced React Patterns",
  "DevOps & CI/CD",
  "Cloud Technologies",
  "System Design Fundamentals",
];

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
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-100 to-red-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Full-stack developer building real-world applications with
            Next.js, React, and TypeScript
          </p>
        </ScrollReveal>

        {/* Hero Statement */}
        <BlurReveal className="mb-16 text-center" delay={0.1}>
          <div className="bg-gradient-to-br from-slate-900/40 to-slate-800/40 rounded-3xl p-8 border border-slate-700/50 hover:border-red-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10 backdrop-blur-sm">
            <p className="text-2xl md:text-3xl font-light text-slate-200 leading-relaxed">
              I&apos;m a{" "}
              <span className="text-red-400 font-semibold">
                BS Information Technology
              </span>{" "}
              graduate who builds full-stack web applications that
              <span className="text-red-400 font-semibold">
                {" "}
                solve real problems
              </span>{" "}
              — from resort booking systems processing live payments to
              collaborative developer platforms.
            </p>
          </div>
        </BlurReveal>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column */}
          <div className="space-y-8">
            <ScrollReveal delay={0.15}>
              <div className="group">
                <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 rounded-2xl p-8 border border-slate-700/50 hover:border-red-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-200">My Journey</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    BS IT graduate with hands-on OJT experience in a professional
                    development environment. I learn by building — from full-stack
                    booking systems with real payment processing to collaborative
                    platforms with real-time data sync.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="group">
                <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 rounded-2xl p-8 border border-slate-700/50 hover:border-red-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-200">Philosophy</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    I believe great software should be intuitive, accessible,
                    and solve real problems. Clean code isn&apos;t just about
                    following best practices—it&apos;s about creating
                    maintainable solutions that can evolve with user needs.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <ScrollReveal delay={0.2}>
              <div className="group">
                <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 rounded-2xl p-8 border border-slate-700/50 hover:border-red-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-200">Focus Areas</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4" role="list">
                    {focusAreas.map((skill) => (
                      <div key={skill} className="flex items-center group/item hover:scale-105 transition-transform duration-200" role="listitem">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3 group-hover/item:bg-red-300" aria-hidden="true"></div>
                        <span className="text-slate-300 group-hover/item:text-red-300 transition-colors">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="group">
                <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 rounded-2xl p-8 border border-slate-700/50 hover:border-red-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-200">Currently Exploring</h3>
                  </div>
                  <div className="space-y-3" role="list">
                    {currentlyExploring.map((learning) => (
                      <div key={learning} className="flex items-center group/item hover:scale-105 transition-transform duration-200" role="listitem">
                        <div className="w-8 h-1 bg-gradient-to-r from-red-500 to-red-300 rounded-full mr-3 group-hover/item:from-red-400 group-hover/item:to-red-200" aria-hidden="true"></div>
                        <span className="text-slate-300 group-hover/item:text-red-300 transition-colors">{learning}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { value: "5+", label: "Projects Shipped", sub: "Full-Stack & Frontend" },
            { value: "BS IT", label: "Graduate", sub: "Information Technology" },
            { value: "24/7", label: "Learning Mode", sub: "Always Growing" },
          ].map((stat, index) => (
            <ScrollReveal key={stat.label} delay={0.1 * index}>
              <div className="group">
                <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-2xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/20 hover:-translate-y-1 text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-slate-300 font-medium">{stat.label}</div>
                  <div className="text-slate-400 text-sm mt-1">{stat.sub}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";
export default AboutSection;
