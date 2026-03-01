"use client";

import { useTranslation } from "@/i18n/LanguageProvider";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { key: "home" as const, href: "#hero" },
  { key: "about" as const, href: "#about" },
  { key: "projects" as const, href: "#projects" },
  { key: "stack" as const, href: "#stack" },
  { key: "contact" as const, href: "#contact" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
  onNavClick,
}: MobileMenuProps) {
  const { t, lang, toggleLang } = useTranslation();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[999] md:hidden bg-bg-primary/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
        >
          {navItems.map((item, i) => (
            <motion.a
              key={item.key}
              href={item.href}
              onClick={(e) => {
                onNavClick(e, item.href);
                onClose();
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
              className="text-3xl font-display font-bold text-text-primary hover:text-accent transition-colors"
            >
              {t.nav[item.key]}
            </motion.a>
          ))}

          <motion.button
            onClick={toggleLang}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 px-4 py-2 text-sm font-mono rounded-full border border-border-subtle text-text-muted hover:text-text-primary hover:border-accent transition-all"
          >
            {lang === "pt" ? "Switch to English" : "Mudar para Português"}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
