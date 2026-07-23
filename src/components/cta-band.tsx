import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="bg-hydraulic-700 text-white">
      <div className="mx-auto grid max-w-[1280px] gap-7 px-5 py-12 md:grid-cols-12 md:items-center md:px-6 lg:px-8">
        <div className="md:col-span-7">
          <p className="font-data text-xs font-semibold uppercase tracking-[0.18em] text-hydraulic-100">
            Pierwszy krok
          </p>
          <h2 className="mt-3 text-4xl leading-tight text-white sm:text-5xl">
            Opisz maszynę, element i objawy
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end">
          <a
            href={siteConfig.phoneHref}
            className="inline-flex min-h-14 items-center justify-center gap-3 bg-white px-6 font-bold text-hydraulic-800 hover:bg-offwhite-50"
          >
            <Phone aria-hidden="true" size={20} fill="currentColor" />
            {siteConfig.phoneDisplay}
          </a>
          <Link
            href="/zgloszenie"
            className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/50 px-6 font-bold text-white hover:border-white hover:bg-white/10"
          >
            Formularz demo
            <ArrowRight aria-hidden="true" size={19} />
          </Link>
        </div>
      </div>
    </section>
  );
}
