import Link from "next/link";
import type { CaseStudyMeta } from "@/lib/work";

type Props = {
  study: CaseStudyMeta;
  index: number;
};

export function CaseCard({ study, index }: Props) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={`/work/${study.slug}`}
      className="group block border-t border-rule hover:border-ember transition-colors duration-300"
    >
      <article className="grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 items-start">
        <div className="col-span-12 md:col-span-1">
          <span className="font-mono text-xs tracking-widest text-ember">
            [{num}]
          </span>
        </div>

        <div className="col-span-12 md:col-span-5">
          <h3 className="font-mono text-xl md:text-2xl font-medium text-paper group-hover:text-ember transition-colors duration-300 tracking-tight">
            {study.title}
          </h3>
          <p className="mt-3 text-paper-dim text-sm leading-relaxed max-w-md">
            {study.summary}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] tracking-widest text-paper-dim border border-rule px-2 py-1"
              >
                {tag.toUpperCase()}
              </span>
            ))}
          </div>
        </div>

        <div className="col-span-6 md:col-span-3 mt-2 md:mt-0">
          <div className="font-mono text-[10px] tracking-widest text-paper-dim mb-2">
            STACK
          </div>
          <ul className="space-y-1">
            {study.stack.slice(0, 4).map((s) => (
              <li
                key={s}
                className="font-mono text-xs text-paper-dim"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-6 md:col-span-3 mt-2 md:mt-0 text-right md:text-left">
          <div className="font-mono text-[10px] tracking-widest text-paper-dim mb-2">
            OUTCOME
          </div>
          <div className="font-mono text-2xl md:text-3xl text-ember tracking-tight">
            {study.outcome}
          </div>
          <div className="font-mono text-[11px] text-paper-dim mt-1">
            {study.outcomeLabel}
          </div>
          <div className="mt-5 font-mono text-xs text-paper-dim group-hover:text-ember transition-colors">
            Read entry →
          </div>
        </div>
      </article>
    </Link>
  );
}