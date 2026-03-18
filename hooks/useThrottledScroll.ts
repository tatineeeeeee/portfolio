"use client";
import { useState, useEffect, useRef } from "react";

export function useThrottledScroll(delay = 16) {
  const [scrollY, setScrollY] = useState(0);
  const lastUpdate = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastUpdate.current >= delay) {
        lastUpdate.current = now;
        setScrollY(window.scrollY);
      }
    };

    setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [delay]);

  return scrollY;
}
