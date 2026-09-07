import { BadgeCheck, Clock, ShieldCheck, type LucideIcon } from "lucide-react";
import { workAuthorisation } from "@/data/portfolio";
import { Reveal } from "@/components/site/reveal";

const icons: LucideIcon[] = [BadgeCheck, Clock, ShieldCheck];

/**
 * UK work-authorisation strip — three facts from the CV's "Right to work"
 * section, rendered as pills so a recruiter can scan them in one glance.
 */
export function WorkAuthorisationBanner() {
  return (
    <section aria-label="UK work authorisation" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-2xl px-5 py-5 sm:px-7">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_0%_50%,color-mix(in_oklch,var(--primary)_14%,transparent),transparent_60%)]"
            />
            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                UK right to work
              </p>
              <ul className="flex flex-wrap gap-2.5">
                {workAuthorisation.map((w, i) => {
                  const Icon = icons[i % icons.length];
                  return (
                    <li
                      key={w}
                      className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-sm font-medium text-foreground"
                    >
                      <Icon className="h-4 w-4 text-primary" aria-hidden />
                      {w}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
