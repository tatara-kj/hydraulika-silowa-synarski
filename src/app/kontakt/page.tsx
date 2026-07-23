import type { Metadata } from "next";
import { Clock3, Info, MapPinned } from "lucide-react";
import Link from "next/link";
import { ContactTools } from "@/components/contact-tools";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt i dojazd",
  description:
    "Telefon, adres warsztatu i dojazd do Hydraulika Siłowa Seweryn Synarski w Lubinicku koło Świebodzina.",
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        current="Kontakt"
        eyebrow="Telefon i dojazd"
        title="Kontakt z warsztatem"
        intro="Przed przyjazdem zadzwoń i opisz zlecenie. Sposób przyjęcia elementu lub maszyny wymaga telefonicznego ustalenia."
      />
      <section className="px-5 py-20 md:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <ContactTools />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <section className="border border-steel-200 bg-white p-7 sm:p-9">
              <Clock3 aria-hidden="true" className="text-hydraulic-700" size={28} />
              <h2 className="mt-6 text-4xl">Godziny widoczne w Google</h2>
              <dl className="mt-6 divide-y divide-steel-200">
                {siteConfig.hours.map((row) => (
                  <div key={row.days} className="flex justify-between gap-6 py-4">
                    <dt className="text-steel-700">{row.days}</dt>
                    <dd className="font-data font-semibold text-graphite-950">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex items-start gap-3 bg-[#eaf6fd] p-4 text-sm text-steel-700">
                <Info aria-hidden="true" className="mt-0.5 shrink-0 text-hydraulic-700" size={18} />
                <p>Godziny mogą się zmienić. Potwierdź je telefonicznie przed przyjazdem.</p>
              </div>
            </section>
            <section className="technical-grid flex min-h-[25rem] flex-col justify-between border border-steel-200 bg-graphite-950 p-7 text-white sm:p-9">
              <div>
                <MapPinned aria-hidden="true" className="text-hydraulic-100" size={30} />
                <p className="mt-6 font-data text-xs font-semibold uppercase tracking-[0.16em] text-steel-300">Punkt docelowy</p>
                <h2 className="mt-3 text-4xl text-white">{siteConfig.addressLine}</h2>
                <p className="mt-2 text-lg text-steel-200">{siteConfig.postalLine}</p>
              </div>
              <div>
                <div className="flow-track" aria-hidden="true" />
                <p className="mt-5 text-sm text-steel-300">
                  Mapa prowadzi do punktu firmy. Nie przedstawia promienia ani obszaru serwisu mobilnego.
                </p>
              </div>
            </section>
          </div>
          <section className="mt-8 border-l-4 border-hydraulic-600 bg-white p-7 sm:p-9">
            <div className="grid gap-6 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <h2 className="text-4xl">Chcesz uporządkować dane przed rozmową?</h2>
                <p className="mt-4 text-steel-700">
                  Demonstracyjny formularz tworzy lokalne podsumowanie. Niczego nie wysyła i nie rezerwuje terminu.
                </p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <Link href="/zgloszenie" className="inline-flex min-h-14 items-center justify-center bg-graphite-950 px-6 font-bold text-white hover:bg-graphite-800">
                  Otwórz formularz demo
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
