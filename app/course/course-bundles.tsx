"use client";

import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { CourseBundle } from "@/types/course";
import bundleData from "@/data/course-bundles.json";

const bundles: CourseBundle[] = bundleData as CourseBundle[];

function formatRupiah(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function CourseBundles() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <Card className="bg-linear-to-br from-slate-900 to-slate-950 border-slate-800 rounded-3xl p-8 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Sekarang tersedia kelas bundle
        </h2>
        <p className="mt-2 text-slate-400 max-w-2xl">
          Beli kelas sekaligus lebih hemat, dapatkan akses ke lebih banyak
          materi dengan harga spesial. Cek sekarang dan dapatkan promo
          terbatas!
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {bundles.map((bundle) => (
            <BundleCard key={bundle.slug} bundle={bundle} />
          ))}
        </div>
      </Card>
    </section>
  );
}

function BundleCard({ bundle }: { bundle: CourseBundle }) {
  return (
    <div className="bg-slate-100 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center gap-4">
      <div
        className={`w-full sm:w-40 h-24 shrink-0 rounded-xl bg-linear-to-br ${bundle.gradient} flex items-center justify-center`}
      >
        <Layers className="w-8 h-8 text-white/80" />
      </div>

      <div className="flex-1">
        <h3 className="font-bold text-slate-900">{bundle.title}</h3>
        <p className="text-sm text-slate-600 mt-1">{bundle.description}</p>
        <p className="text-xs font-semibold text-primary mt-2">
          {bundle.courseCount} Course
        </p>
        <p className="mt-2 flex items-baseline gap-2">
          <span className="font-bold text-slate-900">
            {formatRupiah(bundle.price)}
          </span>
          <span className="text-sm text-slate-400 line-through">
            {formatRupiah(bundle.originalPrice)}
          </span>
        </p>
      </div>

      <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto gap-1.5" asChild>
        <Link href={`/checkout/${bundle.slug}`}>
          Beli Sekarang
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Button>
    </div>
  );
}
