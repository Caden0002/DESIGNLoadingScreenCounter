/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {

      screens: {
        'sm': '576px',
        'md': '1280px',
        'lg': '1440px',
        'xl': '1900px',
      },

      fontFamily: {
        OldSTT: ['Old Standard TT', 'serif'],
      },

      colors: {
        // Define your color variables here
        textColorPrimary: '#ffffff',
        textColorSecondary: '#8892af',
        textColorTertiary:  '#62FAD7',
        backgroundColorPrimary: '#000000',
        backgroundColorSecondary: '#0a1930',
        backgroundColorTertiary: '#151030',
        backgroundColorQuaternary: '#1a446e',
      },

    },
  },
  plugins: [],
};
