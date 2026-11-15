import { tambahData } from "./data.js";
import { validasiMahasiswa } from "./logic.js";
import { tampilkanData, bersihkanForm } from "./ui.js";

const form = document.getElementById("formMahasiswa");
const pesan = document.getElementById("pesan");

// Jalankan saat form disubmit
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Cegah halaman reload

  // Ambil nilai input
  const nama = document.getElementById("nama").value;
  const nim = document.getElementById("nim").value;
  const nilai = document.getElementById("nilai").value;

  // Validasi via logic.js
  const error = validasiMahasiswa(nama, nim, nilai);

  if (error) {
    pesan.textContent = error;
    pesan.className = ""; // Warna default (merah)
    return;
  }

  // Jika valid, simpan via data.js
  tambahData({
    nama: nama.trim(),
    nim: nim.trim(),
    nilai: Number(nilai),
  });

  pesan.textContent = "Data berhasil ditambahkan.";
  pesan.className = "sukses"; // Warna hijau

  bersihkanForm();
  tampilkanData();
});

// Render data saat halaman pertama kali dibuka
tampilkanData();