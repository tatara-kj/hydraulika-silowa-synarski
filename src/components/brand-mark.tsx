import Link from "next/link";

export function BrandMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/"
      className="group flex min-h-11 items-center gap-3"
      aria-label="Hydraulika Siłowa Seweryn Synarski — strona główna"
    >
      <span
        aria-hidden="true"
        className={`grid size-11 shrink-0 place-items-center border-2 font-data text-sm font-semibold tracking-[-0.08em] transition-colors ${
          inverted
            ? "border-white text-white group-hover:border-hydraulic-100"
            : "border-graphite-950 bg-graphite-950 text-white group-hover:border-hydraulic-700 group-hover:bg-hydraulic-700"
        }`}
      >
        HS
      </span>
      <span className="leading-none">
        <span
          className={`block font-heading text-[1.08rem] font-bold uppercase tracking-[0.04em] sm:text-xl ${
            inverted ? "text-white" : "text-graphite-950"
          }`}
        >
          Hydraulika Siłowa
        </span>
        <span
          className={`mt-1 block text-xs font-semibold uppercase tracking-[0.18em] ${
            inverted ? "text-steel-300" : "text-steel-600"
          }`}
        >
          Seweryn Synarski
        </span>
      </span>
    </Link>
  );
}
