"use client";

import { useTranslation } from "@/i18n/LanguageProvider";
import SectionEyebrow from "@/components/atoms/SectionEyebrow";
import SectionHeading from "@/components/atoms/SectionHeading";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Quote } from "lucide-react";

const testimonials = [
  {
    nameKey: "t1" as const,
    avatar: "RM",
    accent: "#3B82F6",
  },
  {
    nameKey: "t2" as const,
    avatar: "AL",
    accent: "#8B5CF6",
  },
  {
    nameKey: "t3" as const,
    avatar: "CS",
    accent: "#10B981",
  },
];

export default function TestimonialsSection() {
  const { t } = useTranslation();

  return (
    <section className="relative py-[var(--section-padding)] max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
      <div className="section-divider mb-12" />

      <div className="mb-10">
        <SectionEyebrow>{t.testimonials.eyebrow}</SectionEyebrow>
        <SectionHeading className="mt-4">
          {t.testimonials.heading}
        </SectionHeading>
        <p className="text-[var(--text-body)] text-text-secondary mt-4 max-w-2xl">
          {t.testimonials.description}
        </p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {testimonials.map((item) => {
          const data = t.testimonials.items[item.nameKey];
          return (
            <motion.div
              key={item.nameKey}
              variants={fadeInUp}
              className="group relative rounded-2xl p-6 md:p-8 border border-white/[0.06] bg-[linear-gradient(135deg,#111111_0%,#0a0a0a_100%)] transition-all duration-500 hover:border-white/[0.12]"
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent 10%, ${item.accent} 50%, transparent 90%)`,
                }}
              />

              {/* Quote icon */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                style={{ backgroundColor: `${item.accent}15` }}
              >
                <Quote size={18} style={{ color: item.accent }} />
              </div>

              {/* Quote text */}
              <p className="text-text-secondary text-sm leading-relaxed mb-6 italic">
                &ldquo;{data.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: `${item.accent}30` }}
                >
                  {item.avatar}
                </div>
                <div>
                  <p className="text-sm font-display font-semibold text-text-primary">
                    {data.name}
                  </p>
                  <p className="text-xs text-text-muted">{data.role}</p>
                </div>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top, ${item.accent}08 0%, transparent 60%)`,
                }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
