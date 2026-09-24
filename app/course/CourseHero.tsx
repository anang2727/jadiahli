import type { CSSProperties, FC, SVGProps } from "react";

/**
 * Gambar di sisi kanan hero. Ganti dengan path gambar kamu.
 * Isi string kosong ("") jika tidak ingin menampilkan gambar.
 */
const HERO_IMAGE_SRC: string = "/images/mern.png";
const HERO_IMAGE_ALT = "mern";

/** Pola grid tipis di latar belakang, memudar ke arah bawah. */
const GRID_BACKGROUND: CSSProperties = {
  backgroundImage:
    "linear-gradient(to right, rgba(27,59,93,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(27,59,93,0.06) 1px, transparent 1px)",
  backgroundSize: "54px 54px",
  WebkitMaskImage: "linear-gradient(to bottom, #000 0%, transparent 90%)",
  maskImage: "linear-gradient(to bottom, #000 0%, transparent 90%)",
};

const ArrowRightIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

const CourseHero: FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-12 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={GRID_BACKGROUND}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-360 grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <div className="flex items-center gap-3">
            <span
              className="block h-px w-7"
              style={{ backgroundColor: "var(--primary)" }}
              aria-hidden="true"
            />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-gray-600">
              Course
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-6xl xl:text-[72px]">
            Belajar melalui <span style={{ color: "var(--primary)" }}>video</span>,
            sekali bayar untuk{" "}
            <span style={{ color: "var(--primary)" }}>akses selamanya</span>
          </h1>

          <p className="mt-6 max-w-165 text-base leading-relaxed text-gray-600 sm:text-lg lg:text-[20px] lg:leading-[1.8]">
            Online course kami siap bantu kamu dalam meningkatkan skill yang
            sesuai dengan kebutuhan industri. Kamu bisa belajar kapanpun dan
            dimanapun.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                backgroundColor: "var(--primary)",
                outlineColor: "var(--primary)",
              }}
            >
              Lihat Alur Belajar
              <ArrowRightIcon />
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-xl border border-gray-200 bg-gray-50 px-6 py-4 text-base font-medium text-gray-900 transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gray-400"
            >
              Lihat Seluruh Course
            </a>
          </div>
        </div>

        {HERO_IMAGE_SRC !== "" && (
          <div className="flex justify-center lg:justify-end">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE_SRC}
              alt={HERO_IMAGE_ALT}
              className="h-auto w-full max-w-140 object-contain lg:max-w-full"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseHero;