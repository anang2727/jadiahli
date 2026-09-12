"use client";

import Link from "next/link";
import {
  ArrowRight,
  Users,
  ShieldCheck,
  Video,
  Code2,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureTile {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tone: "light" | "dark";
}

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
  {
    slug: "ai-assistant",
    title: "AI Assistant",
    description:
      "AI yang sudah terintegrasi dengan platform dan dilatih menggunakan data materi pembelajaran yang relevan.",
    icon: Sparkles,
    tone: "dark",
  },
];

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <p className="flex items-center gap-2 text-teal-600 text-sm font-semibold tracking-wide mb-3">
        <span className="w-6 h-px bg-teal-600" />
        KENAPA JADI AHLI
      </p>
      <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 max-w-2xl">
        Dapatkan pengalaman belajar{" "}
        <span className="text-teal-600">yang berkesan</span>
      </h2>
      <p className="mt-4 text-lg text-slate-600 max-w-2xl">
        Kami hadirkan pengalaman belajar yang membekas dengan berbagai fitur
        untuk mendukung perjalanan kamu jadi ahli.
      </p>

      <div className="mt-12 grid md:grid-cols-6 gap-5">
        {/* Stat highlight */}
        <Card className="md:col-span-4 bg-linear-to-br from-teal-600 to-teal-800 border-0 text-white p-8 rounded-2xl flex flex-col justify-between min-h-55">
          <div className="w-11 h-11 rounded-lg bg-white/15 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <p className="text-4xl font-extrabold">15.000+</p>
            <p className="text-lg font-semibold mt-1">
              Student terdaftar di Jadi Ahli
            </p>
            <p className="mt-2 text-teal-50/90 text-sm leading-relaxed max-w-md">
              Lebih dari 15.000 student telah bergabung dan belajar bersama
              mentor terbaik untuk mengasah skill mereka jadi ahli.
            </p>
          </div>
        </Card>

        {/* Certificate card */}
        <Card className="md:col-span-2 bg-white border-slate-200 p-8 rounded-2xl flex flex-col justify-between min-h-55">
          <div className="w-11 h-11 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
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
              className="mt-3 inline-flex items-center gap-1.5 text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors"
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
            ? "w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center text-teal-400 mb-5"
            : "w-11 h-11 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 mb-5"
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