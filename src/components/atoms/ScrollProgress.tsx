"use client";

import { motion, useTransform } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function ScrollProgress() {
  const progress = useScrollProgress();
  const width = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[var(--z-scroll-progress)] origin-left"
      style={{
        width,
        background: "linear-gradient(90deg, var(--accent), var(--accent-hover))",
      }}
    />
  );
}
