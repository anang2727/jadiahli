"use client";

import Link from "next/link";
import {
  ArrowRight,
  Users,
  ShieldCheck,
  Video,
  Code2,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import type { FeatureTile } from "@/types/content";

const featureTiles: FeatureTile[] = [
  {
    slug: "akses-selamanya",
    title: "Akses Selamanya",
    description:
      "Sekali beli course, kamu bisa akses selamanya tanpa batas waktu. Sehingga kamu bisa belajar dimana saja dan kapan saja.",
    icon: Video,
    tone: "light",
  },
  {
    slug: "tech-stack-industri",
    title: "Tech Stack Industri",
    description:
      "Belajar teknologi yang dipakai top IT company seperti AI Engineering, React, Next, Supabase, Tailwind dan lain-lain.",
    icon: Code2,
    tone: "light",
  },
];

export default function BenefitList() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <p className="flex items-center gap-2 text-[#1B3B5D] text-sm font-semibold tracking-wide mb-3">
        <span className="w-6 h-px bg-[#1B3B5D]" />
        KENAPA JADI AHLI
      </p>
      <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 max-w-2xl">
        Dapatkan pengalaman belajar{" "}
        <span className="text-[#1B3B5D]">yang berkesan</span>
      </h2>
      <p className="mt-4 text-lg text-slate-600 max-w-2xl">
        Kami hadirkan pengalaman belajar yang membekas dengan berbagai fitur
        untuk mendukung perjalanan kamu jadi ahli.
      </p>

      <div className="mt-12 grid md:grid-cols-6 gap-5">
        {/* Stat highlight */}
        <Card className="md:col-span-4 bg-linear-to-br from-[#1B3B5D] to-[#1B3B5D] border-0 text-white p-8 rounded-2xl flex flex-col justify-between min-h-55">
          <div className="w-11 h-11 rounded-lg bg-white/15 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <p className="text-4xl font-extrabold">15.000+</p>
            <p className="text-lg font-semibold mt-1">
              Student terdaftar di Jadi Ahli
            </p>
            <p className="mt-2 text-white/90 text-sm leading-relaxed max-w-md">
              Lebih dari 15.000 student telah bergabung dan belajar bersama
              mentor terbaik untuk mengasah skill mereka jadi ahli.
            </p>
          </div>
        </Card>

        {/* Certificate card */}
        <Card className="md:col-span-2 bg-white border-slate-200 p-8 rounded-2xl flex flex-col justify-between min-h-55">
          <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center text-secondary-foreground">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Sertifikat Resmi &amp; Terverifikasi
            </h3>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Setiap student yang menyelesaikan program mendapatkan sertifikat
              resmi yang dapat diverifikasi dan dibagikan lewat url pribadi.
            </p>
            <Link
              href="/sertifikat"
              className="mt-3 inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:text-primary/80 transition-colors"
            >
              Lihat Contoh Sertifikat
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Card>

        {featureTiles.map((tile) => (
          <FeatureCard key={tile.slug} tile={tile} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ tile }: { tile: FeatureTile }) {
  const isDark = tile.tone === "dark";
  const Icon = tile.icon;

  return (
    <Card
      className={
        isDark
          ? "md:col-span-2 bg-slate-900 border-slate-900 text-white p-7 rounded-2xl"
          : "md:col-span-2 bg-white border-slate-200 text-slate-900 p-7 rounded-2xl"
      }
    >
      <div
        className={
          isDark
            ? "w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center text-white/80 mb-5"
            : "w-11 h-11 rounded-lg bg-secondary flex items-center justify-center text-secondary-foreground mb-5"
        }
      >
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-bold">{tile.title}</h3>
      <p
        className={
          isDark
            ? "mt-2 text-slate-300 text-sm leading-relaxed"
            : "mt-2 text-slate-600 text-sm leading-relaxed"
        }
      >
        {tile.description}
      </p>
    </Card>
  );
}