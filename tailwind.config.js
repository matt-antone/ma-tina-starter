/** @type {import('tailwindcss').Config} */
const { white } = require('./styles/tailwind/prose/white')
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./content/**/*.{md,mdx,json,markdown}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: colors.lime[500],
      secondary: colors.purple[500]
    },
    extend: {
      typography: ({ theme }) => ({
        white
      })
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
