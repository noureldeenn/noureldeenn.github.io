import { Button } from "@/components/ui/button";
import { siteMeta } from "@/lib/meta";

export function CtaBlock() {
  return (
    <section
      id="brief"
      className="relative py-24 md:py-32 border-t border-rule overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(255, 90, 31, 0.35), transparent 60%)",
        }}
      />
      <div className="container-page relative">
        <div className="flex items-center gap-3 mb-10">
          <span className="block w-8 h-px bg-ember" />
          <span className="font-mono text-[10px] tracking-widest text-paper-dim">
            [05] NEXT
          </span>
        </div>
        <h2 className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.02em] leading-[1.05] text-paper max-w-4xl">
          Have a project that needs <span className="text-ember">hands</span>?
        </h2>
        <p className="mt-8 max-w-xl text-paper-dim text-base md:text-lg leading-relaxed">
          Open a brief. We&apos;ll reply within one business day with availability,
          a rough estimate, and a few questions.
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <Button href="/contact" size="lg">
            Open a brief →
          </Button>
          <Button
            href={`mailto:${siteMeta.email}`}
            variant="ghost"
            size="lg"
          >
            {siteMeta.email}
          </Button>
        </div>
      </div>
    </section>
  );
}