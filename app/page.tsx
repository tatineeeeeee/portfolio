'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
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
  SiVercel 
} from 'react-icons/si';

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll-based animations
  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setVisibleSections(prev => new Set([...prev, entry.target.id]));
      } else {
        setVisibleSections(prev => {
          const newSet = new Set(prev);
          newSet.delete(entry.target.id);
          return newSet;
        });
      }
    });
  }, []);

  useEffect(() => {
    // Loading state
    const loadingTimer = setTimeout(() => {
      setLoading(false);
      setIsVisible(true);
    }, 1500);

    // Scroll animation handler
    const handleScroll = () => setScrollY(window.scrollY);
    
    // Mouse move handler for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Intersection Observer for sections
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '-10% 0px -10% 0px',
    });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Observe sections
    const sections = [heroRef.current, aboutRef.current, projectsRef.current, skillsRef.current, contactRef.current];
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      clearTimeout(loadingTimer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, [observerCallback]);

  const skills = [
    // Frontend Technologies
    { 
      name: 'React', 
      category: 'Frontend', 
      icon: <SiReact className="w-8 h-8 text-[#61DAFB]" />
    },
    { 
      name: 'Next.js', 
      category: 'Frontend', 
      icon: <SiNextdotjs className="w-8 h-8 text-white" />
    },
    { 
      name: 'TypeScript', 
      category: 'Frontend', 
      icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" />
    },
    { 
      name: 'JavaScript', 
      category: 'Frontend', 
      icon: <SiJavascript className="w-8 h-8 text-[#F7DF1E]" />
    },
    { 
      name: 'Tailwind CSS', 
      category: 'Frontend', 
      icon: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />
    },
    { 
      name: 'HTML', 
      category: 'Frontend', 
      icon: <SiHtml5 className="w-8 h-8 text-[#E34F26]" />
    },
    { 
      name: 'CSS', 
      category: 'Frontend', 
      icon: <SiCss3 className="w-8 h-8 text-[#1572B6]" />
    },
    
    // Backend & Database
    { 
      name: 'Node.js', 
      category: 'Backend', 
      icon: <SiNodedotjs className="w-8 h-8 text-[#339933]" />
    },
    { 
      name: 'PostgreSQL', 
      category: 'Database', 
      icon: <SiPostgresql className="w-8 h-8 text-[#336791]" />
    },
    { 
      name: 'MySQL', 
      category: 'Database', 
      icon: <SiMysql className="w-8 h-8 text-[#4479A1]" />
    },
    
    // Tools & Cloud
    { 
      name: 'Git', 
      category: 'Tools', 
      icon: <SiGit className="w-8 h-8 text-[#F05032]" />
    },
    { 
      name: 'Vercel', 
      category: 'Cloud', 
      icon: <SiVercel className="w-8 h-8 text-white" />
    }
  ];

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio built with Next.js and Tailwind CSS featuring responsive design, smooth animations, and modern UI components.',
      tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'React'],
      github: 'https://github.com/tatineeeeeee/portfolio',
      demo: 'https://justine-portfolio.vercel.app',
      status: 'Live',
      highlight: true
    },
    {
      title: 'Kampo Ibayo Resort - Booking System',
      description: 'A comprehensive full-stack booking management system for a resort featuring real-time availability, payment processing with PayMongo, administrative dashboard, and automated email notifications.',
      tech: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PayMongo API'],
      github: 'https://github.com/tatineeeeeee/kampo-ibayo-UI-',
      demo: 'https://kampo-ibayo-resort.vercel.app/',
      status: 'Live'
    }
  ];

  // Loading Screen Component
  if (loading) {
    return (
      <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-50">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin mb-4 mx-auto"></div>
          <div className="text-slate-400 animate-pulse text-lg">Loading Portfolio...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-red-500/20 relative overflow-x-hidden">
      {/* Enhanced Background with Image */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('/my love.jpg')",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-slate-950/80"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse z-1"></div>
        
        {/* Red Dot Overlay Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(239,68,68,0.02)_1px,transparent_1px),radial-gradient(circle_at_75%_75%,rgba(239,68,68,0.015)_1px,transparent_1px)] bg-[size:100px_100px] z-1"></div>
        
        {/* Dynamic Particle System */}
        <div className="absolute inset-0 z-2">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-400/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
        
        {/* Additional Red Overlay Dots */}
        <div className="absolute inset-0 z-1">
          {[...Array(50)].map((_, i) => (
            <div
              key={`dot-${i}`}
              className="absolute w-0.5 h-0.5 bg-red-500/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
        
        {/* Enhanced Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-pulse opacity-50 z-1"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-red-400/8 rounded-full blur-xl animate-pulse delay-1000 opacity-40 z-1"></div>
        <div className="absolute top-1/2 left-3/4 w-40 h-40 bg-red-600/6 rounded-full blur-xl animate-pulse delay-2000 opacity-30 z-1"></div>
        
        {/* Additional Red Accents */}
        <div className="absolute top-10 right-1/3 w-2 h-2 bg-red-500/20 rounded-full animate-ping z-1"></div>
        <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-red-400/30 rounded-full animate-ping delay-500 z-1"></div>
        <div className="absolute top-1/3 left-10 w-1.5 h-1.5 bg-red-600/15 rounded-full animate-ping delay-1000 z-1"></div>
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-red-950/20 to-transparent z-1"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-red-950/20 to-transparent z-1"></div>
        
        {/* Interactive Mouse Follower */}
        <div 
          className="absolute w-96 h-96 bg-red-500/5 rounded-full blur-3xl transition-all duration-700 ease-out z-2"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
        
        {/* Animated Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500/10 to-transparent animate-pulse z-1"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-400/8 to-transparent animate-pulse delay-1000 z-1"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50 px-6 py-4 z-50 animate-slide-down">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-sm font-bold">J</span>
            </div>
            <span className="font-semibold group-hover:text-red-400 transition-colors">Justine</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <a href="#about" className="text-slate-400 hover:text-red-400 transition-all duration-300 hover:scale-105 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#projects" className="text-slate-400 hover:text-red-400 transition-all duration-300 hover:scale-105 relative group">
              Work
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-slate-400 hover:text-red-400 transition-all duration-300 hover:scale-105 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="https://github.com/tatineeeeeee" target="_blank" 
               className="text-slate-400 hover:text-red-400 transition-all duration-300 hover:scale-105 flex items-center space-x-1 group">
              <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-400 hover:text-red-400 transition-colors p-2 hover:bg-slate-800/50 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} id="hero" className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto relative z-20">
          <div className={`transition-all duration-1000 ${visibleSections.has('hero') || isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="mb-6">
              <p className="text-red-400 text-sm font-medium mb-2 animate-bounce">👋 Hello, I&apos;m</p>
              <div className="relative">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-slate-100 via-red-200 to-slate-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Justine
                </h1>
                {/* Animated underline */}
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-transparent opacity-0 animate-slide-right"></div>
              </div>
              <h2 className="text-2xl md:text-3xl text-slate-400 mb-6 animate-fade-in-up delay-300">
                Frontend Developer & BS Information Technology Student
              </h2>
            </div>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed animate-fade-in-up delay-500">
              I craft modern web experiences with clean code and thoughtful design. 
              Currently pursuing Information Technology while building projects that matter.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-700">
              <a href="#projects" 
                 className="group bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
                <span>View My Work</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="mailto:justinecesarocampo@gmail.com"
                 className="border border-slate-700 hover:border-red-400 text-slate-300 hover:text-red-400 px-6 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:bg-slate-800/50">
                <span>✉️</span>
                <span>Contact Me</span>
              </a>
              <a href="https://github.com/tatineeeeeee" target="_blank"
                 className="border border-slate-700 hover:border-red-400 text-slate-300 hover:text-red-400 px-6 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:bg-slate-800/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Floating Code Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
          <div className="absolute top-20 right-10 text-red-500/10 text-6xl font-mono animate-float">{"{ }"}</div>
          <div className="absolute bottom-32 left-10 text-red-400/10 text-4xl font-mono animate-float delay-1000">{"</>"}</div>
          <div className="absolute top-1/2 right-1/4 text-red-300/10 text-5xl font-mono animate-float delay-2000">{"( )"}</div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section ref={skillsRef} id="skills" className="py-20 border-t border-slate-800/50 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('skills') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Technologies I use to bring ideas to life
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <div key={skill.name}
                   className={`bg-slate-900/50 rounded-2xl p-6 border border-slate-800/50 hover:border-red-500/30 hover:bg-slate-900/70 transition-all duration-500 hover:scale-110 group ${visibleSections.has('skills') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                   style={{ transitionDelay: `${index * 50}ms` }}>
                <div className="flex flex-col items-center space-y-3">
                  <div className="group-hover:scale-125 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-slate-300 font-medium text-center group-hover:text-red-300 transition-colors text-sm">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('about') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-100 to-red-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Passionate developer crafting digital experiences with modern technologies
            </p>
          </div>
          
          {/* Hero Statement */}
          <div className={`mb-16 text-center transition-all duration-1000 ${visibleSections.has('about') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            <div className="bg-gradient-to-br from-slate-900/40 to-slate-800/40 rounded-3xl p-8 border border-slate-700/50 hover:border-red-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-light text-slate-200 leading-relaxed">
                I&apos;m a <span className="text-red-400 font-semibold">BS Information Technology</span> student passionate about creating 
                <span className="text-red-400 font-semibold"> exceptional web experiences</span> that bridge the gap between 
                beautiful design and powerful functionality.
              </p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className={`grid lg:grid-cols-2 gap-12 mb-16 transition-all duration-1000 ${visibleSections.has('about') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
            {/* Left Column - Story & Values */}
            <div className="space-y-8">
              <div className="group">
                <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 rounded-2xl p-8 border border-slate-700/50 hover:border-red-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-200">My Journey</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    Currently pursuing my degree in Information Technology while diving deep into 
                    the world of frontend development. I believe in learning by doing and 
                    constantly challenging myself with new projects and technologies.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 rounded-2xl p-8 border border-slate-700/50 hover:border-red-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-200">Philosophy</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    I believe great software should be intuitive, accessible, and solve real problems. 
                    Clean code isn&apos;t just about following best practices—it&apos;s about creating 
                    maintainable solutions that can evolve with user needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Skills & Stats */}
            <div className="space-y-8">
              <div className="group">
                <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 rounded-2xl p-8 border border-slate-700/50 hover:border-red-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-200">Focus Areas</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      'Frontend Development',
                      'Responsive Design', 
                      'Database Integration',
                      'Performance Optimization',
                      'Modern Web Standards',
                      'User Experience'
                    ].map((skill) => (
                      <div key={skill} className="flex items-center group/item hover:scale-105 transition-transform duration-200">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3 group-hover/item:bg-red-300"></div>
                        <span className="text-slate-300 group-hover/item:text-red-300 transition-colors">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 rounded-2xl p-8 border border-slate-700/50 hover:border-red-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-200">Currently Exploring</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      'Advanced React Patterns',
                      'Full-Stack Development', 
                      'Cloud Technologies',
                      'UI/UX Design Principles'
                    ].map((learning) => (
                      <div key={learning} className="flex items-center group/item hover:scale-105 transition-transform duration-200">
                        <div className="w-8 h-1 bg-gradient-to-r from-red-500 to-red-300 rounded-full mr-3 group-hover/item:from-red-400 group-hover/item:to-red-200"></div>
                        <span className="text-slate-300 group-hover/item:text-red-300 transition-colors">{learning}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats/Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-2xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/20 hover:-translate-y-1 text-center">
                <div className="text-3xl font-bold text-red-400 mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
                <div className="text-slate-300 font-medium">Projects Completed</div>
                <div className="text-slate-400 text-sm mt-1">Academic & Personal</div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-2xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/20 hover:-translate-y-1 text-center">
                <div className="text-3xl font-bold text-red-400 mb-2 group-hover:scale-110 transition-transform duration-300">4th</div>
                <div className="text-slate-300 font-medium">Year Student</div>
                <div className="text-slate-400 text-sm mt-1">BS Information Technology</div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-2xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/20 hover:-translate-y-1 text-center">
                <div className="text-3xl font-bold text-red-400 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-slate-300 font-medium">Learning Mode</div>
                <div className="text-slate-400 text-sm mt-1">Always Growing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="py-20 bg-slate-900/20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('projects') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A selection of projects that showcase my skills and growth as a developer
            </p>
          </div>
          
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div key={project.title}
                   className={`group transition-all duration-700 ${visibleSections.has('projects') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                   style={{ transitionDelay: `${index * 150}ms` }}>
                <div className={`bg-slate-900/40 rounded-2xl border border-slate-800/50 overflow-hidden 
                                 hover:border-red-500/30 transition-all duration-500 group-hover:bg-slate-900/60 hover:scale-105
                                 hover:shadow-2xl hover:shadow-red-500/10 group-hover:-translate-y-2
                                 ${project.highlight ? 'md:flex md:items-center min-h-[320px]' : 'p-6'}`}>
                  
                  {project.highlight ? (
                    // Featured project layout
                    <>
                      <div className="md:w-1/2 p-8">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-red-400 text-sm font-medium">✨ Featured Project</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === 'Live' ? 'bg-emerald-500/20 text-emerald-400' : 
                            project.status === 'Completed' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-amber-500/20 text-amber-400'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-red-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech) => (
                            <span key={tech} className="bg-slate-800/80 text-slate-300 px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          <a href={project.github} target="_blank"
                             className="inline-flex items-center text-slate-400 hover:text-red-400 transition-colors">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            View Code
                          </a>
                          <a href={project.demo} target="_blank"
                             className="inline-flex items-center text-slate-400 hover:text-red-400 transition-colors">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live Demo
                          </a>
                        </div>
                      </div>
                      <div className="md:w-1/2 bg-slate-800/30 h-64 md:h-full">
                      </div>
                    </>
                  ) : (
                    // Regular project layout - now consistent height
                    <div className="p-6 min-h-[280px] flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold group-hover:text-red-400 transition-colors">
                          {project.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Live' ? 'bg-emerald-500/20 text-emerald-400' : 
                          project.status === 'Completed' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-amber-500/20 text-amber-400'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-slate-300 mb-6 leading-relaxed flex-grow">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span key={tech} className="bg-slate-800/80 text-slate-300 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4 mt-auto">
                        <a href={project.github} target="_blank"
                           className="inline-flex items-center text-slate-400 hover:text-red-400 transition-colors">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </a>
                        <a href={project.demo} target="_blank"
                           className="inline-flex items-center text-slate-400 hover:text-red-400 transition-colors">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Demo
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/10 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('contact') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              I&apos;m always excited to discuss new opportunities, collaborate on projects, 
              or just chat about technology and development.
            </p>
          </div>
          
          <div className={`grid md:grid-cols-2 gap-8 mb-12 transition-all duration-1000 ${visibleSections.has('contact') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {/* Contact Info */}
            <div className="bg-slate-900/30 rounded-2xl p-8 border border-slate-800/50 hover:border-red-500/30 transition-all duration-300 hover:bg-slate-900/50">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className="mr-2">💬</span>
                Get in touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-slate-300">
                  <span className="mr-3">📧</span>
                  <span>justinecesarocampo@gmail.com</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <span className="mr-3">📍</span>
                  <span>Available for remote work</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <span className="mr-3">🎓</span>
                  <span>Open to internships & entry-level positions</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-slate-900/30 rounded-2xl p-8 border border-slate-800/50 hover:border-red-500/30 transition-all duration-300 hover:bg-slate-900/50">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className="mr-2">🔗</span>
                Connect with me
              </h3>
              <div className="space-y-4">
                <a href="https://github.com/tatineeeeeee" target="_blank"
                   className="flex items-center text-slate-300 hover:text-red-400 transition-colors group">
                  <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub Profile</span>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank"
                   className="flex items-center text-slate-300 hover:text-red-400 transition-colors group">
                  <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>
                <a href="https://www.facebook.com/justinecesarocampo05" target="_blank"
                   className="flex items-center text-slate-300 hover:text-red-400 transition-colors group">
                  <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center transition-all duration-1000 delay-300 translate-y-0 opacity-100">
            <a href="mailto:justinecesarocampo@gmail.com"
               className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
              <span className="mr-2">✉️</span>
              <span>Send me an email</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
