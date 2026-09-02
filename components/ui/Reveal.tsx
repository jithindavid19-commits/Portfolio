"use client";

import { Fragment, ReactNode } from "react";
import { motion, Variants } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

export function Reveal({ children, className = "", delay = 0, y = 28, once = true }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type RevealLinesProps = {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
};

const TAG_COMPONENTS = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
} as const;

const containerVariants = (delay: number): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: 0.035, delayChildren: delay } },
});

const wordVariants: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

/** Splits text into words and reveals them with a masked upward slide. Uses
 * a single viewport observer on the parent (with staggered child variants)
 * rather than one observer per word, which is both cheaper and avoids
 * per-word `whileInView` triggers landing on a stale mid-transition frame. */
export function RevealWords({ text, className = "", delay = 0, as = "p" }: RevealLinesProps) {
  const words = text.split(" ");
  const MotionTag = TAG_COMPONENTS[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={containerVariants(delay)}
    >
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="inline-block overflow-hidden align-bottom pb-[0.08em]">
            <motion.span className="inline-block" variants={wordVariants}>
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </MotionTag>
  );
}
