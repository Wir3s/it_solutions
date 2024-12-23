'use client';

import React, { useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayoutEffect';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  distance?: number;
  start?: string;
  className?: string;
  type?: 'fade' | 'slide' | 'scale' | 'rotate';
}

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 50,
  start = "top 80%",
  className = '',
  type = 'slide'
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<any>(null);

  // Add media query hook
  const prefersReducedMotion = useRef(false);

  useIsomorphicLayoutEffect(() => {
    const initAnimation = async () => {
      const gsap = (await import('gsap')).default;
      const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
      
      gsap.registerPlugin(ScrollTrigger);

      const element = elementRef.current;
      if (!element) return;

      // Check for reduced motion preference
      prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const getInitialProps = () => {
        // If reduced motion is preferred, only use opacity
        if (prefersReducedMotion.current) {
          return { opacity: 0 };
        }

        switch (type) {
          case 'fade':
            return { opacity: 0 };
          case 'scale':
            return { opacity: 0, scale: 0.8 };
          case 'rotate':
            return { 
              opacity: 0, 
              rotation: direction === 'left' ? -10 : 10 
            };
          case 'slide':
          default:
            return {
              opacity: 0,
              x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
              y: direction === 'up' ? distance : direction === 'down' ? -distance : 0
            };
        }
      };

      const getAnimationProps = () => {
        // If reduced motion is preferred, only animate opacity
        if (prefersReducedMotion.current) {
          return { opacity: 1 };
        }

        switch (type) {
          case 'fade':
            return { opacity: 1 };
          case 'scale':
            return { opacity: 1, scale: 1 };
          case 'rotate':
            return { opacity: 1, rotation: 0 };
          case 'slide':
          default:
            return { opacity: 1, x: 0, y: 0 };
        }
      };

      // Adjust duration for reduced motion
      const adjustedDuration = prefersReducedMotion.current ? 
        Math.min(duration, 0.5) : // Limit to 0.5s max for reduced motion
        duration;

      // Set initial state
      gsap.set(element, getInitialProps());

      // Create animation
      animationRef.current = gsap.to(element, {
        ...getAnimationProps(),
        duration: adjustedDuration,
        delay: prefersReducedMotion.current ? 0 : delay, // Remove delay for reduced motion
        ease: prefersReducedMotion.current ? "none" : "power2.out",
        scrollTrigger: {
          trigger: element,
          start: start,
          toggleActions: "play none none none"
        }
      });

      // Listen for changes in reduced motion preference
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const handleMotionPreferenceChange = (e: MediaQueryListEvent) => {
        prefersReducedMotion.current = e.matches;
        // Recreate animation with new preferences
        if (animationRef.current) {
          animationRef.current.kill();
        }
        gsap.set(element, getInitialProps());
        animationRef.current = gsap.to(element, {
          ...getAnimationProps(),
          duration: e.matches ? Math.min(duration, 0.5) : duration,
          delay: e.matches ? 0 : delay,
          ease: e.matches ? "none" : "power2.out",
          scrollTrigger: {
            trigger: element,
            start: start,
            toggleActions: "play none none none"
          }
        });
      };

      mediaQuery.addEventListener('change', handleMotionPreferenceChange);

      // Cleanup
      return () => {
        if (animationRef.current) {
          animationRef.current.kill();
        }
        mediaQuery.removeEventListener('change', handleMotionPreferenceChange);
      };
    };

    initAnimation();
  }, [direction, delay, duration, distance, start, type]);

  return (
    <div ref={elementRef} className={`scroll-reveal ${className}`}>
      {children}
    </div>
  );
}