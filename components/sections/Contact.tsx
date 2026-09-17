"use client";

import { contact, profile } from "@/lib/data";
import { RevealWords, Reveal } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import SectionBackground from "@/components/ui/SectionBackground";

const LINKS = [
  {
    label: "LinkedIn",
    href: profile.linkedin.url,
    sub: profile.linkedin.label,
    icon: <path d="M4.5 8.5h3V19h-3V8.5ZM6 3.5A1.75 1.75 0 1 1 6 7a1.75 1.75 0 0 1 0-3.5ZM10.5 8.5h3v1.4c.6-.9 1.6-1.6 3-1.6 2.3 0 3.5 1.5 3.5 4.2V19h-3v-5.6c0-1.2-.5-2-1.6-2s-1.9.8-1.9 2V19h-3V8.5Z" />,
  },
  {
    label: "Instagram",
    href: profile.instagram.url,
    sub: profile.instagram.handle,
    icon: <path d="M7 3.5h10a3.5 3.5 0 0 1 3.5 3.5v10a3.5 3.5 0 0 1-3.5 3.5H7a3.5 3.5 0 0 1-3.5-3.5V7A3.5 3.5 0 0 1 7 3.5Zm5 4.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm5-0.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />,
  },
] as const;

export default function Contact() {
  return (
    <section id="contact" className="theme-inverted relative overflow-hidden border-t border-ink-line bg-ink py-28 md:py-40">
      <SectionBackground src="/assets/backgrounds/collaboration-hands.jpg" opacity={85} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/65 to-transparent" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[50vmax] w-[50vmax] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-[0.12] blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--color-accent), transparent 65%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">05</span>
          <span className="h-px flex-1 max-w-16 bg-ink-line" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-paper-dim">
            {contact.eyebrow}
          </span>
        </div>

        <RevealWords
          as="h2"
          text={contact.headline}
          className="max-w-4xl font-display text-4xl leading-[1.05] tracking-tight text-paper sm:text-6xl md:text-7xl"
        />

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-paper-dim md:text-lg">
            {contact.sub}
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-12">
          <MagneticButton
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 pb-2 font-display text-3xl text-paper transition-colors hover:text-accent sm:text-5xl"
            strength={0.25}
          >
            {profile.email}
            <span
              aria-hidden
              className="inline-block -rotate-45 text-2xl transition-transform group-hover:rotate-0 sm:text-4xl"
            >
              →
            </span>
          </MagneticButton>
        </Reveal>

        <Reveal delay={0.4} className="mt-16 flex flex-wrap gap-4">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1 border border-ink-line px-6 py-4 transition-colors hover:border-accent"
              data-cursor="magnetic"
            >
              <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-paper transition-colors group-hover:text-accent">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  {link.icon}
                </svg>
                {link.label}
              </span>
              <span className="text-xs text-paper-dim">{link.sub}</span>
            </a>
          ))}
        </Reveal>

        <Reveal delay={0.5} className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-ink-line pt-8 font-mono text-xs uppercase tracking-[0.14em] text-paper-dim">
          <span>{profile.phone}</span>
          <span className="hidden sm:inline text-ink-line">/</span>
          <span>{profile.location}</span>
        </Reveal>
      </div>
    </section>
  );
}
