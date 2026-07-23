import type { Metadata } from "next";
import { Check, Ruler, Wrench } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { SafetyCallout } from "@/components/safety-callout";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Naprawa i produkcja siłowników hydraulicznych",
  description:
    "Naprawa i produkcja siłowników hydraulicznych w Lubinicku koło Świebodzina. Ustal zakres telefonicznie: 695 751 002.",
  alternates: { canonical: "/silowniki-hydrauliczne" },
};

function ServiceSection({
  id,
  icon: Icon,
  title,
  intro,
  items,
}: {
  id: string;
  icon: typeof Wrench;
  title: string;
  intro: string;
  items: readonly string[];
}) {
  return (
    <section id={id} className="border border-steel-200 bg-white p-7 sm:p-10">
      <Icon aria-hidden="true" className="text-hydraulic-700" size={30} />
      <h2 className="mt-6 text-4xl">{title}</h2>
      <p className="mt-5 text-lg text-steel-700">{intro}</p>
      <h3 className="mt-9 text-2xl">Przygotuj, jeśli jest dostępne</h3>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-steel-700">
            <Check aria-hidden="true" className="mt-1 shrink-0 text-hydraulic-700" size={18} />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function CylindersPage() {
  return (
    <>
      <PageHero
        current="Siłowniki hydrauliczne"
        eyebrow="Elementy wykonawcze"
        title="Naprawa i produkcja siłowników hydraulicznych"
        intro="Każdy przypadek wymaga identyfikacji elementu, jego zastosowania i danych potrzebnych do ustalenia możliwości realizacji."
      />
      <section className="light-grid px-5 py-20 md:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-6 lg:grid-cols-2">
            <ServiceSection
              id="naprawa"
              icon={Wrench}
              title="Naprawa siłownika"
              intro={services[1].description}
              items={services[1].preparation}
            />
            <ServiceSection
              id="produkcja"
              icon={Ruler}
              title="Produkcja siłownika"
              intro={services[2].description}
              items={services[2].preparation}
            />
          </div>
          <div className="mt-8">
            <SafetyCallout />
          </div>
          <div className="mt-8 border-l-4 border-hydraulic-600 bg-[#eaf6fd] p-6 sm:p-8">
            <h2 className="text-3xl">Parametry trzeba potwierdzić</h2>
            <p className="mt-4 max-w-4xl text-steel-700">
              Publiczne dane nie opisują zakresu wymiarów i ciśnień, materiałów, sposobu
              testowania ani dokumentacji odbiorowej. Dlatego strona nie publikuje tych
              informacji bez autoryzacji właściciela.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
