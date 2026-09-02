import { photography } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import Frame from "@/components/ui/Frame";

const WIDTHS = ["w-[70vw] sm:w-[380px]", "w-[55vw] sm:w-[280px]", "w-[70vw] sm:w-[420px]"];
const HEIGHTS = ["aspect-[3/4]", "aspect-[4/5]", "aspect-square"];

export default function Photography() {
  return (
    <section id="creative" className="relative border-t border-ink-line bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">04</span>
          <span className="h-px flex-1 max-w-16 bg-ink-line" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-paper-dim">
            {photography.eyebrow}
          </span>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <h2 className="max-w-xl font-display text-3xl leading-[1.15] tracking-tight text-paper md:text-5xl">
              {photography.title}
            </h2>
          </Reveal>
          <p className="max-w-sm text-sm leading-relaxed text-paper-dim">
            {photography.description}
          </p>
        </div>
      </div>

      <Reveal className="mt-14">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:px-10">
          {photography.categories.map((item, i) => (
            <div
              key={item.key}
              className={`group relative shrink-0 snap-start overflow-hidden ${WIDTHS[i % WIDTHS.length]} ${HEIGHTS[i % HEIGHTS.length]}`}
            >
              <Frame
                src={item.path}
                alt={`${item.label} photography by Jithin George`}
                label={item.label}
                index={String(i + 1).padStart(2, "0")}
                className="h-full w-full"
                imgClassName="transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 px-6 font-mono text-[10px] uppercase tracking-[0.2em] text-paper-dim md:px-10">
          Drag to explore →
        </p>
      </Reveal>
    </section>
  );
}
