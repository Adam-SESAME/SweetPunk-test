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
        "hero-background": "url('/hero-bg.jpeg')",
      },
      rotate: {
        'x': '-45deg',
      },
      filter: {
        'brightness-0': 'brightness(0)', 
        'grayscale': 'grayscale(100%)',
        'neutral': 'brightness(100%)',
      },
    },
    fontFamily: {
      bebas: ['Bebas Neue', 'sans-serif'],
      oswald: ['Oswald', 'sans-serif'],
      cormorant: ["Cormorant Upright", "serif"],
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
