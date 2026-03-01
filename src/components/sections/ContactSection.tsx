"use client";

import { useTranslation } from "@/i18n/LanguageProvider";
import { profile } from "@/data/profile";
import SectionEyebrow from "@/components/atoms/SectionEyebrow";
import SectionHeading from "@/components/atoms/SectionHeading";
import RevealOnScroll from "@/components/molecules/RevealOnScroll";
import MagneticWrapper from "@/components/molecules/MagneticWrapper";
import Button from "@/components/atoms/Button";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Mail, MapPin, Send, Github, Linkedin, Globe } from "lucide-react";
import { useState, type FormEvent } from "react";

const iconMap: Record<string, typeof Mail> = {
  github: Github,
  linkedin: Linkedin,
  globe: Globe,
};

export default function ContactSection() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/placeholder", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-[var(--section-padding)] max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]"
    >
      {/* Section divider */}
      <div className="section-divider mb-12" />

      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Header */}
      <div className="mb-10">
        <SectionEyebrow>{t.contact.eyebrow}</SectionEyebrow>
        <SectionHeading className="mt-4">{t.contact.heading}</SectionHeading>
        <RevealOnScroll delay={0.2}>
          <p className="text-text-secondary mt-4 max-w-xl text-[var(--text-body)]">
            {t.contact.description}
          </p>
        </RevealOnScroll>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Info side */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Email */}
          <motion.div variants={fadeInUp} className="flex items-start gap-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border"
              style={{
                backgroundColor: "rgba(59,130,246,0.08)",
                borderColor: "rgba(59,130,246,0.15)",
              }}
            >
              <Mail size={18} className="text-accent" />
            </div>
            <div>
              <p className="text-sm font-mono text-text-muted uppercase tracking-wider mb-1">
                {t.contact.info.email}
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="text-text-primary hover:text-accent transition-colors font-medium"
              >
                {profile.email}
              </a>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div variants={fadeInUp} className="flex items-start gap-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border"
              style={{
                backgroundColor: "rgba(16,185,129,0.08)",
                borderColor: "rgba(16,185,129,0.15)",
              }}
            >
              <MapPin size={18} className="text-[#10B981]" />
            </div>
            <div>
              <p className="text-sm font-mono text-text-muted uppercase tracking-wider mb-1">
                {t.contact.info.location}
              </p>
              <p className="text-text-primary font-medium">
                {profile.location}
              </p>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div variants={fadeInUp}>
            <p className="text-sm font-mono text-text-muted uppercase tracking-wider mb-4">
              {t.contact.info.social}
            </p>
            <div className="flex gap-3">
              {profile.socialLinks.map((link) => {
                const Icon = iconMap[link.icon] || Globe;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="w-11 h-11 rounded-xl bg-bg-card border border-border-subtle flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Form side */}
        <RevealOnScroll>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-6 md:p-8 rounded-2xl border border-border-subtle bg-bg-card/30"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-mono text-text-muted uppercase tracking-wider mb-2"
              >
                {t.contact.form.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full bg-bg-primary/50 border border-border-subtle rounded-xl px-4 py-3.5 text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-accent/50 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08),0_0_20px_rgba(59,130,246,0.05)] transition-all duration-300 font-display"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-mono text-text-muted uppercase tracking-wider mb-2"
              >
                {t.contact.form.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-bg-primary/50 border border-border-subtle rounded-xl px-4 py-3.5 text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-accent/50 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08),0_0_20px_rgba(59,130,246,0.05)] transition-all duration-300 font-display"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-mono text-text-muted uppercase tracking-wider mb-2"
              >
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full bg-bg-primary/50 border border-border-subtle rounded-xl px-4 py-3.5 text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-accent/50 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08),0_0_20px_rgba(59,130,246,0.05)] transition-all duration-300 font-display resize-none"
              />
            </div>

            {/* Submit */}
            <MagneticWrapper>
              <Button
                type="submit"
                disabled={status === "sending"}
                className="w-full justify-center"
              >
                {status === "sending" ? t.contact.form.sending : t.contact.form.send}
                <Send size={16} />
              </Button>
            </MagneticWrapper>

            {/* Status messages */}
            {status === "success" && (
              <p className="text-sm text-green-400 text-center">
                {t.contact.form.success}
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400 text-center">
                {t.contact.form.error}
              </p>
            )}
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
}
