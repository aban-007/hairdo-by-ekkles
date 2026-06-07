const services = {
  regular: {
    label: "Regular Occasion",
    desc: "Graduation / Bridesmaid / Guest Party",
    price: 300000,
    included: ["Free aksesoris rambut sesuai ketersediaan", "Tidak termasuk hairclip"],
    addonGroups: [
      { title: "Touch-up During Event", subtitle: "Untuk client yang ingin rambut dicek / dirapikan lagi saat acara.", addons: [
        { id: "retouch_regular", label: "Add retouch", price: 200000, desc: "Hairdo touch-up saat acara." }
      ]},
      { title: "Special Need", subtitle: "Tambahan yang hanya muncul jika diperlukan.", addons: [
        { id: "facelift", label: "Add facelift tape", price: 100000, desc: "Opsional untuk hasil wajah lebih lifting." }
      ]}
    ]
  },
  special450: {
    label: "Sis Wedding / Pageant Finalist",
    desc: "Special Occasion",
    price: 450000,
    included: ["Free rent hairclip jika dibutuhkan", "Free aksesoris rambut sesuai ketersediaan"],
    addonGroups: [
      { title: "Touch-up During Event", subtitle: "Untuk acara panjang atau butuh retouch setelah sesi utama.", addons: [
        { id: "retouch_special", label: "Add retouch", price: 200000, desc: "Hairdo touch-up saat acara." }
      ]},
      { title: "Special Need", subtitle: "Tambahan opsional sesuai kebutuhan client.", addons: [
        { id: "facelift", label: "Add facelift tape", price: 100000, desc: "Opsional untuk hasil wajah lebih lifting." }
      ]}
    ]
  },
  sangjit: {
    label: "Sangjit / Engagement / Sweet17",
    desc: "Special Occasion",
    price: 500000,
    included: ["Free rent hairclip jika dibutuhkan", "Free aksesoris rambut sesuai ketersediaan"],
    addonGroups: [
      { title: "Touch-up During Event", subtitle: "Cocok jika ada pergantian sesi / foto / acara cukup panjang.", addons: [
        { id: "retouch_special", label: "Add retouch", price: 200000, desc: "Hairdo touch-up saat acara." }
      ]},
      { title: "Special Need", subtitle: "Tambahan opsional sesuai kebutuhan client.", addons: [
        { id: "facelift", label: "Add facelift tape", price: 100000, desc: "Opsional untuk hasil wajah lebih lifting." }
      ]}
    ]
  },
  portfolio: {
    label: "Portfolio",
    desc: "Per look",
    price: 250000,
    included: ["Harga per look"],
    addonGroups: [
      { title: "Special Need", subtitle: "Tambahan opsional sesuai kebutuhan look.", addons: [
        { id: "facelift", label: "Add facelift tape", price: 100000, desc: "Opsional untuk hasil wajah lebih lifting." }
      ]}
    ]
  },
  photoshoot: {
    label: "Photoshoot",
    desc: "Self / Family / Prewedding",
    price: 350000,
    included: ["Free transport Gading Serpong, Alsut, Karawaci, BSD", "Free aksesoris rambut sesuai ketersediaan"],
    addonGroups: [
      { title: "Standby Photoshoot", subtitle: "Untuk photoshoot yang butuh ganti look atau hairdo dicek selama sesi.", addons: [
        { id: "standby", label: "Add standby", price: 100000, desc: "Jika standby, jumlah look bebas.", perHour: true }
      ]},
      { title: "Special Need", subtitle: "Tambahan opsional sesuai kebutuhan client.", addons: [
        { id: "facelift", label: "Add facelift tape", price: 100000, desc: "Opsional untuk hasil wajah lebih lifting." }
      ]}
    ]
  },
  bride: {
    label: "Bride",
    desc: "D-Day bride hairdo",
    price: 750000,
    included: [
      "Free synthetic hairclip jika dibutuhkan dan menjadi hak milik",
      "Konfirmasi warna hairclip max H-3 minggu sebelum acara",
      "Free transport radius 20 km",
      "Free touch-up kit"
    ],
    addonGroups: [
      { title: "Retouch / Touch-up", subtitle: "Untuk bride yang ingin ada touch-up tambahan saat acara.", addons: [
        { id: "retouch_bride", label: "Add bride retouch", price: 450000, desc: "Retouch untuk bride saat acara." }
      ]},
      { title: "Trial Session", subtitle: "Trial hanya weekdays. Jika weekend ada tambahan biaya.", addons: [
        { id: "trial_weekday", label: "Add trial weekdays", price: 400000, desc: "Trial hairdo di hari kerja." },
        { id: "trial_weekend_fee", label: "Trial di weekend", price: 300000, desc: "Tambahan biaya jika trial dilakukan saat weekend.", requires: "trial_weekday" }
      ]}
    ]
  },
  mom_engagement: {
    label: "Mom Engagement / Bday / Anniversary",
    desc: "Mom hairdo",
    price: 450000,
    included: ["Free aksesoris rambut sesuai ketersediaan"],
    addonGroups: [
      { title: "Touch-up During Event", subtitle: "Untuk mom yang membutuhkan touch-up saat acara.", addons: [
        { id: "retouch_mom", label: "Add retouch", price: 250000, desc: "Hairdo touch-up saat acara." }
      ]},
      { title: "Special Need", subtitle: "Tambahan opsional sesuai kebutuhan client.", addons: [
        { id: "facelift", label: "Add facelift tape", price: 100000, desc: "Opsional untuk hasil wajah lebih lifting." }
      ]}
    ]
  },
  mom_bride: {
    label: "Mom Bride / Groom D-Day",
    desc: "Mom wedding day hairdo",
    price: 500000,
    included: ["Free aksesoris rambut sesuai ketersediaan"],
    addonGroups: [
      { title: "Touch-up During Event", subtitle: "Untuk mom yang membutuhkan touch-up saat acara.", addons: [
        { id: "retouch_mom", label: "Add retouch", price: 250000, desc: "Hairdo touch-up saat acara." }
      ]},
      { title: "Special Need", subtitle: "Tambahan opsional sesuai kebutuhan client.", addons: [
        { id: "facelift", label: "Add facelift tape", price: 100000, desc: "Opsional untuk hasil wajah lebih lifting." }
      ]}
    ]
  }
};

let selectedServiceId = "";

const rupiah = (n) => new Intl.NumberFormat("id-ID", {
  style: "currency", currency: "IDR", maximumFractionDigits: 0
}).format(n);

function initServiceDropdown() {
  const select = document.getElementById("serviceSelect");

  Object.entries(services).forEach(([id, service]) => {
    const opt = document.createElement("option");
    opt.value = id;
    opt.textContent = `${service.label} - ${service.desc} (${rupiah(service.price)})`;
    select.appendChild(opt);
  });

  select.addEventListener("change", () => {
    selectedServiceId = select.value;
    clearAddons();
    renderServicePreview();
    renderAddons();
    renderIncluded();
    updateSummary();
  });
}

function renderServicePreview() {
  const preview = document.getElementById("servicePreview");

  if (!selectedServiceId) {
    preview.classList.add("hidden");
    preview.innerHTML = "";
    return;
  }

  const service = services[selectedServiceId];
  preview.classList.remove("hidden");
  preview.innerHTML = `
    <strong>${service.label}</strong><br>
    <span style="color:#839289;">${service.desc}</span><br>
    <strong style="color:#e1c27a;">${rupiah(service.price)}</strong>
  `;
}

function clearAddons() {
  document.getElementById("addonPanel").innerHTML = "";
}

function renderAddons() {
  const panel = document.getElementById("addonPanel");
  const intro = document.getElementById("addonIntro");
  panel.innerHTML = "";

  if (!selectedServiceId) {
    intro.textContent = "Pilih service terlebih dahulu. Add-on akan muncul dalam bentuk expandable dropdown.";
    return;
  }

  intro.textContent = "Buka kategori add-on yang dibutuhkan saja. Add-on lain tetap tersembunyi agar form lebih clean.";

  const service = services[selectedServiceId];

  service.addonGroups.forEach((group, index) => {
    const details = document.createElement("details");
    if (index === 0) details.open = true;

    details.innerHTML = `
      <summary><span>${group.title}<span class="pill">Optional</span></span></summary>
      <div class="addon-content">
        <p class="addon-desc">${group.subtitle}</p>
        <div class="addon-list"></div>
      </div>
    `;

    const list = details.querySelector(".addon-list");

    group.addons.forEach(addon => {
      const row = document.createElement("div");
      row.className = "addon-row";
      row.dataset.requires = addon.requires || "";

      row.innerHTML = `
        <input
          type="checkbox"
          class="addon-check"
          id="${addon.id}"
          data-id="${addon.id}"
          data-label="${addon.label}"
          data-price="${addon.price}"
          data-perhour="${addon.perHour ? "yes" : "no"}"
          data-requires="${addon.requires || ""}"
        />
        <div style="flex:1;">
          <div class="addon-name">${addon.label}</div>
          <div class="addon-desc">${addon.desc}</div>
          ${addon.perHour ? `
            <div class="nested hidden" data-hour-box="${addon.id}">
              <label>Jumlah jam standby</label>
              <input type="number" class="hour-input" data-for="${addon.id}" value="1" min="1" />
            </div>
          ` : ""}
        </div>
        <div class="addon-price">${addon.perHour ? rupiah(addon.price) + " / jam" : "+" + rupiah(addon.price)}</div>
      `;

      list.appendChild(row);
    });

    panel.appendChild(details);
  });

  bindAddonEvents();
  applyDependencyVisibility();
}

function bindAddonEvents() {
  document.querySelectorAll(".addon-check").forEach(cb => {
    cb.addEventListener("change", () => {
      const hourBox = document.querySelector(`[data-hour-box="${cb.dataset.id}"]`);
      if (hourBox) hourBox.classList.toggle("hidden", !cb.checked);
      applyDependencyVisibility();
      updateSummary();
    });
  });

  document.querySelectorAll(".hour-input").forEach(input => {
    input.addEventListener("input", updateSummary);
  });
}

function applyDependencyVisibility() {
  document.querySelectorAll("[data-requires]").forEach(row => {
    const requiredId = row.dataset.requires;
    if (!requiredId) return;

    const requiredInput = document.getElementById(requiredId);
    const show = requiredInput && requiredInput.checked;

    row.classList.toggle("hidden", !show);

    if (!show) {
      const cb = row.querySelector(".addon-check");
      if (cb) cb.checked = false;
    }
  });
}

function renderIncluded() {
  const box = document.getElementById("includedBox");

  if (!selectedServiceId) {
    box.innerHTML = "<p>Pilih service terlebih dahulu untuk melihat benefit yang termasuk.</p>";
    return;
  }

  const items = services[selectedServiceId].included.map(item => `<li>${item}</li>`).join("");
  box.innerHTML = `<strong>Included:</strong><ul>${items}</ul>`;
}

function matureFee() {
  const age = Number(document.getElementById("age").value || 0);
  if (selectedServiceId === "regular" && age > 45) return 50000;
  return 0;
}

function renderAutoNotes() {
  const box = document.getElementById("autoNotes");
  let html = "";

  if (matureFee() > 0) {
    html += `<div class="note">Mature fee +50k otomatis ditambahkan karena usia client di atas 45 tahun.</div>`;
  }

  if (document.getElementById("transportArea").value === "confirm") {
    html += `<div class="note">Lokasi di luar area free transport. Biaya transport perlu dikonfirmasi manual.</div>`;
  }

  box.innerHTML = html;
}

function selectedAddons() {
  const arr = [];

  document.querySelectorAll(".addon-check:checked").forEach(cb => {
    let qty = 1;
    let price = Number(cb.dataset.price);

    if (cb.dataset.perhour === "yes") {
      const hourInput = document.querySelector(`.hour-input[data-for="${cb.dataset.id}"]`);
      qty = Math.max(1, Number(hourInput.value || 1));
      price = price * qty;
    }

    arr.push({ id: cb.dataset.id, label: cb.dataset.label, qty, price });
  });

  return arr;
}

function updateSummary() {
  renderAutoNotes();

  const box = document.getElementById("summaryItems");
  const totalText = document.getElementById("totalText");

  box.innerHTML = "";
  let total = 0;

  if (!selectedServiceId) {
    box.innerHTML = `<div class="summary-row muted"><span>Belum pilih service</span><span>-</span></div>`;
    totalText.textContent = rupiah(0);
    return;
  }

  const service = services[selectedServiceId];
  total += service.price;

  box.innerHTML += `<div class="summary-row"><span>${service.label}</span><span>${rupiah(service.price)}</span></div>`;

  const mFee = matureFee();
  if (mFee > 0) {
    total += mFee;
    box.innerHTML += `<div class="summary-row"><span>Mature fee > 45 tahun</span><span>${rupiah(mFee)}</span></div>`;
  }

  selectedAddons().forEach(addon => {
    total += addon.price;
    box.innerHTML += `
      <div class="summary-row">
        <span>${addon.label}${addon.qty > 1 ? " x " + addon.qty : ""}</span>
        <span>${rupiah(addon.price)}</span>
      </div>
    `;
  });

  if (document.getElementById("transportArea").value === "confirm") {
    box.innerHTML += `<div class="summary-row muted"><span>Transport luar area</span><span>Confirm</span></div>`;
  }

  totalText.textContent = rupiah(total);
}

document.getElementById("age").addEventListener("input", updateSummary);
document.getElementById("transportArea").addEventListener("change", updateSummary);

document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();

  if (!selectedServiceId) {
    alert("Silakan pilih service terlebih dahulu.");
    return;
  }

  const service = services[selectedServiceId];
  const addons = selectedAddons();
  const mFee = matureFee();
  const total = service.price + mFee + addons.reduce((s, a) => s + a.price, 0);

  const payload = {
    client_name: document.getElementById("clientName").value,
    whatsapp: document.getElementById("whatsapp").value,
    event_date: document.getElementById("eventDate").value,
    ready_time: document.getElementById("readyTime").value,
    location: document.getElementById("location").value,
    age: document.getElementById("age").value,
    transport_area: document.getElementById("transportArea").value,
    service: { id: selectedServiceId, label: service.label, price: service.price },
    addons,
    auto_fee: { mature_fee: mFee },
    estimated_total: total,
    notes: document.getElementById("notes").value
  };

  document.getElementById("output").textContent = JSON.stringify(payload, null, 2);
  alert("Inquiry berhasil dibuat. Data bisa dilihat di bagian Output.");
});

initServiceDropdown();
updateSummary();