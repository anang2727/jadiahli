import type { FC, SVGProps } from "react";

/**
 * Warna utama (sebelumnya hijau/teal) -> #1B3B5D
 * Pastikan Tailwind CSS sudah terpasang di project.
 */
const PRIMARY = "#1B3B5D";

type BootcampStatus = "open" | "soldout";

interface Bootcamp {
  id: string;
  status: BootcampStatus;
  badge: string;
  title: string;
  description: string;
  note: string;
  sessions: string;
  schedule: string;
  detailHref: string;
  consultationHref: string;
}

const BOOTCAMPS: readonly Bootcamp[] = [
  {
    id: "english-for-it-professionals",
    status: "open",
    badge: "Pendaftaran Batch 3",
    title: "English for IT Professionals",
    description:
      "Bootcamp yang siap membantu kamu lebih confident dan professional dalam menggunakan bahasa inggris khusunya dalam bidang IT.",
    note: "*Mulai belajar 9 September 2026",
    sessions: "15x",
    schedule: "Setiap Rabu Jam 19.00 WIB & Sabtu Jam 10.00 WIB",
    detailHref: "#",
    consultationHref: "#",
  },
  {
    id: "uiux-design-masterclass",
    status: "soldout",
    badge: "Batch 1 Sold Out",
    title: "UI/UX Design Masterclass",
    description:
      "Bootcamp yang menawarkan penguatan mindset dan skillset praktis untuk pemahaman mendasar tentang UI/UX design.",
    note: "*Pendaftaran Batch 2 akan dibuka Juli 2026",
    sessions: "20x",
    schedule: "Setiap Selasa, Rabu, Kamis Jam 19.30 WIB",
    detailHref: "#",
    consultationHref: "#",
  },
];

const ArrowRightIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
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

const WhatsAppIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
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

interface BadgeProps {
  status: BootcampStatus;
  label: string;
}

const Badge: FC<BadgeProps> = ({ status, label }) => {
  if (status === "soldout") {
    return (
      <span className="inline-flex items-center rounded-full bg-[#FDE4E4] px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[#B01E1E]">
        {label}
      </span>
    );
  }

  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.08em]"
      style={{ backgroundColor: `${PRIMARY}1A`, color: PRIMARY }}
    >
      {label}
    </span>
  );
};

interface BootcampCardProps {
  bootcamp: Bootcamp;
}

const BootcampCard: FC<BootcampCardProps> = ({ bootcamp }) => {
  const {
    status,
    badge,
    title,
    description,
    note,
    sessions,
    schedule,
    detailHref,
    consultationHref,
  } = bootcamp;

  return (
    <article className="flex flex-col rounded-[28px] border border-gray-200 bg-white p-6 sm:p-8">
      <div>
        <Badge status={status} label={badge} />
      </div>

      <h3
        className="mt-5 text-2xl font-semibold tracking-tight sm:text-[28px] sm:leading-9"
        style={{ color: PRIMARY }}
      >
        {title}
      </h3>

      <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
        {description}
      </p>

      <p className="mt-2 text-[13px] text-[#8A4B1F]">{note}</p>

      <div className="mt-6 border-t border-gray-200 py-4">
        <div className="flex gap-x-6 sm:gap-x-8">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-gray-500">
              Pertemuan
            </p>
            <p className="mt-1.5 text-base font-bold text-gray-900">
              {sessions}
            </p>
          </div>
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-gray-500">
              Jadwal Kelas
            </p>
            <p className="mt-1.5 text-base font-bold text-gray-900">
              {schedule}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 border-t border-gray-200 pt-5">
        <a
          href={detailHref}
          className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ backgroundColor: PRIMARY, outlineColor: PRIMARY }}
        >
          Lihat Detail
          <ArrowRightIcon />
        </a>
        <a
          href={consultationHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
        >
          <WhatsAppIcon />
          Konsultasi Gratis
        </a>
      </div>
    </article>
  );
};

const ActiveBootcampList: FC = () => {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 md:py-14 lg:px-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3">
          <span
            className="block h-px w-6"
            style={{ backgroundColor: PRIMARY }}
            aria-hidden="true"
          />
          <span
            className="font-mono text-[10px] uppercase tracking-[0.18em]"
            style={{ color: PRIMARY }}
          >
            Bootcamp Tersedia
          </span>
        </div>

        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          Live session bersama{" "}
          <span style={{ color: PRIMARY }}>mentor expert</span>
        </h2>

        <p className="mt-3 max-w-3xl text-sm text-gray-600 sm:text-base">
          Program intensif dengan kurikulum praktis dan dilengkapi dengan real
          case project untuk meningkatkan skill kamu.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2">
          {BOOTCAMPS.map((bootcamp) => (
            <BootcampCard key={bootcamp.id} bootcamp={bootcamp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActiveBootcampList;