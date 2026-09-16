import type { ReactNode } from "react";
import { instagramInsights } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SplitBar, RankedBars, Sparkline } from "@/components/ui/InsightBars";
import Frame from "@/components/ui/Frame";
import SectionBackground from "@/components/ui/SectionBackground";

function PanelIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-accent"
      aria-hidden
    >
      {children}
    </svg>
  );
}

export default function InstagramInsights() {
  const d = instagramInsights;

  return (
    <div className="relative overflow-hidden border-t border-ink-line bg-ink-raised py-20 md:py-28">
      <SectionBackground src="/assets/photography/music-02.jpg" opacity={58} />
      <div className="pointer-events-none absolute inset-0 bg-ink-raised/30" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">{d.eyebrow}</p>
            <h3 className="mt-4 max-w-lg font-display text-2xl leading-[1.2] tracking-tight text-paper md:text-3xl">
              {d.title}
            </h3>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-paper-dim">{d.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <Frame
              src={d.reelGrid.path}
              alt={d.reelGrid.label}
              label={d.reelGrid.label}
              index="01"
              className="aspect-[977/2000] w-full"
              fit="contain"
            />
          </Reveal>

          <Reveal delay={0.05} className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-px overflow-hidden border border-ink-line bg-ink-line">
              {d.stats.map((s) => (
                <div key={s.label} className="bg-ink-raised p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper-dim">
                    {s.label}
                  </p>
                  <p className="mt-2 font-sans text-3xl font-semibold text-paper">{s.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 border border-ink-line bg-ink-raised p-5">
              <div className="mb-3 flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper-dim">
                  Views · {d.period}
                </p>
              </div>
              <Sparkline data={d.viewsTrend} className="h-14 w-full" />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="border border-ink-line bg-ink-raised p-6">
                <p className="mb-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-paper-dim">
                  <PanelIcon>
                    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
                    <circle cx="12" cy="12" r="2.75" />
                  </PanelIcon>
                  Viewer split
                </p>
                <SplitBar a={d.audienceSplit.a} b={d.audienceSplit.b} />
              </div>
              <div className="border border-ink-line bg-ink-raised p-6">
                <p className="mb-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-paper-dim">
                  <PanelIcon>
                    <circle cx="9" cy="7" r="3" />
                    <path d="M3.5 19c0-2.7 2.2-4.5 5.5-4.5s5.5 1.8 5.5 4.5M16 4.5a3 3 0 0 1 0 6M18.5 14.2c1.9.4 3 1.7 3 3.3" />
                  </PanelIcon>
                  Gender
                </p>
                <SplitBar a={d.genderSplit.a} b={d.genderSplit.b} />
              </div>
              <div className="border border-ink-line bg-ink-raised p-6">
                <p className="mb-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-paper-dim">
                  <PanelIcon>
                    <rect x="3.5" y="4.5" width="17" height="16" rx="1.5" />
                    <path d="M3.5 9.5h17M8 3v3M16 3v3" />
                  </PanelIcon>
                  Age range
                </p>
                <RankedBars items={d.ageRange} maxValue={100} />
              </div>
              <div className="border border-ink-line bg-ink-raised p-6">
                <p className="mb-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-paper-dim">
                  <PanelIcon>
                    <rect x="3.5" y="3.5" width="7.5" height="7.5" rx="1" />
                    <rect x="13" y="3.5" width="7.5" height="7.5" rx="1" />
                    <rect x="3.5" y="13" width="7.5" height="7.5" rx="1" />
                    <rect x="13" y="13" width="7.5" height="7.5" rx="1" />
                  </PanelIcon>
                  Content type
                </p>
                <RankedBars items={d.contentType} maxValue={100} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
