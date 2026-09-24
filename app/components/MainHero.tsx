"use client";

import Link from "next/link";
import {
  ArrowRight,
  PlayCircle,
  Sparkles,
  Search,
  Home,
  BookOpen,
  TrendingUp,
  Award,
  Settings,
  GraduationCap,
  FileCheck2,
  Zap,
  Code2,
  Palette,
  BarChart3,
  BookMarked,
  Users,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`relative overflow-hidden ${styles.heroSection}`}>
      <div className={styles.heroGrid} aria-hidden />
      <div className={styles.blobLeft} aria-hidden />
      <div className={styles.blobRight} aria-hidden />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-100 shadow-sm rounded-full pl-3 pr-4 py-1.5 mb-7 text-[#1B3B5D]">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">
              Platform belajar online untuk masa depan karier
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.08] tracking-tight text-slate-900">
            Belajar Di Jadi Ahli
          </h1>
          <p className="text-5xl sm:text-6xl font-extrabold leading-[1.08] tracking-tight mt-1 bg-linear-to-r from-[#1B3B5D] to-[#4A7293] bg-clip-text text-transparent">
            Jadi Talenta Terbaik
          </p>
          <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-lg">
            Jadi Ahli hadir untuk membantu kamu menguasai keterampilan baru
            dengan cara yang mudah, fleksibel, dan sesuai dengan kebutuhan
            industri.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="bg-[#1B3B5D] hover:bg-[#16314f] gap-2 px-6 py-6 text-base font-semibold rounded-full"
              asChild
            >
              <Link href="#program">
                Mulai Belajar
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 px-6 py-6 text-base font-semibold rounded-full border-slate-200 text-slate-700 hover:bg-slate-50"
              asChild
            >
              <Link href="#cara-kerja">
                <PlayCircle className="w-4 h-4" />
                Konsultasi Gratis
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-[#EAF3FB] text-[#1B3B5D] flex items-center justify-center">
                <BookMarked className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xl font-bold text-slate-900 leading-tight">
                  50+
                </p>
                <p className="text-xs text-slate-500">Kursus Tersedia</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-[#EAF3FB] text-[#1B3B5D] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xl font-bold text-slate-900 leading-tight">
                  15.000+
                </p>
                <p className="text-xs text-slate-500">Siswa Aktif</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-[#EAF3FB] text-[#1B3B5D] flex items-center justify-center">
                <Star className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xl font-bold text-slate-900 leading-tight">
                  4.8/5
                </p>
                <p className="text-xs text-slate-500">Rating Rata-rata</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: dashboard mockup */}
        <div className="relative z-10 hidden lg:block">
          <div className={`${styles.floatSlow} absolute -top-8 -left-6 z-20`}>
            <div className="flex items-center gap-3 bg-white shadow-lg rounded-xl px-4 py-3 border border-slate-100 max-w-55">
              <span className="w-9 h-9 shrink-0 rounded-lg bg-[#EAF3FB] text-[#1B3B5D] flex items-center justify-center">
                <GraduationCap className="w-4.5 h-4.5" />
              </span>
              <div>
                <p className="font-bold text-sm text-slate-900 leading-tight">
                  Kursus Berkualitas
                </p>
                <p className="text-xs text-slate-500 leading-tight">
                  Materi disusun oleh mentor berpengalaman
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl bg-white shadow-2xl border border-slate-100 overflow-hidden">
            <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-2 flex-1 text-slate-400">
                <Search className="w-4 h-4" />
                <span className="text-sm">Cari kursus, topik...</span>
              </div>
            </div>

            <div className="grid grid-cols-[auto_1fr]">
              <nav className="px-3 py-5 flex flex-col gap-1 border-r border-slate-100">
                {[
                  { icon: Home, label: "Beranda", active: true },
                  { icon: BookOpen, label: "Kursus" },
                  { icon: TrendingUp, label: "Progress" },
                  { icon: Award, label: "Sertifikat" },
                  { icon: Settings, label: "Pengaturan" },
                ].map(({ icon: Icon, label, active }) => (
                  <span
                    key={label}
                    className={`flex items-center gap-2 text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap ${
                      active
                        ? "bg-[#EAF3FB] text-[#1B3B5D]"
                        : "text-slate-500"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </span>
                ))}
              </nav>

              <div className="p-5">
                <div className="rounded-2xl bg-linear-to-br from-[#1B3B5D] to-[#3B5E86] text-white p-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-bold leading-snug">
                      Mulai perjalanan
                      <br />
                      belajarmu sekarang
                    </p>
                    <p className="text-xs text-white/90 mt-1.5 max-w-47.5 leading-relaxed">
                      Pilih kursus sesuai minat dan tujuan karier kamu.
                    </p>
                    <button className="mt-3 bg-white text-[#1B3B5D] text-xs font-semibold rounded-full px-3.5 py-1.5 inline-flex items-center gap-1">
                      Jelajahi Kursus
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  <GraduationCap className="w-14 h-14 text-white/25 shrink-0" />
                </div>

                <div className="flex items-center justify-between mt-5 mb-3">
                  <p className="text-sm font-bold text-slate-900">
                    Kursus Populer
                  </p>
                  <span className="text-xs text-[#1B3B5D] font-medium">
                    Lihat Semua
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: Code2, color: "text-blue-600 bg-blue-50", title: "Web Development", meta: "12 materi", pct: "70%" },
                    { icon: Palette, color: "text-violet-600 bg-violet-50", title: "Desain UI/UX", meta: "10 materi", pct: "45%" },
                    { icon: BarChart3, color: "text-amber-600 bg-amber-50", title: "Data Analysis", meta: "8 materi", pct: "30%" },
                  ].map(({ icon: Icon, color, title, meta, pct }) => (
                    <div
                      key={title}
                      className="rounded-xl border border-slate-100 p-3"
                    >
                      <span
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${color}`}
                      >
                        <Icon className="w-4 h-4" />
                      </span>
                      <p className="text-xs font-bold text-slate-900 mt-2 leading-tight">
                        {title}
                      </p>
                      <p className="text-[11px] text-slate-500">{meta}</p>
                      <div className="h-1 rounded-full bg-slate-100 mt-2">
                        <div
                          className="h-1 rounded-full bg-[#1B3B5D]"
                          style={{ width: pct }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${styles.floatSlowDelay} absolute top-6 -right-8 z-20`}
          >
            <div className="flex items-center gap-3 bg-white shadow-lg rounded-xl px-4 py-3 border border-slate-100 max-w-52.5">
              <span className="w-9 h-9 shrink-0 rounded-lg bg-[#EAF3FB] text-[#1B3B5D] flex items-center justify-center">
                <FileCheck2 className="w-4.5 h-4.5" />
              </span>
              <div>
                <p className="font-bold text-sm text-slate-900 leading-tight">
                  Sertifikat Resmi
                </p>
                <p className="text-xs text-slate-500 leading-tight">
                  Diakui di dunia kerja
                </p>
              </div>
            </div>
          </div>

          <div
            className={`${styles.floatSlowDelay2} absolute -bottom-6 right-6 z-20`}
          >
            <div className="flex items-center gap-3 bg-white shadow-lg rounded-xl px-4 py-3 border border-slate-100 max-w-52.5">
              <span className="w-9 h-9 shrink-0 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                <Zap className="w-4.5 h-4.5" />
              </span>
              <div>
                <p className="font-bold text-sm text-slate-900 leading-tight">
                  Akses Fleksibel
                </p>
                <p className="text-xs text-slate-500 leading-tight">
                  Belajar kapan saja, di mana saja
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Compact mobile mockup, shown below lg */}
        <div className="relative z-10 lg:hidden">
          <div className="rounded-2xl bg-white shadow-xl border border-slate-100 p-5">
            <p className="text-sm font-bold text-slate-900 mb-3">
              Kursus Populer
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Code2, color: "text-blue-600 bg-blue-50", title: "Web Dev" },
                { icon: Palette, color: "text-violet-600 bg-violet-50", title: "UI/UX" },
                { icon: BarChart3, color: "text-amber-600 bg-amber-50", title: "Data" },
              ].map(({ icon: Icon, color, title }) => (
                <div key={title} className="rounded-xl border border-slate-100 p-3 text-center">
                  <span className={`w-8 h-8 mx-auto rounded-lg flex items-center justify-center ${color}`}>
                    <Icon className="w-4 h-4" />
                  </span>
                  <p className="text-xs font-semibold text-slate-900 mt-2">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}