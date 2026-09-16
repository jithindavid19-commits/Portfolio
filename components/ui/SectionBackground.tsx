import Image from "next/image";

type SectionBackgroundProps = {
  src: string;
  opacity?: number;
  className?: string;
  blur?: number;
};

/** A full-bleed photo behind a section's content, at a high enough
 * opacity to actually read as "a picture is there." Pair with a
 * theme-color gradient (using the section's own bg-ink/bg-ink-raised
 * token) layered on top wherever text needs a cleaner backdrop.
 *
 * Crisp by default (blur={0}) — pass a blur value explicitly for the
 * rare spot that wants a softer, more ambient backdrop instead. */
export default function SectionBackground({
  src,
  opacity = 55,
  className = "absolute inset-0",
  blur = 0,
}: SectionBackgroundProps) {
  return (
    <div
      className={`pointer-events-none overflow-hidden ${className}`}
      style={{ opacity: opacity / 100, isolation: "isolate" }}
      aria-hidden
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        style={blur ? { filter: `blur(${blur}px)`, transform: "scale(1.08) translateZ(0)" } : undefined}
      />
    </div>
  );
}
