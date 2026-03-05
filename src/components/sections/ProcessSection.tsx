"use client";

import { useTranslation } from "@/i18n/LanguageProvider";
import SectionEyebrow from "@/components/atoms/SectionEyebrow";
import SectionHeading from "@/components/atoms/SectionHeading";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Search, Pencil, Code, Rocket } from "lucide-react";

const steps = [
  { icon: Search, accent: "#3B82F6", stepKey: "discovery" as const },
  { icon: Pencil, accent: "#8B5CF6", stepKey: "design" as const },
  { icon: Code, accent: "#10B981", stepKey: "develop" as const },
  { icon: Rocket, accent: "#F59E0B", stepKey: "deploy" as const },
];

export default function ProcessSection() {
  const { t } = useTranslation();

  return (
    <section className="relative py-[var(--section-padding)] max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
      <div className="section-divider mb-12" />

      <div className="mb-10 text-center">
        <SectionEyebrow>{t.process.eyebrow}</SectionEyebrow>
        <SectionHeading className="mt-4">{t.process.heading}</SectionHeading>
        <p className="text-[var(--text-body)] text-text-secondary mt-4 max-w-2xl mx-auto">
          {t.process.description}
        </p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative"
      >
        {/* Connection line (desktop only) */}
        <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px">
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(90deg, #3B82F630, #8B5CF630, #10B98130, #F59E0B30)",
            }}
          />
        </div>

        {steps.map((step, i) => {
          const Icon = step.icon;
          const data = t.process.steps[step.stepKey];
          return (
            <motion.div
              key={step.stepKey}
              variants={fadeInUp}
              className="group relative text-center"
            >
              {/* Step number */}
              <div className="text-xs font-mono text-text-muted mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Icon circle */}
              <motion.div
                className="relative mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-5 border transition-all duration-500"
                style={{
                  backgroundColor: `${step.accent}10`,
                  borderColor: `${step.accent}20`,
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: `0 0 30px ${step.accent}25`,
                  borderColor: `${step.accent}50`,
                }}
              >
                <Icon size={24} style={{ color: step.accent }} />
              </motion.div>

              {/* Title */}
              <h3 className="text-lg font-display font-bold text-text-primary mb-2">
                {data.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-text-muted leading-relaxed">
                {data.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
