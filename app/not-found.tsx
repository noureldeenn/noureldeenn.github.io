import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page py-32 md:py-48">
      <div className="flex items-center gap-3 mb-8">
        <span className="block w-8 h-px bg-ember" />
        <span className="font-mono text-[10px] tracking-widest text-paper-dim">
          [404 / NOT FOUND]
        </span>
      </div>
      <h1 className="font-mono text-4xl md:text-6xl font-medium tracking-tight text-paper max-w-2xl">
        This entry isn&apos;t in the index.
      </h1>
      <p className="mt-6 text-paper-dim max-w-md leading-relaxed">
        The page you&apos;re looking for might have moved, or it never existed.
        Head back to the home page to find what you need.
      </p>
      <div className="mt-10">
        <Link
          href="/"
          className="font-mono text-sm text-ember underline underline-offset-4"
        >
          ← Back to index
        </Link>
      </div>
    </section>
  );
}