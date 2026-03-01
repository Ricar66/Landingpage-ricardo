"use client";

import { useTypingEffect } from "@/hooks/useTypingEffect";
import { cn } from "@/lib/utils";

interface TypingTextProps {
  words: string[];
  className?: string;
}

export default function TypingText({ words, className }: TypingTextProps) {
  const { text } = useTypingEffect({ words });

  return (
    <span className={cn("inline-flex items-center", className)}>
      <span>{text}</span>
      <span
        className="inline-block w-[2px] h-[1.1em] bg-accent ml-1"
        style={{ animation: "blink 0.8s step-end infinite" }}
      />
    </span>
  );
}
