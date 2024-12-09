import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ServicesSection from "../components/sections/ServicesSection"; // Add Services Section
import { ScrollReveal } from "../components/animation/ScrollReveal";
import "./globals.css";

export default function Home() {
  return (
    <div className="min-h-screen font-sans 
      bg-background 
      text-foreground 
      transition-colors 
      duration-300">
      <Navbar />
      <main className="space-y-16">
        <ScrollReveal>
          <HeroSection />
        </ScrollReveal>
        <ScrollReveal direction="left" delay={0.3}>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.5}>
          <ServicesSection /> 
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.7}>
          <ProjectsSection />
        </ScrollReveal>
      </main>
    </div>
  );
}
