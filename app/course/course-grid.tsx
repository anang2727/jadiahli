"use client";

import Link from "next/link";
import { ArrowRight, Clapperboard, Gauge } from "lucide-react";
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
  },
  {
    slug: "ai-powered-apps-fundamental",
    title: "AI Powered Apps Fundamental",
    videoCount: 49,
    level: "Advanced",
    status: "tersedia",
    price: 349500,
    originalPrice: 1500000,
    gradient: "from-emerald-500 via-teal-600 to-slate-900",
  },
  {
    slug: "belajar-web-dasar",
    title: "Belajar Web Dasar",
    videoCount: 100,
    level: "Beginner",
    status: "tersedia",
    price: 342000,
    originalPrice: 950000,
    gradient: "from-violet-600 via-purple-600 to-slate-900",
  },
  {
    slug: "recording-react-bootcamp",
    title: "Recording React Bootcamp",
    videoCount: 10,
    level: "Beginner",
    status: "tersedia",
    price: 150000,
    originalPrice: 750000,
    gradient: "from-sky-500 via-blue-600 to-slate-900",
  },
  {
    slug: "fullstack-go-reactjs",
    title: "Fullstack Go ReactJS: Sistem Project Management",
    videoCount: 195,
    level: "Intermediate",
    status: "tersedia",
    price: 345000,
    originalPrice: 1500000,
    gradient: "from-blue-500 via-cyan-500 to-slate-900",
  },
  {
    slug: "fullstack-nextjs",
    title: "Full Stack Next JS: Realtime Point Of Sale Apps",
    videoCount: 67,
    level: "Intermediate",
    status: "tersedia",
    price: 300000,
    originalPrice: 1500000,
    gradient: "from-slate-700 via-slate-800 to-black",
  },
  {
    slug: "belajar-laravel",
    title: "Belajar Laravel",
    videoCount: 162,
    level: "Intermediate",
    status: "tersedia",
    price: 390000,
    originalPrice: 1500000,
    gradient: "from-red-500 via-rose-600 to-slate-900",
  },
  {
    slug: "belajar-mern-stack",
    title: "Belajar MERN Stack",
    videoCount: 123,
    level: "Intermediate",
    status: "tersedia",
    price: 330000,
    originalPrice: 1500000,
    gradient: "from-teal-600 via-emerald-600 to-slate-900",
  },
];

function formatRupiah(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function CourseGrid() {
  return (
    <section id="seluruh-course" className="max-w-7xl mx-auto px-6 py-20">
      <p className="flex items-center gap-2 text-teal-600 text-sm font-semibold tracking-wide mb-3">
        <span className="w-6 h-px bg-teal-600" />
        SELURUH COURSE
      </p>
      <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 max-w-2xl">
        Pilih program belajar <span className="text-teal-600">sesuai kebutuhan</span>
      </h2>
      <p className="mt-4 text-lg text-slate-600 max-w-2xl">
        Kami menyediakan berbagai macam course yang dapat membantu kamu
        mengembangkan kemampuan dan keterampilan, mulai dari fundamental
        hingga advanced.
      </p>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
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
    <article className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
      <div
        className={`relative h-40 bg-gradient-to-br ${course.gradient} flex items-end p-4`}
      >
        {discountPercent !== null && (
          <Badge className="absolute top-3 right-3 bg-white text-teal-700 hover:bg-white">
            {discountPercent}% Off
          </Badge>
        )}
        <p className="text-white/90 text-sm font-semibold">
          {course.level} &middot; {course.videoCount}+ video
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
