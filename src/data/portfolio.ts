/**
 * Single source of truth for all portfolio content.
 * Typed so the compiler guards against drift.
 * To extend (e.g. add a Products section): add a typed array here,
 * build a section component, and compose it in page.tsx.
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
    "Right to work in the UK during MSc placement · Graduate Route visa eligible January 2027",
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
    "Two years at Brane Group cutting API latency 25% on a high-volume Spring Boot service. Now shipping a ride-hailing platform to 10,000+ users alongside an AWS-accredited MSc at the University of East London.",
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
      "Refactoring, query optimisation & caching on a high-volume Spring Boot transaction service.",
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
      "CI/CD workflows built in Jenkins & GitHub Actions — lifting engineering velocity.",
    icon: "rocket",
    accent: "cyan",
  },
];

export type Project = {
  name: string;
  year: string;
  stack: string[];
  problem: string;
  approach: string;
  outcome: string;
  role: string;
  live?: { label: string; href: string };
  code: { label: string; href: string };
};

export const projects: Project[] = [
  {
    name: "RideX",
    year: "2025",
    stack: ["React 19", "Firebase", "Stripe", "Mapbox", "Vercel"],
    problem:
      "Build a production ride-hailing experience end-to-end — booking, driver acceptance, live tracking, payments, and trip completion — as a solo full-stack project.",
    approach:
      "React 19 frontend with Firebase (Firestore + Realtime Database) handling state, role-based access, persistent trip history, and real-time updates. Stripe for payments, Mapbox for routing. Cloud-native backend shipped via a GitHub Actions → Vercel CI/CD pipeline.",
    outcome:
      "Live for 10,000+ users at 99.9% uptime, with 40% lower query latency than the first iteration.",
    role: "Solo build — architecture, frontend, backend, payments, and deployment.",
    live: { label: "uber-demo-omega.vercel.app", href: "https://uber-demo-omega.vercel.app" },
    code: { label: "github.com/shekar987/RideX-app", href: "https://github.com/shekar987/RideX-app" },
  },
  {
    name: "AI Financial Analysis System",
    year: "2025",
    stack: ["Python", "Anthropic Claude API", "pandas"],
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
  bullets: ExperienceBullet[];
};

export const experience: Experience = {
  role: "Backend Developer",
  company: "Brane Group",
  period: "Jul 2022 – Sep 2024",
  type: "Full-time · 2 years",
  bullets: [
    {
      text: "Cut REST API response times on a high-volume Spring Boot transaction service via refactoring, query optimisation, and caching.",
      metric: "−25% latency",
    },
    {
      text: "Reduced SQL execution time for downstream consumers through PostgreSQL and MySQL indexing and database tuning.",
      metric: "−30% query time",
    },
    {
      text: "Built CI/CD workflows in Jenkins and GitHub Actions that cut deployment lead time and lifted engineering velocity.",
      metric: "−40% lead time",
    },
    {
      text: "Diagnosed production bottlenecks across Spring Boot microservices through monitoring, log analysis, and root-cause investigation.",
      metric: "−15% downtime",
    },
    {
      text: "Mentored 3 junior developers via structured code reviews alongside 8+ engineers in an Agile team.",
      metric: "−20% recurring defects",
    },
  ],
};

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
      "Git",
    ],
  },
  {
    tier: "Working",
    label: "Working knowledge",
    description: "Shipped real features with these in production.",
    skills: [
      "Python",
      "Firebase",
      "Stripe",
      "Docker",
      "Jenkins",
      "GitHub Actions",
      "AWS",
      "Anthropic Claude API",
      "JUnit",
      "SQL",
    ],
  },
  {
    tier: "Learning",
    label: "Currently levelling",
    description: "Active focus via my MSc and own products.",
    skills: ["Next.js", "Node.js", "React Native"],
  },
];

export type Education = {
  degree: string;
  institution: string;
  period: string;
  note: string;
};

export const education: Education[] = [
  {
    degree: "MSc Computer Science (Industrial Placement)",
    institution: "University of East London",
    period: "Jan 2025 – Jan 2027",
    note: "AWS-accredited programme focused on Software Engineering, Cloud Computing, and AI applications.",
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
  "Java Developer Certificate — CodSoft",
];
