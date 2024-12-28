"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import CloudHostingSVG from "../../components/animation/CloudHostingSVG";
import InformedDecisionSVG from "../../components/animation/InformedDecisionSVG";
import ServerClusterSVG from "../../components/animation/ServerClusterSVG";
import ProgrammerSVG from "../../components/animation/ProgrammerSVG";

const servicesDetails = [
  {
    title: "IT Support & Maintenance",
    description:
      "Our IT Support & Maintenance services ensure your systems are always operational. We offer proactive monitoring, regular updates, and immediate troubleshooting to minimize downtime and keep your business running efficiently. Our team is equipped to handle everything from software glitches to hardware repairs, providing you with peace of mind.",
    SvgComponent: ServerClusterSVG,
  },
  {
    title: "Networking & Connectivity",
    description:
      "We specialize in designing and implementing robust networking solutions tailored to your needs. From seamless Wi-Fi setups to structured cabling, our solutions ensure fast, secure, and reliable connectivity for your business. Our team is adept at optimizing network performance and scalability to meet growing demands.",
    SvgComponent: CloudHostingSVG,
  },
  {
    title: "IT Infrastructure Consulting",
    description:
      "Build a resilient IT infrastructure with our expert consulting services. Whether it’s setting up servers, configuring phone systems, or planning data storage solutions, we align technology with your business goals. Our solutions are scalable and designed to grow with your business.",
    SvgComponent: InformedDecisionSVG,
  },
  {
    title: "Security Solutions",
    description:
      "Safeguard your business with our advanced security solutions. We provide firewalls, secure networks, data encryption, and backup strategies to protect your sensitive information. Our team also offers regular security audits and compliance checks to keep your systems secure.",
    SvgComponent: ProgrammerSVG,
  },
];

export default function ServicesPage() {
  const sectionRef = useRef<HTMLDivElement | null>(null); // Reference for the section container

  useEffect(() => {
    // Add fade-in animations for each section
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power1.out" }
      );
    }
  }, []);

  return (
    <main
      ref={sectionRef}
      className="py-16 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h1>
        <div className="space-y-16">
          {servicesDetails.map((service, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center lg:items-start"
            >
              <service.SvgComponent className="mb-6 lg:mb-0 lg:mr-8 w-48 h-48 text-blue-600 dark:text-blue-400" />

              <div>
                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
