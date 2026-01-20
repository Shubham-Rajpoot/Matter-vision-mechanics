import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFF4E8",
          100: "#FFE5CC",
          200: "#FFD1A3",
          300: "#FFB973",
          400: "#FF9A3D",
          500: "#FF6A00", // brand primary deep orange
          600: "#E85D04",
          700: "#D14900",
          800: "#A63A00",
          900: "#7A2A00",
        },
        dark: {
          50: "#f8f9fa",
          100: "#e9ecef",
          200: "#dee2e6",
          300: "#ced4da",
          400: "#adb5bd",
          500: "#868e96",
          600: "#495057",
          700: "#343a40",
          800: "#212529",
          900: "#1a1d21",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft:
          "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        "soft-lg":
          "0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 20px 40px -10px rgba(0, 0, 0, 0.06)",
        neumorphism:
          "8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff",
        "neumorphism-inset":
          "inset 4px 4px 8px #d1d9e6, inset -4px -4px 8px #ffffff",
        modern:
          "0 4px 20px -2px rgba(0, 0, 0, 0.1), 0 8px 16px -4px rgba(0, 0, 0, 0.05)",
        "modern-lg":
          "0 20px 50px -10px rgba(0, 0, 0, 0.15), 0 10px 30px -5px rgba(0, 0, 0, 0.1)",
        glow:
          "0 0 20px rgba(255, 106, 0, 0.25), 0 0 40px rgba(255, 106, 0, 0.12)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
