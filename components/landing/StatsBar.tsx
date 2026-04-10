export default function StatsBar() {
  return (
    <section className="w-full border-y bg-muted/40 py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-around md:gap-4 divide-y md:divide-y-0 md:divide-x divide-border/60">
          <div className="flex flex-col items-center justify-center w-full py-10 md:py-0">
            <span className="text-5xl font-semibold tracking-tight mb-2">10,000+</span>
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest text-center">Tasks completed daily</span>
          </div>
          <div className="flex flex-col items-center justify-center w-full py-10 md:py-0">
            <span className="text-5xl font-semibold tracking-tight mb-2">2 min</span>
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest text-center">Average setup time</span>
          </div>
          <div className="flex flex-col items-center justify-center w-full py-10 md:py-0">
            <span className="text-5xl font-semibold tracking-tight mb-2">98%</span>
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest text-center">Users feel organized</span>
          </div>
        </div>
      </div>
    </section>
  );
}
