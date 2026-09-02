import { about, education, certifications } from "@/lib/data";
import { Reveal, RevealWords } from "@/components/ui/Reveal";
import Frame from "@/components/ui/Frame";

export default function About() {
  return (
    <section id="about" className="relative border-t border-ink-line bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">01</span>
          <span className="h-px flex-1 max-w-16 bg-ink-line" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-paper-dim">
            {about.eyebrow}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="relative">
                <Frame
                  src="/assets/photography/portrait.jpg"
                  alt="Portrait of Jithin George"
                  label="Portrait — Jithin George"
                  index="Portrait"
                  className="aspect-[4/5] w-full"
                />
                <span className="pointer-events-none absolute -left-2 -top-2 h-6 w-6 border-l border-t border-accent" />
                <span className="pointer-events-none absolute -bottom-2 -right-2 h-6 w-6 border-b border-r border-accent" />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <RevealWords
              as="p"
              text={about.summary}
              className="font-display text-2xl leading-[1.3] tracking-tight text-paper md:text-4xl"
            />

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p className="text-base leading-relaxed text-paper-dim md:text-[17px]">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15}>
              <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-8 border-t border-ink-line pt-10 sm:grid-cols-2">
                <div>
                  <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">
                    Education
                  </h3>
                  <ul className="space-y-5">
                    {education.map((e) => (
                      <li key={e.degree}>
                        <p className="font-display text-lg text-paper">{e.degree}</p>
                        <p className="text-sm text-paper-dim">
                          {e.institution} — {e.period}
                        </p>
                        {e.detail && (
                          <p className="mt-1.5 text-sm leading-relaxed text-paper-dim/80">{e.detail}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">
                    Certifications
                  </h3>
                  <ul className="space-y-2.5">
                    {certifications.map((c) => (
                      <li key={c} className="flex gap-3 text-sm leading-relaxed text-paper-dim">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
