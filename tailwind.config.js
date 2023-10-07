/** @type {import('tailwindcss').Config} */
module.exports = {
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
      code: ['Source Code Pro', 'monospace']
    },
    extend: {
      colors: {
        'oxford-blue': '#101935',
        'paynes-grey': '#557786',
        'tiffany-blue': '#9AD4D6',
        'light-cyan': '#C6E9EB',
        'azure-blue': '#F2FDFF'
      },
      backgroundImage: {
        headshot: "url('./assets/img/headshot.png')",
        neuro: "url('./assets/img/neuroexed.png')",
        landing: "url('./assets/img/landing.png')",
        tcsi: "url('./assets/img/tcsi.png')",
        playarti: "url('./assets/img/playarti.png')",
        richiet: "url('./assets/img/richiet.png')",
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
        spacing: 'margin, padding',
      },
      keyframes: {}
    },
  },
  plugins: [],
};
