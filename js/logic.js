// Fungsi validasi input form
export function validasiMahasiswa(nama, nim, nilai) {
  if (!nama.trim() || !nim.trim() || nilai === "") {
    return "Semua data wajib diisi.";
  }

  const angka = Number(nilai);
  if (!Number.isFinite(angka) || angka < 0 || angka > 100) {
    return "Nilai harus berupa angka 0 sampai 100.";
  }

  return ""; // Return string kosong artinya valid (tidak ada error)
}

// Fungsi untuk menentukan status kelulusan
export function cekKelulusan(nilai) {
  return Number(nilai) >= 60 ? "Lulus" : "Belum Lulus";
}