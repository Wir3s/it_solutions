"use client";

import ThemeToggle from "../ui/ThemeToggle";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
<nav className="w-full p-4 bg-gray-100 dark:bg-gray-900 flex flex-col md:flex-row">
  <div className="w-full flex justify-center md:justify-start">
    <Link href="/">
      <Image
        src="/logo.png"
        alt="Bessette IT Solutions logo"
        width={150}
        height={50}
        className="rounded-lg"
      />
    </Link>
  </div>
  <div className="w-full flex items-center justify-center md:justify-end mt-2 md:mt-0 space-x-4">
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