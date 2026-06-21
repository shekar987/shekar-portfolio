import { Reveal } from "@/components/site/reveal";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
};

export function SectionHeading({ id, eyebrow, title }: Props) {
  return (
    <Reveal>
      <div className="flex items-baseline gap-3">
        <span
          aria-hidden
          className="font-mono text-xs text-primary/70 select-none"
        >
          {eyebrow}
        </span>
        <h2
          id={id}
          className="text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          {title}
        </h2>
      </div>
    </Reveal>
  );
}
