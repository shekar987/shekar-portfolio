import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";

export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading id="work-heading" eyebrow="02" title="Selected Work" />

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 0.06}
              className={p.featured ? "lg:col-span-2" : ""}
            >
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-glow group flex h-full flex-col rounded-xl border border-border bg-card/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card/70 sm:p-7">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
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

      {/* Stack */}
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <li
            key={s}
            className="rounded-md border border-border bg-background/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
          >
            {s}
          </li>
        ))}
      </ul>

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

      {/* Role + Links */}
      <div className="mt-auto pt-5">
        <p className="text-xs text-muted-foreground">{project.role}</p>
        <ul className="mt-4 flex flex-col gap-2 border-t border-border pt-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
          {project.live && (
            <li>
              <a
                href={project.live.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-primary"
              >
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                Live
              </a>
            </li>
          )}
          <li>
            <a
              href={project.code.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              <Code2 className="h-3.5 w-3.5" aria-hidden />
              Source
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
}
