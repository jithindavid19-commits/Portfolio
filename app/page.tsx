import Hero from "@/components/sections/Hero";
import StatBand from "@/components/sections/StatBand";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import CaseStudy from "@/components/sections/CaseStudy";
import InstagramInsights from "@/components/sections/InstagramInsights";
import Photography from "@/components/sections/Photography";
import Music from "@/components/sections/Music";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <StatBand />
      <About />
      <Skills />
      <CaseStudy />
      <InstagramInsights />
      <Photography />
      <Music />
      <Contact />
    </>
  );
}
