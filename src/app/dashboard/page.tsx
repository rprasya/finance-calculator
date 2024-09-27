"use client";

import { useState } from "react";
import AngsuranForm from "@/components/AngsuranForm";
import JadwalAngsuran from "@/components/JadwalAngsuran";
import Kontrak from "@/components/Kontrak";

const Dashboard = () => {
  const [angsuran, setAngsuran] = useState(0); // menyimpan hasil angsuran
  const [jangkaWaktu, setJangkaWaktu] = useState(0); // menyimpan jangka waktu cicilan
  const [kontrakNo, setKontrakNo] = useState("");
  const [clientName, setClientName] = useState("");
  const [otr, setOtr] = useState(0);

  // fungsi untuk menerima hasil perhitungan dari komponen form dan menyimpan dalam state
  const handleCalculate = (
    angsuranPerbulan: number,
    waktuCicilan: number,
    kontrakNo: string,
    clientName: string,
    otr: number
  ) => {
    setAngsuran(angsuranPerbulan); // simpan hasil angsuran per bulan
    setJangkaWaktu(waktuCicilan); // simpan jangka waktu cicilan
    setKontrakNo(kontrakNo); // simpan nomor kontrak
    setClientName(clientName); // simpan nama client
    setOtr(otr); // simpan OTR
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl mt-6 mb-10">Angsuran Nasabah</h1>
      <AngsuranForm onCalculate={handleCalculate} />
      {angsuran > 0 && (
        <div className="mt-10">
          <h2 className="font-bold text-center">Kontrak</h2>
          <Kontrak kontrakNo={kontrakNo} clientName={clientName} otr={otr.toFixed(2)} /> {/* tambahkan 'otr' */}
          <h2 className="font-bold text-center">Jadwal Angsuran</h2>
          <JadwalAngsuran angsuran={angsuran} jangkaWaktu={jangkaWaktu} kontrakNo={kontrakNo} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
