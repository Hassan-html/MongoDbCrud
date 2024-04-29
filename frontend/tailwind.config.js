/* eslint-disable no-undef */
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
    flowbite.content(),
  ],
  theme: {
    colors: {
      primary: "#510AC9",
    },
    extend: {},
  },
  plugins: [flowbite.plugin()],
};
