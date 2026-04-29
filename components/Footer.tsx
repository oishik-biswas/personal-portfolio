import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#07080d]/80 backdrop-blur">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Contact
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              Let&apos;s build thoughtful software.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400">
              Based in India and focused on backend, full-stack, and
              automation-heavy engineering work across Java, Spring Boot,
              Activiti, Python, SQL, Angular, React, and Next.js.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-gray-400"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-gray-900 pt-5 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Oishik Biswas.</span>
          <span>Built with Next.js.</span>
        </div>
      </div>
    </footer>
  );
}
