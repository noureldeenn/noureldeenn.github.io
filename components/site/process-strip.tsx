const steps = [
  {
    label: "BRIEF",
    description:
      "We unpack the goal, the audience, and the constraint. Written brief, no surprises.",
  },
  {
    label: "PLAN",
    description:
      "Scope, milestones, stack. Fixed-fee or hourly — whichever fits your agency model.",
  },
  {
    label: "BUILD",
    description:
      "Daily progress via your tool of choice. Slack, Linear, or shared Notion.",
  },
  {
    label: "SHIP",
    description:
      "QA, Lighthouse pass, handoff docs. Plus a 14-day warranty on every build.",
  },
];

export function ProcessStrip() {
  return (
    <section
      id="process"
      className="relative py-20 md:py-28 border-t border-rule"
    >
      <div className="container-page">
        <div className="flex items-center gap-3 mb-12">
          <span className="block w-8 h-px bg-ember" />
          <span className="font-mono text-[10px] tracking-widest text-paper-dim">
            [04] PROCESS
          </span>
        </div>
        <h2 className="font-mono text-3xl md:text-5xl font-medium tracking-tight text-paper max-w-2xl mb-16">
          A predictable shipping cadence.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-rule">
          {steps.map((step, i) => (
            <div
              key={step.label}
              className="bg-ink p-6 md:p-8 group hover:bg-ink-soft transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] tracking-widest text-ember">
                  STEP {String(i + 1).padStart(2, "0")}
                </span>
                {i < steps.length - 1 && (
                  <span className="font-mono text-ember/40 hidden md:inline">
                    →
                  </span>
                )}
              </div>
              <h3 className="font-mono text-2xl text-paper font-medium tracking-tight mb-3">
                {step.label}
              </h3>
              <p className="text-paper-dim text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}