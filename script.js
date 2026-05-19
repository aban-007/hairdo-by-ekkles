// --- KONFIGURASI GALERI LOKAL ---
const totalImages = 30; 
const imageExtension = '.png'; 


const galleryContainer = document.getElementById('gallery');
const imgNumberBox = document.getElementById('imgNumberBox');

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
    
    // Update angka pada kotak indikator menjadi format 2 digit (misal: 01, 02, dst)
    imgNumberBox.textContent = slideIndex.toString().padStart(2, '0');
    
    setTimeout(showSlides, 5000);
}

// LOGIKA LOGO UTAMA BERGESER KE ATAS MENGIKUTI SCROLL HALAMAN
const logo = document.getElementById('logo');
const waLogo = document.getElementById('waLogo');

// Fungsi untuk menghitung dan mengatur posisi horizontal kotak nomor gambar agar selalu 5mm dari sisi kiri galeri
function adjustNumberBoxLeftPosition() {
    const galleryRect = galleryContainer.getBoundingClientRect();
    const mmToPx = 3.78;
    const targetLeft = galleryRect.left - (15 * mmToPx) - (5 * mmToPx);
    
    // Pengaman Handphone (Cellphone): Jika layar kecil, samakan jaraknya dari kiri dengan WA logo dari kanan (5mm)
    if (targetLeft < 0 || window.innerWidth < 1160) {
        imgNumberBox.style.left = `5mm`;
    } else {
        imgNumberBox.style.left = `${targetLeft}px`;
    }
}

// Jalankan fungsi saat load pertama dan ketika window di-resize
adjustNumberBoxLeftPosition();
window.addEventListener('resize', adjustNumberBoxLeftPosition);

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    // Logo utama bergeser ke atas
    logo.style.transform = `translateY(-${scrollTop}px)`;

    // LOGIKA DETEKSI POSISI STRUKTURAL UNTUK WA LOGO & KOTAK NOMOR GAMBAR
    const galleryRect = galleryContainer.getBoundingClientRect();
    
    // Jalankan penyesuaian horizontal saat scroll agar posisi kiri tetap konsisten
    adjustNumberBoxLeftPosition();

    // Batas bawah (base) dari gallery container relatif terhadap viewport
    const galleryBase = galleryRect.bottom;
    const viewportHeight = window.innerHeight;
    
    // Konversi mm ke pixel kasar untuk kalkulasi (1mm ~ 3.78px)
    const mmToPx = 3.78; 
    const defaultBottomPx = 3 * mmToPx;
    
    // Hitung di mana posisi bottom waLogo seharusnya jika tidak diinterupsi scroll
    const currentWaBase = viewportHeight - defaultBottomPx;

    // Jika base melewati atau sejajar dengan base dari galleryContainer saat scroll ke bawah (Mencegah melintasi baseline)
    if (currentWaBase >= galleryBase) {
        const targetBottom = viewportHeight - galleryBase + (3 * mmToPx);
        waLogo.style.bottom = `${targetBottom}px`;
        imgNumberBox.style.bottom = `${targetBottom}px`; // Aligned sempurna dengan WA Logo & batas bawah galeri
    } else {
        // Kembali ke posisi default awal 3mm jika belum mencapai batas bawah galeri
        waLogo.style.bottom = `3mm`;
        imgNumberBox.style.bottom = `3mm`; // Aligned sempurna dengan WA Logo
    }
});

// LOGIKA KLIK WA LOGO: Memantul naik 5mm sesaat lalu kembali
waLogo.addEventListener('click', () => {
    waLogo.classList.add('wa-bounce-active');
    setTimeout(() => {
        waLogo.classList.remove('wa-bounce-active');
    }, 300);
});

// LOGIKA KLIK KOTAK NOMOR: Memiliki fitur animasi memantul yang sama persis dengan walogo
imgNumberBox.addEventListener('click', () => {
    imgNumberBox.classList.add('wa-bounce-active');
    setTimeout(() => {
        imgNumberBox.classList.remove('wa-bounce-active');
    }, 300);
});