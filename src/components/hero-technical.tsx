"use client";

import { ArrowRight, Gauge, MapPin, Phone, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import { siteConfig } from "@/lib/site";

export function HeroTechnical() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 72]);
  const panelY = useTransform(scrollYProgress, [0, 1], [0, -58]);
  const ambientY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.45]);

  return (
    <section ref={sectionRef} className="technical-grid relative overflow-hidden bg-graphite-950 text-white">
      <motion.div
        aria-hidden="true"
        className="hero-glow absolute -inset-24"
        style={{ y: reduceMotion ? 0 : ambientY }}
      />
      <span aria-hidden="true" className="hero-ring -right-[14rem] top-[4rem] size-[36rem]" />
      <span aria-hidden="true" className="hero-ring -right-[5rem] top-[13rem] size-[18rem] [animation-delay:-4s]" />
      <span aria-hidden="true" className="hero-ring -left-[13rem] bottom-[-17rem] size-[30rem] [animation-delay:-7s]" />
      <span aria-hidden="true" className="hero-scan" />

      <div className="relative mx-auto grid min-h-[calc(100svh-8rem)] max-w-[1280px] items-center gap-12 px-5 py-16 md:px-6 md:py-20 lg:grid-cols-12 lg:px-8">
        <motion.div
          className="relative z-10 lg:col-span-7"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: reduceMotion ? 0 : copyY, opacity: reduceMotion ? 1 : heroOpacity }}
        >
          <div className="inline-flex items-center gap-3 border border-white/15 bg-white/[0.04] px-4 py-2 backdrop-blur-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping bg-[#54d98c] opacity-60" />
              <span className="relative inline-flex size-2 bg-[#54d98c]" />
            </span>
            <p className="font-data text-xs font-semibold uppercase tracking-[0.18em] text-hydraulic-100">
              Hydraulika siłowa · Lubinicko / Świebodzin
            </p>
          </div>
          <h1 className="mt-6 max-w-4xl text-[clamp(3.45rem,7vw,7.15rem)] leading-[0.88] text-white">
            Siła pod
            <span className="block bg-gradient-to-r from-[#8dd2ff] via-white to-[#ffbe78] bg-clip-text text-transparent">
              pełną kontrolą
            </span>
          </h1>
          <p className="mt-7 max-w-2xl border-l-2 border-hydraulic-600 pl-5 text-lg leading-relaxed text-steel-200 sm:text-xl">
            Naprawa hydrauliki siłowej oraz naprawa i produkcja siłowników hydraulicznych.
            Zacznij od krótkiego opisu maszyny, elementu i objawów.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.phoneHref}
              className="button-sweep inline-flex min-h-14 items-center justify-center gap-3 bg-hydraulic-600 px-7 text-base font-bold text-white shadow-[0_16px_42px_rgba(0,109,183,0.28)] hover:bg-hydraulic-700"
            >
              <Phone aria-hidden="true" size={20} fill="currentColor" />
              Zadzwoń: {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/zgloszenie"
              className="button-sweep inline-flex min-h-14 items-center justify-center gap-3 border border-white/35 bg-white/[0.04] px-7 font-bold text-white backdrop-blur-sm hover:border-white hover:bg-white/10"
            >
              Przygotuj zgłoszenie
              <ArrowRight aria-hidden="true" size={19} />
            </Link>
          </div>
          <div className="mt-9 grid max-w-2xl gap-3 text-sm text-steel-300 sm:grid-cols-2">
            <span className="flex items-start gap-3 border-t border-white/10 pt-4">
              <MapPin aria-hidden="true" className="mt-0.5 shrink-0 text-hydraulic-100" size={18} />
              {siteConfig.addressLine}, {siteConfig.postalLine}
            </span>
            <span className="flex items-start gap-3 border-t border-white/10 pt-4">
              <ShieldCheck aria-hidden="true" className="mt-0.5 shrink-0 text-hydraulic-100" size={18} />
              Bezpieczna identyfikacja przed dalszym krokiem
            </span>
          </div>
        </motion.div>

        <motion.div
          className="relative z-10 lg:col-span-5"
          initial={reduceMotion ? false : { opacity: 0, x: 24, rotate: 1.5 }}
          animate={reduceMotion ? undefined : { opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: reduceMotion ? 0 : panelY }}
        >
          <div className="relative mx-auto aspect-[4/5] max-w-[480px] overflow-hidden border border-white/20 bg-graphite-900/85 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-8">
            <div className="absolute inset-0 technical-grid opacity-60" aria-hidden="true" />
            <div className="absolute -right-20 -top-20 size-64 rounded-full bg-hydraulic-600/15 blur-3xl" aria-hidden="true" />
            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-white/15 pb-5">
                <span className="font-data text-xs uppercase tracking-[0.16em] text-steel-300">
                  System rozpoznania
                </span>
                <span className="flex items-center gap-2 text-xs text-hydraulic-100">
                  <span className="size-2 bg-[#54d98c] shadow-[0_0_14px_#54d98c]" aria-hidden="true" />
                  gotowy do rozmowy
                </span>
              </div>
              <div className="flex flex-1 items-center justify-center py-8">
                <div className="relative aspect-square w-[74%] max-w-[275px] rounded-full border-[12px] border-steel-700/55 border-t-hydraulic-600 border-r-[#48b5ff] shadow-[0_0_60px_rgba(0,109,183,0.14)]">
                  <span className="absolute inset-[11%] rounded-full border border-white/15" aria-hidden="true" />
                  <span className="absolute inset-[25%] rounded-full border border-dashed border-white/15" aria-hidden="true" />
                  <motion.span
                    aria-hidden="true"
                    className="absolute bottom-1/2 left-1/2 h-[3px] w-[39%] origin-left bg-safety-400 shadow-[0_0_16px_rgba(242,140,40,0.85)]"
                    initial={reduceMotion ? { rotate: 325 } : { rotate: 202 }}
                    animate={{ rotate: 325 }}
                    transition={{ duration: reduceMotion ? 0 : 1.35, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <span className="absolute left-1/2 top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-graphite-950" aria-hidden="true" />
                  <div className="absolute inset-x-0 bottom-[15%] text-center">
                    <Gauge aria-hidden="true" className="mx-auto mb-2 text-hydraulic-100" size={20} />
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
                ].map(([number, label], index) => (
                  <motion.div
                    key={number}
                    className="border border-white/15 bg-white/[0.03] p-3"
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 + index * 0.1 }}
                  >
                    <span className="font-data text-xs text-hydraulic-100">{number}</span>
                    <span className="mt-1 block text-xs text-steel-200">{label}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-5 flow-track" aria-hidden="true" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
