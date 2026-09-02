import { music } from "@/lib/data";
import { Reveal, RevealWords } from "@/components/ui/Reveal";
import VideoFrame from "@/components/ui/VideoFrame";

export default function Music() {
  return (
    <section id="music" className="theme-inverted relative border-t border-ink-line bg-ink-raised py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">04</span>
          <span className="h-px flex-1 max-w-16 bg-ink-line" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-paper-dim">
            {music.eyebrow}
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
                label="DJ set — video"
                className="aspect-video w-full"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
