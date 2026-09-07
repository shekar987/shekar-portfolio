import {
  Server,
  LayoutTemplate,
  Database,
  BrainCircuit,
  Cloud,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { skillCategories, type SkillCategory } from "@/data/portfolio";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { CardGlow } from "@/components/site/card-glow";

const iconMap: Record<SkillCategory["icon"], LucideIcon> = {
  server: Server,
  layout: LayoutTemplate,
  database: Database,
  brain: BrainCircuit,
  cloud: Cloud,
  shield: ShieldCheck,
};

const tints = [
  "tint-emerald",
  "tint-teal",
  "tint-cyan",
  "tint-violet",
  "tint-amber",
  "tint-rose",
];

export function Skills() {
  const total = skillCategories.reduce((n, c) => n + c.skills.length, 0);
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          id="skills-heading"
          eyebrow="04"
          kicker="Skills"
          title="A typed, tested, production-minded toolkit."
          description="Grouped by where they sit in the stack. Everything listed has shipped in either Brane Group work or one of the projects above."
          aside={
            <span className="font-mono text-xs text-muted-foreground">
              {skillCategories.length} areas · {total} technologies
            </span>
          }
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon];
            const tint = tints[i % tints.length];
            return (
              <Reveal key={cat.title} delay={i * 0.06}>
                <CardGlow className={`h-full rounded-2xl ${tint}`}>
                  <article className="card-glow corner-glow tint-glow-hover group relative flex h-full flex-col rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-card/70">
                    <div className="flex items-start gap-3">
                      <span className="tint-chip inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-base font-semibold tracking-tight">{cat.title}</h3>
                        <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
                          {cat.description}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {cat.skills.map((s) => (
                        <li
                          key={s}
                          className="inline-flex items-center rounded-full border border-border bg-background/40 px-3 py-1 text-xs font-medium text-foreground/85 transition-all duration-200 hover:-translate-y-0.5 hover:border-[color-mix(in_oklch,var(--tint)_45%,transparent)] hover:bg-[color-mix(in_oklch,var(--tint)_12%,transparent)] hover:text-foreground"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>

                    <div aria-hidden className="mt-auto pt-6">
                      <span className="tint-bar block h-px w-1/2 opacity-40 transition-all duration-500 group-hover:w-full group-hover:opacity-90" />
                    </div>
                  </article>
                </CardGlow>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
