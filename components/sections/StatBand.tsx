import { statBand } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

const ICONS = [
  // Creators managed — people
  <path key="creators" d="M7 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm10 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM2.5 18c0-2.8 2-4.5 4.5-4.5s4.5 1.7 4.5 4.5M12.5 18c0-2.8 2-4.5 4.5-4.5s4.5 1.7 4.5 4.5" />,
  // Campaigns delivered — rocket/target
  <path key="campaigns" d="M12 2.5c2.5 2 4 5.2 4 8.5 0 2-1 4-4 8-3-4-4-6-4-8 0-3.3 1.5-6.5 4-8.5ZM8.5 13 5 15.5m10.5-2.5 3.5 2.5M9.5 17 8 20.5M14.5 17 16 20.5" />,
  // Posts analysed — bar chart
  <path key="posts" d="M4 20V10m6.5 10V4m6.5 16v-7" />,
  // Faster turnaround — lightning
  <path key="turnaround" d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12L13 2Z" />,
];

export default function StatBand() {
  return (
    <div className="border-y border-ink-line bg-ink-raised">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-ink-line md:grid-cols-4 md:divide-y-0">
        {statBand.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.06} y={14}>
            <div className="group px-6 py-8 text-center md:py-10">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto mb-3 text-accent/70 transition-transform duration-300 group-hover:scale-110 group-hover:text-accent"
                aria-hidden
              >
                {ICONS[i % ICONS.length]}
              </svg>
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
