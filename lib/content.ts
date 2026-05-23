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
  { year: "2025", text: "Studio model — independent, with collaborators on call." },
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
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Delivered on the timeline he promised. Twice. We route our hardest builds to him now.",
  },
  {
    quote:
      "The kind of contractor you forget is contracted. Communicates, ships, and the code looks like ours wrote it.",
  },
  {
    quote:
      "Picked up our messy WordPress migration and got us on Next.js without anyone on the editorial team noticing. Two years on, still ships from that codebase.",
  },
];