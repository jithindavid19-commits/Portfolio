"use client";

import { motion } from "framer-motion";

type SplitBarProps = {
  a: { label: string; value: number };
  b: { label: string; value: number };
};

/** Two-segment proportion bar — the highlighted entity in accent, the
 * complement in a muted track, per the site's single-accent-hue system. */
export function SplitBar({ a, b }: SplitBarProps) {
  return (
    <div>
      <div className="flex h-2.5 w-full overflow-hidden rounded-full" style={{ gap: 2 }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${a.value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-accent"
        />
        <div className="h-full flex-1 rounded-full bg-paper-dim/15" />
      </div>
      <div className="mt-2.5 flex justify-between font-mono text-[11px] uppercase tracking-[0.1em] text-paper-dim">
        <span>
          {a.label} <span className="text-paper">{a.value}%</span>
        </span>
        <span>
          {b.label} <span className="text-paper">{b.value}%</span>
        </span>
      </div>
    </div>
  );
}

type RankedBarsProps = {
  items: { label: string; value: number }[];
  maxValue?: number;
};

/** Single-hue horizontal bars — magnitude carried by length, not color. */
export function RankedBars({ items, maxValue }: RankedBarsProps) {
  const max = maxValue ?? Math.max(...items.map((i) => i.value));
  return (
    <div className="space-y-3.5">
      {items.map((item, i) => (
        <div key={item.label} className="flex items-center gap-4">
          <span className="w-14 shrink-0 font-mono text-[11px] uppercase tracking-[0.1em] text-paper-dim">
            {item.label}
          </span>
          <div className="h-2 flex-1 rounded-full bg-paper-dim/10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(item.value / max) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-full bg-accent"
            />
          </div>
          <span className="w-12 shrink-0 text-right font-sans text-sm text-paper">{item.value}%</span>
        </div>
      ))}
    </div>
  );
}

type SparklineProps = {
  data: number[];
  className?: string;
};

/** A single-series illustrative trend line — no axis, no legend (per spec,
 * a single series needs neither); 2px line, ~10% opacity area wash. */
export function Sparkline({ data, className = "" }: SparklineProps) {
  const w = 240;
  const h = 56;
  const max = Math.max(...data);
  const min = 0;
  const step = w / (data.length - 1);
  const points = data.map((v, i) => {
    const x = i * step;
    const y = h - ((v - min) / (max - min)) * h;
    return [x, y];
  });
  const linePath = points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L${w},${h} L0,${h} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={className} preserveAspectRatio="none" aria-hidden>
      <path d={areaPath} fill="var(--color-accent)" opacity={0.12} />
      <motion.path
        d={linePath}
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth={2}
        strokeLinejoin="round"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}
