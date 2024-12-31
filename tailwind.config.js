/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      screens: {
        small: { raw: "(max-width: 400px)" },
        tablet: "700px",
        laptop: "900px",
        desktop: "1024px",
        large: "1200px",
        tall: { raw: "(min-height: 650px)" },
        short: { raw: "(max-height: 500px)" },
      },
    },
  },
  plugins: [],
};


