"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Breadcrumbs } from "./breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  intro,
  current,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  current: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 52]);
  const accentY = useTransform(scrollYProgress, [0, 1], [0, -38]);

  return (
    <section ref={sectionRef} className="technical-grid relative overflow-hidden border-b border-steel-200 bg-graphite-950 text-white">
      <motion.div
        aria-hidden="true"
        className="absolute -right-28 -top-44 size-[32rem] rounded-full border border-white/10 bg-hydraulic-600/10 shadow-[0_0_90px_rgba(0,109,183,0.14)]"
        style={{ y: reduceMotion ? 0 : accentY }}
      />
      <span aria-hidden="true" className="hero-scan" />
      <div className="relative mx-auto max-w-[1280px] px-5 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
        <Breadcrumbs current={current} inverted />
        <div className="grid gap-8 md:grid-cols-12">
          <motion.div
            className="md:col-span-8"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: reduceMotion ? 0 : titleY }}
          >
            <p className="font-data text-xs font-semibold uppercase tracking-[0.2em] text-hydraulic-100">
              {eyebrow}
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              {title}
            </h1>
          </motion.div>
          <motion.div
            className="md:col-span-4 md:flex md:items-end"
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.68, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="max-w-xl border-l-2 border-hydraulic-600 pl-5 text-lg leading-relaxed text-steel-200">
              {intro}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
