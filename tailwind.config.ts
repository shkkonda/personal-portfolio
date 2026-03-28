import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1a1a1a",
        paper: "#fafaf8",
        mid: "#6b6b6b",
        light: "#e8e6e1",
        accent: "#8B2500",
        "accent-soft": "#f0e0d8",
      },
      fontFamily: {
        serif: ["DM Serif Display", "Georgia", "serif"],
        sans: ["Libre Franklin", "Helvetica Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
