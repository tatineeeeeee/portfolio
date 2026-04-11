"use client";
import { forwardRef } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlineAcademicCap,
  HiOutlineLink,
  HiOutlineDocumentArrowDown,
} from "react-icons/hi2";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/motion/ScrollReveal";

const ContactSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      ref={ref}
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-transparent to-slate-100/50 dark:to-slate-900/10 relative z-10"
      aria-label="Contact information"
    >
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            I&apos;m always excited to discuss new opportunities,
            collaborate on projects, or just chat about technology and
            development.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <ScrollReveal delay={0.1}>
            <div className="bg-white/70 dark:bg-slate-900/30 rounded-2xl p-8 border border-slate-200 dark:border-slate-800/50 hover:border-red-500/30 transition-all duration-300 hover:bg-white/90 dark:hover:bg-slate-900/50 h-full">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <HiOutlineChatBubbleLeftRight className="w-6 h-6 mr-2 text-red-500 dark:text-red-400" aria-hidden="true" />
                Send a message
              </h3>
              <ContactForm />
            </div>
          </ScrollReveal>

          {/* Contact Info & Links */}
          <ScrollReveal delay={0.2} className="space-y-8">
            <div className="bg-white/70 dark:bg-slate-900/30 rounded-2xl p-8 border border-slate-200 dark:border-slate-800/50 hover:border-red-500/30 transition-all duration-300 hover:bg-white/90 dark:hover:bg-slate-900/50">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <HiOutlineEnvelope className="w-6 h-6 mr-2 text-red-500 dark:text-red-400" aria-hidden="true" />
                Get in touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-slate-600 dark:text-slate-300">
                  <HiOutlineEnvelope className="w-5 h-5 mr-3 text-red-500 dark:text-red-400" aria-hidden="true" />
                  <a href="mailto:justine.cesarocampo21@gmail.com" className="hover:text-red-500 dark:hover:text-red-400 transition-colors">
                    justine.cesarocampo21@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-slate-600 dark:text-slate-300">
                  <HiOutlineMapPin className="w-5 h-5 mr-3 text-red-500 dark:text-red-400" aria-hidden="true" />
                  <span>Available for remote work</span>
                </div>
                <div className="flex items-center text-slate-600 dark:text-slate-300">
                  <HiOutlineAcademicCap className="w-5 h-5 mr-3 text-red-500 dark:text-red-400" aria-hidden="true" />
                  <span>Open to developer opportunities</span>
                </div>
                <div className="flex items-center text-slate-600 dark:text-slate-300">
                  <HiOutlineDocumentArrowDown className="w-5 h-5 mr-3 text-red-500 dark:text-red-400" aria-hidden="true" />
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 dark:hover:text-red-400 transition-colors">
                    Download Resume (PDF)
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-slate-900/30 rounded-2xl p-8 border border-slate-200 dark:border-slate-800/50 hover:border-red-500/30 transition-all duration-300 hover:bg-white/90 dark:hover:bg-slate-900/50">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <HiOutlineLink className="w-6 h-6 mr-2 text-red-500 dark:text-red-400" aria-hidden="true" />
                Connect with me
              </h3>
              <nav className="space-y-4" aria-label="Social links">
                <a
                  href="https://github.com/tatineeeeeee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400 transition-colors group"
                >
                  <SiGithub className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <span>GitHub Profile</span>
                </a>
                <a
                  href="https://linkedin.com/in/justinecesarocampo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400 transition-colors group"
                >
                  <SiLinkedin className="w-5 h-5 mr-3 text-[#0A66C2] group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <span>LinkedIn Profile</span>
                </a>
              </nav>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";
export default ContactSection;
