// --- KONFIGURASI GALERI LOKAL ---
const totalImages = 30; 
const imageExtension = '.png';


const galleryContainer = document.getElementById('gallery');

// Membuat elemen gambar secara otomatis berdasarkan konfigurasi di atas
for (let i = 1; i <= totalImages; i++) {
    const slideDiv = document.createElement('div');
    slideDiv.className = 'insta-slide';
    
    const img = document.createElement('img');
    img.src = `gallery/${i}${imageExtension}`;
    img.alt = `Hairdo ${i}`;
    
    slideDiv.appendChild(img);
    galleryContainer.appendChild(slideDiv);
}

// LOGIKA PERGANTIAN OTOMATIS
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("insta-slide");
    
    if (slides.length === 0) return; 

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}   
    slides[slideIndex-1].style.display = "block"; 
    
    setTimeout(showSlides, 5000);
}

// LOGIKA BARU: LOGO BERGESER KE ATAS MENGIKUTI SCROLL HALAMAN
const logo = document.getElementById('logo');
window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    // Logo akan bergeser ke atas (nilai negatif pada translateY) seiring bertambahnya scroll
    logo.style.transform = `translateY(-${scrollTop}px)`;
});
