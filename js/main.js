// MENU
function toggleMenu(){
    const nav = document.getElementById("navMenu");
    nav.style.display = nav.style.display === "block" ? "none" : "block";
}

// DARK MODE
function toggleMode(){
    document.body.classList.toggle("dark");
}

// CAROUSEL
let index = 0;
const slides = document.getElementById("slideContainer");
const totalSlides = slides.children.length;

function showSlide(i){
    if(i >= totalSlides) index = 0;
    if(i < 0) index = totalSlides - 1;
    slides.style.transform = `translateX(${-index * 100}%)`;
}

function moveSlide(step){
    index += step;
    showSlide(index);
}

setInterval(()=>{
    index++;
    showSlide(index);
},3000);
// MOBILE MENU
function toggleMenu(){
    const nav = document.getElementById("navMenu");
    if(nav.style.display === "block"){
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}

// CAROUSEL
let index = 0;
const slides = document.getElementById("slideContainer");
const totalSlides = slides.children.length;

function showSlide(i){
    if(i >= totalSlides) index = 0;
    if(i < 0) index = totalSlides - 1;
    slides.style.transform = `translateX(${-index * 100}%)`;
}

function moveSlide(step){
    index += step;
    showSlide(index);
}

function autoSlide(){
    index++;
    showSlide(index);
}

setInterval(autoSlide, 3000);
