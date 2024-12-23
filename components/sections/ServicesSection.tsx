"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import CloudHostingSVG from "../animation/CloudHostingSVG";
import InformedDecisionSVG from "../animation/InformedDecisionSVG";
import ServerClusterSVG from "../animation/ServerClusterSVG";
import ProgrammerSVG from "../animation/ProgrammerSVG";

const services = [
  {
    title: "IT Support & Maintenance",
    description:
      "Keep your systems running smoothly with troubleshooting, proactive maintenance, and quick solutions to tech issues.",
    SvgComponent: ServerClusterSVG,
    link: "/services#it-support",
  },
  {
    title: "Networking & Connectivity",
    description:
      "Fast, secure networks tailored for your business, including Wi-Fi and cabling solutions.",
    SvgComponent: CloudHostingSVG,
    link: "/services#networking",
  },
  {
    title: "IT Infrastructure Consulting",
    description:
      "From phone systems to servers, we help build reliable IT setups for your business needs.",
    SvgComponent: InformedDecisionSVG,
    link: "/services#infrastructure",
  },
  {
    title: "Security Solutions",
    description:
      "Protect your data with secure networks, firewalls, and backup solutions.",
    SvgComponent: ProgrammerSVG,
    link: "/services#security",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null); // Reference for the section container
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]); // References for the service cards

  useEffect(() => {
    // Add hover animations to each card
    cardsRef.current.forEach((card) => {
      if (card) {
        const hoverIn = () => {
          gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power1.out" });
        };

        const hoverOut = () => {
          gsap.to(card, { scale: 1, duration: 0.3, ease: "power1.out" });
        };

        card.addEventListener("mouseenter", hoverIn);
        card.addEventListener("mouseleave", hoverOut);

        // Cleanup listeners on unmount
        return () => {
          card.removeEventListener("mouseenter", hoverIn);
          card.removeEventListener("mouseleave", hoverOut);
        };
      }
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          Tailored IT Solutions for Small Businesses
        </h2>
        <p className="text-lg text-center mb-12">
          Simplify your technology. Maximize your productivity.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg bg-white dark:bg-gray-700 hover:shadow-xl transition-shadow"
            >
              <service.SvgComponent className="mb-6 w-28 h-28 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <a
                href={service.link}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





