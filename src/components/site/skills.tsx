import {
  Database,
  Layout,
  Cloud,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { skillCategories, type SkillCategory } from "@/data/portfolio";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";

const categoryMeta: Record<
  SkillCategory["title"],
  { icon: LucideIcon; accent: string }
> = {
  "Backend & Databases": {
    icon: Database,
    accent: "text-primary",
  },
  "Frontend & Tools": {
    icon: Layout,
    accent: "text-[oklch(0.8_0.12_190)]",
  },
  "Cloud & DevOps": {
    icon: Cloud,
    accent: "text-[oklch(0.8_0.12_205)]",
  },
  Specialities: {
    icon: Sparkles,
    accent: "text-[oklch(0.82_0.15_300)]",
  },
};

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading id="skills-heading" eyebrow="04" title="Skills" />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {skillCategories.map((cat, i) => {
            const meta = categoryMeta[cat.title];
            const Icon = meta.icon;
            return (
              <Reveal key={cat.title} delay={i * 0.06}>
                <article className="card-glow group h-full rounded-xl border border-border bg-card/40 p-6 backdrop-blur-sm transition-colors hover:border-primary/30 sm:p-7">
                  {/* Header */}
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className={`mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background/50 ${meta.accent}`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold tracking-tight">
                        {cat.title}
                      </h3>
                      <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Badges — rounded-full, subtle background tint */}
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {cat.skills.map((s) => (
                      <li
                        key={s}
                        className="inline-flex items-center rounded-full border border-border bg-primary/[0.06] px-3 py-1 text-xs font-medium text-foreground/90 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
