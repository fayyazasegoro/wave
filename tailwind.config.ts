import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF8F2",
        pistachio: {
          light: "#E2E9D8",
          DEFAULT: "#B8C8A7",
          dark: "#8FA87A",
        },
        apricot: {
          light: "#E9C0A8",
          DEFAULT: "#D4956F",
          brown: "#A77F69",
        },
        sage: {
          DEFAULT: "#485344",
          light: "#6B7A65",
          dark: "#2E342C",
        },
        warm: "#F3F1E9",
        "border-soft": "#E5E6DC",
        success: "#7CA982",
        warning: "#D4A853",
        "error-soft": "#C17A6E",
        info: "#7B8FA3",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
      },
      boxShadow: {
        soft: "0 1px 3px rgba(72,83,68,0.06), 0 4px 16px rgba(72,83,68,0.04)",
        card: "0 2px 8px rgba(72,83,68,0.08), 0 1px 2px rgba(72,83,68,0.04)",
        elevated: "0 4px 24px rgba(72,83,68,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
