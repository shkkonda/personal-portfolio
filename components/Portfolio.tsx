import { client } from "@/sanity/lib/client";

type Project = {
  _id: string;
  title: string;
  description: string;
  tags: string[];
};

const query = `*[_type == "project"] | order(order asc){
  _id, title, description, tags
}`;

const fallbackProjects: Project[] = [
  {
    _id: "fp-1",
    title: "AI Framework Finder",
    description:
      "An AI-powered recommendation engine that helps developers choose the right agentic AI framework for their project. Built with Streamlit and Gemini.",
    tags: ["Python", "Streamlit", "Gemini AI"],
  },
  {
    _id: "fp-2",
    title: "Solana Portfolio Tracker",
    description:
      "A tool for checking portfolio value on the Solana blockchain. Enter a wallet\u2019s public key and get a real-time breakdown of holdings.",
    tags: ["Solana", "Python", "Web3"],
  },
  {
    _id: "fp-3",
    title: "Tax Comparator Tool",
    description:
      "Compare tax liability under 44ADA (freelancer) vs salaried employment under India\u2019s new tax regime. Built for professionals exploring contract work.",
    tags: ["Streamlit", "Finance", "India Tax"],
  },
  {
    _id: "fp-4",
    title: "Overture Maps POI Explorer",
    description:
      "Commercial product exploration built on Overture Maps Foundation POI data. Geospatial data visualization and analysis for location intelligence.",
    tags: ["Geospatial", "Data", "Maps"],
  },
];

export default async function Portfolio() {
  let projects: Project[] = [];

  try {
    if (client) {
      projects = await client.fetch(query);
    }
  } catch {
    // Sanity not configured yet
  }

  if (!projects || projects.length === 0) {
    projects = fallbackProjects;
  }

  return (
    <section id="projects" className="py-24 px-[clamp(20px,5vw,80px)] bg-white">
      <div className="max-w-[1080px] mx-auto">
        <span className="text-[11px] font-semibold tracking-[2px] uppercase text-accent mb-4 block">
          Projects
        </span>
        <h2 className="font-serif text-[clamp(28px,4vw,44px)] leading-[1.2] tracking-tight mb-10">
          Things I&apos;ve built
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p._id}
              className="reveal border border-light rounded-[10px] p-9 transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
            >
              <div className="w-8 h-[3px] bg-accent rounded-sm mb-5" />
              <div className="font-serif text-xl mb-2.5">{p.title}</div>
              <div className="text-sm text-mid leading-relaxed mb-4">
                {p.description}
              </div>
              <div className="flex flex-wrap gap-2">
                {p.tags?.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-medium px-3 py-1 bg-accent-soft text-accent rounded-full tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
