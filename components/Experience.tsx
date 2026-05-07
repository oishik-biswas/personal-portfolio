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
    company: "Smart India Hackathon (SIH)",
    roles: [
      {
        title: "Full Stack Developer & Project Manager",
        period: "Oct 2024",
        bullets: [
          "Led a team of 4 to design and develop an online OPD booking platform using MERN stack (MongoDB, Express.js, React.js, Node.js), improving appointment scheduling efficiency by 30%.",
          "Secured a position among the top 50 teams out of 700+ by representing KIIT University.",
          "Implemented RESTful APIs and streamlined seamless backend data flow.",
          "Managed project tasks using Agile methodologies, including sprint planning, feature prioritization, and team coordination.",
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
          "Developed an online work schedule manager for healthcare workers using Node.js, Express.js, and MongoDB.",
          "Built an AI-powered PDF summarizer and quiz generation system using Python and NLP.",
          "Collaborated with a team of 5 to automate scheduling and knowledge workflows, reducing manual workload by 20%.",
          "Achieved a top 10 position among 160 participating teams.",
        ],
        tag: "AI + Backend",
      },
    ],
  },
  {
    company: "EY Techathon 5.0",
    roles: [
      {
        title: "Participant",
        period: "Nov 2024",
        bullets: [
          "Worked on industry-scale full-stack development challenges using React.js, Node.js, and secure REST APIs.",
          "Focused on cloud integration, authentication systems, and scalable architecture.",
        ],
        tag: "Enterprise Innovation",
      },
    ],
  },
  {
    company: "Providence LEAP Ideathon",
    roles: [
      {
        title: "Full Stack Developer",
        period: "Oct 2024",
        bullets: [
          "Developed real-world prototypes using JavaScript, Node.js, and Express.js.",
          "Focused on API integrations, backend logic, and innovative product strategy.",
          "Collaborated within a 3-member team to rapidly prototype scalable solutions.",
        ],
        tag: "Innovation",
      },
    ],
  },
  {
    company: "Personal Projects",
    roles: [
      {
        title: "Independent Full Stack Developer",
        period: "2023 - Present",
        bullets: [
          "Built GitHub Repo Summarizer using Next.js, MERN stack, GitHub APIs, and AI summarization tools.",
          "Developed Full Stack Chat App with WebSockets, JWT authentication, and scalable messaging infrastructure.",
          "Currently building Uber Clone, Replit Clone (LiveCollab), AR Indoor Navigation PWA, and custom programming languages like GuitarLang and Mid Valyrian.",
          "Focused heavily on backend engineering, real-time systems, compiler design, and modern web architecture.",
        ],
        tag: "Product Engineering",
      },
    ],
  },
];

const studies: StudyEntry[] = [
  {
    institution: "Kalinga Institute of Industrial Technology (KIIT)",
    degree: "Bachelor of Technology in Computer Science Engineering",
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
  return (
    <section
      id="experience"
      className="background-tabs scroll-mt-28 rounded-lg border border-gray-800 bg-[#0f1115] p-4 sm:p-8"
    >
      <input
        id="background-experience"
        name="background-tabs"
        type="radio"
        className="sr-only"
        defaultChecked
      />
      <input
        id="background-studies"
        name="background-tabs"
        type="radio"
        className="sr-only"
      />

      <div className="background-tab-header flex flex-col gap-5 border-b border-gray-800 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Background
          </p>
          <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            Experience & Studies
          </h3>
        </div>

        <fieldset className="w-full sm:w-auto">
          <legend className="sr-only">
            Choose between experience and studies
          </legend>
          <div className="grid grid-cols-2 rounded-lg border border-gray-800 bg-[#090a0c] p-1 sm:inline-grid">
            <label
              htmlFor="background-experience"
              className="background-tab-label background-tab-label-experience cursor-pointer rounded-md px-3 py-2 text-center text-sm font-medium text-gray-400 transition-colors hover:text-white sm:px-4"
            >
              Experience
            </label>
            <label
              htmlFor="background-studies"
              className="background-tab-label background-tab-label-studies cursor-pointer rounded-md px-3 py-2 text-center text-sm font-medium text-gray-400 transition-colors hover:text-white sm:px-4"
            >
              Studies
            </label>
          </div>
        </fieldset>
      </div>

      <div className="background-tab-content">
        <div className="background-tab-panel background-tab-panel-experience mt-8 space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={`${exp.company}-${idx}`}
              className="flex flex-col gap-4 sm:flex-row sm:gap-6"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white font-bold text-black sm:h-12 sm:w-12">
                {exp.company.charAt(0)}
              </div>
              <div className="flex-1">
                <h4 className="mb-4 text-lg font-semibold text-white sm:text-xl">
                  {exp.company}
                </h4>

                <div className="space-y-6">
                  {exp.roles.map((role, rIdx) => (
                    <div key={`${role.title}-${rIdx}`}>
                      <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <span className="font-medium text-gray-300">
                          {role.title}
                        </span>
                        <span className="text-sm text-gray-500">
                          {role.period}
                        </span>
                      </div>
                      <ul className="list-outside list-disc space-y-2 pl-5 text-sm text-gray-400">
                        {role.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="leading-relaxed">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      {role.tag && (
                        <div className="mt-3 inline-block rounded-md bg-gray-800 px-3 py-1 text-xs text-gray-300">
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

        <div className="background-tab-panel background-tab-panel-studies mt-8 space-y-6">
          {studies.map((study) => (
            <article
              key={study.institution}
              className="rounded-lg border border-gray-800 bg-[#0b0d11] p-5 sm:p-6"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-white sm:text-xl">
                    {study.institution}
                  </h4>
                  <p className="mt-1 text-gray-300">{study.degree}</p>
                </div>
                <span className="text-sm text-gray-500">{study.period}</span>
              </div>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                {study.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {study.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-md border border-gray-800 px-3 py-1 text-xs text-gray-300"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
