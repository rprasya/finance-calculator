interface kontrakProps {
  kontrakNo: string;
  clientName: string;
  otr: string;
}

const Kontrak = ({ kontrakNo, clientName, otr }: kontrakProps) => {
  // Fungsi untuk format Rupiah
  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  return (
    <table className="min-w-full border-collapse border border-gray-300 mt-5 mb-5">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">KONTRAK_NO</th>
          <th className="border border-gray-300 px-4 py-2">CLIENT NAME</th>
          <th className="border border-gray-300 px-4 py-2">OTR</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-center">
          <td className="border border-gray-300 px-4 py-2">{kontrakNo}</td>
          <td className="border border-gray-300 px-4 py-2">{clientName}</td>
          <td className="border border-gray-300 px-4 py-2">
            {formatRupiah(Number(otr))}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Kontrak;
