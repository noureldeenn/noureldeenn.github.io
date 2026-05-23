import Link from "next/link";
import { siteMeta } from "@/lib/meta";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative z-10 border-t border-rule mt-32 bg-ink"
    >
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <div className="font-mono text-[10px] text-paper-dim tracking-widest mb-3">
              [CONTACT]
            </div>
            <a
              href={`mailto:${siteMeta.email}`}
              className="block font-mono text-sm text-paper hover:text-ember transition-colors mb-2"
            >
              {siteMeta.email}
            </a>
            <a
              href={siteMeta.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block font-mono text-sm text-paper-dim hover:text-ember transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
          <div>
            <div className="font-mono text-[10px] text-paper-dim tracking-widest mb-3">
              [SITE]
            </div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#work"
                  className="font-mono text-sm text-paper-dim hover:text-ember transition-colors"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-mono text-sm text-paper-dim hover:text-ember transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="font-mono text-sm text-paper-dim hover:text-ember transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/stack"
                  className="font-mono text-sm text-paper-dim hover:text-ember transition-colors"
                >
                  Stack
                </Link>
              </li>
              <li>
                <Link
                  href="/#process"
                  className="font-mono text-sm text-paper-dim hover:text-ember transition-colors"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-mono text-sm text-paper-dim hover:text-ember transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-[10px] text-paper-dim tracking-widest mb-3">
              [STUDIO]
            </div>
            <p className="font-mono text-sm text-paper-dim leading-relaxed">
              Independent studio.
              <br />
              Built in {siteMeta.location.split(",")[0]}.
              <br />
              Shipped with Next.js.
            </p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-rule flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-mono text-[10px] text-paper-dim tracking-widest">
            © {new Date().getFullYear()} NOUR BADR. ALL WORK RESERVED.
          </p>
          <p className="font-mono text-[10px] text-paper-dim tracking-widest">
            v1.0 / 2026
          </p>
        </div>
      </div>
    </footer>
  );
}