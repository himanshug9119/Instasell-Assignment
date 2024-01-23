/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "yellow-light": "#FFF8DB",
        "blue-dark": "#EAF4FF",
        "orange-light": "#FFF7EE",
        "gray-dark": "#956f00",
        "eye-color": "#ffc879",
        "order-color": "#ffebd5",
        "backgroundColor": "#fffdfa",
        "button-color": "#2a2a2a",
      },
    },
  },
  plugins: [],
};


