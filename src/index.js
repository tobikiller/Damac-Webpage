const btnToggle = document.getElementById("toggle-btn")
const navBar = document.querySelector(".navbar")
const btnColor = document.querySelectorAll(".btn-color")
const rotateR = document.querySelector(".btn-rotateR")
const rotateL = document.querySelector(".btn-rotateL")
const Btnopacity = document.querySelector(".btn-opacity")

window.addEventListener("DOMContentLoaded", function(e){
    
    btnPressed()
})



window.addEventListener("scroll", function(){
    const navScroll = document.querySelector(".nav-scroll")
    let windowScrooll = window.pageYOffset
    if(windowScrooll > 20){
        navScroll.classList.add("box-glass")
    }else{
        navScroll.classList.remove("box-glass")
    }

    windowScrooll = window.scrollY
})

function btnPressed(){
    btnToggle.addEventListener("click", function(e){
       
        btnColor.forEach(function(e){
           
            if(navBar.classList.contains("show")){
                navBar.classList.remove("show")
               
               
            }else{
                navBar.classList.add("show")
            
            }
         })
     
        
    
        rotateR.classList.toggle("showR")
        Btnopacity.classList.toggle("op")
        rotateL.classList.toggle("showL")
    })
}

