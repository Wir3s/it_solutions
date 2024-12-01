"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type AnimatedSVGProps = React.SVGProps<SVGSVGElement>;

const AnimatedSVG: React.FC<AnimatedSVGProps> = ({ className, ...props }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (svgRef.current) {
      // Get references to SVG elements
      const circles = svgRef.current.querySelectorAll("circle:not(.spark)");
      const lines = svgRef.current.querySelectorAll("line");
      const sparks = svgRef.current.querySelectorAll(".spark");

      // Animate lines: make them look like they are being drawn
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

      // Animate circles: scaling in with elasticity
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

      // Animate sparks traveling along the lines
      sparks.forEach((spark, index) => {
        const line = lines[index];
        if (line) {
          // Get line coordinates to determine animation path
          const x1 = parseFloat(line.getAttribute("x1") || "0");
          const y1 = parseFloat(line.getAttribute("y1") || "0");
          const x2 = parseFloat(line.getAttribute("x2") || "0");
          const y2 = parseFloat(line.getAttribute("y2") || "0");

          gsap.fromTo(
            spark,
            { cx: x1, cy: y1, opacity: 0.8 },
            {
              cx: x2,
              cy: y2,
              duration: 2,
              ease: "power2.inOut",
              delay: 2, // Wait for the lines to be drawn first
              onComplete: () => {
                // Expand and vanish effect once the spark reaches the end
                gsap.to(spark, {
                  scale: 2,
                  opacity: 0,
                  duration: 1,
                  ease: "power2.inOut"
                });
              },
            }
          );
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
      {...props} // Spread other props
    >
      <defs>
        {/* Radial Gradient for the Spark */}
        <radialGradient id="sparkGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="yellow" />
          <stop offset="100%" stopColor="orange" />
        </radialGradient>

        {/* Glow Filter */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="4.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main Circle */}
      <circle cx="200" cy="200" r="50" stroke="black" strokeWidth="2" fill="lightgray" />

      {/* Line 1 and Circle (Between 9:00 and 11:00 Position) */}
      <line x1="200" y1="200" x2="120" y2="150" stroke="black" strokeWidth="2" />
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





