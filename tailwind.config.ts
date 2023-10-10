import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        glysa: ["var(--font-glysa)"],
        lexendDeca: ["var(--font-lexendDeca)"],
      },
      colors: {
        black: {
          100: "#141414",
          90: "#191919",
          80: "#1E1E1E",
          70: "#232323",
          60: "#282828",
          50: "#2D2D2D",
          40: "#323232",
          30: "#373737",
          20: "#3C3C3C",
          10: "#414141",
        },
        white: {
          100: "rgb(255, 255, 255)",
          56: "rgba(255, 255, 255, 0.56)",
          32: "rgba(255, 255, 255, 0.32)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
