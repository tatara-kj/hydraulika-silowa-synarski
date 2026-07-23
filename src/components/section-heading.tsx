export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-12 md:items-end">
      <div className="section-rule pt-5 md:col-span-7">
        <p
          className={`font-data text-xs font-semibold uppercase tracking-[0.18em] ${
            light ? "text-hydraulic-100" : "text-hydraulic-700"
          }`}
        >
          {eyebrow}
        </p>
        <h2
          className={`mt-3 text-4xl leading-[1.02] sm:text-5xl ${
            light ? "text-white" : "text-graphite-950"
          }`}
        >
          {title}
        </h2>
      </div>
      {intro ? (
        <p
          className={`max-w-xl text-lg md:col-span-5 ${
            light ? "text-steel-200" : "text-steel-700"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
