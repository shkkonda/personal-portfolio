const items = [
  {
    date: "2024 — Present",
    role: "Co-founder & COO",
    company: "Appweave Labs",
    desc: "Leading sales, marketing, hiring, product strategy, and AI Engineering at a software services company focused on Data Engineering and AI Automation. Primary client: Collected Solutions Inc. (US).",
  },
  {
    date: "2021 — 2026",
    role: "Data Analyst → Senior Data Engineer",
    company: "Start.io · Bengaluru, India",
    desc: "Built JSON-to-SQL translation for MAIA — the industry\u2019s first NLP-powered audience platform. Developed clustering algorithms on OCI for POI identification, gender/age prediction models using text embeddings and XGBoost, and a RAG-based LLM for web page taxonomy classification. Scaled the India data team from 2 to 10.",
  },
  {
    date: "2018 — 2021",
    role: "Services SME & Value Modeller",
    company: "EXL Service · London, UK",
    desc: "Built a Customer Lifetime Value model estimating discounted cash flow over 5 years using gamma-distributed GLMs for cost-to-serve and logistic regression for churn prediction. Created an R Shiny text analytics tool using LDA topic modelling. Mentored a team of 5 offshore analysts. Owned the Bundles Proposition product line.",
  },
  {
    date: "2017 — 2018",
    role: "Energy Pricing Analyst",
    company: "EXL Service · London, UK",
    desc: "Built sales forecasting and market share models for energy product pricing. Realized \u00a3440k value upside by optimising acquisition pricing. Built a churn prediction model with 82% cumulative lift, reducing customer churn by 3pp through pre-engagement strategies.",
  },
  {
    date: "2015 — 2017",
    role: "Marketing Effectiveness Analyst",
    company: "EXL Service · Gurgaon, India",
    desc: "Optimised inbound and outbound campaigns by defining and monitoring KPIs. Carried out impact assessments and market opportunity sizing for cross-sell campaigns. Analysed loyalty programs and helped design personalised customer reward offers.",
  },
  {
    date: "2011 — 2015",
    role: "B.Tech, Electronics & Communication",
    company: "University of Allahabad",
    desc: "",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-[clamp(20px,5vw,80px)]">
      <div className="max-w-[1080px] mx-auto">
        <span className="text-[11px] font-semibold tracking-[2px] uppercase text-accent mb-4 block">
          Experience
        </span>
        <h2 className="font-serif text-[clamp(28px,4vw,44px)] leading-[1.2] tracking-tight mb-10">
          Where I&apos;ve been
        </h2>

        <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-light">
          {items.map((item, i) => (
            <div
              key={i}
              className={`reveal relative ${
                i < items.length - 1 ? "pb-12" : ""
              } before:content-[''] before:absolute before:-left-[36px] before:top-1.5 before:w-[9px] before:h-[9px] before:rounded-full before:bg-accent`}
            >
              <div className="text-xs font-semibold tracking-wider uppercase text-accent mb-1.5">
                {item.date}
              </div>
              <div className="font-serif text-[22px] mb-1">{item.role}</div>
              <div className="text-sm text-mid mb-3">{item.company}</div>
              {item.desc && (
                <div className="text-sm text-mid leading-relaxed">
                  {item.desc}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
