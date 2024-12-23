"use client";

import { useTheme } from "next-themes";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null); // Reference for the button

  useEffect(() => {
    setMounted(true);
  }, []);

  // Ensure the component is mounted before running GSAP animations
  useEffect(() => {
    if (!mounted) return; // Prevent execution before mounting

    const button = buttonRef.current;
    if (!button) return;

    const hoverIn = () => {
      gsap.to(button, { scale: 1.1, duration: 0.2, ease: "power1.out" });
    };

    const hoverOut = () => {
      gsap.to(button, { scale: 1, duration: 0.2, ease: "power1.out" });
    };

    const tap = () => {
      gsap.to(button, { scale: 0.9, duration: 0.1, ease: "power1.out" });
    };

    const release = () => {
      gsap.to(button, { scale: 1.1, duration: 0.1, ease: "power1.out" });
    };

    button.addEventListener("mouseenter", hoverIn);
    button.addEventListener("mouseleave", hoverOut);
    button.addEventListener("mousedown", tap);
    button.addEventListener("mouseup", release);

    return () => {
      button.removeEventListener("mouseenter", hoverIn);
      button.removeEventListener("mouseleave", hoverOut);
      button.removeEventListener("mousedown", tap);
      button.removeEventListener("mouseup", release);
    };
  }, [mounted]); // Dependency array ensures the effect runs only after `mounted` is true

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className="p-2 rounded-md bg-gray-200 text-black dark:bg-gray-800 dark:text-white transition-colors"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}



