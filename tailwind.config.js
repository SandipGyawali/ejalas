/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      darkBlue: "#263A57",
      gradientBlue: "rgb(40,74,140, 0.80)",
      blue: "#1076b9",
      textBlue: "#4a596b",
      sideBarBlue: "#196CD4",
      skyBlue: "#CEE9FF",
      white: "#ffffff",
      white2: "#F1F1F1",
      white3: "#DADADA",
      white4: "#DDD8D8",
      white5: "#f3f3f3",
      red: "#e54a4a",
      darkRed: "#CC3C3C",
      black: "#000000",
      black2: "#333",
      grey: "#6c757d",
      grey2: "#464646",
      darkGrey: "#595959",
      green2: "#538A43",
      orange: "#E28118",
      orange2: "#F3A04A",
      "border-col": "#bdbdbd",
      "text-col": "#545454",
    },
    extend: {
      fontFamily: {
        sans: ["Baloo 2", "cursive"],
      },
      animation: {
        marquee: "marquee 100s linear infinite ",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(28%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [tailwindScrollbar],
};
