import type { Metadata } from "next";
import { Building2, Check, FileCheck2, MapPin } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "O firmie",
  description:
    "HYDRAULIKA SIŁOWA Seweryn Synarski — aktywna działalność w Lubinicku koło Świebodzina, specjalizująca się w naprawach hydraulicznych i siłownikach.",
  alternates: { canonical: "/o-firmie" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        current="O firmie"
        eyebrow="Warsztat w Lubinicku"
        title="Hydraulika siłowa w Lubinicku"
        intro="Bezpośredni kontakt, rzeczowe rozpoznanie problemu i zakres prac dopasowany do konkretnego elementu."
      />
      <section className="px-5 py-20 md:px-6 md:py-28 lg:px-8">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xl leading-relaxed text-steel-700">
              {siteConfig.legalName} to aktywna działalność gospodarcza z miejscem
              wykonywania działalności w Lubinicku. Oficjalna wizytówka firmy wskazuje
              specjalizację w naprawach hydraulicznych oraz naprawie i produkcji
              siłowników hydraulicznych.
            </p>
            <h2 className="mt-12 text-4xl">Główne obszary pracy</h2>
            <ul className="mt-7 grid gap-4">
              {[
                "naprawy hydrauliczne",
                "naprawa siłowników hydraulicznych",
                "produkcja siłowników hydraulicznych",
                "profil działalności obejmujący naprawę i konserwację maszyn",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 border-b border-steel-200 pb-4 text-lg text-steel-700">
                  <Check aria-hidden="true" className="mt-1 shrink-0 text-hydraulic-700" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <aside className="border border-steel-200 bg-white p-7 lg:col-span-5 sm:p-9">
            <FileCheck2 aria-hidden="true" className="text-hydraulic-700" size={30} />
            <h2 className="mt-6 text-4xl">Dane rejestrowe</h2>
            <dl className="mt-7 divide-y divide-steel-200">
              {[
                ["Pełna nazwa", siteConfig.legalName],
                ["NIP", siteConfig.nip],
                ["REGON", siteConfig.regon],
                ["Adres", `${siteConfig.addressLine}, ${siteConfig.postalLine}`],
                ["Status", "aktywna działalność"],
              ].map(([term, value]) => (
                <div key={term} className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr]">
                  <dt className="font-data text-xs font-semibold uppercase tracking-[0.1em] text-steel-600">{term}</dt>
                  <dd className="font-semibold text-graphite-950">{value}</dd>
                </div>
              ))}
            </dl>
            <a
              href={siteConfig.ceidgUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-12 items-center font-bold text-hydraulic-800"
            >
              Sprawdź oficjalny wpis CEIDG
            </a>
          </aside>
        </div>
      </section>
      <section className="border-y border-steel-200 bg-white px-5 py-20 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-px border border-steel-200 bg-steel-200 md:grid-cols-3">
            {[
              {
                icon: Building2,
                title: "Rozpoznanie zlecenia",
                text: "Rozmowa zaczyna się od typu maszyny, objawów i identyfikacji elementu.",
              },
              {
                icon: MapPin,
                title: "Dostarczenie i dojazd",
                text: "Sposób przekazania elementu lub maszyny ustalamy indywidualnie podczas rozmowy.",
              },
              {
                icon: FileCheck2,
                title: "Dane techniczne",
                text: "Oznaczenia, wymiary, dokumentacja i bezpiecznie wykonane zdjęcia pomagają przygotować dalszy krok.",
              },
            ].map((item) => (
              <article key={item.title} className="bg-offwhite-50 p-7 sm:p-9">
                <item.icon aria-hidden="true" className="text-hydraulic-700" size={27} />
                <h2 className="mt-7 text-3xl">{item.title}</h2>
                <p className="mt-4 text-steel-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
