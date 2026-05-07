import Link from "next/link";

const highlights = [
  "DSA",
  "GATE Qualified",
  "Core CS",
  "Java",
  "Python",
  "MERN Stack",
  "Next.js",
  "Backend Systems",
  "System Design",
  "DBMS",
  "Operating Systems",
  "Problem Solving",
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
        <span className="text-white">Software Engineer</span>
        <span className="text-gray-500">based in</span>
        <span className="text-white">India</span>
      </h2>

      <p className="mb-8 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
        Strong in{" "}
        <span className="font-semibold text-white transition-all duration-300 hover:text-cyan-200">
          Data Structures & Algorithms
        </span>
        , qualified{" "}
        <span className="font-semibold text-white transition-all duration-300 hover:text-cyan-200">
          GATE on my first attempt
        </span>
        , and deeply grounded in{" "}
        <span className="font-semibold text-white transition-all duration-300 hover:text-cyan-200">
          operating systems, DBMS, OOP, and system design
        </span>
        . I combine solid theoretical understanding with hands-on experience building
        real-world full-stack and backend systems.
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
