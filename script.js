
const translations = {
    'id': {
        'title': 'WEDDING PACKAGE',
        'subtitle': 'BOOKING HAIRDO',
        'label_nama': 'Nama Client',
        'label_wa': 'Nomor WhatsApp',
        'label_tanggal': 'Tanggal Booking',
        'label_jam': 'Jam Booking',
        'label_lokasi': 'Lokasi Hairdo Dilakukan',
        'label_acara': 'Jenis Acara',
        'label_pax': 'Total Pax',
        'label_retouch': 'Retouch',
        'label_usia': 'Di Atas 45 Tahun',
        'label_facelift': 'Facelift',
        'label_hairclip': 'Hairclip',
        'label_portfolio': 'Portfolio',
        'label_photoshoot': 'Photoshoot',
        'label_standby': 'Stand by',
        'label_addtrial': 'Add Trial',
        'label_pembayaran': 'Pembayaran',
        'submitBtn': 'KIRIM BOOKING',
        'successMessage': 'Booking berhasil dikirim ✨',
        'cta_ig': 'FOLLOW OUR INSTAGRAM',
        'promo_title': 'HAPPY WEDDING',
        'p1': 'Free hairclip sintetis jika di butuhkan, dan menjadi hak milik dan tidak perlu di kembalikan',
        'p2': 'Konfirmasi warna hairclip max H-3 minggu sebelum acara',
        'p3': 'Free transport radius 20 km, di atas 20 km silahkan konfirmasi untuk penambahan biaya transportnya.',
        'p4': 'Trial wedding di weekdays, jika ingin di weekend maka ada penambahan 300k',
        'p5': 'Kit touch up gratis',
        'p6': 'Certified hairstylist & hijabstylist',
        'p7': '✨Suka share tutorial dan cerita menarik ttg rambut',
        'p8': '🙋🏻‍♀️ OPEN SELF-PRO HAIRDO CLASS',
        'p9': 'PL/ availability👇🏻(Admin)'
    },
    'en': {
        'title': 'WEDDING PACKAGE',
        'subtitle': 'BOOKING HAIRDO',
        'label_nama': 'Client Name',
        'label_wa': 'WhatsApp Number',
        'label_tanggal': 'Booking Date',
        'label_jam': 'Booking Time',
        'label_lokasi': 'Hairdo Location',
        'label_acara': 'Event Type',
        'label_pax': 'Total Pax',
        'label_retouch': 'Retouch',
        'label_usia': 'Above 45 Years Old',
        'label_facelift': 'Facelift',
        'label_hairclip': 'Hairclip',
        'label_portfolio': 'Portfolio',
        'label_photoshoot': 'Photoshoot',
        'label_standby': 'Stand by',
        'label_addtrial': 'Add Trial',
        'label_pembayaran': 'Payment',
        'submitBtn': 'SEND BOOKING',
        'successMessage': 'Booking sent successfully ✨',
        'cta_ig': 'FOLLOW OUR INSTAGRAM',
        'promo_title': 'HAPPY WEDDING',
        'p1': 'Free synthetic hairclip if needed, it becomes yours and does not need to be returned.',
        'p2': 'Confirm hairclip color max 3 weeks before the event.',
        'p3': 'Free transport for 20 km radius, for more than 20 km please confirm for additional transport cost.',
        'p4': 'Trial wedding on weekdays, if you want on weekend there is an additional 300k charge.',
        'p5': 'Free touch-up kit',
        'p6': 'Certified hairstylist & hijabstylist',
        'p7': '✨Sharing hair tutorials and interesting stories',
        'p8': '🙋🏻‍♀️ OPEN SELF-PRO HAIRDO CLASS',
        'p9': 'PL/ availability👇🏻(Admin)'
    }
};

function setLanguage() {
    const lang = navigator.language.startsWith('id') ? 'id' : 'en';
    const t = translations[lang];
    
    document.getElementById('title').innerText = t.title;
    document.getElementById('subtitle').innerText = t.subtitle;
    document.getElementById('label_nama').innerText = t.label_nama;
    document.getElementById('label_wa').innerText = t.label_wa;
    document.getElementById('label_tanggal').innerText = t.label_tanggal;
    document.getElementById('label_jam').innerText = t.label_jam;
    document.getElementById('label_lokasi').innerText = t.label_lokasi;
    document.getElementById('label_acara').innerText = t.label_acara;
    document.getElementById('label_pax').innerText = t.label_pax;
    document.getElementById('label_retouch').innerText = t.label_retouch;
    document.getElementById('label_usia').innerText = t.label_usia;
    document.getElementById('label_facelift').innerText = t.label_facelift;
    document.getElementById('label_hairclip').innerText = t.label_hairclip;
    document.getElementById('label_portfolio').innerText = t.label_portfolio;
    document.getElementById('label_photoshoot').innerText = t.label_photoshoot;
    document.getElementById('label_standby').innerText = t.label_standby;
    document.getElementById('label_addtrial').innerText = t.label_addtrial;
    document.getElementById('label_pembayaran').innerText = t.label_pembayaran;
    document.getElementById('submitBtn').innerText = t.submitBtn;
    document.getElementById('successMessage').innerText = t.successMessage;
    document.getElementById('cta_ig').innerText = t.cta_ig;
    document.getElementById('promo_title').innerText = t.promo_title;
    document.getElementById('p1').innerText = t.p1;
    document.getElementById('p2').innerText = t.p2;
    document.getElementById('p3').innerText = t.p3;
    document.getElementById('p4').innerText = t.p4;
    document.getElementById('p5').innerText = t.p5;
    document.getElementById('p6').innerText = t.p6;
    document.getElementById('p7').innerText = t.p7;
    document.getElementById('p8').innerText = t.p8;
    document.getElementById('p9').innerText = t.p9;
}

window.onload = setLanguage;

// --- Logika Asli (Jangan dirubah) ---
const today = new Date().toISOString().split('T')[0];
document.getElementById('tanggal').setAttribute('min', today);

const logo = document.getElementById('logoEkkles');
logo.addEventListener('click', () => {
    logo.classList.add('pressed');
    setTimeout(() => { logo.classList.remove('pressed'); }, 150);
    setTimeout(() => { window.location.href = "https://aban-007.github.io/hairdo-by-ekkles/"; }, 300);
});

const waLogo = document.getElementById('waLogo');
waLogo.addEventListener('click', () => {
    waLogo.classList.add('pressed');
    setTimeout(() => { waLogo.classList.remove('pressed'); }, 150);
    setTimeout(() => {
        const text = encodeURIComponent("Form sudah saya isi dan kirim saya tunggu kabarnya selanjutnya yaa Kak");
        window.open(`https://wa.me/6281314798161?text=${text}`, '_blank');
    }, 300);
});

const scriptURL="https://script.google.com/macros/s/AKfycbxXi12uX6D47EgRea_oaDs9YE7mIlLWWH9F2QYTDVq6_SXH1lean4YQQwLysbwtE6vzTw/exec";
    

const form = document.getElementById('bookingForm');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const inputTanggal = document.getElementById('tanggal').value;
    const tanggalPilihan = new Date(inputTanggal);
    const hariIni = new Date();
    
    hariIni.setHours(0,0,0,0);
    tanggalPilihan.setHours(0,0,0,0);
    
    if (tanggalPilihan < hariIni) {
        alert('tanggal sudah berlalu.');
        return; 
    }
    
    submitBtn.disabled = true;
    
    const data = {
        nama: document.getElementById('nama').value,
        wa: document.getElementById('wa').value,
        tanggal: document.getElementById('tanggal').value,
        jam: document.getElementById('jam').value,
        lokasi: document.getElementById('lokasi').value,
        acara: document.getElementById('acara').value,
        total_pax: document.getElementById('total_pax').value,
        retouch: document.getElementById('retouch').value,
        usia_45: document.getElementById('usia_45').value,
        facelift: document.getElementById('facelift').value,
        hairclip: document.getElementById('hairclip').value,
        portfolio: document.getElementById('portfolio').value,
        photoshoot: document.getElementById('photoshoot').value,
        standby: document.getElementById('standby').value,
        addtrial: document.getElementById('addtrial').value,
        pembayaran: document.getElementById('pembayaran').value,
        status: 'belum bayar',
    };

    try {
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if(result.result === 'success'){
            document.getElementById('successMessage').style.display = 'block';
            form.reset();
            document.getElementById('tanggal').setAttribute('min', today);
            setTimeout(() => {
                window.location.href = "https://aban-007.github.io/hairdo-by-ekkles/";
            }, 5000);
            setTimeout(() => {
                submitBtn.disabled = false;
            }, 300000); 
        }
    } catch(error){
        alert('Terjadi kesalahan.');
        console.log(error);
        submitBtn.disabled = false;
    }
});
