import Link from "next/link";

const highlights = [
  "Java",
  "Spring Boot",
  "Activiti",
  "Python",
  "SQL",
  "Angular",
  "React",
  "Next.js",
];

export default function Hero() {
  return (
    <section className="flex flex-col items-center pt-14 text-center sm:pt-20">
      <p className="mb-5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
        Software Engineer
      </p>

      <h1 className="mb-4 flex max-w-4xl flex-wrap items-center justify-center gap-2 text-4xl font-bold leading-tight text-white sm:gap-3 sm:text-5xl md:text-6xl">
        <span className="text-gray-500">I&apos;m</span>
        <span className="text-white">Oishik Biswas</span>
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-200/70 bg-cyan-300/10 text-base font-semibold text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.18)] sm:h-14 sm:w-14">
          OB
        </div>
        <span className="text-gray-500">,</span>
      </h1>

      <h2 className="mb-8 flex max-w-4xl flex-wrap items-center justify-center gap-2 text-3xl font-bold leading-tight sm:gap-3 sm:text-5xl md:text-6xl">
        <span className="text-white">Backend & full-stack</span>
        <span className="text-gray-500">engineer based in</span>
        <span className="text-white">India</span>
      </h2>

      <p className="mb-8 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
        I build Java, Spring Boot, and Activiti services for banking workflows,
        with hands-on experience in Python and SQL automation, Angular
        dashboards, and React/Next.js product interfaces.
      </p>

      <div className="mb-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
        <Link
          href="/#contact"
          className="rounded-full border border-cyan-200/30 bg-cyan-200/10 px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-cyan-200/15"
        >
          Let&apos;s talk
        </Link>
        <Link
          href="/#projects"
          className="rounded-full border border-white/10 px-6 py-3 text-center text-sm font-medium text-gray-300 transition-colors hover:border-white/20 hover:text-white"
        >
          View projects
        </Link>
      </div>

      <div className="flex max-w-3xl flex-wrap justify-center gap-2">
        {highlights.map((item) => (
          <span
            key={item}
            className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-300"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
