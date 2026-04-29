import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#07080d]/75 backdrop-blur">
      <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-sm font-semibold tracking-wide text-white">
            Oishik Biswas
          </Link>

          <details className="mobile-nav-menu relative sm:hidden">
            <summary
              aria-label="Toggle navigation menu"
              className="mobile-nav-menu-button inline-flex h-10 w-10 list-none items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white transition-colors hover:border-cyan-200/40 hover:bg-cyan-200/10"
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
              className="absolute right-0 top-12 grid min-w-48 gap-1 rounded-lg border border-white/10 bg-[#090b12]/95 p-2 shadow-2xl shadow-black/30"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm text-gray-300 transition-colors hover:bg-white/[0.04] hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </details>

          <div className="hidden flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400 sm:flex sm:justify-end">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
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
