import Link from "next/link";

const navLinks = [
  { label: "work", href: "/#work" },
  { label: "about", href: "/about" },
  { label: "services", href: "/#services" },
  { label: "stack", href: "/stack" },
  { label: "contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-ink/85 backdrop-blur-md border-b border-rule">
      <div className="container-page flex items-center justify-between py-4">
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-mono text-[15px] font-medium tracking-tight text-paper">
            NOUR
          </span>
          <span className="font-mono text-[15px] font-medium tracking-tight text-ember">
            BADR
          </span>
          <span className="font-mono text-[10px] text-paper-dim ml-1 hidden sm:inline">
            /studio
          </span>
        </Link>
        <nav>
          <ul className="flex items-center gap-1 md:gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-mono text-xs text-paper-dim hover:text-ember px-2 md:px-3 py-1.5 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}