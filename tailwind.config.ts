import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        sand: "#efe3d1",
        ink: "#15252c",
        clay: "#9b6b4d",
        olive: "#465245",
        gold: "#d5b36a"
      },
      fontFamily: {
        display: [
          "Georgia",
          "Times New Roman",
          "serif"
        ],
        body: [
          "system-ui",
          "sans-serif"
        ]
      },
      boxShadow: {
        card: "0 20px 50px rgba(21, 37, 44, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
