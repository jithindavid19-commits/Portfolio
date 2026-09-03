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

const HEADLINE_LINES = ["JITHIN", "GEORGE"];

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

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.55, duration: 0.6 }}
          className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-accent"
        >
          Marketing Executive · Influencer &amp; Content
        </motion.p>

        <h1 className="font-name font-bold leading-[0.86] tracking-normal text-paper">
          {HEADLINE_LINES.map((line, li) => (
            <span key={line} className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1,
                  delay: 1.6 + li * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block text-[16vw] sm:text-[14vw] md:text-[10vw] lg:text-[8.5rem]"
              >
                {line}
              </motion.span>
            </span>
          ))}
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
