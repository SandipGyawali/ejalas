/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      darkBlue: "#263A57",
      gradientBlue: "rgb(45,75,135, 0.84)",
      blue: "#1076b9",
      textBlue: "#4a596b",
      white: "#ffffff",
      white2: "#F1F1F1",
      white3: "#DADADA",
      red: "#F84E4E",
      darkRed: "#CC3C3C",
      black: "#000000",
      black2: "#333",
      grey: "#6c757d",
      darkGrey: "#595959",
      green2: "#538A43",
      orange: "#E28118",
    },
    extend: {
      animation: {
        marquee: "marquee 100s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(28%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
