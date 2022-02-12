const btnToggle = document.getElementById("toggle-btn")
const navBar = document.querySelector(".navbar")

btnToggle.addEventListener("click", function(){
    navBar.classList.toggle("show")
    
})