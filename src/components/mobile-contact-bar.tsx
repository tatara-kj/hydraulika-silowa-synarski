import { ClipboardList, Phone } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-steel-300 bg-white p-2 shadow-[0_-8px_30px_rgba(23,29,34,0.12)] md:hidden">
      <a
        href={siteConfig.phoneHref}
        className="inline-flex min-h-12 items-center justify-center gap-2 bg-hydraulic-700 px-3 text-sm font-bold text-white"
      >
        <Phone aria-hidden="true" size={18} fill="currentColor" />
        Zadzwoń
      </a>
      <Link
        href="/zgloszenie"
        className="inline-flex min-h-12 items-center justify-center gap-2 px-3 text-sm font-bold text-graphite-950"
      >
        <ClipboardList aria-hidden="true" size={18} />
        Opisz usterkę
      </Link>
    </div>
  );
}
