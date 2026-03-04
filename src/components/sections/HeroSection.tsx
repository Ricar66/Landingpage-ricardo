"use client";

import { useTranslation } from "@/i18n/LanguageProvider";
import { profile } from "@/data/profile";
import { motion, useScroll, useTransform } from "framer-motion";
import { staggerContainer, letterReveal } from "@/lib/animations";
import TypingText from "@/components/molecules/TypingText";
import MarqueeStrip from "@/components/molecules/MarqueeStrip";
import MagneticWrapper from "@/components/molecules/MagneticWrapper";
import Button from "@/components/atoms/Button";
import Image from "next/image";
import { ArrowDown, Download } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const marqueeItems = [
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  ".NET",
  "TAURI",
  "NODE.JS",
  "TAILWIND",
  "RUST",
  "C#",
  "PRISMA",
];

const techStack = [
  "HTML5", "CSS", "JavaScript", "TypeScript", "React", "Node.js", "C#", "Git",
];

export default function HeroSection() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showHeavyEffects, setShowHeavyEffects] = useState(false);

  // Defer heavy effects (blobs, geometric shapes) until after initial paint
  useEffect(() => {
    const timer = setTimeout(() => setShowHeavyEffects(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Video Background — lazy loaded for performance */}
      <div className="absolute inset-0 z-0">
        {/* Static poster shown immediately */}
        <Image
          src="/images/Design sem nome.png"
          alt=""
          fill
          className="object-cover"
          priority
          style={{ opacity: videoLoaded ? 0 : 1, transition: "opacity 1s ease" }}
        />
        {/* Video loads after initial paint */}
        {showHeavyEffects && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedData={() => setVideoLoaded(true)}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: videoLoaded ? 1 : 0,
              transition: "opacity 1.5s ease-out",
              willChange: "opacity",
            }}
          >
            <source src="/images/download.mp4" type="video/mp4" />
          </video>
        )}
        {/* Heavy dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
        {/* Side vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,black_100%)]" />
      </div>

      {/* Dot grid background with parallax */}
      <motion.div className="absolute inset-0 dot-grid opacity-30" style={{ y: bgY }} />

      {/* Mesh gradient blobs + geometric shapes — deferred for performance */}
      {showHeavyEffects && (
        <>
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Blue blob — top left (uses will-change for GPU compositing) */}
            <motion.div
              className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)",
                filter: "blur(80px)",
                willChange: "transform",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: [0, 40, 0], y: [0, 30, 0] }}
              transition={{ opacity: { duration: 1 }, x: { duration: 20, repeat: Infinity, ease: "easeInOut" }, y: { duration: 20, repeat: Infinity, ease: "easeInOut" } }}
            />
            {/* Purple blob — center right */}
            <motion.div
              className="absolute top-[10%] -right-[15%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
                filter: "blur(80px)",
                willChange: "transform",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: [0, -30, 0], y: [0, 40, 0] }}
              transition={{ opacity: { duration: 1 }, x: { duration: 25, repeat: Infinity, ease: "easeInOut" }, y: { duration: 25, repeat: Infinity, ease: "easeInOut" } }}
            />
            {/* Cyan blob — bottom left */}
            <motion.div
              className="absolute -bottom-[10%] left-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)",
                filter: "blur(80px)",
                willChange: "transform",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: [0, 35, 0], y: [0, -25, 0] }}
              transition={{ opacity: { duration: 1 }, x: { duration: 22, repeat: Infinity, ease: "easeInOut" }, y: { duration: 22, repeat: Infinity, ease: "easeInOut" } }}
            />
          </div>

          {/* Floating geometric shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-[15%] right-[8%] w-20 h-20 md:w-28 md:h-28 opacity-[0.07]"
              animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                <polygon points="50,5 95,95 5,95" className="text-accent" />
              </svg>
            </motion.div>

            <motion.div
              className="absolute bottom-[30%] left-[5%] w-16 h-16 rounded-full border border-white/[0.04]"
              animate={{ y: [5, -15, 5], scale: [1, 1.05, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-accent/20"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute bottom-[40%] right-[12%] w-1.5 h-1.5 rounded-full bg-accent/30"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>
        </>
      )}

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] w-full py-24 md:py-32"
        style={{ opacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left side - Text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Hello with accent dot */}
            <motion.div variants={letterReveal} className="mb-2">
              <span className="text-[var(--text-heading)] font-display font-black text-text-primary">
                Hello
              </span>
              <span className="text-[var(--text-heading)] font-display font-black text-accent">.</span>
            </motion.div>

            {/* I'm Ricardo */}
            <motion.div variants={letterReveal} className="mb-1">
              <span className="text-[var(--text-subheading)] font-display font-medium text-text-secondary">
                {t.hero.imRicardo}
              </span>
            </motion.div>

            {/* Big title */}
            <motion.h1
              variants={letterReveal}
              className="text-[clamp(2.5rem,7vw,5rem)] font-display font-black leading-[0.95] tracking-tight mb-6"
            >
              <span className="text-gradient">Software</span>
              <br />
              <span className="text-text-primary">Engineer</span>
            </motion.h1>

            {/* Typing subtitle */}
            <motion.div
              variants={letterReveal}
              className="text-[var(--text-body)] font-display text-text-muted mb-8 h-8 flex items-center gap-3"
            >
              <div className="w-5 h-px bg-accent" />
              <TypingText words={t.hero.typingWords} />
            </motion.div>

            {/* CTAs */}
            <motion.div variants={letterReveal} className="flex flex-wrap gap-4">
              <MagneticWrapper>
                <Button href="#projects">
                  {t.hero.cta}
                  <ArrowDown size={16} />
                </Button>
              </MagneticWrapper>
              <MagneticWrapper>
                <Button variant="secondary" href="/resume.pdf" download>
                  {t.hero.downloadCv}
                  <Download size={16} />
                </Button>
              </MagneticWrapper>
            </motion.div>
          </motion.div>

          {/* Right side - Photo with concentric rings */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px]">
              {/* Outermost ring */}
              <motion.div
                className="absolute inset-[-40px] md:inset-[-50px] rounded-full border border-accent/[0.07]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
              />

              {/* Outer arc - top right */}
              <svg
                className="absolute inset-[-30px] md:inset-[-40px] w-[calc(100%+60px)] h-[calc(100%+60px)] md:w-[calc(100%+80px)] md:h-[calc(100%+80px)]"
                viewBox="0 0 200 200"
              >
                <motion.circle
                  cx="100"
                  cy="100"
                  r="95"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="1.5"
                  strokeDasharray="150 450"
                  strokeDashoffset="0"
                  strokeLinecap="round"
                  opacity="0.3"
                  initial={{ strokeDashoffset: 600 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
                />
              </svg>

              {/* Middle arc */}
              <svg
                className="absolute inset-[-15px] md:inset-[-20px] w-[calc(100%+30px)] h-[calc(100%+30px)] md:w-[calc(100%+40px)] md:h-[calc(100%+40px)]"
                viewBox="0 0 200 200"
              >
                <motion.circle
                  cx="100"
                  cy="100"
                  r="95"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeDasharray="200 400"
                  strokeDashoffset="150"
                  strokeLinecap="round"
                  opacity="0.2"
                  initial={{ strokeDashoffset: 600 }}
                  animate={{ strokeDashoffset: 150 }}
                  transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
                />
              </svg>

              {/* Inner glow ring */}
              <motion.div
                className="absolute inset-[-5px] rounded-full"
                style={{
                  background: "conic-gradient(from 180deg, transparent 0%, var(--accent) 30%, transparent 60%)",
                  opacity: 0.15,
                }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Photo container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/[0.08]">
                <Image
                  src="/images/avatar.webp"
                  alt="Ricardo De Marco Moretti"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Floating accent dots around the photo */}
              <motion.div
                className="absolute -top-2 right-8 w-3 h-3 rounded-full bg-accent"
                style={{ boxShadow: "0 0 12px var(--accent-glow)" }}
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-4 -left-2 w-2 h-2 rounded-full bg-accent/60"
                style={{ boxShadow: "0 0 8px var(--accent-glow)" }}
                animate={{ y: [2, -4, 2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Tech stack horizontal list */}
        <motion.div
          className="mt-16 md:mt-20 pt-8 border-t border-white/[0.06]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                className="text-sm font-mono text-text-muted/60 hover:text-accent transition-colors duration-300 cursor-default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 + i * 0.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="text-xs font-mono text-text-muted">
          {t.hero.scrollDown}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-text-muted" />
        </motion.div>
      </motion.div>

      {/* Marquee divider */}
      <div className="absolute bottom-0 left-0 right-0 hidden md:block">
        <div className="section-divider mb-4" />
        <MarqueeStrip items={marqueeItems} className="py-3 opacity-30" />
      </div>
    </section>
  );
}
