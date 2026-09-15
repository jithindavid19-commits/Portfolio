import { instagramInsights } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SplitBar, RankedBars, Sparkline } from "@/components/ui/InsightBars";
import Frame from "@/components/ui/Frame";
import SectionBackground from "@/components/ui/SectionBackground";

export default function InstagramInsights() {
  const d = instagramInsights;

  return (
    <div className="relative overflow-hidden border-t border-ink-line bg-ink-raised py-20 md:py-28">
      <SectionBackground
        src="/assets/photography/music-02.jpg"
        opacity={28}
        className="absolute inset-x-0 top-0 h-[360px]"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[360px] bg-gradient-to-b from-ink-raised/75 via-ink-raised/85 to-ink-raised"
        aria-hidden
      />

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
            <div className="mt-6 border border-ink-line p-5">
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
              <div className="border border-ink-line p-6">
                <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.14em] text-paper-dim">
                  Viewer split
                </p>
                <SplitBar a={d.audienceSplit.a} b={d.audienceSplit.b} />
              </div>
              <div className="border border-ink-line p-6">
                <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.14em] text-paper-dim">
                  Gender
                </p>
                <SplitBar a={d.genderSplit.a} b={d.genderSplit.b} />
              </div>
              <div className="border border-ink-line p-6">
                <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.14em] text-paper-dim">
                  Age range
                </p>
                <RankedBars items={d.ageRange} maxValue={100} />
              </div>
              <div className="border border-ink-line p-6">
                <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.14em] text-paper-dim">
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
