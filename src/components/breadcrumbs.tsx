import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function Breadcrumbs({ current, inverted = false }: { current: string; inverted?: boolean }) {
  return (
    <nav aria-label="Okruszki" className="mb-8">
      <ol className={`flex flex-wrap items-center gap-2 text-sm ${inverted ? "text-steel-300" : "text-steel-600"}`}>
        <li>
          <Link className={inverted ? "hover:text-white" : "hover:text-hydraulic-700"} href="/">
            Strona główna
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight size={15} />
        </li>
        <li aria-current="page" className={`font-semibold ${inverted ? "text-white" : "text-graphite-950"}`}>
          {current}
        </li>
      </ol>
    </nav>
  );
}
