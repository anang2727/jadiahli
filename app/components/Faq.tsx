"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Apakah pembelajaran dilakukan secara online?",
    answer:
      "Ya, seluruh pembelajaran di Jadi Ahli dilakukan secara online melalui platform kami, jadi kamu bisa belajar dari mana saja selama terhubung internet.",
  },
  {
    question: "Apakah ada jadwal belajar yang tetap untuk course?",
    answer:
      "Untuk online course, tidak ada jadwal tetap — kamu bisa belajar kapan saja sesuai kecepatanmu sendiri. Untuk bootcamp, jadwal live session akan diinformasikan di awal program.",
  },
  {
    question: "Bagaimana proses pembelajarannya?",
    answer:
      "Kamu akan belajar lewat modul video, materi bacaan, dan latihan project di setiap course. Untuk bootcamp, ditambah dengan sesi live bersama mentor dan diskusi kelompok.",
  },
  {
    question: "Apakah ada sesi tatap muka online dengan mentor?",
    answer:
      "Ada. Beberapa program menyediakan sesi live tatap muka online bersama mentor untuk konsultasi materi maupun review project.",
  },
  {
    question: "Apakah materi pembelajaran dapat diunduh?",
    answer:
      "Sebagian besar materi seperti slide dan modul bacaan dapat diunduh, sementara video pembelajaran hanya dapat diakses melalui platform Jadi Ahli.",
  },
  {
    question: "Apakah ada batasan waktu akses untuk program ini?",
    answer:
      "Tidak ada. Setelah membeli course, kamu mendapatkan akses selamanya sehingga bisa belajar ulang kapan pun dibutuhkan.",
  },
  {
    question: "Bagaimana jika saya mengalami kesulitan selama proses pembelajaran?",
    answer:
      "Kamu bisa bertanya langsung ke mentor melalui fitur diskusi, atau memanfaatkan AI Assistant yang tersedia di platform untuk membantu memahami materi kapan saja.",
  },
  {
    question: "Apakah ada grup khusus untuk berinteraksi dengan sesama member?",
    answer:
      "Ada. Setiap student akan mendapatkan akses ke komunitas Jadi Ahli untuk berdiskusi, berbagi progres, dan berjejaring dengan sesama pembelajar.",
  },
];

export default function Faq() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <p className="flex items-center gap-2 text-teal-600 text-sm font-semibold tracking-wide mb-3">
        <span className="w-6 h-px bg-teal-600" />
        FAQ
      </p>
      <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
        Pertanyaan yang <span className="text-teal-600">sering ditanyakan</span>
      </h2>

      <Accordion type="single" collapsible className="mt-10 space-y-3">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={item.question}
            value={`item-${index}`}
            className="border border-slate-200 rounded-xl px-5 data-[state=open]:border-teal-200"
          >
            <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline py-5">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 leading-relaxed pb-5">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}