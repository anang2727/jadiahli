import type { LucideIcon } from "lucide-react";

export interface ContactItem {
  id: string;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

export interface CompanyInfo {
  label: string;
  value: string;
}

export interface FeatureTile {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tone: "light" | "dark";
}

export interface Program {
  slug: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  href: string;
  variant: "dark" | "light";
}

export interface RoadmapStep {
  stepLabel: string;
  title: string;
  description: string;
  optional?: boolean;
  course: import("@/types/course").RoadmapCourse;
}

export interface Roadmap {
  slug: string;
  role: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  steps: RoadmapStep[];
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface NavigationProgram {
  label: string;
  desc: string;
  href: string;
  icon: "video" | "book-open" | "handshake";
  badge?: string;
}

export interface NavigationLink {
  label: string;
  href: string;
  position: "before-program" | "after-program";
  active?: boolean;
}