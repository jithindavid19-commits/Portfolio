"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import Frame from "@/components/ui/Frame";
import SectionBackground from "@/components/ui/SectionBackground";

// Matched by stage index rather than label text, since both case
// studies follow the same brief -> approach -> selection -> deal-making
// arc even though their stage labels differ slightly.
const STAGE_ICONS: ReactNode[] = [
  <path key="brief" d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm7 0v4h4M9 12h6M9 15.5h6M9 8.5h3" />,
  <path key="approach" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm4-13-5.5 2.5L8 16l5.5-2.5L16 8Z" />,
  <path key="selection" d="M7 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm10 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM2.5 18c0-2.8 2-4.5 4.5-4.5s4.5 1.7 4.5 4.5M12.5 18c0-2.8 2-4.5 4.5-4.5s4.5 1.7 4.5 4.5" />,
  <path key="deal" d="m8 12 2.5 2.5L16 9M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />,
];

export default function CaseStudy() {
  const [activeCase, setActiveCase] = useState(0);
  const [openStage, setOpenStage] = useState(0);
  const study = caseStudies[activeCase];
  const pdf = study.assets.find((a) => a.type === "pdf");
  const images = study.assets.filter((a) => a.type === "image");

  function selectCase(i: number) {
    setActiveCase(i);
    setOpenStage(0);
  }

  return (
    <div
      id="work"
      className={`theme-${study.slug} relative overflow-hidden border-t border-ink-line bg-ink-raised py-24 transition-colors duration-700 md:py-36`}
    >
      <SectionBackground src="/assets/backgrounds/analytics-dashboard.jpg" opacity={40} />
      <div className="pointer-events-none absolute inset-0 bg-ink-raised/45 transition-colors duration-700" aria-hidden />

      {/* A different "world" per campaign — eleve's telecom signal rings
          vs. Magnifly's dance-ribbon sweep, crossfaded on switch so
          picking the other tab feels like stepping somewhere new. */}
      <AnimatePresence mode="wait">
        {study.slug === "eleve" ? (
          <motion.svg
            key="eleve-motif"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.16 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="pointer-events-none absolute -right-[10%] top-0 h-full w-[70%]"
            viewBox="0 0 400 400"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden
          >
            {[60, 110, 160, 210, 260].map((r, i) => (
              <motion.circle
                key={r}
                cx="200"
                cy="160"
                r={r}
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="1.5"
                animate={{ opacity: [0.15, 0.6, 0.15], scale: [1, 1.04, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
              />
            ))}
            <circle cx="200" cy="160" r="6" fill="var(--color-accent)" />
          </motion.svg>
        ) : (
          <motion.svg
            key="magnifly-motif"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.16 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="pointer-events-none absolute -right-[10%] top-0 h-full w-[70%]"
            viewBox="0 0 400 400"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden
          >
            {[0, 1, 2, 3].map((i) => (
              <motion.path
                key={i}
                d={`M -20 ${90 + i * 60} Q 120 ${20 + i * 60} 220 ${100 + i * 60} T 440 ${70 + i * 60}`}
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="2"
                strokeLinecap="round"
                animate={{ pathLength: [0, 1], pathOffset: [0, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }}
              />
            ))}
          </motion.svg>
        )}
      </AnimatePresence>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent transition-colors duration-700">
              How I Think
            </p>
            <Reveal>
              <h2 className="mt-4 max-w-2xl font-display text-3xl leading-[1.15] tracking-tight text-paper md:text-4xl">
                {study.tagline}
              </h2>
            </Reveal>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-paper-dim">
              {study.context}
            </p>
            {pdf && (
              <a
                href={pdf.path}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 bg-accent px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink transition-[background-color,transform] duration-700 hover:scale-[1.03]"
                data-cursor="magnetic"
              >
                Open Full Campaign PDF ↗
              </a>
            )}
          </div>

          <div className="flex gap-2">
            {caseStudies.map((c, i) => (
              <motion.button
                key={c.slug}
                onClick={() => selectCase(i)}
                whileTap={{ scale: 0.94 }}
                className={`relative overflow-hidden border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-700 ${
                  activeCase === i
                    ? "border-accent text-ink"
                    : "border-ink-line text-paper-dim hover:border-paper-dim hover:text-paper"
                }`}
                data-cursor="magnetic"
              >
                {activeCase === i && (
                  <motion.span
                    layoutId="case-tab-bg"
                    className="absolute inset-0 bg-accent"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative">
                  {String(i + 1).padStart(2, "0")} · {c.title.split(" × ")[0]}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={study.slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-6 rounded-sm bg-ink-raised/90 p-6 backdrop-blur-sm transition-colors duration-700 md:p-10"
            style={{
              backgroundImage:
                "linear-gradient(color-mix(in srgb, var(--color-paper) 4%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--color-paper) 4%, transparent) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          >
            <div className="divide-y divide-ink-line border-y border-ink-line">
              {study.stages.map((stage, i) => {
                const isOpen = openStage === i;
                return (
                  <div key={stage.label}>
                    <motion.button
                      onClick={() => setOpenStage(isOpen ? -1 : i)}
                      whileTap={{ scale: 0.99 }}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="flex items-center gap-5">
                        <span className={`w-8 shrink-0 font-mono text-xs transition-colors duration-700 ${isOpen ? "text-accent" : "text-paper-dim"}`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`hidden shrink-0 transition-colors duration-700 sm:block ${isOpen ? "text-accent" : "text-paper-dim"}`}
                          aria-hidden
                        >
                          {STAGE_ICONS[i % STAGE_ICONS.length]}
                        </svg>
                        <span className="font-display text-xl text-paper md:text-2xl">
                          {stage.label}
                        </span>
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0, scale: isOpen ? 1.15 : 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className={`font-mono text-xl transition-colors ${isOpen ? "text-accent" : "text-paper-dim"}`}
                        aria-hidden
                      >
                        +
                      </motion.span>
                    </motion.button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <motion.p
                            initial={{ y: -8 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="max-w-3xl border-l-2 border-accent/40 pb-7 pl-5 text-[15px] leading-relaxed text-paper-dim md:pl-[3.25rem] md:text-base"
                          >
                            {stage.text}
                          </motion.p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {study.creatorGroups && (
              <Reveal className="mt-12">
                <h3 className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">
                  Recommended Creators
                </h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-5">
                  {study.creatorGroups.map((group) => (
                    <div key={group.category}>
                      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-accent transition-colors duration-700">
                        {group.category}
                        {group.total ? ` · ${group.total}` : ""}
                      </p>
                      <ul className="space-y-1.5">
                        {group.entries.map((entry) => (
                          <li key={entry.name} className="text-sm text-paper">
                            {entry.name}
                            {entry.metric && (
                              <span className="ml-1.5 text-paper-dim">{entry.metric}</span>
                            )}
                          </li>
                        ))}
                        {group.total && group.total > group.entries.length && (
                          <li className="text-sm text-paper-dim">
                            +{group.total - group.entries.length} more
                          </li>
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {study.costTable && (
              <Reveal className="mt-12">
                <h3 className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">
                  Estimated Commercials
                </h3>
                <div className="overflow-x-auto border border-ink-line">
                  <table className="w-full min-w-[480px] border-collapse text-left">
                    <thead>
                      <tr className="border-b border-ink-line">
                        {study.costTable.columns.map((col) => (
                          <th
                            key={col}
                            className="px-4 py-3 font-mono text-[10px] font-normal uppercase tracking-[0.14em] text-paper-dim"
                          >
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {study.costTable.rows.map((row, i) => (
                        <tr
                          key={row[0]}
                          className={i < study.costTable!.rows.length - 1 ? "border-b border-ink-line" : ""}
                        >
                          {row.map((cell, j) => (
                            <td
                              key={j}
                              className={`px-4 py-3 text-sm ${j === 0 ? "text-paper" : "text-paper-dim"}`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-paper-dim">
                  Estimated costs from the assignment. Real availability and final costs would follow shortlisting.
                </p>
              </Reveal>
            )}

            {(pdf || images.length > 0) && (
              <div className="mt-12">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">
                    Assignment Deck
                  </h3>
                  {pdf && (
                    <a
                      href={pdf.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-ink-line px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-paper transition-colors hover:border-accent hover:text-accent"
                      data-cursor="magnetic"
                    >
                      View Full PDF ↗
                    </a>
                  )}
                </div>
                {images.length > 0 && (
                  <div className="no-scrollbar flex gap-4 overflow-x-auto pb-2">
                    {images.map((asset, i) => (
                      <Frame
                        key={asset.path}
                        src={asset.path}
                        alt={`${study.title}: ${asset.label}`}
                        label={asset.label}
                        index={String(i + 1).padStart(2, "0")}
                        className="aspect-[4/3] w-[280px] shrink-0 md:w-[340px]"
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
