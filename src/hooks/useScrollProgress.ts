"use client";

import { useMotionValue } from "framer-motion";
import { useEffect } from "react";

export function useScrollProgress() {
  const progress = useMotionValue(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        progress.set(scrollTop / docHeight);
      }
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, [progress]);

  return progress;
}
