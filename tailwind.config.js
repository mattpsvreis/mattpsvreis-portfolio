import { TailwindConfig } from '@atomos/tailwind/tailwind.config';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: TailwindConfig.darkMode,
  content: TailwindConfig.content,
  theme: {
    container: TailwindConfig.theme.container,
    extend: {
      fontFamily: TailwindConfig.theme.extend.fontFamily,
      colors: {
        primary: 'rgba(15, 35, 53)',
        secondary: 'rgba(204, 229, 223)',
        accent: 'rgba(191, 38, 89)',
        brand: {
          primary: '#3e90f8',
          'primary-darken': '#1f7af9',
          secondary: '#eff6ff',
          background: '#f4f5f4',
          background_cards: '#fff',
          background_auth: '#fff',
          'loading-darken': '#080d1c',
          border: '#e3e5e9',
          title: '#000',
          text: '#5C6370',
          label: '#2E3138',
          placeholder: '#8F96A3',
          border_header: '#ECEEED',
          background_not_found: '#080d1c',
        },
        gray: {
          50: '#f1f2f4',
          100: '#e3e5e9',
          200: '#c7cad1',
          300: '#abb0bb',
          400: '#8f96a3',
          500: '#737b8c',
          600: '#5c6370',
          700: '#454a54',
          800: '#2e3138',
          900: '#17181c',
        },
        red: {
          50: '#ffe8e6',
          200: '#f99993',
          600: '#f10e15',
          900: '#c50000',
        },
        yellow: {
          50: '#fff8e1',
          200: '#ffe082',
          400: '#fec10a',
          700: '#fea101',
        },
        green: {
          50: '#ceeacc',
          400: '#75c671',
          500: '#32ae30',
          700: '#178d1b',
        },
        blue: {
          50: '#e8e9fc',
          200: '#9ba3f2',
          400: '#4863e9',
          600: '#003dd7',
        },
        neutral: {
          50: '#f4f5f4',
          100: '#eaecf0',
          900: '#1b1d1c',
        },
      },
      keyframes: TailwindConfig.theme.extend.keyframes,
      animation: TailwindConfig.theme.extend.animation,
      backgroundColor: {
        brand: {
          default: {
            primary: '#808CFC',
            secondary: '#060C35',
          },
        },
      },
    },
  },
};
