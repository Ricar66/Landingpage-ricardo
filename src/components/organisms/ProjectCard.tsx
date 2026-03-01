"use client";

import { useTranslation } from "@/i18n/LanguageProvider";
import type { Project } from "@/types";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import TiltCard from "@/components/molecules/TiltCard";
import GlassTag from "@/components/atoms/GlassTag";
import { Github, Star, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export default function ProjectCard({
  project,
  index,
  featured = false,
}: ProjectCardProps) {
  const { t } = useTranslation();
  const accent = project.accent;

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      <TiltCard maxTilt={featured ? 3 : 5}>
        <div
          className={cn(
            "group relative h-full rounded-2xl overflow-hidden",
            "transition-all duration-500 ease-[var(--ease-smooth)]",
            featured ? "min-h-[480px] md:min-h-[560px]" : "min-h-[340px]"
          )}
          style={{
            background: "linear-gradient(135deg, #111111 0%, #0a0a0a 100%)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* Top gradient accent bar */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-500"
            style={{
              background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
              opacity: 0.4,
            }}
          />
          <div
            className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(90deg, transparent 10%, ${accent} 50%, transparent 90%)`,
            }}
          />

          {/* Hover glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at top, ${accent}08 0%, transparent 60%)`,
            }}
          />

          {/* Corner glow */}
          <div
            className="absolute -top-20 -right-20 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${accent}15 0%, transparent 70%)`,
            }}
          />

          {/* Content */}
          <div className={cn("relative p-6 md:p-8 flex flex-col h-full", featured && "justify-between")}>
            <div>
              {/* Number + Featured label */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs font-mono font-bold tracking-wider"
                    style={{ color: accent }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {project.featured && (
                    <div
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border"
                      style={{
                        borderColor: `${accent}30`,
                        backgroundColor: `${accent}10`,
                      }}
                    >
                      <Star size={10} style={{ color: accent, fill: accent }} />
                      <span
                        className="text-[10px] font-mono uppercase tracking-wider"
                        style={{ color: accent }}
                      >
                        {t.projects.featured}
                      </span>
                    </div>
                  )}
                </div>
                <span className="text-xs font-mono text-text-muted">{project.year}</span>
              </div>

              {/* Title */}
              <h3
                className={cn(
                  "font-display font-bold text-text-primary mb-3 group-hover:text-white transition-colors",
                  featured ? "text-2xl md:text-3xl" : "text-xl"
                )}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className={cn(
                  "text-text-secondary/80 leading-relaxed mb-6",
                  featured ? "text-base" : "text-sm"
                )}
              >
                {featured ? project.longDescription : project.shortDescription}
              </p>

              {/* Highlights (featured only) */}
              {featured && project.highlights.length > 0 && (
                <ul className="space-y-2.5 mb-6">
                  {project.highlights.slice(0, 4).map((h, i) => (
                    <li key={i} className="text-sm text-text-muted flex items-start gap-3">
                      <span
                        className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: accent }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            <div>
              <div className="h-px bg-white/[0.04] mb-5" />

              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies
                  .slice(0, featured ? 8 : 5)
                  .map((tech) => (
                    <GlassTag key={tech}>{tech}</GlassTag>
                  ))}
              </div>

              <div className="flex items-center gap-5">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:brightness-125"
                    style={{ color: accent }}
                  >
                    <ArrowUpRight size={14} />
                    {t.projects.viewProject}
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-text-secondary transition-colors duration-200"
                  >
                    <Github size={14} />
                    {t.projects.viewCode}
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Bottom border glow */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-60 transition-opacity duration-500"
            style={{
              background: `linear-gradient(90deg, transparent, ${accent}50, transparent)`,
            }}
          />
        </div>
      </TiltCard>
    </motion.div>
  );
}
