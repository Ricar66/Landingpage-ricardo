"use client";

import { cn } from "@/lib/utils";

interface BlobBackgroundProps {
  className?: string;
}

export default function BlobBackground({ className }: BlobBackgroundProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
    >
      {/* Primary blob */}
      <div
        className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] opacity-20"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          animation: "blob-morph 8s ease-in-out infinite",
          filter: "blur(60px)",
        }}
      />
      {/* Secondary blob */}
      <div
        className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] opacity-15"
        style={{
          background:
            "radial-gradient(circle, var(--accent-hover) 0%, transparent 70%)",
          animation: "blob-morph 10s ease-in-out infinite reverse",
          filter: "blur(80px)",
        }}
      />
      {/* Subtle noise grain */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
