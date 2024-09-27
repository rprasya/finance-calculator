"use client";

import { useState } from "react";

interface AngsuranFormProps {
  onCalculate: (
    angsuran: number,
    jangkaWaktu: number,
    kontrakNo: string,
    clientName: string,
    otr: number
  ) => void;
}

const AngsuranForm = ({ onCalculate }: AngsuranFormProps) => {
  const [otr, setOtr] = useState(0); // Harga OTR mobil default
  const [dp, setDp] = useState(0); // DP default (dalam persen)
  const [jangkaWaktu, setJangkaWaktu] = useState(0); // Jangka waktu cicilan (bulan)
  const [kontrakNo, setKontrakNo] = useState(""); // Kontrak No default
  const [clientName, setClientName] = useState(""); // Client Name default

  // Fungsi untuk menghitung angsuran per bulan berdasarkan input user
  const hitungCicilan = () => {
    const pokokUtang = otr - (otr * dp) / 100;
    let bunga = 12;

    // Menentukan tingkat bunga berdasarkan jangka waktu
    if (jangkaWaktu >= 12) {
      bunga = 12;
    } else if (jangkaWaktu >= 12 && jangkaWaktu < 24) {
      bunga = 14;
    } else {
      bunga = 16.5;
    }

    // Menghitung angsuran per bulan (pokok + bunga dibagi jangka waktu)
    const angsuranPerBulan =
      (pokokUtang + (pokokUtang * bunga) / 100) / jangkaWaktu;
    return angsuranPerBulan;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const angsuran = hitungCicilan();
    onCalculate(angsuran, jangkaWaktu, kontrakNo, clientName, otr); // sertakan 'otr'
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Kontrak No:</label>
      <input
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        type="text"
        value={kontrakNo}
        onChange={(e) => setKontrakNo(String(e.target.value))}
      />
    </div>
    
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Client Name:</label>
      <input
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        type="text"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
      />
    </div>
    
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Harga OTR Mobil:</label>
      <input
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        type="text"
        value={otr}
        onChange={(e) => setOtr(Number(e.target.value))}
      />
    </div>
    
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Down Payment (DP %):</label>
      <input
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        type="text"
        value={dp}
        onChange={(e) => setDp(Number(e.target.value))}
      />
    </div>
    
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Jangka Waktu:</label>
      <input
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        type="text"
        value={jangkaWaktu}
        onChange={(e) => setJangkaWaktu(Number(e.target.value))}
      />
    </div>
    
    <button
      className="w-full h-10 px-6 font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
      type="submit"
    >
      Hitung Angsuran
    </button>
  </form>
</div>
  );
};

export default AngsuranForm;
