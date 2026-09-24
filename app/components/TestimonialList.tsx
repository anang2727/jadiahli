import type { CSSProperties, FC } from "react";
import { Container } from "@/components/ui/container";

/** Warna utama -> #1B3B5D */
const PRIMARY = "#1B3B5D";

type MarqueeDirection = "left" | "right";

interface Testimonial {
  id: string;
  name: string;
  quote: string;
}

const TOP_ROW: readonly Testimonial[] = [
  {
    id: "reza-fahlevi",
    name: "Reza Fahlevi",
    quote:
      "Course fullstack javascript paling keren, menggunakan tech stack terupdate, materi sangat profesional dibuat dari 0.",
  },
  {
    id: "justine-hezekiel-ramli",
    name: "Justine Hezekiel Ramli",
    quote:
      "Materi sangat berbobot sangat berguna di industri dan menarik sekali untuk diikuti.",
  },
  {
    id: "eep-syaiful-nurohman",
    name: "Eep Syaiful Nurohman",
    quote:
      "Saya senang dengan video yg ditayangkan cukup lancar dan quality bisa di custom.",
  },
  {
    id: "satrio-adi-prakoso",
    name: "Satrio Adi Prakoso",
    quote:
      "Puas banget selama mengikuti kelas di wpucourse sini, ada sesi tanya jawab juga dan response nya cepat.",
  },
  {
    id: "mario-achmad-taufik",
    name: "Mario Achmad Taufik",
    quote:
      "Puas banget belajar di WPU Course, materi lengkap dan terstruktur, penyampaiannya juga enak jadi mudah dimengerti.",
  },
];

const BOTTOM_ROW: readonly Testimonial[] = [
  {
    id: "febrian-andi-nugroho",
    name: "Febrian Andi Nugroho",
    quote:
      "Materi dan penjelasan dalam video bagus karena dibuat seolah-olah sedang mengerjakan real project dengan tim yang mempunyai role masing-masing.",
  },
  {
    id: "abdurrohman-rifai",
    name: "Abdurrohman Rifai",
    quote:
      "Video nya sangat beginner friendly dan saya yang belum belajar typescript saja sudah agak paham mengenai typescript.",
  },
  {
    id: "fahmi-azzuhri-efki",
    name: "Fahmi Azzuhri Efki",
    quote:
      "Selama saya menggunakan platform WPU Course penyajian video pembelajaran sudah bagus karena materi mudah dimengerti.",
  },
  {
    id: "anang-kurniawan",
    name: "Anang Kurniawan",
    quote:
      "Platform ini memberikan kemudahan dalam mengakses materi dan mendukung proses pembelajaran secara keseluruhan.",
  },
  {
    id: "aditya-dewani",
    name: "Aditya Dewani",
    quote:
      "Kualitas audio video bagus, dan bagi saya yang baru belajar sangat mudah mengerti.",
  },
];

/**
 * Keyframes untuk marquee.
 * Track berisi konten yang diulang 4x, jadi animasi bergeser -50% agar loop mulus.
 */
const MARQUEE_CSS = `
@keyframes testimonial-scroll-left {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@keyframes testimonial-scroll-right {
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
}
.testimonial-track {
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 60s;
  will-change: transform;
}
.testimonial-track[data-direction="left"]  { animation-name: testimonial-scroll-left; }
.testimonial-track[data-direction="right"] { animation-name: testimonial-scroll-right; }
.testimonial-marquee:hover .testimonial-track { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) {
  .testimonial-track { animation: none; }
}
`;

const EDGE_MASK: CSSProperties = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0, #000 3%, #000 97%, transparent 100%)",
  maskImage:
    "linear-gradient(to right, transparent 0, #000 3%, #000 97%, transparent 100%)",
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  hidden: boolean;
}

const TestimonialCard: FC<TestimonialCardProps> = ({ testimonial, hidden }) => (
  <figure
    aria-hidden={hidden}
    className="flex w-70 shrink-0 flex-col rounded-2xl border border-gray-200 bg-white p-5 sm:w-85 sm:p-7 md:w-90"
  >
    <figcaption
      className="text-base font-semibold sm:text-[17px]"
      style={{ color: PRIMARY }}
    >
      {testimonial.name}
    </figcaption>
    <blockquote className="mt-3 text-[15px] leading-relaxed text-gray-700">
      &quot;{testimonial.quote}&quot;
    </blockquote>
  </figure>
);

interface MarqueeRowProps {
  items: readonly Testimonial[];
  direction: MarqueeDirection;
}

const MarqueeRow: FC<MarqueeRowProps> = ({ items, direction }) => {
  // Ulang 2x per setengah track, lalu 2x lagi agar cukup untuk layar lebar.
  const half: readonly Testimonial[] = [...items, ...items];
  const track: readonly Testimonial[] = [...half, ...half];

  return (
    <div className="testimonial-marquee overflow-hidden" style={EDGE_MASK}>
      <div
        className="testimonial-track flex w-max items-stretch gap-4 pr-4 sm:gap-4.5 sm:pr-4.5"
        data-direction={direction}
      >
        {track.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.id}-${index}`}
            testimonial={testimonial}
            hidden={index >= items.length}
          />
        ))}
      </div>
    </div>
  );
};

const TestimonialList: FC = () => {
  return (
    <section className="w-full overflow-hidden bg-white py-12 md:py-16">
      <style>{MARQUEE_CSS}</style>

      <Container>
        <div className="flex items-center gap-3">
          <span
            className="block h-px w-6"
            style={{ backgroundColor: PRIMARY }}
            aria-hidden="true"
          />
          <span
            className="font-mono text-[11px] uppercase tracking-[0.18em]"
            style={{ color: PRIMARY }}
          >
            Testimonial Student
          </span>
        </div>

        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
          Cerita dari mereka yang sudah{" "}
          <span style={{ color: PRIMARY }}>level up</span>
        </h2>
      </Container>

      <div className="mt-10 flex flex-col gap-4 sm:gap-5 md:mt-14">
        {/* Baris atas bergerak ke kiri */}
        <MarqueeRow items={TOP_ROW} direction="left" />
        {/* Baris bawah bergerak ke kanan */}
        <MarqueeRow items={BOTTOM_ROW} direction="right" />
      </div>
    </section>
  );
};

export default TestimonialList;