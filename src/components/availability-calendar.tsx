"use client";

import { CalendarCheck2, Check, Info, Phone } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

const slots = [
  { day: "Pon", date: "03.08", status: "zajęty" },
  { day: "Wt", date: "04.08", status: "wolny" },
  { day: "Śr", date: "05.08", status: "ograniczony" },
  { day: "Czw", date: "06.08", status: "wolny" },
  { day: "Pt", date: "07.08", status: "zajęty" },
  { day: "Sob", date: "08.08", status: "ograniczony" },
  { day: "Pon", date: "10.08", status: "wolny" },
  { day: "Wt", date: "11.08", status: "zajęty" },
  { day: "Śr", date: "12.08", status: "wolny" },
  { day: "Czw", date: "13.08", status: "ograniczony" },
  { day: "Pt", date: "14.08", status: "zajęty" },
  { day: "Sob", date: "15.08", status: "wolny" },
] as const;

type Slot = (typeof slots)[number];

export function AvailabilityCalendar() {
  const [selected, setSelected] = useState<Slot | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden border border-white/15 bg-graphite-900/80 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-sm">
      <div className="grid gap-6 border-b border-white/10 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="flex items-start gap-4">
          <span className="grid size-12 shrink-0 place-items-center bg-hydraulic-600 text-white shadow-[0_0_28px_rgba(0,109,183,0.35)]">
            <CalendarCheck2 aria-hidden="true" size={24} />
          </span>
          <div>
            <p className="font-data text-xs font-semibold uppercase tracking-[0.18em] text-hydraulic-100">
              Mockup · bez backendu
            </p>
            <h3 className="mt-2 text-3xl text-white sm:text-4xl">Orientacyjny kalendarz terminów</h3>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 text-xs font-semibold text-steel-200">
          <span className="flex items-center gap-2"><span className="size-2 bg-[#54d98c]" /> wolny</span>
          <span className="flex items-center gap-2"><span className="size-2 bg-safety-400" /> ograniczony</span>
          <span className="flex items-center gap-2"><span className="size-2 bg-steel-600" /> zajęty</span>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <div className="mb-5 flex items-center justify-between gap-4">
          <p className="font-heading text-2xl font-bold text-white">Sierpień 2026</p>
          <p className="font-data text-xs uppercase tracking-[0.14em] text-steel-300">przykładowe obłożenie</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {slots.map((slot) => {
            const busy = slot.status === "zajęty";
            const isSelected = selected?.date === slot.date;
            return (
              <button
                key={slot.date}
                type="button"
                disabled={busy}
                aria-pressed={isSelected}
                onClick={() => setSelected(slot)}
                className={`calendar-slot relative min-h-28 overflow-hidden border p-4 text-left transition-all duration-300 ${
                  busy
                    ? "calendar-busy cursor-not-allowed border-white/10 text-steel-400"
                    : isSelected
                      ? "-translate-y-1 border-hydraulic-100 bg-hydraulic-600 text-white shadow-[0_14px_35px_rgba(0,109,183,0.32)]"
                      : "border-white/15 bg-white/[0.04] text-white hover:-translate-y-1 hover:border-hydraulic-100/70 hover:bg-white/[0.08]"
                }`}
              >
                <span className="font-data text-xs font-semibold uppercase tracking-[0.12em]">{slot.day}</span>
                <span className="mt-2 block font-heading text-2xl font-bold">{slot.date}</span>
                <span className={`mt-4 block text-xs font-semibold ${slot.status === "ograniczony" && !isSelected ? "text-safety-400" : ""}`}>
                  {slot.status === "ograniczony" ? "ograniczony" : slot.status}
                </span>
                {isSelected ? <Check aria-hidden="true" className="absolute right-3 top-3" size={17} /> : null}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected?.date ?? "empty"}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -5 }}
            className="mt-6 grid gap-5 border border-white/10 bg-graphite-950/70 p-5 sm:grid-cols-[1fr_auto] sm:items-center"
          >
            <div className="flex items-start gap-3">
              <Info aria-hidden="true" className="mt-0.5 shrink-0 text-hydraulic-100" size={20} />
              <p className="text-sm text-steel-200">
                {selected
                  ? `Wybrano ${selected.day} ${selected.date}. Ten kalendarz pokazuje przykładowe obłożenie i nie rezerwuje terminu.`
                  : "Wybierz przykładowy wolny termin. Rzeczywistą dostępność i godzinę potwierdź telefonicznie."}
              </p>
            </div>
            <a
              href={siteConfig.phoneHref}
              className="button-sweep inline-flex min-h-12 items-center justify-center gap-2 bg-white px-5 font-bold text-graphite-950"
            >
              <Phone aria-hidden="true" size={18} fill="currentColor" />
              Potwierdź telefonicznie
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
