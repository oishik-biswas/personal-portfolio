import Image from "next/image";
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
    <section className="hero-pop flex flex-col items-center pt-14 text-center sm:pt-20">
      <p className="mb-5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
        Software Engineer
      </p>

      <h1 className="mb-4 flex max-w-4xl flex-wrap items-center justify-center gap-2 text-4xl font-bold leading-tight text-white sm:gap-3 sm:text-5xl md:text-6xl">
        <span className="text-gray-500">I&apos;m</span>
        <span className="text-white">Oishik Biswas</span>
        <span className="hero-profile-slot" aria-label="Oishik Biswas profile photo">
          <span className="hero-profile-card">
            <span className="hero-profile-photo-frame">
              <Image
                src="/profile.png"
                alt="Oishik Biswas"
                width={112}
                height={112}
                priority
                className="hero-profile-photo"
              />
            </span>
          </span>
        </span>
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

      <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
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
        <Link
          href="https://github.com/oishik-biswas"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          title="GitHub"
          className="hero-social-link"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7.01c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.59.69.49A10.19 10.19 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
          </svg>
        </Link>
        <Link
          href="https://www.linkedin.com/in/biswas-oishik/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          title="LinkedIn"
          className="hero-social-link"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="currentColor"
          >
            <path d="M6.94 8.75H3.56v11.04h3.38V8.75ZM5.25 4.21c-1.08 0-1.95.88-1.95 1.96s.87 1.95 1.95 1.95 1.96-.87 1.96-1.95-.88-1.96-1.96-1.96Zm6.93 4.54H8.94v11.04h3.33v-5.46c0-1.44.27-2.84 2.06-2.84 1.76 0 1.78 1.65 1.78 2.93v5.37h3.33v-6.06c0-2.98-.64-5.27-4.12-5.27-1.67 0-2.79.92-3.25 1.78h-.05l.16-1.49Z" />
          </svg>
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
