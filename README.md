# Nour Badr Portfolio

Independent developer portfolio. Built with Next.js 15, Tailwind v4, Motion, and MDX.

## Quick start

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Project layout

```
portfolio/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Home (/)
│   ├── work/[slug]/page.tsx      # Case study detail (/work/<slug>)
│   ├── layout.tsx                # Root layout, fonts, meta
│   ├── globals.css               # Tailwind v4 + design tokens
│   ├── sitemap.ts                # /sitemap.xml
│   ├── robots.ts                 # /robots.txt
│   └── not-found.tsx             # 404
├── components/
│   ├── site/                     # Page sections (Hero, CaseCard, etc.)
│   ├── ui/                       # Primitives (Button)
│   └── decorative/               # DotGrid background
├── content/work/                 # MDX case studies (one per slug)
├── lib/
│   ├── meta.ts                   # Site metadata, contact, booking URL
│   └── work.ts                   # Case study frontmatter + helpers
├── mdx-components.tsx            # Global MDX component overrides
├── netlify.toml                  # Netlify build config
└── next.config.mjs               # MDX integration
```

## Editing content

### Update site metadata, email, booking link

Edit [lib/meta.ts](lib/meta.ts). Single source of truth for the site name,
description, email, Cal.com URL, and social links.

### Add or replace a case study

Two steps:

1. **Add a frontmatter entry** in [lib/work.ts](lib/work.ts) — append a new
   object to the `caseStudies` array with `slug`, `title`, `outcome`, etc.
2. **Add an MDX file** at `content/work/<slug>.mdx` with the body copy
   (Problem / Approach / Outcome sections).
3. **Register the import** in [app/work/\[slug\]/page.tsx](app/work/[slug]/page.tsx)
   — add a new `case` to the `loadStudyContent` switch (Next.js can't resolve
   fully-dynamic MDX imports, so each slug needs an explicit case).

To remove a placeholder, delete its entry in `lib/work.ts`, its MDX file,
and its case in the switch.

### Change brand colors or fonts

Edit `@theme` block at the top of [app/globals.css](app/globals.css). Tokens:

| Token | Use |
|---|---|
| `--color-ink` | Page background (near-black) |
| `--color-paper` | Primary text (warm parchment) |
| `--color-paper-dim` | Secondary text |
| `--color-rule` | Dividers, borders |
| `--color-ember` | Accent (orange) |

Fonts load via `next/font/google` in [app/layout.tsx](app/layout.tsx). Swap the
imports to change typography globally.

## Deploy to Netlify

1. Initialize git and push to a private GitHub repo.
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Connect the repo at [app.netlify.com](https://app.netlify.com).
3. Netlify auto-detects Next.js and installs `@netlify/plugin-nextjs`.
4. First deploy takes ~2 minutes. You get a free `<random>.netlify.app` URL.
5. Optional: add a custom domain (free, point your `.com` at Netlify's DNS).

No environment variables are required for v1.

## Performance budget

Lighthouse targets are baked into the implementation:

- LCP < 1.5s (hero image uses `priority` flag)
- Total JS < 80 KB gzipped on the home route
- TBT < 200ms (RSC by default, single client component for hero animation)
- AAA contrast on every text/background pair

After deploy, run a Lighthouse pass on mobile. If anything drops below 95,
the most common culprits are:

- Images larger than 80KB → re-export as WebP
- Third-party scripts → remove or lazy-load
- Hero animation regressing on slow devices → already capped, but consider
  removing if you see issues

## Stack reference

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router, RSC) |
| Styling | Tailwind v4 (CSS-first config) |
| Animation | Motion (formerly Framer Motion) |
| Content | MDX via `@next/mdx` |
| Fonts | next/font/google: JetBrains Mono + Geist + Instrument Serif |
| Deploy | Netlify (free tier) |
| Language | TypeScript |

## Updating the booking link

The CTA buttons link to `siteMeta.bookingUrl`. Replace the Cal.com placeholder
with your real link when ready.