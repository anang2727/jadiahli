import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarClock,
  GraduationCap,
  Layers,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { bootcamps, getBootcampBySlug } from "@/app/lib/bootcamps";

interface BootcampDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams(): { slug: string }[] {
  return bootcamps.map((bootcamp) => ({ slug: bootcamp.slug }));
}

export async function generateMetadata({
  params,
}: BootcampDetailPageProps) {
  const { slug } = await params;
  const bootcamp = getBootcampBySlug(slug);

  return {
    title: bootcamp ? `${bootcamp.title} | Bootcamp` : "Bootcamp tidak ditemukan",
    description: bootcamp?.description,
  };
}

export default async function BootcampDetailPage({
  params,
}: BootcampDetailPageProps) {
  const { slug } = await params;
  const bootcamp = getBootcampBySlug(slug);

  if (!bootcamp) {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-14">
      <Link
        href="/#program-bootcamp"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Kembali ke semua bootcamp
      </Link>

      <div
        className={`relative mt-6 rounded-3xl bg-linear-to-br ${bootcamp.gradient} p-8 sm:p-12`}
      >
        <GraduationCap className="w-10 h-10 text-white" />

        <div className="mt-6 flex flex-wrap items-center gap-3">
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

        <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white leading-tight">
          {bootcamp.bannerTitle}
        </h1>
        <p className="mt-2 text-white/80 text-base sm:text-lg">
          {bootcamp.bannerSubtitle}
        </p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            {bootcamp.title}
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            {bootcamp.description}
          </p>
          <p className="mt-3 text-sm text-orange-600 italic">
            {bootcamp.note}
          </p>
        </div>

        <aside className="rounded-2xl border border-slate-100 bg-slate-50 p-6 h-fit">
          <dl className="space-y-5">
            <div className="flex items-start gap-3">
              <Layers className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Pertemuan
                </dt>
                <dd className="font-bold text-slate-900">
                  {bootcamp.sessionCount}x
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CalendarClock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Jadwal Kelas
                </dt>
                <dd className="font-semibold text-slate-800">
                  {bootcamp.schedule}
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-6 flex flex-col gap-3">
            <Button className="bg-primary hover:bg-primary/90 w-full">
              Daftar Sekarang
            </Button>
            <Button
              variant="secondary"
              className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 gap-1.5 w-full"
              asChild
            >
              <Link href="#konsultasi">
                <MessageCircle className="w-4 h-4" />
                Konsultasi Gratis
              </Link>
            </Button>
          </div>
        </aside>
      </div>
    </main>
  );
}