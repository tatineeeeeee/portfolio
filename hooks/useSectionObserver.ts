"use client";
import { useState, useEffect, useCallback, useRef, type RefObject } from "react";

export function useSectionObserver(
  refs: Record<string, RefObject<HTMLElement | null>>,
  initialVisible: string[] = ["hero"]
) {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set(initialVisible)
  );
  const refsRef = useRef(refs);
  refsRef.current = refs;

  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => new Set([...prev, entry.target.id]));
        }
      });
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.2,
      rootMargin: "-5% 0px -5% 0px",
    });

    const observeSections = () => {
      Object.values(refsRef.current).forEach((ref) => {
        if (ref.current) observer.observe(ref.current);
      });
    };

    setTimeout(observeSections, 100);

    return () => observer.disconnect();
  }, [observerCallback]);

  return visibleSections;
}
