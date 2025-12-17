// =========================================
// LOGIKA UNTUK COMMANDER
// =========================================

const commanderCards = document.querySelectorAll(".card-commander");
const commanderFilterButtons = document.querySelectorAll(".filter-btn");
const commanderSearch = document.getElementById("search-commander");

// 1. Fungsi Filter Commander
commanderFilterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        // Hapus class active dari tombol lain
        commanderFilterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const selectedType = btn.dataset.type;

        commanderCards.forEach(card => {
            const cardType = card.dataset.type;
            
            // Jika pilih 'all' atau type kartu sama dengan tombol yg diklik -> Tampilkan
            if (selectedType === "all" || cardType === selectedType) {
                card.style.display = "flex"; // atau "block", sesuaikan dengan css .card
            } else {
                card.style.display = "none";
            }
        });
    });
});

// 2. Fungsi Search Commander
if (commanderSearch) {
    commanderSearch.addEventListener("keyup", function () {
        const keyword = this.value.toLowerCase();
        
        commanderCards.forEach(card => {
            const cardName = card.dataset.name;
            
            // Cek apakah nama mengandung keyword dan apakah card sedang tidak tersembunyi oleh filter kategori
            // (Opsional: jika ingin search menembus filter kategori, hapus pengecekan display)
            if (cardName.includes(keyword)) {
                card.style.display = "flex"; 
            } else {
                card.style.display = "none";
            }
        });
    });
}


// =========================================
// LOGIKA UNTUK ITEM
// =========================================

const itemCards = document.querySelectorAll(".card-item-js");
const itemFilterButtons = document.querySelectorAll(".filter-item-btn");
const itemSearch = document.getElementById("search-item");

// 1. Fungsi Filter Item
itemFilterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        itemFilterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const selectedType = btn.dataset.type;

        itemCards.forEach(card => {
            const cardType = card.dataset.type;
            
            if (selectedType === "all" || cardType === selectedType) {
                card.style.display = "flex"; 
            } else {
                card.style.display = "none";
            }
        });
    });
});

// 2. Fungsi Search Item
if (itemSearch) {
    itemSearch.addEventListener("keyup", function () {
        const keyword = this.value.toLowerCase();
        
        itemCards.forEach(card => {
            const cardName = card.dataset.name;
            
            if (cardName.includes(keyword)) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });
}

// Catatan: Kode detail page di JS dihapus karena detail page sekarang dihandle oleh PHP.