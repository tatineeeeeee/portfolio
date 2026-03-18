"use client";
import { forwardRef } from "react";
import { SiGithub } from "react-icons/si";
import { HiOutlineEnvelope } from "react-icons/hi2";

interface HeroSectionProps {
  loading: boolean;
}

const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(
  ({ loading }, ref) => {
    return (
      <section
        ref={ref}
        id="hero"
        className="pt-32 pb-20 px-6 relative z-10"
        aria-label="Introduction"
      >
        <div className="max-w-4xl mx-auto relative z-20">
          <div
            className={`transition-all duration-1000 ${!loading ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <div className="mb-6">
              <p className="text-red-400 text-sm font-medium mb-2 animate-bounce">
                Hello, I&apos;m
              </p>
              <div className="relative">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-slate-100 via-red-200 to-slate-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Justine
                </h1>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-transparent opacity-0 animate-slide-right"></div>
              </div>
              <h2 className="text-2xl md:text-3xl text-slate-400 mb-6 animate-fade-in-up delay-300">
                Frontend Developer & BS Information Technology Student
              </h2>
            </div>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed animate-fade-in-up delay-500">
              I craft modern web experiences with clean code and thoughtful
              design. Currently pursuing Information Technology while building
              projects that matter.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-in-up delay-700">
              <a
                href="#projects"
                className="group bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
              >
                <span>View My Work</span>
              </a>
              <a
                href="mailto:justinecesarocampo@gmail.com"
                className="border border-slate-700 hover:border-red-400 text-slate-300 hover:text-red-400 px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:bg-slate-800/50"
              >
                <HiOutlineEnvelope className="w-5 h-5" aria-hidden="true" />
                <span>Contact Me</span>
              </a>
              <a
                href="https://github.com/tatineeeeeee"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-700 hover:border-red-400 text-slate-300 hover:text-red-400 px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:bg-slate-800/50"
              >
                <SiGithub className="w-5 h-5" aria-hidden="true" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Floating Code Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-5" aria-hidden="true">
          <div className="absolute top-20 right-10 text-red-500/10 text-6xl font-mono animate-float">
            {"{ }"}
          </div>
          <div className="absolute bottom-32 left-10 text-red-400/10 text-4xl font-mono animate-float delay-1000">
            {"</>"}
          </div>
          <div className="absolute top-1/2 right-1/4 text-red-300/10 text-5xl font-mono animate-float delay-2000">
            {"( )"}
          </div>
        </div>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";
export default HeroSection;
