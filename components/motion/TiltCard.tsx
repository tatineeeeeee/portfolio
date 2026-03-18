"use client";
import { useRef, useState, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const prefersReducedMotion = useReducedMotion();

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setTransform(`perspective(800px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform("");
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: "transform 0.2s ease-out",
      }}
    >
      {children}
    </div>
  );
}
