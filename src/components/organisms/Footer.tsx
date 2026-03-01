"use client";

import { useTranslation } from "@/i18n/LanguageProvider";
import { profile } from "@/data/profile";
import { Github, Linkedin, Globe, ArrowUp } from "lucide-react";

const iconMap: Record<string, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  globe: Globe,
};

export default function Footer() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border-subtle bg-bg-secondary">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <span>
              &copy; {new Date().getFullYear()} {profile.name}.
            </span>
            <span>{t.footer.rights}</span>
          </div>

          {/* Center - Social */}
          <div className="flex items-center gap-4">
            {profile.socialLinks.map((link) => {
              const Icon = iconMap[link.icon] || Globe;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-text-muted hover:text-accent transition-colors duration-200"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          {/* Right - Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="mt-6 text-center text-xs text-text-muted/50">
          {t.footer.made} Next.js {t.footer.and}
        </div>
      </div>
    </footer>
  );
}
