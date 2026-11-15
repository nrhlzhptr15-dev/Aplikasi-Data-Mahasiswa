import { daftarMahasiswa, hapusData } from "./data.js";
import { cekKelulusan } from "./logic.js";

const tabel = document.getElementById("daftarMahasiswa");
const pesan = document.getElementById("pesan");

export function tampilkanData() {
  tabel.innerHTML = ""; 
  
  if (daftarMahasiswa.length === 0) {
    tabel.innerHTML = `<tr><td colspan="5" style="text-align:center; color:#9ca3af; padding: 30px;">Belum ada data mahasiswa.</td></tr>`;
    updateStatistik(); // Panggil fungsi statistik
    return;
  }

  daftarMahasiswa.forEach((m, index) => {
    const baris = document.createElement("tr");
    const status = cekKelulusan(m.nilai);
    const badgeClass = status === "Lulus" ? "badge-lulus" : "badge-gagal";

    baris.innerHTML = `
      <td><strong>${m.nama}</strong></td>
      <td>${m.nim}</td>
      <td>${m.nilai}</td>
      <td><span class="badge ${badgeClass}">${status}</span></td>
      <td></td>
    `;

    const aksi = document.createElement("td");
    const tombol = document.createElement("button");
    tombol.innerHTML = "🗑️ Hapus";
    tombol.className = "btn-hapus";
    
    tombol.addEventListener("click", () => {
      hapusData(m.nim);
      tampilkanData();
      pesan.textContent = "Data berhasil dihapus.";
      pesan.className = "sukses";
    });

    aksi.appendChild(tombol);
    baris.lastElementChild.replaceWith(aksi); // Ganti td kosong dengan tombol
    tabel.appendChild(baris);
  });

  updateStatistik(); // Panggil fungsi statistik setiap kali render
}

// Fungsi baru untuk menghitung statistik
function updateStatistik() {
  const total = daftarMahasiswa.length;
  let lulus = 0;
  
  daftarMahasiswa.forEach((m) => {
    if (cekKelulusan(m.nilai) === "Lulus") lulus++;
  });
  
  document.getElementById("totalMhs").textContent = total;
  document.getElementById("totalLulus").textContent = lulus;
  document.getElementById("totalBelum").textContent = total - lulus;
}

export function bersihkanForm() {
  document.getElementById("formMahasiswa").reset();
}