"use client";

import { ArrowDown, MapPin, Phone } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function HeroTechnical() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="technical-grid relative overflow-hidden bg-graphite-950 text-white">
      <div className="mx-auto grid min-h-[calc(100svh-8rem)] max-w-[1280px] items-center gap-12 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-12 lg:px-8">
        <motion.div
          className="relative z-10 lg:col-span-7"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-data text-xs font-semibold uppercase tracking-[0.2em] text-hydraulic-100">
            Hydraulika siłowa · Lubinicko / Świebodzin
          </p>
          <h1 className="mt-5 max-w-4xl text-[clamp(3.25rem,7vw,6.6rem)] leading-[0.91] text-white">
            Naprawa hydrauliki i siłowników hydraulicznych
          </h1>
          <p className="mt-7 max-w-2xl border-l-2 border-hydraulic-600 pl-5 text-lg leading-relaxed text-steel-200 sm:text-xl">
            Opisz problem telefonicznie. Ustalimy, jakie informacje i elementy są
            potrzebne do oceny konkretnego zlecenia.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex min-h-14 items-center justify-center gap-3 bg-hydraulic-600 px-6 text-base font-bold text-white transition-colors hover:bg-hydraulic-700"
            >
              <Phone aria-hidden="true" size={20} fill="currentColor" />
              Zadzwoń: {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/poradnik#checklista"
              className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/35 px-6 font-bold text-white transition-colors hover:border-white hover:bg-white/5"
            >
              Co przygotować?
              <ArrowDown aria-hidden="true" size={19} />
            </Link>
          </div>
          <div className="mt-8 flex items-start gap-3 text-sm text-steel-300">
            <MapPin aria-hidden="true" className="mt-0.5 shrink-0" size={18} />
            <span>Warsztat: {siteConfig.addressLine}, {siteConfig.postalLine}</span>
          </div>
        </motion.div>

        <div className="relative lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] max-w-[480px] overflow-hidden border border-white/20 bg-graphite-900 p-6 sm:p-8">
            <div className="absolute inset-0 technical-grid opacity-50" aria-hidden="true" />
            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-white/15 pb-5">
                <span className="font-data text-xs uppercase tracking-[0.16em] text-steel-300">
                  Karta przyjęcia
                </span>
                <span className="flex items-center gap-2 text-xs text-hydraulic-100">
                  <span className="size-2 bg-hydraulic-600" aria-hidden="true" />
                  rozmowa → ocena
                </span>
              </div>
              <div className="flex flex-1 items-center justify-center py-8">
                <div className="relative aspect-square w-[72%] max-w-[260px] rounded-full border-[12px] border-steel-700/70 border-t-hydraulic-600 border-r-hydraulic-600">
                  <span className="absolute inset-[13%] rounded-full border border-white/15" aria-hidden="true" />
                  <motion.span
                    aria-hidden="true"
                    className="absolute bottom-1/2 left-1/2 h-[3px] w-[38%] origin-left bg-safety-400"
                    initial={reduceMotion ? { rotate: 28 } : { rotate: 205 }}
                    animate={{ rotate: 328 }}
                    transition={{ duration: reduceMotion ? 0 : 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <span className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" aria-hidden="true" />
                  <div className="absolute inset-x-0 bottom-[18%] text-center">
                    <span className="font-data text-3xl font-semibold text-white">01</span>
                    <span className="mt-1 block text-xs uppercase tracking-[0.18em] text-steel-300">
                      identyfikacja
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  ["01", "Objawy"],
                  ["02", "Oznaczenia"],
                  ["03", "Dalszy krok"],
                ].map(([number, label]) => (
                  <div key={number} className="border border-white/15 p-3">
                    <span className="font-data text-xs text-hydraulic-100">{number}</span>
                    <span className="mt-1 block text-xs text-steel-200">{label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flow-track" aria-hidden="true" />
            </div>
          </div>
          <p className="mx-auto mt-4 max-w-[480px] text-xs leading-relaxed text-steel-400">
            Wizualizacja interfejsu, nie fotografia warsztatu ani realizacji.
          </p>
        </div>
      </div>
    </section>
  );
}
