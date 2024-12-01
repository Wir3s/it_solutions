"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      className="py-16 px-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
      aria-labelledby="about-title"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
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
      </motion.div>
    </section>
  );
}