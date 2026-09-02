import { experience } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export default function Experience() {
  return (
    <section id="work" className="relative border-t border-ink-line bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">03</span>
          <span className="h-px flex-1 max-w-16 bg-ink-line" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-paper-dim">
            What I&rsquo;ve Done
          </span>
        </div>

        <Reveal>
          <h2 className="max-w-3xl font-display text-3xl leading-[1.15] tracking-tight text-paper md:text-5xl">
            Real campaigns. Real numbers. No filler.
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-ink-line border-y border-ink-line">
          {experience.map((job, i) => (
            <Reveal key={job.org} delay={i * 0.05} className="grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:gap-8 md:py-14">
              <div className="md:col-span-4">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{job.period}</p>
                <h3 className="mt-3 font-display text-2xl text-paper md:text-3xl">{job.role}</h3>
                <p className="mt-1 text-paper-dim">{job.org}</p>
              </div>
              <div className="md:col-span-8">
                <p className="mb-5 text-paper-dim">{job.summary}</p>
                <ul className="space-y-3">
                  {job.achievements.map((a) => (
                    <li key={a} className="flex gap-3 text-[15px] leading-relaxed text-paper md:text-base">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
