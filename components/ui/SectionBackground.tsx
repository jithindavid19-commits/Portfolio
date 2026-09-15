import Image from "next/image";

type SectionBackgroundProps = {
  src: string;
  opacity?: number;
  className?: string;
};

/** A full-bleed photo behind a section's content, at a high enough
 * opacity to actually read as "a picture is there." Pair with a
 * theme-color gradient (using the section's own bg-ink/bg-ink-raised
 * token) layered on top wherever text needs a cleaner backdrop. */
export default function SectionBackground({
  src,
  opacity = 35,
  className = "absolute inset-0",
}: SectionBackgroundProps) {
  return (
    <div className={`pointer-events-none ${className}`} style={{ opacity: opacity / 100 }} aria-hidden>
      <Image src={src} alt="" fill sizes="100vw" className="object-cover" />
    </div>
  );
}
