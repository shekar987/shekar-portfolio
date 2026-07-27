import { Zap, Database, Rocket, type LucideIcon } from "lucide-react";
import { bentoStats, type BentoStat } from "@/data/portfolio";
import { Reveal } from "@/components/site/reveal";
import { CardGlow } from "@/components/site/card-glow";

const iconMap: Record<BentoStat["icon"], LucideIcon> = {
  zap: Zap,
  database: Database,
  rocket: Rocket,
};

// Per-accent styling: number gradient + icon chip tint + bottom accent bar.
// All hues live in the green family so the palette stays disciplined.
const accentStyles: Record<
  BentoStat["accent"],
  { number: string; chip: string; bar: string }
> = {
  emerald: {
    number: "text-accent-gradient",
    chip: "border-primary/30 bg-primary/10 text-primary",
    bar: "bg-primary",
  },
  teal: {
    number: "text-grad-teal",
    chip: "border-[oklch(0.78_0.12_190/0.3)] bg-[oklch(0.78_0.12_190/0.1)] text-[oklch(0.8_0.12_190)]",
    bar: "bg-[oklch(0.78_0.12_190)]",
  },
  cyan: {
    number: "text-grad-cyan",
    chip: "border-[oklch(0.78_0.12_205/0.3)] bg-[oklch(0.78_0.12_205/0.1)] text-[oklch(0.8_0.12_205)]",
    bar: "bg-[oklch(0.78_0.12_205)]",
  },
};

export function BentoStats() {
  return (
    <section
      id="impact"
      aria-labelledby="bento-heading"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <div className="flex items-baseline gap-3">
            <span
              aria-hidden
              className="font-mono text-xs text-primary/70 select-none"
            >
              01
            </span>
            <h2
              id="bento-heading"
              className="text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Backend impact
            </h2>
          </div>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            Measured outcomes from two years at Brane Group — results, not
            responsibilities.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {bentoStats.map((stat, i) => {
            const Icon = iconMap[stat.icon];
            const styles = accentStyles[stat.accent];
            return (
              <Reveal key={stat.label} delay={i * 0.08}>
                <CardGlow className="rounded-xl">
                <article className="card-glow group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card/70 sm:p-7">
                  {/* Icon chip */}
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border ${styles.chip} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>

                  {/* Big number */}
                  <div
                    className={`mt-6 text-6xl font-semibold leading-none tracking-[-0.04em] sm:text-7xl ${styles.number}`}
                  >
                    {stat.value}
                  </div>

                  {/* Label */}
                  <h3 className="mt-4 text-base font-medium text-foreground">
                    {stat.label}
                  </h3>

                  {/* Context */}
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {stat.context}
                  </p>

                  {/* Bottom accent bar */}
                  <span
                    aria-hidden
                    className={`mt-6 h-px w-full origin-left scale-x-100 ${styles.bar} opacity-30 transition-opacity duration-300 group-hover:opacity-70`}
                  />
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
