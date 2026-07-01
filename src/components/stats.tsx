import { stats } from "@/lib/constants";

export function Stats() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="glass-strong grid grid-cols-2 gap-6 rounded-2xl p-8 md:grid-cols-4 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold tracking-tight text-theme md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-theme-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
