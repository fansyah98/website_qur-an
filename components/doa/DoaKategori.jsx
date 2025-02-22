import React from 'react';

export default function DoaKategori({ handleClickKategori }) {
  return (
    <div className="flex space-x-4 mb-6">
      {/* Tombol untuk memilih kategori doa */}
      <button
        onClick={() => handleClickKategori("doa-harian")}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Doa Harian
      </button>
      <button
        onClick={() => handleClickKategori("doa-haji")}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
         Doa AlQur'an
      </button>
      <button
        onClick={() => handleClickKategori("doa-quran")}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Doa Umum
      </button>
      <button
        onClick={() => handleClickKategori("doa-umum")}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Doa Umum
      </button>
    </div>
  );
}
