"use client";

import { Check, RotateCcw } from "lucide-react";
import { useState } from "react";
import { preparationItems } from "@/lib/site";

export function PreparationChecklist() {
  const [checked, setChecked] = useState<string[]>([]);
  const progress = Math.round((checked.length / preparationItems.length) * 100);

  function toggle(item: string) {
    setChecked((current) =>
      current.includes(item)
        ? current.filter((value) => value !== item)
        : [...current, item],
    );
  }

  return (
    <div className="border border-steel-200 bg-white">
      <div className="flex flex-col gap-4 border-b border-steel-200 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
        <div>
          <p className="font-data text-xs font-semibold uppercase tracking-[0.16em] text-hydraulic-700">
            Gotowość do rozmowy
          </p>
          <p className="mt-1 text-sm text-steel-600" aria-live="polite">
            Zaznaczono {checked.length} z {preparationItems.length} pozycji
          </p>
        </div>
        <button
          type="button"
          onClick={() => setChecked([])}
          disabled={checked.length === 0}
          className="inline-flex min-h-11 items-center gap-2 self-start px-2 text-sm font-bold text-steel-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <RotateCcw aria-hidden="true" size={17} />
          Wyczyść
        </button>
      </div>
      <div
        className="h-1.5 bg-steel-100"
        role="progressbar"
        aria-label="Postęp przygotowania"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full bg-hydraulic-600 transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <ul className="grid sm:grid-cols-2">
        {preparationItems.map((item) => {
          const active = checked.includes(item);
          return (
            <li key={item} className="border-b border-steel-100 sm:odd:border-r">
              <button
                type="button"
                role="checkbox"
                aria-checked={active}
                onClick={() => toggle(item)}
                className="flex min-h-[4.5rem] w-full items-center gap-4 p-4 text-left text-sm font-medium transition-colors hover:bg-offwhite-50 sm:p-5 sm:text-base"
              >
                <span
                  aria-hidden="true"
                  className={`grid size-7 shrink-0 place-items-center border-2 ${
                    active
                      ? "border-hydraulic-700 bg-hydraulic-700 text-white"
                      : "border-steel-300 bg-white text-transparent"
                  }`}
                >
                  <Check size={17} strokeWidth={3} />
                </span>
                <span className={active ? "text-steel-600 line-through" : "text-graphite-950"}>
                  {item}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
