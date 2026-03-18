"use client";
import { useEffect, useState, type RefObject } from "react";

export function useActiveSection(
  sectionRefs: Record<string, RefObject<HTMLElement | null>>
): string {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const entries = Object.entries(sectionRefs);
    const visibleSections = new Map<string, number>();

    entries.forEach(([id, ref]) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visibleSections.set(id, entry.intersectionRatio);
          } else {
            visibleSections.delete(id);
          }

          // Pick the section with highest intersection ratio
          let best = "hero";
          let bestRatio = 0;
          visibleSections.forEach((ratio, sectionId) => {
            if (ratio > bestRatio) {
              best = sectionId;
              bestRatio = ratio;
            }
          });
          setActiveSection(best);
        },
        {
          rootMargin: "-40% 0px -40% 0px",
          threshold: [0, 0.25, 0.5, 0.75, 1],
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, [sectionRefs]);

  return activeSection;
}
