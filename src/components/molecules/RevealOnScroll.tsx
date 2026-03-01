"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeInUp } from "@/lib/animations";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
}

export default function RevealOnScroll({
  children,
  className,
  variants = fadeInUp,
  delay = 0,
}: RevealOnScrollProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
