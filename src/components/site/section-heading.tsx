import { Reveal } from "@/components/site/reveal";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  /** Short kicker above the title, e.g. "Selected work". */
  kicker?: string;
  /** One-line description under the title. */
  description?: string;
  /** Optional right-aligned slot (a link, a count, a legend). */
  aside?: React.ReactNode;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  kicker,
  description,
  aside,
}: Props) {
  return (
    <Reveal>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="section-index font-mono text-xs text-primary select-none"
            >
              {eyebrow}
            </span>
            <span aria-hidden className="h-px w-10 bg-primary/40" />
            {kicker && (
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {kicker}
              </span>
            )}
          </div>
          <h2
            id={id}
            className="mt-4 text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]"
          >
            {title}
          </h2>
          {description && (
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        {aside && <div className="shrink-0">{aside}</div>}
      </div>
    </Reveal>
  );
}
