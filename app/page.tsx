"use client";
import { useState, useRef, useCallback } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import Navigation from "@/components/Navigation";
import BackgroundEffects from "@/components/BackgroundEffects";
import HeroSection from "@/components/HeroSection";
import MetricsSection from "@/components/MetricsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Lightbox from "@/components/Lightbox";

export default function Portfolio() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const heroRef = useRef<HTMLElement>(null);
  const metricsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const sectionRefs = {
    hero: heroRef,
    experience: experienceRef,
    projects: projectsRef,
    skills: skillsRef,
    about: aboutRef,
    contact: contactRef,
  };

  const activeSection = useActiveSection(sectionRefs);

  const handleLightboxClose = useCallback(() => setLightboxImage(null), []);

  return (
    <>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-red-500/20 relative overflow-x-hidden">
        <BackgroundEffects />
        <Navigation activeSection={activeSection} />
        <main>
          <HeroSection ref={heroRef} />
          <MetricsSection ref={metricsRef} />
          <ExperienceSection ref={experienceRef} />
          <ProjectsSection
            ref={projectsRef}
            onImageClick={setLightboxImage}
          />
          <TechStackSection ref={skillsRef} />
          <AboutSection ref={aboutRef} />
          <ContactSection ref={contactRef} />
        </main>
      </div>
      <Lightbox image={lightboxImage} onClose={handleLightboxClose} />
    </>
  );
}
