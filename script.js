// LOGIKA PERGANTIAN OTOMATIS
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("insta-slide");
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slideIndex++;
    
    // Reset index if it exceeds number of slides
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    
    
    // Show current slide
    slides[slideIndex - 1].style.display = "block";  
    
    // CHANGE TIME (5000ms = 5 Seconds)
    setTimeout(showSlides, 5000); 
}