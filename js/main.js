// Dark Mode
function toggleMode(){
    document.body.classList.toggle("dark");
}

// Mobile Menu
function toggleMenu(){
    const nav=document.getElementById("navMenu");
    nav.style.display = nav.style.display==="block" ? "none":"block";
}

// Carousel
let index=0;
const slides=document.getElementById("slideContainer");
const total=slides.children.length;

function showSlide(i){
    if(i>=total) index=0;
    if(i<0) index=total-1;
    slides.style.transform=`translateX(${-index*100}%)`;
}

function moveSlide(step){
    index+=step;
    showSlide(index);
}

setInterval(()=>{
    index++;
    showSlide(index);
},3000);
