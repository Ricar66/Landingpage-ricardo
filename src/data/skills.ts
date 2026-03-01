import type { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "react", category: "frontend" },
  { name: "Next.js", icon: "nextjs", category: "frontend" },
  { name: "TypeScript", icon: "typescript", category: "frontend" },
  { name: "JavaScript", icon: "javascript", category: "frontend" },
  { name: "HTML & CSS", icon: "html", category: "frontend" },
  { name: "Tailwind CSS", icon: "tailwind", category: "frontend" },
  { name: "Framer Motion", icon: "framer", category: "frontend" },

  // Backend
  { name: "Node.js", icon: "nodejs", category: "backend" },
  { name: "Express", icon: "express", category: "backend" },
  { name: "C#", icon: "csharp", category: "backend" },
  { name: ".NET", icon: "dotnet", category: "backend" },
  { name: "Prisma", icon: "prisma", category: "backend" },
  { name: "PHP", icon: "php", category: "backend" },

  // Desktop
  { name: "Tauri", icon: "tauri", category: "desktop" },
  { name: "WPF", icon: "wpf", category: "desktop" },
  { name: "Rust", icon: "rust", category: "desktop" },

  // Database
  { name: "MySQL", icon: "mysql", category: "database" },
  { name: "SQLite", icon: "sqlite", category: "database" },
  { name: "SQL", icon: "sql", category: "database" },

  // Infrastructure
  { name: "Linux", icon: "linux", category: "infra" },
  { name: "Docker", icon: "docker", category: "infra" },
  { name: "Azure", icon: "azure", category: "infra" },
  { name: "Active Directory", icon: "ad", category: "infra" },
  { name: "Git", icon: "git", category: "infra" },
];

export const skillCategories = {
  frontend: "Frontend",
  backend: "Backend",
  desktop: "Desktop",
  database: "Databases",
  infra: "Infrastructure",
  tools: "Tools",
} as const;
