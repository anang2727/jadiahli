"use client";

import Link from "next/link";
import { ArrowRight, GraduationCap, MessageCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { bootcamps, type Bootcamp } from "@/app/lib/bootcamps";

export default function BootcampGrid() {
  return (
    <section id="program-bootcamp" className="max-w-7xl mx-auto px-6 pb-24">
      <p className="flex items-center gap-2 text-primary text-sm font-semibold tracking-wide mb-3">
        <span className="w-6 h-px bg-primary" />
        BOOTCAMP TERBARU KAMI
      </p>
      <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 max-w-2xl">
        Pilih program belajar{" "}
        <span className="text-primary">sesuai kebutuhan</span>
      </h2>
      <p className="mt-4 text-lg text-slate-600 max-w-2xl">
        Kami menyediakan berbagai macam bootcamp yang dapat membantu kamu
        mengembangkan kemampuan dan keterampilan kamu.
      </p>

      <div className="mt-12 grid lg:grid-cols-2 gap-6">
        {bootcamps.map((bootcamp) => (
          <BootcampCard key={bootcamp.slug} bootcamp={bootcamp} />
        ))}
      </div>
    </section>
  );
}

function BootcampCard({ bootcamp }: { bootcamp: Bootcamp }) {
  return (
    <article className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
      <div
        className={`relative h-64 bg-linear-to-br ${bootcamp.gradient} p-6 flex flex-col justify-between`}
      >
        <GraduationCap className="w-8 h-8 text-white" />

        <div>
          <p className="text-white/70 text-sm font-medium">Jadi Ahli Camp</p>
          <h3 className="text-2xl font-extrabold text-white mt-1 leading-snug">
            {bootcamp.bannerTitle}
          </h3>
          <p className="text-secondary-foreground text-sm font-medium mt-1">
            {bootcamp.bannerSubtitle}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-white/70 text-xs">
            <Globe className="w-3.5 h-3.5" />
            jadiahli.id
          </span>
          <Badge
            className={
              bootcamp.availability === "sold-out"
                ? "bg-rose-500 text-white hover:bg-rose-500"
                : "bg-white text-slate-900 hover:bg-white"
            }
          >
            {bootcamp.availabilityLabel}
          </Badge>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-slate-900">{bootcamp.title}</h3>
        <p className="mt-2 text-slate-600 leading-relaxed">
          {bootcamp.description}
        </p>
        <p className="mt-2 text-sm text-orange-600 italic">{bootcamp.note}</p>

        <div className="mt-5 pt-5 border-t border-slate-100 grid grid-cols-[auto_1fr] gap-x-8 gap-y-1 text-sm">
          <p className="text-xs font-semibold text-slate-400 tracking-wide uppercase">
            Pertemuan
          </p>
          <p className="text-xs font-semibold text-slate-400 tracking-wide uppercase">
            Jadwal Kelas
          </p>
          <p className="font-bold text-slate-900">{bootcamp.sessionCount}x</p>
          <p className="font-semibold text-slate-800">{bootcamp.schedule}</p>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          {/* Lihat Detail -> /bootcamp/[slug], slug dipakai sebagai id halaman detail */}
          <Button className="bg-primary hover:bg-primary/90 gap-1.5" asChild>
            <Link href={`/bootcamp/${bootcamp.slug}`}>
              Lihat Detail
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            variant="secondary"
            className="bg-slate-100 hover:bg-slate-200 text-slate-800 gap-1.5"
            asChild
          >
            <Link href="#konsultasi">
              <MessageCircle className="w-4 h-4" />
              Konsultasi Gratis
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}