/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens:{
        'extrasmall' : {'max' : '450px'},
        'vsmall' : {'max' : '750px'},
        'footer' : {'max' : '950px'},
        'small' : {'max': '1200px'}
      }
    },
  },
  plugins: [],
}

