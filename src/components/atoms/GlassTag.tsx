"use client";

import { cn } from "@/lib/utils";

interface GlassTagProps {
  children: string;
  className?: string;
}

export default function GlassTag({ children, className }: GlassTagProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-xs font-mono font-medium",
        "glass rounded-full text-text-secondary",
        "transition-colors duration-200 hover:text-text-primary",
        className
      )}
    >
      {children}
    </span>
  );
}
