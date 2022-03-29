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
        primary: "#4152EA",
      },
    },
    borderRadius: {
      sm: "6px",
      md: "12px",
    },
  },
  plugins: [],
};
