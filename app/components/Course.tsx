"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Clapperboard, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type CourseStatus = "tersedia" | "segera-hadir";

interface Course {
  slug: string;
  title: string;
  videoCount: number;
  level: string;
  status: CourseStatus;
  price?: number;
  originalPrice?: number;
  gradient: string;
  tag?: string;
}

const courses: Course[] = [
  {
    slug: "belajar-java-dasar",
    title: "Belajar Java Dasar",
    videoCount: 49,
    level: "Beginner",
    status: "segera-hadir",
    gradient: "from-indigo-500 via-purple-500 to-fuchsia-500",
  },
  {
    slug: "cyber-security-fundamental",
    title: "Cyber Security Fundamental",
    videoCount: 25,
    level: "Beginner",
    status: "segera-hadir",
    gradient: "from-slate-800 via-emerald-900 to-slate-800",
  },
  {
    slug: "belajar-python-agentic-ai",
    title: "Belajar Python Agentic AI",
    videoCount: 57,
    level: "Beginner",
    status: "tersedia",
    price: 298500,
    originalPrice: 1500000,
    gradient: "from-teal-600 via-teal-500 to-blue-900",
    tag: "Trending",
  },
  {
    slug: "belajar-golang-dasar",
    title: "Belajar Golang Dasar",
    videoCount: 32,
    level: "Intermediate",
    status: "tersedia",
    price: 349000,
    originalPrice: 899000,
    gradient: "from-cyan-500 via-blue-500 to-blue-900",
  },
];

function formatRupiah(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function Courses() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: "left" | "right") {
    const node = scrollerRef.current;
    if (!node) return;
    const amount = node.clientWidth * 0.8 * (direction === "left" ? -1 : 1);
    node.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="flex items-center gap-2 text-teal-600 text-sm font-semibold tracking-wide mb-3">
              <span className="w-6 h-px bg-teal-600" />
              COURSE TERBARU
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 max-w-3xl">
              Mulai dari fundamental sampai{" "}
              <span className="text-teal-600">AI-powered apps</span>
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByCard("left")}
              aria-label="Sebelumnya"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-teal-600 hover:border-teal-200 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard("right")}
              aria-label="Berikutnya"
              className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white hover:bg-teal-700 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-12 flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 scrollbar-none [&::-webkit-scrollbar]:hidden"
        >
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <Button variant="outline" className="gap-1.5" asChild>
            <Link href="/program">
              Lihat Semua Course
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course }: { course: Course }) {
  const isComingSoon = course.status === "segera-hadir";
  const discountPercent =
    course.price && course.originalPrice
      ? Math.round((1 - course.price / course.originalPrice) * 100)
      : null;

  return (
    <article className="snap-start shrink-0 w-75 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
      <div
        className={`relative h-40 bg-linear-to-br ${course.gradient} flex items-end p-4`}
      >
        {course.tag && (
          <Badge className="absolute top-3 left-3 bg-white/90 text-slate-900 hover:bg-white/90">
            {course.tag}
          </Badge>
        )}
        {discountPercent !== null && (
          <Badge className="absolute top-3 right-3 bg-white text-teal-700 hover:bg-white">
            {discountPercent}% Off
          </Badge>
        )}
        <p className="text-white/90 text-sm font-semibold">
          {course.level} · {course.videoCount}+ video
        </p>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-slate-900 leading-snug">
          {course.title}
        </h3>

        <div className="mt-2 flex items-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <Clapperboard className="w-3.5 h-3.5" />
            {course.videoCount}+ Video
          </span>
          <span className="flex items-center gap-1.5">
            <Gauge className="w-3.5 h-3.5" />
            {course.level}
          </span>
        </div>

        <div className="mt-4 pt-4 border-t border-dashed border-slate-200">
          {isComingSoon ? (
            <p className="font-bold text-slate-900">Segera Hadir</p>
          ) : (
            <p className="flex items-baseline gap-2">
              <span className="font-bold text-slate-900">
                {formatRupiah(course.price ?? 0)}
              </span>
              {course.originalPrice && (
                <span className="text-sm text-slate-400 line-through">
                  {formatRupiah(course.originalPrice)}
                </span>
              )}
            </p>
          )}
        </div>

        <Button
          variant="outline"
          className="mt-4 w-full justify-center gap-1.5 border-slate-200 hover:border-teal-600 hover:text-teal-700"
          asChild
        >
          <Link href={`/course/${course.slug}`}>
            Lihat Detail
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </article>
  );
}