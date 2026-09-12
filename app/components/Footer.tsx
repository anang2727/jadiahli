import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Program",
    links: [
      { label: "Online Course", href: "/program/online-course" },
      { label: "Bootcamp", href: "/program/bootcamp" },
      { label: "Partnership", href: "/program/partnership" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Tentang Kami", href: "/tentang-kami" },
      { label: "Blog", href: "/blog" },
      { label: "Komunitas", href: "/komunitas" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Hubungi Kami", href: "/kontak" },
      { label: "Syarat dan Ketentuan", href: "/syarat-ketentuan" },
      { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
    ],
  },
];

const socialLinks = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-950 rounded-3xl px-8 py-10 grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div>
            <Image
              src="/jadi-ahli-logo-white.png"
              alt="Jadi Ahli"
              width={140}
              height={36}
              className="h-8 w-auto"
            />
            <p className="mt-5 font-bold text-white">PT Jadi Ahli Inovasi Digital</p>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed max-w-xs">
              Platform pembelajaran untuk membantu kamu menjadi talenta
              digital terbaik.
            </p>

            <div className="mt-5 flex flex-col gap-2.5 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-500" />
                Bandung, Indonesia
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-500" />
                +62 851-9006-2005
              </span>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="font-semibold text-white mb-4">{column.title}</p>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 px-2">
          <p className="text-sm text-slate-500">
            © {year} Jadi Ahli. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-teal-600 hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}