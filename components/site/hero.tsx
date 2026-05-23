"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { siteMeta } from "@/lib/meta";

const headline = "Independent studio building digital products for ambitious teams.";

const container = {
  hidden: { opacity: 1 },
  visible: {
    transition: { staggerChildren: 0.018, delayChildren: 0.15 },
  },
};

const word = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section className="relative pt-20 md:pt-28 pb-16 md:pb-24">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-8 h-px bg-ember" />
              <span className="font-mono text-[10px] tracking-widest text-paper-dim">
                [STUDIO // 2026]
              </span>
            </div>

            <motion.h1
              variants={container}
              initial="hidden"
              animate="visible"
              className="font-mono text-[2.1rem] sm:text-5xl lg:text-[4.25rem] leading-[1.05] tracking-[-0.02em] font-medium text-paper max-w-4xl"
              aria-label={headline}
            >
              {headline.split(" ").map((w, i) => (
                <span key={i} className="inline-block">
                  {w.split("").map((c, j) => (
                    <motion.span
                      key={`${i}-${j}`}
                      variants={word}
                      className="inline-block"
                    >
                      {c}
                    </motion.span>
                  ))}
                  {i < headline.split(" ").length - 1 && (
                    <span className="inline-block">&nbsp;</span>
                  )}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="mt-8 max-w-2xl text-paper-dim text-base md:text-lg leading-relaxed"
            >
              Full-stack web development for ambitious teams. We design and
              ship Next.js apps, Shopify and Zid storefronts, AI agents, and
              healthcare platforms — on your brand, on your timeline.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button href="/contact" size="lg">
                Open a brief →
              </Button>
              <Button href="/#work" variant="ghost" size="lg">
                See selected work
              </Button>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="lg:col-span-4 lg:mt-2"
          >
            <div className="border border-rule p-6 md:p-7 bg-ink-soft/40 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[10px] tracking-widest text-paper-dim">
                  [IDENTITY]
                </span>
                <span className="flex items-center gap-2">
                  <span className="ember-dot block w-2 h-2 rounded-full bg-ember" />
                  <span className="font-mono text-[10px] tracking-widest text-ember">
                    BOOKING Q3
                  </span>
                </span>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-baseline border-b border-rule pb-3">
                  <span className="font-mono text-paper-dim text-xs">
                    location
                  </span>
                  <span className="font-mono text-paper">
                    {siteMeta.location}
                  </span>
                </div>
                <div className="flex justify-between items-baseline border-b border-rule pb-3">
                  <span className="font-mono text-paper-dim text-xs">
                    shipped
                  </span>
                  <span className="font-mono text-paper">12+ projects</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-rule pb-3">
                  <span className="font-mono text-paper-dim text-xs">
                    building
                  </span>
                  <span className="font-mono text-paper">5+ years</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="font-mono text-paper-dim text-xs">
                    agencies
                  </span>
                  <span className="font-mono text-paper">4 served</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-rule">
                <p className="font-mono text-[11px] text-paper-dim leading-relaxed">
                  NDA-friendly. No client contact.
                  <br />
                  48h turnaround on small tasks.
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}