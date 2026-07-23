import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ServiceIntakeWizard } from "@/components/service-intake-wizard";

export const metadata: Metadata = {
  title: "Demonstracyjne zgłoszenie usterki",
  description:
    "Przygotuj lokalne podsumowanie objawów, danych maszyny, zdjęć i danych kontaktowych przed rozmową z serwisem. Formularz niczego nie wysyła.",
  alternates: { canonical: "/zgloszenie" },
  robots: { index: false, follow: true },
};

export default function IntakePage() {
  return (
    <>
      <PageHero
        current="Zgłoszenie usterki"
        eyebrow="Interaktywny formularz demo"
        title="Przygotuj opis usterki"
        intro="Przejdź przez sześć kroków i utwórz lokalne podsumowanie do rozmowy. Dane ani pliki nie są wysyłane do firmy."
      />
      <section className="px-5 py-16 md:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <ServiceIntakeWizard />
        </div>
      </section>
    </>
  );
}
