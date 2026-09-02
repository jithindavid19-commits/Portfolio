"use client";

import { useState } from "react";
import { photography } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import Frame from "@/components/ui/Frame";
import Lightbox from "@/components/ui/Lightbox";

const WIDTHS = ["w-[70vw] sm:w-[380px]", "w-[55vw] sm:w-[280px]", "w-[70vw] sm:w-[420px]"];
const HEIGHTS = ["aspect-[3/4]", "aspect-[4/5]", "aspect-square"];

export default function Photography() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const lightboxImages = photography.categories.map((item) => ({
    src: item.path,
    alt: `${item.label} photography by Jithin George`,
    label: item.label,
  }));

  return (
    <section id="creative" className="relative border-t border-ink-line bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">03</span>
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
            <button
              key={item.key}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`View ${item.label} photo full size`}
              data-cursor="magnetic"
              className={`group relative shrink-0 snap-start overflow-hidden text-left ${WIDTHS[i % WIDTHS.length]} ${HEIGHTS[i % HEIGHTS.length]}`}
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
              <div className="pointer-events-none absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-paper/30 bg-ink/50 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5"
                    stroke="var(--color-paper)"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>
        <p className="mt-4 px-6 font-mono text-[10px] uppercase tracking-[0.2em] text-paper-dim md:px-10">
          Drag to explore · Click a photo for the full view →
        </p>
      </Reveal>

      <Lightbox
        images={lightboxImages}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}
