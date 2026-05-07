import Link from "next/link";
import { SquareArrowOutUpRight, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  tech: string;
  desc: string;
  focus: string;
  github: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "GitHub Repo Summarizer",
    tech: "Next.js, MERN Stack, GitHub API, AI",
    desc: "A platform that analyzes and summarizes GitHub repositories, helping users quickly understand project architecture, technologies, and functionality.",
    focus: "Developer Tools",
    github: "https://github.com/oishik-biswas",
    live: "#",
  },
  {
    title: "Full Stack Chat Application",
    tech: "MERN Stack, WebSockets, JWT",
    desc: "A scalable real-time messaging platform with secure authentication, efficient backend architecture, and seamless user communication.",
    focus: "Real-Time Systems",
    github: "https://github.com/oishik-biswas",
    live: "#",
  },
  {
    title: "LiveCollab (Replit Clone)",
    tech: "Next.js, Node.js, WebRTC, Docker",
    desc: "A collaborative coding platform featuring real-time code editing, voice chat, live previews, and containerized code execution.",
    focus: "Collaboration",
    github: "https://github.com/oishik-biswas",
    live: "#",
  },
  {
    title: "AR Indoor Navigation PWA",
    tech: "Next.js, TypeScript, AR.js, A-Frame",
    desc: "A marker-based AR-powered progressive web app for indoor aisle navigation using QR markers, 3D directional overlays, and minimap assistance.",
    focus: "Augmented Reality",
    github: "https://github.com/oishik-biswas",
    live: "#",
  },
  {
    title: "Uber Clone",
    tech: "MERN Stack, Maps API, Authentication",
    desc: "A ride-booking platform with live location tracking, fare estimation, authentication systems, and scalable backend workflows.",
    focus: "Full Stack",
    github: "https://github.com/oishik-biswas",
    live: "#",
  },
  {
    title: "Mid Valyrian Interpreter",
    tech: "Rust, Pest Parser, AST",
    desc: "A custom programming language interpreter inspired by Game of Thrones with robust grammar, execution engine, CLI tooling, and parser architecture.",
    focus: "Compiler Design",
    github: "https://github.com/oishik-biswas",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
          Projects
        </p>
        <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
          Selected Projects
        </h3>
      </div>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, idx) => (
          <article
            key={idx}
            className="group flex flex-col justify-between rounded-lg border border-gray-800 bg-[#0f1115] p-5 transition-all duration-300 hover:border-gray-600 hover:shadow-lg sm:p-6"
          >
            <div>
              <span className="inline-flex rounded-md border border-gray-800 px-3 py-1 text-xs text-amber-200">
                {proj.focus}
              </span>

              <h4 className="mb-2 mt-5 text-lg font-semibold text-white transition-colors group-hover:text-cyan-200 sm:text-xl">
                {proj.title}
              </h4>

              <p className="mb-4 text-sm text-gray-500">{proj.tech}</p>

              <p className="text-sm leading-6 text-gray-400">
                {proj.desc}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <Link
                href={proj.github}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-md border border-gray-800 px-4 py-2 text-sm text-gray-300 transition-all hover:border-white/20 hover:text-white"
              >
                <SquareArrowOutUpRight size={16} />
                GitHub
              </Link>

              {proj.live && (
                <Link
                  href={proj.live}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-md border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-sm text-gray-300 transition-all hover:bg-cyan-200/20 hover:text-white"
                >
                  <ExternalLink size={16} />
                  Live
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}