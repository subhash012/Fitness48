import { stats } from "@/data/site";

export function StatGrid() {
  return (
    <div className="container-width grid gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
      {stats.map((stat) => (
        <div key={stat.label} className="glass rounded-3xl p-6">
          <p className="font-display text-3xl text-white">{stat.value}</p>
          <p className="mt-2 text-sm text-white/60">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}