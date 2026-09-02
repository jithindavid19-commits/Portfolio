"use client";

import { useEffect, useRef, useState } from "react";

type VideoFrameProps = {
  src: string;
  poster?: string;
  label: string;
  className?: string;
};

export default function VideoFrame({ src, poster, label, className = "" }: VideoFrameProps) {
  const [failed, setFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Attach the error listener before assigning `src`, so a fast (e.g.
    // localhost) 404 can't fire before we're listening for it.
    const handleError = () => setFailed(true);
    video.addEventListener("error", handleError);
    video.src = src;
    return () => {
      video.removeEventListener("error", handleError);
    };
  }, [src]);

  if (failed) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center gap-4 overflow-hidden border border-ink-line bg-ink-raised p-8 text-center ${className}`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent, transparent 10px, rgba(244,241,234,0.04) 10px, rgba(244,241,234,0.04) 11px)",
          }}
        />
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="relative text-accent">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.2" />
          <path d="M10 8.5v7l6-3.5-6-3.5Z" fill="currentColor" />
        </svg>
        <p className="relative font-mono text-[11px] uppercase tracking-[0.16em] text-paper-dim">
          {label}
        </p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-ink-raised ${className}`}>
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        controls
        playsInline
        preload="metadata"
        poster={poster}
      />
    </div>
  );
}
