"use client";

import type Lenis from "lenis";

let instance: Lenis | null = null;

export function setLenisInstance(l: Lenis | null) {
  instance = l;
}

const HEADER_OFFSET = 84;

/** Scrolls to a section, accounting for the fixed header. Routes through
 * Lenis when it's running so it doesn't fight the virtual-scroll animation;
 * falls back to native smooth scroll (e.g. reduced-motion, or before Lenis
 * mounts). */
export function scrollToTarget(target: string) {
  if (instance) {
    instance.scrollTo(target, { offset: -HEADER_OFFSET, duration: 1.2 });
    return;
  }
  document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
}
