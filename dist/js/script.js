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


