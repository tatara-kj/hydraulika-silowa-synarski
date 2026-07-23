"use client";

import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  FileImage,
  LoaderCircle,
  Phone,
  RotateCcw,
  Trash2,
  Upload,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useId, useRef, useState, type ChangeEvent } from "react";
import { siteConfig } from "@/lib/site";

const steps = [
  "Maszyna / element",
  "Objawy",
  "Miejsce i sytuacja",
  "Zdjęcia / film",
  "Kontakt i termin",
  "Podsumowanie",
] as const;

const allowedTypes = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "video/mp4",
  "video/quicktime",
]);

type FormData = {
  equipmentType: string;
  manufacturer: string;
  model: string;
  marking: string;
  symptoms: string;
  symptomStart: string;
  urgency: string;
  location: string;
  machineStopped: string;
  contactName: string;
  phone: string;
  email: string;
  company: string;
  nip: string;
  preferredDate: string;
  preferredTime: string;
};

type PreviewFile = {
  file: File;
  url: string;
};

const initialData: FormData = {
  equipmentType: "",
  manufacturer: "",
  model: "",
  marking: "",
  symptoms: "",
  symptomStart: "",
  urgency: "standardowa potrzeba",
  location: "",
  machineStopped: "",
  contactName: "",
  phone: "",
  email: "",
  company: "",
  nip: "",
  preferredDate: "",
  preferredTime: "",
};

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  type = "text",
  autoComplete,
  inputMode,
}: {
  label: string;
  name: keyof FormData;
  value: string;
  onChange: (name: keyof FormData, value: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  type?: string;
  autoComplete?: string;
  inputMode?: "numeric" | "text" | "tel" | "email" | "decimal" | "search" | "url";
}) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-graphite-950" htmlFor={id}>
        {label} {required ? <span className="text-safety-700">*</span> : null}
      </label>
      <input
        className="field"
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => onChange(name, event.target.value)}
      />
      {error ? (
        <p id={errorId} className="mt-2 flex items-center gap-2 text-sm font-semibold text-safety-700">
          <AlertTriangle aria-hidden="true" size={16} />
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function ServiceIntakeWizard() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initialData);
  const [files, setFiles] = useState<PreviewFile[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [fileError, setFileError] = useState("");
  const [isPreparing, setIsPreparing] = useState(false);
  const reduceMotion = useReducedMotion();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const createdUrls = useRef<string[]>([]);
  const summaryTimer = useRef<number | null>(null);

  useEffect(() => {
    const urls = createdUrls.current;
    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
      if (summaryTimer.current !== null) window.clearTimeout(summaryTimer.current);
    };
  }, []);

  function update(name: keyof FormData, value: string) {
    setData((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  function validateCurrentStep() {
    const nextErrors: Record<string, string> = {};

    if (step === 0 && !data.equipmentType.trim()) {
      nextErrors.equipmentType = "Podaj typ maszyny lub elementu.";
    }
    if (step === 1 && data.symptoms.trim().length < 10) {
      nextErrors.symptoms = "Opisz objawy w co najmniej kilku słowach.";
    }
    if (step === 2) {
      if (!data.location.trim()) nextErrors.location = "Podaj lokalizację maszyny lub elementu.";
      if (!data.machineStopped) nextErrors.machineStopped = "Wybierz stan maszyny.";
    }
    if (step === 4) {
      if (!data.contactName.trim()) nextErrors.contactName = "Podaj imię osoby do kontaktu.";
      if (data.phone.replace(/\D/g, "").length < 7) {
        nextErrors.phone = "Podaj prawidłowy numer telefonu.";
      }
      if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) {
        nextErrors.email = "Sprawdź format adresu e-mail.";
      }
      if (data.nip && data.nip.replace(/\D/g, "").length !== 10) {
        nextErrors.nip = "NIP powinien zawierać 10 cyfr.";
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function nextStep() {
    if (!validateCurrentStep()) return;
    if (step === 4) {
      setIsPreparing(true);
      summaryTimer.current = window.setTimeout(() => {
        setIsPreparing(false);
        setStep(5);
      }, 450);
      return;
    }
    setStep((current) => Math.min(current + 1, steps.length - 1));
  }

  function previousStep() {
    setErrors({});
    setStep((current) => Math.max(current - 1, 0));
  }

  function handleFiles(event: ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(event.target.files ?? []);
    setFileError("");

    if (files.length + selected.length > 5) {
      setFileError("W podglądzie można umieścić maksymalnie 5 plików.");
      event.target.value = "";
      return;
    }

    const invalid = selected.find(
      (file) => !allowedTypes.has(file.type) || file.size > 50 * 1024 * 1024,
    );
    if (invalid) {
      setFileError(
        "Dodaj pliki JPG, PNG, WebP, MP4 lub MOV, każdy o rozmiarze do 50 MB.",
      );
      event.target.value = "";
      return;
    }

    const previews = selected.map((file) => {
      const url = URL.createObjectURL(file);
      createdUrls.current.push(url);
      return { file, url };
    });
    setFiles((current) => [...current, ...previews]);
    event.target.value = "";
  }

  function removeFile(url: string) {
    URL.revokeObjectURL(url);
    createdUrls.current = createdUrls.current.filter((createdUrl) => createdUrl !== url);
    setFiles((current) => current.filter((item) => item.url !== url));
  }

  function reset() {
    createdUrls.current.forEach((url) => URL.revokeObjectURL(url));
    createdUrls.current = [];
    setFiles([]);
    setData(initialData);
    setErrors({});
    setFileError("");
    if (summaryTimer.current !== null) window.clearTimeout(summaryTimer.current);
    summaryTimer.current = null;
    setStep(0);
  }

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <div className="overflow-hidden border border-steel-200 bg-white shadow-[0_20px_60px_rgba(23,29,34,0.08)]">
      <div className="border-b border-steel-200 bg-[#eaf6fd] p-5 sm:p-6" role="status">
        <div className="flex items-start gap-3">
          <AlertTriangle aria-hidden="true" className="mt-0.5 shrink-0 text-hydraulic-800" size={21} />
          <div>
            <p className="font-bold text-graphite-950">Wersja demonstracyjna</p>
            <p className="mt-1 text-sm text-steel-700">
              Dane i pliki pozostają w tej karcie przeglądarki i nie zostaną wysłane
              do firmy. Aby zgłosić zlecenie, zadzwoń pod numer {siteConfig.phoneDisplay}.
            </p>
          </div>
        </div>
      </div>

      <div className="border-b border-steel-200 px-5 py-5 sm:px-8">
        <div className="flex items-center justify-between gap-5">
          <p className="font-data text-xs font-semibold uppercase tracking-[0.15em] text-hydraulic-700">
            Krok {step + 1} / {steps.length}
          </p>
          <p className="text-sm font-semibold text-steel-700">{steps[step]}</p>
        </div>
        <div
          className="mt-4 h-1.5 bg-steel-100"
          role="progressbar"
          aria-label="Postęp formularza"
          aria-valuemin={1}
          aria-valuemax={steps.length}
          aria-valuenow={step + 1}
        >
          <div
            className="h-full bg-hydraulic-600 transition-[width] duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <ol className="mt-4 hidden grid-cols-6 gap-2 text-xs font-semibold text-steel-600 lg:grid">
          {steps.map((label, index) => (
            <li key={label} className={index === step ? "text-hydraulic-800" : ""}>
              {String(index + 1).padStart(2, "0")} · {label}
            </li>
          ))}
        </ol>
      </div>

      {Object.keys(errors).length > 0 ? (
        <div className="mx-5 mt-6 border-l-4 border-safety-600 bg-[#fff4eb] p-4 sm:mx-8" role="alert">
          <p className="font-bold text-safety-700">Uzupełnij oznaczone pola, aby przejść dalej.</p>
        </div>
      ) : null}

      <form onSubmit={(event) => event.preventDefault()} noValidate>
        <div className="min-h-[29rem] p-5 sm:p-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={step}
              initial={reduceMotion ? false : { opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, x: -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
            >
              {step === 0 ? (
                <section aria-labelledby="step-equipment">
                  <h2 id="step-equipment" className="text-3xl sm:text-4xl">
                    Co wymaga oceny?
                  </h2>
                  <p className="mt-3 max-w-2xl text-steel-700">
                    Zacznij od nazwy maszyny, urządzenia albo samego komponentu.
                  </p>
                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Typ maszyny lub elementu"
                      name="equipmentType"
                      value={data.equipmentType}
                      onChange={update}
                      placeholder="np. siłownik hydrauliczny"
                      required
                      error={errors.equipmentType}
                    />
                    <Field
                      label="Producent"
                      name="manufacturer"
                      value={data.manufacturer}
                      onChange={update}
                      placeholder="Jeśli jest znany"
                    />
                    <Field
                      label="Model maszyny"
                      name="model"
                      value={data.model}
                      onChange={update}
                      placeholder="Model lub typ"
                    />
                    <Field
                      label="Oznaczenie komponentu"
                      name="marking"
                      value={data.marking}
                      onChange={update}
                      placeholder="Numer lub oznaczenie z tabliczki"
                    />
                  </div>
                </section>
              ) : null}

              {step === 1 ? (
                <section aria-labelledby="step-symptoms">
                  <h2 id="step-symptoms" className="text-3xl sm:text-4xl">
                    Jak zachowuje się układ?
                  </h2>
                  <p className="mt-3 max-w-2xl text-steel-700">
                    Opisz obserwowane objawy. Nie uruchamiaj niesprawnej maszyny tylko
                    po to, by zebrać więcej informacji.
                  </p>
                  <div className="mt-8">
                    <label className="mb-2 block text-sm font-bold" htmlFor="symptoms">
                      Opis objawów <span className="text-safety-700">*</span>
                    </label>
                    <textarea
                      id="symptoms"
                      className="field min-h-40 resize-y"
                      value={data.symptoms}
                      onChange={(event) => update("symptoms", event.target.value)}
                      placeholder="Co się dzieje, kiedy zauważono problem, czy występuje wyciek, hałas lub spadek siły?"
                      aria-invalid={Boolean(errors.symptoms)}
                      aria-describedby={errors.symptoms ? "symptoms-error" : "symptoms-help"}
                    />
                    <p id="symptoms-help" className="mt-2 text-sm text-steel-600">
                      Nie wpisuj danych poufnych klienta ani numerów, których nie można udostępniać.
                    </p>
                    {errors.symptoms ? (
                      <p id="symptoms-error" className="mt-2 flex items-center gap-2 text-sm font-semibold text-safety-700">
                        <AlertTriangle aria-hidden="true" size={16} />
                        {errors.symptoms}
                      </p>
                    ) : null}
                  </div>
                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Kiedy pojawił się problem?"
                      name="symptomStart"
                      value={data.symptomStart}
                      onChange={update}
                      placeholder="np. dzisiaj, po postoju, stopniowo"
                    />
                    <div>
                      <label className="mb-2 block text-sm font-bold" htmlFor="urgency">
                        Pilność po stronie użytkownika
                      </label>
                      <select
                        id="urgency"
                        className="field"
                        value={data.urgency}
                        onChange={(event) => update("urgency", event.target.value)}
                      >
                        <option value="standardowa potrzeba">Standardowa potrzeba</option>
                        <option value="maszyna stoi">Maszyna stoi</option>
                        <option value="termin produkcyjny zagrożony">Termin pracy/produkcji zagrożony</option>
                      </select>
                      <p className="mt-2 text-sm text-steel-600">
                        Ten wybór nie oznacza SLA ani potwierdzenia awaryjnego dojazdu.
                      </p>
                    </div>
                  </div>
                </section>
              ) : null}

              {step === 2 ? (
                <section aria-labelledby="step-location">
                  <h2 id="step-location" className="text-3xl sm:text-4xl">
                    Gdzie jest maszyna i czy jest wyłączona?
                  </h2>
                  <p className="mt-3 max-w-2xl text-steel-700">
                    Lokalizacja pomaga przygotować rozmowę. Nie jest automatycznym
                    potwierdzeniem dojazdu.
                  </p>
                  <div className="mt-8 max-w-xl">
                    <Field
                      label="Lokalizacja maszyny lub elementu"
                      name="location"
                      value={data.location}
                      onChange={update}
                      placeholder="Miejscowość lub informacja: element w warsztacie"
                      required
                      error={errors.location}
                    />
                  </div>
                  <fieldset className="mt-7">
                    <legend className="text-sm font-bold">
                      Czy maszyna jest bezpiecznie wyłączona? <span className="text-safety-700">*</span>
                    </legend>
                    <div className="mt-3 grid gap-3 sm:grid-cols-3">
                      {[
                        ["tak", "Tak, jest wyłączona"],
                        ["nie", "Nie"],
                        ["nie dotyczy", "Nie dotyczy"],
                      ].map(([value, label]) => (
                        <label key={value} className="flex min-h-14 cursor-pointer items-center gap-3 border border-steel-200 bg-white p-4 hover:border-hydraulic-600">
                          <input
                            type="radio"
                            name="machineStopped"
                            value={value}
                            checked={data.machineStopped === value}
                            onChange={(event) => update("machineStopped", event.target.value)}
                            className="size-5 accent-hydraulic-700"
                          />
                          <span className="font-semibold">{label}</span>
                        </label>
                      ))}
                    </div>
                    {errors.machineStopped ? (
                      <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-safety-700" role="alert">
                        <AlertTriangle aria-hidden="true" size={16} />
                        {errors.machineStopped}
                      </p>
                    ) : null}
                  </fieldset>
                  {data.machineStopped === "nie" ? (
                    <div className="mt-6 border-l-4 border-safety-600 bg-[#fff4eb] p-4" role="alert">
                      <p className="font-bold text-safety-700">Nie podchodź do wycieku ani ruchomych elementów.</p>
                      <p className="mt-1 text-sm text-steel-700">
                        Zatrzymaj maszynę zgodnie z instrukcją producenta i zabezpiecz ją przed przypadkowym uruchomieniem.
                      </p>
                    </div>
                  ) : null}
                </section>
              ) : null}

              {step === 3 ? (
                <section aria-labelledby="step-media">
                  <h2 id="step-media" className="text-3xl sm:text-4xl">
                    Dodaj lokalny podgląd plików
                  </h2>
                  <p className="mt-3 max-w-2xl text-steel-700">
                    Pliki nie opuszczą urządzenia. Dodawaj wyłącznie bezpiecznie wykonane
                    materiały bez danych klienta, tablic rejestracyjnych i poufnych oznaczeń.
                  </p>
                  <div className="mt-8">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/jpeg,image/png,image/webp,video/mp4,video/quicktime"
                      multiple
                      onChange={handleFiles}
                      className="sr-only"
                      id="local-files"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex min-h-40 w-full flex-col items-center justify-center border-2 border-dashed border-steel-300 bg-offwhite-50 p-6 text-center transition-colors hover:border-hydraulic-600 hover:bg-white"
                    >
                      <Upload aria-hidden="true" className="text-hydraulic-700" size={30} />
                      <span className="mt-3 font-bold">Wybierz zdjęcia lub krótki film</span>
                      <span className="mt-1 text-sm text-steel-600">JPG, PNG, WebP, MP4, MOV · maks. 5 plików · do 50 MB każdy</span>
                    </button>
                    <p className="mt-2 text-xs text-steel-600">
                      Limit służy tylko sprawnemu podglądowi demo. Zasady produkcyjnego przesyłania plików wymagają backendu.
                    </p>
                    <div aria-live="polite">
                      {fileError ? (
                        <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-safety-700">
                          <AlertTriangle aria-hidden="true" size={16} />
                          {fileError}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  {files.length ? (
                    <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Lokalny podgląd plików">
                      {files.map(({ file, url }) => (
                        <li key={url} className="overflow-hidden border border-steel-200 bg-white">
                          <div className="relative aspect-video bg-graphite-900">
                            {file.type.startsWith("image/") ? (
                              <Image
                                src={url}
                                alt={`Podgląd pliku ${file.name}`}
                                fill
                                unoptimized
                                className="object-contain"
                              />
                            ) : (
                              <video className="size-full object-contain" controls muted preload="metadata">
                                <source src={url} type={file.type} />
                              </video>
                            )}
                          </div>
                          <div className="flex items-center justify-between gap-3 p-3">
                            <div className="min-w-0">
                              <p className="truncate text-sm font-semibold">{file.name}</p>
                              <p className="text-xs text-steel-600">{(file.size / 1024 / 1024).toFixed(1)} MB</p>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(url)}
                              className="grid size-11 shrink-0 place-items-center text-steel-700 hover:bg-[#fff4eb] hover:text-safety-700"
                              aria-label={`Usuń plik ${file.name}`}
                            >
                              <Trash2 aria-hidden="true" size={19} />
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="mt-6 flex min-h-20 items-center gap-3 border border-steel-200 bg-offwhite-50 p-4 text-sm text-steel-600">
                      <FileImage aria-hidden="true" size={21} />
                      Nie dodano plików. Ten krok jest opcjonalny.
                    </div>
                  )}
                </section>
              ) : null}

              {step === 4 ? (
                <section aria-labelledby="step-contact">
                  <h2 id="step-contact" className="text-3xl sm:text-4xl">
                    Dane do rozmowy i preferowany termin
                  </h2>
                  <p className="mt-3 max-w-2xl text-steel-700">
                    To ćwiczenie interfejsu. Termin nie jest rezerwacją i wymaga
                    telefonicznego potwierdzenia.
                  </p>
                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Imię"
                      name="contactName"
                      value={data.contactName}
                      onChange={update}
                      required
                      error={errors.contactName}
                      autoComplete="name"
                    />
                    <Field
                      label="Telefon"
                      name="phone"
                      value={data.phone}
                      onChange={update}
                      required
                      error={errors.phone}
                      type="tel"
                      autoComplete="tel"
                      placeholder="np. 600 000 000"
                    />
                    <Field
                      label="E-mail (opcjonalnie)"
                      name="email"
                      value={data.email}
                      onChange={update}
                      error={errors.email}
                      type="email"
                      autoComplete="email"
                    />
                    <Field
                      label="Firma (opcjonalnie)"
                      name="company"
                      value={data.company}
                      onChange={update}
                      autoComplete="organization"
                    />
                    <Field
                      label="NIP (opcjonalnie)"
                      name="nip"
                      value={data.nip}
                      onChange={update}
                      error={errors.nip}
                      inputMode="numeric"
                      placeholder="10 cyfr"
                    />
                  </div>
                  <div className="mt-8 border border-steel-200 bg-offwhite-50 p-5 sm:p-6">
                    <div className="flex items-start gap-3">
                      <CalendarDays aria-hidden="true" className="mt-1 shrink-0 text-hydraulic-700" size={23} />
                      <div>
                        <h3 className="text-2xl">Preferowany termin rozmowy lub oględzin</h3>
                        <p className="mt-1 text-sm text-steel-700">
                          Wybór nie potwierdza dostępności firmy ani wizyty.
                        </p>
                      </div>
                    </div>
                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Preferowana data"
                        name="preferredDate"
                        value={data.preferredDate}
                        onChange={update}
                        type="date"
                      />
                      <div>
                        <label className="mb-2 block text-sm font-bold" htmlFor="preferred-time">Pora dnia</label>
                        <select
                          id="preferred-time"
                          className="field"
                          value={data.preferredTime}
                          onChange={(event) => update("preferredTime", event.target.value)}
                        >
                          <option value="">Bez preferencji</option>
                          <option value="rano">Rano</option>
                          <option value="około południa">Około południa</option>
                          <option value="po południu">Po południu</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </section>
              ) : null}

              {step === 5 ? (
                <section aria-labelledby="step-summary">
                  <div className="flex size-14 items-center justify-center bg-[#e7f7ed] text-[#146c37]">
                    <Check aria-hidden="true" size={28} strokeWidth={3} />
                  </div>
                  <h2 id="step-summary" className="mt-5 text-3xl sm:text-4xl">
                    Podsumowanie jest gotowe — nic nie wysłano
                  </h2>
                  <p className="mt-3 max-w-3xl text-steel-700">
                    Użyj tych informacji jako listy podczas rozmowy telefonicznej. Dane
                    znikną po odświeżeniu strony lub wybraniu „Zacznij od nowa”.
                  </p>
                  <dl className="mt-8 grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-2">
                    {[
                      ["Maszyna / element", data.equipmentType],
                      ["Producent / model", [data.manufacturer, data.model].filter(Boolean).join(" · ") || "nie podano"],
                      ["Oznaczenie komponentu", data.marking || "nie podano"],
                      ["Objawy", data.symptoms],
                      ["Początek objawów", data.symptomStart || "nie podano"],
                      ["Pilność użytkownika", data.urgency],
                      ["Lokalizacja", data.location],
                      ["Maszyna wyłączona", data.machineStopped],
                      ["Kontakt", `${data.contactName} · ${data.phone}`],
                      ["E-mail", data.email || "nie podano"],
                      ["Firma / NIP", [data.company, data.nip ? `NIP ${data.nip}` : ""].filter(Boolean).join(" · ") || "nie podano"],
                      ["Preferowany termin", [data.preferredDate, data.preferredTime].filter(Boolean).join(" · ") || "nie wskazano"],
                      ["Pliki lokalne", files.length ? `${files.length} — niewysłane` : "nie dodano"],
                    ].map(([label, value]) => (
                      <div key={label} className="bg-white p-4 sm:p-5">
                        <dt className="font-data text-xs font-semibold uppercase tracking-[0.12em] text-steel-600">{label}</dt>
                        <dd className="mt-2 text-sm font-semibold text-graphite-950">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={siteConfig.phoneHref}
                      className="inline-flex min-h-14 items-center justify-center gap-3 bg-hydraulic-700 px-6 font-bold text-white hover:bg-hydraulic-800"
                    >
                      <Phone aria-hidden="true" size={20} fill="currentColor" />
                      Zadzwoń: {siteConfig.phoneDisplay}
                    </a>
                    <button
                      type="button"
                      onClick={reset}
                      className="inline-flex min-h-14 items-center justify-center gap-3 border border-steel-300 px-6 font-bold text-graphite-950 hover:border-graphite-950"
                    >
                      <RotateCcw aria-hidden="true" size={19} />
                      Zacznij od nowa
                    </button>
                  </div>
                </section>
              ) : null}
            </motion.div>
          </AnimatePresence>
        </div>

        {step < 5 ? (
          <div className="flex items-center justify-between gap-3 border-t border-steel-200 bg-offwhite-50 p-5 sm:px-8">
            <button
              type="button"
              onClick={previousStep}
              disabled={step === 0 || isPreparing}
              className="inline-flex min-h-12 items-center gap-2 px-3 font-bold text-steel-700 disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ArrowLeft aria-hidden="true" size={19} />
              Wstecz
            </button>
            <button
              type="button"
              onClick={nextStep}
              disabled={isPreparing}
              className="inline-flex min-h-12 items-center justify-center gap-3 bg-graphite-950 px-5 font-bold text-white hover:bg-graphite-800 disabled:cursor-wait disabled:opacity-70 sm:px-7"
            >
              {isPreparing ? (
                <>
                  <LoaderCircle aria-hidden="true" className="animate-spin" size={19} />
                  Tworzę podsumowanie
                </>
              ) : step === 4 ? (
                <>
                  Zobacz podsumowanie
                  <ArrowRight aria-hidden="true" size={19} />
                </>
              ) : (
                <>
                  Dalej
                  <ArrowRight aria-hidden="true" size={19} />
                </>
              )}
            </button>
          </div>
        ) : null}
      </form>
    </div>
  );
}
