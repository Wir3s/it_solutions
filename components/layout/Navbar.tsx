"use client";

import ThemeToggle from "../ui/ThemeToggle";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav 
      className="w-full p-4 flex justify-between items-center bg-gray-100 dark:bg-gray-900"
      aria-label="Main Navigation"
    >
      <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
      <Image
          src="/logo.png"
          alt="Bessette IT Solutions logo"
          width={150}
          height={50}
          className="rounded-lg"
        />
      </Link>
      <div className="flex items-center space-x-4">
        <Link 
          href="/services" 
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
        >
          Services
        </Link>
        <Link 
          href="/contact" 
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
        >
          Contact
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}