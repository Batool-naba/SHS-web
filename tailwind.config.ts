import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: "#982F3C",
          dark: "#7E2633",
        },
        gold: "#D4B483",
        ivory: "#F4F1E8",
        softwhite: "#FAF9F6",
        charcoal: "#202028",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(32, 32, 40, 0.08)",
        cardHover: "0 8px 32px rgba(32, 32, 40, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
