/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#e9e5e5',
        primary: '#151518',
        secondary: '#6c8a4f',
        metal: '#74749c',
        tahiti: '#3ab7bf',
        silver: '#ecebff',
        bubble: '#ff77e9',
        bermuda: '#78dcca',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
    },
  },
  variants: {
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
  },
  plugins: [],
};
