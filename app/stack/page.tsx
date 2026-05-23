// app/stack/page.tsx
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { stackGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "Stack",
  description:
    "Tools, frameworks, and platforms we ship with — frontend, backend, AI, e-commerce, healthcare, and infra.",
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