module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        slate: "#1F1D35",
        preBackground: "#1F1D35",
        primary: {
          50: "#edf5ff",
          100: "#dfebff",
          200: "#c5daff",
          300: "#a2c1ff",
          400: "#7d9dfc",
          500: "#5f7af5",
          600: "#4152ea", //Main
          700: "#3340cf",
          800: "#2c37a7",
          900: "#2b3584",
        },
      },
    },
    borderRadius: {
      sm: "6px",
      md: "12px",
    },
  },
  plugins: [],
};
