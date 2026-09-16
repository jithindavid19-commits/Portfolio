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
 * A soft blur (default on) reads as an intentional, ambient backdrop
 * rather than a sharp photo competing with the text on top of it. The
 * image itself is still the full-resolution source — it's scaled up
 * slightly to hide the transparent fringe the blur radius would
 * otherwise sample at the container's edge — so the blur is a design
 * choice, not a quality loss. Pass blur={0} for a crisp image. */
export default function SectionBackground({
  src,
  opacity = 35,
  className = "absolute inset-0",
  blur = 6,
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
