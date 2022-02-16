module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        greenTeal: "#7D8F3A",
        darkCoal: "#2D2323",
        darkGreen: "#375232",
        
      },
      fontFamily: {
        'Montserrat': "Montserrat",
        'Poppins': "Poppins",
        'Edwarain': "Edwardian Script",
        'JetBrain': "JetBrains Mono, monospace;",
      },
      backgroundImage:{
        "productPackage": "url('images/product package.png') "
      },
      backgroundSize:{
        '250px': "350px",
        '150px': "150px"
      }
    },
  },
  plugins: [],
}