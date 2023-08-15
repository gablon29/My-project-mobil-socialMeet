/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}', "./node_modules/**/**/*.{js,jsx,ts,tsx","./node_modules/**/**/**/*.{js,jsx,ts,tsx", "./node_modules/**/*.{js,jsx,ts,tsx"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        poppinsBold: ['Poppins-Bold'],
        poppinsSemiBold: ['Poppins-SemiBold'],
      },
      colors: {
        naranja: '#FB6726',
        naranjaClaro: '#FF8822',
        gris: '#DADADA',
        new: "#FEC89A",
        lightnew: "#FEE4CE",
        rosa: "#FEC89A",
        clarito: "#FFF1E5",
        celeste: "#63C5C9",
        verde: "#80FF7E",
        limon: "#9CC963",
        rojo: "#C96363",
        amarillo: "#DCCE4E",
      },
      fontSize: {
        //no funca no sé pq
        xxs: [{fontSize: '0.625rem'}, { lineHeight: '0.875rem' }],
        xxxs: ['0.5rem', { lineHeight: '0.625rem' }],
      },
    },
  },
  variants: {
    extend: {
      picker: ['responsive'],
    },
  },
  plugins: [],
};