"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Linkedin,
  Github,
  MapPin,
  Phone,
  Briefcase,
  GraduationCap,
  BadgeCheck,
  Rocket,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import { profile, hero, links, glance, type GlanceIcon } from "@/data/portfolio";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const glanceIcons: Record<GlanceIcon, LucideIcon> = {
  briefcase: Briefcase,
  badge: BadgeCheck,
  graduation: GraduationCap,
  rocket: Rocket,
};

/* Syntax-highlighted "profile as code" — every value is a real CV fact. */
type Token = { t: string; c?: "kw" | "prop" | "str" | "bool" | "punc" | "num" };
const code: Token[][] = [
  [{ t: "const ", c: "kw" }, { t: "engineer" }, { t: " = {", c: "punc" }],
  [{ t: "  name", c: "prop" }, { t: ": ", c: "punc" }, { t: `"${profile.name}"`, c: "str" }, { t: ",", c: "punc" }],
  [{ t: "  role", c: "prop" }, { t: ": ", c: "punc" }, { t: `"${profile.role}"`, c: "str" }, { t: ",", c: "punc" }],
  [{ t: "  experience", c: "prop" }, { t: ": ", c: "punc" }, { t: '"2+ years"', c: "str" }, { t: ",", c: "punc" }],
  [
    { t: "  certified", c: "prop" },
    { t: ": [", c: "punc" },
    { t: '"AWS AI Practitioner"', c: "str" },
    { t: ", ", c: "punc" },
    { t: '"AWS Cloud Practitioner"', c: "str" },
    { t: "],", c: "punc" },
  ],
  [
    { t: "  stack", c: "prop" },
    { t: ": [", c: "punc" },
    { t: '"Python"', c: "str" },
    { t: ", ", c: "punc" },
    { t: '"FastAPI"', c: "str" },
    { t: ", ", c: "punc" },
    { t: '"React"', c: "str" },
    { t: ", ", c: "punc" },
    { t: '"TypeScript"', c: "str" },
    { t: "],", c: "punc" },
  ],
  [
    { t: "  shipped", c: "prop" },
    { t: ": [", c: "punc" },
    { t: '"Jobhuntz"', c: "str" },
    { t: ", ", c: "punc" },
    { t: '"RideX"', c: "str" },
    { t: ", ", c: "punc" },
    { t: '"FinSight"', c: "str" },
    { t: "],", c: "punc" },
  ],
  [{ t: "  location", c: "prop" }, { t: ": ", c: "punc" }, { t: `"${profile.location}"`, c: "str" }, { t: ",", c: "punc" }],
  [{ t: "  available", c: "prop" }, { t: ": ", c: "punc" }, { t: "true", c: "bool" }, { t: ",", c: "punc" }],
  [{ t: "  sponsorship", c: "prop" }, { t: ": ", c: "punc" }, { t: "false", c: "bool" }, { t: ",", c: "punc" }],
  [{ t: "};", c: "punc" }],
];

const tokenClass: Record<NonNullable<Token["c"]>, string> = {
  kw: "text-[oklch(0.74_0.16_295)]",
  prop: "text-foreground/85",
  str: "text-primary",
  bool: "text-[oklch(0.8_0.15_80)]",
  punc: "text-muted-foreground/70",
  num: "text-[oklch(0.8_0.15_80)]",
};

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      {/* Layered atmosphere: aurora blobs + dot grid + bottom fade */}
      <div aria-hidden className="aurora">
        <span />
        <span />
        <span />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 dot-grid opacity-90 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_30%,transparent_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background"
      />

      <div className="relative mx-auto max-w-6xl px-5 pt-24 pb-20 sm:px-8 sm:pt-32 sm:pb-28 lg:pt-36">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-14 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-16"
        >
          {/* ---------- Left: positioning + CTAs ---------- */}
          <div className="min-w-0">
            <motion.div variants={item} className="flex flex-wrap items-center gap-2.5">
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary backdrop-blur-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                {profile.status}
              </p>
              <p className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/50 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur-sm">
                <MapPin className="h-3 w-3" aria-hidden />
                {profile.location}
              </p>
              <p className="hidden items-center gap-1.5 rounded-full border border-border bg-card/50 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur-sm sm:inline-flex">
                <BadgeCheck className="h-3 w-3 text-primary" aria-hidden />
                {hero.eyebrow}
              </p>
            </motion.div>

            <motion.h1
              variants={item}
              id="hero-heading"
              className="mt-8 text-balance text-[2.75rem] font-semibold leading-[1] tracking-[-0.04em] sm:text-6xl sm:leading-[0.95] lg:text-[5rem]"
            >
              {hero.headline.prefix}{" "}
              <span className="text-shimmer">{hero.headline.accent}</span>{" "}
              {hero.headline.suffix}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-xl text-pretty text-[17px] leading-relaxed text-foreground/75 sm:text-lg"
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href={links.email}
                className="btn-primary group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Email me
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={links.cv}
                className="btn-ghost group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden />
                Download CV
              </a>
            </motion.div>

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
              <li>
                <a
                  href={links.phone}
                  className="link-underline inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="h-3.5 w-3.5" aria-hidden />
                  {profile.phone}
                </a>
              </li>
            </motion.ul>
          </div>

          {/* ---------- Right: profile-as-code window + glance tiles ---------- */}
          <div className="relative min-w-0">
            <motion.div
              variants={item}
              className="card-glow glass relative overflow-hidden rounded-2xl p-0 shadow-[0_40px_80px_-40px_oklch(0_0_0/0.6)] transition-transform duration-500 hover:-translate-y-1"
            >
              {/* Window chrome */}
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.19_25)]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.82_0.16_85)]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
                </div>
                <span className="font-mono text-[11px] tracking-wide text-muted-foreground">
                  shekar.ts
                </span>
                <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_2px_var(--primary)]" />
              </div>
              {/* Code body */}
              <pre className="overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-[1.7] sm:text-[13px]">
                <code>
                  {code.map((line, i) => (
                    <span key={i} className="flex">
                      <span
                        aria-hidden
                        className="mr-4 w-5 shrink-0 select-none text-right text-muted-foreground/40"
                      >
                        {i + 1}
                      </span>
                      <span className="whitespace-pre">
                        {line.map((tok, j) => (
                          <span key={j} className={tok.c ? tokenClass[tok.c] : "text-foreground"}>
                            {tok.t}
                          </span>
                        ))}
                      </span>
                    </span>
                  ))}
                </code>
              </pre>
            </motion.div>

            {/* Glance tiles */}
            <motion.ul
              variants={item}
              className="mt-4 grid grid-cols-2 gap-3"
            >
              {glance.map((g) => {
                const Icon = glanceIcons[g.icon];
                return (
                  <li
                    key={g.label}
                    className="glass group flex items-start gap-3 rounded-xl p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"
                  >
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold tracking-tight text-foreground">
                        {g.label}
                      </div>
                      <div className="mt-0.5 text-[11.5px] leading-snug text-muted-foreground">
                        {g.value}
                      </div>
                    </div>
                  </li>
                );
              })}
            </motion.ul>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.a
          variants={item}
          initial="hidden"
          animate="show"
          href="#impact"
          aria-label="Scroll to impact"
          className="scroll-cue mx-auto mt-16 hidden h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground lg:flex"
        >
          <ChevronDown className="h-4 w-4" aria-hidden />
        </motion.a>
      </div>
    </section>
  );
}
