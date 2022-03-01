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


// carousel

const trackBox = document.getElementById("trackbox-carousel")
const slides = Array.from(trackBox.children)
const nextBtn = document.getElementById("next-btn")
const prevBtn = document.getElementById("prev-btn")
const indicator = document.querySelector(".indicator")
const dots = Array.from(indicator.children)


const slideWidth = slides[0].getBoundingClientRect().width

function slidePosition(slide, index){
    slide.style.left = slideWidth * index +"px"

}

slides.forEach(slidePosition)

function moveSlide(trackBox, currentSlide, targetslide){
    trackBox.style.transform = 'translateX(-'+ targetslide.style.left +')'
    currentSlide.classList.remove("carousel-slide")
    targetslide.classList.add("carousel-slide")
}

nextBtn.addEventListener("click", e=> {
    const currentSlide = trackBox.querySelector(".carousel-slide")
    const nextSlide = currentSlide.nextElementSibling;

    moveSlide(trackBox, currentSlide , nextSlide)
})

prevBtn.addEventListener("click", e=>{
    const currentSlide = trackBox.querySelector(".carousel-slide")
    const prevSlide = currentSlide.previousElementSibling;

    moveSlide(trackBox, currentSlide , prevSlide)
})