import { music } from "@/lib/data";
import { Reveal, RevealWords } from "@/components/ui/Reveal";
import VideoFrame from "@/components/ui/VideoFrame";
import SectionBackground from "@/components/ui/SectionBackground";

export default function Music() {
  return (
    <section id="music" className="theme-inverted relative border-t border-ink-line bg-ink-raised py-24 md:py-36">
      {/* Backdrop — a real photo from one of Jithin's own gigs. */}
      <SectionBackground src="/assets/photography/music-01.jpg" opacity={80} />
      <div className="pointer-events-none absolute inset-0 bg-ink/25" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">04</span>
          <span className="h-px flex-1 max-w-16 bg-ink-line" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-paper-dim">
            {music.eyebrow}
          </span>
          {/* Little equalizer flourish — a small nod to the DJ set itself. */}
          <span className="flex items-end gap-[3px]" aria-hidden>
            {[0, 0.15, 0.3, 0.1].map((delay, i) => (
              <span
                key={i}
                className="h-3.5 w-[3px] origin-bottom animate-eq rounded-full bg-accent"
                style={{ animationDelay: `${delay}s` }}
              />
            ))}
          </span>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <RevealWords
              as="h2"
              text={music.title}
              className="font-display text-4xl leading-[1.05] tracking-tight text-paper md:text-6xl"
            />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-paper-dim md:text-lg">
                {music.description}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <VideoFrame
                src={music.video}
                poster={music.poster}
                label="DJ set video"
                className="aspect-video w-full"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
