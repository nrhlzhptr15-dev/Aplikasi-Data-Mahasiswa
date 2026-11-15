// Array untuk menyimpan data (sementara di memori)
export const daftarMahasiswa = [];

export function tambahData(mahasiswa) {
  daftarMahasiswa.push(mahasiswa);
}

export function hapusData(nim) {
  const index = daftarMahasiswa.findIndex((m) => m.nim === nim);
  if (index !== -1) {
    daftarMahasiswa.splice(index, 1);
  }
}