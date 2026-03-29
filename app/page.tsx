import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import ScrollManager from "@/components/ScrollManager";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Blog />
      <Contact />
      <ScrollManager />
    </>
  );
}
