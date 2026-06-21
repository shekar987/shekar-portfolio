import { experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/site/section-heading";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          id="experience-heading"
          eyebrow="02"
          title="Experience"
        />

        <article className="mt-8">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-lg font-semibold tracking-tight">
              {experience.role}
              <span className="text-muted-foreground"> · {experience.company}</span>
            </h3>
            <span className="font-mono text-sm text-muted-foreground">
              {experience.period}
            </span>
          </div>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            {experience.type}
          </p>

          <ul className="mt-5 space-y-3">
            {experience.bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed sm:text-[15px]">
                <span
                  aria-hidden
                  className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary"
                />
                <span className="text-foreground/90">
                  {b.metric && (
                    <strong className="font-semibold text-foreground">
                      {b.metric}
                    </strong>
                  )}
                  {b.metric && " — "}
                  {b.text}
                </span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
