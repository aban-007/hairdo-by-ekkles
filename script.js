// LOGIKA PERGANTIAN OTOMATIS GALERI
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("insta-slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}   
    slides[slideIndex-1].style.display = "block"; 
    
    // WAKTU PERGANTIAN (5000ms = 5 Detik)
    setTimeout(showSlides, 5000);
}

// LOGIKA INTERAKSI LOGO BERGESER 5MM
const logo = document.getElementById('logo');

// Fungsi untuk menggeser logo ke kanan (5mm)
function moveRight() {
    logo.style.left = '5mm';
}

// Fungsi untuk mengembalikan logo ke posisi semula (0mm)
function resetPosition() {
    logo.style.left = '0mm';
}

// Trigger saat kursor melewati logo (hover) atau ditekan (click/hold)
logo.addEventListener('mouseenter', moveRight);
logo.addEventListener('mousedown', moveRight);

// Trigger saat kursor keluar dari logo atau dilepas kliknya
logo.addEventListener('mouseleave', resetPosition);
logo.addEventListener('mouseup', resetPosition);