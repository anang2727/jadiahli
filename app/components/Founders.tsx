"use client";

import { Check } from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import type { IconType } from "react-icons";
import { Card } from "@/components/ui/card";

interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
}

interface Founder {
  slug: string;
  name: string;
  role: string;
  initials: string;
  gradient: string;
  achievements: string[];
  socials: SocialLink[];
}

const founders: Founder[] = [
  {
    slug: "rani-kusuma",
    name: "Rani Kusuma",
    role: "Chief Executive Officer",
    initials: "RK",
    gradient: "from-teal-500 to-blue-900",
    achievements: [
      "3+ tahun pengalaman sebagai CEO",
      "7+ tahun pengalaman di industri IT",
      "Specialist product & growth strategy",
      "Founder komunitas Jadi Ahli",
    ],
    socials: [
      { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
      { icon: FaInstagram, href: "#", label: "Instagram" },
      { icon: FaTiktok, href: "#", label: "TikTok" },
      { icon: FaYoutube, href: "#", label: "YouTube" },
    ],
  },
  {
    slug: "bimo-adiwijaya",
    name: "Bimo Adiwijaya",
    role: "Chief Academic Officer",
    initials: "BA",
    gradient: "from-amber-400 to-teal-700",
    achievements: [
      "12+ tahun pengalaman sebagai dosen",
      "Google Developer Expert",
      "500.000+ subscriber YouTube",
      "Founder komunitas Discord 30.000+ member",
    ],
    socials: [
      { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
      { icon: FaInstagram, href: "#", label: "Instagram" },
      { icon: FaTiktok, href: "#", label: "TikTok" },
      { icon: FaYoutube, href: "#", label: "YouTube" },
    ],
  },
  {
    slug: "dewi-anggraini",
    name: "Dewi Anggraini",
    role: "Chief Technology Officer",
    initials: "DA",
    gradient: "from-blue-500 to-slate-900",
    achievements: [
      "9+ tahun pengalaman di industri IT",
      "4+ tahun pengalaman mengajar bootcamp",
      "Pernah bekerja di perusahaan Singapura",
      "Specialist cloud & backend engineering",
    ],
    socials: [
      { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
      { icon: FaInstagram, href: "#", label: "Instagram" },
      { icon: FaTiktok, href: "#", label: "TikTok" },
    ],
  },
];

export default function Founders() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="flex items-center gap-2 text-teal-400 text-sm font-semibold tracking-wide mb-3">
          <span className="w-6 h-px bg-teal-400" />
          MEET OUR FOUNDERS
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white max-w-2xl">
          Belajar dari yang memiliki{" "}
          <span className="text-teal-400">pengalaman</span>
        </h2>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl">
          Tiga founder Jadi Ahli adalah praktisi industri dan edukator yang
          sudah dipercaya oleh ratusan ribu orang.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {founders.map((founder) => (
            <FounderCard key={founder.slug} founder={founder} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FounderCard({ founder }: { founder: Founder }) {
  return (
    <Card className="bg-slate-800/60 border-slate-700 overflow-hidden rounded-2xl p-0">
      <div
        className={`h-64 bg-linear-to-br ${founder.gradient} flex items-center justify-center`}
      >
        <span className="text-6xl font-extrabold text-white/90 tracking-wide">
          {founder.initials}
        </span>
      </div>

      <div className="p-6">
        <p className="text-teal-400 text-xs font-semibold tracking-wide uppercase">
          {founder.role}
        </p>
        <h3 className="text-xl font-bold text-white mt-1">{founder.name}</h3>

        <ul className="mt-4 space-y-2.5">
          {founder.achievements.map((achievement) => (
            <li
              key={achievement}
              className="flex items-start gap-2.5 text-sm text-slate-300"
            >
              <Check className="w-4 h-4 mt-0.5 shrink-0 text-teal-400" strokeWidth={2.5} />
              {achievement}
            </li>
          ))}
        </ul>

        <div className="mt-5 pt-4 border-t border-slate-700 flex items-center gap-2">
          {founder.socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-200 hover:bg-teal-600 hover:text-white transition-colors"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            );
          })}
        </div>
      </div>
    </Card>
  );
}