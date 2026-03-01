"use client";

import { motion } from "framer-motion";
import { useMagneticEffect } from "@/hooks/useMagneticEffect";
import type { ReactNode } from "react";

interface MagneticWrapperProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticWrapper({
  children,
  className,
  strength = 0.15,
}: MagneticWrapperProps) {
  const { ref, x, y, scale } = useMagneticEffect<HTMLDivElement>({ strength });

  return (
    <motion.div ref={ref} style={{ x, y, scale }} className={className}>
      {children}
    </motion.div>
  );
}
