
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
    <div className="p-6 max-w-xl mx-auto">
      <Card className="mb-4">
        <CardContent className="space-y-4">
          <h2 className="text-xl font-bold">Hakediş Hesaplama</h2>
          <Input type="number" placeholder="Toplam Metraj (m²)" onChange={(e) => setMetraj(parseFloat(e.target.value))} />
          <Input type="number" placeholder="Birim m² Fiyatı" onChange={(e) => setBirimFiyat(parseFloat(e.target.value))} />
          <Input type="number" placeholder="Yapılan İş (%) 0.3 için 30 yaz" onChange={(e) => setYuzde(parseFloat(e.target.value) / 100)} />
          <Input type="number" placeholder="Ödenen Tutar" onChange={(e) => setOdenen(parseFloat(e.target.value))} />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-2">
          <p><strong>Toplam Tutar:</strong> {toplamTutar.toLocaleString()} ₺</p>
          <p><strong>Hakediş Tutarı:</strong> {hakedisTutari.toLocaleString()} ₺</p>
          <p><strong>Kalan Hakediş:</strong> {kalan.toLocaleString()} ₺</p>
        </CardContent>
      </Card>
    </div>
  );
}
