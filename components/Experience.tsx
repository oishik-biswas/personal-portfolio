// import { Code2, GraduationCap, Hammer, Trophy } from "lucide-react";

// const background = [
//   {
//     title: "Engineering",
//     text: "Backend-first full-stack development across Next.js, Node.js, APIs, databases, and product workflows.",
//     icon: Code2,
//   },
//   {
//     title: "Foundations",
//     text: "DSA, DBMS, operating systems, OOP, system design, Java, and Python with a GATE-qualified base.",
//     icon: GraduationCap,
//   },
//   {
//     title: "Build style",
//     text: "Practical tools, clean interfaces, fast iteration, and projects that are useful before they are flashy.",
//     icon: Hammer,
//   },
//   {
//     title: "Hackathons",
//     text: "SIH top-50, ICDCIT top-10, EY Techathon 5.0, and product work across healthcare and AI prototypes.",
//     icon: Trophy,
//   },
// ];

// export default function Experience() {
//   return (
//     <section id="experience" className="scroll-mt-28">
//       <div className="section-heading">
//         <p className="eyebrow">Background</p>
//         <h2 className="section-title">A compact view of the signal.</h2>
//         <p className="section-copy">
//           The portfolio is intentionally lighter now: enough context to trust
//           the work, without turning the page into a resume dump.
//         </p>
//       </div>

//       <div className="grid gap-4 sm:grid-cols-2">
//         {background.map((item) => {
//           const Icon = item.icon;

//           return (
//             <article key={item.title} className="section-card">
//               <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-accent-soft text-accent">
//                 <Icon size={20} />
//               </div>
//               <h3 className="text-lg font-semibold text-strong">{item.title}</h3>
//               <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
//             </article>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";

type ExperienceEntry = {
  company: string;
  roles: {
    title: string;
    period: string;
    type?: string;
    bullets: string[];
    tag?: string;
  }[];
};

type StudyEntry = {
  institution: string;
  degree: string;
  period: string;
  description: string;
  highlights: string[];
};

const experiences: ExperienceEntry[] = [
  {
    company: "Industrial Training",
    roles: [
      {
        title:
          "CISCO NetAcad CCNA + Python & Data Analytics Training",
        period: "Summer 2026 - Present",
        bullets: [
          "Currently undergoing CISCO NetAcad industrial training focused on CCNA networking fundamentals, Python programming, and Data Analytics.",
          "Learning networking concepts including routing, switching, subnetting, network security, and infrastructure management.",
          "Working with Python for automation, scripting, and data analysis workflows.",
          "Exploring practical analytics pipelines, data visualization, and industry-level problem solving.",
        ],
        tag: "Networking + Analytics",
      },
    ],
  },

  {
    company: "NIDS Mini Project",
    roles: [
      {
        title: "Backend Developer",
        period: "Jan 2026 - Apr 2026",
        bullets: [
          "Worked on a Network Intrusion Detection System (NIDS) mini project during the 6th semester.",
          "Focused on backend logic, packet analysis workflows, and threat detection mechanisms.",
          "Explored networking concepts, monitoring systems, and real-time traffic analysis.",
          "Collaborated on designing scalable detection pipelines and alert systems.",
        ],
        tag: "Cybersecurity",
      },
    ],
  },

  {
    company: "Smart India Hackathon (SIH)",
    roles: [
      {
        title: "Team Lead & Full Stack Developer",
        period: "Oct 2024",
        bullets: [
          "Led a team of 6 members during Smart India Hackathon (SIH) 2024.",
          "Designed and developed an Online OPD Booking System using MERN stack (MongoDB, Express.js, React.js, Node.js).",
          "Successfully got selected at the college level by presenting the project solution and system architecture.",
          "Managed backend APIs, database workflows, and overall team coordination throughout development.",
        ],
        tag: "Healthcare Tech",
      },
    ],
  },

  {
    company: "ICDCIT Hackathon",
    roles: [
      {
        title: "Backend Developer & Project Manager",
        period: "Jan 2025",
        bullets: [
          "Developed an online work schedule management system for healthcare workers using Node.js, Express.js, and MongoDB.",
          "Built an AI-powered PDF summarizer and quiz generation system using Python and NLP techniques.",
          "Collaborated with a 4-member team to automate scheduling and knowledge workflows.",
          "Achieved a top 10 position among 160+ participating teams.",
        ],
        tag: "AI + Backend",
      },
    ],
  },
];

const studies: StudyEntry[] = [
  {
    institution:
      "Kalinga Institute of Industrial Technology (KIIT)",
    degree:
      "Bachelor of Technology in Computer Science Engineering",
    period: "2023 - 2027 (Expected)",
    description:
      "Maintaining an excellent CGPA of 9.19/10 while specializing in full-stack development, backend systems, operating systems, DBMS, compiler design, and scalable software architecture. Qualified GATE during undergraduate studies and actively participated in national-level hackathons and technical competitions.",
    highlights: [
      "CGPA: 9.19/10",
      "GATE Qualified",
      "MERN Stack",
      "Backend Development",
      "Hackathons",
      "Java & Python",
    ],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<
    "experience" | "studies"
  >("experience");

  return (
    <section
      id="experience"
      className="scroll-mt-28 rounded-2xl border border-gray-800 bg-[#0f1115] p-4 sm:p-8"
    >
      {/* HEADER */}
      <div className="flex flex-col gap-5 border-b border-gray-800 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Background
          </p>

          <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            Experience & Studies
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
            A compact overview of hackathons, engineering
            experience, academic background, and ongoing product
            development work.
          </p>
        </div>

        {/* TABS */}
        <div className="grid grid-cols-2 rounded-xl border border-gray-800 bg-[#090a0c] p-1 sm:inline-grid">
          <button
            onClick={() => setActiveTab("experience")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
              activeTab === "experience"
                ? "bg-white text-black shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Experience
          </button>

          <button
            onClick={() => setActiveTab("studies")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
              activeTab === "studies"
                ? "bg-white text-black shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Studies
          </button>
        </div>
      </div>

      {/* EXPERIENCE TAB */}
      {activeTab === "experience" && (
        <div className="mt-10 space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={`${exp.company}-${idx}`}
              className="flex flex-col gap-4 sm:flex-row sm:gap-6"
            >
              {/* ICON */}
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white text-lg font-bold text-black">
                {exp.company.charAt(0)}
              </div>

              {/* CONTENT */}
              <div className="flex-1">
                <h4 className="mb-5 text-xl font-semibold text-white">
                  {exp.company}
                </h4>

                <div className="space-y-8">
                  {exp.roles.map((role, rIdx) => (
                    <div key={`${role.title}-${rIdx}`}>
                      <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <span className="text-base font-medium text-gray-200">
                          {role.title}
                        </span>

                        <span className="text-sm text-gray-500">
                          {role.period}
                        </span>
                      </div>

                      <ul className="list-outside list-disc space-y-3 pl-5 text-sm leading-7 text-gray-400">
                        {role.bullets.map((bullet, bIdx) => (
                          <li key={bIdx}>{bullet}</li>
                        ))}
                      </ul>

                      {role.tag && (
                        <div className="mt-4 inline-flex rounded-md border border-gray-700 bg-gray-800/60 px-3 py-1 text-xs text-gray-300">
                          {role.tag}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* STUDIES TAB */}
      {activeTab === "studies" && (
        <div className="mt-10 space-y-6">
          {studies.map((study) => (
            <article
              key={study.institution}
              className="rounded-2xl border border-gray-800 bg-[#0b0d11] p-6"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    {study.institution}
                  </h4>

                  <p className="mt-1 text-gray-300">
                    {study.degree}
                  </p>
                </div>

                <span className="text-sm text-gray-500">
                  {study.period}
                </span>
              </div>

              <p className="mt-5 text-sm leading-7 text-gray-400">
                {study.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {study.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-lg border border-gray-700 bg-[#11141a] px-3 py-1 text-xs text-gray-300"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}