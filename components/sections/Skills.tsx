"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export default function Skills() {
  const [active, setActive] = useState(0);
  const activeCategory = skills.categories[active];

  return (
    <section id="skills" className="relative border-t border-ink-line bg-ink-raised py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">02</span>
          <span className="h-px flex-1 max-w-16 bg-ink-line" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-paper-dim">
            {skills.eyebrow}
          </span>
        </div>

        <Reveal>
          <h2 className="max-w-3xl font-display text-3xl leading-[1.15] tracking-tight text-paper md:text-5xl">
            Strategy, analysis and creative execution — in one skill set.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col lg:gap-1">
              {skills.categories.map((cat, i) => (
                <button
                  key={cat.key}
                  onClick={() => setActive(i)}
                  className={`relative shrink-0 rounded-none px-5 py-4 text-left font-mono text-xs uppercase tracking-[0.16em] transition-colors ${
                    active === i ? "text-ink" : "text-paper-dim hover:text-paper"
                  }`}
                  data-cursor="magnetic"
                >
                  {active === i && (
                    <motion.span
                      layoutId="skills-tab-bg"
                      className="absolute inset-0 bg-accent"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.key}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap gap-3"
              >
                {activeCategory.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.35 }}
                    className="border border-ink-line px-4 py-2.5 text-sm text-paper transition-colors hover:border-accent hover:text-accent md:text-base"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-20 border-t border-ink-line pt-10">
          <h3 className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">
            Tools
          </h3>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {skills.tools.map((tool, i) => (
              <Reveal key={tool} delay={i * 0.025} y={10}>
                <span className="font-display text-lg text-paper-dim transition-colors hover:text-accent md:text-xl">
                  {tool}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
