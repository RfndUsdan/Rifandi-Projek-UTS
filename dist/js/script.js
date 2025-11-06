const hamburger = document.querySelector(".ri-menu-3-line");

const menu = document.querySelector(".menu")

hamburger.addEventListener("click", () => {
    menu.classList.toggle("menu-active")
});

window.onscroll = () => {
    menu.classList.remove("menu-active");
}

const btnFilter = document.querySelectorAll(".produk-box ul li");
const cardItem = document.querySelectorAll(".produk-list .card");

btnFilter.forEach(btn => {
  btn.onclick = () => {
    // Hapus class active dari semua tombol
    btnFilter.forEach(b => b.classList.remove("active"));
    // Tambahkan ke tombol yang diklik
    btn.classList.add("active");

    // Ambil teks tombol (misal: Combat, Strategy, dll)
    const filterText = btn.textContent.toLowerCase();

    // Filter card sesuai kategori
    cardItem.forEach(card => {
      const cardFilter = card.getAttribute("data-filter");

      // Sembunyikan semua
      card.style.display = "none";

      // Tampilkan jika cocok
      if (cardFilter === filterText || filterText === "all commander") {
        card.style.display = "block";
      }
    });
  };
});

// Tunggu hingga seluruh dokumen HTML dimuat
document.addEventListener("DOMContentLoaded", function () {
  // 1. Pilih semua tombol filter dan kotak item
  const filterButtons = document.querySelectorAll(".item-box ul li");
  const itemBoxes = document.querySelectorAll(".layanan-box .box");

  // 2. Tambahkan event listener untuk setiap tombol filter
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Ambil nama filter dari teks tombol, ubah ke huruf kecil
      // "All Items" -> "all items", "Physical" -> "physical", dst.
      const filter = button.textContent.toLowerCase();

      // 3. Atur kelas "Active"
      // Hapus kelas 'Active' dari semua tombol
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });
      // Tambahkan kelas 'Active' ke tombol yang baru saja diklik
      button.classList.add("active");

      // 4. Lakukan filtering
      itemBoxes.forEach((box) => {
        // Ambil data-category dari kotak item
        const itemCategory = box.getAttribute("data-category");

        // Periksa apakah item harus ditampilkan
        if (filter === "all items" || filter === itemCategory) {
          box.style.display = "block"; // Tampilkan item
        } else {
          box.style.display = "none"; // Sembunyikan item
        }
      });
    });
  });
});

// ...
button.addEventListener("click", () => {
    // Ambil nama filter dari teks tombol, ubah ke huruf kecil
    const filter = button.textContent.toLowerCase(); // <-- Bagian 1

    // ... (kode untuk atur kelas Active) ...

    // 4. Lakukan filtering
    itemBoxes.forEach((box) => {
        const itemCategory = box.getAttribute("data-category");

        // Periksa apakah item harus ditampilkan
        if (filter === "all items" || filter === itemCategory) { // <-- Bagian 2
            box.style.display = "block"; // Tampilkan item
        } else {
            box.style.display = "none"; // Sembunyikan item
        }
    });
});
// ...