import { education, certifications } from "@/data/portfolio";
import { SectionHeading } from "@/components/site/section-heading";

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          id="education-heading"
          eyebrow="04"
          title="Education & Certifications"
        />

        <div className="mt-8 space-y-7">
          {education.map((e) => (
            <article key={e.degree}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-base font-semibold tracking-tight">
                  {e.degree}
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {e.period}
                </span>
              </div>
              <p className="mt-0.5 text-sm text-foreground/90">{e.institution}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {e.note}
              </p>
            </article>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-8 border-t border-border pt-6">
          <h3 className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
            Certifications
          </h3>
          <ul className="mt-3 space-y-1.5 text-sm text-foreground/90">
            {certifications.map((c) => (
              <li key={c} className="flex gap-2">
                <span aria-hidden className="text-primary">
                  ✓
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
