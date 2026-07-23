import { Plus } from "lucide-react";
import { faqs } from "@/lib/site";

export function FaqList({ limit }: { limit?: number }) {
  return (
    <div className="divide-y divide-steel-200 border-y border-steel-200">
      {faqs.slice(0, limit).map((faq) => (
        <details key={faq.question} className="group bg-white open:bg-offwhite-50">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 px-5 py-4 font-semibold text-graphite-950 marker:hidden sm:px-7">
            <span>{faq.question}</span>
            <Plus
              aria-hidden="true"
              className="shrink-0 transition-transform group-open:rotate-45"
              size={21}
            />
          </summary>
          <div className="max-w-3xl px-5 pb-6 text-steel-700 sm:px-7">
            <p>{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
