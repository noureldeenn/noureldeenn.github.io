import type { Metadata } from "next";
import { ContactForm } from "@/components/site/contact-form";
import { siteMeta } from "@/lib/meta";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Open a brief. Get availability, a rough estimate, and a few questions back within one business day.",
};

export default function ContactPage() {
  return (
    <section className="relative pt-20 md:pt-28 pb-24 md:pb-32">
      <div className="container-page">
        <div className="flex items-center gap-3 mb-8">
          <span className="block w-8 h-px bg-ember" />
          <span className="font-mono text-[10px] tracking-widest text-paper-dim">
            [CONTACT // OPEN A BRIEF]
          </span>
        </div>

        <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.02em] leading-[1.05] text-paper max-w-3xl">
          Tell us what you&apos;re <span className="text-ember">building</span>.
        </h1>

        <p className="mt-8 max-w-2xl text-paper-dim text-base md:text-lg leading-relaxed">
          A few details up front let us reply with something useful: rough
          availability, an honest estimate, and the questions we&apos;d need to
          answer before quoting.
        </p>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-8">
            <ContactForm />
          </div>

          <aside className="lg:col-span-4 lg:mt-2">
            <div className="border border-rule p-6 md:p-7 bg-ink-soft/40 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[10px] tracking-widest text-paper-dim">
                  [DIRECT]
                </span>
                <span className="flex items-center gap-2">
                  <span className="block w-2 h-2 rounded-full bg-ember" />
                  <span className="font-mono text-[10px] tracking-widest text-ember">
                    BOOKING Q3
                  </span>
                </span>
              </div>

              <a
                href={`mailto:${siteMeta.email}`}
                className="block font-mono text-sm text-paper hover:text-ember transition-colors break-all"
              >
                {siteMeta.email}
              </a>

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
                    response
                  </span>
                  <span className="font-mono text-paper">≤ 1 business day</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="font-mono text-paper-dim text-xs">
                    nda
                  </span>
                  <span className="font-mono text-paper">on request</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-rule">
                <a
                  href={siteMeta.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-paper-dim hover:text-ember transition-colors"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            <p className="mt-6 font-mono text-[11px] leading-relaxed text-paper-dim">
              Prefer email? Send anything — brief, deck, half-baked idea. We
              reply to all of it.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}