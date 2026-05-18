// --- KONFIGURASI GALERI LOKAL ---
const totalImages = 30; 
const imageExtension = '.png'; 

const galleryContainer = document.getElementById('gallery');
const infoBox = document.getElementById('infoBox');

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
    
    // UPDATE NILAI ANGKA DI INFO BOX (Format 2-Digit)
    infoBox.textContent = String(slideIndex).padStart(2, '0');
    
    setTimeout(showSlides, 5000);
}

// LOGIKA PINNED / FIXED POSITION UNTUK INFO BOX AGAR TETAP DIAM SAAT SCROLL
function positionInfoBox() {
    const rect = galleryContainer.getBoundingClientRect();
    // Konversi 5mm ke pixel secara perkiraan (1mm ≈ 3.78px)
    const gapInPx = 5 * 3.779528;
    
    // Mengatur posisi awal sejajar kanan luar galeri + 5mm
    infoBox.style.top = `${rect.top}px`;
    infoBox.style.left = `${rect.right + gapInPx}px`;
}

// Jalankan kalkulasi posisi hanya saat loading awal dan resizing jendela browser
window.addEventListener('load', positionInfoBox);
window.addEventListener('resize', positionInfoBox);

// LOGIKA BARU: INTERAKSI LOGO (EFEK MEMANTUL KE BAWAH SAAT DIKLIK)
const logo = document.getElementById('logo');
logo.addEventListener('click', () => {
    logo.classList.add('logo-bounce-animation');
    
    setTimeout(() => {
        logo.classList.remove('logo-bounce-animation');
    }, 400);
});

// LOGIKA BARU: INTERAKSI TOMBOL WHATSAPP (EFEK MEMANTUL)
const waButton = document.getElementById('waButton');
waButton.addEventListener('click', () => {
    waButton.classList.add('bounce-animation');
    
    setTimeout(() => {
        waButton.classList.remove('bounce-animation');
    }, 400);
});