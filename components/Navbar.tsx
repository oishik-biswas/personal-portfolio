import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <nav className="page-pop sticky top-3 z-50 px-3 sm:top-4">
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-[#05070b]/80 px-3 py-3 shadow-[0_18px_55px_rgba(0,0,0,0.35)] ring-1 ring-white/[0.04] backdrop-blur-xl sm:px-4">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-full py-1 pr-2 text-sm font-semibold tracking-wide text-white transition-colors hover:text-cyan-100"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-200/40 bg-cyan-200/10 text-xs text-cyan-100 shadow-[0_0_22px_rgba(34,211,238,0.14)]">
              OB
            </span>
            <span>Oishik Biswas</span>
          </Link>

          <details className="mobile-nav-menu relative sm:hidden">
            <summary
              aria-label="Toggle navigation menu"
              className="mobile-nav-menu-button inline-flex h-10 w-10 list-none items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:border-cyan-200/40 hover:bg-cyan-200/10"
            >
              <span className="sr-only">Menu</span>
              <span className="flex h-4 w-5 flex-col justify-between">
                <span className="mobile-nav-menu-line h-0.5 w-full rounded-full bg-current transition-transform" />
                <span className="mobile-nav-menu-line h-0.5 w-full rounded-full bg-current transition-opacity" />
                <span className="mobile-nav-menu-line h-0.5 w-full rounded-full bg-current transition-transform" />
              </span>
            </summary>

            <div
              id="mobile-navbar"
              className="absolute right-0 top-12 grid min-w-52 gap-1 rounded-xl border border-white/10 bg-[#070a10]/95 p-2 shadow-2xl shadow-black/40 ring-1 ring-white/[0.04] backdrop-blur-xl"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm text-gray-300 transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </details>

          <div className="hidden flex-wrap items-center gap-1 text-sm text-gray-400 sm:flex sm:justify-end">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-transparent px-3 py-2 transition-colors hover:border-white/10 hover:bg-white/[0.05] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
