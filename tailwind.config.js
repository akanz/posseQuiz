module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wheat: '#FAF2F2',
        brown: '#832F2F',
        darkgreen: '#58942D',
        lightgreen: '#91D742',
        yyangYellow: '#ffa200',
        yyangRed: '#fd3d3c',
      },
      height: {
        "1/10": '10%',
      },
      width: {
        "3": "3px",
        "5": "5px"
      }
    },
  },
  plugins: [],
}