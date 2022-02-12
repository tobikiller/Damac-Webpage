const btnToggle = document.getElementById("toggle-btn")
const navBar = document.querySelector(".navbar")
const btnColor = document.querySelectorAll(".btn-color")
const rotateR = document.querySelector(".btn-rotateR")
const rotateL = document.querySelector(".btn-rotateL")
const Btnopacity = document.querySelector(".btn-opacity")

btnToggle.addEventListener("click", function(){
 
    btnColor.forEach(function(e){
        if(navBar.classList.contains("show")){
            navBar.classList.remove("show")
            rotateR.classList.add("backR")
         
            rotateR.classList.toggle("backR")
            console.log(rotateR);
        }else{
            navBar.classList.add("show")
       
            
 
           
        }
     })
 
    

    rotateR.classList.toggle("showR")
    console.log(rotateR);
    Btnopacity.classList.toggle("op")
    rotateL.classList.toggle("showL")
})