/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#727272",
        "custom-red": "#b32021",
      },
    },
  },
  plugins: [
    // Add custom plugin for scrollbar utilities
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".scrollbar-hide::-webkit-scrollbar": {
          display: "none",
        },
        ".overflow-x-scroll-smooth": {
          "overflow-x": "auto",
          "scroll-behavior": "smooth",
          "-webkit-overflow-scrolling": "touch",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
