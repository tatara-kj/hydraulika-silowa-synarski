import type { Metadata } from "next";
import { Check, HelpCircle } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Usługi hydrauliki siłowej Świebodzin",
  description:
    "Naprawa hydrauliki siłowej oraz naprawa i produkcja siłowników hydraulicznych w Lubinicku koło Świebodzina.",
  alternates: { canonical: "/uslugi" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        current="Usługi"
        eyebrow="Specjalizacja warsztatu"
        title="Usługi hydrauliki siłowej"
        intro="Szczegóły techniczne i możliwość realizacji ustalamy dla konkretnej maszyny, układu lub elementu."
      />
      <section className="px-5 py-20 md:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-5 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-steel-200 bg-white px-5 py-20 md:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-2">
          <div>
            <Check aria-hidden="true" className="text-hydraulic-700" size={29} />
            <h2 className="mt-6 text-4xl">Co można ustalić na początku</h2>
            <ul className="mt-6 grid gap-3 text-steel-700">
              <li>• czy opisany przypadek mieści się w aktualnym zakresie;</li>
              <li>• jakie oznaczenia, zdjęcia lub wymiary będą potrzebne;</li>
              <li>• jaki sposób przekazania elementu należy uzgodnić;</li>
              <li>• jakie informacje są potrzebne do dalszej oceny.</li>
            </ul>
          </div>
          <div className="border-l-4 border-safety-600 bg-[#fff4eb] p-7 sm:p-9">
            <HelpCircle aria-hidden="true" className="text-safety-700" size={29} />
            <h2 className="mt-6 text-4xl">Zakres ustalamy indywidualnie</h2>
            <p className="mt-5 text-steel-700">
              Podczas rozmowy potwierdzimy możliwość wykonania konkretnej pracy, sposób
              przekazania elementu, potrzebne materiały i dalszy tok postępowania.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
