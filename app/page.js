import Hero from "@/components/Hero";
import HeroIntro from "@/components/HeroIntro";
import Features from "@/components/Features";
import Heros from "@/components/Heros";
import TechnologyHighlights from "@/components/TechnologyHighlights";
export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <HeroIntro />
      <Features />
      <Heros />
      <TechnologyHighlights />
    </main>
  );
}