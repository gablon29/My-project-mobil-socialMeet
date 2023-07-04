/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",     "./node_modules/tw-elements/dist/js/**/*.js"
],

  theme: {
    extend: {
      screens: {
        'xs': '0px'
      },
      fontFamily: {
        "monserrat": ['Montserrat'],
        "worksans": ['Work Sans'],
      },
      backgroundImage: {
        'logo-image': "url('/src/images/2.png')",
        'svg-image': "url('/src/images/background.png')",
        'background-login': "url('/src/images/BackgroundLogin.png')",
        'background-landing': "url('/src/images/LandingBackground.png')"
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
         


        },
      },
    ],
  },
  plugins: [require("daisyui"), require("tw-elements/dist/plugin.cjs")],
};