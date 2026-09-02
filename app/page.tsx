import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import CaseStudy from "@/components/sections/CaseStudy";
import SocialProof from "@/components/sections/SocialProof";
import InstagramInsights from "@/components/sections/InstagramInsights";
import Photography from "@/components/sections/Photography";
import Music from "@/components/sections/Music";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <CaseStudy />
      <SocialProof />
      <InstagramInsights />
      <Photography />
      <Music />
      <Contact />
    </>
  );
}
