/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkorangy: "#F4A261",
        lightorangy: "#F8D9A2",
        darky: "#264653",
        easy: "#cfdee3ab",
      },
    },
  },
  plugins: [],
};
