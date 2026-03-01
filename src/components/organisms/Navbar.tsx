"use client";

import { useTranslation } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useCallback, useState } from "react";
import MobileMenu from "./MobileMenu";

const navItems = [
  { key: "home" as const, href: "#hero" },
  { key: "about" as const, href: "#about" },
  { key: "projects" as const, href: "#projects" },
  { key: "stack" as const, href: "#stack" },
  { key: "contact" as const, href: "#contact" },
];

export default function Navbar() {
  const { t, lang, toggleLang } = useTranslation();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 50);
    if (latest > 300 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        setMobileOpen(false);
      }
    },
    []
  );

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[var(--z-nav)] px-6 md:px-10 h-16 flex items-center justify-between",
          "transition-colors duration-300",
          scrolled
            ? "glass"
            : "bg-transparent border-b border-transparent"
        )}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="text-lg font-display font-bold text-text-primary"
        >
          RM<span className="text-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-display font-semibold text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              {t.nav[item.key]}
            </a>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="px-3 py-1 text-xs font-mono font-semibold rounded-full border border-border-subtle text-text-muted hover:text-text-primary hover:border-border-hover transition-all duration-200"
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-text-primary p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onNavClick={handleNavClick}
      />
    </>
  );
}
