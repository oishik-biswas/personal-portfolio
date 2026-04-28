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

const experiences: ExperienceEntry[] = [
  {
    company: "DBS Bank",
    roles: [
      {
        title: "Associate",
        period: "Jul 2025 - Present",
        bullets: [
          "Building Java, Spring Boot, and Activiti services for current and savings account servicing business processes; raised JUnit coverage above 80% and led a team knowledge base project."
        ]
      },
      {
        title: "Graduate Associate (SEED Programme)",
        period: "Jul 2023 - Jun 2025",
        bullets: [
          "Built a Python and SQL automation tool to migrate and configure over 1,000 configuration variants of a process-tracking workflow from a vendor platform into an in-house Spring Boot and Activiti application (MariaDB), reducing per-configuration setup from 1-2 hours to under 5 minutes.",
          "Developed backend services in Java, Spring Boot, and Activiti and collaborated across teams on end-to-end delivery."
        ]
      }
    ]
  },
  {
    company: "Singapore Institute of Technology",
    roles: [
      {
        title: "Software Developer (Contract)",
        period: "Apr 2023 - Jun 2023",
        bullets: [
          "Built NFTVue, a NFT gallery website that allows students to connect their crypto wallets to view and verify their school event-issued NFTs",
          "Worked on DemoConstruct, a full-stack web application (React + Python) that uses Meshroom to reconstruct 3D models from captured images"
        ],
        tag: "NFTVue"
      }
    ]
  },
  {
    company: "DBS Bank",
    roles: [
      {
        title: "Software Developer (Intern)",
        period: "May 2022 - Dec 2022",
        bullets: [
          "Worked on the backend for the digital exchange and asset custody application using Spring Boot and Java",
          "Built an admin dashboard web application for a DBS Metaverse event using Spring Security and Angular"
        ]
      }
    ]
  },
  {
    company: "Activate Interactive Pte Ltd",
    roles: [
      {
        title: "Software Developer (Intern)",
        period: "May 2019 - Aug 2019",
        bullets: [
          "Developed RP Connect, the iOS and Android mobile app for Republic Polytechnic using React Native"
        ]
      }
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="border border-gray-800 rounded-xl p-8 bg-[#0f1115]">
      <div className="flex space-x-8 mb-8 border-b border-gray-800 pb-4">
        <h3 className="text-white font-medium border-b-2 border-white pb-4 -mb-[18px]">Work</h3>
        <h3 className="text-gray-500 font-medium pb-4">Education</h3>
      </div>
      
      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="flex gap-6">
            <div className="w-12 h-12 bg-white rounded-full flex-shrink-0 flex items-center justify-center text-black font-bold">
              {/* Logo Placeholder */}
              {exp.company.charAt(0)}
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-semibold text-white mb-4">{exp.company}</h4>
              
              <div className="space-y-6">
                {exp.roles.map((role, rIdx) => (
                  <div key={rIdx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{role.title}</span>
                      <span className="text-gray-500 text-sm">{role.period}</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                      {role.bullets.map((bullet, bIdx) => (
                         <li key={bIdx} className="leading-relaxed">{bullet}</li>
                      ))}
                    </ul>
                    {role.tag && (
                      <div className="mt-3 inline-block px-3 py-1 bg-gray-800 text-xs rounded-md text-gray-300">
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
    </section>
  );
}