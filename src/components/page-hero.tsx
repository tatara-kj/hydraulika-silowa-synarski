import { Breadcrumbs } from "./breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  intro,
  current,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  current: string;
}) {
  return (
    <section className="technical-grid border-b border-steel-200 bg-graphite-950 text-white">
      <div className="mx-auto max-w-[1280px] px-5 py-14 md:px-6 md:py-20 lg:px-8 lg:py-24">
        <Breadcrumbs current={current} inverted />
        <div className="grid gap-7 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="font-data text-xs font-semibold uppercase tracking-[0.2em] text-hydraulic-100">
              {eyebrow}
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl leading-[0.98] text-white sm:text-6xl lg:text-7xl">
              {title}
            </h1>
          </div>
          <div className="md:col-span-4 md:flex md:items-end">
            <p className="max-w-xl border-l-2 border-hydraulic-600 pl-5 text-lg leading-relaxed text-steel-200">
              {intro}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
