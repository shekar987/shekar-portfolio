import { techTicker } from "@/data/portfolio";

/**
 * TechMarquee — a slow, edge-faded ticker of the stack from the CV.
 * Pure CSS animation (no JS), pauses on hover, wraps statically under
 * prefers-reduced-motion. The track is duplicated so the loop is seamless.
 */
export function TechMarquee() {
  const items = [...techTicker, ...techTicker];
  return (
    <div
      aria-label="Technologies I work with"
      className="marquee relative border-y border-border/70 bg-card/20 py-4 backdrop-blur-sm"
    >
      <ul className="marquee__track items-center gap-3 px-3">
        {items.map((t, i) => (
          <li
            key={`${t}-${i}`}
            aria-hidden={i >= techTicker.length ? true : undefined}
            className="flex items-center gap-3 whitespace-nowrap font-mono text-xs tracking-wide text-muted-foreground"
          >
            <span className="rounded-full border border-border bg-background/40 px-3 py-1 transition-colors hover:border-primary/40 hover:text-foreground">
              {t}
            </span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-primary/60" />
          </li>
        ))}
      </ul>
    </div>
  );
}
