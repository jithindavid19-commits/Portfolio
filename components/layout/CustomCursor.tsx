"use client";

import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@/lib/useMediaQuery";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const enabled = useMediaQuery("(hover: hover) and (pointer: fine)");
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let mouseX = ringX;
    let mouseY = ringY;

    function onMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    }

    function onOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor]")) setHovering(true);
    }
    function onOut(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor]")) setHovering(false);
    }

    let raf: number;
    function tick() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot h-1.5 w-1.5 bg-accent"
        aria-hidden
      />
      <div
        ref={ringRef}
        className="cursor-ring border transition-[width,height,border-color] duration-200 ease-out"
        style={{
          width: hovering ? 52 : 32,
          height: hovering ? 52 : 32,
          borderColor: hovering ? "var(--color-accent)" : "rgba(168,60,36,0.45)",
        }}
        aria-hidden
      />
    </>
  );
}
