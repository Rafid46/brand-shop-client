/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        DM: "'DM Sans', sans-serif",
        Com: "'Comfortaa', sans-serif",
      },
    },
  },
  plugins: [require("daisyui"), require("@material-tailwind/react")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
