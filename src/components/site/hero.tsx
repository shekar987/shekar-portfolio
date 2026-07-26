"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Linkedin,
  Github,
  MapPin,
  Briefcase,
  GraduationCap,
  BadgeCheck,
  Users,
} from "lucide-react";
import { profile, hero, links } from "@/data/portfolio";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const glance = [
  { icon: Briefcase, label: "2+ years", value: "Backend Developer · Brane Group" },
  { icon: GraduationCap, label: "MSc CS · AssetGuard+ Research", value: "University of East London" },
  { icon: BadgeCheck, label: "AWS Certified", value: "Cloud Practitioner" },
  { icon: Users, label: "3 products shipped", value: "CV Tailor · RideX · FinSight" },
];

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      {/* Ambient background — gradient mesh + dot grid. Layered light. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mesh-bg"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 dot-grid opacity-80 [mask-image:radial-gradient(ellipse_75%_55%_at_50%_0%,#000_35%,transparent_100%)]"
      />

      <div className="relative mx-auto max-w-5xl px-5 pt-28 pb-24 sm:px-8 sm:pt-40 sm:pb-36">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-16"
        >
          {/* Left: positioning + CTAs */}
          <div>
            {/* Status pill */}
            <motion.p
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur-sm"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              {profile.status}
              <span aria-hidden className="text-border">
                ·
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3 w-3" aria-hidden />
                {profile.location}
              </span>
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={item}
              id="hero-heading"
              className="mt-7 text-balance text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl sm:leading-[0.95] lg:text-[4.75rem]"
            >
              Backend engineer building{" "}
              <span className="text-accent-gradient">full-stack &amp; AI</span>{" "}
              products.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={item}
              className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-foreground/75"
            >
              {hero.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href={links.email}
                className="group inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_30px_-6px_var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Email me
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={links.cv}
                className="group inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-card/50 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Download className="h-4 w-4" aria-hidden />
                Download CV
              </a>
            </motion.div>

            {/* Profile links */}
            <motion.ul
              variants={item}
              className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm"
            >
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
              <li aria-hidden className="text-border">
                /
              </li>
              <li className="text-muted-foreground">{profile.email}</li>
            </motion.ul>
          </div>

          {/* Right: at-a-glance glass card — real facts only */}
          <motion.div variants={item} className="hidden lg:block">
            <div className="card-glow group rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                  At a glance
                </h2>
                <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_2px_var(--primary)]" />
              </div>
              <ul className="mt-6 space-y-4">
                {glance.map((g) => {
                  const Icon = g.icon;
                  return (
                    <li key={g.label} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-background/50 text-muted-foreground transition-colors group-hover:text-foreground">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-foreground">
                          {g.label}
                        </div>
                        <div className="truncate text-xs text-muted-foreground">
                          {g.value}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-5 border-t border-border pt-4">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Right to work in the UK during MSc placement. Graduate Route
                  visa eligible January 2027.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
