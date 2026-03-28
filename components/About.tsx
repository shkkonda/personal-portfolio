const stats = [
  { num: "10+", desc: "Years in Data & Analytics" },
  { num: "2→10", desc: "Team scaled at Start.io" },
  { num: "3", desc: "Countries worked across" },
  { num: "1", desc: "Company founded" },
];

const skills = [
  "Python", "SQL", "R", "Spark", "Docker", "AWS", "OCI", "Git",
  "Jenkins", "Pandas", "scikit-learn", "LangChain", "Streamlit",
  "Flask", "XGBoost", "NLP", "RAG", "Hadoop", "PowerBI", "QGIS",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-[clamp(20px,5vw,80px)] bg-white">
      <div className="max-w-[1080px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px] items-start">
          <div>
            <span className="text-[11px] font-semibold tracking-[2px] uppercase text-accent mb-4 block">
              About
            </span>
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] leading-[1.2] tracking-tight mb-10">
              Building at the intersection of data engineering and AI
            </h2>
          </div>
          <div className="text-mid text-[15px] space-y-5">
            <p>
              I&apos;m Shriharsha — 10 years in the data world, starting as a
              Marketing Effectiveness Analyst in India, moving to London as an
              Energy Pricing Analyst, then evolving into a Data Scientist and
              finally a Senior Data Engineer.
            </p>
            <p>
              At Start.io, I spent 5 years growing from Data Analyst to Senior
              Data Engineer, built ML models, NLP systems, and scaled the India
              data team from 2 to 10. Before that, I spent 5+ years at EXL
              Service working with a UK energy client — building CLV models,
              churn prediction systems, and pricing optimisation tools.
            </p>
            <p>
              Now I run{" "}
              <a
                href="https://appweave.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent no-underline border-b border-accent"
              >
                Appweave Labs
              </a>
              , a software services company. Based in Bangalore.
            </p>
          </div>
        </div>

        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {stats.map((s) => (
            <div key={s.desc} className="p-6 border border-light rounded-lg">
              <div className="font-serif text-4xl text-ink leading-none mb-1.5">
                {s.num}
              </div>
              <div className="text-xs text-mid tracking-wider">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="reveal mt-10">
          <div className="text-[11px] font-semibold tracking-[2px] uppercase text-accent mb-4">
            Skills & Tools
          </div>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((s) => (
              <span
                key={s}
                className="text-[11px] font-medium px-3 py-1 bg-accent-soft text-accent rounded-full tracking-wider"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
