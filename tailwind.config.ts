import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B1F3A",
          blue: "#1E4E89",
          orange: "#F28C28"
        }
      }
    }
  },
  plugins: []
};

export default config;
