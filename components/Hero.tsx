"use client";

function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string, path: string) {
  e.preventDefault();
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", path);
  }
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 relative px-[clamp(20px,5vw,80px)]"
    >
      <div className="max-w-[1080px] mx-auto w-full">
        <div className="max-w-[720px]">
          <span className="hero-stagger-1 inline-block text-xs font-semibold tracking-[2px] uppercase text-accent border-[1.5px] border-accent px-4 py-1.5 rounded-full mb-8">
            Data & AI
          </span>

          <h1 className="hero-stagger-2 font-serif text-[clamp(40px,7vw,80px)] leading-[1.05] tracking-[-2px] mb-6">
            Shriharsha
            <br />
            <em className="italic text-accent">Konda</em>
          </h1>

          <p className="hero-stagger-3 text-[clamp(16px,1.8vw,20px)] text-mid leading-relaxed max-w-[560px] mb-10">
            A decade in data analytics and engineering. Now building AI Systems
            and scaling{" "}
            <a
              href="https://appweave.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent no-underline border-b-[1.5px] border-accent"
            >
              Appweave Labs
            </a>
            .
          </p>

          <div className="hero-stagger-4 flex gap-4 flex-wrap">
            <a
              href="/contact"
              onClick={(e) => scrollTo(e, "contact", "/contact")}
              className="inline-block px-8 py-3.5 bg-ink text-paper text-[13px] font-semibold tracking-wider rounded-md hover:bg-accent transition-colors no-underline"
            >
              Get in Touch
            </a>
            <a
              href="/projects"
              onClick={(e) => scrollTo(e, "projects", "/projects")}
              className="inline-block px-8 py-3.5 bg-transparent text-ink text-[13px] font-semibold tracking-wider rounded-md border-[1.5px] border-light hover:border-ink transition-colors no-underline"
            >
              View Work
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-mid text-[10px] tracking-[2px] uppercase hidden md:flex"
        style={{ animation: "fadeInUp 1s ease 0.8s both" }}
      >
        <div className="scroll-line w-px h-10 bg-light relative overflow-hidden" />
        scroll
      </div>
    </section>
  );
}
