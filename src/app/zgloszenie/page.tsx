import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ServiceIntakeWizard } from "@/components/service-intake-wizard";

export const metadata: Metadata = {
  title: "Przygotuj zgłoszenie usterki",
  description:
    "Uporządkuj objawy, dane maszyny, zdjęcia i dane kontaktowe przed rozmową z serwisem hydrauliki siłowej.",
  alternates: { canonical: "/zgloszenie" },
  robots: { index: true, follow: true },
};

export default function IntakePage() {
  return (
    <>
      <PageHero
        current="Zgłoszenie usterki"
        eyebrow="Kreator zgłoszenia"
        title="Przygotuj opis usterki"
        intro="W sześciu krótkich krokach uporządkuj informacje potrzebne podczas rozmowy z warsztatem."
      />
      <section className="section-bridge px-5 py-16 md:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <ServiceIntakeWizard />
        </div>
      </section>
    </>
  );
}
