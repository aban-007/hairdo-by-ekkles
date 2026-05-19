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

// --- LOGIKA BARU: INTERAKSI & PEMBATASAN GERAK WA LOGO ---
const waLogo = document.getElementById('waLogo');

// 1. Efek Klik: Bergerak ke atas 5mm sebentar lalu kembali bawah
waLogo.addEventListener('click', () => {
    // Hapus class jika animasi sedang berjalan agar bisa dipicu kembali saat diklik ulang
    waLogo.classList.remove('wa-bounce-animation');
    // Memicu reflow browser agar animasi reset
    void waLogo.offsetWidth; 
    // Jalankan animasi kembali
    waLogo.classList.add('wa-bounce-animation');
});

// 2. Efek Scroll: Berhenti di batas bawah galleryContainer (tidak ikut turun)
window.addEventListener('scroll', () => {
    const galleryRect = galleryContainer.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Mengonversi jarak 5mm default dari bottom ke satuan pixel standar
    const defaultBottomPx = (5 * 96) / 25.4; 

    // Menghitung posisi absolut batas bawah galeri terhadap viewport screen saat ini
    const galleryBottomAbsolute = galleryRect.bottom;

    // Jika batas bawah galeri sejajar atau lebih tinggi dari letak seharusnya waLogo (windowHeight - defaultBottomPx)
    if (galleryBottomAbsolute <= (windowHeight - defaultBottomPx)) {
        // Kunci posisi bottom waLogo agar sejajar dengan bagian bawah galeri
        let dynamicBottom = windowHeight - galleryBottomAbsolute;
        waLogo.style.position = 'fixed';
        waLogo.style.bottom = `${dynamicBottom}px`;
    } else {
        // Kembalikan ke posisi semula di pojok kanan bawah layar (5mm dari dasar)
        waLogo.style.position = 'fixed';
        waLogo.style.bottom = '5mm';
    }
});