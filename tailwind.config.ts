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
        primary: '#FCFBF4',
      },
      fontFamily: {
        robotoMono: ['Roboto Mono', 'monospace'],
        clashDisplay: ['Clash Display', 'serif'],
        satoshi: ['Satoshi', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
