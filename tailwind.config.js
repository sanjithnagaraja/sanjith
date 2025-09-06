/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <-- REQUIRED for class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        worksans:["Work Sans", "sans-serif"],
        poppins:["Poppins", "sans-serif"],
      },
      colors:{
        primary:"rgb(var(--color-primary) / <alpha-value>)",
        secondary:"rgb(var(--color-secondary)/<alpha-value>)",
        textBase:"rgb(var(--color-text-base)/<alpha-value>)",
        textSecondary:"rgb(var(--color-text-secondary)/<alpha-value>)",
        hoBg:"rgb(var(--color-bg-primary) / <alpha-value>)",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in forwards',
        fadeOut: 'fadeOut 0.5s ease-out forwards', 'spin-slow': 'spin 10s linear infinite',
      },
      screens: {
                'xs': '300px',  // Custom breakpoint for 300px+
                'sm-xs': '400px' // Custom breakpoint for 400px+
      }
    },
  },
  plugins: [],
}

