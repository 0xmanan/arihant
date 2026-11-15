import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "SF Pro Display",
          "SF Pro Text",
          "-apple-system",
          "BlinkMacSystemFont",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        display: [
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        text: [
          "SF Pro Text",
          "-apple-system",
          "BlinkMacSystemFont",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "SF Pro Text",
          "-apple-system",
          "BlinkMacSystemFont",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      letterSpacing: {
        "apple-headline": "-0.035em",
        "apple-title": "-0.025em",
        "apple-subtitle": "-0.015em",
        "apple-body": "-0.01em",
        "apple-eyebrow": "0.12em",
      },
      colors: {
        apple: {
          black: "#000000",
          "dark-surface": "#161617",
          "dark-card": "#1d1d1f",
          "dark-text": "#f5f5f7",
          "dark-subtext": "#86868b",
          "light-bg": "#f5f5f7",
          "light-surface": "#ffffff",
          "light-text": "#1d1d1f",
          "light-subtext": "#86868b",
          "light-muted": "#6e6e73",
          border: "#d2d2d7",
          blue: "#0071e3",
          "blue-hover": "#0077ed",
          "blue-dark": "#2997ff",
          "blue-dark-hover": "#47a3ff",
        },
      },
    },
  },
  plugins: [],
};

export default config;
