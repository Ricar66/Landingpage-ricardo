"use client";

import React from "react";
import { useTranslation } from "@/i18n/LanguageProvider";
import { skills, skillCategories } from "@/data/skills";
import type { SkillCategory } from "@/types";
import SectionEyebrow from "@/components/atoms/SectionEyebrow";
import SectionHeading from "@/components/atoms/SectionHeading";
import RevealOnScroll from "@/components/molecules/RevealOnScroll";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

/* ── Constants ─────────────────────────────────────────── */

const categoryAccents: Record<string, string> = {
  frontend: "#3B82F6",
  backend: "#10B981",
  desktop: "#8B5CF6",
  database: "#F59E0B",
  infra: "#F43F5E",
};

const FLOAT_ANIMS = [
  "float-drift-0",
  "float-drift-1",
  "float-drift-2",
  "float-drift-3",
  "float-drift-4",
  "float-drift-5",
];

const mobileOrder: SkillCategory[] = [
  "frontend",
  "backend",
  "desktop",
  "database",
  "infra",
];

/* ── Deterministic position for SSR safety ────────────── */

function getPosition(index: number, total: number) {
  const cols = 6;
  const rows = Math.ceil(total / cols);
  const col = index % cols;
  const row = Math.floor(index / cols);

  const xStep = 100 / (cols + 1);
  const yStep = 100 / (rows + 1);
  const baseX = xStep * (col + 1);
  const baseY = yStep * (row + 1);

  const jX = ((index * 17 + 5) % 13 - 6) * 0.6;
  const jY = ((index * 23 + 11) % 13 - 6) * 0.6;

  return {
    left: Math.round(Math.min(92, Math.max(8, baseX + jX)) * 100) / 100,
    top: Math.round(Math.min(90, Math.max(10, baseY + jY)) * 100) / 100,
  };
}

/* ── Main component ───────────────────────────────────── */

export default function StackSection() {
  const { t } = useTranslation();

  return (
    <section
      id="stack"
      className="relative py-[var(--section-padding)] max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] overflow-hidden"
    >
      {/* Section divider */}
      <div className="section-divider mb-12" />

      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 65%)",
        }}
      />

      {/* Header */}
      <div className="mb-10 relative">
        <SectionEyebrow>{t.stack.eyebrow}</SectionEyebrow>
        <SectionHeading className="mt-4">{t.stack.heading}</SectionHeading>
        <RevealOnScroll delay={0.2}>
          <p className="text-text-secondary mt-4 max-w-xl text-[var(--text-body)]">
            {t.stack.description}
          </p>
        </RevealOnScroll>
      </div>

      {/* Desktop: Floating Field */}
      <div className="hidden lg:block">
        <FloatingField />
      </div>

      {/* Mobile: Grid */}
      <div className="lg:hidden">
        <MobileGrid t={t} />
      </div>

      {/* Category legend */}
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {Object.entries(categoryAccents).map(([cat, color]) => {
          const label =
            t.stack.categories[cat as keyof typeof t.stack.categories] || cat;
          return (
            <div
              key={cat}
              className="flex items-center gap-2 text-xs font-mono text-text-muted"
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: color,
                  boxShadow: `0 0 6px ${color}40`,
                }}
              />
              {label}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ── Floating Field (desktop) ─────────────────────────── */

function FloatingField() {
  const total = skills.length;

  return (
    <RevealOnScroll>
      <div className="relative w-full" style={{ height: 460 }}>
        {/* Subtle background grid */}
        <div className="absolute inset-0 dot-grid opacity-20 rounded-2xl" />

        {skills.map((skill, i) => {
          const pos = getPosition(i, total);
          const accent = categoryAccents[skill.category] || "#666";
          const animName = FLOAT_ANIMS[i % FLOAT_ANIMS.length];
          const duration = 14 + (i % 7) * 2.5;
          const delay = -(i * 1.7);

          return (
            <div
              key={skill.name}
              className="float-node absolute"
              style={
                {
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                  animation: `${animName} ${duration}s ease-in-out infinite ${delay}s`,
                  "--node-accent": accent,
                  "--node-glow": `${accent}35`,
                  "--node-bg": `${accent}12`,
                } as React.CSSProperties
              }
            >
              <div className="float-node-inner flex flex-col items-center gap-1.5">
                <div className="float-node-icon w-12 h-12 rounded-xl flex items-center justify-center border bg-[rgba(17,17,17,0.7)] border-white/[0.06]">
                  <div className="float-node-iconcolor w-6 h-6 text-text-muted">
                    <SkillIcon icon={skill.icon} size={24} />
                  </div>
                </div>
                <span className="float-node-label text-[10px] font-mono text-text-muted/60 whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </RevealOnScroll>
  );
}

/* ── Mobile Grid ───────────────────────────────────────── */

function MobileGrid({
  t,
}: {
  t: ReturnType<typeof useTranslation>["t"];
}) {
  const grouped = mobileOrder.reduce(
    (acc, cat) => {
      acc[cat] = skills.filter((s) => s.category === cat);
      return acc;
    },
    {} as Record<SkillCategory, typeof skills>
  );

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-10"
    >
      {mobileOrder.map((cat) => {
        const catSkills = grouped[cat];
        if (!catSkills || catSkills.length === 0) return null;
        const accent = categoryAccents[cat] || "#666";
        const catLabel =
          t.stack.categories[cat as keyof typeof t.stack.categories] ||
          skillCategories[cat];

        return (
          <motion.div key={cat} variants={fadeInUp}>
            <div className="flex items-center gap-4 mb-5">
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: accent,
                  boxShadow: `0 0 8px ${accent}60`,
                }}
              />
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-text-secondary">
                {catLabel}
              </h3>
              <div
                className="flex-1 h-px"
                style={{
                  background: `linear-gradient(90deg, ${accent}30, transparent)`,
                }}
              />
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {catSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-white/[0.04] bg-[#0a0a0a] hover:border-white/[0.1] transition-all duration-300"
                >
                  <div className="w-7 h-7 text-text-muted group-hover:text-text-primary transition-colors">
                    <SkillIcon icon={skill.icon} size={24} />
                  </div>
                  <span className="text-[10px] font-mono text-text-muted group-hover:text-text-primary text-center leading-tight transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

/* ── Skill Icon ────────────────────────────────────────── */

function SkillIcon({ icon, size = 28 }: { icon: string; size?: number }) {
  const icons: Record<string, React.ReactNode> = {
    react: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </svg>
    ),
    nextjs: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 19.5h20L12 2zm0 4l6.5 11.5h-13L12 6z" />
      </svg>
    ),
    typescript: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="3" opacity="0.15" />
        <text x="12" y="16.5" textAnchor="middle" fontSize="11" fontWeight="bold" fontFamily="monospace">TS</text>
      </svg>
    ),
    javascript: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="3" opacity="0.15" />
        <text x="12" y="16.5" textAnchor="middle" fontSize="11" fontWeight="bold" fontFamily="monospace">JS</text>
      </svg>
    ),
    html: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 7 8 12 4 17" />
        <line x1="12" y1="17" x2="20" y2="17" />
      </svg>
    ),
    tailwind: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C13.33 10.79 14.44 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.67 7.21 14.56 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.33 16.79 9.44 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.67 13.21 9.56 12 7 12z" />
      </svg>
    ),
    framer: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 2h16v7H12l8 7H4v-7h8L4 2zm0 14h8v8l-8-8z" />
      </svg>
    ),
    nodejs: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
        <path d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2z" />
        <text x="12" y="14.5" textAnchor="middle" fontSize="7" fontWeight="bold" fontFamily="monospace" fill="currentColor" stroke="none">N</text>
      </svg>
    ),
    express: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="3" opacity="0.15" />
        <text x="12" y="16.5" textAnchor="middle" fontSize="10" fontWeight="bold" fontFamily="monospace">Ex</text>
      </svg>
    ),
    csharp: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="3" opacity="0.15" />
        <text x="12" y="16.5" textAnchor="middle" fontSize="10" fontWeight="bold" fontFamily="monospace">C#</text>
      </svg>
    ),
    dotnet: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="3" opacity="0.15" />
        <text x="12" y="16" textAnchor="middle" fontSize="8" fontWeight="bold" fontFamily="monospace">.NET</text>
      </svg>
    ),
    prisma: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" opacity="0.9">
        <path d="M12 2l10 10-10 10L2 12 12 2z" />
      </svg>
    ),
    php: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <ellipse cx="12" cy="12" rx="10" ry="6" opacity="0.15" />
        <text x="12" y="14.5" textAnchor="middle" fontSize="8" fontWeight="bold" fontFamily="monospace">PHP</text>
      </svg>
    ),
    tauri: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="9" r="4" />
        <circle cx="15" cy="15" r="4" />
        <path d="M13.5 7.5l-3 9" strokeDasharray="2 2" />
      </svg>
    ),
    wpf: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    rust: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    mysql: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
        <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
      </svg>
    ),
    sqlite: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v12c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
      </svg>
    ),
    sql: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="3" opacity="0.15" />
        <text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="bold" fontFamily="monospace">SQL</text>
      </svg>
    ),
    linux: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4c-2 0-4 2-4 5v3c0 2-2 3-2 5s2 3 6 3 6-1 6-3-2-3-2-5v-3c0-3-2-5-4-5z" />
        <circle cx="10" cy="9" r="0.5" fill="currentColor" />
        <circle cx="14" cy="9" r="0.5" fill="currentColor" />
        <path d="M10 12h4" />
      </svg>
    ),
    docker: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="3" height="3" />
        <rect x="8" y="8" width="3" height="3" />
        <rect x="12" y="8" width="3" height="3" />
        <rect x="8" y="4" width="3" height="3" />
        <rect x="12" y="4" width="3" height="3" />
        <path d="M2 14c0 0 2.5-1 5-1 1 0 3 .5 5 .5s4-.5 6-.5c2 0 4 1 4 1" />
        <path d="M2 14c0 3 3 6 10 6s10-3 10-6" />
      </svg>
    ),
    azure: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
        <path d="M6.5 19a4.5 4.5 0 01-.42-8.98 7 7 0 0113.84 0A4.5 4.5 0 0119.5 19h-13z" />
      </svg>
    ),
    ad: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z" />
        <circle cx="12" cy="11" r="2" />
        <line x1="12" y1="13" x2="12" y2="16" />
      </svg>
    ),
    git: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="18" r="2" />
        <circle cx="12" cy="6" r="2" />
        <circle cx="18" cy="12" r="2" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <path d="M16 12h-2c-1.1 0-2-.9-2-2V8" />
      </svg>
    ),
  };

  return (
    (icons[icon] as React.ReactElement) || (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        opacity="0.5"
      >
        <circle cx="12" cy="12" r="8" />
      </svg>
    )
  );
}
