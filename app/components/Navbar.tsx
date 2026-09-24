"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Menu,
  X,
  Video,
  BookOpen,
  Handshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProgramItem {
  label: string;
  desc: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

const PROGRAM_ITEMS: ProgramItem[] = [
  {
    label: "Online Course",
    desc: "Belajar melalui video, akses selamanya dan dapatkan sertifikat",
    href: "/course",
    icon: Video,
  },
  {
    label: "Bootcamp",
    desc: "Belajar secara interaktif untuk tingkatkan kemampuan digital kamu",
    href: "/bootcamp",
    icon: BookOpen,
  },
  {
    label: "Partnership",
    desc: "Kerjasama dengan perusahaan untuk branding dan promosi",
    href: "/#partner",
    icon: Handshake,
  },
];

const NAV_LINK_CLASS =
  "px-1 py-2 text-slate-600 hover:text-[#1B3B5D] transition-colors";
const NAV_LINK_ACTIVE_CLASS = "px-1 py-2 text-[#1B3B5D] font-medium";

export default function Navbar() {
  const [programOpen, setProgramOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/jadi-ahli-logo.png"
            alt="Jadi Ahli"
            width={160}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/" className={NAV_LINK_ACTIVE_CLASS}>
            Beranda
          </Link>
          <Link href="/about" className={NAV_LINK_CLASS}>
            Tentang Kami
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setProgramOpen(true)}
            onMouseLeave={() => setProgramOpen(false)}
          >
            <button
              className={`flex items-center gap-1 cursor-pointer ${
                programOpen ? NAV_LINK_ACTIVE_CLASS : NAV_LINK_CLASS
              }`}
              onClick={() => setProgramOpen((v) => !v)}
              aria-expanded={programOpen}
            >
              Program
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${
                  programOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {programOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-180">
                <div className="bg-white border border-slate-100 shadow-2xl rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4 cursor-pointer">
                    Program
                  </h3>
                  <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                    {PROGRAM_ITEMS.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="flex flex-col gap-2 group"
                        >
                          <Icon className="w-6 h-6 text-[#1B3B5D]" />
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-slate-900 group-hover:text-[#1B3B5D] transition-colors">
                              {item.label}
                            </span>
                            {item.badge && (
                              <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed">
                            {item.desc}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button className={`flex items-center gap-1 ${NAV_LINK_CLASS}`}>
              FAQ
            </button>
          </div>

          <Link href="/#kontak" className={NAV_LINK_CLASS}>
            Kontak
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            className="border-[#1B3B5D] px-3 py-4 text-[#1B3B5D] hover:bg-[#EAF3FB] rounded-full"
            asChild
          >
            <Link href="/#daftar">Daftar</Link>
          </Button>
          <Button
            className="bg-[#1B3B5D] px-3 py-4 hover:bg-[#16314f] text-white rounded-full"
            asChild
          >
            <Link href="/#masuk">Masuk</Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-slate-900"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Buka menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden px-6 pb-5 flex flex-col gap-2 text-sm font-medium">
          <Link href="/" className="px-4 py-3 rounded-full bg-[#1B3B5D] text-white text-center">
            Beranda
          </Link>
          <Link
            href="/#tentang"
            className="px-4 py-3 rounded-full bg-slate-50 text-slate-700 text-center"
          >
            Tentang Kami
          </Link>
          {PROGRAM_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-4 py-3 rounded-full bg-slate-50 text-slate-700 text-center"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/#kontak" className="px-4 py-3 rounded-full bg-slate-50 text-slate-700 text-center">
            Kontak
          </Link>
          <div className="flex gap-3 mt-2">
            <Button
              variant="outline"
              className="flex-1 border-[#1B3B5D] px-3 py-4 text-[#1B3B5D] rounded-full"
              asChild
            >
              <Link href="/#daftar">Daftar</Link>
            </Button>
            <Button className="flex-1 bg-[#1B3B5D] text-white rounded-full" asChild>
              <Link href="/#masuk">Masuk</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}