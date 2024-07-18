import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#3B82F6",
        primaryhover: "#2563EB",
        
        secondary_color: "#fff",
        secondary_light_color: "#e6e6e6",
        secondary_dark_color: "#b3b3b3",

        tertiary_color: "#222",
        tertiary_light_color: "#333",
        tertiary_dark_color: "#111",

        invalid_color: "#ec1228",
        success_color: "#1da934",

        default_font_size: "1.7rem",
        default_font_family: "Roboto, sans-serif",
        default_header_family: "Nunito, sans_serif",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
