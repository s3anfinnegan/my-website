import React, { useState, useEffect } from "react";
import { Maximize2, X } from "lucide-react";

const projectsData = [
  {
    title: "Receipt Relay",
    status: "inactive",
    links: {
        showRepo: false,
        showWebsite: false,
        repo: "",
        website: ""
  },

    problem: `
Businesses still rely heavily on paper receipts.
They are costly, environmentally wasteful, and inconvenient for customers.
`,

    background: `
Having worked in retail and hospitality, I saw first-hand how inefficient receipt systems were.
We wanted a frictionless way for customers to receive digital receipts without downloading an app.
`,

    solution: `
We built a QR-based system integrated with POS providers.
Customers scan a QR code, which sends a request to our backend API and retrieves their receipt digitally.

The system included:
• Backend API layer
• POS integration endpoints
• Cloud infrastructure deployment
• Business onboarding tooling
`,

    impact: `
• Raised €50,000 in pre-seed funding  
• Piloted with live businesses  
• Signed multiple B2B customers  
• Validated demand for digital receipt infrastructure  
`,

    reflections: `
This project taught me more than university ever could.

I learned:
• Sales and technical tradeoffs  
• The importance of shipping quickly  
• How infrastructure decisions affect scalability  

It fundamentally changed how I think about building systems.
`,

    appendix: `
Additional Links:
• Pitch deck (link)
• Architecture diagram (link)
• Demo video (link)
`,

    references: `
• POS provider documentation  
• AWS architecture best practices  
`,
  },
    {
    title: "Surfmailer",
    status: "active",
    links: {
      showRepo: true,
      showWebsite: false,
      repo: "https://github.com/s3anfinnegan/surf-mailer",
      website: ""
    },

    problem: `
  Receiving surf forecasts required manual checks on websites. I wanted automatic, personalised alerts so I wouldn't have to visit Magic Seaweed every time.
  `,

    background: `
  Started as a passion project to notify me when surf conditions matched my preferences. Initially built in JS using the Stormglass.io API, later moved to Python for better logic handling and reliability.
  `,

    solution: `
  A scheduled job scrapes or queries surf forecast sources, evaluates the data against user-defined preferences (wave height, swell, wind direction), and sends an email via SMTP when conditions are met.
  Surfmailer v2 uses Python, Stormglass for forecasts, and GitHub Actions for scheduling.
  `,

    impact: `
  • Automates surf checks and delivers email notifications
  • Runs daily via GitHub Actions (scheduled at 08:00 Irish time)
  • Improved reliability by moving from JS scraping to a Python-based pipeline
  `,

    reflections: `
  I learned the tradeoffs between scraping and using an API, how scheduling and secrets management work with GitHub Actions, and how infrastructure experience improved the app when revisited in 2025.
  `,

    appendix: `
  Work to date:
  • March 2023: Started with Stormglass.io, experimented with data sources and scraping.
  • Switched to Cheerio scraping when API keys were unavailable; later re-adopted Stormglass for v2.
  • July 2025: Rewrote to Python, scheduled with GitHub Actions, uses Gmail SMTP for notifications.
  `,

    references: `
  • Repo: https://github.com/s3anfinnegan/surf-mailer
  • Stormglass.io API docs
  • Cheerio (JS) / BeautifulSoup (Python) resources for scraping
  `,
    },
];

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h4 className="text-xl font-semibold mb-4 text-white border-b border-white/20 pb-2">
      {title}
    </h4>
    <div className="whitespace-pre-line text-gray-200 leading-relaxed">
      {children}
    </div>
  </div>
);

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "auto";
  }, [activeProject]);

  return (
    <div className="min-h-[70vh]">
      <h2 className="text-3xl font-bold text-white mb-10 text-center">
        Projects
      </h2>

      <div className="space-y-6">
        {projectsData.map((project, index) => (
          <div
            key={index}
            onClick={() => setActiveProject(project)}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 cursor-pointer hover:bg-white/20 transition-all"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <Maximize2 className="w-5 h-5 text-white" />
            </div>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setActiveProject(null)}
          />

          <div className="relative w-full max-w-5xl h-[90vh] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-10 overflow-y-auto text-white shadow-2xl">

            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-6 text-white hover:text-gray-300"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-3xl font-bold mb-6">
              {activeProject.title}
            </h3>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-6 mb-10">

                {/* Status */}
                <div className="flex items-center gap-2 text-sm bg-white/20 px-4 py-2 rounded-lg">
                    <span
                    className={`w-3 h-3 rounded-full shadow-md ${
                        activeProject.status === "active"
                        ? "bg-green-400 shadow-green-400/50"
                        : "bg-red-400 shadow-red-400/50"
                    }`}
                    />
                    <span className="text-white font-medium">
                    {activeProject.status === "active" ? "Active" : "Inactive"}
                    </span>
                </div>

                {/* Repository */}
                {activeProject.links?.showRepo && (
                    <a
                    href={activeProject.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition"
                    >
                    GitHub Repo
                    </a>
                )}

                {/* Website */}
                {activeProject.links?.showWebsite && (
                    <a
                    href={activeProject.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition"
                    >
                    Live Site
                    </a>
                )}

                </div>

            <Section title="Problem">
              {activeProject.problem}
            </Section>

            <Section title="Background">
              {activeProject.background}
            </Section>

            <Section title="Solution">
              {activeProject.solution}
            </Section>

            <Section title="Notable Traction">
              {activeProject.impact}
            </Section>

            <Section title="Reflections">
              {activeProject.reflections}
            </Section>

            <Section title="Appendix">
              {activeProject.appendix}
            </Section>

            <Section title="References">
              {activeProject.references}
            </Section>

          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;