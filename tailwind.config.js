/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-1": "#F1F5F9",
        "gray-2": "#d9dde0",
        "gray-3": "#c1c4c7",
        "gray-4": "#a9acae",
        "gray-5": "#919395",
        "gray-6": "#797b7d	",
        "accent-1": "#4DD49D",
        "accent-2": "#9AED37",
        "accent-3": "#2ACBC8",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")({ prefix: "ui" })],
}
