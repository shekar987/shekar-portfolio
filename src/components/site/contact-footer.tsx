import {
  ArrowUpRight,
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
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
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[520px] glow-radial opacity-80" />
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_100%,#000_20%,transparent_100%)]" />

      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="section-index font-mono text-xs text-primary select-none">06</span>
                <span aria-hidden className="h-px w-10 bg-primary/40" />
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Contact
                </span>
              </div>
              <h2
                id="contact-heading"
                className="mt-5 text-balance text-4xl font-semibold tracking-[-0.035em] sm:text-6xl sm:leading-[0.98]"
              >
                Let&apos;s build something{" "}
                <span className="text-shimmer">worth shipping.</span>
              </h2>
              <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {profile.status} for full-stack and AI engineering roles in {profile.location}
                {" "}or remote. Email is fastest — I usually reply within a day.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={links.email}
                  className="btn-primary group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  Email me
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium text-foreground"
                >
                  <Linkedin className="h-4 w-4" aria-hidden />
                  Connect on LinkedIn
                </a>
              </div>
            </Reveal>
          </div>

          {/* Contact card */}
          <Reveal delay={0.15}>
            <div className="glass card-glow rounded-2xl p-6 sm:p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Reach me
              </p>
              <ul className="mt-4 divide-y divide-border">
                <li>
                  <a
                    href={links.email}
                    className="group flex items-center gap-3 py-3 text-sm transition-colors hover:text-primary"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background/50 text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary">
                      <Mail className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1 truncate">{profile.email}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
                <li>
                  <a
                    href={links.phone}
                    className="group flex items-center gap-3 py-3 text-sm transition-colors hover:text-primary"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background/50 text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary">
                      <Phone className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="flex-1">{profile.phone}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
                <li>
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 py-3 text-sm transition-colors hover:text-primary"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background/50 text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary">
                      <Linkedin className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="flex-1">LinkedIn</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
                <li>
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 py-3 text-sm transition-colors hover:text-primary"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background/50 text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary">
                      <Github className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="flex-1">GitHub · shekar987</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              </ul>
              <p className="mt-4 flex items-start gap-2 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
                {profile.rightToWork}.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. Built with Next.js, TypeScript, Tailwind CSS &amp; Framer Motion.
          </p>
          <a
            href="#top"
            className="link-underline inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
