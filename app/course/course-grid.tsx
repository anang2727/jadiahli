"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clapperboard, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Course } from "@/types/course";
import courseData from "@/data/courses.json";

const courses: Course[] = courseData as Course[];

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
      <p className="flex items-center gap-2 text-primary text-sm font-semibold tracking-wide mb-3">
        <span className="w-6 h-px bg-primary" />
        SELURUH COURSE
      </p>
      <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 max-w-2xl">
        Pilih program belajar <span className="text-primary">sesuai kebutuhan</span>
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
      <div className="relative h-48 overflow-hidden bg-slate-200">
        <Image
          src="https://placehold.co/600x400"
          alt={course.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        {discountPercent !== null && (
          <Badge className="absolute top-3 right-3 bg-white text-primary hover:bg-white">
            {discountPercent}% Off
          </Badge>
        )}
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-900/70 to-transparent p-4">
          <p className="text-white/90 text-sm font-semibold">
            {course.level} &middot; {course.videoCount}+ video
          </p>
        </div>
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
          className="mt-4 w-full justify-center gap-1.5 border-slate-200 hover:border-primary hover:text-primary"
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
