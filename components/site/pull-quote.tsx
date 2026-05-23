type Props = {
  children: React.ReactNode;
  attribution?: string;
};

export function PullQuote({ children, attribution }: Props) {
  return (
    <div className="container-page py-24 md:py-32">
      <figure className="max-w-3xl mx-auto text-center">
        <span aria-hidden className="block text-ember font-serif text-5xl leading-none mb-6">
          &ldquo;
        </span>
        <blockquote className="font-serif italic text-3xl md:text-5xl leading-[1.2] text-paper">
          {children}
        </blockquote>
        {attribution && (
          <figcaption className="mt-8 font-mono text-[11px] tracking-widest text-paper-dim">
            — {attribution}
          </figcaption>
        )}
      </figure>
    </div>
  );
}