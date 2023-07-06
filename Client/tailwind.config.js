/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        poppinsBold: ['Poppins-Bold'],
        poppinsSemiBold: ['Poppins-SemiBold'],
      },
      colors: {
        naranja: '#FB6726',
        gris: '#DADADA',
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
