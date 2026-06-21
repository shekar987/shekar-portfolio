import { ArrowUpRight, Download, Linkedin, Github, MapPin } from "lucide-react";
import { profile, hero, links } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="mx-auto max-w-3xl px-5 pt-20 pb-20 sm:px-6 sm:pt-28 sm:pb-28"
    >
      {/* Status line */}
      <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <span
            aria-hidden
            className="inline-block h-1.5 w-1.5 rounded-full bg-primary"
          />
          {profile.status}
        </span>
        <span aria-hidden>·</span>
        <span className="inline-flex items-center gap-1">
          <MapPin className="h-3 w-3" aria-hidden />
          {profile.location}
        </span>
      </p>

      <h1
        id="hero-heading"
        className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl sm:leading-[1.08]"
      >
        {hero.headline}
      </h1>

      <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
        {hero.subtitle}
      </p>

      {/* CTAs */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <a
          href={links.email}
          className="group inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Email me
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <a
          href={links.cv}
          className="group inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Download className="h-4 w-4" aria-hidden />
          Download CV
        </a>
      </div>

      {/* Profile links */}
      <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-sm">
        <li>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
          >
            <Github className="h-3.5 w-3.5" aria-hidden />
            GitHub
          </a>
        </li>
        <li>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
          >
            <Linkedin className="h-3.5 w-3.5" aria-hidden />
            LinkedIn
          </a>
        </li>
        <li aria-hidden className="text-border">
          /
        </li>
        <li className="text-muted-foreground">
          {profile.email}
        </li>
      </ul>
    </section>
  );
}
