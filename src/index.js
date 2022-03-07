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


prevBtn.addEventListener("click", e=>{
    const currentSlide = trackBox.querySelector(".carousel-slide")
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = indicator.querySelector(".current-slide")
    const prevDot = currentDot.previousElementSibling
    const prevIndex = slides.findIndex(slide => slide === prevSlide)
  
    moveSlide(trackBox, currentSlide , prevSlide)
    updateDots(currentDot,prevDot)
    hiddenArrows(slides, prevBtn, nextBtn, prevIndex)

})


nextBtn.addEventListener("click", e=> {
    const currentSlide = trackBox.querySelector(".carousel-slide")
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = indicator.querySelector(".current-slide")
    const nextDot = currentDot.nextElementSibling
    const nextIndex = slides.findIndex(slide => slide === nextSlide)
    console.log(nextIndex);
  
    moveSlide(trackBox, currentSlide , nextSlide)
    updateDots(currentDot,nextDot)
    hiddenArrows(slides, prevBtn, nextBtn, nextIndex)
})


function hiddenArrows(slides, prevBtn, nextBtn, targetIndex){
    if(targetIndex === 0){
        prevBtn.classList.add("hidden-arrow")
        nextBtn.classList.remove("hidden-arrow")
    }else if(targetIndex === slides.length -1){
        prevBtn.classList.remove("hidden-arrow")
        nextBtn.classList.add("hidden-arrow")
    }else{
        prevBtn.classList.remove("hidden-arrow")
        nextBtn.classList.remove("hidden-arrow")
    }
}


// indicator
function updateDots(currentDot,targetDot){
    currentDot.classList.remove("current-slide")
    targetDot.classList.add("current-slide")
}

indicator.addEventListener("click", e=>{
    const targetDot = e.target.closest('button')
   if(!targetDot) return
    const currentSlide = trackBox.querySelector(".carousel-slide")
    const currentDot = indicator.querySelector(".current-slide")
    
    const targetIndex = dots.findIndex(dots => dots === targetDot)
    const targetSlide = slides[targetIndex]

    moveSlide(trackBox, currentSlide , targetSlide)
    updateDots(currentDot,targetDot)
    hiddenArrows(slides, prevBtn, nextBtn, targetIndex )
})