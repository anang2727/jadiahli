"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ConsultCta() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="bg-secondary rounded-2xl px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Bingung pilih course yang mana?
          </h2>
          <p className="mt-1.5 text-slate-600 text-sm sm:text-base max-w-xl">
            Konsultasikan kebutuhan kamu dengan tim kami untuk mendapatkan
            rekomendasi course yang tepat.
          </p>
        </div>

        <Button
          className="bg-primary hover:bg-primary/90 gap-2 flex-shrink-0"
          asChild
        >
          <Link href="#konsultasi">
            <MessageCircle className="w-4 h-4" />
            Konsultasi Gratis
          </Link>
        </Button>
      </div>
    </section>
  );
}
