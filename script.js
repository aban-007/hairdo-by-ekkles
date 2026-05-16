// LOGIKA PERGANTIAN OTOMATIS
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("insta-slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }   
    slides[slideIndex-1].style.display = "block"; 
    
    // WAKTU PERGANTIAN (5000ms = 5 Detik)
    setTimeout(showSlides, 5000);
}