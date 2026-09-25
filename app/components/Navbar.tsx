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
import type { NavigationLink, NavigationProgram } from "@/types/content";
import globalData from "@/data/global.json";

const NAVIGATION_LINKS = globalData.navigationLinks as NavigationLink[];
const PROGRAM_ICONS: Record<NavigationProgram["icon"], typeof Video> = {
  video: Video,
  "book-open": BookOpen,
  handshake: Handshake,
};

const PROGRAM_ITEMS = (globalData.programs as NavigationProgram[]).map(
  (program) => ({ ...program, icon: PROGRAM_ICONS[program.icon] }),
);

const NAV_LINK_CLASS =
  "px-1 py-2 text-slate-600 hover:text-primary transition-colors";
const NAV_LINK_ACTIVE_CLASS = "px-1 py-2 text-primary font-medium";

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
          {NAVIGATION_LINKS.filter(
            (link) => link.position === "before-program",
          ).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={link.active ? NAV_LINK_ACTIVE_CLASS : NAV_LINK_CLASS}
            >
              {link.label}
            </Link>
          ))}

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
                          <Icon className="w-6 h-6 text-primary" />
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-slate-900 group-hover:text-primary transition-colors">
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

          {NAVIGATION_LINKS.filter(
            (link) => link.position === "after-program",
          ).map((link) => (
            <Link key={link.href} href={link.href} className={NAV_LINK_CLASS}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            className="border-primary px-3 py-4 text-primary hover:bg-accent rounded-full"
            asChild
          >
            <Link href="/#daftar">Daftar</Link>
          </Button>
          <Button
            className="bg-primary px-3 py-4 hover:bg-primary/90 text-white rounded-full"
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
          {NAVIGATION_LINKS.filter(
            (link) => link.position === "before-program",
          ).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-3 rounded-full text-center ${
                link.active
                  ? "bg-primary text-white"
                  : "bg-slate-50 text-slate-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {PROGRAM_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-4 py-3 rounded-full bg-slate-50 text-slate-700 text-center"
            >
              {item.label}
            </Link>
          ))}
          {NAVIGATION_LINKS.filter(
            (link) => link.position === "after-program",
          ).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-3 rounded-full bg-slate-50 text-slate-700 text-center"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 mt-2">
            <Button
              variant="outline"
              className="flex-1 border-primary px-3 py-4 text-primary rounded-full"
              asChild
            >
              <Link href="/#daftar">Daftar</Link>
            </Button>
            <Button className="flex-1 bg-primary text-white rounded-full" asChild>
              <Link href="/#masuk">Masuk</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}