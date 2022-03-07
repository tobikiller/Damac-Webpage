module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        greenTeal: "#7D8F3A",
        darkCoal: "#2D2323",
        darkGreen: "#375232",
        darkLight: " #B7B7B7",
        
      },
      fontFamily: {
        'Montserrat': "Montserrat",
        'Poppins': "Poppins",
        'Edwarain': "Edwardian Script",
        'JetBrain': "JetBrains Mono, monospace;",
      },
      backgroundImage:{
        "productPackage": "url('images/product package.png') ",
        "leaftContact": "url('images/leaf bg.png')",
        "direction": "url('images/direction.png')",
        "organicPowder": "url('images/organic powder background.png')",
        "superfood": "url('images/super food slider.png') "
        
      },
      backgroundSize:{
        '250px': "350px",
        '150px': "150px"
      }
    },
  },
  plugins: [],
}