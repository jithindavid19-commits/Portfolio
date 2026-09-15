"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@/lib/useMediaQuery";

export default function Loader() {
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [timerDone, setTimerDone] = useState(false);

  useEffect(() => {
    if (reduced) return;
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => setTimerDone(true), 1500);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [reduced]);

  if (reduced) return null;

  const visible = !timerDone;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="theme-inverted fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="font-name font-bold text-3xl leading-normal tracking-normal text-paper md:text-4xl"
          >
            Jithin George
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="mt-6 h-px bg-accent"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-paper-dim"
          >
            Marketing × Culture
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
