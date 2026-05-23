import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-mono text-3xl md:text-4xl font-medium text-paper mt-12 mb-6 tracking-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-mono text-xl md:text-2xl font-medium text-paper mt-10 mb-4 tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-mono text-lg font-medium text-paper mt-8 mb-3">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-paper-dim leading-relaxed mb-5 text-[15px] md:text-base">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="space-y-2 mb-6 list-none pl-0">{children}</ul>
    ),
    li: ({ children }) => (
      <li className="text-paper-dim leading-relaxed text-[15px] md:text-base pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-ember">
        {children}
      </li>
    ),
    strong: ({ children }) => (
      <strong className="text-paper font-medium">{children}</strong>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-ember underline underline-offset-4 decoration-1 hover:decoration-2"
      >
        {children}
      </a>
    ),
    ...components,
  };
}