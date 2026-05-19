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

// LOGIKA LOGO UTAMA BERGESER KE ATAS MENGIKUTI SCROLL HALAMAN
const logo = document.getElementById('logo');
const waLogo = document.getElementById('waLogo');

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    // Logo utama bergeser ke atas
    logo.style.transform = `translateY(-${scrollTop}px)`;

    // LOGIKA DETEKSI POSISI STRUKTURAL UNTUK WA LOGO
    const galleryRect = galleryContainer.getBoundingClientRect();
    const waRect = waLogo.getBoundingClientRect();

    // Batas bawah (base) dari gallery container relatif terhadap viewport
    const galleryBase = galleryRect.bottom;
    // Batas bawah awal walogo (sebelum terkena stop/shift ke atas) jika berada pada posisi bottom: 3mm default
    const viewportHeight = window.innerHeight;
    
    // Konversi mm ke pixel kasar untuk kalkulasi (1mm ~ 3.78px)
    const mmToPx = 3.78; 
    const defaultBottomPx = 3 * mmToPx;
    const waHeight = waRect.height;
    
    // Hitung di mana posisi bottom waLogo seharusnya jika tidak diinterupsi scroll
    const currentWaBase = viewportHeight - defaultBottomPx;

    // Jika base waLogo melewati atau sejajar dengan base dari galleryContainer saat scroll ke bawah
    if (currentWaBase >= galleryBase) {
        // Berhenti di base galleryContainer, lalu naik permanen 3mm (+3mm dari base galeri, sehingga posisinya sedikit terangkat)
        const targetBottom = viewportHeight - galleryBase + (3 * mmToPx);
        waLogo.style.bottom = `${targetBottom}px`;
    } else {
        // Kembali ke posisi default awal 3mm jika belum mencapai batas bawah galeri
        waLogo.style.bottom = `3mm`;
    }
});

// LOGIKA KLIK WA LOGO: Memantul naik 5mm sesaat lalu kembali
waLogo.addEventListener('click', () => {
    waLogo.classList.add('wa-bounce-active');
    
    // Hapus class setelah animasi selesai (300ms) agar bisa di-trigger kembali pada klik berikutnya
    setTimeout(() => {
        waLogo.classList.remove('wa-bounce-active');
    }, 300);
});