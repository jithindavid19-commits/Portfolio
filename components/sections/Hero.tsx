"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import SectionBackground from "@/components/ui/SectionBackground";
import { scrollToTarget } from "@/lib/lenisInstance";

const TICKER_ITEMS = [
  "Influencer Marketing",
  "Social Strategy",
  "Content Storytelling",
  "Campaign Management",
  "Creator Partnerships",
];

// Small "signal" points drifting over the chart backdrop — a nod to the
// market-chart photo's own data-point language, kept sparse and slow so
// it reads as ambient rather than busy.
const SIGNAL_POINTS = [
  { top: "18%", left: "62%", delay: 0 },
  { top: "34%", left: "80%", delay: 0.6 },
  { top: "52%", left: "58%", delay: 1.1 },
  { top: "66%", left: "86%", delay: 0.3 },
  { top: "24%", left: "92%", delay: 1.6 },
  { top: "45%", left: "70%", delay: 0.9 },
  { top: "73%", left: "64%", delay: 1.9 },
];

// Rendered in mixed case rather than full caps so the lowercase "j" (with
// its dot and descender) reads unambiguously — no serif/Didone capital J
// design, however hooked, seemed to read as distinct from "I" at a glance.
// Kept on one line with a fluid clamp() size rather than split across two
// lines, so it scales down to fit the viewport instead of wrapping.
const HEADLINE = "Jithin George";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  // Subtle parallax — the photo drifts slower than the scroll itself, so the
  // section gains a little depth instead of feeling like a flat sticker.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="theme-inverted relative flex min-h-[100svh] flex-col overflow-hidden bg-ink pt-20"
    >
      {/* Background art — a market/growth-chart mood shot Jithin sent. */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <SectionBackground src="/assets/backgrounds/market-chart.jpg" opacity={75} className="absolute inset-0 -top-[10%] h-[120%]" />
      </motion.div>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/30 to-transparent"
        aria-hidden
      />

      {/* drifting signal points — echoes the chart photo's own data dots */}
      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
        {SIGNAL_POINTS.map((p, i) => (
          <motion.span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-accent"
            style={{ top: p.top, left: p.left }}
            animate={{ opacity: [0.15, 0.8, 0.15], y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          />
        ))}
      </div>

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

        <div className="relative inline-block">
          <h1 className="font-name font-bold leading-[1.2] tracking-normal text-paper">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="block whitespace-nowrap text-[clamp(2rem,8vw,4.5rem)]"
            >
              {HEADLINE}
            </motion.span>
          </h1>
          {/* A hand-drawn stroke that signs itself in under the name once
              it lands — a small signature flourish rather than a plain
              static underline. */}
          <motion.svg
            viewBox="0 0 300 24"
            preserveAspectRatio="none"
            className="pointer-events-none absolute -bottom-1 left-0 hidden h-4 w-full sm:block"
            aria-hidden
          >
            <motion.path
              d="M2 12 Q38 3 76 13 T154 10 T232 15 T298 9"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 2.1, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.svg>
        </div>

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

      {/* Rotating "open to work" seal — a small, slowly-spinning stamp
          echoing the marketing-badge/seal motif, tucked in the corner
          so it reads as a flourish rather than competing with the name. */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.4, duration: 0.6 }}
        className="pointer-events-none absolute right-6 top-24 hidden h-24 w-24 md:right-10 md:block lg:h-28 lg:w-28"
      >
        <motion.svg
          viewBox="0 0 100 100"
          className="h-full w-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          <defs>
            <path id="hero-badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
          </defs>
          <circle cx="50" cy="50" r="49" fill="none" stroke="var(--color-ink-line)" strokeWidth="0.75" />
          <text fill="var(--color-paper-dim)" fontSize="6.3" letterSpacing="0.1em">
            <textPath href="#hero-badge-circle">
              OPEN TO WORK • MARKETING × CONTENT •
            </textPath>
          </text>
        </motion.svg>
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        </span>
      </motion.div>
    </section>
  );
}
