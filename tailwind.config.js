/* eslint-disable quotes */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '1000px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      bebas: ['Bebas Neue', 'cursive'],
      lato: ['Lato', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      code: ['Source Code Pro', 'monospace'],
    },
    extend: {
      keyframes: {
        jello: {
          '0%': {
            scale: '1.3',
            transform: 'rotate(0deg)',
            opacity: '1',
          },
          '50%': {
            scale: '1.7',
            transform: 'rotate(3deg)',
            opacity: '0.5',
          },
          '70%': {
            scale: '1.2',
            transform: 'rotate(-1deg)',
            opacity: '0.7',
          },
          '100%': {
            scale: '1.3',
            transform: 'rotate(0deg)',
            opacity: '1',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        'float-delayed': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-15px)',
          },
        },
        'float-slow': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        shimmer: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
      animation: {
        jello: 'jello 20s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 8s ease-in-out infinite 1s',
        'float-slow': 'float-slow 10s ease-in-out infinite 2s',
        shimmer: 'shimmer 2s infinite',
      },
      colors: {
        'oxford-blue': '#101935',
        charcoal: '#33485E',
        'paynes-grey': '#557786',
        moonstone: '#78A6AE',
        'tiffany-blue': '#9AD4D6',
        'light-cyan': '#C6E9EB',
        'azure-blue': '#F2FDFF',
      },
      backgroundImage: {
        headshot: "url('./assets/img/headshot.jpeg')",
        neuro: "url('./assets/img/neuroexed.png')",
        landing: "url('./assets/img/landing.png')",
        tcsi: "url('./assets/img/tcsi.png')",
        playarti: "url('./assets/img/playarti.png')",
        richiet: "url('./assets/img/richiet.png')",
        programming: "url('./assets/img/programming.png')",
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
        spacing: 'margin, padding',
      },
      margin: {
        36: '9rem',
        128: '31rem',
        132: '33rem',
        144: '36rem',
        160: '40rem',
      },
    },
  },
  plugins: [],
};
