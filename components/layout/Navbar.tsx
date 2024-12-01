"use client";

import ThemeToggle from "../ui/ThemeToggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav 
      className="w-full p-4 flex justify-between items-center bg-gray-100 dark:bg-gray-900"
      aria-label="Main Navigation"
    >
      <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
        Bessette IT Solutions
      </Link>
      <div className="flex items-center space-x-4">
        <Link 
          href="/projects" 
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
        >
          Projects
        </Link>
        <Link 
          href="/services" 
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
        >
          Services
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}