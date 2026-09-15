"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { scrollToTarget } from "@/lib/lenisInstance";

const TICKER_ITEMS = [
  "Influencer Marketing",
  "Social Strategy",
  "Content Storytelling",
  "Campaign Management",
  "Creator Partnerships",
];

// Rendered in mixed case rather than full caps so the lowercase "j" (with
// its dot and descender) reads unambiguously — no serif/Didone capital J
// design, however hooked, seemed to read as distinct from "I" at a glance.
// Kept on one line with a fluid clamp() size rather than split across two
// lines, so it scales down to fit the viewport instead of wrapping.
const HEADLINE = "Jithin George";

export default function Hero() {
  return (
    <section
      id="top"
      className="theme-inverted relative flex min-h-[100svh] flex-col overflow-hidden bg-ink pt-20"
    >
      {/* ambient accent glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.14] blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--color-accent), transparent 65%)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-paper) 1px, transparent 1px), linear-gradient(90deg, var(--color-paper) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />

      {/* Marketing motif — a faint analytics/trend graphic behind the
          headline, echoing the "Proof of Work" chart language used later
          in the page without competing with the name for attention. */}
      <svg
        className="pointer-events-none absolute -right-[8%] top-1/2 hidden h-[70vh] w-[60vw] -translate-y-1/2 opacity-[0.14] md:block"
        viewBox="0 0 600 500"
        fill="none"
        aria-hidden
      >
        <g stroke="var(--color-accent)" strokeWidth="1.5">
          <line x1="40" y1="40" x2="40" y2="440" />
          <line x1="40" y1="440" x2="580" y2="440" />
        </g>
        <g fill="var(--color-accent)" opacity="0.5">
          <rect x="90" y="340" width="46" height="100" />
          <rect x="190" y="280" width="46" height="160" />
          <rect x="290" y="220" width="46" height="220" />
          <rect x="390" y="150" width="46" height="290" />
          <rect x="490" y="90" width="46" height="350" />
        </g>
        <path
          d="M90 300 L190 240 L290 190 L390 120 L490 60"
          stroke="var(--color-paper)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="490" cy="60" r="8" fill="var(--color-paper)" />
      </svg>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.55, duration: 0.6 }}
          className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-accent"
        >
          Marketing Executive · Influencer &amp; Content
        </motion.p>

        <h1 className="font-name font-bold leading-[0.95] tracking-normal text-paper">
          <span className="-mb-[0.12em] block overflow-hidden whitespace-nowrap pb-[0.12em]">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[clamp(2rem,8vw,4.5rem)]"
            >
              {HEADLINE}
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-lg text-paper-dim md:text-xl"
        >
          Digital Marketing <span className="text-accent">×</span> Influencer Marketing{" "}
          <span className="text-accent">×</span> Creative Storytelling.
          <br className="hidden sm:block" /> Real campaigns, not just theory.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            onClick={() => scrollToTarget("#work")}
            className="group inline-flex items-center gap-3 bg-paper px-6 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-ink transition-colors hover:bg-accent"
          >
            Explore My Work
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </MagneticButton>
          <MagneticButton
            onClick={() => scrollToTarget("#contact")}
            className="inline-flex items-center gap-3 border border-ink-line px-6 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-paper transition-colors hover:border-accent hover:text-accent"
          >
            Let&rsquo;s Connect
          </MagneticButton>
        </motion.div>
      </div>

      <div className="relative z-10 border-t border-ink-line">
        <div className="no-scrollbar flex overflow-hidden py-4">
          <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-8 font-mono text-xs uppercase tracking-[0.2em] text-paper-dim"
              >
                {item}
                <span className="text-accent">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 0.6 }}
        className="pointer-events-none absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper-dim">
          Scroll
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-ink-line">
          <motion.span
            className="absolute left-0 top-0 h-4 w-px bg-accent"
            animate={{ y: [-16, 40] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
