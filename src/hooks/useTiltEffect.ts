"use client";

import { useMotionValue, useSpring } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";
import { useReducedMotion } from "./useReducedMotion";

interface UseTiltEffectOptions {
  maxTilt?: number;
  perspective?: number;
}

export function useTiltEffect<T extends HTMLElement = HTMLDivElement>(
  options: UseTiltEffectOptions = {}
) {
  const { maxTilt = 6, perspective = 800 } = options;
  const ref = useRef<T>(null);
  const reduced = useReducedMotion();

  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);

  const rotateX = useSpring(rawRotateX, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(rawRotateY, { stiffness: 200, damping: 20 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (reduced || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = e.clientX - centerX;
      const y = e.clientY - centerY;

      rawRotateX.set(((y / (rect.height / 2)) * -maxTilt));
      rawRotateY.set(((x / (rect.width / 2)) * maxTilt));
    },
    [reduced, maxTilt, rawRotateX, rawRotateY]
  );

  const handleMouseLeave = useCallback(() => {
    rawRotateX.set(0);
    rawRotateY.set(0);
  }, [rawRotateX, rawRotateY]);

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

  return { ref, rotateX, rotateY, perspective };
}
