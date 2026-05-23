// components/site/testimonials.tsx
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section
      id="voices"
      className="relative py-16 md:py-24 border-t border-rule"
    >
      <div className="container-page">
        <div className="flex items-center gap-3 mb-12">
          <span className="block w-8 h-px bg-ember" />
          <span className="font-mono text-[10px] tracking-widest text-paper-dim">
            [02] VOICES
          </span>
        </div>
        <h2 className="font-mono text-3xl md:text-5xl font-medium tracking-tight text-paper max-w-3xl mb-12">
          What agencies and clients say after we ship.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule">
          {testimonials.map((t) => (
            <figure
              key={t.quote}
              className="bg-ink p-6 md:p-8 flex flex-col"
            >
              <span
                aria-hidden
                className="font-mono text-2xl text-ember/60 leading-none mb-4"
              >
                &ldquo;
              </span>
              <blockquote className="text-paper text-sm md:text-[15px] leading-relaxed italic">
                {t.quote}
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}