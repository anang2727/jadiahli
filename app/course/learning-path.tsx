"use client";

import Link from "next/link";
import { ArrowRight, Bot, Layers3, type LucideIcon } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface StepCourse {
  slug: string;
  title: string;
  videoCount: number;
  level: string;
  price?: number;
  originalPrice?: number;
  gradient: string;
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
    tagline: "Integrasi AI & LLM di dalam aplikasi",
    description:
      "Pengembangan aplikasi fokus pada integrasi model kecerdasan buatan (AI/LLM) dan pembuatan aplikasi cerdas.",
    icon: Bot,
    steps: [
      {
        stepLabel: "Langkah 1: Dasar Pemrograman & Dasar AI",
        title: "Belajar Python Agentic AI",
        description:
          "Mulai perjalanan kamu dengan mempelajari bahasa pemrograman Python untuk konsep Agentic AI dan membuat agen chatbot di Telegram.",
        course: {
          slug: "belajar-python-agentic-ai",
          title: "Belajar Python Agentic AI",
          videoCount: 57,
          level: "Beginner",
          price: 298500,
          originalPrice: 1500000,
          gradient: "from-teal-600 via-teal-500 to-blue-900",
        },
      },
      {
        stepLabel: "Langkah 2: Dasar Web Development",
        title: "Belajar Web Dasar",
        description:
          "Pahami dasar-dasar web (HTML, CSS & Framework CSS) agar dapat membuat antarmuka aplikasi AI dengan baik.",
        course: {
          slug: "belajar-web-dasar",
          title: "Belajar Web Dasar",
          videoCount: 100,
          level: "Beginner",
          price: 342000,
          originalPrice: 950000,
          gradient: "from-violet-600 via-purple-600 to-slate-900",
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
          gradient: "from-sky-500 via-blue-600 to-slate-900",
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
          gradient: "from-slate-700 via-slate-800 to-black",
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
          gradient: "from-emerald-500 via-teal-600 to-slate-900",
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
          price: 342000,
          originalPrice: 950000,
          gradient: "from-violet-600 via-purple-600 to-slate-900",
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
          gradient: "from-sky-500 via-blue-600 to-slate-900",
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
          gradient: "from-blue-500 via-cyan-500 to-slate-900",
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
          gradient: "from-slate-700 via-slate-800 to-black",
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
          gradient: "from-teal-600 via-emerald-600 to-slate-900",
        },
      },
    ],
  },
];

function formatRupiah(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function LearningPath() {
  return (
    <section id="alur-belajar" className="max-w-5xl mx-auto px-6 py-20">
      <p className="flex items-center gap-2 text-teal-600 text-sm font-semibold tracking-wide mb-3">
        <span className="w-6 h-px bg-teal-600" />
        ALUR BELAJAR
      </p>
      <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
        Tentukan <span className="text-teal-600">masa depan</span> dengan
        alur belajar yang tepat
      </h2>
      <p className="mt-4 text-lg text-slate-600 max-w-2xl">
        Kami menyediakan alur belajar yang sesuai dengan kebutuhan kamu,
        sehingga lebih tergambarkan terkait course yang perlu dipelajari
        sesuai dengan role yang diinginkan.
      </p>

      <Tabs defaultValue={roadmaps[0].slug} className="mt-10">
        <TabsList className="h-auto bg-transparent p-0 gap-3 flex-wrap justify-start">
          {roadmaps.map((roadmap) => {
            const Icon = roadmap.icon;
            return (
              <TabsTrigger
                key={roadmap.slug}
                value={roadmap.slug}
                className="flex items-center gap-2.5 border border-slate-200 rounded-xl px-4 py-3 text-left data-[state=active]:border-teal-600 data-[state=active]:bg-teal-50 data-[state=active]:shadow-none"
              >
                <Icon className="w-4 h-4 text-teal-600" />
                <span>
                  <span className="block text-sm font-semibold text-slate-900">
                    {roadmap.role}
                  </span>
                  <span className="block text-xs text-slate-500">
                    {roadmap.tagline}
                  </span>
                </span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {roadmaps.map((roadmap) => (
          <TabsContent key={roadmap.slug} value={roadmap.slug} className="mt-8">
            <p className="text-slate-600 mb-8 max-w-2xl">
              {roadmap.description}
            </p>

            <ol className="relative border-l border-slate-200 pl-8 space-y-10">
              {roadmap.steps.map((step) => (
                <li key={step.course.slug} className="relative">
                  <span className="absolute -left-[calc(2rem+5px)] top-0.5 w-3 h-3 rounded-full bg-teal-600 ring-4 ring-teal-50" />

                  <p className="text-xs font-semibold text-teal-700 tracking-wide uppercase">
                    {step.stepLabel}
                  </p>
                  {step.optional && (
                    <Badge
                      variant="secondary"
                      className="ml-2 align-middle bg-slate-100 text-slate-500 hover:bg-slate-100"
                    >
                      Opsional
                    </Badge>
                  )}
                  <h3 className="text-lg font-bold text-slate-900 mt-1">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600 max-w-xl leading-relaxed">
                    {step.description}
                  </p>

                  <StepCourseCard course={step.course} />
                </li>
              ))}
            </ol>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

function StepCourseCard({ course }: { course: StepCourse }) {
  const discountPercent =
    course.price && course.originalPrice
      ? Math.round((1 - course.price / course.originalPrice) * 100)
      : null;

  return (
    <div className="mt-4 flex items-center gap-4 bg-white border border-slate-100 rounded-xl p-3 max-w-lg">
      <div
        className={`relative w-20 h-14 flex-shrink-0 rounded-lg bg-gradient-to-br ${course.gradient}`}
      >
        {discountPercent !== null && (
          <span className="absolute -top-1.5 -right-1.5 bg-white text-teal-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow">
            {discountPercent}% Off
          </span>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-slate-900 truncate">
          {course.title}
        </p>
        <p className="text-xs text-slate-500 mt-0.5">
          {course.videoCount}+ Video &middot; {course.level}
        </p>
        {course.price ? (
          <p className="mt-1 flex items-baseline gap-1.5">
            <span className="text-sm font-bold text-slate-900">
              {formatRupiah(course.price)}
            </span>
            {course.originalPrice && (
              <span className="text-xs text-slate-400 line-through">
                {formatRupiah(course.originalPrice)}
              </span>
            )}
          </p>
        ) : null}
      </div>

      <Link
        href={`/course/${course.slug}`}
        className="flex-shrink-0 inline-flex items-center gap-1 text-teal-600 text-xs font-semibold hover:text-teal-700 transition-colors"
      >
        Lihat Detail
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}
