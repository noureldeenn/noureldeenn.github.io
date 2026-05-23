import { Hero } from "@/components/site/hero";
import { CaseCard } from "@/components/site/case-card";
import { ServiceCard } from "@/components/site/service-card";
import { PullQuote } from "@/components/site/pull-quote";
import { ProcessStrip } from "@/components/site/process-strip";
import { CtaBlock } from "@/components/site/cta-block";
import { Testimonials } from "@/components/site/testimonials";
import { caseStudies } from "@/lib/work";

const services = [
  {
    title: "Full-Stack Web Apps",
    description:
      "Production Next.js apps, dashboards, and internal tools. Type-safe end to end, RSC-first for speed, and Lighthouse scores that hold up in audits.",
    stack: ["Next.js", "React", "TypeScript", "Postgres", "Tailwind"],
  },
  {
    title: "E-commerce (Shopify & Zid)",
    description:
      "Shopify themes, Hydrogen storefronts, and Zid stores for the KSA market. We focus on checkout, performance, and the boring details that move conversion.",
    stack: ["Shopify", "Hydrogen", "Zid", "Stripe"],
  },
  {
    title: "AI Agents & Automation",
    description:
      "Agentic workflows, internal copilots, and RAG systems wired into your stack. Claude, OpenAI, vector DBs, and the orchestration around them.",
    stack: ["Claude", "OpenAI", "LangChain", "Pinecone", "Node"],
  },
  {
    title: "Healthcare & Medical Apps",
    description:
      "Patient portals, clinic dashboards, and telehealth flows. Built for real clinical workflows with HIPAA-aware data handling and accessible UI.",
    stack: ["Next.js", "FHIR", "HL7", "Postgres", "AWS"],
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section
        id="work"
        className="relative py-16 md:py-24 border-t border-rule"
      >
        <div className="container-page">
          <div className="flex items-center gap-3 mb-12">
            <span className="block w-8 h-px bg-ember" />
            <span className="font-mono text-[10px] tracking-widest text-paper-dim">
              [01] SELECTED WORKS
            </span>
          </div>
          <h2 className="font-mono text-3xl md:text-5xl font-medium tracking-tight text-paper max-w-3xl mb-12">
            Recent engagements with agencies and brands.
          </h2>
          <div>
            {caseStudies.map((study, i) => (
              <CaseCard key={study.slug} study={study} index={i} />
            ))}
            <div className="border-t border-rule" />
          </div>
        </div>
      </section>

      <Testimonials />

      <section
        id="services"
        className="relative py-20 md:py-28 border-t border-rule"
      >
        <div className="container-page">
          <div className="flex items-center gap-3 mb-12">
            <span className="block w-8 h-px bg-ember" />
            <span className="font-mono text-[10px] tracking-widest text-paper-dim">
              [03] SERVICES
            </span>
          </div>
          <h2 className="font-mono text-3xl md:text-5xl font-medium tracking-tight text-paper max-w-3xl mb-16">
            What we build, end-to-end.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-px bg-rule">
            {services.map((s, i) => (
              <div key={s.title} className="bg-ink">
                <ServiceCard
                  index={i}
                  title={s.title}
                  description={s.description}
                  stack={s.stack}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <PullQuote attribution="Studio principle, 2026">
        We don&apos;t sell hours. We ship outcomes.
      </PullQuote>

      <ProcessStrip />

      <CtaBlock />
    </>
  );
}