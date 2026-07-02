import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F9F7F2",
        foreground: "#2C2C2C",
        gold: {
          DEFAULT: "#C8922A",
          light: "#F0C96B",
          dark: "#A67A20"
        },
        maroon: {
          DEFAULT: "#5A1E1E",
          dark: "#3A1010"
        },
        "primary": "#c6922a",
        "background-light": "#f8f7f6",
        "background-dark": "#171512",
        "deep-maroon": "#3D0A14",
        "near-black": "#0D0906",
        "cream": "#F5EDD8",
      },
      fontFamily: {
        heading: ["var(--font-cormorant-garamond)", "serif"],
        label: ["var(--font-cinzel-decorative)", "serif"],
        body: ["var(--font-eb-garamond)", "serif"],
        hindi: ["var(--font-noto-serif-devanagari)", "serif"],
        "display": ["var(--font-cormorant-garamond)", "serif"],
        "serif": ["var(--font-eb-garamond)", "serif"],
        "decorative": ["var(--font-cinzel-decorative)", "serif"],
        "sans": ["var(--font-noto-sans)", "sans-serif"],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at center, #3D0A14 0%, #0D0906 100%)',
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          from: { opacity: "0", transform: "translateY(-16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      animation: {
        "fade-in": "fade-in 1.2s ease-out both",
        "fade-in-down": "fade-in-down 0.8s ease-out both",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 4s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
