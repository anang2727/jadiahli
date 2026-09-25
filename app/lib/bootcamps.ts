import type { Bootcamp } from "@/types/bootcamp";
import bootcampData from "@/data/bootcamps.json";

export type { Bootcamp } from "@/types/bootcamp";

export const bootcamps: Bootcamp[] = bootcampData as Bootcamp[];

export function getBootcampBySlug(slug: string): Bootcamp | undefined {
  return bootcamps.find((bootcamp) => bootcamp.slug === slug);
}

export function getAllBootcampSlugs(): string[] {
  return bootcamps.map((bootcamp) => bootcamp.slug);
}