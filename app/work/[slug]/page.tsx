import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, getCaseStudy, getAdjacentStudies } from "@/lib/work";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.summary,
  };
}

async function loadStudyContent(slug: string) {
  switch (slug) {
    case "shopify-checkout-rebuild":
      return (await import("@/content/work/shopify-checkout-rebuild.mdx"))
        .default;
    case "saas-marketing-site":
      return (await import("@/content/work/saas-marketing-site.mdx")).default;
    case "ai-support-copilot":
      return (await import("@/content/work/ai-support-copilot.mdx")).default;
    default:
      return null;
  }
}

export default async function CaseStudyPage({ params }: { params: Params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  const Content = await loadStudyContent(slug);

  if (!study || !Content) notFound();

  const { prev, next } = getAdjacentStudies(slug);
  const idx = caseStudies.findIndex((c) => c.slug === slug);
  const entryNum = String(idx + 1).padStart(2, "0");

  return (
    <article className="relative">
      <header className="container-page pt-12 md:pt-16 pb-12 border-b border-rule">
        <Link
          href="/#work"
          className="inline-block font-mono text-xs text-paper-dim hover:text-ember transition-colors mb-10"
        >
          ← BACK TO INDEX
        </Link>
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-8 h-px bg-ember" />
          <span className="font-mono text-[10px] tracking-widest text-ember">
            [ENTRY {entryNum} // {study.year}]
          </span>
        </div>
        <h1 className="font-mono text-3xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.02em] leading-[1.05] text-paper max-w-4xl">
          {study.title}
        </h1>
        <p className="mt-8 max-w-2xl text-paper-dim text-base md:text-lg leading-relaxed">
          {study.summary}
        </p>
      </header>

      <div className="container-page py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <aside className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <div className="border border-rule p-6 md:p-7 bg-ink-soft/40">
              <div className="font-mono text-[10px] tracking-widest text-paper-dim mb-5">
                [METADATA]
              </div>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-rule pb-2">
                  <dt className="font-mono text-paper-dim text-xs">client</dt>
                  <dd className="font-mono text-paper">{study.client}</dd>
                </div>
                <div className="flex justify-between border-b border-rule pb-2">
                  <dt className="font-mono text-paper-dim text-xs">year</dt>
                  <dd className="font-mono text-paper">{study.year}</dd>
                </div>
                <div className="flex justify-between border-b border-rule pb-2">
                  <dt className="font-mono text-paper-dim text-xs">duration</dt>
                  <dd className="font-mono text-paper">{study.duration}</dd>
                </div>
                <div className="flex justify-between border-b border-rule pb-2">
                  <dt className="font-mono text-paper-dim text-xs">role</dt>
                  <dd className="font-mono text-paper">{study.role}</dd>
                </div>
              </dl>

              <div className="mt-6 pt-5 border-t border-rule">
                <div className="font-mono text-[10px] tracking-widest text-paper-dim mb-3">
                  STACK
                </div>
                <ul className="space-y-1.5">
                  {study.stack.map((s) => (
                    <li
                      key={s}
                      className="font-mono text-xs text-paper before:content-['→'] before:text-ember before:mr-2"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-5 border-t border-rule">
                <div className="font-mono text-[10px] tracking-widest text-paper-dim mb-2">
                  OUTCOME
                </div>
                <div className="font-mono text-3xl text-ember tracking-tight">
                  {study.outcome}
                </div>
                <div className="font-mono text-xs text-paper-dim mt-1">
                  {study.outcomeLabel}
                </div>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <div className="prose-craft">
              <Content />
            </div>
          </div>
        </div>
      </div>

      <nav className="container-page pb-24 pt-12 border-t border-rule">
        <div className="grid grid-cols-2 gap-4">
          <div>
            {prev && (
              <Link
                href={`/work/${prev.slug}`}
                className="block group"
              >
                <div className="font-mono text-[10px] tracking-widest text-paper-dim mb-2">
                  ← PREVIOUS ENTRY
                </div>
                <div className="font-mono text-base md:text-lg text-paper group-hover:text-ember transition-colors">
                  {prev.title}
                </div>
              </Link>
            )}
          </div>
          <div className="text-right">
            {next && (
              <Link
                href={`/work/${next.slug}`}
                className="block group"
              >
                <div className="font-mono text-[10px] tracking-widest text-paper-dim mb-2">
                  NEXT ENTRY →
                </div>
                <div className="font-mono text-base md:text-lg text-paper group-hover:text-ember transition-colors">
                  {next.title}
                </div>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </article>
  );
}