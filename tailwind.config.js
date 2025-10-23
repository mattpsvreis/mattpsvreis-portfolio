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
      colors: {
        'gray-800': '#333333', // Matches #333333
        'gray-850': '#242323', // Matches rgb(36, 35, 35)
        'gray-900': '#1d1d1d', // Matches #1d1d1d
        'gray-700': '#4e4d4d', // Matches #4e4d4d
        'blue-200': '#cae2fd', // Matches rgb(202, 226, 253) and #cae2fd
      },
      boxShadow: {
        button: '0px 17px 5px 1px rgba(0, 0, 0, 0.2)', // Matches your custom shadow
      },
      textShadow: {
        button:
          '-1px -1px 1px rgba(224, 224, 224, 0.1), 0px 2px 3px rgba(0, 0, 0, 0.3)', // Matches your text shadow
        glow: '0px 0px 12px #cae2fd', // Matches checked state glow
      },
      borderRadius: {
        '6px': '6px', // For first/last child specific radius
        '10px': '10px', // For container and pseudo-element
      },
      width: {
        '[90px]': '90px', // Exact width for labels
        '[103%]': '103%', // Exact width for pseudo-element
      },
      height: {
        '[60px]': '60px', // Exact height for labels
      },
      fontSize: {
        '15px': '15px', // Exact font size
      },
      lineHeight: {
        '12px': '12px', // Exact line height
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-glow': {
          'text-shadow': '0 0 10px #959de6',
        },
        '.text-underglow': {
          'text-shadow': '0 1px 0 #959de6',
        },
        '.icon-glow': {
          filter: 'drop-shadow(0 0 6px #959de6)',
        },
        '.list-circle': {
          'list-style-type': 'circle',
        },
        '.render-pixelated': {
          'image-rendering': 'pixelated',
        },
      });
    },
  ],
};
