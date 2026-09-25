import type { CSSProperties, FC, SVGProps } from "react";
import { Container } from "@/components/ui/container";

/** Warna blob di belakang ilustrasi (versi terang dari warna utama) */
const BLOB_COLOR = "#DCE7F0";

/** Pola grid tipis di latar belakang, memudar ke arah bawah & kanan. */
const GRID_BACKGROUND: CSSProperties = {
  backgroundImage:
    "linear-gradient(to right, rgba(27,59,93,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(27,59,93,0.06) 1px, transparent 1px)",
  backgroundSize: "54px 54px",
  WebkitMaskImage:
    "radial-gradient(ellipse 90% 80% at 20% 20%, #000 0%, transparent 70%)",
  maskImage:
    "radial-gradient(ellipse 90% 80% at 20% 20%, #000 0%, transparent 70%)",
};

const WhatsAppIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M3 21l1.65-4.9A8.5 8.5 0 1 1 8 19.4L3 21z" />
    <path d="M9 10c0 3 2 5 5 5l1.2-1.4-1.9-1-.9.6a3.3 3.3 0 0 1-1.6-1.6l.6-.9-1-1.9L9 10z" />
  </svg>
);

/**
 * Ilustrasi customer service (laptop + agen berheadset + chat bubble),
 * dibuat sebagai SVG agar tidak bergantung pada file gambar eksternal.
 */
const SupportIllustration: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 520 460" fill="none" aria-hidden="true" {...props}>
    {/* Blob latar */}
    <path
      d="M120 90c70-70 220-90 300-20 70 60 60 150 30 210-30 60-40 130-120 150-90 22-190 10-260-50C0 320-20 220 30 160 55 130 90 120 120 90Z"
      fill={BLOB_COLOR}
    />

    {/* Chat bubble */}
    <g transform="translate(150 60)">
      <path
        d="M0 18c0-9.9 8.1-18 18-18h140c9.9 0 18 8.1 18 18v72c0 9.9-8.1 18-18 18H70l-32 30v-30H18c-9.9 0-18-8.1-18-18V18Z"
        fill="var(--primary)"
      />
      <rect x="24" y="34" width="120" height="10" rx="5" fill="#EAF1F7" />
      <rect x="24" y="56" width="95" height="10" rx="5" fill="#EAF1F7" />
      <rect x="24" y="78" width="70" height="10" rx="5" fill="#EAF1F7" />
    </g>

    {/* Laptop */}
    <g transform="translate(120 230)">
      <rect
        x="0"
        y="0"
        width="280"
        height="170"
        rx="10"
        fill="#F2F3F5"
        stroke="#D7DAE0"
        strokeWidth="2"
      />
      <rect x="14" y="14" width="252" height="142" rx="4" fill="#FFFFFF" />
      <path
        d="M-16 170h312l14 26c2 5-2 10-8 10H-22c-6 0-10-5-8-10l14-26Z"
        fill="#E2E4E8"
      />
    </g>

    {/* Agen (badan + kepala) muncul dari layar laptop */}
    <g transform="translate(190 130)">
      {/* Badan / jaket */}
      <path
        d="M20 260c-4-60 4-120 40-150 14-11 32-16 50-16s36 5 50 16c36 30 44 90 40 150H20Z"
        fill="var(--primary)"
      />
      {/* Kemeja putih */}
      <path
        d="M78 108c8-6 16-10 24-10 2 0 4 0 6 1 4 20 4 40 0 60-2 1-4 1-6 1-8 0-16-4-24-10v-42Z"
        fill="#FFFFFF"
      />
      {/* Lengan kanan melambai */}
      <path
        d="M148 118c22 6 40 24 46 44 2 8-3 15-11 15-6 0-11-4-13-10-4-12-14-22-26-27-5-2-7-8-5-13 2-5 4-9 9-9Z"
        fill="var(--primary)"
      />
      <circle cx="196" cy="180" r="12" fill="#EFC2A0" />

      {/* Kepala */}
      <circle cx="90" cy="55" r="40" fill="#F3C9A4" />
      {/* Rambut */}
      <path
        d="M52 50c-4-28 18-48 42-48 22 0 40 16 42 38 2 14-4 22-10 22-2-14-14-24-30-24-4 8-14 14-26 14-8 0-14 6-18 12-2-6-2-10 0-14Z"
        fill="#E0A24B"
      />
      {/* Headset */}
      <path
        d="M46 46a44 44 0 0 1 88 0"
        stroke="#1F2937"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="38" y="44" width="12" height="22" rx="6" fill="#1F2937" />
      <rect x="126" y="44" width="12" height="22" rx="6" fill="#1F2937" />
      <path
        d="M132 60c10 4 16 14 16 24"
        stroke="#1F2937"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="148" cy="86" r="5" fill="#1F2937" />
    </g>
  </svg>
);

const ContactHero: FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-12 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={GRID_BACKGROUND}
        aria-hidden="true"
      />

      <Container className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
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
              Kontak Kami
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Mari <span style={{ color: "var(--primary)" }}>berdiskusi</span> dan{" "}
            <span style={{ color: "var(--primary)" }}>konsultasi</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Kontak ini dapat digunakan untuk diskusi mengenai kerja sama
            bisnis bersama WPU Course, dan untuk student yang mengalami
            kendala dalam menggunakan platform WPU Course atau ingin
            berkonsultasi terkait course.
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Operasional WPU Course dapat melayani pada hari Senin s/d Jumat
            mulai dari pukul 08.00 s/d 17.00 WIB.
          </p>

          <a
            href="https://wa.me/6285190062005"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl px-6 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              backgroundColor: "var(--primary)",
              outlineColor: "var(--primary)",
            }}
          >
            <WhatsAppIcon />
            Hubungi Kami
          </a>
        </div>

        <div className="flex justify-center lg:justify-end">
          <SupportIllustration className="h-auto w-full max-w-115" />
        </div>
      </Container>
    </section>
  );
};

export default ContactHero;