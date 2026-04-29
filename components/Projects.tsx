type Project = {
  title: string;
  tech: string;
  desc: string;
  focus: string;
};

const projects: Project[] = [
  {
    title: "Website Traffic Analyzer",
    tech: "Next.js, Node.js",
    desc: "A dashboard application to monitor traffic statistics and SEO metrics.",
    focus: "Analytics",
  },
  {
    title: "NFTVue",
    tech: "React, Python",
    desc: "An NFT gallery website for students to connect crypto wallets and verify event-issued NFTs.",
    focus: "Web3",
  },
  {
    title: "DemoConstruct",
    tech: "React, Python",
    desc: "A full-stack web application utilizing Meshroom to reconstruct 3D models from images.",
    focus: "3D",
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
            className="rounded-lg border border-gray-800 bg-[#0f1115] p-5 transition-colors hover:border-gray-600 sm:p-6"
          >
            <span className="inline-flex rounded-md border border-gray-800 px-3 py-1 text-xs text-amber-200">
              {proj.focus}
            </span>
            <h4 className="mb-2 mt-5 text-lg font-semibold text-white sm:text-xl">
              {proj.title}
            </h4>
            <p className="mb-4 text-sm text-gray-500">{proj.tech}</p>
            <p className="text-sm leading-6 text-gray-400">{proj.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
