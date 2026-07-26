import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Layers,
  ShieldCheck,
  Trophy,
} from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";

export function Work() {
  // Featured project(s) get full width; the rest form a clean 2-column pair.
  const featured = projects.filter((p) => p.featured);
  const standard = projects.filter((p) => !p.featured);

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading id="work-heading" eyebrow="02" title="Selected Work" />

        {/* Featured — full width */}
        {featured.length > 0 && (
          <div className="mt-12 space-y-5">
            {featured.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        )}

        {/* Standard — premium 2-column pair */}
        {standard.length > 0 && (
          <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {standard.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-glow group flex h-full flex-col rounded-xl border border-border bg-card/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card/70 sm:p-7">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-xl font-semibold tracking-tight">
              {project.name}
            </h3>
            {project.featured && (
              <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                Featured
              </span>
            )}
            <span className="font-mono text-xs text-muted-foreground">
              {project.year}
            </span>
          </div>
          {project.tagline && (
            <p className="mt-1 text-xs text-muted-foreground">{project.tagline}</p>
          )}
        </div>
        <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>

      {/* Tech badges */}
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <li
            key={s}
            className="rounded-md border border-border bg-background/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground transition-colors group-hover:border-primary/20"
          >
            {s}
          </li>
        ))}
      </ul>

      {/* Architecture sub-bullet — sharp technical signal */}
      {project.architecture && (
        <div className="mt-4 flex items-start gap-2 rounded-lg border border-primary/20 bg-primary/[0.06] px-3 py-2">
          <Layers className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
          <p className="text-xs font-medium leading-relaxed text-foreground/90">
            {project.architecture}
          </p>
        </div>
      )}

      {/* Metric badge — standout number */}
      {project.metricBadge && (
        <div className="mt-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
            {project.metricBadge}
          </span>
        </div>
      )}

      {/* Body */}
      <dl className="mt-5 space-y-4 text-sm leading-relaxed">
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-wider text-primary/80">
            Problem
          </dt>
          <dd className="mt-1 text-foreground/80">{project.problem}</dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-wider text-primary/80">
            Approach
          </dt>
          <dd className="mt-1 text-foreground/80">{project.approach}</dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-wider text-primary/80">
            Outcome
          </dt>
          <dd className="mt-1 font-medium text-foreground">
            {project.outcome}
          </dd>
        </div>
      </dl>

      {/* Key Achievement — highlighted callout */}
      {project.keyAchievement && (
        <div className="mt-5 flex items-start gap-2.5 rounded-lg border border-primary/25 bg-primary/[0.07] px-3.5 py-2.5">
          <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-primary/80">
              Key Achievement
            </p>
            <p className="mt-0.5 text-sm font-medium leading-relaxed text-foreground">
              {project.keyAchievement}
            </p>
          </div>
        </div>
      )}

      {/* Role */}
      <p className="mt-5 text-xs text-muted-foreground">{project.role}</p>

      {/* Sleek buttons — Live Demo + Source Code, hover lift */}
      <div className="mt-5 flex flex-wrap gap-2.5 border-t border-border pt-5">
        {project.live && (
          <a
            href={project.live.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[0_0_0_0_var(--primary)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            Live Demo
          </a>
        )}
        <a
          href={project.code.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/50 px-4 py-2 text-sm font-medium text-foreground/90 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Github className="h-3.5 w-3.5" aria-hidden />
          Source Code
        </a>
      </div>
    </article>
  );
}
