export type CaseStudyMeta = {
  slug: string;
  title: string;
  client: string;
  year: number;
  duration: string;
  role: string;
  stack: string[];
  outcome: string;
  outcomeLabel: string;
  liveUrl: string | null;
  tags: string[];
  summary: string;
};

export const caseStudies: CaseStudyMeta[] = [
  {
    slug: "shopify-checkout-rebuild",
    title: "Shopify Checkout Rebuild",
    client: "Beauty DTC Brand",
    year: 2025,
    duration: "3 weeks",
    role: "Lead developer",
    stack: ["Shopify", "Hydrogen", "Stripe", "TypeScript"],
    outcome: "+14%",
    outcomeLabel: "checkout conversion",
    liveUrl: null,
    tags: ["E-commerce", "Conversion"],
    summary:
      "Rebuilt a broken Shopify checkout flow into a fast, mobile-first experience. Lifted conversion by 14 percent over baseline.",
  },
  {
    slug: "saas-marketing-site",
    title: "Marketing Site for B2B SaaS",
    client: "Series-A SaaS",
    year: 2025,
    duration: "4 weeks",
    role: "Lead developer",
    stack: ["Next.js", "Sanity", "Vercel", "Tailwind"],
    outcome: "98",
    outcomeLabel: "Lighthouse score",
    liveUrl: null,
    tags: ["SaaS", "Marketing"],
    summary:
      "Designed and shipped a marketing site with editorial CMS and integrated waitlist funnel. Hit a 98 Lighthouse score across all pages.",
  },
  {
    slug: "ai-support-copilot",
    title: "AI Support Copilot for SaaS",
    client: "B2B SaaS platform",
    year: 2025,
    duration: "5 weeks",
    role: "Lead developer",
    stack: ["Next.js", "Claude", "Pinecone", "Postgres"],
    outcome: "−62%",
    outcomeLabel: "first-response time",
    liveUrl: null,
    tags: ["AI", "Automation"],
    summary:
      "Built a retrieval-augmented support copilot that drafts replies grounded in the product's own docs and ticket history. Cut first-response time by 62 percent.",
  },
];

export function getCaseStudy(slug: string): CaseStudyMeta | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getAdjacentStudies(slug: string) {
  const idx = caseStudies.findIndex((c) => c.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? caseStudies[idx - 1] : null,
    next: idx < caseStudies.length - 1 ? caseStudies[idx + 1] : null,
  };
}