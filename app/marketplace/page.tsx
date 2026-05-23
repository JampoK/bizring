import React from 'react';
import MarketplaceGrid from '../components/MarketplaceGrid';

const dummyBusinesses = [
  {
    name: "Warung Kopi A",
    logo: "/placeholder.png",
    tags: ["franchise", "F&B"],
    status: "open" as const,
  },
  {
    name: "Minimarket Lokal",
    logo: "/placeholder.png",
    tags: ["mitra cabang", "retail"],
    status: "closed" as const,
  },
];

export default function MarketplacePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Cari bisnis..."
          className="w-full max-w-md px-4 py-2 border rounded"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-4">Filter</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Jenis kerjasama</label>
                <select className="w-full px-3 py-2 border rounded">
                  <option>Semua</option>
                  <option>Franchise</option>
                  <option>Mitra</option>
                  <option>Bagi hasil</option>
                  <option>Investor</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Sektor</label>
                <select className="w-full px-3 py-2 border rounded">
                  <option>Semua</option>
                  <option>F&B</option>
                  <option>Retail</option>
                  <option>Jasa</option>
                  <option>Edu</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Lokasi</label>
                <select className="w-full px-3 py-2 border rounded">
                  <option>Semua</option>
                  <option>Jakarta</option>
                  <option>Surabaya</option>
                  <option>Bandung</option>
                  <option>Makassar</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <MarketplaceGrid businesses={dummyBusinesses} />
        </div>
      </div>
    </div>
  );
}