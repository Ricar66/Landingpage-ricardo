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

          {/* Visual Preview Area — window frame mock */}
          <div className="relative overflow-hidden">
            {/* Window frame header (macOS style) */}
            <div className="window-frame border-b border-white/[0.04] bg-white/[0.02]">
              <div className="window-frame-dot" style={{ backgroundColor: "#FF5F56" }} />
              <div className="window-frame-dot" style={{ backgroundColor: "#FFBD2E" }} />
              <div className="window-frame-dot" style={{ backgroundColor: "#27C93F" }} />
              <span className="ml-3 text-[10px] font-mono text-text-muted/40 truncate">
                {project.demoUrl || project.title.toLowerCase() + ".app"}
              </span>
            </div>

            {/* Gradient visual placeholder */}
            <div
              className={cn(
                "relative overflow-hidden transition-transform duration-700 group-hover:scale-105",
                featured ? "h-48 md:h-56" : "h-32"
              )}
            >
              {/* Featured card: video background */}
              {featured ? (
                <>
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                  >
                    <source src="/images/Design sem nome.mp4" type="video/mp4" />
                  </video>
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${accent}30 0%, transparent 50%, ${accent}10 100%)`,
                    }}
                  />
                </>
              ) : (
                <>
                  {/* Colorful gradient based on project accent */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${accent}20 0%, ${accent}05 40%, rgba(0,0,0,0.8) 100%)`,
                    }}
                  />
                  {/* Dot grid overlay */}
                  <div className="absolute inset-0 dot-grid opacity-30" />
                </>
              )}

              {/* Bottom fade to card bg */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

              {/* Decorative code lines */}
              <div className="absolute inset-0 p-4 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <div className="h-2 rounded-full bg-white/20" style={{ width: "30%" }} />
                    <div className="h-2 rounded-full" style={{ width: "20%", backgroundColor: `${accent}40` }} />
                  </div>
                  <div className="flex gap-2 pl-4">
                    <div className="h-2 rounded-full bg-white/10" style={{ width: "40%" }} />
                    <div className="h-2 rounded-full bg-white/15" style={{ width: "15%" }} />
                  </div>
                  <div className="flex gap-2 pl-4">
                    <div className="h-2 rounded-full" style={{ width: "25%", backgroundColor: `${accent}25` }} />
                    <div className="h-2 rounded-full bg-white/10" style={{ width: "35%" }} />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-2 rounded-full bg-white/15" style={{ width: "20%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={cn("relative p-6 md:p-8 flex flex-col", featured ? "flex-1 justify-between" : "flex-1")}>
            <div>
              {/* Number + Featured label */}
              <div className="flex items-center justify-between mb-4">
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
                  "text-text-secondary/80 leading-relaxed mb-5",
                  featured ? "text-base" : "text-sm"
                )}
              >
                {featured ? project.longDescription : project.shortDescription}
              </p>

              {/* Highlights (featured only) */}
              {featured && project.highlights.length > 0 && (
                <ul className="space-y-2.5 mb-5">
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
              <div className="h-px bg-white/[0.04] mb-4" />

              <div className="flex flex-wrap gap-2 mb-4">
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
