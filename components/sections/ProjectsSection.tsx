"use client";

import { motion } from "framer-motion";
import ProjectCard from "../layout/ProjectCard";

const projects = [
  {
    title: "AstroAI Horoscope Generator",
    description: "A full-stack application that uses a custom GPT model to generate personalized horoscopes, blending human creativity with AI capabilities.",
    imageUrl: "/images/astroai.png"
  },
  {
    title: "Power-Up Pizzeria Website",
    description: "A playful, vibrant website for a local pizza restaurant, incorporating gaming and comic book themes to engage customers.",
    imageUrl: "/images/powerup_pizzeria.png"
  },
  {
    title: "Mars Rover Photo Gallery",
    description: "An interactive photo gallery showcasing recent images from NASA's Mars rovers, using React and Next.js to create a dynamic user experience.",
    imageUrl: "/images/mars_rover.png"
  }
];

export default function ProjectsSection() {
  return (
    <section className="py-16 px-8 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h3 className="text-3xl font-bold mb-8 text-center">Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
