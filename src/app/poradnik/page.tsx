import type { Metadata } from "next";
import { BookOpen, ShieldCheck } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { PreparationChecklist } from "@/components/preparation-checklist";
import { SafetyCallout } from "@/components/safety-callout";

export const metadata: Metadata = {
  title: "Poradnik i FAQ hydrauliki siłowej",
  description:
    "Co przygotować przed rozmową z serwisem hydrauliki siłowej i jak bezpiecznie zabezpieczyć niesprawną maszynę bez ryzykownych napraw pod ciśnieniem.",
  alternates: { canonical: "/poradnik" },
};

export default function GuidePage() {
  return (
    <>
      <PageHero
        current="Poradnik"
        eyebrow="Przed rozmową z serwisem"
        title="Przygotuj informacje, nie ryzykuj"
        intro="Dobra identyfikacja maszyny i spokojny opis objawów są ważniejsze niż próby samodzielnego testowania układu pod ciśnieniem."
      />
      <section id="checklista" className="px-5 py-20 md:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-7 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <BookOpen aria-hidden="true" className="text-hydraulic-700" size={29} />
              <h2 className="mt-6 text-4xl sm:text-5xl">Interaktywna checklista do rozmowy</h2>
            </div>
            <p className="text-lg text-steel-700 md:col-span-5">
              Zaznacz dostępne informacje. Wszystkie wybory działają tylko lokalnie w tej karcie przeglądarki.
            </p>
          </div>
          <div className="mt-12">
            <PreparationChecklist />
          </div>
        </div>
      </section>
      <section className="technical-grid bg-graphite-950 px-5 py-20 text-white md:px-6 md:py-24 lg:px-8">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <ShieldCheck aria-hidden="true" className="text-hydraulic-100" size={32} />
            <h2 className="mt-6 text-4xl text-white sm:text-5xl">Bezpieczeństwo przed diagnozą</h2>
            <p className="mt-5 text-lg text-steel-200">
              Ciecz pod wysokim ciśnieniem może spowodować ciężki uraz. Ta strona nie zawiera instrukcji samodzielnego rozszczelniania ani prób ciśnieniowych.
            </p>
          </div>
          <div className="lg:col-span-7">
            <SafetyCallout />
          </div>
        </div>
      </section>
      <section className="px-5 py-20 md:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <p className="font-data text-xs font-semibold uppercase tracking-[0.18em] text-hydraulic-700">FAQ</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Najczęstsze pytania</h2>
          <div className="mt-10">
            <FaqList />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
