"use client";

import Link from "next/link";
import { ArrowRight, Video, BookOpen, Handshake, Check, type LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Program {
  slug: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  href: string;
  variant: "dark" | "light";
}

const programs: Program[] = [
  {
    slug: "online-course",
    title: "Online Course",
    description:
      "Belajar melalui video pembelajaran berkualitas tinggi dengan akses selamanya. Cocok untuk yang ingin belajar fleksibel.",
    features: [
      "8+ course tersedia",
      "Akses selamanya",
      "Akses AI untuk membantu belajar kapan saja",
      "Fitur diskusi eksklusif dengan mentor",
      "Sertifikat penyelesaian resmi",
    ],
    icon: Video,
    href: "/program/online-course",
    variant: "dark",
  },
  {
    slug: "bootcamp",
    title: "Bootcamp",
    description:
      "Program intensif dengan mentor melalui zoom. Cocok untuk yang ingin belajar secara langsung dengan mentor.",
    features: [
      "Live session bersama mentor",
      "Project based learning",
      "Konsultasi karir",
      "Video recording kelas untuk belajar ulang",
      "Sertifikat penyelesaian resmi",
    ],
    icon: BookOpen,
    href: "/program/bootcamp",
    variant: "light",
  },
  {
    slug: "partnership",
    title: "Partnership",
    description:
      "Kerjasama strategis untuk perusahaan, kampus, atau komunitas. Tingkatkan kapasitas talenta digital melalui program partnership.",
    features: [
      "Corporate training",
      "Educational institution",
      "Content collaboration",
      "Event sponsorship",
      "Software development & LMS integration",
    ],
    icon: Handshake,
    href: "/program/partnership",
    variant: "light",
  },
];

export default function Price() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
        Pilih program belajar{" "}
        <span className="text-teal-600">sesuai kebutuhan</span>
      </h2>
      <p className="mt-4 text-lg text-slate-600 max-w-2xl">
        Mulai dari online course belajar mandiri lewat video, bootcamp
        intensif bersama mentor, sampai kerjasama korporat melalui
        partnership.
      </p>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {programs.map((program) => (
          <ProgramCard key={program.slug} program={program} />
        ))}
      </div>
    </section>
  );
}

function ProgramCard({ program }: { program: Program }) {
  const isDark = program.variant === "dark";
  const Icon = program.icon;

  return (
    <Card
      className={
        isDark
          ? "bg-blue-950 border-blue-950 text-white p-8 flex flex-col rounded-2xl"
          : "bg-white border-slate-200 text-slate-900 p-8 flex flex-col rounded-2xl"
      }
    >
      <div
        className={
          isDark
            ? "w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-teal-400 mb-6"
            : "w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6"
        }
      >
        <Icon className="w-6 h-6" />
      </div>

      <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
      <p
        className={
          isDark
            ? "text-slate-300 leading-relaxed mb-6"
            : "text-slate-600 leading-relaxed mb-6"
        }
      >
        {program.description}
      </p>

      <ul className="space-y-3 mb-8">
        {program.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <span
              className={
                isDark
                  ? "mt-0.5 shrink-0 w-4 h-4 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center"
                  : "mt-0.5 shrink-0 w-4 h-4 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center"
              }
            >
              <Check className="w-2.5 h-2.5" strokeWidth={3} />
            </span>
            <span className={isDark ? "text-slate-200" : "text-slate-700"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href={program.href}
        className={
          isDark
            ? "mt-auto inline-flex items-center gap-1.5 text-teal-400 font-semibold text-sm hover:text-teal-300 transition-colors"
            : "mt-auto inline-flex items-center gap-1.5 text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors"
        }
      >
        Lihat Selengkapnya
        <ArrowRight className="w-4 h-4" />
      </Link>
    </Card>
  );
}