'use client';

import { useRef } from 'react';
import Link from "next/link";
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayoutEffect';
import AnimatedPcbSVG from "../animation/AnimatedPcbSVG";

export default function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const initAnimation = async () => {
      const gsap = (await import('gsap')).default;
      
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Create timeline
      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out",
          duration: prefersReducedMotion ? 0.5 : 0.7
        }
      });

      if (prefersReducedMotion) {
        // Simple fade-in for reduced motion
        tl.to([titleRef.current, descriptionRef.current, buttonRef.current], {
          opacity: 1,
          stagger: 0.1
        });
      } else {
        // Full animation sequence
        tl
          .fromTo(bgRef.current,
            { opacity: 0, scale: 1.1 },
            { opacity: 0.2, scale: 1, duration: 1 }
          )
          .fromTo(overlayRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.5 },
            "-=0.5"
          )
          .fromTo(titleRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0 },
            "-=0.2"
          )
          .fromTo(descriptionRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0 },
            "-=0.4"
          )
          .fromTo(buttonRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0 },
            "-=0.3"
          );

        // Add floating animation to PCB background if reduced motion is not preferred

      }
    };

    initAnimation();
  }, []);

  return (
    <section
      className="relative flex flex-col items-center justify-center h-[70vh] bg-white dark:bg-gray-800 text-center p-8"
      aria-labelledby="hero-title"
    >
      {/* Background Animated SVG */}
      <div 
        ref={bgRef}
        className="absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none overflow-hidden"
      >
        <AnimatedPcbSVG />
      </div>

      {/* Background Overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-white/70 dark:bg-gray-900/60 pointer-events-none opacity-0"
      />

      <div ref={contentRef} className="relative z-10">
        <h2
          ref={titleRef}
          id="hero-title"
          className="opacity-0 text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-4 shadow-lg"
        >
          Welcome to Bessette IT Solutions
        </h2>
        <p 
          ref={descriptionRef}
          className="opacity-0 text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 shadow-sm"
        >
          Providing top-tier IT services and web development solutions.
        </p>
        <Link
          ref={buttonRef}
          href="/services"
          className="opacity-0 inline-block px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300"
          aria-label="Learn more about Bessette IT Solutions"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}