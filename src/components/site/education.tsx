import { education, certifications } from "@/data/portfolio";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { GraduationCap, BadgeCheck } from "lucide-react";

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          id="education-heading"
          eyebrow="05"
          title="Education & Certifications"
        />

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.06}>
              <article className="card-glow h-full rounded-xl border border-border bg-card/40 p-6 backdrop-blur-sm transition-colors hover:border-primary/30">
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary"
                  >
                    <GraduationCap className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <h3 className="text-base font-semibold tracking-tight">
                        {e.degree}
                      </h3>
                      <span className="font-mono text-xs text-muted-foreground">
                        {e.period}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm text-foreground/80">
                      {e.institution}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {e.note}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Certifications */}
        <Reveal className="mt-8">
          <div className="rounded-xl border border-border bg-card/30 p-6 backdrop-blur-sm">
            <h3 className="font-mono text-xs uppercase tracking-wider text-primary/80">
              Certifications
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {certifications.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm">
                  <BadgeCheck
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden
                  />
                  <span className="text-foreground/80">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
