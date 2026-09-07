import {
  Layers,
  Zap,
  Database,
  Sparkles,
  LayoutTemplate,
  type LucideIcon,
} from "lucide-react";
import { bentoStats, type BentoStat } from "@/data/portfolio";
import { Reveal } from "@/components/site/reveal";
import { CardGlow } from "@/components/site/card-glow";
import { CountUp } from "@/components/site/count-up";
import { SectionHeading } from "@/components/site/section-heading";

const iconMap: Record<BentoStat["icon"], LucideIcon> = {
  layers: Layers,
  zap: Zap,
  database: Database,
  sparkles: Sparkles,
  layout: LayoutTemplate,
};

const tintClass: Record<BentoStat["accent"], string> = {
  emerald: "tint-emerald",
  teal: "tint-teal",
  cyan: "tint-cyan",
  violet: "tint-violet",
  amber: "tint-amber",
};

const spanClass: Record<BentoStat["span"], string> = {
  2: "lg:col-span-2",
  3: "lg:col-span-3",
};

export function BentoStats() {
  return (
    <section
      id="impact"
      aria-labelledby="bento-heading"
      className="relative border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          id="bento-heading"
          eyebrow="01"
          kicker="Impact"
          title="Measured outcomes, not responsibilities."
          description="Every number below comes from two years of production work at Brane Group and is on my CV — nothing rounded up."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {bentoStats.map((stat, i) => {
            const Icon = iconMap[stat.icon];
            return (
              <Reveal
                key={stat.label}
                delay={i * 0.07}
                className={`${spanClass[stat.span]} ${
                  stat.span === 3 ? "sm:col-span-1" : ""
                }`}
              >
                <CardGlow className={`h-full rounded-2xl ${tintClass[stat.accent]}`}>
                  <article className="card-glow corner-glow tint-glow-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-card/70 sm:p-7">
                    <div className="flex items-start justify-between">
                      <span className="tint-chip inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
                        Brane Group
                      </span>
                    </div>

                    <div
                      className={`tint-number mt-7 font-semibold leading-none tracking-[-0.045em] ${
                        stat.span === 3 ? "text-6xl sm:text-7xl lg:text-[5.5rem]" : "text-6xl sm:text-7xl"
                      }`}
                    >
                      <CountUp value={stat.number} prefix={stat.prefix} suffix={stat.suffix} />
                    </div>

                    <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground sm:text-lg">
                      {stat.label}
                    </h3>
                    <p className="mt-2 mb-6 text-sm leading-relaxed text-muted-foreground">
                      {stat.context}
                    </p>

                    <span
                      aria-hidden
                      className="tint-bar mt-auto h-px w-2/3 opacity-50 transition-all duration-500 group-hover:w-full group-hover:opacity-100"
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
