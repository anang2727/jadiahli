"use client";

import { useId, useState } from "react";
import type { FC, SVGProps } from "react";
import { Container } from "@/components/ui/container";
import type { FaqItem } from "@/types/faq";

/** Warna utama -> #1B3B5D */

/**
 * Jawaban di bawah ini hanya contoh (placeholder) karena gambar
 * hanya menampilkan pertanyaannya. Silakan ganti sesuai kebutuhan.
 */
const FAQS: readonly FaqItem[] = [
  {
    id: "online",
    question: "Apakah pembelajaran dilakukan secara online?",
    answer:
      "Ya, seluruh pembelajaran dilakukan secara online sehingga kamu bisa belajar dari mana saja selama terhubung dengan internet.",
  },
  {
    id: "jadwal",
    question: "Apakah ada jadwal belajar yang tetap untuk course?",
    answer:
      "Untuk course, kamu bisa belajar kapan saja sesuai waktu luangmu. Jadwal tetap hanya berlaku pada program bootcamp yang memiliki live session.",
  },
  {
    id: "proses",
    question: "Bagaimana proses pembelajarannya?",
    answer:
      "Kamu akan belajar melalui video materi yang terstruktur, latihan praktik, serta real case project. Kamu juga bisa bertanya langsung jika menemui kendala.",
  },
  {
    id: "tatap-muka",
    question: "Apakah ada sesi tatap muka online dengan mentor?",
    answer:
      "Ada. Program bootcamp menyediakan live session bersama mentor expert, termasuk sesi tanya jawab untuk membahas materi dan project.",
  },
  {
    id: "diunduh",
    question: "Apakah materi pembelajaran dapat diunduh?",
    answer:
      "Materi dapat diakses kapan saja melalui platform. Untuk ketentuan unduhan materi, silakan hubungi tim kami melalui konsultasi gratis.",
  },
];

const ChevronDownIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

interface FaqRowProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: (id: string) => void;
  baseId: string;
}

const FaqRow: FC<FaqRowProps> = ({ item, isOpen, onToggle, baseId }) => {
  const buttonId = `${baseId}-btn-${item.id}`;
  const panelId = `${baseId}-panel-${item.id}`;

  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => onToggle(item.id)}
          className="flex w-full items-center justify-between gap-4 rounded-xl px-5 py-5 text-left text-base font-medium text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 sm:px-7 sm:text-[17px]"
          style={{ outlineColor: "var(--primary)" }}
        >
          <span>{item.question}</span>
          <ChevronDownIcon
            className={`shrink-0 text-gray-900 transition-transform duration-300 motion-reduce:transition-none ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows,visibility] duration-300 motion-reduce:transition-none ${
          isOpen ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-[15px] leading-relaxed text-gray-600 sm:px-7">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FaqSection: FC = () => {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string): void => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 md:py-14 lg:px-10">
      <Container>
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
            FAQ
          </span>
        </div>

        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          Pertanyaan yang{" "}
          <span style={{ color: "var(--primary)" }}>sering ditanyakan</span>
        </h2>

        <div className="mt-8 flex flex-col gap-3 md:mt-12 md:gap-4.5">
          {FAQS.map((item) => (
            <FaqRow
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={handleToggle}
              baseId={baseId}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;