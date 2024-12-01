"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSVG from "../animation/AnimatedSVG";

export default function HeroSection() {
  return (
    <section 
      className="relative flex flex-col items-center justify-center h-[70vh] bg-white dark:bg-gray-800 text-center p-8"
      aria-labelledby="hero-title"
    >

      { /* Background Animated SVG */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <AnimatedSVG />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
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
        <Link 
          href="/services"
          className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          aria-label="Learn more about Bessette IT Solutions"
        >
          Learn More
        </Link>
      </motion.div>
    </section>
  );
}