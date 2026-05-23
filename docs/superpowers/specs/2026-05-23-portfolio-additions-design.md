# Portfolio Additions — Design Spec

**Date:** 2026-05-23
**Status:** Draft, awaiting user review
**Scope:** Add an About page, a Tech Stack page, and a Testimonials section to the existing portfolio.

## Goal

Strengthen the portfolio with three trust-building additions:

- An **About** page that puts a face and story behind the studio voice
- A **Tech Stack** page that lets technical buyers verify capability quickly
- A **Testimonials** section on the home page that backs case-study claims with third-party voice

These are additive — no existing pages are restructured beyond a small renumbering of home page sections.

## Voice and Content

- **About page voice:** Personal — "I'm Nour". The rest of the site keeps the studio "we / Craft Crew" voice. Readers expect the About page to be personal, so the shift is natural.
- **Testimonials:** Placeholder quotes for now (with realistic-looking name, title, company). Structure is ready for real quotes to drop in by editing one file.
- **Tech Stack:** Grouped by category. No proficiency badges, no "years used" tags.

## Architecture Overview

Three pieces to add. All three follow the existing patterns (server components, mono labels, `[NN]` section numbering, rule borders, ember accents).

```
app/
  about/page.tsx            (new — server component, layout B)
  stack/page.tsx            (new — server component)
  page.tsx                  (modified — insert testimonials section)
components/
  site/
    testimonials.tsx        (new — server component, three-card grid)
    header.tsx              (modified — add about + stack to nav)
    footer.tsx              (modified — add about + stack to [SITE] list)
    process-strip.tsx       (modified — section label [03] → [04])
    cta-block.tsx           (modified — section label [04] → [05])
lib/
  content.ts                (new — single source of truth for principles, timeline, stack groups, testimonials)
app/sitemap.ts              (modified — add /about and /stack)
```

### Why a single `lib/content.ts`

About, Stack, and Testimonials are all driven by structured data: a list of principles, a timeline, grouped tech tags, and a list of quotes. Co-locating these in one module means updates happen in one place, and the page components stay focused on layout. Mirrors how `lib/work.ts` works today.

---

## 1. About Page (`/about`)

**Route:** `app/about/page.tsx`
**Layout:** Two-column with sidebar identity card (chosen in brainstorm).

### Structure

```
[ABOUT // 2026]
H1: "I'm Nour. I build digital products."

┌────────────────────────────────┬──────────────────────┐
│ Bio paragraph (2–3 short lines) │  Identity card       │
│                                 │  ┌──────────────┐    │
│ [PRINCIPLES]                    │  │ photo / silhouette│
│   01 · Principle one            │  ├──────────────┤    │
│   02 · Principle two            │  │ location      │    │
│   03 · Principle three          │  │ since         │    │
│                                 │  │ availability  │    │
│ [TIMELINE]                      │  ├──────────────┤    │
│   2020 · Milestone              │  │ LinkedIn ↗    │    │
│   2023 · Milestone              │  └──────────────┘    │
│   2025 · Milestone              │                      │
│                                 │                      │
│ CTA → "Open a brief →" /contact │                      │
└────────────────────────────────┴──────────────────────┘
```

The identity-card pattern mirrors the hero's right-column card for visual symmetry.

### Content

Data lives in `lib/content.ts` as:

```ts
export const aboutBio = "I build full-stack web apps, AI agents, e-commerce, and healthcare platforms for agencies and brands. Based in Cairo, working with teams across the region and remote.";

export const principles = [
  { n: "01", text: "Ship outcomes, not hours" },
  { n: "02", text: "NDA-friendly by default" },
  { n: "03", text: "Async, with 48h turnarounds on small tasks" },
];

export const timeline = [
  { year: "2020", text: "First commercial build" },
  { year: "2023", text: "Went independent" },
  { year: "2025", text: "Studio model" },
];
```

User fills exact wording before launch — the structure is fixed.

### Photo

The identity card includes a `1:1` photo slot. To avoid a missing-image flash, the component reads a `hasPhoto` flag from `lib/content.ts`:

```ts
export const hasPhoto = false;
```

- When `false`: renders a `bg-ink-soft` block with the `[NOUR]` mono label as a deliberate placeholder. Ships as-is on day one.
- When `true`: renders `next/image` against `public/me.jpg` with `width={256} height={256}` and `priority` off (it's below the fold on mobile).

User flips the flag and drops the image in one step when ready.

### Metadata

```ts
export const metadata: Metadata = {
  title: "About",
  description: "Independent developer behind Craft Crew. Six years building full-stack web apps, AI agents, and healthcare platforms.",
};
```

---

## 2. Tech Stack Page (`/stack`)

**Route:** `app/stack/page.tsx`
**Structure:** Grouped sections, each with a tag grid. No skill levels.

### Sections

Six groups, in this order:

1. **Frontend** — Next.js, React, TypeScript, Tailwind, Motion (Framer Motion), MDX
2. **Backend** — Node, Postgres, Prisma, tRPC, REST / GraphQL
3. **AI & Automation** — Claude API, OpenAI, LangChain, Pinecone, vector DBs, RAG
4. **E-commerce** — Shopify, Hydrogen, Zid, Stripe
5. **Healthcare** — FHIR, HL7, HIPAA-aware patterns
6. **Infra & Tooling** — Vercel, Cloudflare, AWS, GitHub Actions, Vitest, Playwright

### Layout

```
[STACK // TOOLS WE REACH FOR]
H1: "Tools, frameworks, and platforms we ship with."
Sub: Short paragraph framing how the studio chooses tools.

[FRONTEND]
  <tag><tag><tag><tag><tag>

[BACKEND]
  <tag><tag><tag><tag>

(...one section per group, separated by border-rule hairlines...)

CTA at bottom → /contact
```

Each tag uses the chip style already on case cards (mono, small, bordered).

### Data shape (in `lib/content.ts`)

```ts
export type StackGroup = { label: string; items: string[] };

export const stackGroups: StackGroup[] = [
  { label: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind", "Motion", "MDX"] },
  // ...
];
```

### Metadata

```ts
export const metadata: Metadata = {
  title: "Stack",
  description: "Tools, frameworks, and platforms Craft Crew ships with — frontend, backend, AI, e-commerce, healthcare, and infra.",
};
```

---

## 3. Testimonials Section (home page)

**Component:** `components/site/testimonials.tsx`
**Placement:** Between `[01] Work` and current Services on `app/page.tsx`.
**Layout:** Three-card grid, equal weight (chosen in brainstorm).

### Result on the home page

Section numbering shifts:

| Current      | New          |
|--------------|--------------|
| [01] Work    | [01] Work    |
| [02] Services | **[02] Voices** |
| [03] Process | [03] Services |
| [04] Next    | [04] Process |
|              | [05] Next    |

Five numbered sections total. The `[NN]` strings live in the section JSX — they're updated in place.

### Component shape

```tsx
<section id="voices" className="relative py-20 md:py-28 border-t border-rule">
  <div className="container-page">
    [02] VOICES
    <h2>What agencies and clients say after we ship.</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule">
      {testimonials.map(t => <TestimonialCard ... />)}
    </div>
  </div>
</section>
```

Each card layout, top to bottom:

1. Italic quote (3–4 lines of body copy in mono, opening with a small `"` glyph)
2. Hairline rule (`border-t border-rule`)
3. Name on its own line (mono, full opacity)
4. `Role · Company` on the next line (mono, dimmed)

Same `bg-ink` over `bg-rule` gutter trick used by Services so the dividers look like hairlines rather than borders.

### Data shape (in `lib/content.ts`)

```ts
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  { quote: "...", name: "...", role: "...", company: "..." },
  { quote: "...", name: "...", role: "...", company: "..." },
  { quote: "...", name: "...", role: "...", company: "..." },
];
```

Three placeholder entries with realistic-sounding but clearly synthetic names. User swaps to real quotes by editing this array.

---

## 4. Navigation & Sitemap

### Header (`components/site/header.tsx`)

Current nav: `work, services, process, contact` (4 links)
New nav: `work, about, services, stack, contact` (5 links)

Order matters: `about` follows `work` (story right after proof); `stack` follows `services` (proof of capability right after the offering). Header already responsive — five mono labels fit comfortably above sm breakpoint.

### Footer (`components/site/footer.tsx`)

`[SITE]` list gains two entries: `About` and `Stack`. Inserted in the same order as the header.

### Sitemap (`app/sitemap.ts`)

Add two entries:

```ts
{ url: `${base}/about`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
{ url: `${base}/stack`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
```

---

## Testing

This is a static portfolio with no business logic worth unit-testing. Verification is visual:

1. `npm run dev`, open each new route, check it renders without hydration warnings.
2. Tab through each page — keyboard focus visible on every interactive element.
3. Lighthouse on `/about` and `/stack` — both should hit the same 95+ as the home page.
4. Mobile viewport at 375px — no horizontal overflow, sidebar identity card on `/about` stacks below bio.

No automated tests required for this change.

## Non-Goals

- No CMS integration. Content is in `lib/content.ts` and case-study MDX files.
- No real-time / dynamic content (no blog, no "now" page in this round).
- No image of Nour required to ship — placeholder block is acceptable until a photo is provided.
- No backend or form submission changes — Testimonials is read-only, Contact page already exists.

## Open Items

The user fills in the actual values for these before launch — the spec only defines the structure:

- Bio paragraph wording
- Three principles (final phrasing)
- Three timeline entries (years + text)
- Optional photo at `public/me.jpg`
- Final tech-stack item lists per group (defaults provided above as a starting point)
- Three placeholder testimonials (defaults provided above)