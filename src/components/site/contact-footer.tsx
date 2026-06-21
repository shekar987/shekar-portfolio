import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile, links } from "@/data/portfolio";

export function ContactFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-20">
        <p className="font-mono text-xs text-muted-foreground/70 select-none">
          05
        </p>
        <h2
          id="contact-heading"
          className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Let&apos;s talk.
        </h2>
        <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
          {profile.status} in {profile.location}. The fastest way to reach me is
          email — I usually reply within a day.
        </p>

        {/* Primary conversion path */}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={links.email}
            className="group inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Mail className="h-4 w-4" aria-hidden />
            {profile.email}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={links.cv}
            className="group inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Download className="h-4 w-4" aria-hidden />
            Download CV (PDF)
          </a>
        </div>

        {/* Secondary channels */}
        <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
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
        </ul>

        {/* Right to work — concrete UK recruiter signal */}
        <p className="mt-8 rounded-md border border-border bg-muted/50 px-4 py-3 text-sm leading-relaxed text-muted-foreground">
          {profile.rightToWork}.
        </p>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. Built with Next.js, TypeScript &amp; Tailwind CSS.
          </p>
          <p>London, UK</p>
        </div>
      </div>
    </footer>
  );
}
