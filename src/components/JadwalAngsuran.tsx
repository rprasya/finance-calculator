interface JadwalAngsuranProps {
    kontrakNo: string;
    angsuran: number;
    jangkaWaktu: number;
  }
  
  const JadwalAngsuran = ({ angsuran, jangkaWaktu, kontrakNo }: JadwalAngsuranProps) => {
    // Fungsi untuk format Rupiah
    const formatRupiah = (number: number) => {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(number);
    };
  
    // Fungsi untuk menghasilkan jadwal angsuran bulanan
    const generateJadwal = () => {
      const jadwal = [];
      const startDate = new Date(); // menggunakan tanggal saat ini sebagai awal cicilan
  
      for (let i = 1; i <= jangkaWaktu; i++) {
        // Setel bulan berikutnya untuk jatuh tempo
        const jatuhTempo = new Date(startDate);
        jatuhTempo.setMonth(jatuhTempo.getMonth() + i);
  
        // Tambahkan jadwal angsuran ke array
        jadwal.push({
          angsuranKe: i, // Gunakan 'i' untuk menghitung angsuran ke-n
          jumlahAngsuran: formatRupiah(angsuran), // Format ke dalam rupiah
          jatuhTempo: jatuhTempo.toISOString().split("T")[0], // Format tanggal
        });
      }
      return jadwal;
    };
  
    const JadwalAngsuran = generateJadwal();
  
    return (
      <table className="min-w-full border-collapse border border-gray-300 mt-5 mb-5">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Kontrak_No</th>
            <th className="border border-gray-300 px-4 py-2">Angsuran_Ke</th>
            <th className="border border-gray-300 px-4 py-2">Jumlah_Angsuran</th>
            <th className="border border-gray-300 px-4 py-2">Tanggal_Jatuh_Tempo</th>
          </tr>
        </thead>
        <tbody>
          {JadwalAngsuran.map((row) => (
            <tr key={row.angsuranKe} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{kontrakNo}</td>
              <td className="border border-gray-300 px-4 py-2">{row.angsuranKe}</td>
              <td className="border border-gray-300 px-4 py-2">{row.jumlahAngsuran}</td>
              <td className="border border-gray-300 px-4 py-2">{row.jatuhTempo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default JadwalAngsuran;
  