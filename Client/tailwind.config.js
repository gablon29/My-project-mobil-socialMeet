/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        600: "600",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        naranja: "#FB6726",
        gris: "#DADADA",
      },
      picker: {
        textAlign: "center",
        // Otros estilos personalizados para el Picker
      },
    },
  },
  variants: {
    extend: {
      picker: ["responsive"],
    },
  },
  plugins: [],
};
