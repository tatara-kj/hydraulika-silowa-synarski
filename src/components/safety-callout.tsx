import { ShieldAlert } from "lucide-react";

export function SafetyCallout({ compact = false }: { compact?: boolean }) {
  return (
    <aside
      className={`border-l-4 border-safety-600 bg-[#fff4eb] ${compact ? "p-5" : "p-6 sm:p-8"}`}
      aria-labelledby="safety-heading"
    >
      <div className="flex items-start gap-4">
        <ShieldAlert
          aria-hidden="true"
          className="mt-1 shrink-0 text-safety-700"
          size={compact ? 23 : 28}
        />
        <div>
          <h2 id="safety-heading" className="font-heading text-2xl text-graphite-950">
            Najpierw bezpiecznie zatrzymaj maszynę
          </h2>
          <p className="mt-2 text-steel-700">
            Nie dotykaj wycieku i nie rozłączaj przewodów pod ciśnieniem. Wyłącz
            maszynę zgodnie z jej instrukcją, zabezpiecz ją przed przypadkowym
            uruchomieniem i odgrodź strefę zagrożenia. Nie uruchamiaj urządzenia
            tylko po to, aby nagrać film.
          </p>
        </div>
      </div>
    </aside>
  );
}
