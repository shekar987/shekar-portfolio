"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  type Variants,
} from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Layers,
  Boxes,
  Rocket,
  Zap,
  Cpu,
  Sparkles,
  Code2,
  Server,
  Cloud,
  Brain,
  Database,
  GitBranch,
  Terminal,
  Gauge,
  Globe,
  Workflow,
  ShieldCheck,
  CircuitBoard,
  Building2,
  Briefcase,
  Menu,
  X,
  Star,
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  Palette,
} from "lucide-react";

/* ----------------------------------------------------------------
   Shared animation helpers
----------------------------------------------------------------- */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ----------------------------------------------------------------
   Content data
----------------------------------------------------------------- */
const NAV_LINKS = [
  { label: "Highlights", href: "#highlights" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
];

const EXPERIENCE = [
  {
    role: "Principal Product Engineer",
    company: "Nebula Labs",
    period: "2022 — Present",
    location: "Remote · EU",
    icon: Building2,
    accent: "from-indigo-500 to-violet-600",
    summary:
      "Owned the architecture that took Nebula from a fragile monolith to a resilient, multi-region platform — without dropping a single release cadence.",
    metrics: [
      { icon: Users, value: "4.2M", label: "Monthly active users" },
      { icon: Gauge, value: "99.98%", label: "Platform uptime" },
      { icon: TrendingUp, value: "7×", label: "Throughput scaling" },
    ],
    tags: ["Distributed Systems", "Kubernetes", "Event-Driven"],
  },
  {
    role: "Founder & Engineer",
    company: "Driftwood (Bootstrapped SaaS)",
    period: "2020 — 2022",
    location: "London, UK",
    icon: Rocket,
    accent: "from-violet-500 to-fuchsia-600",
    summary:
      "Solo-founded a developer-tooling SaaS. Designed, built, shipped, marketed and supported — end to end. Profitable within 9 months.",
    metrics: [
      { icon: DollarSign, value: "$1.2M", label: "ARR at exit" },
      { icon: Users, value: "8,400", label: "Paying teams" },
      { icon: Activity, value: "4.7/5", label: "Product rating" },
    ],
    tags: ["0→1", "SaaS", "Go-to-Market"],
  },
  {
    role: "Lead Backend Engineer",
    company: "Cobalt Systems",
    period: "2018 — 2020",
    location: "Berlin, DE",
    icon: Server,
    accent: "from-sky-500 to-indigo-600",
    summary:
      "Re-architected the core billing & data pipeline. Replaced a leaky queue system and introduced event sourcing that paid for itself in a quarter.",
    metrics: [
      { icon: DollarSign, value: "−60%", label: "Infra cost" },
      { icon: Zap, value: "12×", label: "Faster pipelines" },
      { icon: ShieldCheck, value: "0", label: "Billing incidents / yr" },
    ],
    tags: ["Event Sourcing", "PostgreSQL", "Cost Eng"],
  },
  {
    role: "Founding Engineer",
    company: "Lumen (Seed → Series A)",
    period: "2016 — 2018",
    location: "Remote",
    icon: CircuitBoard,
    accent: "from-emerald-500 to-teal-600",
    summary:
      "Employee #1. Built the MVP, the auth system, the realtime layer and the first mobile client. Helped raise the round with a working product.",
    metrics: [
      { icon: Users, value: "200K", label: "Users in 6 months" },
      { icon: Rocket, value: "0→1", label: "Product launch" },
      { icon: Star, value: "Top 5", label: "Product Hunt debut" },
    ],
    tags: ["MVP", "Realtime", "Mobile"],
  },
];

const PROJECTS = [
  {
    name: "Helios",
    tagline: "AI workflow orchestration",
    description:
      "A visual orchestrator for multi-agent AI workflows. Compose, debug and ship reliable pipelines with built-in evals and observability.",
    badges: ["AI", "Orchestration", "TypeScript"],
    icon: Workflow,
    accent: "from-indigo-500/20 to-violet-600/10",
    metric: "10K+ workflows / day",
  },
  {
    name: "Quartz",
    tagline: "Real-time analytics engine",
    description:
      "Sub-second analytics over billions of events. A columnar query layer with materialised views and live streaming aggregates.",
    badges: ["Data", "Rust", "Streaming"],
    icon: Activity,
    accent: "from-sky-500/20 to-indigo-600/10",
    metric: "<400ms p99 queries",
  },
  {
    name: "Forge",
    tagline: "Design system & component library",
    description:
      "A headless, accessible component system powering 14 internal products. Theme-aware, fully typed, tree-shakeable.",
    badges: ["Design Sys", "React", "a11y"],
    icon: Palette,
    accent: "from-fuchsia-500/20 to-pink-600/10",
    metric: "14 products shipped",
  },
  {
    name: "Atlas",
    tagline: "Multi-tenant infrastructure platform",
    description:
      "Self-serve infra for product teams. Spin up isolated, observable environments with one command — from DB to edge cache.",
    badges: ["Infra", "Kubernetes", "DX"],
    icon: Boxes,
    accent: "from-emerald-500/20 to-teal-600/10",
    metric: "120+ deploys / week",
  },
  {
    name: "Pulse",
    tagline: "Developer observability",
    description:
      "Drop-in observability that traces requests across services, queues and LLM calls. One dashboard for the whole delivery surface.",
    badges: ["Observability", "OTel", "LLM"],
    icon: Gauge,
    accent: "from-amber-500/20 to-orange-600/10",
    metric: "8 services, 1 view",
  },
  {
    name: "Loom",
    tagline: "Async collaboration",
    description:
      "Async-first collaboration for distributed teams. Threads, video snippets and decisions that survive timezones and turnover.",
    badges: ["Collab", "Realtime", "Mobile"],
    icon: Layers,
    accent: "from-violet-500/20 to-purple-600/10",
    metric: "30K+ teams onboarded",
  },
];

const SKILL_GROUPS = [
  {
    title: "Core Architecture",
    icon: Cpu,
    skills: [
      "Distributed Systems",
      "System Design",
      "Event-Driven Arch",
      "Microservices",
      "Domain-Driven Design",
      "CQRS / Event Sourcing",
      "High Availability",
      "Caching Strategies",
    ],
  },
  {
    title: "Languages",
    icon: Code2,
    skills: [
      "TypeScript",
      "Go",
      "Rust",
      "Python",
      "SQL",
      "Swift",
      "Bash",
    ],
  },
  {
    title: "Frontend",
    icon: Palette,
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
      "Zustand",
      "TanStack Query",
    ],
  },
  {
    title: "Backend & Data",
    icon: Database,
    skills: [
      "Node.js",
      "PostgreSQL",
      "Redis",
      "gRPC",
      "Kafka",
      "ClickHouse",
      "Prisma",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS",
      "Kubernetes",
      "Docker",
      "Terraform",
      "GitHub Actions",
      "Grafana / Prometheus",
    ],
  },
  {
    title: "AI & Product",
    icon: Brain,
    skills: [
      "LLM Apps",
      "RAG Pipelines",
      "Vector DBs",
      "Evals & Guardrails",
      "Product Strategy",
      "0→1 Delivery",
    ],
  },
];

const SOCIALS = [
  { label: "GitHub", icon: Github, href: "#", handle: "@ariavance" },
  { label: "LinkedIn", icon: Linkedin, href: "#", handle: "/in/ariavance" },
  { label: "X / Twitter", icon: Twitter, href: "#", handle: "@ariavance" },
  { label: "Email", icon: Mail, href: "#", handle: "aria@vance.dev" },
];

/* ----------------------------------------------------------------
   Sections
----------------------------------------------------------------- */

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60] bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500"
    />
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
        <nav
          aria-label="Primary"
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-5 h-14 transition-all duration-300 ${
            scrolled
              ? "glass shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]"
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* Logo */}
          <a
            href="#top"
            className="flex items-center gap-2.5 group"
            aria-label="Aria Vance — home"
          >
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white font-bold text-sm shadow-lg shadow-violet-600/30">
              A
              <span className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
            </span>
            <span className="font-semibold tracking-tight text-foreground">
              Aria<span className="text-muted-foreground"> Vance</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3.5 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40 hover:brightness-110 transition-all"
            >
              Get in touch
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass rounded-2xl p-3 flex flex-col gap-1"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-2.5 text-sm font-medium text-white"
            >
              Get in touch
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div
        className="glow-orb bg-indigo-600 w-[480px] h-[480px] -top-20 -left-32 animate-float-slow"
        aria-hidden
      />
      <div
        className="glow-orb bg-violet-600 w-[520px] h-[520px] top-40 -right-32 animate-float-slower"
        aria-hidden
      />
      <div
        className="glow-orb bg-fuchsia-600 w-[320px] h-[320px] bottom-0 left-1/3 opacity-30"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs sm:text-sm text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new builds · Q3 onward
            <Sparkles className="h-3.5 w-3.5 text-violet-400" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="mt-6 text-4xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-semibold tracking-tight leading-[1.02] text-balance"
          >
            I turn ambitious ideas
            <br className="hidden sm:block" /> into{" "}
            <span className="text-gradient">shipped products</span>
            <br className="hidden sm:block" /> —{" "}
            <span className="text-muted-foreground">many of them, at scale.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            I&apos;m a product-minded engineer who takes ideas from zero to one
            and scales them to one to infinity. I build the resilient systems,
            the developer platforms, and the AI-native products that let
            builders build more — faster, and without the ceiling.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3.5 text-sm font-medium text-white shadow-xl shadow-violet-600/30 hover:shadow-violet-600/50 hover:brightness-110 transition-all"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="group inline-flex items-center justify-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-medium text-foreground hover:bg-white/10 transition-all"
            >
              View selected work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            variants={fadeUp}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl glass max-w-2xl"
          >
            {[
              { v: "12+", l: "Products shipped" },
              { v: "4.2M", l: "Users reached" },
              { v: "9 yrs", l: "Building at scale" },
              { v: "$1.2M", l: "ARR bootstrapped" },
            ].map((s) => (
              <div key={s.l} className="px-4 py-4 sm:py-5 bg-white/[0.02]">
                <div className="text-xl sm:text-2xl font-semibold tracking-tight">
                  {s.v}
                </div>
                <div className="mt-0.5 text-[11px] sm:text-xs text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="relative h-9 w-5 rounded-full border border-white/15 flex justify-center pt-1.5">
          <span className="block h-1.5 w-1.5 rounded-full bg-violet-400 animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
}

function BentoGrid() {
  return (
    <section
      id="highlights"
      className="relative py-24 sm:py-32"
      aria-labelledby="highlights-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-violet-400 font-medium">
            The highlights
          </p>
          <h2
            id="highlights-heading"
            className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-balance"
          >
            Built for scale, tuned for{" "}
            <span className="text-gradient">many things at once.</span>
          </h2>
        </Reveal>

        {/* Bento grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {/* Card 1 — large feature */}
          <Reveal className="md:col-span-2 lg:row-span-2 group">
            <article className="relative h-full overflow-hidden rounded-3xl glass p-7 sm:p-9 min-h-[280px] flex flex-col justify-between">
              <div className="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-violet-600/20 blur-3xl group-hover:bg-violet-600/30 transition-colors" />
              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-violet-600/30">
                  <Rocket className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-2xl sm:text-3xl font-semibold tracking-tight">
                  12+ products, one operating system for shipping
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-xl">
                  From solo bootstrapped SaaS to platforms serving millions, I
                  reuse a battle-tested backbone — auth, billing, observability,
                  infra — so every new product starts at week six, not week one.
                </p>
              </div>
              <div className="relative mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                <span className="inline-flex items-center gap-2 text-muted-foreground">
                  <Layers className="h-4 w-4 text-violet-400" /> Web · AI · Infra
                </span>
                <span className="inline-flex items-center gap-2 text-muted-foreground">
                  <GitBranch className="h-4 w-4 text-violet-400" /> 0→1 and 1→∞
                </span>
                <span className="inline-flex items-center gap-2 text-muted-foreground">
                  <Globe className="h-4 w-4 text-violet-400" /> Multi-region
                </span>
              </div>
            </article>
          </Reveal>

          {/* Card 2 — metrics */}
          <Reveal delay={0.05}>
            <article className="group h-full rounded-3xl glass p-7 min-h-[200px] flex flex-col justify-between hover:bg-white/[0.06] transition-colors">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-violet-300 ring-1 ring-white/10">
                <Gauge className="h-5 w-5" />
              </div>
              <div>
                <div className="text-4xl font-semibold tracking-tight text-gradient">
                  99.98%
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Uptime maintained across platforms handling 4M+ users —
                  reliability is a feature, not an afterthought.
                </p>
              </div>
            </article>
          </Reveal>

          {/* Card 3 — current focus */}
          <Reveal delay={0.1}>
            <article className="group h-full rounded-3xl glass p-7 min-h-[200px] flex flex-col justify-between hover:bg-white/[0.06] transition-colors">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-fuchsia-300 ring-1 ring-white/10">
                <Brain className="h-5 w-5" />
              </div>
              <div>
                <div className="text-lg font-semibold">Current focus</div>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  AI-native systems — agentic workflows, evals, and the
                  infra that makes LLM apps production-grade.
                </p>
              </div>
            </article>
          </Reveal>

          {/* Card 4 — tech stack */}
          <Reveal delay={0.15} className="md:col-span-2">
            <article className="group h-full rounded-3xl glass p-7 hover:bg-white/[0.06] transition-colors">
              <div className="flex items-center justify-between">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-indigo-300 ring-1 ring-white/10">
                  <CircuitBoard className="h-5 w-5" />
                </div>
                <span className="text-xs text-muted-foreground">
                  Polyglot by necessity
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold">Tech stack, distilled</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "TypeScript",
                  "Go",
                  "Rust",
                  "Next.js",
                  "PostgreSQL",
                  "Kubernetes",
                  "Kafka",
                  "ClickHouse",
                  "OpenTelemetry",
                  "Terraform",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/90 hover:border-violet-400/40 hover:text-white transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ExperienceMatrix() {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-violet-400 font-medium">
            Experience matrix
          </p>
          <h2
            id="experience-heading"
            className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-balance"
          >
            Milestones, measured in{" "}
            <span className="text-gradient">impact.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Selected roles where the work compounded. Every entry is anchored to
            a metric, not a responsibility list.
          </p>
        </Reveal>

        <div className="mt-14 relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/60 via-white/10 to-transparent"
            aria-hidden
          />

          <div className="space-y-6 lg:space-y-8">
            {EXPERIENCE.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <Reveal key={exp.company} delay={i * 0.05}>
                  <article className="relative pl-14 sm:pl-20">
                    {/* Node */}
                    <div className="absolute left-0 top-1.5">
                      <div
                        className={`relative inline-flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${exp.accent} text-white shadow-lg ring-4 ring-background`}
                      >
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                    </div>

                    <div className="group rounded-2xl glass p-5 sm:p-7 hover:bg-white/[0.06] transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold tracking-tight">
                            {exp.role}
                          </h3>
                          <div className="mt-0.5 text-sm text-violet-300">
                            {exp.company}
                          </div>
                        </div>
                        <div className="text-xs sm:text-sm text-muted-foreground sm:text-right shrink-0">
                          <div className="inline-flex items-center gap-1.5">
                            <Briefcase className="h-3.5 w-3.5" />
                            {exp.period}
                          </div>
                          <div className="mt-1 sm:block">{exp.location}</div>
                        </div>
                      </div>

                      <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {exp.summary}
                      </p>

                      {/* Metrics */}
                      <div className="mt-5 grid grid-cols-3 gap-3">
                        {exp.metrics.map((m) => {
                          const MIcon = m.icon;
                          return (
                            <div
                              key={m.label}
                              className="rounded-xl bg-white/[0.03] border border-white/5 p-3 sm:p-4"
                            >
                              <MIcon className="h-4 w-4 text-violet-300" />
                              <div className="mt-2 text-base sm:text-lg font-semibold tracking-tight">
                                {m.value}
                              </div>
                              <div className="text-[10px] sm:text-xs text-muted-foreground leading-tight mt-0.5">
                                {m.label}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Tags */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {exp.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectShowcase() {
  return (
    <section
      id="work"
      className="relative py-24 sm:py-32"
      aria-labelledby="work-heading"
    >
      <div
        className="glow-orb bg-indigo-600 w-[420px] h-[420px] top-1/4 -left-32 opacity-25"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-violet-400 font-medium">
            Selected work
          </p>
          <h2
            id="work-heading"
            className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-balance"
          >
            Products, platforms, and{" "}
            <span className="text-gradient">infrastructure.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A few of the things I&apos;ve designed, built, and shipped. Each one
            a small bet that paid for the next.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {PROJECTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.name} delay={(i % 3) * 0.05}>
                <a
                  href="#"
                  className={`group relative block h-full overflow-hidden rounded-3xl glass p-6 sm:p-7 hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1`}
                >
                  <div
                    className={`absolute -top-20 -right-16 h-48 w-48 rounded-full bg-gradient-to-br ${p.accent} blur-2xl opacity-60 group-hover:opacity-100 transition-opacity`}
                    aria-hidden
                  />
                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 text-foreground">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground group-hover:text-white group-hover:border-violet-400/40 transition-colors">
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-semibold tracking-tight">
                      {p.name}
                    </h3>
                    <p className="text-sm text-violet-300">{p.tagline}</p>

                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {p.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {p.badges.map((b) => (
                        <span
                          key={b}
                          className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted-foreground"
                        >
                          {b}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 pt-5 border-t border-white/5 flex items-center gap-2 text-xs text-muted-foreground">
                      <Gauge className="h-3.5 w-3.5 text-violet-300" />
                      {p.metric}
                    </div>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SkillsCloud() {
  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-violet-400 font-medium">
            Skills & expertise
          </p>
          <h2
            id="skills-heading"
            className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-balance"
          >
            A toolkit wide enough to{" "}
            <span className="text-gradient">build anything.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Grouped by domain — depth where it matters, breadth so nothing
            falls through the cracks when scope expands.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {SKILL_GROUPS.map((group, i) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.title} delay={(i % 3) * 0.05}>
                <article className="h-full rounded-3xl glass p-6 sm:p-7 hover:bg-white/[0.06] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-600/10 ring-1 ring-white/10 text-violet-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold tracking-tight">
                      {group.title}
                    </h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-foreground/90 hover:border-violet-400/40 hover:bg-white/[0.07] hover:text-white transition-colors cursor-default"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactFooter() {
  return (
    <footer
      id="contact"
      className="relative mt-10 pt-24 sm:pt-32 pb-10 overflow-hidden"
    >
      <div
        className="glow-orb bg-violet-600 w-[600px] h-[600px] -top-40 left-1/2 -translate-x-1/2 opacity-30"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CTA card */}
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] glass p-8 sm:p-12 lg:p-16">
            <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-violet-400 font-medium">
                  Let&apos;s build
                </p>
                <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-balance">
                  Got an ambitious idea?{" "}
                  <span className="text-gradient">Let&apos;s ship it.</span>
                </h2>
                <p className="mt-4 text-muted-foreground max-w-lg">
                  I partner with founders and teams on the parts that matter —
                  architecture, 0→1 delivery, and scaling without ceilings.
                  Two slots open this quarter.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:aria@vance.dev"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3.5 text-sm font-medium text-white shadow-xl shadow-violet-600/30 hover:shadow-violet-600/50 hover:brightness-110 transition-all"
                  >
                    <Mail className="h-4 w-4" />
                    aria@vance.dev
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href="#work"
                    className="inline-flex items-center justify-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-medium text-foreground hover:bg-white/10 transition-all"
                  >
                    <Terminal className="h-4 w-4" />
                    See the work
                  </a>
                </div>
              </div>

              {/* Social channels */}
              <div className="grid grid-cols-2 gap-3">
                {SOCIALS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      className="group rounded-2xl glass p-4 sm:p-5 hover:bg-white/[0.08] transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <Icon className="h-5 w-5 text-violet-300" />
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-white transition-colors" />
                      </div>
                      <div className="mt-3 text-sm font-medium">{s.label}</div>
                      <div className="text-xs text-muted-foreground">
                        {s.handle}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-8">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white font-bold text-xs">
              A
            </span>
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Aria Vance. Designed & built from
              scratch.
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              All systems operational
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Built to scale 🚀</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------------------------------------------------
   Page
----------------------------------------------------------------- */
export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col bg-background">
      <ScrollProgress />
      <Nav />
      <Hero />
      <BentoGrid />
      <ExperienceMatrix />
      <ProjectShowcase />
      <SkillsCloud />
      <div className="mt-auto">
        <ContactFooter />
      </div>
    </main>
  );
}
