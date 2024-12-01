/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#e6f1ff",
          100: "#b3d7ff",
          200: "#80bdff",
          300: "#4da3ff",
          400: "#1a89ff",
          500: "#0070f3",
          600: "#0050a3",
          700: "#003666",
          800: "#001d33",
          900: "#000d1a",
        },
        secondary: {
          50: "#ffe6f2",
          100: "#ffb3d9",
          200: "#ff80c0",
          300: "#ff4da6",
          400: "#ff1a8c",
          500: "#f30070",
          600: "#a30050",
          700: "#660033",
          800: "#330019",
          900: "#1a000d",
        },
        accent: {
          neon: "#00ffff",
          pastel: "#ff6b9e",
        },
      },
      boxShadow: {
        "neumorphic-light": "4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff",
        "neumorphic-dark": "4px 4px 8px #0a0a0a, -4px -4px 8px #1a1a1a",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-cyber": "linear-gradient(135deg, #00ffff 0%, #f30070 100%)",
      },
    },
  },
  plugins: [],
};
