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
    company: "DBS Bank",
    roles: [
      {
        title: "Associate",
        period: "Jul 2025 - Present",
        bullets: [
          "Building Java, Spring Boot, and Activiti services for current and savings account servicing business processes; raised JUnit coverage above 80% and led a team knowledge base project.",
        ],
      },
      {
        title: "Graduate Associate (SEED Programme)",
        period: "Jul 2023 - Jun 2025",
        bullets: [
          "Built a Python and SQL automation tool to migrate and configure over 1,000 configuration variants of a process-tracking workflow from a vendor platform into an in-house Spring Boot and Activiti application (MariaDB), reducing per-configuration setup from 1-2 hours to under 5 minutes.",
          "Developed backend services in Java, Spring Boot, and Activiti and collaborated across teams on end-to-end delivery.",
        ],
      },
    ],
  },
  {
    company: "Singapore Institute of Technology",
    roles: [
      {
        title: "Software Developer (Contract)",
        period: "Apr 2023 - Jun 2023",
        bullets: [
          "Built NFTVue, a NFT gallery website that allows students to connect their crypto wallets to view and verify their school event-issued NFTs",
          "Worked on DemoConstruct, a full-stack web application (React + Python) that uses Meshroom to reconstruct 3D models from captured images",
        ],
        tag: "NFTVue",
      },
    ],
  },
  {
    company: "DBS Bank",
    roles: [
      {
        title: "Software Developer (Intern)",
        period: "May 2022 - Dec 2022",
        bullets: [
          "Worked on the backend for the digital exchange and asset custody application using Spring Boot and Java",
          "Built an admin dashboard web application for a DBS Metaverse event using Spring Security and Angular",
        ],
      },
    ],
  },
  {
    company: "Activate Interactive Pte Ltd",
    roles: [
      {
        title: "Software Developer (Intern)",
        period: "May 2019 - Aug 2019",
        bullets: [
          "Developed RP Connect, the iOS and Android mobile app for Republic Polytechnic using React Native",
        ],
      },
    ],
  },
];

const studies: StudyEntry[] = [
  {
    institution: "Singapore Institute of Technology",
    degree: "Bachelor of Engineering in Software Engineering",
    period: "2019 - 2023",
    description:
      "Focused on full-stack development, theoretical computer science, and algorithmic logic. Participated in multiple hackathons, including the Adobe Hackathon Round 2.",
    highlights: ["Full-stack development", "Algorithms", "Hackathons"],
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
