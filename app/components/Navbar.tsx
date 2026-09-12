"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="w-full border-b border-slate-100 bg-white">
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

        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-800">
          <Link href="/" className="text-teal-600">
            Beranda
          </Link>
          <Link href="/#tentang" className="hover:text-teal-600 transition-colors">
            Tentang Kami
          </Link>
          <button className="flex items-center gap-1 hover:text-teal-600 transition-colors">
            Program
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <button className="flex items-center gap-1 hover:text-teal-600 transition-colors">
            Komunitas
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <Link href="/#kontak" className="hover:text-teal-600 transition-colors">
            Kontak
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="hidden sm:inline-flex border-blue-900 text-blue-900 hover:bg-blue-50"
            asChild
          >
            <Link href="/#daftar">Daftar</Link>
          </Button>
          <Button className="bg-blue-900 hover:bg-blue-800" asChild>
            <Link href="/#masuk">Masuk</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
