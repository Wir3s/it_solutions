"use client";

import { motion } from "framer-motion";
import CloudHostingSVG from "../animation/CloudHostingSVG";
import InformedDecisionSVG from "../animation/InformedDecisionSVG";
import ServerClusterSVG from "../animation/ServerClusterSVG";
import ProgrammerSVG from "../animation/ProgrammerSVG";

const services = [
  {
    title: "IT Support & Maintenance",
    description: "Keep your systems running smoothly with troubleshooting, proactive maintenance, and quick solutions to tech issues.",
    SvgComponent: ServerClusterSVG,
    link: "/services#it-support",
  },
  {
    title: "Networking & Connectivity",
    description: "Fast, secure networks tailored for your business, including Wi-Fi and cabling solutions.",
    SvgComponent: CloudHostingSVG,
    link: "/services#networking",
  },
  {
    title: "IT Infrastructure Consulting",
    description: "From phone systems to servers, we help build reliable IT setups for your business needs.",
    SvgComponent: InformedDecisionSVG,
    link: "/services#infrastructure",
  },
  {
    title: "Security Solutions",
    description: "Protect your data with secure networks, firewalls, and backup solutions.",
    SvgComponent: ProgrammerSVG,
    link: "/services#security",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-16 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tailored IT Solutions for Small Businesses
        </motion.h2>
        <motion.p
          className="text-lg text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Simplify your technology. Maximize your productivity.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg bg-white dark:bg-gray-700 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.3)" }}
            >
              <service.SvgComponent className="mb-6 w-28 h-28 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <motion.a
                href={service.link}
                className="text-blue-600 dark:text-blue-400 hover:underline"
                whileHover={{ scale: 1.1 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


