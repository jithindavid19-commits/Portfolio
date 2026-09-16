"use client";

import { profile } from "@/lib/data";
import { scrollToTarget } from "@/lib/lenisInstance";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-ink-line px-6 py-8 md:px-10">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
        }}
        aria-hidden
      />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-dim md:flex-row">
        <p>&copy; {year} {profile.name}</p>
        <button
          type="button"
          onClick={() => scrollToTarget("#top")}
          className="group flex items-center gap-2 text-paper-dim transition-colors hover:text-accent"
          data-cursor="magnetic"
          aria-label="Back to top"
        >
          Back to top
          <span className="flex h-6 w-6 items-center justify-center border border-ink-line transition-colors group-hover:border-accent">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M12 19V5M5 12l7-7 7 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
        <p>Designed &amp; built for the next role.</p>
      </div>
    </footer>
  );
}
