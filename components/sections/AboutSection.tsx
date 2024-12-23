"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AboutSection() {
  const sectionRef = useRef(null); // Reference for the section container

  useEffect(() => {
    const animation = gsap.fromTo(
      sectionRef.current, // Target the section div
      { opacity: 0, x: -50 }, // From: initial state
      { opacity: 1, x: 0, duration: 0.6 } // To: final state
    );

    return () => {
      animation.kill(); // Clean up the animation on unmount
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
      aria-labelledby="about-title"
    >
      <h3 id="about-title" className="text-3xl font-bold mb-4">
        About Me
      </h3>
      <p className="text-lg">
        Hi, I&apos;m Andre, an IT professional and web developer with a passion for
        problem-solving and creating efficient solutions for small businesses.
        I specialize in IT support, website design, and providing personalized
        tech consulting to meet your unique needs.
      </p>
    </section>
  );
}
