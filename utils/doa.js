// utils/doa.js
export const fetchDoaList = async (category) => {
  let apiUrl = '';

  switch (category) {
    case 'doa-harian':
      apiUrl = 'https://api.myquran.com/v2/doa/sumber/harian';
      break;
    case 'doa-haji':
      apiUrl = 'https://api.myquran.com/v2/doa/sumber/haji';
      break;
    case 'doa-quran':
      apiUrl = 'https://api.myquran.com/v2/doa/sumber/quran';
      break;
    case 'doa-ibadah':
      apiUrl = 'https://api.myquran.com/v2/doa/sumber/ibadah';
      break;
    default:
      apiUrl = 'https://api.myquran.com/v2/doa/sumber/harian'; // Default ke doa-harian jika kategori tidak valid
  }

  console.log("Fetching data from: ", apiUrl);  // Debugging URL

  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('Gagal mengambil data dari API');
  }

  const data = await response.json();
  console.log("API Response: ", data);  // Debugging Response

  // Periksa apakah data mengandung field 'data' yang berisi array doas
  return data.data || []; // Mengembalikan array data atau array kosong jika tidak ada
};
