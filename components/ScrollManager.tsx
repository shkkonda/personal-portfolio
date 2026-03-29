"use client";

import { useEffect } from "react";

const sections = [
  { id: "hero", path: "/" },
  { id: "about", path: "/about" },
  { id: "experience", path: "/experience" },
  { id: "projects", path: "/projects" },
  { id: "blog", path: "/blog" },
  { id: "contact", path: "/contact" },
];

export default function ScrollManager() {
  useEffect(() => {
    // On initial load, scroll to the section matching the current URL
    const path = window.location.pathname;
    const match = sections.find((s) => s.path === path);
    if (match && match.id !== "hero") {
      const el = document.getElementById(match.id);
      if (el) {
        // Small delay to let the page render
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }

    // Update URL as user scrolls through sections
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const section = sections.find((s) => s.id === entry.target.id);
            if (section && window.location.pathname !== section.path) {
              window.history.replaceState(null, "", section.path);
            }
          }
        }
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
