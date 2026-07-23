import { ArrowRight, CheckCircle2, ExternalLink, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";
import { ContactTools } from "@/components/contact-tools";
import { FaqList } from "@/components/faq-list";
import { HeroTechnical } from "@/components/hero-technical";
import { PreparationChecklist } from "@/components/preparation-checklist";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services, siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <HeroTechnical />

      <section className="border-b border-steel-200 bg-white">
        <div className="mx-auto grid max-w-[1280px] divide-y divide-steel-200 px-5 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-6 lg:px-8">
          {[
            ["Zakres", "Tylko potwierdzone usługi"],
            ["Kontakt", "Bezpośredni numer telefonu"],
            ["Lokalnie", "Lubinicko koło Świebodzina"],
          ].map(([label, value]) => (
            <div key={label} className="py-6 md:px-7 md:first:pl-0 md:last:pr-0">
              <p className="font-data text-xs font-semibold uppercase tracking-[0.16em] text-hydraulic-700">
                {label}
              </p>
              <p className="mt-2 font-heading text-2xl font-bold text-graphite-950">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 md:px-6 md:py-28 lg:px-8" id="uslugi">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <SectionHeading
              eyebrow="Potwierdzony zakres"
              title="W czym możemy pomóc"
              intro="Pokazujemy wyłącznie usługi potwierdzone w oficjalnym profilu firmy. Szczegółowe możliwości każdego zlecenia wymagają rozmowy i identyfikacji elementu."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.06}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <Link
            href="/uslugi"
            className="mt-8 inline-flex min-h-12 items-center gap-3 font-bold text-hydraulic-800"
          >
            Zobacz cały potwierdzony zakres
            <ArrowRight aria-hidden="true" size={20} />
          </Link>
        </div>
      </section>

      <section className="technical-grid bg-graphite-950 px-5 py-20 text-white md:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <SectionHeading
              eyebrow="Przed telefonem"
              title="Dobre informacje skracają pierwszą rozmowę"
              intro="Zaznacz to, co masz pod ręką. Nie uruchamiaj niesprawnej maszyny i nie zbliżaj się do wycieku tylko po to, by zdobyć dodatkowe dane."
              light
            />
          </Reveal>
          <Reveal className="mt-12">
            <PreparationChecklist />
          </Reveal>
        </div>
      </section>

      <section className="light-grid px-5 py-20 md:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <SectionHeading
              eyebrow="Początek współpracy"
              title="Najpierw ustalamy fakty"
              intro="Bez automatycznej wyceny, pozornych terminów i obietnic bez oględzin."
            />
          </Reveal>
          <div className="mt-12 grid gap-px border border-steel-200 bg-steel-200 lg:grid-cols-3">
            {[
              {
                icon: PhoneCall,
                number: "01",
                title: "Opisujesz problem",
                text: "Podajesz typ maszyny lub elementu, objawy oraz widoczne oznaczenia.",
              },
              {
                icon: CheckCircle2,
                number: "02",
                title: "Ustalamy potrzebne dane",
                text: "Doprecyzujemy, czy potrzebne są dodatkowe zdjęcia, wymiary albo dokumentacja.",
              },
              {
                icon: ArrowRight,
                number: "03",
                title: "Potwierdzamy dalszy krok",
                text: "Sposób dostarczenia, zakres prac i termin ustalamy indywidualnie.",
              },
            ].map((item, index) => (
              <Reveal key={item.number} delay={index * 0.06} className="h-full bg-white p-7 sm:p-9">
                <div className="flex items-center justify-between">
                  <item.icon aria-hidden="true" className="text-hydraulic-700" size={27} />
                  <span className="font-data text-sm text-steel-600">{item.number}</span>
                </div>
                <h3 className="mt-10 text-3xl">{item.title}</h3>
                <p className="mt-4 text-steel-700">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-steel-200 bg-white px-5 py-20 md:px-6 md:py-24 lg:px-8">
        <div className="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-7">
            <p className="font-data text-xs font-semibold uppercase tracking-[0.18em] text-hydraulic-700">
              Publiczny profil firmy
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl">Sprawdź aktualne opinie w Google</h2>
            <p className="mt-5 max-w-2xl text-lg text-steel-700">
              Pełna treść, aktualna ocena i odpowiedzi właściciela są dostępne bezpośrednio
              w oficjalnej wizytówce. Nie kopiujemy opinii ani nazwisk klientów bez zgody.
            </p>
          </Reveal>
          <Reveal className="md:col-span-5 md:flex md:justify-end">
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-3 border border-graphite-950 px-6 font-bold text-graphite-950 hover:bg-graphite-950 hover:text-white"
            >
              Otwórz profil Google
              <ExternalLink aria-hidden="true" size={19} />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 md:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <SectionHeading
              eyebrow="Najczęstsze pytania"
              title="Rzeczowo i bez ryzykownych porad"
              intro="W razie wycieku lub niekontrolowanego ruchu najważniejsze jest bezpieczne zatrzymanie maszyny i kontakt z fachowym serwisem."
            />
          </Reveal>
          <Reveal className="mt-12">
            <FaqList limit={4} />
          </Reveal>
          <Link href="/poradnik" className="mt-7 inline-flex min-h-12 items-center gap-3 font-bold text-hydraulic-800">
            Otwórz cały poradnik
            <ArrowRight aria-hidden="true" size={19} />
          </Link>
        </div>
      </section>

      <section className="bg-[#eaf0f3] px-5 py-20 md:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <div className="mb-10 flex items-center gap-3 text-hydraulic-800">
              <MapPin aria-hidden="true" size={22} />
              <span className="font-data text-xs font-semibold uppercase tracking-[0.17em]">Kontakt i dojazd</span>
            </div>
            <ContactTools />
          </Reveal>
        </div>
      </section>
    </>
  );
}
