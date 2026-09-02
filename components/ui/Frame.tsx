"use client";

import { useState } from "react";
import Image from "next/image";

type FrameProps = {
  src: string;
  alt: string;
  label?: string;
  index?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  fit?: "cover" | "contain";
};

/**
 * Renders a real image when it exists at `src`; otherwise falls back to a
 * styled editorial placeholder plate (not a broken-image icon) labelled with
 * what belongs there, so the layout looks intentional either way.
 */
export default function Frame({
  src,
  alt,
  label,
  index,
  className = "",
  imgClassName = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  fit = "cover",
}: FrameProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`relative flex flex-col justify-between overflow-hidden border border-ink-line bg-ink-raised p-5 ${className}`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent, transparent 10px, color-mix(in srgb, var(--color-paper) 6%, transparent) 10px, color-mix(in srgb, var(--color-paper) 6%, transparent) 11px)",
          }}
        />
        <div className="relative flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-paper-dim">
          <span>{index}</span>
          <span>Awaiting asset</span>
        </div>
        <div className="relative">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            className="mb-3 text-paper-dim/60"
          >
            <rect x="2" y="4" width="20" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="8" cy="10" r="1.75" stroke="currentColor" strokeWidth="1.2" />
            <path d="M3 17l5.5-5.5a1.5 1.5 0 0 1 2.12 0L15 16m3-2 2.5 2.5" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper-dim">
            {label ?? alt}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-ink-raised ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`${fit === "contain" ? "object-contain" : "object-cover"} ${imgClassName}`}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
