export default function Projects() {
  const projects = [
    { title: "Website Traffic Analyzer", tech: "Next.js, Node.js", desc: "A dashboard application to monitor traffic statistics and SEO metrics." },
    { title: "NFTVue", tech: "React, Python", desc: "An NFT gallery website for students to connect crypto wallets and verify event-issued NFTs." },
    { title: "DemoConstruct", tech: "React, Python", desc: "A full-stack web application utilizing Meshroom to reconstruct 3D models from images." }
  ];

  return (
    <section id="projects">
      <h3 className="text-3xl font-bold text-white mb-8">Selected Projects</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="p-6 border border-gray-800 rounded-xl hover:border-gray-600 transition-colors bg-[#0f1115]">
            <h4 className="text-xl font-semibold text-white mb-2">{proj.title}</h4>
            <p className="text-sm text-gray-500 mb-4">{proj.tech}</p>
            <p className="text-gray-400 text-sm leading-relaxed">{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}