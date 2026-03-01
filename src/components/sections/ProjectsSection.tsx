"use client";

import { useTranslation } from "@/i18n/LanguageProvider";
import { projects } from "@/data/projects";
import SectionEyebrow from "@/components/atoms/SectionEyebrow";
import SectionHeading from "@/components/atoms/SectionHeading";
import ProjectCard from "@/components/organisms/ProjectCard";
import RevealOnScroll from "@/components/molecules/RevealOnScroll";

export default function ProjectsSection() {
  const { t } = useTranslation();

  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative py-[var(--section-padding)] max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]"
    >
      {/* Section divider */}
      <div className="section-divider mb-20" />

      {/* Background dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Header */}
      <div className="relative mb-16">
        <SectionEyebrow>{t.projects.eyebrow}</SectionEyebrow>
        <SectionHeading className="mt-4">{t.projects.heading}</SectionHeading>
        <RevealOnScroll delay={0.2}>
          <p className="text-text-secondary mt-4 max-w-xl text-[var(--text-body)]">
            {t.projects.description}
          </p>
        </RevealOnScroll>
      </div>

      {/* Bento Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Featured card - spans 2 cols and 2 rows */}
        {featured && (
          <div className="md:col-span-2 md:row-span-2">
            <ProjectCard project={featured} index={0} featured />
          </div>
        )}

        {/* Other cards */}
        {others.map((project, i) => (
          <div key={project.id} className="h-full">
            <ProjectCard project={project} index={i + 1} />
          </div>
        ))}
      </div>
    </section>
  );
}
