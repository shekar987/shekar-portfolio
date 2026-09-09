import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Check,
  Lock,
  Braces,
  ShieldCheck,
  RefreshCw,
  Bell,
  type LucideIcon,
} from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { CardGlow } from "@/components/site/card-glow";

export function Work() {
  const featured = projects.filter((p) => p.featured);
  const standard = projects.filter((p) => !p.featured);

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          id="work-heading"
          eyebrow="02"
          kicker="Selected work"
          title="Products I designed, built and shipped solo."
          description="Live, production systems — not tutorials. Each one is open source and has a running deployment you can click into."
          aside={
            <span className="font-mono text-xs text-muted-foreground">
              {projects.length} projects · {projects.filter((p) => p.live).length} live
            </span>
          }
        />

        {featured.length > 0 && (
          <div className="mt-12 space-y-6">
            {featured.map((p) => (
              <Reveal key={p.name}>
                <FeaturedCard project={p} />
              </Reveal>
            ))}
          </div>
        )}

        {standard.length > 0 && (
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {standard.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.07}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------------- shared bits ---------------- */

function StackChips({ stack }: { stack: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {stack.map((s) => (
        <li
          key={s}
          className="rounded-md border border-border bg-background/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground transition-colors group-hover:border-primary/25 group-hover:text-foreground/80"
        >
          {s}
        </li>
      ))}
    </ul>
  );
}

function Badges({ badges }: { badges?: string[] }) {
  if (!badges?.length) return null;
  return (
    <ul className="flex flex-wrap gap-2">
      {badges.map((b) => (
        <li
          key={b}
          className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[11px] font-medium text-primary"
        >
          <span aria-hidden className="h-1 w-1 rounded-full bg-primary" />
          {b}
        </li>
      ))}
    </ul>
  );
}

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((h, i) => (
        <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/80">
          <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
            <Check className="h-2.5 w-2.5" aria-hidden strokeWidth={3} />
          </span>
          <span>{h}</span>
        </li>
      ))}
    </ul>
  );
}

function Actions({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {project.live && (
        <a
          href={project.live.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          Live · {project.live.label}
        </a>
      )}
      <a
        href={project.code.href}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <Github className="h-3.5 w-3.5" aria-hidden />
        Source code
      </a>
    </div>
  );
}

function Header({ project }: { project: Project }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <h3 className="text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
            {project.name}
          </h3>
          {project.featured && (
            <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
              Featured
            </span>
          )}
          <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
        </div>
        <p className="mt-1.5 text-sm text-muted-foreground">{project.tagline}</p>
      </div>
      <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
    </div>
  );
}

/* ---------------- featured (full-width, with pipeline visual) ---------------- */

function FeaturedCard({ project }: { project: Project }) {
  return (
    <CardGlow className="rounded-2xl">
      <article className="card-glow group relative overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/60">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-primary/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100 sm:opacity-70"
        />
        <div className="relative grid grid-cols-1 gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div className="flex flex-col">
            <Header project={project} />
            <div className="mt-4">
              <StackChips stack={project.stack} />
            </div>
            <div className="mt-4">
              <Badges badges={project.badges} />
            </div>
            <p className="mt-5 text-[15px] leading-relaxed text-foreground/85">
              {project.summary}
            </p>
            <div className="mt-5">
              <Highlights items={project.highlights} />
            </div>
            <p className="mt-5 text-xs text-muted-foreground">{project.role}</p>
            <div className="mt-6 border-t border-border pt-6">
              <Actions project={project} />
            </div>
          </div>

          {project.pipeline && <PipelineVisual project={project} />}
        </div>
      </article>
    </CardGlow>
  );
}

const noteIcons: LucideIcon[] = [Braces, ShieldCheck, Lock, RefreshCw, Bell];

function PipelineVisual({ project }: { project: Project }) {
  const steps = project.pipeline ?? [];
  const meta = project.pipelineMeta;
  const notes = meta?.notes ?? [];
  return (
    <div
      aria-label={`${project.name} ${meta?.title ?? "pipeline"}`}
      className="glass relative flex flex-col rounded-xl p-0 shadow-[0_30px_60px_-40px_oklch(0_0_0/0.7)]"
    >
      {/* Browser-ish chrome */}
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.19_25)]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.82_0.16_85)]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
        </div>
        <div className="flex flex-1 items-center gap-2 rounded-md border border-border bg-background/50 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
          <Lock className="h-3 w-3 text-primary" aria-hidden />
          {project.live?.label ?? project.name}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            {meta?.title ?? "Pipeline"}
          </span>
          {meta?.badge && (
            <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary">
              {meta.badge}
            </span>
          )}
        </div>

        <ol className="mt-4 space-y-0">
          {steps.map((s, i) => {
            const noteText = notes.length ? notes[i % notes.length] : undefined;
            const Note = noteIcons[i % noteIcons.length];
            const last = i === steps.length - 1;
            return (
              <li key={s} className="relative">
                <div className="flex items-center gap-3 rounded-lg border border-border bg-background/50 px-3 py-2.5 transition-colors hover:border-primary/40">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/15 font-mono text-[11px] font-semibold text-primary">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-foreground">{s}</span>
                  {last && (
                    <span className="ml-auto inline-flex items-center gap-1 font-mono text-[10px] text-primary">
                      <Check className="h-3 w-3" aria-hidden strokeWidth={3} />
                      output
                    </span>
                  )}
                </div>
                {!last && (
                  <div className="ml-[15px] flex items-center gap-3 py-1">
                    <span
                      aria-hidden
                      className="h-5 w-px border-l border-dashed border-primary/60"
                    />
                    {noteText && (
                      <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] text-muted-foreground">
                        <Note className="h-3 w-3 text-primary/80" aria-hidden />
                        {noteText}
                      </span>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ol>

        <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-border pt-4">
          {(meta?.stats ?? []).map(([v, l]) => (
            <div key={l} className="rounded-lg border border-border bg-background/40 px-2.5 py-2 text-center">
              <dt className="font-mono text-sm font-semibold text-primary">{v}</dt>
              <dd className="mt-0.5 text-[10.5px] text-muted-foreground">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

/* ---------------- standard card ---------------- */

function ProjectCard({ project }: { project: Project }) {
  return (
    <CardGlow className="h-full rounded-2xl">
      <article className="card-glow corner-glow tint-emerald group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card/70 sm:p-7">
        <Header project={project} />
        <div className="mt-4">
          <StackChips stack={project.stack} />
        </div>
        <div className="mt-4">
          <Badges badges={project.badges} />
        </div>
        <p className="mt-5 text-sm leading-relaxed text-foreground/85">{project.summary}</p>
        <div className="mt-5">
          <Highlights items={project.highlights} />
        </div>
        <p className="mt-5 text-xs text-muted-foreground">{project.role}</p>
        <div className="mt-6 border-t border-border pt-6">
          <Actions project={project} />
        </div>
      </article>
    </CardGlow>
  );
}
