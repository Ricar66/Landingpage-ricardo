"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  download?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variants = {
  primary:
    "bg-accent text-white border-accent hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
  secondary:
    "bg-transparent text-text-primary border-border-hover hover:bg-white/5 hover:border-white/30",
  ghost:
    "bg-transparent text-text-secondary border-transparent hover:text-text-primary",
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  download,
  type = "button",
  disabled,
}: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center gap-2 px-6 py-3 rounded-full border text-sm font-semibold font-display",
    "transition-all duration-300 ease-[var(--ease-smooth)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary",
    variants[variant],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        download={download}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={baseClasses}
      disabled={disabled}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
