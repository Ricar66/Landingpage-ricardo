"use client";

import { useMotionValue, useSpring } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";
import { useReducedMotion } from "./useReducedMotion";

interface UseMagneticEffectOptions {
  strength?: number;
  scale?: number;
}

export function useMagneticEffect<T extends HTMLElement = HTMLDivElement>(
  options: UseMagneticEffectOptions = {}
) {
  const { strength = 0.15, scale = 1.05 } = options;
  const ref = useRef<T>(null);
  const reduced = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rawScale = useMotionValue(1);

  const x = useSpring(rawX, { stiffness: 150, damping: 15 });
  const y = useSpring(rawY, { stiffness: 150, damping: 15 });
  const springScale = useSpring(rawScale, { stiffness: 300, damping: 20 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (reduced || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      rawX.set((e.clientX - centerX) * strength);
      rawY.set((e.clientY - centerY) * strength);
      rawScale.set(scale);
    },
    [reduced, strength, scale, rawX, rawY, rawScale]
  );

  const handleMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
    rawScale.set(1);
  }, [rawX, rawY, rawScale]);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave, reduced]);

  return { ref, x, y, scale: springScale };
}
