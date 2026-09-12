"use client";

import Link from "next/link";
import { ArrowRight, Boxes, Code2, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CourseHero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-14 pb-16 grid lg:grid-cols-2 gap-14 items-center">
      <div>
        <p className="flex items-center gap-2 text-teal-600 text-sm font-semibold tracking-wide mb-4">
          <span className="w-6 h-px bg-teal-600" />
          COURSE
        </p>

        <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.15] tracking-tight text-slate-900">
          Belajar melalui{" "}
          <span className="text-teal-600">video</span>, sekali bayar untuk
          akses <span className="text-teal-600">selamanya</span>
        </h1>

        <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-lg">
          Online course kami siap bantu kamu meningkatkan skill yang sesuai
          dengan kebutuhan industri. Kamu bisa belajar kapan pun dan dimana
          pun.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button
            size="lg"
            className="bg-teal-600 hover:bg-teal-700 gap-2 px-6 py-6 text-base font-semibold"
            asChild
          >
            <Link href="#alur-belajar">
              Lihat Alur Belajar
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-6 py-6 text-base font-semibold border-slate-200"
            asChild
          >
            <Link href="#seluruh-course">Lihat Seluruh Course</Link>
          </Button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -top-6 -left-4 z-20 w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-teal-400 shadow-lg rotate-[-8deg]">
          <Boxes className="w-6 h-6" />
        </div>
        <div className="absolute -top-4 -right-4 z-20 w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-teal-600 shadow-lg rotate-[8deg]">
          <Code2 className="w-6 h-6" />
        </div>

        <div className="h-80 sm:h-96 rounded-[2rem] bg-gradient-to-br from-teal-500 via-teal-600 to-blue-900 flex items-center justify-center shadow-xl">
          <PlayCircle className="w-20 h-20 text-white/80" />
        </div>

        <div className="absolute -bottom-6 left-6 right-6 sm:left-10 sm:right-auto z-20 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 flex items-center gap-3 max-w-xs">
          <div className="w-14 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-slate-900 flex-shrink-0" />
          <div>
            <p className="font-bold text-sm text-slate-900 leading-tight">
              Belajar Fullstack MERN
            </p>
            <p className="text-xs text-slate-500 leading-tight mt-0.5">
              120 Video &middot; 37.8 Jam
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
