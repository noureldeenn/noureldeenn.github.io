type ServiceProps = {
  index: number;
  title: string;
  description: string;
  stack: string[];
};

export function ServiceCard({ index, title, description, stack }: ServiceProps) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <div className="border border-rule p-6 md:p-8 hover:border-ember/60 transition-colors duration-300 group">
      <div className="font-mono text-xs tracking-widest text-ember mb-6">
        [{num}]
      </div>
      <h3 className="font-mono text-xl text-paper font-medium tracking-tight mb-3">
        {title}
      </h3>
      <p className="text-paper-dim text-sm leading-relaxed mb-6">
        {description}
      </p>
      <div className="pt-5 border-t border-rule">
        <div className="font-mono text-[10px] tracking-widest text-paper-dim mb-2">
          PRIMARY STACK
        </div>
        <ul className="flex flex-wrap gap-x-3 gap-y-1">
          {stack.map((s) => (
            <li key={s} className="font-mono text-xs text-paper">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}