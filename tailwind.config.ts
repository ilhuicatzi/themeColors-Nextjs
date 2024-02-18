import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {

        "color-1": 'var(--color-1)',
        "color-2": 'var(--color-2)',
        "color-3": 'var(--color-3)',
        "color-4": 'var(--color-4)',
        "color-5": 'var(--color-5)',

        "1Lexus": "#fafafa",
        "2Lexus": "#D9D9D9",
        "3Lexus": "#595959",
        "4Lexus": "#262626",
        "5Lexus": "#0D0D0D",

        "1Maite": "#F2F2F2",
        "2Maite": "#727372",
        "3Maite": "#731F2E",
        "4Maite": "#BFBFBF",
        "5Maite": "#0D0D0D",

        "1Natural": "#232625",
        "2Natural": "#35403A",
        "3Natural": "#4C594F",
        "4Natural": "#A4A69C",
        "5Natural": "#BFBFB8",

        "1Street": "#f2f2f2",
        "2Street": "#6ba7bf",
        "3Street": "#d9415d",
        "5Street": "#395d73",
        "4Street": "#8c3d2b",
      },
      fontFamily: {
        "Lexus": ["Playfair Display", "sans-serif"],
        "Onests": ["Onest", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
