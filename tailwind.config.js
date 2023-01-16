/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
			'sm': '640px',
			'md': '1000px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},
    fontFamily: {
      bebas: ['Bebas Neue', 'cursive'],
      lato: ['Lato', 'sans-serif'],
      montserrat:['Montserrat', 'sans-serif']
    },
    extend: {
      colors:{
        'std-red':'#F95C75',
      },
      backgroundImage:{
        "headshot":"url('./img/headshot.png')",
        "neuro":"url('./img/neuroexed.png')",
        "landing":"url('./img/landing.png')",
        "tcsi":"url('./img/tcsi.png')",
        "playarti":"url('./img/playarti.png')",
        "richiet":"url('./img/richiet.png')",
      },
      transitionProperty: {
        'height': 'height',
        'width': 'width',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
}
