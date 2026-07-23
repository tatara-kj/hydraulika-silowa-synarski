"use client";

import { AlertTriangle, RotateCcw } from "lucide-react";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="mx-auto grid min-h-[60vh] max-w-3xl place-items-center px-5 py-20 text-center">
      <div>
        <AlertTriangle aria-hidden="true" className="mx-auto text-safety-700" size={42} />
        <h1 className="mt-6 text-5xl">Nie udało się wyświetlić strony</h1>
        <p className="mt-4 text-lg text-steel-700">Spróbuj ponownie. Jeśli problem się powtarza, skorzystaj z bezpośredniego numeru telefonu.</p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex min-h-14 items-center gap-3 bg-graphite-950 px-6 font-bold text-white"
        >
          <RotateCcw aria-hidden="true" size={19} />
          Spróbuj ponownie
        </button>
      </div>
    </section>
  );
}
