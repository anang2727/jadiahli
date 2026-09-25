export type CourseStatus = "tersedia" | "segera-hadir";

export interface Course {
  slug: string;
  title: string;
  videoCount: number;
  level: string;
  status: CourseStatus;
  price?: number;
  originalPrice?: number;
  tag?: string;
  gradient?: string;
}

export interface CourseBundle {
  slug: string;
  title: string;
  description: string;
  courseCount: number;
  price: number;
  originalPrice: number;
  gradient: string;
}

export interface RoadmapCourse {
  slug: string;
  title: string;
  videoCount: number;
  level: string;
  price?: number;
  originalPrice?: number;
  imageSrc: string;
}