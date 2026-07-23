export default function Loading() {
  return (
    <div className="mx-auto min-h-[55vh] max-w-[1280px] px-5 py-20 md:px-6 lg:px-8" role="status" aria-live="polite">
      <span className="sr-only">Ładowanie strony</span>
      <div className="h-4 w-40 animate-pulse bg-steel-200" />
      <div className="mt-7 h-16 max-w-3xl animate-pulse bg-steel-200" />
      <div className="mt-5 h-5 max-w-xl animate-pulse bg-steel-100" />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {[0, 1, 2].map((item) => (
          <div key={item} className="h-64 animate-pulse border border-steel-200 bg-white" />
        ))}
      </div>
    </div>
  );
}
