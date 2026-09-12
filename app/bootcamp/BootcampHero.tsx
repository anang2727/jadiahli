"use client";

import Link from "next/link";
import { ArrowRight, Languages, Wrench, GraduationCap, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const avatarStack = [
  { initials: "RA", gradient: "from-teal-500 to-blue-900" },
  { initials: "BM", gradient: "from-amber-400 to-teal-700" },
];

export default function BootcampHero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-14 pb-24 grid lg:grid-cols-2 gap-14 items-center">
      <div>
        <p className="flex items-center gap-2 text-teal-600 text-sm font-semibold tracking-wide mb-4">
          <span className="w-6 h-px bg-teal-600" />
          BOOTCAMP
        </p>

        <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.15] tracking-tight text-slate-900">
          Belajar <span className="text-teal-600">langsung</span> bersama
          dengan <span className="text-teal-600">mentor terbaik</span> kami
        </h1>

        <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-lg">
          Program intensif live class melalui Zoom untuk meningkatkan skill
          kamu bersama mentor yang berpengalaman di bidangnya.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button
            size="lg"
            className="bg-teal-600 hover:bg-teal-700 gap-2 px-6 py-6 text-base font-semibold"
            asChild
          >
            <Link href="#program-bootcamp">
              Lihat Bootcamp
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="bg-slate-100 hover:bg-slate-200 text-slate-800 gap-2 px-6 py-6 text-base font-semibold"
            asChild
          >
            <Link href="#konsultasi">
              <MessageCircle className="w-4 h-4" />
              Konsultasi Gratis
            </Link>
          </Button>
        </div>
      </div>

      <div className="relative">
        <div
          className="absolute inset-0 -m-8 rounded-[2.5rem] opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgb(15 118 110 / 0.18) 1.5px, transparent 1.5px)",
            backgroundSize: "18px 18px",
          }}
          aria-hidden
        />

        <div className="absolute top-6 left-2 z-20 w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 shadow-md">
          <Languages className="w-5 h-5" />
        </div>
        <div className="absolute top-24 -left-4 z-20 w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 shadow-md">
          <Wrench className="w-5 h-5" />
        </div>
        <div className="absolute -top-2 right-4 z-20 w-16 h-16 rounded-full bg-white border-4 border-teal-100 flex items-center justify-center text-teal-600 shadow-md">
          <GraduationCap className="w-7 h-7" />
        </div>

        <div className="relative h-105 rounded-[2rem] bg-linear-to-br from-teal-100 to-teal-50 border-2 border-dashed border-teal-200 flex items-center justify-center overflow-hidden">
          <div className="w-40 h-40 rounded-full bg-linear-to-br from-teal-500 to-blue-900 flex items-center justify-center text-white text-4xl font-extrabold">
            JA
          </div>
        </div>

        <div className="absolute bottom-6 left-6 z-20 flex items-center">
          {avatarStack.map((avatar, index) => (
            <div
              key={avatar.initials}
              className={`w-10 h-10 rounded-full bg-linear-to-br ${avatar.gradient} border-2 border-white flex items-center justify-center text-white text-xs font-bold ${
                index > 0 ? "-ml-3" : ""
              }`}
            >
              {avatar.initials}
            </div>
          ))}
          <div className="-ml-3 w-10 h-10 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-white text-[11px] font-bold">
            +11K
          </div>
        </div>

        <div className="absolute -bottom-5 right-6 z-20 bg-teal-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
          Bootcamp
        </div>
      </div>
    </section>
  );
}