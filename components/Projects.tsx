import Link from "next/link";
import { ExternalLink, SquareArrowOutUpRight } from "lucide-react";

type Project = {
  title: string;
  tech: string;
  desc: string;
  github: string;
  live: string;
};

/*
  Other projects are intentionally paused from the public showcase for now:
  Full Stack Chat Application, LiveCollab, AR Indoor Navigation PWA, Uber Clone,
  and older repo summarizer drafts.
*/
const projects: Project[] = [
  {
    title: "GitGlimpse",
    tech: "Next.js, GitHub API, AI-assisted repository insight",
    desc: "A developer tool that helps people inspect repositories faster by turning source structure into concise, useful project context.",
    github: "https://github.com/oishik-biswas/GitGlimpse.git",
    live: "https://gitglimpse.vercel.app",
  },
  {
    title: "Mid Valyrian",
    tech: "Language design, interpreter tooling, compiler foundations",
    desc: "A custom language experiment with a fantasy-inspired syntax, focused on parsing ideas, execution flow, and clean developer experience.",
    github: "https://github.com/oishik-biswas/mid-valyrian.git",
    live: "https://mid-valyrian.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2 className="section-title">Some projects worth opening.</h2>
        <p className="section-copy">
          A tighter showcase with live demos and source links, focused on the
          work that best represents the current direction.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div>
              <span className="tag">{project.tech}</span>
              <h3 className="mt-5 text-2xl font-semibold text-strong">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">{project.desc}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                <SquareArrowOutUpRight size={16} />
                GitHub
              </Link>
              <Link
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                Live
                <ExternalLink size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
