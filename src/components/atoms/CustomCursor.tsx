"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useEffect, useState } from "react";

const INTERACTIVE_SELECTOR = "a, button, [role='button'], input, textarea, select, label";

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const springX = useSpring(x, { stiffness: 500, damping: 28 });
  const springY = useSpring(y, { stiffness: 500, damping: 28 });

  const ringX = useSpring(x, { stiffness: 150, damping: 20 });
  const ringY = useSpring(y, { stiffness: 150, damping: 20 });

  const dotSize = useTransform(() => (isHovering ? 14 : 8));
  const ringSize = useTransform(() => (isHovering ? 50 : 36));

  useEffect(() => {
    const isTouchDevice =
      window.matchMedia("(hover: none)").matches || window.innerWidth < 1024;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isTouchDevice || prefersReduced) {
      setIsDesktop(false);
      return;
    }

    setIsDesktop(true);
    document.body.style.cursor = "none";

    const handleEnter = () => setIsVisible(true);
    const handleLeave = () => setIsVisible(false);

    // Event delegation - no MutationObserver needed
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(INTERACTIVE_SELECTOR)) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(INTERACTIVE_SELECTOR)) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mouseenter", handleEnter);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });

    return () => {
      document.body.style.cursor = "";
      document.removeEventListener("mouseenter", handleEnter);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[var(--z-cursor)]"
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.15s" }}
    >
      {/* Dot */}
      <motion.div
        className="absolute rounded-full bg-white mix-blend-difference"
        style={{
          width: dotSize,
          height: dotSize,
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Ring */}
      <motion.div
        className="absolute rounded-full border border-white/50"
        style={{
          width: ringSize,
          height: ringSize,
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
}
