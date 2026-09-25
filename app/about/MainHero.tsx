import type { CSSProperties, FC } from "react";
import type { CompanyInfo } from "@/types/content";
import globalData from "@/data/global.json";

/** Warna utama -> #1B3B5D */

const COMPANY_INFO: readonly CompanyInfo[] = globalData.companyInfo as CompanyInfo[];

/** Pola grid tipis di latar belakang, memudar ke arah bawah. */
const GRID_BACKGROUND: CSSProperties = {
  backgroundImage:
    "linear-gradient(to right, rgba(27,59,93,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(27,59,93,0.06) 1px, transparent 1px)",
  backgroundSize: "54px 54px",
  WebkitMaskImage: "linear-gradient(to bottom, #000 0%, transparent 85%)",
  maskImage: "linear-gradient(to bottom, #000 0%, transparent 85%)",
};

const MainHero: FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 pb-10 pt-12 sm:px-6 md:pt-16 lg:px-10 lg:pt-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={GRID_BACKGROUND}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-360">
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
            Tentang Kami
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-6xl lg:text-6xl">
          Membentuk talenta digital,
          <br className="hidden lg:block" />{" "}
          <span style={{ color: "var(--primary)" }}>menyebarkan ilmu</span> ke seluruh
          <br className="hidden lg:block" /> penjuru negeri.
        </h1>

        <div className="mt-10 border-t border-gray-200 pt-8 md:mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[2.13fr_1fr_1fr] lg:gap-10">
            <p className="max-w-165 text-base leading-relaxed text-gray-600 sm:text-lg lg:text-[19px] lg:leading-[1.9]">
              WPU Course adalah platform edutech yang berdiri di atas fondasi
              komunitas dan pengalaman puluhan tahun. Dari kanal YouTube
              edukasi sederhana di tahun 2015, kami berkembang menjadi platform
              yang mengantarkan ribuan student menuju karir digital yang
              membanggakan.
            </p>

            {COMPANY_INFO.map((info) => (
              <dl key={info.label} className="lg:pt-1">
                <dt
                  className="font-mono text-[11px] uppercase tracking-[0.18em]"
                  style={{ color: "var(--primary)" }}
                >
                  {info.label}
                </dt>
                <dd className="mt-3 text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
                  {info.value}
                </dd>
              </dl>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHero;