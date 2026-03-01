"use client";

import { motion } from "framer-motion";
import { useTiltEffect } from "@/hooks/useTiltEffect";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

export default function TiltCard({
  children,
  className,
  maxTilt = 6,
}: TiltCardProps) {
  const { ref, rotateX, rotateY, perspective } =
    useTiltEffect<HTMLDivElement>({ maxTilt });

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        perspective,
        transformStyle: "preserve-3d",
      }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
