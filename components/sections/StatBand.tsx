import { statBand } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export default function StatBand() {
  return (
    <div className="border-y border-ink-line bg-ink-raised">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-ink-line md:grid-cols-4 md:divide-y-0">
        {statBand.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.06} y={14}>
            <div className="px-6 py-8 text-center md:py-10">
              <p className="font-display text-3xl text-paper md:text-4xl">{stat.value}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-paper-dim">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
