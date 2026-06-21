import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { SectionHeading } from "@/components/site/section-heading";

export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-20">
        <SectionHeading id="work-heading" eyebrow="01" title="Selected Work" />

        <div className="mt-10 space-y-12">
          {projects.map((p) => (
            <ProjectArticle key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectArticle({ project }: { project: Project }) {
  return (
    <article className="group">
      {/* Title row */}
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-xl font-semibold tracking-tight">
          {project.name}
        </h3>
        <span className="font-mono text-sm text-muted-foreground">
          {project.year}
        </span>
      </div>

      {/* Stack */}
      <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1 font-mono text-xs text-muted-foreground">
        {project.stack.map((s, i) => (
          <li key={s} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden className="text-border">·</span>}
            {s}
          </li>
        ))}
      </ul>

      {/* Body */}
      <dl className="mt-5 space-y-4 text-sm leading-relaxed sm:text-[15px]">
        <div>
          <dt className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
            Problem
          </dt>
          <dd className="mt-1 text-foreground/90">{project.problem}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
            Approach
          </dt>
          <dd className="mt-1 text-foreground/90">{project.approach}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
            Outcome
          </dt>
          <dd className="mt-1 text-foreground/90">{project.outcome}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
            My role
          </dt>
          <dd className="mt-1 text-foreground/90">{project.role}</dd>
        </div>
      </dl>

      {/* Links */}
      <ul className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
        {project.live && (
          <li>
            <a
              href={project.live.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-primary"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              {project.live.label}
            </a>
          </li>
        )}
        <li>
          <a
            href={project.code.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary"
          >
            <Code2 className="h-3.5 w-3.5" aria-hidden />
            {project.code.label}
            <ArrowUpRight className="h-3 w-3" aria-hidden />
          </a>
        </li>
      </ul>
    </article>
  );
}
