"use client";

import ThemeToggle from "../components/ThemeToggle";
import "./globals.css";
import ProjectCard from "../components/ProjectCard";





export default function Home() {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300">
      {/* Accessible Navbar */}
      <nav 
        className="w-full p-4 flex justify-between items-center bg-gray-100 dark:bg-gray-900" 
        aria-label="Main Navigation"
      >
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Bessette IT Solutions
        </h1>
        <ThemeToggle />
      </nav>

      {/* Hero Section with ARIA labels */}
      <main>
      <section 
  className="relative flex flex-col items-center justify-center h-[70vh] bg-white dark:bg-gray-800 text-center p-8"
  aria-labelledby="hero-title"
>
  <h2 
    id="hero-title" 
    className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
  >
    Welcome to Bessette IT Solutions
  </h2>
  <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-400 mb-6">
    Providing top-tier IT services and web development solutions.
  </p>
  <button 
    className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
    aria-label="Learn more about Bessette IT Solutions"
  >
    Learn More
  </button>
</section>


        {/* About Section */}
        <section 
          className="py-16 px-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
          aria-labelledby="about-title"
        >
          <h3 
            id="about-title" 
            className="text-3xl font-bold mb-4"
          >
            About Me
          </h3>
          <p className="text-lg">
            Hi, I'm Andre, an IT professional and web developer with a passion for
            problem-solving and creating efficient solutions for small businesses.
            I specialize in IT support, website design, and providing personalized
            tech consulting to meet your unique needs.
          </p>
        </section>

        {/* Projects Section */}
        <section
          className="py-16 px-8 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          aria-labelledby="projects-title"
        >
          <h3
            id="projects-title"
            className="text-3xl font-bold mb-8"
          >
            Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="AstroAI Horoscope Generator"
              description="A full-stack application that uses a custom GPT model to generate personalized horoscopes, blending human creativity with AI capabilities."
              // imageUrl="/project-images/astroai.jpg"  
            />
            <ProjectCard
              title="Power-Up Pizzeria Website"
              description="A playful, vibrant website for a local pizza restaurant, incorporating gaming and comic book themes to engage customers."
              // imageUrl="/project-images/pizzeria.jpg"
            />
            <ProjectCard
              title="Mars Rover Photo Gallery"
              description="An interactive photo gallery showcasing recent images from NASA's Mars rovers, using React and Next.js to create a dynamic user experience."
              // imageUrl="/project-images/mars-rover.jpg"
            />
          </div>
        </section>
      </main>
    </div>
  );
}