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
      Hello! I&apos;m Andre, an experienced IT professional and web developer dedicated to solving complex challenges and delivering tailored solutions for small businesses. My expertise spans IT support, website design, and personalized tech consulting, ensuring that your unique needs are met with efficiency and creativity.
      <br /><br />
      Based in Stillwater, Minnesota, I can provide on-site services to the Twin Cities metro area and remote support to clients worldwide. Whether you need a new website, tech troubleshooting, or a comprehensive IT strategy, I&apos;m here to help you succeed in the digital world.
      </p>
    </section>
  );
}
