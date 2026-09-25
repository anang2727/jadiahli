import type { FC } from "react";
import type { ContactItem } from "@/types/content";
import globalData from "@/data/global.json";

const CONTACTS: readonly ContactItem[] = globalData.contacts as ContactItem[];

interface ContactValueProps {
  item: ContactItem;
}

const ContactValue: FC<ContactValueProps> = ({ item }) => {
  const className =
    "text-lg font-semibold tracking-tight sm:text-xl wrap-break-word";
  if (item.href) {
    return (
      <a
        href={item.href}
        className={`${className} hover:underline`}
        style={{ color: "var(--primary)" }}
        {...(item.external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {item.value}
      </a>
    );
  }

  return (
    <span className={className} style={{ color: "var(--primary)" }}>
      {item.value}
    </span>
  );
};

const ContactSection: FC = () => {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 md:py-14 lg:px-12">
      <div className="mx-auto max-w-360">
        <div className="flex items-center gap-3">
          <span
            className="block h-px w-7"
            style={{ backgroundColor: "var(--primary)" }}
            aria-hidden="true"
          />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-gray-600">
            Hubungi <span style={{ color: "var(--primary)" }}>Kami</span>
          </span>
        </div>

        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          Mari kita saling <span style={{ color: "var(--primary)" }}>terhubung</span>
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