"use client";

import { cn } from "@/lib/utils";

interface MarqueeStripProps {
  items: string[];
  className?: string;
  speed?: number;
  separator?: string;
}

export default function MarqueeStrip({
  items,
  className,
  speed = 35,
  separator = " — ",
}: MarqueeStripProps) {
  const content = items.join(separator) + separator;

  return (
    <div
      className={cn(
        "overflow-hidden whitespace-nowrap select-none",
        className
      )}
    >
      <div
        className="inline-flex"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
          willChange: "transform",
        }}
      >
        <span className="text-[var(--text-heading)] font-display font-bold uppercase tracking-wide text-text-muted/20">
          {content}
        </span>
        <span className="text-[var(--text-heading)] font-display font-bold uppercase tracking-wide text-text-muted/20">
          {content}
        </span>
      </div>
    </div>
  );
}
