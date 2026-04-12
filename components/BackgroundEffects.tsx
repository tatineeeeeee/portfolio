"use client";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useThrottledMouse } from "@/hooks/useThrottledMouse";

export default function BackgroundEffects() {
  const prefersReducedMotion = useReducedMotion();
  const mousePosition = useThrottledMouse();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Dot Overlay Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(239,68,68,0.02)_1px,transparent_1px),radial-gradient(circle_at_75%_75%,rgba(239,68,68,0.015)_1px,transparent_1px)] bg-[size:100px_100px] z-1"></div>

      {/* Floating Orbs — multi-color for visual variety */}
      <div className={`absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/5 dark:bg-red-500/10 rounded-full blur-xl opacity-30 dark:opacity-50 z-1 ${prefersReducedMotion ? "" : "animate-pulse"}`}></div>
      <div className={`absolute top-3/4 right-1/4 w-24 h-24 bg-amber-400/5 dark:bg-amber-400/8 rounded-full blur-xl opacity-20 dark:opacity-40 z-1 ${prefersReducedMotion ? "" : "animate-pulse"}`} style={{ animationDelay: "1s" }}></div>
      <div className={`absolute top-1/2 left-3/4 w-40 h-40 bg-cyan-500/3 dark:bg-cyan-500/6 rounded-full blur-xl opacity-15 dark:opacity-30 z-1 ${prefersReducedMotion ? "" : "animate-pulse"}`} style={{ animationDelay: "2s" }}></div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-red-100/30 dark:from-red-950/20 to-transparent z-1"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-amber-100/15 dark:from-amber-950/10 to-transparent z-1"></div>

      {/* Cursor Glow Effect — red center blending to amber */}
      {!prefersReducedMotion && (
        <div
          className="absolute w-64 h-64 rounded-full blur-2xl transition-all duration-300 ease-out z-2"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
            background: "radial-gradient(circle, rgba(239,68,68,0.06) 0%, rgba(245,158,11,0.03) 50%, transparent 70%)",
          }}
        ></div>
      )}
    </div>
  );
}
