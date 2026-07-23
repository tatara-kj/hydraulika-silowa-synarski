"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function CopyButton({ label, value }: { label: string; value: string }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const resetTimer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (resetTimer.current !== null) window.clearTimeout(resetTimer.current);
    },
    [],
  );

  function scheduleReset() {
    if (resetTimer.current !== null) window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setStatus("idle"), 1800);
  }

  function fallbackCopy() {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();
    if (!copied) throw new Error("Clipboard unavailable");
  }

  async function copy() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        fallbackCopy();
      }
      setStatus("success");
      scheduleReset();
    } catch {
      try {
        fallbackCopy();
        setStatus("success");
        scheduleReset();
      } catch {
        setStatus("error");
      }
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={copy}
        className={`inline-flex min-h-11 items-center gap-2 px-1 text-sm font-bold ${
          status === "error" ? "text-safety-700" : "text-hydraulic-800 hover:text-hydraulic-600"
        }`}
        aria-label={`Kopiuj: ${label}`}
      >
        {status === "success" ? <Check aria-hidden="true" size={18} /> : <Copy aria-hidden="true" size={18} />}
        {status === "success" ? "Skopiowano" : status === "error" ? "Kopiowanie zablokowane" : "Kopiuj"}
      </button>
      <span className="sr-only" aria-live="polite">
        {status === "success"
          ? `${label} skopiowano do schowka`
          : status === "error"
            ? `Nie udało się skopiować: ${label}. Zaznacz dane ręcznie.`
            : ""}
      </span>
    </div>
  );
}
