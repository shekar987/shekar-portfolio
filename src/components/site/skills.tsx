import { skillTiers } from "@/data/portfolio";
import { SectionHeading } from "@/components/site/section-heading";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-20">
        <SectionHeading id="skills-heading" eyebrow="03" title="Skills" />

        <div className="mt-8 space-y-8">
          {skillTiers.map((tier) => (
            <div key={tier.tier}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-base font-semibold tracking-tight">
                  {tier.label}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {tier.description}
                </p>
              </div>
              <ul className="mt-3 flex flex-wrap gap-2">
                {tier.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-foreground/90"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
