"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionEyebrowProps {
  children: string;
  className?: string;
}

export default function SectionEyebrow({ children, className }: SectionEyebrowProps) {
  return (
    <motion.p
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(
        "text-[var(--text-eyebrow)] font-mono font-semibold tracking-[0.2em] uppercase text-accent",
        className
      )}
    >
      {children}
    </motion.p>
  );
}
