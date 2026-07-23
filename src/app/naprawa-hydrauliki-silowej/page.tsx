import type { Metadata } from "next";
import { Check } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { SafetyCallout } from "@/components/safety-callout";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Naprawa hydrauliki siłowej Świebodzin",
  description:
    "Naprawy hydrauliczne w Lubinicku koło Świebodzina. Przygotuj typ maszyny, model, objawy i oznaczenia. Telefon: 695 751 002.",
  alternates: { canonical: "/naprawa-hydrauliki-silowej" },
};

export default function HydraulicRepairPage() {
  const service = services[0];

  return (
    <>
      <PageHero
        current="Naprawa hydrauliki siłowej"
        eyebrow="Naprawy hydrauliczne"
        title="Naprawa hydrauliki siłowej"
        intro="Zakres naprawy oraz dalsze kroki ustalamy po rozpoznaniu konkretnej maszyny, układu lub elementu."
      />
      <section className="px-5 py-20 md:px-6 md:py-28 lg:px-8">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xl leading-relaxed text-steel-700">
              Problemy z hydrauliką mogą objawiać się między innymi spadkiem siły,
              nieprawidłowym ruchem elementu, hałasem albo wyciekiem. Pierwsza rozmowa
              służy zebraniu danych i ustaleniu, co jest potrzebne do oceny przypadku.
            </p>
            <h2 className="mt-12 text-4xl">Informacje potrzebne do pierwszej oceny</h2>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {service.preparation.map((item) => (
                <li key={item} className="flex items-start gap-3 border-b border-steel-200 pb-4 text-steel-700">
                  <Check aria-hidden="true" className="mt-1 shrink-0 text-hydraulic-700" size={19} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h2 className="mt-12 text-4xl">Zakres wymaga identyfikacji</h2>
            <p className="mt-5 text-lg text-steel-700">{service.description}</p>
          </div>
          <div className="lg:col-span-5">
            <SafetyCallout />
            <div className="mt-6 border border-steel-200 bg-white p-6 sm:p-8">
              <p className="font-data text-xs font-semibold uppercase tracking-[0.15em] text-hydraulic-700">Ważne</p>
              <h2 className="mt-3 text-3xl">Nie testuj usterki dla nagrania</h2>
              <p className="mt-4 text-steel-700">
                Zdjęcia wykonuj tylko przy bezpiecznie wyłączonej maszynie i z dystansu.
                Film nie jest wymagany do rozpoczęcia rozmowy.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
