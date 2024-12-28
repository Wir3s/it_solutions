"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ProjectCard from "../layout/ProjectCard";

const projects = [
  {
    title: "AstroAI Horoscope Generator",
    description:
      "A full-stack application that uses a custom GPT model to generate personalized horoscopes, blending human creativity with AI capabilities.",
    imageUrl: "/images/projects/astroai.png",
    link: "https://cosmicswirls.com", // Add a unique link for each project
  },
  {
    title: "Power-Up Pizzeria Website",
    description:
      "A playful, vibrant website for a local pizza restaurant, incorporating gaming and comic book themes to engage customers.",
    imageUrl: "/images/projects/poweruppizza.png",
    link: "/projects/power-up-pizzeria", // Add a unique link for each project
  },
  {
    title: "Mars Rover Photo Gallery",
    description:
      "An interactive photo gallery showcasing recent images from NASA's Mars rovers, using React and Next.js to create a dynamic user experience.",
    imageUrl: "/images/projects/marsrover.png",
    link: "https://mars-viewer.vercel.app/", // Add a unique link for each project
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef(null); // Reference for the section container

  useEffect(() => {
    const animation = gsap.fromTo(
      sectionRef.current, // Target the section div
      { opacity: 0, y: 50 }, // From: initial state
      { opacity: 1, y: 0, duration: 0.7 } // To: final state
    );

    return () => {
      animation.kill(); // Clean up the animation on unmount
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-8 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      <h3 className="text-3xl font-bold mb-8 text-center">Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            link={project.link} // Pass the link to the ProjectCard component
          />
        ))}
      </div>
    </section>
  );
}


