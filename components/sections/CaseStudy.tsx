"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies, CaseStudy as CaseStudyType } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import Frame from "@/components/ui/Frame";

type Stage = { key: string; label: string; text: string };

function getStages(study: CaseStudyType): Stage[] {
  return [
    { key: "brief", label: "The Brief", text: study.brief },
    { key: "approach", label: "The Approach", text: study.approach },
    { key: "discovery", label: "Creator Discovery", text: study.discovery },
    { key: "execution", label: "Campaign Execution", text: study.execution },
    { key: "reporting", label: "Reporting", text: study.reporting },
  ];
}

export default function CaseStudy() {
  const [activeCase, setActiveCase] = useState(0);
  const [openStage, setOpenStage] = useState(0);
  const study = caseStudies[activeCase];
  const stages = getStages(study);
  const pdf = study.assets.find((a) => a.type === "pdf");

  function selectCase(i: number) {
    setActiveCase(i);
    setOpenStage(0);
  }

  return (
    <div className="relative border-t border-ink-line bg-ink-raised py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              Featured Campaign
            </p>
            <Reveal>
              <h2 className="mt-4 max-w-2xl font-display text-3xl leading-[1.15] tracking-tight text-paper md:text-4xl">
                {study.tagline}
              </h2>
            </Reveal>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-paper-dim">
              Client: {study.client} — My Role: {study.role}
            </p>
          </div>

          <div className="flex gap-2">
            {caseStudies.map((c, i) => (
              <button
                key={c.slug}
                onClick={() => selectCase(i)}
                className={`border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
                  activeCase === i
                    ? "border-accent bg-accent text-ink"
                    : "border-ink-line text-paper-dim hover:border-paper-dim hover:text-paper"
                }`}
                data-cursor="magnetic"
              >
                {String(i + 1).padStart(2, "0")} — {c.client}
              </button>
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
          >
            <div className="mt-10 divide-y divide-ink-line border-y border-ink-line">
              {stages.map((stage, i) => {
                const isOpen = openStage === i;
                return (
                  <div key={stage.key}>
                    <button
                      onClick={() => setOpenStage(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="flex items-center gap-5">
                        <span className="font-mono text-xs text-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-xl text-paper md:text-2xl">
                          {stage.label}
                        </span>
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="font-mono text-xl text-paper-dim"
                        aria-hidden
                      >
                        +
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-3xl pb-7 pl-0 text-[15px] leading-relaxed text-paper-dim md:pl-10 md:text-base">
                            {stage.text}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="mt-12">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">
                  Campaign Assets
                </h3>
                {pdf && (
                  <a
                    href={pdf.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-ink-line px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-paper transition-colors hover:border-accent hover:text-accent"
                    data-cursor="magnetic"
                  >
                    View Campaign PDF ↗
                  </a>
                )}
              </div>
              <div className="no-scrollbar flex gap-4 overflow-x-auto pb-2">
                {study.assets
                  .filter((a) => a.type === "image")
                  .map((asset, i) => (
                    <Frame
                      key={asset.path}
                      src={asset.path}
                      alt={`${study.client} — ${asset.label}`}
                      label={asset.label}
                      index={String(i + 1).padStart(2, "0")}
                      className="aspect-[4/3] w-[280px] shrink-0 md:w-[340px]"
                    />
                  ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
