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
    "Independent developer. Six years building full-stack web apps, AI agents, e-commerce, and healthcare platforms.",
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
              {aboutBio.map((para) => (
                <p
                  key={para}
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