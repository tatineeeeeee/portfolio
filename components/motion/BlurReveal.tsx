"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface BlurRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function BlurReveal({ children, className, delay = 0 }: BlurRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(10px)", opacity: 0 }}
      whileInView={{ filter: "blur(0px)", opacity: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
