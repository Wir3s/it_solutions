"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// import AnimatedSVG from "../animation/AnimatedSVG";
import AnimatedPcbSVG from "../animation/AnimatedPcbSVG";

export default function HeroSection() {
  return (
    <section 
  className="relative flex flex-col items-center justify-center h-[70vh] bg-white dark:bg-gray-800 text-center p-8"
  aria-labelledby="hero-title"
>
  { /* Background Animated SVG */ }
  <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none overflow-hidden">
    <AnimatedPcbSVG />
  </div>

  { /* Background Overlay */ }
  <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/60 pointer-events-none"></div>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="relative z-10"
  >
    <h2
      id="hero-title"
      className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-4 shadow-lg"
    >
      Welcome to Bessette IT Solutions
    </h2>
    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 shadow-sm">
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