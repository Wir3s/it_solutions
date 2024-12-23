import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ServicesSection from "../components/sections/ServicesSection"; // Add Services Section
import HubspotForm from "../components/forms/HubspotForm"; // Import HubspotForm
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
        <ScrollReveal type="fade" delay={0.2}>
          <HeroSection />
        </ScrollReveal>
        <ScrollReveal type="scale" delay={0.3}>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal type="slide" direction="left" delay={0.4}>
          <ServicesSection />
        </ScrollReveal>
        <ScrollReveal 
          type="scale" 
          delay={0.3} 
          duration={1}
        >
          <ProjectsSection />
        </ScrollReveal>
      </main>
    </div>
  );
}
