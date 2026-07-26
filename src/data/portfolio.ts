/**
 * Single source of truth for all portfolio content.
 * Typed so the compiler guards against drift.
 * Updated from the latest CV (Shekar Keesari Master-CV.pdf).
 * AI Financial Analysis System is retained on the site per explicit request,
 * even though it is not in the latest CV.
 */

export type Link = {
  label: string;
  href: string;
  external?: boolean;
};

export const profile = {
  name: "Soma Shekar Keesari",
  initials: "SK",
  role: "Backend Engineer · Full-Stack & AI",
  location: "London, UK",
  status: "Open to backend / full-stack roles",
  rightToWork:
    "Right to work in the UK during MSc placement · Graduate Route visa eligible January 2027 · No sponsorship required",
  email: "somashekarkeesari18@gmail.com",
} as const;

export const links = {
  email: `mailto:${profile.email}`,
  linkedin: "https://www.linkedin.com/in/shekar-keesari-4bbaa6234/",
  github: "https://github.com/shekar987",
  cv: "/cv.pdf",
} as const;

export const navLinks: Link[] = [
  { label: "Impact", href: "#impact" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

export const hero = {
  headline: "Backend engineer building full-stack & AI products.",
  subtitle:
    "Two years at Brane Group cutting API latency 25% on high-volume Spring Boot services. Now shipping end-to-end AI products — multi-step LLM pipelines, multi-tenant security, provider-agnostic routing — alongside an AWS-accredited MSc at the University of East London.",
} as const;

export type BentoStat = {
  value: string;
  label: string;
  context: string;
  icon: "zap" | "database" | "rocket";
  accent: "emerald" | "teal" | "cyan";
};

export const bentoStats: BentoStat[] = [
  {
    value: "25%",
    label: "Faster API response times",
    context:
      "Refactoring, query optimisation & caching on a high-volume Spring Boot transaction service under production load.",
    icon: "zap",
    accent: "emerald",
  },
  {
    value: "30%",
    label: "Reduced SQL query execution time",
    context:
      "PostgreSQL & MySQL indexing and database tuning for downstream consumers.",
    icon: "database",
    accent: "teal",
  },
  {
    value: "40%",
    label: "Cut in deployment lead time",
    context:
      "CI/CD workflows built in Jenkins & GitHub Actions — lifting engineering velocity and rollback reliability.",
    icon: "rocket",
    accent: "cyan",
  },
];

export type Project = {
  name: string;
  year: string;
  stack: string[];
  tagline: string;
  problem: string;
  approach: string;
  outcome: string;
  role: string;
  featured?: boolean;
  live?: { label: string; href: string };
  code: { label: string; href: string };
};

export const projects: Project[] = [
  {
    name: "CV Tailor",
    year: "2026",
    stack: ["Next.js 16", "TypeScript", "Supabase", "Anthropic Claude API", "Vercel"],
    tagline: "Full-stack AI application — end-to-end LLM product",
    problem:
      "Build an end-to-end LLM product that combines full-stack engineering with applied AI — multi-step prompt orchestration, provider abstraction, and production-grade auth and security — designed, built, and shipped solo.",
    approach:
      "Architected an 8-step LLM pipeline (JD analysis → tailored CV + cover letter → ATS scoring) with structured JSON contracts between steps and per-step integrity checks that trace every output claim to source, preventing model fabrication. Engineered a provider-agnostic routing layer across 3 LLM providers with a tiered access system (free-tier quota → user-supplied keys), enforced server-side via Postgres SECURITY DEFINER functions and column-level grants.",
    outcome:
      "Secured multi-tenant data with Supabase Auth (3 OAuth methods), row-level security, and AES-256-GCM encryption for user-supplied credentials. Ran a full pre-launch security audit and remediated 8 findings across BLOCKER/SERIOUS/MINOR severities. Live in production.",
    role: "Solo build — architecture, full-stack, AI pipeline, security audit, and deployment.",
    featured: true,
    live: { label: "cv-tailor-phi-rosy.vercel.app", href: "https://cv-tailor-phi-rosy.vercel.app/" },
    code: { label: "GitHub", href: "https://github.com/shekar987" },
  },
  {
    name: "RideX",
    year: "2025",
    stack: ["React 19", "Node.js", "Firebase", "Stripe", "Mapbox", "Vercel"],
    tagline: "Full-stack ride-hailing platform — three-portal marketplace",
    problem:
      "Architect and ship a production-grade, three-portal ride-hailing marketplace (customer, driver, admin) end-to-end — owning UI, secure REST APIs, cloud data modelling, payment infrastructure, and DevOps as a solo engineer.",
    approach:
      "Engineered 8 serverless REST APIs (Node.js / Cloud Functions) with JWT verification, rate limiting (100 req / 15 min), and idempotent Stripe processing — automating an 80/20 commission split with penny-accurate, double-charge-proof payments and 3-D Secure (SCA) compliance. Built real-time ride dispatch with Firestore listeners and ACID transactions for sub-second GPS/status sync with zero double-bookings under concurrent driver acceptance.",
    outcome:
      "Delivered the full 3-portal system in under 12 weeks, validated by 90+ Jest / React Testing Library automated tests. Shipped via automated GitHub → Vercel CI/CD, pairing full-stack ownership with AI-augmented engineering (Claude Code, prompt-engineered agentic workflows).",
    role: "Solo build — architecture, full-stack, payments, real-time dispatch, testing, and deployment.",
    live: { label: "uber-demo-omega.vercel.app", href: "https://uber-demo-omega.vercel.app" },
    code: { label: "github.com/shekar987/RideX-app", href: "https://github.com/shekar987/RideX-app" },
  },
  {
    name: "AI Financial Analysis System",
    year: "2025",
    stack: ["Python", "Anthropic Claude API", "pandas"],
    tagline: "Natural-language queries over SEC 10-K filings — without hallucinated numbers",
    problem:
      "Make multi-year SEC 10-K filings (Microsoft, Tesla, Apple) queryable in natural language — without hallucinated numbers, which is where naive LLM finance apps fail.",
    approach:
      "A Python ETL pipeline parses 10-K filings into structured datasets covering revenue, margins, and operational metrics across years. The Anthropic Claude API is integrated with iteratively-tuned prompts that improve factual accuracy on numerical financial data and suppress hallucination. The natural-language interface queries the structured layer, not raw LLM recall.",
    outcome:
      "Answers analytical questions over multi-year filings — growth, margin, performance — sourced directly from parsed data, not generated.",
    role: "Solo build — ETL, prompt engineering, and Claude integration.",
    code: {
      label: "github.com/shekar987/finsight-financial-chatbot",
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
  highlight?: string;
  bullets: ExperienceBullet[];
};

export const experiences: Experience[] = [
  {
    role: "Backend Developer",
    company: "Brane Group",
    period: "Jul 2022 – Sep 2024",
    type: "Full-time · 2 years",
    highlight:
      "Cut deployment lead time 40% and API response time 25% on live production Spring Boot services.",
    bullets: [
      {
        text: "Engineered and refactored a high-volume Spring Boot transaction API, applying query optimisation and caching to reduce response time under production load.",
        metric: "−25% latency",
      },
      {
        text: "Diagnosed and resolved PostgreSQL and MySQL performance bottlenecks through indexing and database tuning, cutting SQL execution time for downstream consumers.",
        metric: "−30% query time",
      },
      {
        text: "Spearheaded and automated CI/CD delivery in Jenkins and GitHub Actions, reducing deployment lead time and improving rollback reliability.",
        metric: "−40% lead time",
      },
      {
        text: "Detected and troubleshot production bottlenecks across Spring Boot microservices via structured monitoring, log analysis, and root-cause investigation.",
        metric: "−15% downtime",
      },
      {
        text: "Mentored and guided 3 junior developers through structured code review in an 8+ engineer Agile team.",
        metric: "−20% recurring defects",
      },
    ],
  },
  {
    role: "Full Stack Development Intern",
    company: "CodSoft",
    period: "Jan 2022 – Jun 2022",
    type: "Internship · 6 months",
    bullets: [
      {
        text: "Architected a layered Student Course Registration System across entity, service, persistence, and presentation layers — enforcing validation guards that eliminated duplicate-enrolment and invalid-drop errors.",
      },
      {
        text: "Isolated a JDBC persistence layer behind a dedicated DatabaseManager class, ensuring no view class held direct SQL — the same service/repository boundary later applied in production Spring Boot work.",
      },
      {
        text: "Delivered 9 end-to-end projects solo — requirements to submission — across 2 GitHub repositories with structured commits, at 100% on-time submission.",
      },
    ],
  },
];

export type SkillTier = {
  tier: string;
  label: string;
  description: string;
  skills: string[];
};

export const skillTiers: SkillTier[] = [
  {
    tier: "Daily",
    label: "Daily",
    description: "The stack I reach for without thinking.",
    skills: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "MySQL",
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Tailwind CSS",
      "Git",
    ],
  },
  {
    tier: "Working",
    label: "Working knowledge",
    description: "Shipped real features with these in production.",
    skills: [
      "Python",
      "Node.js",
      "Supabase",
      "Firebase",
      "Stripe",
      "Docker",
      "Jenkins",
      "GitHub Actions",
      "AWS",
      "Vercel",
      "Anthropic Claude API",
      "OAuth 2.0",
      "JWT",
      "JUnit",
      "SQL",
    ],
  },
  {
    tier: "Learning",
    label: "Currently levelling",
    description: "Active focus via my MSc and own products.",
    skills: ["React Native"],
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
    note: "AWS-accredited programme focused on Software Engineering, Cloud Computing, and AI applications.",
    highlights: [
      "Research Assistant on AssetGuard+, a university-backed AI cybersecurity startup — evaluated 11 industry asset-management platforms (Axonius, Qualys, Tenable, runZero), delivering a comparative gap analysis informing the platform's development priorities.",
      "Selected for the AssetGuard+ Full Stack Development Team, collaborating with the academic technical lead to design and build core features of an AI-powered cyber asset identification platform.",
    ],
  },
  {
    degree: "BSc Computer Science — Distinction",
    institution: "Keshav Memorial Institute of Technology, India",
    period: "Jul 2019 – Jul 2023",
    note: "Coursework in Data Structures, OOP, Databases, and Software Engineering.",
  },
];

export const certifications: string[] = [
  "AWS Certified Cloud Practitioner — Amazon Web Services",
  "Full Stack Developer Internship Certificate — CodSoft",
];
