import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Sparkles } from "lucide-react";

const highlights = [
  "MERN",
  "Next.js",
  "Backend systems",
  "Full-stack apps",
  "DSA",
  "Core CS",
  "GATE qualified",
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "Rust",
];

export default function Hero() {
  return (
    <section id="home" className="hero-pop grid gap-8 pt-10 sm:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div>
        <p className="eyebrow mb-4 inline-flex items-center gap-2">
          <Sparkles size={14} />
          Software engineer based in India
        </p>

        <h1 className="hero-title">
          Oishik Biswas builds clean developer tools.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          Full-stack developer with a backend-first mindset, strong DSA
          foundations, GATE qualification, and a taste for developer tools,
          language experiments, and practical products.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Link href="/#projects" className="primary-button">
            View projects
          </Link>
          <Link
            href="https://linktr.ee/oishikbiswas"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            Linktree
            <ExternalLink size={16} />
          </Link>
          <Link href="/#contact" className="ghost-button hero-contact-link">
            Contact
          </Link>
        </div>

        <div className="hero-tags mt-7 flex flex-wrap gap-2">
          {highlights.map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
        </div>

      </div>

      <aside className="profile-card flex flex-col items-center gap-6 lg:flex-row lg:items-start">
        {/* IMAGE */}
        <div className="profile-image-wrap mx-auto lg:mx-0">
          <Image
            src="/Oishik_pic.jpeg"
            alt="Oishik Biswas"
            width={320}
            height={320}
            priority
            className="profile-image"
          />
        </div>

        {/* CONTENT */}
        <div className="flex-1">
          <p className="text-sm font-semibold text-strong">
            Achievements & Highlights
          </p>

          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li className="profile-line leading-relaxed">
              • <span className="font-semibold text-cyan-300">GATE Qualified</span>{" "}
              during undergraduate studies
            </li>

            <li className="profile-line leading-relaxed">
              • Maintaining a{" "}
              <span className="font-semibold text-cyan-300">
                9.19/10 CGPA
              </span>{" "}
              in Computer Science Engineering
            </li>

            <li className="profile-line leading-relaxed">
              • Solved{" "}
              <span className="font-semibold text-cyan-300">
                200+
              </span>{" "}
              Data Structures & Algorithms problems on LeetCode
            </li>
          </ul>

          {/* RESUME BUTTON */}
          <div className="mt-6">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative inline-flex items-center justify-center
                overflow-hidden rounded-xl p-[1.5px]
              "
            >
              {/* Animated Neon Border */}
              <span
                className="
                  absolute inset-[-1000%]
                  animate-[spin_4s_linear_infinite]
                  bg-[conic-gradient(from_90deg_at_50%_50%,#22d3ee_0%,#3b82f6_25%,#8b5cf6_50%,#22d3ee_100%)]
                "
              />

              {/* Button Content */}
              <span
                className="
                  relative z-10 inline-flex items-center gap-2
                  rounded-[11px] bg-[#0f1115]
                  px-5 py-2.5 text-sm font-medium
                  text-white transition-all duration-300
                  group-hover:bg-[#131722]
                "
              >
                View Resume

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </aside>
    </section>
  );
}
