"use client";

import { useTranslation } from "@/i18n/LanguageProvider";
import { experience } from "@/data/experience";
import SectionEyebrow from "@/components/atoms/SectionEyebrow";
import SectionHeading from "@/components/atoms/SectionHeading";
import RevealOnScroll from "@/components/molecules/RevealOnScroll";
import AnimatedCounter from "@/components/molecules/AnimatedCounter";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Briefcase, GraduationCap, Code, Globe, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { icon: Globe, labelKey: "webDev" as const, accent: "#3B82F6" },
  { icon: Monitor, labelKey: "desktopDev" as const, accent: "#8B5CF6" },
  { icon: Code, labelKey: "techSupport" as const, accent: "#10B981" },
];

export default function AboutSection() {
  const { t } = useTranslation();

  const stats = [
    { target: 8, suffix: "+", label: t.about.stats.projects },
    { target: 15, suffix: "+", label: t.about.stats.technologies },
    { target: 3, suffix: "+", label: t.about.stats.yearsCoding },
    { target: 1, suffix: "", label: t.about.stats.companyFounded },
  ];

  return (
    <section
      id="about"
      className="relative py-[var(--section-padding)] max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]"
    >
      {/* Section divider at top */}
      <div className="section-divider mb-20" />

      {/* Header */}
      <div className="mb-16">
        <SectionEyebrow>{t.about.eyebrow}</SectionEyebrow>
        <SectionHeading className="mt-4">{t.about.heading}</SectionHeading>
      </div>

      {/* Main layout: Services left | About me center+right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
        {/* Services column with vertical line (inspired by Jensen Omega) */}
        <motion.div
          className="lg:col-span-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative pl-6 border-l border-border-subtle">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.labelKey}
                  variants={fadeInUp}
                  className="relative mb-8 last:mb-0"
                >
                  {/* Dot on the line */}
                  <div
                    className="absolute -left-[25px] top-1 w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: service.accent,
                      boxShadow: `0 0 8px ${service.accent}50`,
                    }}
                  />
                  <div className="flex items-center gap-3 mb-1">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${service.accent}15` }}
                    >
                      <Icon size={18} style={{ color: service.accent }} />
                    </div>
                    <span className="text-sm font-display font-semibold text-text-primary">
                      {t.about.services[service.labelKey]}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* About text + photo */}
        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Bio text */}
          <div className="md:col-span-3">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5"
            >
              {(t.about.bio as readonly string[]).map((paragraph, i) => (
                <motion.p
                  key={i}
                  variants={fadeInUp}
                  className="text-[var(--text-body)] text-text-secondary leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </div>

          {/* Photo */}
          <RevealOnScroll className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl bg-bg-elevated border border-border-subtle overflow-hidden">
                <Image
                  src="/images/avatar.webp"
                  alt="Ricardo De Marco Moretti"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative accent border */}
              <div className="absolute -bottom-3 -right-3 w-56 h-56 md:w-64 md:h-64 rounded-2xl border border-accent/20 -z-10" />
              {/* Glow behind */}
              <div
                className="absolute -inset-4 -z-20 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
                }}
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Stats - with accent-colored numbers */}
      <RevealOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-border-subtle relative">
          {/* Subtle glow behind stats */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(180deg, transparent, rgba(59,130,246,0.02), transparent)",
            }}
          />
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </RevealOnScroll>

      {/* Timeline - Alternating Layout */}
      <div className="mt-20">
        <RevealOnScroll>
          <h3 className="text-[var(--text-subheading)] font-display font-bold text-text-primary mb-14 text-center md:text-left">
            {t.about.timelineTitle}
          </h3>
        </RevealOnScroll>

        {/* ── Mobile: simple left-aligned timeline ── */}
        <div className="md:hidden relative">
          <div
            className="absolute left-4 top-0 bottom-0 w-px"
            style={{
              background: "linear-gradient(to bottom, var(--accent), var(--border-subtle) 50%, transparent)",
            }}
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {experience.map((entry) => (
              <motion.div
                key={entry.id}
                variants={fadeInUp}
                className="relative pl-10"
              >
                <div
                  className={cn(
                    "absolute top-2 left-[0.6rem] w-2.5 h-2.5 rounded-full border-2 bg-bg-primary",
                    entry.type === "work" ? "border-accent" : "border-text-muted"
                  )}
                  style={
                    entry.type === "work"
                      ? { boxShadow: "0 0 8px rgba(59,130,246,0.4)" }
                      : undefined
                  }
                />
                <TimelineCard entry={entry} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Desktop: alternating left/right timeline ── */}
        <div className="hidden md:block relative">
          {/* Central line */}
          <div
            className="absolute left-1/2 -translate-x-[0.5px] top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, var(--accent) 0%, var(--accent) 20%, var(--border-subtle) 50%, var(--border-subtle) 80%, transparent 100%)",
            }}
          />

          <div className="space-y-12">
            {experience.map((entry, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="grid grid-cols-[1fr_auto_1fr] gap-6 lg:gap-10 items-start"
                >
                  {/* Left column */}
                  {isLeft ? (
                    <div className="flex justify-end">
                      <TimelineCard entry={entry} align="right" />
                    </div>
                  ) : (
                    <div className="flex justify-end items-start pt-1">
                      <span className="text-xs font-mono text-text-muted">
                        {entry.period}
                      </span>
                    </div>
                  )}

                  {/* Center dot */}
                  <div className="flex flex-col items-center pt-1">
                    <div className="relative">
                      {/* Outer pulse ring for work entries */}
                      {entry.type === "work" && (
                        <div
                          className="absolute -inset-2 rounded-full border border-accent/20"
                          style={{
                            animation: "pulse-glow 3s ease-in-out infinite",
                            animationDelay: `${i * 0.5}s`,
                          }}
                        />
                      )}
                      <div
                        className={cn(
                          "w-4 h-4 rounded-full border-[2.5px] bg-bg-primary relative z-10",
                          entry.type === "work"
                            ? "border-accent"
                            : "border-text-muted/50"
                        )}
                        style={
                          entry.type === "work"
                            ? { boxShadow: "0 0 12px rgba(59,130,246,0.5)" }
                            : undefined
                        }
                      />
                    </div>
                  </div>

                  {/* Right column */}
                  {!isLeft ? (
                    <div className="flex justify-start">
                      <TimelineCard entry={entry} align="left" />
                    </div>
                  ) : (
                    <div className="flex items-start pt-1">
                      <span className="text-xs font-mono text-text-muted">
                        {entry.period}
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Timeline Card ─────────────────────────────────────── */

function TimelineCard({
  entry,
  align = "left",
}: {
  entry: (typeof experience)[number];
  align?: "left" | "right";
}) {
  const isWork = entry.type === "work";
  const accent = isWork ? "#3B82F6" : "#8B5CF6";

  return (
    <div
      className={cn(
        "group relative max-w-sm w-full rounded-xl p-5 border transition-all duration-300",
        "bg-bg-card/40 hover:bg-bg-card/70",
        align === "right" ? "text-right" : "text-left"
      )}
      style={{
        borderColor: "rgba(255,255,255,0.05)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${accent}30`;
        e.currentTarget.style.boxShadow = `0 4px 24px ${accent}10`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-4 right-4 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
        }}
      />

      <div
        className={cn(
          "flex items-center gap-2 mb-2",
          align === "right" && "justify-end"
        )}
      >
        {isWork ? (
          <Briefcase size={14} style={{ color: accent }} />
        ) : (
          <GraduationCap size={14} style={{ color: accent }} />
        )}
        <span className="text-xs font-mono text-text-muted md:hidden">
          {entry.period}
        </span>
      </div>

      <h4 className="text-base font-display font-bold text-text-primary mb-0.5">
        {entry.title}
      </h4>
      <p className="text-sm font-medium mb-2" style={{ color: accent }}>
        {entry.organization}
      </p>
      <p className="text-sm text-text-muted leading-relaxed">
        {entry.description}
      </p>
    </div>
  );
}
