"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { profile } from "@/lib/data";
import { scrollToTarget } from "@/lib/lenisInstance";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Creative", href: "#creative" },
  { label: "Music", href: "#music" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function handleLinkClick(href: string) {
    setOpen(false);
    scrollToTarget(href);
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-[2px] origin-left bg-accent"
        style={{ scaleX: scrollYProgress }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-[65] flex items-center justify-between px-6 md:px-10 transition-all duration-500 ${
          scrolled
            ? "h-16 bg-ink/80 backdrop-blur-md border-b border-ink-line"
            : "theme-inverted h-20 bg-transparent"
        }`}
      >
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("#top");
          }}
          className="font-display text-xl tracking-tight text-paper"
          data-cursor="magnetic"
        >
          JG<span className="text-accent">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-10 font-mono text-[11px] uppercase tracking-[0.18em] text-paper-dim">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="group relative py-1"
            >
              {link.label}
              <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("#contact");
          }}
          className="hidden md:inline-flex items-center gap-2 border border-ink-line px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition-colors hover:border-accent hover:text-accent"
        >
          Let&rsquo;s Connect
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative z-[70] flex h-9 w-9 flex-col items-end justify-center gap-1.5"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`h-px bg-paper transition-all duration-300 ${open ? "w-6 translate-y-[3.5px] rotate-45" : "w-6"}`}
          />
          <span
            className={`h-px bg-paper transition-all duration-300 ${open ? "w-6 -translate-y-[3.5px] -rotate-45" : "w-4"}`}
          />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="theme-inverted fixed inset-0 z-[60] flex flex-col justify-center gap-2 bg-ink px-8 md:hidden"
          >
            {LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-4xl text-paper py-2"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={`mailto:${profile.email}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + LINKS.length * 0.06, duration: 0.5 }}
              className="mt-6 font-mono text-sm uppercase tracking-[0.18em] text-accent"
            >
              {profile.email}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
