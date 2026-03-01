"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  target: number;
  label: string;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({
  target,
  label,
  prefix = "",
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const { ref, displayValue } = useCountUp({ target, prefix, suffix });

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div className="text-4xl md:text-5xl font-bold font-display text-accent">
        {displayValue}
      </div>
      <div className="mt-2 text-sm font-mono text-text-muted uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
