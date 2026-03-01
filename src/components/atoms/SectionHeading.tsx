"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export default function SectionHeading({
  children,
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Tag
        className={cn(
          "text-[var(--text-heading)] font-display font-bold leading-tight text-text-primary",
          className
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
