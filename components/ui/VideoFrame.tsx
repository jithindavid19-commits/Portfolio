"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type VideoFrameProps = {
  src: string;
  poster?: string;
  label: string;
  className?: string;
};

export default function VideoFrame({ src, poster, label, className = "" }: VideoFrameProps) {
  const [failed, setFailed] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);
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
    // No video yet — if a real poster photo exists, show that instead of a
    // generic "awaiting asset" plate, with a small badge noting the video
    // is still on its way.
    if (poster && !posterFailed) {
      return (
        <div className={`relative overflow-hidden bg-ink-raised ${className}`}>
          <Image
            src={poster}
            alt={label}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            onError={() => setPosterFailed(true)}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 border border-paper/30 bg-ink/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-paper backdrop-blur-sm">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-accent">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10 8.5v7l6-3.5-6-3.5Z" fill="currentColor" />
            </svg>
            Video coming soon
          </span>
        </div>
      );
    }

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
