"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Video, GraduationCap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <div className="bg-white text-slate-900">
      {/* Promo bar */}
      <div className="bg-amber-400 text-slate-900 text-center text-sm py-2.5 px-4">
        <span className="font-medium">Promo Kelas Data Analyst Batch 5</span>
        <span className="line-through opacity-60 ml-2">Rp1.598.000</span>
        <span className="font-bold ml-1">Rp799.000</span>,
        <span> kuota terbatas </span>
        <Link href="#program" className="underline font-semibold hover:text-slate-700">
          daftar sekarang
        </Link>
      </div>

      {/* Navbar */}
      <header className="w-full border-b border-slate-100">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/jadi-ahli-logo.png"
              alt="Jadi Ahli"
              width={160}
              height={40}
              className="h-9 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-800">
            <Link href="/" className="text-teal-600">
              Beranda
            </Link>
            <Link href="#tentang" className="hover:text-teal-600 transition-colors">
              Tentang Kami
            </Link>
            <button className="flex items-center gap-1 hover:text-teal-600 transition-colors">
              Program
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <button className="flex items-center gap-1 hover:text-teal-600 transition-colors">
              Komunitas
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <Link href="#kontak" className="hover:text-teal-600 transition-colors">
              Kontak
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="hidden sm:inline-flex border-blue-900 text-blue-900 hover:bg-blue-50"
              asChild
            >
              <Link href="#daftar">Daftar</Link>
            </Button>
            <Button className="bg-blue-900 hover:bg-blue-800" asChild>
              <Link href="#masuk">Masuk</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-14 pb-20 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white border border-slate-100 shadow-sm rounded-full pl-1.5 pr-4 py-1.5 mb-6">
            <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-50 rounded-full gap-1.5 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              Dapatkan Promo
            </Badge>
            <span className="text-xs font-medium text-slate-700 flex items-center gap-1">
              Kelas Unggulan
              <ArrowRight className="w-3 h-3" />
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.08] tracking-tight text-slate-900">
            Belajar di
            <br />
            Jadi Ahli
          </h1>
          <p className="text-5xl sm:text-6xl font-extrabold leading-[1.08] tracking-tight mt-1 bg-linear-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
            Jadi Talenta Terbaik
          </p>

          <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-lg">
            Platform online course terbaik di Indonesia. Belajar langsung dari
            mentor terbaik dengan materi terlengkap, kurikulum standar
            industri, dan akses selamanya.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 gap-2 px-6 py-6 text-base font-semibold"
              asChild
            >
              <Link href="#program">
                Lihat Program
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-blue-50 hover:bg-blue-100 text-slate-800 gap-2 px-6 py-6 text-base font-semibold"
              asChild
            >
              <Link href="#konsultasi">
                <MessageCircle className="w-4 h-4" />
                Konsultasi Gratis
              </Link>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-10 pt-8 border-t border-slate-100">
            <div>
              <p className="text-xs tracking-wide text-slate-500 uppercase">
                Course Tersedia
              </p>
              <p className="text-2xl font-bold text-slate-900 mt-1">
                8 Program
              </p>
            </div>
            <div className="w-px h-10 bg-slate-100" />
            <div>
              <p className="text-xs tracking-wide text-slate-500 uppercase">
                Student Terdaftar
              </p>
              <p className="text-2xl font-bold text-slate-900 mt-1">
                15.000+
              </p>
            </div>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative">
          <div className="absolute -top-6 left-8 z-20 animate-[float_5s_ease-in-out_infinite]">
            <div className="flex items-center gap-3 bg-white shadow-lg rounded-xl px-4 py-3 border border-slate-100">
              <div className="w-9 h-9 rounded-lg bg-blue-900 flex items-center justify-center text-white">
                <Video className="w-4.5 h-4.5" />
              </div>
              <div>
                <p className="font-bold text-sm text-slate-900 leading-tight">
                  Lifetime
                </p>
                <p className="text-xs text-slate-500 leading-tight">
                  Akses tanpa batas waktu
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-blue-950 shadow-2xl overflow-hidden">
            <div className="flex items-center gap-1.5 px-5 pt-4 pb-2">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-teal-500" />
            </div>
            <div className="px-6 pb-8 pt-2 font-mono text-[13px] leading-relaxed text-slate-100">
              <p className="text-slate-400"> Welcome to Jadi Ahli</p>
              <p>
                <span className="text-teal-400">const</span>{" "}
                <span className="text-amber-300">student</span> = {"{"}
              </p>
              <p className="pl-4">
                <span className="text-teal-200">name</span>:{" "}
                <span className="text-orange-300">&apos;Kamu&apos;</span>,
              </p>
              <p className="pl-4">
                <span className="text-teal-200">skill</span>:{" "}
                <span className="text-orange-300">&apos;Pemula&apos;</span>,
              </p>
              <p>{"}"};</p>
              <p className="mt-4">
                <span className="text-teal-400">const</span>{" "}
                <span className="text-amber-300">jadiAhliCourse</span> = {"{"}
              </p>
              <p className="pl-4">
                <span className="text-teal-200">mentor</span>: [
                <span className="text-orange-300">&apos;Rani&apos;</span>,{" "}
                <span className="text-orange-300">&apos;Bimo&apos;</span>,{" "}
                <span className="text-orange-300">&apos;Dewi&apos;</span>],
              </p>
              <p className="pl-4">
                <span className="text-teal-200">access</span>:{" "}
                <span className="text-orange-300">&apos;Selamanya&apos;</span>,
              </p>
              <p className="pl-4">
                <span className="text-teal-200">sertifikat</span>:{" "}
                <span className="text-orange-300">&apos;Resmi&apos;</span>,
              </p>
              <p className="pl-4">
                <span className="text-teal-200">jadiAhli</span>: () =&gt; {"{"}
              </p>
              <p className="pl-8">
                student.skill = <span className="text-orange-300">&apos;Ahli&apos;</span>;
              </p>
              <p className="pl-4">{"}"}</p>
              <p>{"}"};</p>
              <p className="mt-4">
                jadiAhliCourse.<span className="text-teal-200">jadiAhli</span>();
              </p>
              <p className="text-slate-400"> &rarr; Skill : Ahli</p>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-4 z-20 animate-[float_5s_ease-in-out_infinite] [animation-delay:1.2s]">
            <div className="flex items-center gap-3 bg-white shadow-lg rounded-xl px-4 py-3 border border-slate-100">
              <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm text-slate-900 leading-tight">
                  Mentor
                </p>
                <p className="text-xs text-slate-500 leading-tight">
                  Expert di bidangnya
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 right-0 z-20 animate-[float_6s_ease-in-out_infinite] [animation-delay:2.4s]">
            <div className="flex items-center gap-3 bg-slate-900 text-white shadow-lg rounded-xl px-4 py-3">
              <div className="w-9 h-9 rounded-lg bg-amber-400 flex items-center justify-center text-slate-900">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm leading-tight">Sertifikat</p>
                <p className="text-xs text-slate-300 leading-tight">
                  Diakui industri
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bantuan floating button */}
      <Link
        href="#bantuan"
        className="fixed bottom-6 right-6 z-30 inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm px-5 py-3 rounded-full shadow-xl transition-colors"
      >
        <MessageCircle className="w-4 h-4" />
        Bantuan
      </Link>
    </div>
  );
}