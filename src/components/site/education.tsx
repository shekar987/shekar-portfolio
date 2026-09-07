import { GraduationCap, Award, Microscope, Cloud } from "lucide-react";
import { education, certifications } from "@/data/portfolio";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { CardGlow } from "@/components/site/card-glow";

export function Education() {
  const [msc, bsc] = education;
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          id="education-heading"
          eyebrow="05"
          kicker="Education & certifications"
          title="AWS-accredited MSc. Distinction BSc. Two AWS certifications."
          description="Formal grounding in software engineering, cloud and AI — plus applied research on a university-backed cybersecurity startup."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* MSc — spans two columns */}
          <Reveal className="lg:col-span-2">
            <CardGlow className="h-full rounded-2xl tint-emerald">
              <article className="card-glow corner-glow group relative h-full rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/60 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                      <GraduationCap className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                        {msc.degree}
                      </h3>
                      <p className="text-sm text-muted-foreground">{msc.institution}</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-border bg-background/50 px-3 py-1 font-mono text-xs text-muted-foreground">
                    {msc.period}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-foreground/80">{msc.note}</p>

                {msc.highlights && (
                  <div className="mt-6 border-t border-border pt-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                      AssetGuard+ · AI cybersecurity startup
                    </p>
                    <ul className="mt-3 space-y-3">
                      {msc.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm">
                          <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-primary/25 bg-primary/10 text-primary">
                            <Microscope className="h-3.5 w-3.5" aria-hidden />
                          </span>
                          <span className="leading-relaxed text-foreground/80">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            </CardGlow>
          </Reveal>

          {/* Right column: BSc + certifications */}
          <div className="flex flex-col gap-4">
            <Reveal delay={0.06} className="flex-1">
              <CardGlow className="h-full rounded-2xl tint-teal">
                <article className="card-glow corner-glow group relative h-full rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/60">
                  <div className="flex items-center gap-3">
                    <span className="tint-chip inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border">
                      <GraduationCap className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold tracking-tight">{bsc.degree}</h3>
                      <p className="text-xs text-muted-foreground">{bsc.institution}</p>
                    </div>
                  </div>
                  <p className="mt-3 font-mono text-xs text-muted-foreground">{bsc.period}</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">{bsc.note}</p>
                </article>
              </CardGlow>
            </Reveal>

            {certifications.map((c, i) => (
              <Reveal key={c.name} delay={0.1 + i * 0.05}>
                <CardGlow className="rounded-2xl tint-amber">
                  <article className="card-glow corner-glow tint-glow-hover group relative flex items-center gap-4 rounded-2xl border border-border bg-card/40 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-card/70">
                    <span className="tint-chip relative inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border">
                      <Cloud className="h-5 w-5" aria-hidden />
                      <Award className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-background p-0.5" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold tracking-tight">{c.name}</h3>
                      <p className="mt-0.5 text-xs text-muted-foreground">{c.issuer}</p>
                    </div>
                    <span className="ml-auto rounded-md border border-border bg-background/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                      {c.short}
                    </span>
                  </article>
                </CardGlow>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
