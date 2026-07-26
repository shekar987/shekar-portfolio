import { ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

/**
 * UK Work Authorisation micro-banner.
 * Sits just above the footer. Emerald border + checkmark.
 * Reuses existing theme tokens (primary = emerald) so it blends
 * with both light and dark modes. No new styles introduced.
 */
export function WorkAuthorisationBanner() {
  return (
    <section aria-label="UK work authorisation" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3 rounded-xl border border-primary/30 bg-primary/[0.06] px-4 py-3 backdrop-blur-sm sm:px-5">
            <span
              aria-hidden
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary"
            >
              <ShieldCheck className="h-4 w-4" />
            </span>
            <p className="text-sm font-medium leading-snug text-foreground sm:text-[15px]">
              <span className="font-semibold text-primary">UK Work Authorisation</span>
              <span className="text-muted-foreground"> — </span>
              Full-time placement rights &amp; Graduate Route eligible. No
              immediate sponsorship required.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
