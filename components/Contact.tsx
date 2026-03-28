"use client";

import { useState } from "react";

const links = [
  { href: "https://github.com/shkkonda", label: "GitHub" },
  { href: "https://linkedin.com/in/shkkonda", label: "LinkedIn" },
  { href: "https://appweave.tech", label: "Appweave Labs" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  }

  return (
    <section id="contact" className="py-24 px-[clamp(20px,5vw,80px)] bg-ink text-paper">
      <div className="max-w-[1080px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px] items-start">
          <div>
            <span className="text-[11px] font-semibold tracking-[2px] uppercase text-accent mb-4 block">
              Contact
            </span>
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] leading-[1.2] tracking-tight mb-10 text-paper">
              Let&apos;s work together
            </h2>
            <p className="text-[#999] text-base leading-relaxed mb-8">
              Looking for a data engineering partner or AI automation for your
              business? I&apos;d love to hear about your project.
            </p>
            <ul className="list-none space-y-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-paper text-[15px] no-underline hover:text-accent transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[#666]">
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                className="bg-[#2a2a2a] border border-[#333] text-paper px-4 py-3.5 rounded-md text-sm font-sans outline-none focus:border-accent transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[#666]">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="bg-[#2a2a2a] border border-[#333] text-paper px-4 py-3.5 rounded-md text-sm font-sans outline-none focus:border-accent transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[#666]">
                Message
              </label>
              <textarea
                required
                placeholder="Tell me about your project..."
                rows={5}
                className="bg-[#2a2a2a] border border-[#333] text-paper px-4 py-3.5 rounded-md text-sm font-sans outline-none focus:border-accent transition-colors resize-y"
              />
            </div>
            <button
              type="submit"
              className={`self-start px-9 py-3.5 text-white text-[13px] font-semibold tracking-wider rounded-md border-none cursor-pointer transition-all hover:-translate-y-px ${
                sent ? "bg-green-700" : "bg-accent hover:brightness-110"
              }`}
            >
              {sent ? "Sent! ✓" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
