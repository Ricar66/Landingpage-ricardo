export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  thumbnail: string;
  technologies: string[];
  category: "web" | "desktop" | "saas" | "client";
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  year: number;
  highlights: string[];
  accent: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
}

export type SkillCategory =
  | "frontend"
  | "backend"
  | "desktop"
  | "database"
  | "infra"
  | "tools";

export interface TimelineEntry {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "education" | "work";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  title: string;
  statement: string;
  email: string;
  phone: string;
  location: string;
  socialLinks: SocialLink[];
}
