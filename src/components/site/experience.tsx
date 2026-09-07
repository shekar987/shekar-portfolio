import { Building2, Sparkles } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { CardGlow } from "@/components/site/card-glow";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          id="experience-heading"
          eyebrow="03"
          kicker="Experience"
          title="Two years in production. One internship in the fundamentals."
          description="Python / FastAPI backends, React front-ends and the databases underneath them — secured, measured and shipped in an Agile team."
        />

        <div className="relative mt-14">
          {/* Timeline rail */}
          <span
            aria-hidden
            className="timeline-rail absolute left-[7px] top-2 bottom-2 hidden w-px sm:block lg:left-[171px]"
          />

          <ol className="space-y-10">
            {experiences.map((exp, i) => (
              <li key={`${exp.company}-${exp.period}`}>
                <Reveal delay={i * 0.08}>
                  <div className="grid grid-cols-1 gap-5 lg:grid-cols-[140px_1fr] lg:gap-14">
                    {/* Period column */}
                    <div className="relative flex items-start gap-4 sm:pl-8 lg:pl-0">
                      <span
                        aria-hidden
                        className="timeline-node absolute left-0 top-1.5 hidden h-[15px] w-[15px] rounded-full border-2 border-background bg-primary sm:block lg:left-auto lg:-right-[38px]"
                      />
                      <div className="font-mono text-sm">
                        <div className="text-foreground">{exp.period}</div>
                        <div className="mt-1 text-xs text-primary/80">{exp.type}</div>
                      </div>
                    </div>

                    {/* Card */}
                    <CardGlow className="rounded-2xl sm:ml-8 lg:ml-0">
                      <article className="card-glow group relative rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/60 sm:p-8">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                              <Building2 className="h-5 w-5" aria-hidden />
                            </span>
                            <div>
                              <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                                {exp.role}
                              </h3>
                              <p className="text-sm text-muted-foreground">{exp.company}</p>
                            </div>
                          </div>
                        </div>

                        {exp.highlight && (
                          <p className="mt-5 flex items-start gap-2.5 rounded-xl border border-primary/25 bg-primary/[0.07] px-4 py-3 text-sm font-medium leading-relaxed text-foreground">
                            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                            {exp.highlight}
                          </p>
                        )}

                        <ul className="mt-6 space-y-4">
                          {exp.bullets.map((b, j) => (
                            <li
                              key={j}
                              className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4"
                            >
                              {b.metric ? (
                                <span className="inline-flex w-fit shrink-0 rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-xs font-medium text-primary sm:mt-0.5 sm:min-w-[9.5rem] sm:justify-center">
                                  {b.metric}
                                </span>
                              ) : (
                                <span
                                  aria-hidden
                                  className="hidden shrink-0 sm:mt-0.5 sm:block sm:min-w-[9.5rem]"
                                />
                              )}
                              <span className="text-sm leading-relaxed text-foreground/80 sm:text-[15px]">
                                {b.text}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <ul className="mt-6 flex flex-wrap gap-1.5 border-t border-border pt-5">
                          {exp.stack.map((s) => (
                            <li
                              key={s}
                              className="rounded-md border border-border bg-background/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground transition-colors group-hover:border-primary/25"
                            >
                              {s}
                            </li>
                          ))}
                        </ul>
                      </article>
                    </CardGlow>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
