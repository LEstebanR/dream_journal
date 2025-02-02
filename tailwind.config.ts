import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        primary: "#4D81FA",
        primaryDark: "#2E5BFF",
        secondary: "#C1FA5F",
        tertiary: "#FA6B4D",
        formBg: "#F3F4F6",
        formBgDark: "#2d3748",
      },
    },
  },
  plugins: [],
} satisfies Config;
