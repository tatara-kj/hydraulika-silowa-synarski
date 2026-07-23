import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { services } from "@/lib/site";

type Service = (typeof services)[number];

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card-lift group flex h-full flex-col border border-steel-200 bg-white p-6 transition-colors hover:border-hydraulic-600 sm:p-8">
      <div className="flex items-center justify-between">
        <span className="font-data text-sm font-semibold text-hydraulic-700">
          {service.number}
        </span>
        <span aria-hidden="true" className="h-px w-16 bg-steel-200 group-hover:bg-hydraulic-600" />
      </div>
      <h3 className="mt-10 text-3xl leading-tight text-graphite-950">
        {service.title}
      </h3>
      <p className="mt-4 flex-1 text-steel-700">{service.short}</p>
      <Link
        href={service.href}
        className="mt-8 inline-flex min-h-11 items-center gap-3 font-bold text-hydraulic-800"
      >
        Sprawdź zakres
        <ArrowRight
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-1"
          size={19}
        />
      </Link>
    </article>
  );
}
