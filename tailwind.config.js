/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
        38: '9.5rem',
        88: '22rem',
        104: '26rem',
        112: '28rem',
        128: '32rem',
      },
      colors: {},
      fontSize: {
        '3.5xl': ['2rem', '2.25rem'],
        '4.5xl': ['2.5rem', '2.5rem'],
      },
    },
  },
};
