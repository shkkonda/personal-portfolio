"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const links = [
  { href: "/about", sectionId: "about", label: "About" },
  { href: "/experience", sectionId: "experience", label: "Experience" },
  { href: "/projects", sectionId: "projects", label: "Projects" },
  { href: "/blog", sectionId: "blog", label: "Blog" },
  { href: "/contact", sectionId: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string, path: string) => {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", path);
      }
      setOpen(false);
    },
    []
  );

  const scrollToTop = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "/");
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-[clamp(20px,5vw,80px)] py-5 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-xl shadow-[0_1px_0_theme(colors.light)]"
          : ""
      }`}
    >
      <a href="/" onClick={scrollToTop} className="no-underline">
        <Image src="/logo.svg" alt="Shriharsha Konda" width={36} height={36} />
      </a>

      <ul className="hidden md:flex gap-8 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              onClick={(e) => scrollTo(e, l.sectionId, l.href)}
              className="text-mid text-[13px] font-medium uppercase tracking-wider hover:text-ink transition-colors no-underline"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="md:hidden bg-transparent border-none cursor-pointer p-2"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span className="block w-[22px] h-[2px] bg-ink my-[5px]" />
        <span className="block w-[22px] h-[2px] bg-ink my-[5px]" />
        <span className="block w-[22px] h-[2px] bg-ink my-[5px]" />
      </button>

      {open && (
        <ul className="absolute top-full left-0 w-full bg-paper/95 backdrop-blur-xl px-[clamp(20px,5vw,80px)] py-5 flex flex-col gap-5 shadow-lg md:hidden list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => scrollTo(e, l.sectionId, l.href)}
                className="text-mid text-[13px] font-medium uppercase tracking-wider hover:text-ink transition-colors no-underline"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
