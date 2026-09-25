"use client";

import { useId, useMemo, useState } from "react";
import type { FC, SVGProps } from "react";
import { Container } from "@/components/ui/container";
import type { FaqCategory, FaqItem } from "@/types/faq";
import faqData from "@/data/faqs.json";

const FAQ_CATEGORIES: readonly FaqCategory[] = faqData as FaqCategory[];
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

const SearchIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
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

const ALL_CATEGORY_ID = "semua";

const FaqPage: FC = () => {
  const baseId = useId();
  const [activeCategoryId, setActiveCategoryId] =
    useState<string>(ALL_CATEGORY_ID);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string): void => {
    setOpenId((current) => (current === id ? null : id));
  };

  const filteredCategories = useMemo<readonly FaqCategory[]>(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return FAQ_CATEGORIES.map((category) => ({
      ...category,
      items: category.items.filter((item) => {
        const matchesCategory =
          activeCategoryId === ALL_CATEGORY_ID ||
          category.id === activeCategoryId;
        const matchesSearch =
          normalizedSearch === "" ||
          item.question.toLowerCase().includes(normalizedSearch) ||
          item.answer.toLowerCase().includes(normalizedSearch);

        return matchesCategory && matchesSearch;
      }),
    })).filter((category) => category.items.length > 0);
  }, [activeCategoryId, searchTerm]);

  const totalResults = filteredCategories.reduce(
    (total, category) => total + category.items.length,
    0,
  );

  return (
    <main className="w-full bg-white py-10 md:py-14">
      <Container className="max-w-250">
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

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          Pertanyaan yang{" "}
          <span style={{ color: "var(--primary)" }}>sering ditanyakan</span>
        </h1>

        <p className="mt-3 max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
          Cari jawaban seputar pembelajaran, pembayaran, sertifikat, hingga
          kendala teknis di WPU Course. Tidak menemukan jawabannya? Hubungi
          tim kami langsung.
        </p>

        {/* Pencarian */}
        <div className="relative mt-8">
          <SearchIcon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Cari pertanyaan, mis. 'sertifikat' atau 'pembayaran'"
            className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus-visible:ring-2 sm:text-base"
            style={{ ["--tw-ring-color" as string]: "var(--primary)" }}
          />
        </div>

        {/* Filter kategori */}
        <div className="mt-5 flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={() => setActiveCategoryId(ALL_CATEGORY_ID)}
            className="rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            style={
              activeCategoryId === ALL_CATEGORY_ID
                ? {
                    backgroundColor: "var(--primary)",
                    color: "var(--primary-foreground)",
                  }
                : { backgroundColor: "#F1F3F5", color: "#374151" }
            }
          >
            Semua
          </button>
          {FAQ_CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategoryId(category.id)}
              className="rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
              style={
                activeCategoryId === category.id
                  ? {
                      backgroundColor: "var(--primary)",
                      color: "var(--primary-foreground)",
                    }
                  : { backgroundColor: "#F1F3F5", color: "#374151" }
              }
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Daftar FAQ */}
        <div className="mt-10 flex flex-col gap-10">
          {totalResults === 0 && (
            <p className="rounded-xl border border-dashed border-gray-300 px-6 py-10 text-center text-sm text-gray-500">
              Tidak ada pertanyaan yang cocok dengan pencarianmu. Coba kata
              kunci lain.
            </p>
          )}

          {filteredCategories.map((category) => (
            <div key={category.id}>
              {activeCategoryId === ALL_CATEGORY_ID && (
                <h2 className="mb-4 text-lg font-semibold text-gray-900">
                  {category.label}
                </h2>
              )}
              <div className="flex flex-col gap-3">
                {category.items.map((item) => (
                  <FaqRow
                    key={item.id}
                    item={item}
                    isOpen={openId === item.id}
                    onToggle={handleToggle}
                    baseId={baseId}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA bawah */}
        <div className="mt-14 flex flex-col items-start gap-4 rounded-2xl border border-gray-200 bg-[#F7F8F8] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-base font-semibold text-gray-900 sm:text-lg">
              Masih ada yang ingin ditanyakan?
            </p>
            <p className="mt-1 text-sm text-gray-600">
              Tim kami siap membantu lewat WhatsApp atau email.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              backgroundColor: "var(--primary)",
              outlineColor: "var(--primary)",
            }}
          >
            Hubungi Kami
          </a>
        </div>
      </Container>
    </main>
  );
};

export default FaqPage;