import type { FC } from "react";

const PRIMARY = "#1B3B5D";

interface ContactItem {
  id: string;
  label: string;
  value: string;
  /** Jika diisi, nilai akan dirender sebagai link. */
  href?: string;
  external?: boolean;
}

const CONTACTS: readonly ContactItem[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "+62 851 9006 2005",
    href: "https://wa.me/6285190062005",
    external: true,
  },
  {
    id: "email",
    label: "Email",
    value: "info@wpucourse.id",
    href: "mailto:info@wpucourse.id",
  },
  {
    id: "lokasi",
    label: "Lokasi",
    value: "Bandung, Indonesia",
  },
  {
    id: "jam-operasional",
    label: "Jam Operasional",
    value: "Senin - Jumat · 08.00 - 17.00 WIB",
  },
];

interface ContactValueProps {
  item: ContactItem;
}

const ContactValue: FC<ContactValueProps> = ({ item }) => {
  const className =
    "text-lg font-semibold tracking-tight sm:text-xl break-words";

  if (item.href) {
    return (
      <a
        href={item.href}
        className={`${className} hover:underline`}
        style={{ color: PRIMARY }}
        {...(item.external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {item.value}
      </a>
    );
  }

  return (
    <span className={className} style={{ color: PRIMARY }}>
      {item.value}
    </span>
  );
};

const ContactSection: FC = () => {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 md:py-14 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-center gap-3">
          <span
            className="block h-px w-7"
            style={{ backgroundColor: PRIMARY }}
            aria-hidden="true"
          />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-gray-600">
            Hubungi <span style={{ color: PRIMARY }}>Kami</span>
          </span>
        </div>

        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          Mari kita saling <span style={{ color: PRIMARY }}>terhubung</span>
        </h2>

        <p className="mt-3 max-w-3xl text-sm text-gray-600 sm:text-base md:text-lg">
          Tim kami siap membantu untuk konsultasi program, kerjasama, atau
          pertanyaan umum tentang WPU Course.
        </p>

        <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
          {CONTACTS.map((item) => (
            <div key={item.id}>
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-gray-500">
                {item.label}
              </dt>
              <dd className="mt-3">
                <ContactValue item={item} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default ContactSection;