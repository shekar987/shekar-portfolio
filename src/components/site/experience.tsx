import { experiences } from "@/data/portfolio";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          id="experience-heading"
          eyebrow="03"
          title="Experience"
        />

        <div className="mt-10 space-y-6">
          {experiences.map((exp, i) => (
            <Reveal key={`${exp.company}-${exp.period}`} delay={i * 0.06}>
              <article className="card-glow relative rounded-xl border border-border bg-card/40 p-6 backdrop-blur-sm transition-colors hover:border-primary/30 sm:p-8">
                {/* Accent node */}
                <span
                  aria-hidden
                  className="absolute -left-px top-8 h-8 w-1 rounded-full bg-primary"
                />

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                    {exp.role}
                    <span className="text-muted-foreground">
                      {" "}
                      · {exp.company}
                    </span>
                  </h3>
                  <span className="font-mono text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-1 font-mono text-xs text-primary/80">
                  {exp.type}
                </p>

                {exp.highlight && (
                  <p className="mt-4 rounded-lg border border-primary/20 bg-primary/5 px-4 py-2.5 text-sm font-medium text-foreground">
                    {exp.highlight}
                  </p>
                )}

                <ul className="mt-6 space-y-4">
                  {exp.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4"
                    >
                      {b.metric && (
                        <span className="inline-flex w-fit shrink-0 rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-xs font-medium text-primary">
                          {b.metric}
                        </span>
                      )}
                      <span className="text-sm leading-relaxed text-foreground/80 sm:text-[15px]">
                        {b.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
