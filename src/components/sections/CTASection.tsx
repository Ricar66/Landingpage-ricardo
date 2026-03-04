"use client";

import { useTranslation } from "@/i18n/LanguageProvider";
import MagneticWrapper from "@/components/molecules/MagneticWrapper";
import Button from "@/components/atoms/Button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(139,92,246,0.06) 50%, rgba(6,182,212,0.04) 100%)",
          }}
        />
        {/* Animated mesh */}
        <motion.div
          className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
          animate={{ x: [0, -80, 0], y: [0, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        {/* Top and bottom borders */}
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="absolute bottom-0 left-0 right-0 section-divider" />
      </div>

      {/* Content */}
      <div className="relative max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-sm font-mono text-accent uppercase tracking-widest mb-4">
            {t.cta?.eyebrow || "Let's work together"}
          </p>
          <h2 className="text-[var(--text-heading)] font-display font-black text-text-primary mb-6 max-w-2xl mx-auto leading-tight">
            {t.cta?.heading || "Have a project in mind?"}
          </h2>
          <p className="text-text-secondary text-[var(--text-body)] max-w-lg mx-auto mb-10">
            {t.cta?.description || "Let's build something amazing together."}
          </p>
          <MagneticWrapper>
            <Button href="#contact">
              {t.cta?.button || "Get in touch"}
              <ArrowRight size={16} />
            </Button>
          </MagneticWrapper>
        </motion.div>
      </div>
    </section>
  );
}
