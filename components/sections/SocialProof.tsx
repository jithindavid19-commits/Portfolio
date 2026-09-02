import { socialProof } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import Frame from "@/components/ui/Frame";

export default function SocialProof() {
  return (
    <div className="relative border-t border-ink-line bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              {socialProof.eyebrow}
            </p>
            <h2 className="mt-4 max-w-xl font-display text-2xl leading-[1.2] tracking-tight text-paper md:text-3xl">
              {socialProof.title}
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-paper-dim">
            {socialProof.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {socialProof.assets.map((asset, i) => (
            <Reveal key={asset.path} delay={i * 0.05} className={i === 0 ? "col-span-2 md:col-span-1" : ""}>
              <Frame
                src={asset.path}
                alt={asset.label}
                label={asset.label}
                index={String(i + 1).padStart(2, "0")}
                className="aspect-[3/4]"
                imgClassName="transition-transform duration-700 hover:scale-105"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
