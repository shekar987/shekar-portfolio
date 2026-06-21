import { skillTiers } from "@/data/portfolio";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";

const tierAccent: Record<string, string> = {
  Daily: "border-primary/40 bg-primary/10 text-primary",
  Working: "border-border bg-card/50 text-foreground/80",
  Learning: "border-dashed border-border bg-transparent text-muted-foreground",
};

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading id="skills-heading" eyebrow="03" title="Skills" />

        <div className="mt-10 space-y-8">
          {skillTiers.map((tier, i) => (
            <Reveal key={tier.tier} delay={i * 0.06}>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-base font-semibold tracking-tight">
                    {tier.label}
                  </h3>
                  <p className="font-mono text-xs text-muted-foreground">
                    {tier.description}
                  </p>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {tier.skills.map((s) => (
                    <li
                      key={s}
                      className={`rounded-lg border px-3 py-1.5 font-mono text-xs transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_12px_-4px_var(--glow)] ${tierAccent[tier.tier]}`}
                    >
                      {s}
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
