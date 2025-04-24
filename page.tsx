import { useState } from "react";

export default function HakedisTakip() {
  const [metraj, setMetraj] = useState(0);
  const [birimFiyat, setBirimFiyat] = useState(0);
  const [yuzde, setYuzde] = useState(0);
  const [odenen, setOdenen] = useState(0);

  const toplamTutar = metraj * birimFiyat;
  const hakedisTutari = toplamTutar * yuzde;
  const kalan = hakedisTutari - odenen;

  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-center">Hakediş Hesaplama</h2>

      <div className="space-y-2">
        <label className="block">Toplam Metraj (m²):</label>
        <input type="number" className="w-full p-2 border rounded" onChange={(e) => setMetraj(parseFloat(e.target.value))} />

        <label className="block">Birim m² Fiyatı:</label>
        <input type="number" className="w-full p-2 border rounded" onChange={(e) => setBirimFiyat(parseFloat(e.target.value))} />

        <label className="block">Yapılan İş (%) (örnek: 30):</label>
        <input type="number" className="w-full p-2 border rounded" onChange={(e) => setYuzde(parseFloat(e.target.value) / 100)} />

        <label className="block">Ödenen Tutar:</label>
        <input type="number" className="w-full p-2 border rounded" onChange={(e) => setOdenen(parseFloat(e.target.value))} />
      </div>

      <div className="mt-6 space-y-2 bg-gray-100 p-4 rounded">
        <p><strong>Toplam Tutar:</strong> {toplamTutar.toLocaleString()} ₺</p>
        <p><strong>Hakediş Tutarı:</strong> {hakedisTutari.toLocaleString()} ₺</p>
        <p><strong>Kalan Hakediş:</strong> {kalan.toLocaleString()} ₺</p>
      </div>
    </div>
  );
}