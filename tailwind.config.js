/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      screens: {
        xsm: '450px', // Add a custom breakpoint for xsm
      },
      minWidth: {
       '3xl': '1920px', // Adding custom min-width value
       
      },
      colors: {
        themeText: 'rgb(var(--themeText))', // Adding custom color using CSS variable
        'btn-color':'rgb(var(--btn-text))',
      },
    },
  },
  variants: {},
  plugins: [],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
}