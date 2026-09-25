export type BootcampAvailability = "open" | "sold-out" | "upcoming";

export interface Bootcamp {
  slug: string;
  bannerTitle: string;
  bannerSubtitle: string;
  title: string;
  description: string;
  note: string;
  sessionCount: number;
  schedule: string;
  gradient: string;
  availability: BootcampAvailability;
  availabilityLabel: string;
}

export type ActiveBootcampStatus = "open" | "soldout";

export interface ActiveBootcamp {
  id: string;
  status: ActiveBootcampStatus;
  badge: string;
  title: string;
  description: string;
  note: string;
  sessions: string;
  schedule: string;
  detailHref: string;
  consultationHref: string;
}