import { ArrowUpRight, Download, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { CopyButton } from "./copy-button";

export function ContactTools() {
  const fullAddress = `${siteConfig.addressLine}, ${siteConfig.postalLine}`;

  return (
    <div className="grid gap-px bg-steel-200 border border-steel-200 sm:grid-cols-2">
      <section className="bg-white p-6 sm:p-8">
        <Phone aria-hidden="true" className="text-hydraulic-700" size={26} />
        <h2 className="mt-6 text-3xl">Telefon</h2>
        <a
          href={siteConfig.phoneHref}
          className="mt-3 inline-block font-heading text-4xl font-bold text-graphite-950 hover:text-hydraulic-700"
        >
          {siteConfig.phoneDisplay}
        </a>
        <CopyButton label="Numer telefonu" value={siteConfig.phoneDisplay} />
      </section>
      <section className="bg-white p-6 sm:p-8">
        <MapPin aria-hidden="true" className="text-hydraulic-700" size={26} />
        <h2 className="mt-6 text-3xl">Warsztat</h2>
        <p className="mt-3 text-lg font-semibold text-graphite-950">{fullAddress}</p>
        <CopyButton label="Adres" value={fullAddress} />
      </section>
      <a
        href={siteConfig.directionsUrl}
        target="_blank"
        rel="noreferrer"
        className="flex min-h-16 items-center justify-between gap-4 bg-graphite-950 px-6 font-bold text-white hover:bg-graphite-800 sm:px-8"
      >
        Otwórz trasę w Mapach Google
        <ArrowUpRight aria-hidden="true" size={20} />
      </a>
      <a
        href="/hydraulika-silowa-seweryn-synarski.vcf"
        download
        className="flex min-h-16 items-center justify-between gap-4 bg-hydraulic-700 px-6 font-bold text-white hover:bg-hydraulic-800 sm:px-8"
      >
        Pobierz wizytówkę vCard
        <Download aria-hidden="true" size={20} />
      </a>
    </div>
  );
}
