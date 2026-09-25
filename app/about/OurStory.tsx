import type { FC } from "react";


const OurStory: FC = () => {
  return (
    <section className="w-full bg-[#F7F8F8] px-4 py-12 sm:px-6 md:py-16 lg:px-14 lg:py-24">
      <div className="mx-auto grid max-w-360 grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 xl:gap-24">
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
              Kisah Kami
            </span>
          </div>

          <h2 className="mt-4 text-4xl font-extrabold leading-[1.15] tracking-tight text-gray-900 sm:text-5xl lg:text-[56px]">
            Dari kanal pembelajaran sederhana menjadi{" "}
            <span style={{ color: "var(--primary)" }}>platform edutech</span>
          </h2>
        </div>

        <div className="space-y-4 text-base leading-relaxed text-gray-600 sm:text-lg lg:pt-1 lg:text-[19px] lg:leading-[1.75]">
          <p>
            <strong className="font-semibold text-gray-700">WPU</strong> lahir
            pada 2015 sebagai sebuah kanal YouTube pembelajaran programming yang
            dirintis oleh Sandhika Galih — yang merupakan seorang dosen
            Informatika di Bandung yang ingin membantu mahasiswa di kampus
            untuk mempelajari materi lebih lanjut serta membagikan ilmunya
            kepada lebih banyak orang.
          </p>
          <p>
            Hari demi hari, video demi video, kanal ini tumbuh menjadi tempat
            ribuan pelajar dan profesional menemukan jawaban atas pertanyaan
            tentang HTML, CSS, JavaScript, dan teknologi web modern.
          </p>
          <p>
            Tahun 2024 menandai babak baru, bersama dengan bekas mahasiswa
            bimbingannya yaitu Avip Syaifulloh dan Agung Rizkyana, kami mulai
            membangun WPU Course, platform edutech yang menjadi rumah resmi
            semua pembelajaran kami. Diluncurkan pada 18 Januari 2025, dan
            diresmikan sebagai PT WPU Inovasi Digital pada April 2025.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;