import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#streaks", label: "Streaks" },
  { href: "/#experience", label: "Background" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="page-pop sticky top-3 z-50 px-3 sm:top-4">
      <div className="nav-panel mx-auto max-w-5xl px-3 py-3 sm:px-4">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="brand-link inline-flex items-center gap-3 py-1 pr-2 text-sm font-semibold"
          >
            <span className="brand-mark flex h-9 w-9 items-center justify-center rounded-full text-xs">
              OB
            </span>
            <span>Oishik Biswas</span>
          </Link>

          <div className="flex items-center gap-2">
            <div className="hidden flex-wrap items-center gap-1 text-sm sm:flex sm:justify-end">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </Link>
              ))}
              <Link
                href="https://linktr.ee/oishikbiswas"
                target="_blank"
                rel="noreferrer"
                className="nav-link"
              >
                Linktree
              </Link>
            </div>

            <ThemeToggle />

            <details className="mobile-nav-menu relative sm:hidden">
              <summary
                aria-label="Toggle navigation menu"
                className="mobile-nav-menu-button inline-flex h-10 w-10 list-none items-center justify-center rounded-full"
              >
                <span className="sr-only">Menu</span>
                <span className="flex h-4 w-5 flex-col justify-between">
                  <span className="mobile-nav-menu-line h-0.5 w-full rounded-full bg-current transition-transform" />
                  <span className="mobile-nav-menu-line h-0.5 w-full rounded-full bg-current transition-opacity" />
                  <span className="mobile-nav-menu-line h-0.5 w-full rounded-full bg-current transition-transform" />
                </span>
              </summary>

              <div id="mobile-navbar" className="mobile-nav-panel">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="nav-link">
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="https://linktr.ee/oishikbiswas"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link"
                >
                  Linktree
                </Link>
              </div>
            </details>
          </div>
        </div>
      </div>
    </nav>
  );
}
