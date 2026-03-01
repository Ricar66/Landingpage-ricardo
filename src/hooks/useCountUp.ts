"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "./useInView";
import { useReducedMotion } from "./useReducedMotion";

interface UseCountUpOptions {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export function useCountUp({
  target,
  duration = 2000,
  prefix = "",
  suffix = "",
}: UseCountUpOptions) {
  const [ref, isVisible] = useInView<HTMLDivElement>({ threshold: 0.5 });
  const [displayValue, setDisplayValue] = useState(`${prefix}0${suffix}`);
  const reduced = useReducedMotion();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    if (reduced) {
      setDisplayValue(`${prefix}${target}${suffix}`);
      return;
    }

    const startTime = performance.now();

    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const currentValue = Math.round(easedProgress * target);

      setDisplayValue(`${prefix}${currentValue}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration, prefix, suffix, reduced]);

  return { ref, displayValue };
}
