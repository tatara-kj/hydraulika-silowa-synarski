import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { BrandMark } from "./brand-mark";
import { navigation, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="technical-grid bg-graphite-950 pb-24 text-white md:pb-0">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-16 md:grid-cols-12 md:px-6 md:py-20 lg:px-8">
        <div className="md:col-span-5">
          <BrandMark inverted />
          <p className="mt-7 max-w-md text-base text-steel-200">
            Naprawa hydrauliki siłowej oraz naprawa i produkcja siłowników
            hydraulicznych. Zakres każdego zlecenia ustalamy po identyfikacji
            elementu i rozmowie.
          </p>
        </div>
        <div className="md:col-span-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-steel-300">
            Nawigacja
          </h2>
          <ul className="mt-5 grid gap-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="inline-flex min-h-11 items-center text-steel-100 hover:text-white"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-steel-300">
            Bezpośredni kontakt
          </h2>
          <a
            href={siteConfig.phoneHref}
            className="mt-5 inline-flex min-h-12 items-center gap-3 font-heading text-3xl font-bold hover:text-hydraulic-100"
          >
            <Phone aria-hidden="true" size={24} fill="currentColor" />
            {siteConfig.phoneDisplay}
          </a>
          <a
            href={siteConfig.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 flex min-h-11 items-start gap-3 text-steel-200 hover:text-white"
          >
            <MapPin aria-hidden="true" className="mt-1 shrink-0" size={20} />
            <span>
              {siteConfig.addressLine}, {siteConfig.postalLine}
              <ArrowUpRight aria-hidden="true" className="ml-2 inline" size={16} />
            </span>
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-5 py-6 text-xs text-steel-300 md:flex-row md:justify-between md:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}</p>
          <p>NIP {siteConfig.nip} · REGON {siteConfig.regon}</p>
        </div>
      </div>
    </footer>
  );
}
