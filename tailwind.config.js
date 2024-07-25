/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xs': '375px',
        // => @media (min-width: 375px) { ... }
        '2xs': '390px',
        // => @media (min-width: 390px) { ... }
        xs: '430px',
        // => @media (min-width: 430px) { ... }
        '3xl': '1900px',
        // => @media (min-width: 1900px) { ... }
        '4xl': '2500px',
        // => @media (min-width: 2500px) { ... }
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-glow': {
          'text-shadow': '0 0 10px rgba(255, 255, 255, 0.6)',
        },
        '.list-circle': {
          'list-style-type': 'circle',
        },
      });
    },
  ],
};
