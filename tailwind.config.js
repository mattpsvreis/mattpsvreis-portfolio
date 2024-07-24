/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-glow': {
          'text-shadow': '0 0 10px rgba(255, 255, 255, 0.3)',
        },
      });
    },
  ],
};
