# Shekar Keesari: portfolio

The source of my personal portfolio site: **[shekar-portfolio-eight.vercel.app](https://shekar-portfolio-eight.vercel.app/)**

It covers my projects (Jobhuntz, CampaignPulse, RideX, FinSight), my experience, my skills and my education. It's built in the stack I apply with, so the site doubles as a code sample.

## Stack

Next.js 16 (App Router, server components) · React · TypeScript · Tailwind CSS 4 · shadcn/ui · Framer Motion · Vercel

## How it's organised

- `src/data/portfolio.ts`: one typed file holds every piece of content (profile, projects, experience, skills, education), so the page components never hard-code text.
- `src/components/site/`: the page sections.
- `src/app/`: layout, metadata, Open Graph image and sitemap.
- `DESIGN-DECISIONS.md`: why the site is built the way it is.

## Running it locally

```bash
npm install     # or bun install
npm run dev     # http://localhost:3000
npm run build
```

## Contact

[LinkedIn](https://www.linkedin.com/in/shekar-keesari/) · [GitHub](https://github.com/shekar987)
