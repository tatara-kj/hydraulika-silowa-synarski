import { ArrowLeft, Phone } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="technical-grid bg-graphite-950 px-5 py-24 text-white md:py-32">
      <div className="mx-auto max-w-3xl">
        <p className="font-data text-sm text-hydraulic-100">BŁĄD 404</p>
        <h1 className="mt-5 text-6xl leading-none text-white sm:text-7xl">Tej strony nie ma</h1>
        <p className="mt-6 max-w-2xl text-lg text-steel-200">
          Adres mógł się zmienić. Wróć do strony głównej albo zadzwoń bezpośrednio do firmy.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="inline-flex min-h-14 items-center justify-center gap-3 bg-white px-6 font-bold text-graphite-950">
            <ArrowLeft aria-hidden="true" size={19} />
            Strona główna
          </Link>
          <a href={siteConfig.phoneHref} className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/40 px-6 font-bold text-white">
            <Phone aria-hidden="true" size={19} fill="currentColor" />
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
