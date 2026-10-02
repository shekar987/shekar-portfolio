/**
 * Single source of truth for all portfolio content.
 * Typed so the compiler guards against drift.
 *
 * Updated Sep 2026 from "SHEKAR KEESARI RESUME.pdf" (kept in upload/; the
 * PDF is intentionally not published or linked from the site).
 * Every figure here appears in that CV — nothing is inflated or invented.
 * The AI Financial Analysis System (FinSight) is retained on the site per an
 * earlier explicit request even though it is not on the current CV.
 */

export type Link = {
  label: string;
  href: string;
  external?: boolean;
};

export const profile = {
  name: "Soma Shekar Keesari",
  firstName: "Shekar",
  initials: "SK",
  role: "Full-Stack Engineer · AI Engineer",
  location: "London, UK",
  status: "Immediately available",
  yearsExperience: "2+",
  rightToWork:
    "Eligible for full-time work in the UK · Immediately available · No sponsorship required",
  email: "somashekarkeesari18@gmail.com",
  phone: "+44 7553 449836",
  phoneHref: "tel:+447553449836",
} as const;

export const links = {
  email: `mailto:${profile.email}`,
  phone: profile.phoneHref,
  linkedin: "https://www.linkedin.com/in/shekar-keesari-4bbaa6234/",
  github: "https://github.com/shekar987",
  site: "https://shekar-portfolio-eight.vercel.app",
} as const;

export const navLinks: Link[] = [
  { label: "Impact", href: "#impact" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export type HeroHeadline = {
  prefix: string;
  accent: string;
  suffix: string;
};

export const hero = {
  eyebrow: "AWS Certified AI & Cloud Practitioner",
  headline: {
    prefix: "Full-stack AI engineer building",
    accent: "agentic & generative",
    suffix: "products.",
  } satisfies HeroHeadline,
  subtitle:
    "2+ years shipping production Python / FastAPI and React systems at Brane Group — 20+ API modules, JWT/RBAC-secured enterprise workflows and LLM/RAG knowledge retrieval. Now designing, building and shipping end-to-end AI products solo alongside an AWS-accredited MSc at the University of East London.",
} as const;

export type GlanceIcon = "briefcase" | "badge" | "graduation" | "rocket";

/** Facts shown in the hero profile card. Real, CV-backed numbers only. */
export const glance: { label: string; value: string; icon: GlanceIcon }[] = [
  { label: "2+ years", value: "Full Stack Engineer · Brane Group", icon: "briefcase" },
  { label: "AWS Certified ×2", value: "AI Practitioner · Cloud Practitioner", icon: "badge" },
  { label: "MSc Computer Science", value: "University of East London · AssetGuard+", icon: "graduation" },
  { label: "4 products shipped", value: "Jobhuntz · CampaignPulse · RideX · FinSight", icon: "rocket" },
];

/** Technologies for the scrolling ticker under the hero. All from the CV. */
export const techTicker: string[] = [
  "Python",
  "FastAPI",
  "React",
  "TypeScript",
  "Next.js",
  "PostgreSQL",
  "Redis",
  "MongoDB",
  "Supabase",
  "GraphQL",
  "AWS Lambda · SQS · SNS",
  "Terraform",
  "Docker",
  "Anthropic Claude API",
  "OpenAI API",
  "LangChain",
  "LlamaIndex",
  "RAG",
  "JWT / OAuth 2.0",
  "Stripe",
  "Firebase",
];

export type BentoStat = {
  /** Numeric part, animated with a count-up. */
  number: number;
  prefix?: string;
  suffix?: string;
  label: string;
  context: string;
  icon: "layers" | "zap" | "database" | "sparkles" | "layout";
  accent: "emerald" | "teal" | "cyan" | "violet" | "amber";
  /** Column span on large screens (6-column bento). */
  span: 2 | 3;
};

export const bentoStats: BentoStat[] = [
  {
    number: 20,
    suffix: "+",
    label: "Production API modules",
    context:
      "Engineered and delivered with Python, FastAPI, React and TypeScript across the full software development lifecycle at Brane Group.",
    icon: "layers",
    accent: "emerald",
    span: 3,
  },
  {
    number: 25,
    suffix: "%",
    label: "Faster API response times",
    context:
      "Service-layer optimisation and more efficient request processing on JWT/RBAC-secured FastAPI services.",
    icon: "zap",
    accent: "teal",
    span: 3,
  },
  {
    number: 30,
    prefix: "~",
    suffix: "%",
    label: "Faster frequent queries",
    context:
      "Indexing, query optimisation and caching across PostgreSQL, MySQL, MongoDB and Redis.",
    icon: "database",
    accent: "cyan",
    span: 2,
  },
  {
    number: 25,
    suffix: "%",
    label: "Less manual documentation",
    context:
      "LLM/RAG knowledge solutions automating business-document generation across supported workflows.",
    icon: "sparkles",
    accent: "violet",
    span: 2,
  },
  {
    number: 20,
    suffix: "%",
    label: "Less repeat frontend effort",
    context:
      "Reusable React + TypeScript component patterns across 3+ core enterprise workflow areas.",
    icon: "layout",
    accent: "amber",
    span: 2,
  },
];

export type Project = {
  name: string;
  year: string;
  tagline: string;
  stack: string[];
  /** One-paragraph framing of the product and my ownership. */
  summary: string;
  /** Sharp, CV-backed technical bullets. */
  highlights: string[];
  role: string;
  featured?: boolean;
  /** Small stat chips rendered under the title. */
  badges?: string[];
  /** Optional linear pipeline to visualise (featured card only). */
  pipeline?: string[];
  /** Labels around the pipeline visual: title, badge, connector notes, footer stats. */
  pipelineMeta?: {
    title: string;
    badge?: string;
    notes: string[];
    stats: [string, string][];
  };
  live?: { label: string; href: string };
  code: { label: string; href: string };
};

export const projects: Project[] = [
  {
    name: "Jobhuntz",
    year: "2026",
    tagline: "Full-stack AI application — an end-to-end LLM product",
    stack: [
      "Next.js 16",
      "TypeScript",
      "Supabase · Postgres · Auth · RLS",
      "Anthropic Claude API",
      "Vercel",
    ],
    summary:
      "An end-to-end LLM product combining full-stack engineering with applied AI — multi-step prompt orchestration, provider abstraction and production-grade auth and security — designed, built and shipped solo.",
    highlights: [
      "Architected an 8-step LLM pipeline (JD analysis → tailored CV + cover letter → ATS scoring) with structured JSON contracts between steps and per-step integrity checks that trace every output claim to source, preventing model fabrication.",
      "Engineered a provider-agnostic routing layer across 3 LLM providers with a tiered access system (free-tier quota → user-supplied keys), enforced server-side via Postgres SECURITY DEFINER functions and column-level grants.",
      "Secured multi-tenant data with Supabase Auth (3 OAuth methods), row-level security and AES-256-GCM encryption for user-supplied credentials.",
      "Ran a full pre-launch security audit and remediated 8 findings across BLOCKER / SERIOUS / MINOR severities before going live.",
    ],
    role: "Solo build — architecture, full-stack, AI pipeline, security audit and deployment.",
    featured: true,
    badges: ["8-step LLM pipeline", "3 LLM providers", "8 security findings fixed"],
    pipeline: ["Job description", "JD analysis", "Tailored CV + cover letter", "ATS scoring"],
    pipelineMeta: {
      title: "LLM pipeline",
      badge: "8 steps",
      notes: ["Structured JSON contract", "Per-step integrity check", "Every claim traced to source"],
      stats: [
        ["3", "LLM providers"],
        ["RLS", "Multi-tenant"],
        ["AES-256", "Key encryption"],
      ],
    },
    live: { label: "jobhuntz.app", href: "https://www.jobhuntz.app/" },
    code: { label: "GitHub", href: "https://github.com/shekar987/cv-tailor" },
  },
  {
    name: "CampaignPulse",
    year: "2026",
    tagline: "Event-driven campaign delivery reliability platform",
    stack: [
      "React 19",
      "TypeScript",
      "React Query",
      "Tailwind CSS · CSS Modules · Design tokens",
      "Node.js",
      "GraphQL",
      "PostgreSQL",
      "AWS Lambda · SQS · SNS · CloudWatch",
      "Terraform",
    ],
    summary:
      "A full-stack TypeScript platform that monitors campaign delivery across four channels — React frontend, GraphQL APIs, backend services and event-processing workers — with automated incident detection, retries and a dead-letter queue on AWS.",
    highlights: [
      "Designed and built a full-stack TypeScript application across a React frontend, GraphQL APIs, backend services and event-processing workers, monitoring campaign delivery across four channels.",
      "Built reusable React components and application routes using React Hooks, TanStack React Query, Tailwind CSS, CSS Modules and a generated design-token system, with responsive and accessible loading, error and no-data states.",
      "Implemented an event-driven delivery pipeline using AWS Lambda and SQS, with idempotent processing, exponential-backoff retries and dead-letter queue handling for failed messages.",
      "Developed automated incident detection and operational monitoring using SNS notifications, CloudWatch logs, metrics, alarms and dashboards, supporting investigation through correlation-ID event timelines.",
      "Built PostgreSQL-backed services with race-safe state transitions and duplicate-event protection, supported by 192 unit/integration tests and 16 Playwright E2E tests.",
      "Provisioned AWS infrastructure using Terraform and implemented automated quality checks using GitHub Actions CI/CD, including accessibility testing with axe.",
    ],
    role: "Solo build — architecture, frontend, GraphQL API, event workers, AWS infrastructure and CI/CD.",
    featured: true,
    badges: ["192 unit / integration tests", "16 Playwright E2E tests", "4 delivery channels"],
    pipeline: ["Delivery event", "SQS queue", "Lambda worker", "PostgreSQL state", "Incident + SNS alert"],
    pipelineMeta: {
      title: "Delivery pipeline",
      badge: "Event-driven",
      notes: [
        "Correlation-ID timeline",
        "Idempotent processing",
        "Exponential-backoff retries",
        "Dead-letter queue on failure",
      ],
      stats: [
        ["4", "Channels"],
        ["DLQ", "Failed messages"],
        ["Terraform", "Infra as code"],
      ],
    },
    live: { label: "CampaignPulse demo", href: "https://d2tg6k6wy891qy.cloudfront.net/" },
    code: { label: "GitHub", href: "https://github.com/shekar987/CampaignPulse" },
  },
  {
    name: "RideX",
    year: "2025",
    tagline: "Full-stack ride-hailing platform — a three-portal marketplace",
    stack: ["React 19", "Firebase", "Stripe", "Mapbox", "Vercel"],
    summary:
      "A production-grade, three-portal marketplace (customer, driver, admin) shipped end-to-end — owning UI, secure REST APIs, cloud data modelling, payment infrastructure and DevOps as a solo engineer.",
    highlights: [
      "Engineered 8 serverless REST APIs (Node.js / Cloud Functions) with JWT verification, rate limiting (100 req / 15 min) and idempotent Stripe processing — automating an 80/20 commission split with penny-accurate, double-charge-proof payments and 3-D Secure (SCA) compliance.",
      "Built real-time ride dispatch with Firestore listeners and ACID transactions — sub-second GPS/status sync, zero double-bookings under concurrent driver acceptance and 15s offer timers.",
      "Delivered the full 3-portal system in under 12 weeks by pairing full-stack ownership with AI-augmented engineering (Claude Code, prompt-engineered agentic workflows) and automated GitHub → Vercel CI/CD.",
    ],
    role: "Solo build — architecture, full-stack, payments, real-time dispatch, testing and deployment.",
    badges: ["90+ automated tests", "8 serverless APIs", "Shipped in < 12 weeks"],
    live: { label: "uber-demo-omega.vercel.app", href: "https://uber-demo-omega.vercel.app/" },
    code: { label: "GitHub", href: "https://github.com/shekar987/RideX-app" },
  },
  {
    name: "FinSight",
    year: "2025",
    tagline: "Natural-language analysis of SEC 10-K filings — without hallucinated numbers",
    stack: ["Python", "Anthropic Claude API", "pandas"],
    summary:
      "Makes multi-year SEC 10-K filings (Microsoft, Tesla, Apple) queryable in natural language without hallucinated figures — the failure mode of naive LLM finance apps.",
    highlights: [
      "Python ETL pipeline parses 10-K filings into structured datasets covering revenue, margins and operational metrics across years.",
      "Claude API integrated with iteratively-tuned prompts that ground every answer in the parsed data layer rather than raw model recall.",
      "Answers growth, margin and performance questions across multi-year filings — sourced, not generated.",
    ],
    role: "Solo build — ETL, prompt engineering and Claude integration.",
    badges: ["3 companies", "Multi-year 10-K data"],
    code: {
      label: "GitHub",
      href: "https://github.com/shekar987/finsight-financial-chatbot",
    },
  },
];

export type ExperienceBullet = {
  text: string;
  metric?: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  type: string;
  stack: string[];
  highlight?: string;
  bullets: ExperienceBullet[];
};

export const experiences: Experience[] = [
  {
    role: "Full Stack Engineer",
    company: "Brane Group",
    period: "Jul 2022 – Sep 2024",
    type: "Full-time · 2 years",
    stack: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "REST APIs",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "JWT / RBAC",
      "LLM / RAG",
    ],
    highlight:
      "20+ production API modules shipped; API response times cut ~25% and frequently accessed queries ~30% on secure enterprise workflows.",
    bullets: [
      {
        text: "Engineered and delivered enterprise web applications and backend services using Python, FastAPI, React, TypeScript and REST APIs across the full software development lifecycle.",
        metric: "20+ API modules",
      },
      {
        text: "Designed and maintained secure Python/FastAPI backend services for enterprise workflows — JWT authentication, RBAC, request validation and structured error handling — improving typical API response times through service-layer optimisation and more efficient request processing.",
        metric: "−25% latency",
      },
      {
        text: "Built responsive, component-based React + TypeScript applications — dashboards, forms and workflow-driven interfaces for 3+ core enterprise workflow areas — with reusable component patterns.",
        metric: "−20% frontend effort",
      },
      {
        text: "Designed and optimised data-driven functionality on PostgreSQL, MySQL, MongoDB and Redis with indexing, query optimisation and caching; contributed to the FRMS platform supporting 4 resource categories: counters, gates, belts and stands.",
        metric: "−30% query time",
      },
      {
        text: "Developed AI-enabled enterprise services across 2+ solution areas — facial-recognition workflows, then LLM/RAG-based knowledge solutions that automate business-document generation.",
        metric: "−25% manual docs",
      },
    ],
  },
  {
    role: "Full Stack Development Intern",
    company: "CodSoft",
    period: "Jan 2022 – Jun 2022",
    type: "Internship · 6 months",
    stack: ["Java", "JDBC", "JavaScript", "HTML5", "CSS3", "Bootstrap 4"],
    bullets: [
      {
        text: "Architected a Student Course Registration System with a layered architecture across entity, service, persistence and presentation layers, with validation rules preventing duplicate enrolments and invalid course-drop operations.",
      },
      {
        text: "Isolated a JDBC persistence layer behind a dedicated DatabaseManager component, separating database access from application and presentation logic.",
      },
      {
        text: "Developed an interactive calculator with JavaScript and CSS Grid — keyboard support and error handling for invalid input.",
      },
      {
        text: "Built 3 multi-section responsive pages with HTML5, CSS3, Bootstrap 4 and Flexbox, using the 12-column grid to keep layouts consistent across mobile, tablet and desktop.",
      },
      {
        text: "Delivered and documented 9 end-to-end projects solo — requirements to submission — across 2 GitHub repositories with structured commits.",
        metric: "100% on time",
      },
    ],
  },
];

export type SkillCategory = {
  title: string;
  description: string;
  icon: "server" | "layout" | "database" | "brain" | "cloud" | "shield";
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend & APIs",
    description: "Production services, REST design and service-oriented architecture.",
    icon: "server",
    skills: ["Python", "FastAPI", "Java", "Node.js", "REST API Design", "GraphQL", "SQLAlchemy", "Microservices", "Event-Driven Architecture"],
  },
  {
    title: "Frontend",
    description: "Component-based, typed, accessible interfaces that ship.",
    icon: "layout",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "React Query", "Tailwind CSS", "Design Tokens", "Playwright", "Accessibility (axe)"],
  },
  {
    title: "Data & Storage",
    description: "Schema design, indexing, caching and query optimisation.",
    icon: "database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Firebase / Firestore"],
  },
  {
    title: "AI & LLM Engineering",
    description: "Where I go deeper than the average full-stack engineer.",
    icon: "brain",
    skills: [
      "Anthropic Claude API",
      "OpenAI API",
      "LangChain",
      "LlamaIndex",
      "RAG & Knowledge Retrieval",
      "LLM Orchestration",
      "Prompt Engineering",
      "Workflow Automation",
    ],
  },
  {
    title: "Cloud & DevOps",
    description: "Shipping, automating and running software in production.",
    icon: "cloud",
    skills: ["AWS (Certified ×2)", "AWS Lambda · SQS · SNS", "CloudWatch", "Terraform", "Docker", "GitHub Actions CI/CD", "Vercel", "Git · GitHub · GitLab", "Production Debugging"],
  },
  {
    title: "Security & Auth",
    description: "Multi-tenant data protection and hardened access control.",
    icon: "shield",
    skills: ["JWT", "OAuth 2.0", "RBAC", "Row-Level Security", "AES-256-GCM", "Rate Limiting", "Stripe · 3-D Secure"],
  },
];

export type Education = {
  degree: string;
  institution: string;
  period: string;
  note: string;
  highlights?: string[];
};

export const education: Education[] = [
  {
    degree: "MSc Computer Science",
    institution: "University of East London",
    period: "Jan 2025 – Jan 2027",
    note: "AWS-accredited programme focused on Software Engineering, Cloud Computing and AI applications.",
    highlights: [
      "Research Assistant on AssetGuard+, a university-backed AI cybersecurity startup — evaluated 11 industry asset-management platforms (Axonius, Qualys, Tenable, runZero) using verified user reviews and industry reports, delivering a comparative gap analysis that informs the platform's development priorities.",
      "Selected for the AssetGuard+ Full Stack Development Team, collaborating with the academic technical lead to design and build core features of an AI-powered cyber asset identification platform.",
    ],
  },
  {
    degree: "BSc Computer Science — Distinction",
    institution: "Keshav Memorial Institute of Technology",
    period: "Jul 2019 – Jul 2023",
    note: "Graduated with Distinction. Coursework in Data Structures, OOP, Databases and Software Engineering.",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  short: string;
};

export const certifications: Certification[] = [
  { name: "AWS Certified AI Practitioner", issuer: "Amazon Web Services", short: "AIF" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", short: "CLF" },
];

export const workAuthorisation: string[] = [
  "Eligible for full-time work",
  "Immediately available",
  "No sponsorship required",
];
