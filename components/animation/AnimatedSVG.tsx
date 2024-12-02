"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

type AnimatedSVGProps = React.SVGProps<SVGSVGElement>;

const AnimatedSVG: React.FC<AnimatedSVGProps> = ({ className, ...props }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);

    if (svgRef.current) {
      const circles = svgRef.current.querySelectorAll("circle:not(.spark)");
      const lines = svgRef.current.querySelectorAll("line");
      const sparks = svgRef.current.querySelectorAll(".spark");

      // Lines animation (unchanged)
      gsap.fromTo(
        lines,
        { strokeDasharray: "100%", strokeDashoffset: "100%" },
        {
          strokeDashoffset: "0%",
          duration: 2,
          ease: "power2.inOut",
          stagger: 0.2,
        }
      );

      // Circles animation (unchanged)
      gsap.fromTo(
        circles,
        { scale: 0, transformOrigin: "center", opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "elastic.out(1, 0.3)",
          stagger: 0.3,
        }
      );

      // Spark animations
      sparks.forEach((spark, index) => {
        const line = lines[index];
        if (line) {
          const centerX = 200;
          const centerY = 200;
          const x2 = parseFloat(line.getAttribute("x2") || "0");
          const y2 = parseFloat(line.getAttribute("y2") || "0");

          if (index === 0) {
            // First line with a kink
            gsap.fromTo(
              spark,
              { cx: centerX, cy: centerY, opacity: 0.8, scale: 1 },
              {
                motionPath: {
                  path: [
                    { x: centerX, y: centerY },
                    { x: 160, y: 180 },
                    { x: x2, y: y2 }
                  ],
                  curviness: 0
                },
                duration: 2,
                ease: "power2.inOut",
                delay: 2,
                onComplete: () => {
                  gsap.to(spark, {
                    scale: 3,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.inOut"
                  });
                },
              }
            );
          } else {
            // Other lines (straight paths)
            gsap.fromTo(
              spark,
              { cx: centerX, cy: centerY, opacity: 0.8, scale: 1 },
              {
                cx: x2,
                cy: y2,
                duration: 2,
                ease: "power2.inOut",
                delay: 2,
                onComplete: () => {
                  gsap.to(spark, {
                    scale: 3,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.inOut"
                  });
                },
              }
            );
          }
        }
      });
    }
  }, []);

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      className={className}
      {...props}
    >
      <defs>
        {/* Enhanced Radial Gradient for the Spark */}
        <radialGradient id="sparkGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="cyan" stopOpacity="1" />
          <stop offset="50%" stopColor="blue" stopOpacity="0.7" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>

        {/* Enhanced Glow Filter */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="5" result="coloredBlur" />
          <feColorMatrix 
            type="matrix" 
            values="0 0 0 0 0
                    0 0 0 0 1
                    0 0 0 0 1
                    0 0 0 1 0"
          />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main Circle */}
      <circle cx="200" cy="200" r="50" stroke="black" strokeWidth="2" fill="lightgray" />

      {/* Line 1 with Kink (Between 9:00 and 11:00 Position) */}
      <line x1="200" y1="200" x2="160" y2="180" stroke="black" strokeWidth="2" />
      <line x1="160" y1="180" x2="120" y2="150" stroke="black" strokeWidth="2" />
      <circle cx="120" cy="150" r="15" stroke="black" strokeWidth="2" fill="lightgray" />

      {/* Line 2 and Circle */}
      <line x1="200" y1="200" x2="300" y2="200" stroke="black" strokeWidth="2" />
      <circle cx="300" cy="200" r="15" stroke="black" strokeWidth="2" fill="lightgray" />

      {/* Line 3 and Circle */}
      <line x1="200" y1="200" x2="300" y2="300" stroke="black" strokeWidth="2" />
      <circle cx="300" cy="300" r="15" stroke="black" strokeWidth="2" fill="lightgray" />

      {/* Sparks */}
      <circle
        className="spark"
        r="5"
        fill="url(#sparkGradient)"
        filter="url(#glow)"
      />
      <circle
        className="spark"
        r="5"
        fill="url(#sparkGradient)"
        filter="url(#glow)"
      />
      <circle
        className="spark"
        r="5"
        fill="url(#sparkGradient)"
        filter="url(#glow)"
      />
    </svg>
  );
};

export default AnimatedSVG;





