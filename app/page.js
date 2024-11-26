"use client";

import ThemeToggle from "../components/ThemeToggle";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300">
      {/* Navbar with Theme Toggle */}
      <nav className="w-full p-4 flex justify-between items-center bg-gray-100 dark:bg-gray-900">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Bessette IT Solutions
        </h1>
        <ThemeToggle />
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-[70vh] bg-white dark:bg-gray-800 text-center p-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Welcome to Bessette IT Solutions
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-400 mb-6">
          Providing top-tier IT services and web development solutions.
        </p>
        <button className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
          Learn More
        </button>
      </section>

      {/* About Section */}
      <section className="py-16 px-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <h3 className="text-3xl font-bold mb-4">About Me</h3>
        <p className="text-lg">
          Hi, I'm Andre, an IT professional and web developer with a passion for
          problem-solving and creating efficient solutions for small businesses.
          I specialize in IT support, website design, and providing personalized
          tech consulting to meet your unique needs.
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-8 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
        <h3 className="text-3xl font-bold mb-8">Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-700">
            <h4 className="text-xl font-semibold mb-2">
              AstroAI Horoscope Generator
            </h4>
            <p className="text-sm">
              A full-stack application that uses a custom GPT model to generate
              personalized horoscopes, blending human creativity with AI
              capabilities.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-700">
            <h4 className="text-xl font-semibold mb-2">
              Power-Up Pizzeria Website
            </h4>
            <p className="text-sm">
              A playful, vibrant website for a local pizza restaurant,
              incorporating gaming and comic book themes to engage customers.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-700">
            <h4 className="text-xl font-semibold mb-2">
              Mars Rover Photo Gallery
            </h4>
            <p className="text-sm">
              An interactive photo gallery showcasing recent images from NASA's
              Mars rovers, using React and Next.js to create a dynamic user
              experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
