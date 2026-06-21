# Design Decisions — Soma Shekar Keesari Portfolio

A record of the key choices, the rationale for each, and open questions.
Paste this into a future session when extending the site.

---

## 1. Delivery format — Next.js on Vercel (not static HTML)

**Decision:** Ship as the Next.js 16 app already in this environment, deploy to Vercel.

**Rationale:** You're applying as a Next.js / React / TypeScript developer. The medium *is* the message — a site built in your target stack is a live public code sample. A technical reviewer opening DevTools / source sees App Router, server components, typed data, the metadata file conventions — all positive signals. A static HTML file says "can write a page," not "can ship the product."

**Tradeoff accepted:** A real build step and deploy target vs. one file. Trivial with Vercel (git push). Worth it for the signal.

---

## 2. Positioning — "Backend engineer building full-stack & AI products"

**Decision:** Lead with backend credibility (Java/Spring Boot + SQL performance from Brane Group), transition toward full-stack + AI (RideX, the Claude finance system, MSc).

**Rationale:** Your CV and your intended stack tell slightly different stories. Leading with pure "Next.js/React" would create a CV-vs-site mismatch that recruiters catch. Leading with pure "Java backend" undersells where you're heading. The chosen line claims your proven foundation *and* your trajectory in one sentence, with a proof point (25% latency cut, 10,000+ users) attached.

**Open question:** If you take on real Node.js or React Native client work, add it to `skillTiers` ("Working" or "Daily") and surface one project. Don't list them speculatively.

---

## 3. Visual direction — Editorial-Technical, light-first, single emerald accent

**Decision:** Light mode primary (warm neutral, not pure white), near-black text, one accent (emerald-600) used only on links, the primary CTA, status dot, and focus rings. Dark mode supported via `next-themes` (emerald-400 in dark). No gradients, no glassmorphism, no bento grid.

**Rationale:**
- **Light-first** — recruiters view in offices / daylight; light is the default professional register.
- **Warm neutral over pure white** — reads as authored, not templated (pure white + indigo is the default AI-portfolio tell).
- **Emerald, not indigo/violet** — the indigo→violet→fuchsia gradient is the single loudest "AI-generated" signal in 2024–25. Emerald reads "active/available/go" and isn't the gradient everyone else uses.
- **Accent used sparingly** — every accent instance is functional (CTA, link, status, focus). Decoration that competes with your evidence gets cut.

**References studied:** leerob.com (text-forward density), brianlovin.com (clean cards + motion only on hover), rauno.me (no wasted pixels), delba.dev (dark without the gradient cliché).

---

## 4. Animation philosophy — restrained

**Decision:** No scroll-triggered fade-ups. Motion only on hover (link underline grow, arrow nudge). `prefers-reduced-motion` fully respected.

**Rationale:** Scroll-fade-everything is the universal AI-portfolio tell and a performance cost. Credibility and performance beat spectacle. The one motion that earns its keep is the link underline grow — it confirms interactivity.

---

## 5. Information architecture — 5 sections, ruthless cuts

**Order:** Hero → Selected Work → Experience → Skills → Education → Contact.

**What was cut and why:**
- **Stats strip** — was fabricated ("9 yrs / 4.2M users"); a CV cross-check disqualifier. Cut entirely.
- **Bento grid** — decorative, overused AI pattern, no signal. Cut.
- **Fake companies / projects / skills** — all replaced with real data. The previous site had 4 fake employers, 6 fake projects, and padded skills (Rust, Go, Kafka, ClickHouse, gRPC, Swift). A technical reviewer opening your GitHub would have flagged it instantly.
- **"Get in touch" CTA copy** — replaced with "Email me" (concrete action) + "Download CV" (conversion path).

**What was added:**
- **Education & Certifications** — MSc UEL (AWS-accredited), BSc Distinction, AWS Cloud Practitioner. Was missing; recruiters expect it.
- **Right-to-work line** — "Right to work during MSc placement · Graduate Route visa eligible January 2027." Removes a known UK recruiter friction point.
- **Skills in 3 honest tiers** (Daily / Working / Currently levelling) — signals self-awareness; recruiters trust honesty over flat lists.

---

## 6. Copy — Problem → Approach → Outcome, with "My role"

**Decision:** Each project uses a definition list with Problem, Approach, Outcome, and My role. Every claim is traceable to your CV.

**Rationale:** Recruiters and hiring managers scan for *your specific contribution* and *quantified impact*. The PROBLEM→APPROACH→OUTCOME structure forces specificity and makes scannable. "My role" answers the "was this actually you?" question that vague project descriptions leave open.

**Banned:** "passionate about building beautiful experiences" and relatives. No filler. UK English throughout.

---

## 7. Engineering — the site is a code sample

| Concern | Implementation |
|---|---|
| **Component organisation** | `src/data/portfolio.ts` (typed source of truth) + `src/components/site/*` (one component per section) + `page.tsx` (~15 lines, server component composing sections). Reviewable structure. |
| **Server components by default** | Only `site-nav` and `theme-toggle` are client. All content renders server-side → minimal JS, fast TTI. |
| **SEO + social** | `metadata` export (title template, description, canonical, OG, Twitter card) + `opengraph-image.tsx` (Next OG file convention, edge runtime, 1200×630). Link previews do recruiting work pre-click. |
| **Performance** | Geist via `next/font` (swap, no FOIT). RSC → near-zero client JS. Almost no raster images (text-forward). `display: "swap"` on fonts. |
| **Resilience** | **Verified:** with JS fully disabled, all content (hero, both projects, experience, 3 skill tiers, education, certs, contact) renders. Theme toggle + mobile menu are progressive enhancements. |
| **Accessibility** | Semantic `<header>/<main>/<section>/<article>/<dl>/<nav>/<footer>`. Strict h1→h2→h3 order (verified in a11y tree). `focus-visible` rings (emerald, verified via computed styles). `aria-label` on icon-only buttons. `aria-expanded`/`aria-controls` on mobile menu. `prefers-reduced-motion` respected. WCAG AA contrast: stone-900 on stone-50 ≈ 16:1; emerald-600 on white ≈ 4.6:1 (AA for large/medium text + UI). |
| **Analytics** | `@vercel/analytics` — privacy-friendly, no cookie banner, tells you if visitors reach the CTA. Debug mode in dev; live on Vercel deploy. |

---

## 8. File map

```
src/
  app/
    layout.tsx          # metadata, fonts, ThemeProvider, Analytics
    page.tsx            # server component, composes sections (~15 lines)
    opengraph-image.tsx # OG image via next/og (edge runtime)
    globals.css         # warm-neutral light + dark theme, emerald accent
  data/
    portfolio.ts        # ALL content — typed, single source of truth
  components/
    theme-provider.tsx  # next-themes wrapper (client)
    theme-toggle.tsx    # CSS-driven icon swap, no hydration state (client)
    site/
      site-nav.tsx      # sticky nav + mobile menu (client)
      hero.tsx          # server
      work.tsx          # server — 2 projects, Problem/Approach/Outcome
      experience.tsx    # server — Brane Group
      skills.tsx        # server — 3 tiers
      education.tsx     # server — MSc + BSc + certs
      contact-footer.tsx# server — email, CV, links, right-to-work
      section-heading.tsx
public/
  cv.pdf                # converted from your docx
```

---

## 9. Extensibility — adding a "Products" section later

Three steps, no restructuring:
1. Add a `products` typed array to `src/data/portfolio.ts`.
2. Create `src/components/site/products.tsx` (copy `work.tsx` as a template).
3. Add `<Products />` to `page.tsx` between the relevant sections, and a nav link in `navLinks`.

The data-driven architecture means the compiler guards content drift, and a new section is additive only.

---

## 10. Open questions / things to revisit

- **Node.js / React Native client work** — if you have real projects in either stack, add them (one line each, with a number). Currently omitted because they're not in your materials.
- **A third project** — two solid projects is fine for 2 YoE, but a third (especially a deployed product with users) would strengthen the "builds many products" positioning you mentioned. Only add if real.
- **Live demo for the AI Finance system** — currently code-only. If you deploy it, add a `live` link like RideX has.
- **Domain** — `metadataBase` is set to a placeholder Vercel URL (`soma-keesari.vercel.app`). Update to your real domain when you buy one; OG/Twitter cards depend on it for absolute URLs.
- **Plausible vs Vercel Analytics** — currently Vercel Analytics. If you want analytics independent of Vercel (e.g. self-hosted), swap for Plausible with a one-line script tag in `layout.tsx`.

---

## 11. What I verified (Step 7 self-check)

- `bun run lint` — clean, zero errors.
- Dev server — GET / 200, no runtime errors in console.
- **No-JS resilience** — all content renders with JavaScript disabled (verified via accessibility tree).
- **Accessibility tree** — correct roles (banner/main/region/sectionfooter), h1→h2→h3 order, semantic `<dl>` for projects, real list semantics.
- **Keyboard nav** — Tab moves through interactive elements; focus rings render in emerald (verified via computed styles).
- **Mobile** — 390px viewport, stacked layout, hamburger menu opens and exposes all nav links, no horizontal scroll (VLM-verified).
- **CV PDF** — `/cv.pdf` returns 200, application/pdf, 70KB.
- **OG image** — `/opengraph-image` returns 200, image/png, 53KB; VLM-verified name/role/proof render correctly.
- **Design quality** — VLM (glm-4.6v) confirmed across desktop hero, full page, and mobile: authored (not templated), clear hierarchy, accent used sparingly, no visual problems, hiring-manager-credible.
