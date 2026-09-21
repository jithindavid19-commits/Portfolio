import type { Metadata } from "next";
import { Anton } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { profile, pressKit } from "@/lib/data";
import { Reveal, RevealWords } from "@/components/ui/Reveal";
import Frame from "@/components/ui/Frame";
import MagneticButton from "@/components/ui/MagneticButton";

const anton = Anton({ subsets: ["latin"], weight: "400", display: "swap" });

const title = "1111freq — Electronic Press Kit";
const description =
  "1111freq (formerly Eargasm) — groovy, raw, industrial techno. Mumbai club circuit 2021–2024, now booking UK & EU dates.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/presskit",
    images: ["/assets/presskit/hero-dj.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/presskit/hero-dj.jpg"],
  },
};

const TICKER_ITEMS = ["Groovy", "Raw", "Industrial Techno", "1111freq", "F.K.A. Eargasm", "Booking UK / EU"];

function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-ink-line bg-ink-raised py-3">
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
        {[0, 1].map((rep) => (
          <div key={rep} className="flex items-center gap-8 pr-8">
            {items.map((item, i) => (
              <span key={`${rep}-${i}`} className="flex items-center gap-8">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-paper-dim">
                  {item}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Eyebrow({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">{index}</span>
      <span className="h-px flex-1 max-w-16 bg-ink-line" />
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-paper-dim">{children}</span>
      <span className="flex items-end gap-[3px]" aria-hidden>
        {[0, 0.15, 0.3, 0.1].map((delay, i) => (
          <span
            key={i}
            className="h-3.5 w-[3px] origin-bottom animate-eq rounded-full bg-accent"
            style={{ animationDelay: `${delay}s` }}
          />
        ))}
      </span>
    </div>
  );
}

export default function PressKit() {
  const { artist, sound, nameChange, performances, clubs, stats, rider, quote, booking } = pressKit;

  return (
    <div className="theme-1111freq min-h-screen bg-ink text-paper">
      {/* Minimal local header — deliberately not the marketing-site Nav: this
          page is a standalone link sent to promoters/labels, not a section
          of the portfolio. */}
      <header className="flex items-center justify-between border-b border-ink-line px-6 py-4 md:px-10">
        <Link
          href="/"
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper-dim transition-colors hover:text-accent"
        >
          ← Jithin George / Portfolio
        </Link>
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
          Press Kit
        </span>
      </header>

      <main id="main">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-ink-line">
          <div className="absolute inset-0" aria-hidden>
            <Image
              src="/assets/presskit/hero-dj.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-top opacity-45"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(var(--color-paper) 1px, transparent 1px), linear-gradient(90deg, var(--color-paper) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-40">
            <Reveal>
              <span className="inline-flex items-center gap-2 border border-ink-line bg-ink/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-paper-dim backdrop-blur">
                F.K.A. {artist.formerly}
              </span>
            </Reveal>

            <RevealWords
              as="h1"
              text={artist.current.toUpperCase()}
              delay={0.1}
              className={`${anton.className} mt-6 text-[16vw] leading-[0.9] tracking-tight text-paper sm:text-7xl md:text-8xl lg:text-[8.5rem]`}
            />

            <Reveal delay={0.25}>
              <p className="mt-6 max-w-lg text-xl text-paper md:text-2xl">{artist.tagline}</p>
            </Reveal>

            <Reveal delay={0.35}>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.22em] text-paper-dim">
                {artist.origin} → {artist.base} · DJing since {artist.activeSince}
              </p>
            </Reveal>

            <Reveal delay={0.45}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <MagneticButton
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 bg-accent px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-ink"
                >
                  Book 1111freq
                </MagneticButton>
                <MagneticButton
                  href={profile.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-ink-line px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-paper transition-colors hover:border-accent hover:text-accent"
                >
                  {profile.instagram.handle}
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </section>

        <Ticker />

        {/* The Sound */}
        <section className="border-b border-ink-line px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Eyebrow index="01">{sound.eyebrow}</Eyebrow>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <RevealWords
                  as="h2"
                  text={sound.title}
                  className={`${anton.className} text-4xl leading-[1.05] tracking-tight text-paper md:text-6xl`}
                />
                <Reveal delay={0.15}>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {sound.referencePoints.map((name) => (
                      <span
                        key={name}
                        className="border border-accent/40 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-accent"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>
              <div className="lg:col-span-7">
                {sound.paragraphs.map((p, i) => (
                  <Reveal key={i} delay={0.1 + i * 0.1}>
                    <p className="mt-0 mb-6 max-w-2xl text-base leading-relaxed text-paper-dim md:text-lg">
                      {p}
                    </p>
                  </Reveal>
                ))}
                <Reveal delay={0.3}>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {sound.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-ink-raised px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-paper-dim"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* The Name */}
        <section className="relative border-b border-ink-line bg-ink-raised px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Eyebrow index="02">{nameChange.eyebrow}</Eyebrow>
            <RevealWords
              as="h2"
              text={nameChange.title}
              className={`${anton.className} mb-14 text-4xl leading-[1.05] tracking-tight text-paper md:text-6xl`}
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Reveal delay={0.1}>
                <div className="h-full border border-ink-line bg-ink p-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">
                    {nameChange.then.period}
                  </p>
                  <p className={`${anton.className} mt-3 text-3xl tracking-tight text-paper-dim line-through decoration-2 md:text-4xl`}>
                    {nameChange.then.label}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-paper-dim md:text-base">
                    {nameChange.then.text}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="h-full border border-accent/50 bg-ink p-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                    {nameChange.now.period}
                  </p>
                  <p className={`${anton.className} mt-3 text-3xl tracking-tight text-paper md:text-4xl`}>
                    {nameChange.now.label}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-paper-dim md:text-base">
                    {nameChange.now.text}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Selected Performances */}
        <section className="border-b border-ink-line px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Eyebrow index="03">{performances.eyebrow}</Eyebrow>
            <RevealWords
              as="h2"
              text={performances.title}
              className={`${anton.className} mb-14 text-4xl leading-[1.05] tracking-tight text-paper md:text-6xl`}
            />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {performances.entries.map((entry, i) => (
                <Reveal key={entry.event + entry.date} delay={0.05 * i}>
                  <div className="group">
                    <Frame
                      src={entry.image}
                      alt={`${entry.event} — ${entry.venue}, ${entry.date}`}
                      className="aspect-square"
                    />
                    <div className="mt-3">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                        {entry.venue} · {entry.date}
                      </p>
                      <p className="mt-1 text-sm font-medium text-paper">{entry.event}</p>
                      <p className="mt-1 text-xs leading-relaxed text-paper-dim">{entry.lineup}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Photo break + quote */}
        <section className="relative border-b border-ink-line bg-ink-raised">
          <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
            <Image
              src="/assets/presskit/secret-cave.jpg"
              alt="1111freq performing at Secret Cave, Mumbai"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />
            <div className="absolute inset-x-0 bottom-0 px-6 py-10 md:px-10 md:py-14">
              <Reveal>
                <p className={`${anton.className} max-w-2xl text-2xl leading-tight tracking-tight text-paper md:text-4xl`}>
                  &ldquo;{quote.text}&rdquo;
                </p>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  — {quote.attribution}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Clubs + stats */}
        <section className="border-b border-ink-line px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Eyebrow index="04">Clubs &amp; Credits</Eyebrow>
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Reveal>
                  <div className="flex flex-wrap gap-3">
                    {clubs.map((club) => (
                      <span
                        key={club}
                        className="border border-ink-line px-4 py-2 text-sm text-paper transition-colors hover:border-accent hover:text-accent"
                      >
                        {club}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>
              <div className="lg:col-span-5">
                <div className="grid grid-cols-2 gap-px overflow-hidden border border-ink-line bg-ink-line">
                  {stats.map((stat) => (
                    <div key={stat.label} className="bg-ink p-6">
                      <p className={`${anton.className} text-3xl text-accent md:text-4xl`}>{stat.value}</p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-paper-dim">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rider */}
        <section className="border-b border-ink-line px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Eyebrow index="05">{rider.eyebrow}</Eyebrow>
            <RevealWords
              as="h2"
              text={rider.title}
              className={`${anton.className} mb-10 text-4xl leading-[1.05] tracking-tight text-paper md:text-6xl`}
            />
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {rider.items.map((item, i) => (
                <Reveal key={item} delay={0.04 * i}>
                  <li className="flex items-start gap-3 border-t border-ink-line pt-4 text-sm text-paper-dim md:text-base">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Booking */}
        <section className="relative bg-ink-raised px-6 py-24 md:px-10 md:py-36">
          <div className="mx-auto max-w-4xl text-center">
            <Eyebrow index="06">{booking.eyebrow}</Eyebrow>
            <RevealWords
              as="h2"
              text={booking.title}
              className={`${anton.className} text-4xl leading-[1.05] tracking-tight text-paper md:text-6xl`}
            />
            <Reveal delay={0.15}>
              <p className="mx-auto mt-6 max-w-xl text-base text-paper-dim md:text-lg">{booking.sub}</p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <MagneticButton
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 bg-accent px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-ink"
                >
                  {profile.email}
                </MagneticButton>
                <MagneticButton
                  href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 border border-ink-line px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-paper transition-colors hover:border-accent hover:text-accent"
                >
                  {profile.phone}
                </MagneticButton>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-mono text-xs uppercase tracking-[0.18em] text-paper-dim">
                <a
                  href={profile.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  Instagram — {profile.instagram.handle}
                </a>
                <span>SoundCloud — {booking.soundcloud}</span>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="flex flex-col items-center justify-between gap-4 border-t border-ink-line px-6 py-8 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-dim md:flex-row md:px-10">
        <p>1111freq · Press Kit</p>
        <Link href="/" className="transition-colors hover:text-accent">
          Back to jithingeorge.com →
        </Link>
      </footer>
    </div>
  );
}
