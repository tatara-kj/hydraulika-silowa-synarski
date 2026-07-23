"use client";

import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, siteConfig } from "@/lib/site";
import { BrandMark } from "./brand-mark";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hidden border-b border-steel-200 bg-graphite-950 text-steel-200 md:block">
        <div className="mx-auto flex h-9 max-w-[1280px] items-center justify-between px-6 text-xs font-semibold uppercase tracking-[0.12em] lg:px-8">
          <span>{siteConfig.locality}</span>
          <span>Godziny wg wizytówki Google · pn–pt 08:00–16:00 · sob. 08:00–13:00</span>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-steel-200 bg-offwhite-50/95 backdrop-blur-md">
        <div className="mx-auto flex h-[5.25rem] max-w-[1280px] items-center justify-between gap-5 px-5 md:h-24 md:px-6 lg:px-8">
          <BrandMark />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Główna nawigacja">
            {navigation.map((item) => {
              const current = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={`flex min-h-11 items-center border-b-2 px-4 text-sm font-semibold transition-colors ${
                    current
                      ? "border-hydraulic-700 text-hydraulic-800"
                      : "border-transparent text-graphite-800 hover:border-steel-300 hover:text-hydraulic-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/zgloszenie"
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-steel-300 bg-white px-4 text-sm font-bold text-graphite-950 transition-colors hover:border-hydraulic-700 hover:text-hydraulic-700"
            >
              Opisz usterkę
              <ArrowUpRight aria-hidden="true" size={17} strokeWidth={2} />
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-hydraulic-700 px-5 text-sm font-bold text-white transition-colors hover:bg-hydraulic-800"
            >
              <Phone aria-hidden="true" size={17} fill="currentColor" />
              {siteConfig.phoneDisplay}
            </a>
          </div>
          <button
            type="button"
            className="grid size-12 place-items-center border border-steel-300 bg-white text-graphite-950 lg:hidden"
            aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
        <div
          id="mobile-navigation"
          className={`${isOpen ? "grid" : "hidden"} border-t border-steel-200 bg-offwhite-50 px-5 pb-6 pt-3 lg:hidden`}
        >
          <nav className="grid" aria-label="Nawigacja mobilna">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                aria-current={pathname === item.href ? "page" : undefined}
                className="flex min-h-14 items-center justify-between border-b border-steel-200 text-lg font-semibold"
              >
                {item.label}
                <ArrowUpRight aria-hidden="true" size={19} />
              </Link>
            ))}
            <Link
              href="/zgloszenie"
              onClick={() => setIsOpen(false)}
              className="mt-5 inline-flex min-h-14 items-center justify-center bg-graphite-950 px-5 font-bold text-white"
            >
              Przygotuj zgłoszenie
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
