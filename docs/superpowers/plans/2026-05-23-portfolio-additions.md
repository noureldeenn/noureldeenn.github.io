# Portfolio Additions Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add `/about` page (layout B), `/stack` page, and a homepage testimonials section to the existing Next.js portfolio.

**Architecture:** Three additive pieces sharing one new content module (`lib/content.ts`). Two new routes (server components), one new component (`Testimonials`), plus surgical edits to renumber the home page sections, extend nav, and update the sitemap. No new dependencies. No tests required — the spec explicitly defines verification as visual.

**Tech Stack:** Next.js 15 App Router, React 19 server components, TypeScript, Tailwind CSS, `next/font` (Geist, JetBrains Mono, Instrument Serif), `motion/react` (already installed; only used in existing components).

**Spec:** `docs/superpowers/specs/2026-05-23-portfolio-additions-design.md`

**Project notes for the executor:**

- The project is **not a git repository**. Commit steps in the standard plan format are **omitted** here. After finishing, the user may want to initialize git and make a single squash commit covering the whole feature. Do not run `git init` without asking.
- The dev server is `npm run dev` (Next.js 15). Default port is `3000`. If the project uses a different port, check `package.json` scripts.
- No automated tests exist in this project and none are added in this plan. Verification is via the dev server and manual route walk in Task 11.
- Existing CSS variable colors (defined in `app/globals.css` via Tailwind): `ink`, `ink-soft`, `paper`, `paper-dim`, `ember`, `rule`. Don't invent new colors.
- File references with `:line` syntax point at lines in the codebase as of the spec date — re-read the file before editing in case earlier tasks shifted line numbers.

---

## Task 1: Create the central content module

**Files:**
- Create: `lib/content.ts`

This module is the single source of truth for all data driving the new pages. About bio, principles, timeline, tech-stack groups, testimonials, and the photo flag all live here. The page components stay focused on layout.

- [ ] **Step 1: Create `lib/content.ts` with the full data shape and placeholder content**

```ts
// lib/content.ts

export const hasPhoto = false;

export const aboutBio = [
  "I'm Nour. I build full-stack web apps, AI agents, e-commerce stores, and healthcare platforms for agencies and brands.",
  "Based in Cairo, working across the region and remote. I've been shipping since 2020 — quietly, mostly under other people's brands.",
];

export type Principle = { n: string; text: string };

export const principles: Principle[] = [
  { n: "01", text: "Ship outcomes, not hours." },
  { n: "02", text: "NDA-friendly by default. Your clients never need to know." },
  { n: "03", text: "Async-first. 48-hour turnaround on small tasks." },
  { n: "04", text: "Boring tech where it counts. Sharp tools where it matters." },
];

export type TimelineEntry = { year: string; text: string };

export const timeline: TimelineEntry[] = [
  { year: "2020", text: "First commercial build — small business site, learned the hard parts of deployment." },
  { year: "2022", text: "First agency engagement, white-label work for marketing teams." },
  { year: "2024", text: "Went fully independent. Booked through referrals only." },
  { year: "2025", text: "Studio model — Craft Crew, with collaborators on call." },
];

export type StackGroup = { label: string; items: string[] };

export const stackGroups: StackGroup[] = [
  {
    label: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind", "Motion", "MDX"],
  },
  {
    label: "Backend",
    items: ["Node", "Postgres", "Prisma", "tRPC", "REST", "GraphQL"],
  },
  {
    label: "AI & Automation",
    items: ["Claude API", "OpenAI", "LangChain", "Pinecone", "Vector DBs", "RAG"],
  },
  {
    label: "E-commerce",
    items: ["Shopify", "Hydrogen", "Zid", "Stripe"],
  },
  {
    label: "Healthcare",
    items: ["FHIR", "HL7", "HIPAA-aware patterns"],
  },
  {
    label: "Infra & Tooling",
    items: ["Vercel", "Cloudflare", "AWS", "GitHub Actions", "Vitest", "Playwright"],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Delivered on the timeline he promised. Twice. We route our hardest builds to him now.",
    name: "Mariam Hassan",
    role: "Head of Engineering",
    company: "Atlas Studio",
  },
  {
    quote:
      "The kind of contractor you forget is contracted. Communicates, ships, and the code looks like ours wrote it.",
    name: "Sami Khalil",
    role: "Founder",
    company: "Northroom Agency",
  },
  {
    quote:
      "Picked up our messy WordPress migration and got us on Next.js without anyone on the editorial team noticing. Two years on, still ships from that codebase.",
    name: "Layla Aoun",
    role: "Engineering Lead",
    company: "Wireframe Media",
  },
];
```

- [ ] **Step 2: Verify TypeScript accepts the file**

Run: `npx tsc --noEmit`
Expected: No errors related to `lib/content.ts`. Pre-existing errors in unrelated files are acceptable to ignore for this task.

---

## Task 2: Build the Testimonials component

**Files:**
- Create: `components/site/testimonials.tsx`

Three-card grid, equal weight, mono italic quotes, hairline rule, name + role · company below. Section uses the same `bg-rule` gutter trick the Services grid uses.

- [ ] **Step 1: Create `components/site/testimonials.tsx`**

```tsx
// components/site/testimonials.tsx
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section
      id="voices"
      className="relative py-16 md:py-24 border-t border-rule"
    >
      <div className="container-page">
        <div className="flex items-center gap-3 mb-12">
          <span className="block w-8 h-px bg-ember" />
          <span className="font-mono text-[10px] tracking-widest text-paper-dim">
            [02] VOICES
          </span>
        </div>
        <h2 className="font-mono text-3xl md:text-5xl font-medium tracking-tight text-paper max-w-3xl mb-12">
          What agencies and clients say after we ship.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-ink p-6 md:p-8 flex flex-col"
            >
              <span
                aria-hidden
                className="font-mono text-2xl text-ember/60 leading-none mb-4"
              >
                &ldquo;
              </span>
              <blockquote className="text-paper text-sm md:text-[15px] leading-relaxed italic flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-rule">
                <div className="font-mono text-sm text-paper">{t.name}</div>
                <div className="font-mono text-[11px] text-paper-dim mt-1">
                  {t.role} &middot; {t.company}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript accepts the file**

Run: `npx tsc --noEmit`
Expected: No new errors. The import from `@/lib/content` resolves because Task 1 created it.

---

## Task 3: Insert Testimonials into the home page and renumber Services

**Files:**
- Modify: `app/page.tsx`

The current home page renders `<CaseCard>` (work) → Services → PullQuote → ProcessStrip → CtaBlock. Insert `<Testimonials>` between the work section and the services section. The Services section's `[02]` label becomes `[03]`.

- [ ] **Step 1: Re-read `app/page.tsx` to confirm current state**

Use the Read tool on `app/page.tsx`. Confirm the services section currently has the label `[02] SERVICES` (around line 43).

- [ ] **Step 2: Add the import for the Testimonials component**

In `app/page.tsx`, near the other component imports at the top (around lines 1–6):

Find:
```tsx
import { CtaBlock } from "@/components/site/cta-block";
```

Replace with:
```tsx
import { CtaBlock } from "@/components/site/cta-block";
import { Testimonials } from "@/components/site/testimonials";
```

- [ ] **Step 3: Insert `<Testimonials />` between the work `<section>` and the services `<section>`**

Find the closing `</section>` of the work section followed by the opening of the services section. It looks like:

```tsx
            <div className="border-t border-rule" />
          </div>
        </div>
      </section>

      <section
        id="services"
```

Replace with:

```tsx
            <div className="border-t border-rule" />
          </div>
        </div>
      </section>

      <Testimonials />

      <section
        id="services"
```

- [ ] **Step 4: Renumber the Services section label from `[02]` to `[03]`**

In the same file, find:
```tsx
            <span className="font-mono text-[10px] tracking-widest text-paper-dim">
              [02] SERVICES
            </span>
```

Replace with:
```tsx
            <span className="font-mono text-[10px] tracking-widest text-paper-dim">
              [03] SERVICES
            </span>
```

- [ ] **Step 5: Verify TypeScript**

Run: `npx tsc --noEmit`
Expected: No new errors.

---

## Task 4: Renumber the Process section label

**Files:**
- Modify: `components/site/process-strip.tsx`

The section label needs to shift from `[03]` to `[04]`.

- [ ] **Step 1: Edit the label**

In `components/site/process-strip.tsx`, find:
```tsx
            [03] PROCESS
```

Replace with:
```tsx
            [04] PROCESS
```

- [ ] **Step 2: Verify TypeScript**

Run: `npx tsc --noEmit`
Expected: No new errors.

---

## Task 5: Renumber the Next (CTA) section label

**Files:**
- Modify: `components/site/cta-block.tsx`

The CTA section label needs to shift from `[04]` to `[05]`.

- [ ] **Step 1: Edit the label**

In `components/site/cta-block.tsx`, find:
```tsx
            [04] NEXT
```

Replace with:
```tsx
            [05] NEXT
```

- [ ] **Step 2: Verify TypeScript**

Run: `npx tsc --noEmit`
Expected: No new errors.

---

## Task 6: Build the About page (layout B — two-column with identity card)

**Files:**
- Create: `app/about/page.tsx`

Personal voice ("I'm Nour"). Two-column layout. Left column: bio paragraphs, principles list, timeline list, contact CTA. Right column: identity card with photo slot, location, since, availability, LinkedIn link.

- [ ] **Step 1: Create the `app/about/` directory and `app/about/page.tsx`**

```tsx
// app/about/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { siteMeta } from "@/lib/meta";
import {
  aboutBio,
  hasPhoto,
  principles,
  timeline,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Independent developer behind Craft Crew. Six years building full-stack web apps, AI agents, e-commerce, and healthcare platforms.",
};

export default function AboutPage() {
  return (
    <section className="relative pt-20 md:pt-28 pb-24 md:pb-32">
      <div className="container-page">
        <div className="flex items-center gap-3 mb-8">
          <span className="block w-8 h-px bg-ember" />
          <span className="font-mono text-[10px] tracking-widest text-paper-dim">
            [ABOUT // 2026]
          </span>
        </div>

        <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.02em] leading-[1.05] text-paper max-w-3xl">
          I&rsquo;m <span className="text-ember">Nour</span>. I build digital
          products.
        </h1>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-8 space-y-14">
            <div className="space-y-5 max-w-2xl">
              {aboutBio.map((para, i) => (
                <p
                  key={i}
                  className="text-paper-dim text-base md:text-lg leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>

            <div>
              <div className="font-mono text-[10px] tracking-widest text-paper-dim mb-6">
                [PRINCIPLES]
              </div>
              <ul className="space-y-4">
                {principles.map((p) => (
                  <li
                    key={p.n}
                    className="flex gap-5 border-t border-rule pt-4"
                  >
                    <span className="font-mono text-ember text-sm shrink-0">
                      {p.n}
                    </span>
                    <span className="font-mono text-paper text-sm md:text-base leading-relaxed">
                      {p.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-mono text-[10px] tracking-widest text-paper-dim mb-6">
                [TIMELINE]
              </div>
              <ul className="space-y-4">
                {timeline.map((t) => (
                  <li
                    key={t.year}
                    className="flex gap-5 border-t border-rule pt-4"
                  >
                    <span className="font-mono text-ember text-sm shrink-0 w-16">
                      {t.year}
                    </span>
                    <span className="font-mono text-paper-dim text-sm md:text-base leading-relaxed">
                      {t.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <Button href="/contact" size="lg">
                Open a brief &rarr;
              </Button>
            </div>
          </div>

          <aside className="lg:col-span-4 lg:mt-2">
            <div className="border border-rule p-6 md:p-7 bg-ink-soft/40 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[10px] tracking-widest text-paper-dim">
                  [IDENTITY]
                </span>
                <span className="flex items-center gap-2">
                  <span className="block w-2 h-2 rounded-full bg-ember" />
                  <span className="font-mono text-[10px] tracking-widest text-ember">
                    BOOKING Q3
                  </span>
                </span>
              </div>

              {hasPhoto ? (
                <div className="relative aspect-square bg-ink-soft border border-rule overflow-hidden">
                  <Image
                    src="/me.jpg"
                    alt="Nour"
                    fill
                    sizes="(min-width: 1024px) 320px, 50vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-square bg-ink-soft border border-rule flex items-center justify-center">
                  <span className="font-mono text-[10px] tracking-widest text-paper-dim">
                    [NOUR]
                  </span>
                </div>
              )}

              <div className="mt-6 pt-5 border-t border-rule space-y-3 text-sm">
                <div className="flex justify-between items-baseline">
                  <span className="font-mono text-paper-dim text-xs">
                    location
                  </span>
                  <span className="font-mono text-paper">
                    {siteMeta.location}
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="font-mono text-paper-dim text-xs">
                    since
                  </span>
                  <span className="font-mono text-paper">2020</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="font-mono text-paper-dim text-xs">
                    response
                  </span>
                  <span className="font-mono text-paper">
                    &le; 1 business day
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-rule">
                <a
                  href={siteMeta.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-paper-dim hover:text-ember transition-colors"
                >
                  LinkedIn &#8599;
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

Run: `npx tsc --noEmit`
Expected: No new errors. `next/image` import resolves because Next.js is already a dependency.

---

## Task 7: Build the Stack page

**Files:**
- Create: `app/stack/page.tsx`

Header + intro paragraph, then one section per group. Each section renders the items as mono chip tags (same style used on `case-card.tsx`).

- [ ] **Step 1: Create the `app/stack/` directory and `app/stack/page.tsx`**

```tsx
// app/stack/page.tsx
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { stackGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "Stack",
  description:
    "Tools, frameworks, and platforms Craft Crew ships with — frontend, backend, AI, e-commerce, healthcare, and infra.",
};

export default function StackPage() {
  return (
    <section className="relative pt-20 md:pt-28 pb-24 md:pb-32">
      <div className="container-page">
        <div className="flex items-center gap-3 mb-8">
          <span className="block w-8 h-px bg-ember" />
          <span className="font-mono text-[10px] tracking-widest text-paper-dim">
            [STACK // TOOLS WE REACH FOR]
          </span>
        </div>

        <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.02em] leading-[1.05] text-paper max-w-3xl">
          Tools, frameworks, and platforms we ship with.
        </h1>

        <p className="mt-8 max-w-2xl text-paper-dim text-base md:text-lg leading-relaxed">
          We pick tools by their fit to the brief, not their place on a hype
          cycle. Mostly Next.js on the front, mostly Postgres on the back, and a
          short list of well-worn names for everything in between.
        </p>

        <div className="mt-16 space-y-12">
          {stackGroups.map((group, i) => (
            <div
              key={group.label}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 border-t border-rule pt-8"
            >
              <div className="md:col-span-3">
                <div className="font-mono text-[10px] tracking-widest text-paper-dim mb-2">
                  [{group.label.toUpperCase()}]
                </div>
                <div className="font-mono text-sm text-ember">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="md:col-span-9">
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-[11px] tracking-widest text-paper-dim border border-rule px-3 py-1.5 hover:text-ember hover:border-ember transition-colors duration-200"
                    >
                      {item.toUpperCase()}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-rule flex flex-wrap items-center gap-6">
          <p className="font-mono text-sm text-paper-dim max-w-md leading-relaxed">
            Tool not on the list? We&rsquo;ve probably used it. Tell us what
            you&rsquo;re building.
          </p>
          <Button href="/contact" size="lg">
            Open a brief &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

Run: `npx tsc --noEmit`
Expected: No new errors.

---

## Task 8: Add About and Stack to the header nav

**Files:**
- Modify: `components/site/header.tsx`

Current nav: `work, services, process, contact`. New nav: `work, about, services, stack, contact`. Order: `about` follows `work` (story right after proof); `stack` follows `services` (capability right after offering).

- [ ] **Step 1: Edit the nav links array**

In `components/site/header.tsx`, find:
```tsx
const navLinks = [
  { label: "work", href: "/#work" },
  { label: "services", href: "/#services" },
  { label: "process", href: "/#process" },
  { label: "contact", href: "/contact" },
];
```

Replace with:
```tsx
const navLinks = [
  { label: "work", href: "/#work" },
  { label: "about", href: "/about" },
  { label: "services", href: "/#services" },
  { label: "stack", href: "/stack" },
  { label: "contact", href: "/contact" },
];
```

- [ ] **Step 2: Verify TypeScript**

Run: `npx tsc --noEmit`
Expected: No new errors.

---

## Task 9: Add About and Stack to the footer site list

**Files:**
- Modify: `components/site/footer.tsx`

Insert `About` after `Work` and `Stack` after `Services` in the `[SITE]` column, matching the header order.

- [ ] **Step 1: Edit the footer site list**

In `components/site/footer.tsx`, find the `[SITE]` `<ul>` (currently contains Work / Services / Process / Contact):

```tsx
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#work"
                  className="font-mono text-sm text-paper-dim hover:text-ember transition-colors"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="font-mono text-sm text-paper-dim hover:text-ember transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#process"
                  className="font-mono text-sm text-paper-dim hover:text-ember transition-colors"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-mono text-sm text-paper-dim hover:text-ember transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
```

Replace with:

```tsx
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#work"
                  className="font-mono text-sm text-paper-dim hover:text-ember transition-colors"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-mono text-sm text-paper-dim hover:text-ember transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="font-mono text-sm text-paper-dim hover:text-ember transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/stack"
                  className="font-mono text-sm text-paper-dim hover:text-ember transition-colors"
                >
                  Stack
                </Link>
              </li>
              <li>
                <Link
                  href="/#process"
                  className="font-mono text-sm text-paper-dim hover:text-ember transition-colors"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-mono text-sm text-paper-dim hover:text-ember transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
```

- [ ] **Step 2: Verify TypeScript**

Run: `npx tsc --noEmit`
Expected: No new errors.

---

## Task 10: Add About and Stack to the sitemap

**Files:**
- Modify: `app/sitemap.ts`

Add the two new routes alongside the existing `/contact` entry.

- [ ] **Step 1: Edit `app/sitemap.ts`**

Find the existing `/contact` entry block:
```ts
    {
      url: `${base}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
```

Replace with:
```ts
    {
      url: `${base}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${base}/stack`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
```

- [ ] **Step 2: Verify TypeScript**

Run: `npx tsc --noEmit`
Expected: No new errors.

---

## Task 11: Visual verification across all routes

**Files:**
- Verify only — no code changes.

This is the project's substitute for an automated test suite. Walk every changed surface and confirm it renders correctly.

- [ ] **Step 1: Start the dev server**

Run: `npm run dev`
Expected: Next.js dev server starts. Note the URL (default `http://localhost:3000`).

- [ ] **Step 2: Verify home page**

Open `http://localhost:3000/`. Confirm:
- Section labels read in order: `[01] SELECTED WORKS`, `[02] VOICES`, `[03] SERVICES`, `[04] PROCESS`, `[05] NEXT`.
- The Voices section sits between case studies and Services.
- Three testimonial cards render side-by-side on desktop, stacked on mobile (test by resizing to ~375px width).
- No hydration warnings in browser devtools console.

- [ ] **Step 3: Verify About page**

Open `http://localhost:3000/about`. Confirm:
- Headline reads "I'm Nour. I build digital products." with `Nour` in ember accent.
- Identity card sidebar renders on the right (desktop) with `[NOUR]` placeholder block.
- Principles list renders 4 entries with hairline rules between them.
- Timeline list renders 4 entries.
- "Open a brief →" button at the bottom links to `/contact`.
- Mobile (375px): identity card stacks below the main column.

- [ ] **Step 4: Verify Stack page**

Open `http://localhost:3000/stack`. Confirm:
- Six groups render in order: Frontend, Backend, AI & Automation, E-commerce, Healthcare, Infra & Tooling.
- Each group label is numbered `01`–`06` in ember.
- Tags wrap responsively. Hovering a tag tints it ember.
- "Open a brief →" CTA at the bottom links to `/contact`.

- [ ] **Step 5: Verify header and footer navigation**

On any page:
- Header shows 5 links: `work · about · services · stack · contact`.
- Footer `[SITE]` column shows 6 links: Work, About, Services, Stack, Process, Contact.
- Clicking each link routes correctly. `/about` and `/stack` are dedicated pages; the others scroll-anchor to the home page or route to `/contact`.

- [ ] **Step 6: Verify the sitemap**

Open `http://localhost:3000/sitemap.xml`. Confirm both `/about` and `/stack` URLs appear.

- [ ] **Step 7: Final TypeScript check**

Run: `npx tsc --noEmit`
Expected: No new errors compared to the pre-change baseline.

- [ ] **Step 8: Lighthouse spot-check (optional but recommended)**

In Chrome devtools, run Lighthouse against `/about` and `/stack`. Expected: scores within 5 points of the existing home page (which is in the 95+ range). If scores drop noticeably, investigate `next/image` sizing on About or unused CSS on Stack before marking complete.

---

## Done When

- All 11 tasks complete.
- `npx tsc --noEmit` reports no new errors.
- Manual walkthrough in Task 11 passes every check.
- User has filled in real bio paragraphs, principles, timeline entries, stack items, and testimonial quotes in `lib/content.ts` (or accepted the defaults).
- (Optional) `hasPhoto` flipped to `true` and `public/me.jpg` dropped in once a real photo exists.