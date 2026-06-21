type Props = {
  id: string;
  eyebrow: string;
  title: string;
};

export function SectionHeading({ id, eyebrow, title }: Props) {
  return (
    <div className="flex items-baseline gap-3">
      <span
        aria-hidden
        className="font-mono text-xs text-muted-foreground/70 select-none"
      >
        {eyebrow}
      </span>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
