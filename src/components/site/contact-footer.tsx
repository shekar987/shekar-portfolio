import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile, links } from "@/data/portfolio";
import { Reveal } from "@/components/site/reveal";

export function ContactFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden border-t border-border"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[400px] glow-radial opacity-70"
      />
      <div className="relative mx-auto max-w-5xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="font-mono text-xs text-primary/70 select-none">06</p>
          <h2
            id="contact-heading"
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl sm:leading-[1.05]"
          >
            Let&apos;s{" "}
            <span className="text-accent-gradient">talk.</span>
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            {profile.status} in {profile.location}. The fastest way to reach me
            is email — I usually reply within a day.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={links.email}
              className="group inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_30px_-6px_var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Mail className="h-4 w-4" aria-hidden />
              {profile.email}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={links.cv}
              className="group inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-card/50 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Download className="h-4 w-4" aria-hidden />
              Download CV (PDF)
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <li>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-3.5 w-3.5" aria-hidden />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-3.5 w-3.5" aria-hidden />
                GitHub
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 rounded-lg border border-border bg-card/30 px-5 py-4 text-sm leading-relaxed text-muted-foreground backdrop-blur-sm">
            {profile.rightToWork}.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. Built with Next.js, TypeScript &amp; Tailwind CSS.
          </p>
          <p>London, UK</p>
        </div>
      </div>
    </footer>
  );
}
