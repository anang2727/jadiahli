"use client";

import { useState } from "react";
import type { FC, SVGProps } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Cpu,
  Layers3,
  Video,
  type LucideIcon,
} from "lucide-react";

/** Foto placeholder. Ganti dengan URL/path gambar asli di data `roadmaps`. */
const placeholderImage = (label: string, bgHex: string): string =>
  `https://placehold.co/420x240/${bgHex}/FFFFFF/png?text=${encodeURIComponent(
    label,
  )}`;

interface StepCourse {
  slug: string;
  title: string;
  videoCount: number;
  level: string;
  price?: number;
  originalPrice?: number;
  imageSrc: string;
}

interface RoadmapStep {
  stepLabel: string;
  title: string;
  description: string;
  optional?: boolean;
  course: StepCourse;
}

interface Roadmap {
  slug: string;
  role: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  steps: RoadmapStep[];
}

const roadmaps: Roadmap[] = [
  {
    slug: "ai-engineer",
    role: "AI Engineer",
    tagline: "Integrasi AI & LLM di dalam Aplikasi",
    description:
      "Pengembangan aplikasi fokus pada integrasi model kecerdasan buatan (AI/LLM) dan pembuatan aplikasi cerdas.",
    icon: Cpu,
    steps: [
      {
        stepLabel: "Langkah 1: Dasar Pemrograman & Dasar Agentic AI",
        title: "Belajar Python Agentic AI",
        description:
          "Mulai perjalanan AI kamu dengan mempelajari bahasa pemrograman Python dan konsep Agentic AI untuk membuat agen cerdas (Chatbot Telegram).",
        course: {
          slug: "belajar-python-agentic-ai",
          title: "Belajar Python Agentic AI",
          videoCount: 67,
          level: "Beginner",
          price: 249000,
          originalPrice: 1500000,
          imageSrc: placeholderImage("Belajar Python Agentic AI", "0F2A44"),
        },
      },
      {
        stepLabel: "Langkah 2: Dasar Web Development",
        title: "Belajar Web Dasar",
        description:
          "Pahami dasar-dasar web (HTML, CSS & Framework CSS) agar dapat membuat antarmuka untuk aplikasi AI.",
        course: {
          slug: "belajar-web-dasar",
          title: "Belajar Web Dasar",
          videoCount: 100,
          level: "Beginner",
          price: 199500,
          originalPrice: 950000,
          imageSrc: placeholderImage("Belajar Web Fundamental", "4C1D95"),
        },
      },
      {
        stepLabel: "Langkah 3: Library Frontend Modern (React)",
        title: "Recording React Bootcamp",
        description:
          "Pelajari JavaScript untuk React dan dasar-dasar library sebagai interface frontend yang terpopuler untuk membangun antarmuka aplikasi AI.",
        course: {
          slug: "recording-react-bootcamp",
          title: "Recording React Bootcamp",
          videoCount: 10,
          level: "Beginner",
          price: 150000,
          originalPrice: 750000,
          imageSrc: placeholderImage("React Bootcamp", "1D4ED8"),
        },
      },
      {
        stepLabel: "Langkah 4: Meta-Framework Fullstack",
        title: "Full Stack Next JS: Realtime Point Of Sale Apps",
        description:
          "Bangun aplikasi fullstack yang scalable dengan Next.js untuk mengintegrasikan servis backend dan database modern (Supabase).",
        optional: true,
        course: {
          slug: "fullstack-nextjs",
          title: "Full Stack Next JS: Realtime Point Of Sale Apps",
          videoCount: 67,
          level: "Intermediate",
          price: 300000,
          originalPrice: 1500000,
          imageSrc: placeholderImage("Full Stack Next JS", "1F2937"),
        },
      },
      {
        stepLabel: "Langkah 5: Integrasi LLM & AI ke dalam Aplikasi",
        title: "AI Powered Apps Fundamental",
        description:
          "Pelajari cara mengintegrasikan AI/LLM (Large Language Model) ke dalam aplikasi nyata, menggunakan API prompt engineering, dan vector database.",
        course: {
          slug: "ai-powered-apps-fundamental",
          title: "AI Powered Apps Fundamental",
          videoCount: 49,
          level: "Advanced",
          price: 349500,
          originalPrice: 1500000,
          imageSrc: placeholderImage("AI Powered Apps", "0E7490"),
        },
      },
    ],
  },
  {
    slug: "fullstack-web-developer",
    role: "Fullstack Web Developer",
    tagline: "Pengembangan Web Menyeluruh",
    description:
      "Pengembangan aplikasi web dari sisi tampilan (frontend) hingga sisi server dan basis data (backend) secara menyeluruh.",
    icon: Layers3,
    steps: [
      {
        stepLabel: "Langkah 1: Dasar Web Development",
        title: "Belajar Web Dasar",
        description:
          "Pahami dasar-dasar web (HTML, CSS & Framework CSS) sebagai fondasi sebelum masuk ke framework modern.",
        course: {
          slug: "belajar-web-dasar",
          title: "Belajar Web Dasar",
          videoCount: 100,
          level: "Beginner",
          price: 199500,
          originalPrice: 950000,
          imageSrc: placeholderImage("Belajar Web Fundamental", "4C1D95"),
        },
      },
      {
        stepLabel: "Langkah 2: Library Frontend Modern (React)",
        title: "Recording React Bootcamp",
        description:
          "Pelajari JavaScript untuk React dan dasar-dasar library frontend terpopuler untuk membangun antarmuka aplikasi modern.",
        course: {
          slug: "recording-react-bootcamp",
          title: "Recording React Bootcamp",
          videoCount: 10,
          level: "Beginner",
          price: 150000,
          originalPrice: 750000,
          imageSrc: placeholderImage("React Bootcamp", "1D4ED8"),
        },
      },
      {
        stepLabel: "Langkah 3: Fullstack dengan Sistem Project",
        title: "Fullstack Go ReactJS: Sistem Project Management",
        description:
          "Bangun sistem manajemen project fullstack menggunakan Go sebagai backend dan React sebagai frontend.",
        course: {
          slug: "fullstack-go-reactjs",
          title: "Fullstack Go ReactJS: Sistem Project Management",
          videoCount: 195,
          level: "Intermediate",
          price: 345000,
          originalPrice: 1500000,
          imageSrc: placeholderImage("Fullstack Go ReactJS", "0369A1"),
        },
      },
      {
        stepLabel: "Langkah 4: Meta-Framework Fullstack",
        title: "Full Stack Next JS: Realtime Point Of Sale Apps",
        description:
          "Bangun aplikasi fullstack yang scalable dengan Next.js, mengintegrasikan backend dan database secara realtime.",
        course: {
          slug: "fullstack-nextjs",
          title: "Full Stack Next JS: Realtime Point Of Sale Apps",
          videoCount: 67,
          level: "Intermediate",
          price: 300000,
          originalPrice: 1500000,
          imageSrc: placeholderImage("Full Stack Next JS", "1F2937"),
        },
      },
      {
        stepLabel: "Langkah 5: Stack Alternatif (MERN)",
        title: "Belajar MERN Stack",
        description:
          "Perluas kemampuan fullstack kamu dengan mempelajari stack alternatif MongoDB, Express, React, dan Node.js.",
        optional: true,
        course: {
          slug: "belajar-mern-stack",
          title: "Belajar MERN Stack",
          videoCount: 123,
          level: "Intermediate",
          price: 330000,
          originalPrice: 1500000,
          imageSrc: placeholderImage("Belajar MERN Stack", "115E59"),
        },
      },
    ],
  },
];

const formatRupiah = (value: number): string =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

/** 83.4% -> "83.4", 79.0% -> "79" */
const formatDiscount = (price: number, originalPrice: number): string =>
  String(Number(((1 - price / originalPrice) * 100).toFixed(1)));

const LevelIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <rect x="3" y="14" width="4" height="7" rx="1" opacity="0.55" />
    <rect x="10" y="9" width="4" height="12" rx="1" opacity="0.75" />
    <rect x="17" y="3" width="4" height="18" rx="1" />
  </svg>
);

interface StepCourseCardProps {
  course: StepCourse;
}

const StepCourseCard: FC<StepCourseCardProps> = ({ course }) => {
  const { price, originalPrice } = course;
  const hasPrice = price !== undefined && price > 0;
  const hasDiscount =
    hasPrice && originalPrice !== undefined && originalPrice > 0;

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-3 sm:flex-row sm:items-stretch">
      <div className="relative aspect-7/4 w-full shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:aspect-auto sm:h-30 sm:w-52.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={course.imageSrc}
          alt={course.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {hasDiscount && price !== undefined && originalPrice !== undefined && (
          <span className="absolute bottom-2 right-2 rounded-full bg-white px-2.5 py-0.5 text-[11px] font-bold text-gray-900 shadow">
            {formatDiscount(price, originalPrice)}% Off
          </span>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between py-1 pr-1 sm:pr-3">
        <div>
          <p className="text-base font-medium text-gray-900">{course.title}</p>
          <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
            <span className="inline-flex items-center gap-1.5">
              <Video
                className="h-3.5 w-3.5"
                style={{ color: "var(--primary)" }}
                aria-hidden="true"
              />
              {course.videoCount}+ Video
            </span>
            <span className="inline-flex items-center gap-1.5">
              <LevelIcon style={{ color: "var(--primary)" }} />
              {course.level}
            </span>
          </p>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-gray-200 pt-3">
          {hasPrice && price !== undefined ? (
            <p className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-gray-900">
                {formatRupiah(price)}
              </span>
              {originalPrice !== undefined && (
                <span className="text-xs text-gray-400 line-through">
                  {formatRupiah(originalPrice)}
                </span>
              )}
            </p>
          ) : (
            <span />
          )}

          <Link
            href={`/course/${course.slug}`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-xs font-medium text-gray-900 transition-colors hover:bg-gray-50 focus-visible:outline focus-visible:outline-offset-2"
            style={{ outlineColor: "var(--primary)" }}
          >
            Lihat Detail
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const LearningPath: FC = () => {
  const [activeSlug, setActiveSlug] = useState<string>(roadmaps[0].slug);
  const activeRoadmap: Roadmap =
    roadmaps.find((roadmap) => roadmap.slug === activeSlug) ?? roadmaps[0];

  return (
    <section
      id="alur-belajar"
      className="mx-auto w-full max-w-360 px-4 py-10 sm:px-6 md:py-14 lg:px-10"
    >
      <div className="flex items-center gap-3">
        <span
          className="block h-px w-7"
          style={{ backgroundColor: "var(--primary)" }}
          aria-hidden="true"
        />
        <span
          className="font-mono text-[11px] uppercase tracking-[0.18em]"
          style={{ color: "var(--primary)" }}
        >
          Alur Belajar
        </span>
      </div>

      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
        Tentukan <span style={{ color: "var(--primary)" }}>masa depan</span> dengan{" "}
        <span style={{ color: "var(--primary)" }}>alur belajar</span> yang tepat
      </h2>

      <p className="mt-3 max-w-4xl text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
        Kami menyediakan alur belajar yang sesuai dengan kebutuhan kamu.
        Sehingga lebih tergambarkan terkait course yang perlu dipelajari sesuai
        dengan role yang diinginkan.
      </p>

      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Pilih role"
        className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        {roadmaps.map((roadmap) => {
          const Icon = roadmap.icon;
          const isActive = roadmap.slug === activeSlug;

          return (
            <button
              key={roadmap.slug}
              id={`tab-${roadmap.slug}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${roadmap.slug}`}
              onClick={() => setActiveSlug(roadmap.slug)}
              className={`flex items-center gap-4 rounded-2xl border px-3 py-3 text-left transition-all focus-visible:outline-2 focus-visible:outline-offset-2 ${
                isActive
                  ? "bg-primary/6 shadow-md"
                  : "border-gray-200 bg-white hover:bg-gray-50"
              }`}
              style={
                isActive
                  ? {
                      borderColor: "var(--primary)",
                      outlineColor: "var(--primary)",
                    }
                  : { outlineColor: "var(--primary)" }
              }
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                  isActive ? "text-white" : "bg-gray-100 text-gray-500"
                }`}
                style={
                  isActive
                    ? { backgroundColor: "var(--primary)" }
                    : undefined
                }
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-base font-semibold leading-tight text-gray-900">
                  {roadmap.role}
                </span>
                <span className="mt-1 block text-xs text-gray-500">
                  {roadmap.tagline}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <div
        role="tabpanel"
        id={`panel-${activeRoadmap.slug}`}
        aria-labelledby={`tab-${activeRoadmap.slug}`}
        className="mt-8"
      >
        <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-[#F3F6F8] p-5 sm:p-6">
          <span
            className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center opacity-60"
            style={{ color: "var(--primary)" }}
          >
            <Compass className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-base font-semibold text-gray-900">
              Alur Belajar {activeRoadmap.role}
            </h3>
            <p className="mt-1.5 text-sm text-gray-600">
              {activeRoadmap.description}
            </p>
          </div>
        </div>

        <ol className="relative mt-10">
          <span
            className="absolute bottom-0 left-3.25 top-2 w-px bg-gray-200"
            aria-hidden="true"
          />
          {activeRoadmap.steps.map((step, index) => (
            <li
              key={step.course.slug}
              className="relative pb-10 pl-11 last:pb-0 sm:pl-14"
            >
              <span
                className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white ring-4 ring-white"
                style={{ backgroundColor: "var(--primary)" }}
              >
                {index + 1}
              </span>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
                <div>
                  <p
                    className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em]"
                    style={{ color: "var(--primary)" }}
                  >
                    {step.stepLabel}
                    {step.optional && (
                      <span className="ml-2 rounded-full bg-gray-100 px-2 py-0.5 align-middle font-sans text-[10px] font-medium normal-case tracking-normal text-gray-500">
                        Opsional
                      </span>
                    )}
                  </p>
                  <h4 className="mt-2 text-xl font-semibold text-gray-900">
                    {step.title}
                  </h4>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>

                <StepCourseCard course={step.course} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default LearningPath;