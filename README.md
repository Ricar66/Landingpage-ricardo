# Ricardo Moretti — Portfolio

Personal portfolio website built with Next.js 16, featuring advanced animations, an interactive orbital tech constellation, and a dark glassmorphism design system.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** | Static site generation (`output: 'export'`) |
| **React 19** | UI components |
| **TypeScript** | Type safety |
| **Tailwind CSS v4** | Styling with custom design tokens |
| **Framer Motion 12** | Declarative animations & scroll interactions |
| **Lucide React** | Icon system |

## Features

- **Orbital Tech Constellation** — Interactive SVG-based skill visualization with 3 concentric orbits, connecting lines, and category-based hover highlighting
- **Alternating Timeline** — Zigzag left/right layout with animated center line and pulsing milestone markers
- **Hero with Concentric Rings** — Profile photo framed by animated SVG arcs and a rotating conic gradient ring
- **Per-Project Accent Colors** — Each project card has its own color identity with glowing borders and hover effects
- **Custom Cursor** — Dot + ring cursor with event delegation for interactive elements (desktop only)
- **Bilingual i18n** — PT/EN toggle via React Context + localStorage (no external libraries)
- **Scroll Animations** — Parallax backgrounds, staggered reveals, magnetic buttons, 3D tilt cards
- **Animated Counters** — Stats with easeOutQuart easing triggered by IntersectionObserver
- **Typing Effect** — Cyclic typewriter animation (80ms type / 40ms delete / 2s pause)
- **Accessibility** — `prefers-reduced-motion` disables all animations; semantic HTML; focus states

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata, LanguageProvider
│   ├── page.tsx            # Single-page portfolio (all sections)
│   └── globals.css         # Design tokens, keyframes, utilities
├── components/
│   ├── atoms/              # Button, GlassTag, SectionEyebrow, ScrollProgress, CustomCursor
│   ├── molecules/          # MagneticWrapper, TiltCard, RevealOnScroll, AnimatedCounter, TypingText
│   ├── organisms/          # Navbar, MobileMenu, ProjectCard, Footer
│   └── sections/           # HeroSection, AboutSection, ProjectsSection, StackSection, ContactSection
├── hooks/                  # useInView, useTiltEffect, useMagneticEffect, useTypingEffect, etc.
├── i18n/                   # pt.ts, en.ts, LanguageProvider.tsx
├── data/                   # profile.ts, projects.ts, skills.ts, experience.ts
├── lib/                    # utils.ts (cn), animations.ts (Framer Motion presets)
└── types/                  # TypeScript interfaces
```

## Design System

| Token | Value |
|---|---|
| Background | `#000000` / `#0A0A0A` / `#111111` |
| Accent | `#3B82F6` (electric blue) |
| Glass | `rgba(17,17,17,0.6)` + `blur(25px)` |
| Display font | Source Sans 3 |
| Mono font | JetBrains Mono |
| Display size | `clamp(3.5rem, 10vw, 8rem)` |

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export → out/
npx serve out      # preview production build
```

## Deployment (Hostinger)

1. `npm run build`
2. Upload `out/` contents to `public_html/` via FTP or File Manager
3. `.htaccess` handles HTTPS, GZIP, caching, and security headers

## License

MIT
