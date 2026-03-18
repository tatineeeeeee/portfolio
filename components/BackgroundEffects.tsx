"use client";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useThrottledScroll } from "@/hooks/useThrottledScroll";
import { useThrottledMouse } from "@/hooks/useThrottledMouse";
import Image from "next/image";

interface BackgroundEffectsProps {
  isClient: boolean;
}

export default function BackgroundEffects({ isClient }: BackgroundEffectsProps) {
  const prefersReducedMotion = useReducedMotion();
  const scrollY = useThrottledScroll();
  const mousePosition = useThrottledMouse();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Optimized Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/love.jpg"
          alt=""
          fill
          className="object-cover opacity-30 transition-transform duration-75 ease-out"
          style={{
            transform: prefersReducedMotion ? "none" : `translateY(${scrollY * 0.5}px)`,
          }}
          priority
          quality={60}
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-slate-950/80"></div>

      {/* Animated Grid Pattern */}
      <div className={`absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.03)_1px,transparent_1px)] bg-[size:50px_50px] z-1 ${prefersReducedMotion ? "" : "animate-pulse"}`}></div>

      {/* Red Dot Overlay Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(239,68,68,0.02)_1px,transparent_1px),radial-gradient(circle_at_75%_75%,rgba(239,68,68,0.015)_1px,transparent_1px)] bg-[size:100px_100px] z-1"></div>

      {/* Dynamic Particles - reduced count for performance */}
      {isClient && !prefersReducedMotion && (
        <div className="absolute inset-0 z-2">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-400/20 rounded-full animate-float"
              style={{
                left: `${(i * 17 + 15) % 100}%`,
                top: `${(i * 23 + 25) % 100}%`,
                animationDelay: `${(i * 0.3) % 5}s`,
                animationDuration: `${3 + (i % 4)}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Floating Orbs */}
      <div className={`absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/10 rounded-full blur-xl opacity-50 z-1 ${prefersReducedMotion ? "" : "animate-pulse"}`}></div>
      <div className={`absolute top-3/4 right-1/4 w-24 h-24 bg-red-400/8 rounded-full blur-xl opacity-40 z-1 ${prefersReducedMotion ? "" : "animate-pulse delay-1000"}`}></div>
      <div className={`absolute top-1/2 left-3/4 w-40 h-40 bg-red-600/6 rounded-full blur-xl opacity-30 z-1 ${prefersReducedMotion ? "" : "animate-pulse delay-2000"}`}></div>

      {/* Ping accents */}
      {!prefersReducedMotion && (
        <>
          <div className="absolute top-10 right-1/3 w-2 h-2 bg-red-500/20 rounded-full animate-ping z-1"></div>
          <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-red-400/30 rounded-full animate-ping delay-500 z-1"></div>
          <div className="absolute top-1/3 left-10 w-1.5 h-1.5 bg-red-600/15 rounded-full animate-ping delay-1000 z-1"></div>
        </>
      )}

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-red-950/20 to-transparent z-1"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-red-950/20 to-transparent z-1"></div>

      {/* Interactive Mouse Follower */}
      {!prefersReducedMotion && (
        <div
          className="absolute w-96 h-96 bg-red-500/5 rounded-full blur-3xl transition-all duration-700 ease-out z-2"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      )}

      {/* Animated Lines */}
      {!prefersReducedMotion && (
        <>
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500/10 to-transparent animate-pulse z-1"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-400/8 to-transparent animate-pulse delay-1000 z-1"></div>
        </>
      )}
    </div>
  );
}
