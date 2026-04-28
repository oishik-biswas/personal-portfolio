export default function Studies() {
  return (
    <section id="studies">
      <h3 className="text-3xl font-bold text-white mb-8">Studies & Certifications</h3>
      <div className="p-8 border border-gray-800 rounded-xl bg-[#0f1115]">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className="text-xl font-semibold text-white">Singapore Institute of Technology</h4>
            <p className="text-gray-400">Bachelor of Engineering in Software Engineering</p>
          </div>
          <span className="text-gray-500 text-sm">2019 - 2023</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Focused on full-stack development, theoretical computer science, and algorithmic logic. Participated in multiple hackathons, including the Adobe Hackathon Round 2.
        </p>
      </div>
    </section>
  );
}