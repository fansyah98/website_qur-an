import { useState, useEffect } from 'react';
import { fetchDoaList } from '../../utils/doa';
import Layout from '../../components/Layouts';
import Loading from '../../components/Loading';
import ErrorCard from '../../components/ErrorCards';
import DoaCard from '../../components/doa/DoaCard';

export default function DoaHarian() {
  const [doas, setDoas] = useState([]); // State untuk menyimpan doa
  const [loading, setLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // State untuk error
  const [selectedCategory, setSelectedCategory] = useState('doa-harian'); // Default kategori

  useEffect(() => {
    const getDoas = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchDoaList(selectedCategory); // Mengambil data doa berdasarkan kategori
        console.log("Fetched Data:", data);  // Debugging
        setDoas(data); // Menyimpan data doa ke state
      } catch (err) {
        console.error("Error fetching doas:", err);
        setError('Terjadi kesalahan. Silakan coba lagi.');
      } finally {
        setLoading(false);
      }
    };

    getDoas(); // Memanggil API untuk mendapatkan data doa
  }, [selectedCategory]); // Memanggil ulang jika kategori berubah

  return (
    <Layout name="Doa Harian">
      <h1 className="text-3xl font-bold text-green-500 mb-3">Doa Doa</h1>

      {/* Menampilkan Kategori Kartu */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        <button onClick={() => setSelectedCategory('doa-harian')} className="p-3 bg-green-400 rounded text-white">Doa Harian</button>
        <button onClick={() => setSelectedCategory('doa-haji')} className="p-3 bg-green-400 rounded text-white">Doa Haji</button>
        {/* <button onClick={() => setSelectedCategory('doa-umum')} className="p-3 bg-green-400 rounded text-white">Doa Umum</button> */}
        <button onClick={() => setSelectedCategory('doa-quran')} className="p-3 bg-green-400 rounded text-white">Doa AlQur'an</button>
      </div>

      {loading && <Loading message="Memuat doa..." />}
      {error && <ErrorCard message={error} />}

      {doas && doas.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-4">
          {doas.map((doa, i) => (
            <DoaCard key={i} doa={doa} />  // Menampilkan doa berdasarkan kategori yang dipilih
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-500">Tidak ada doa untuk kategori ini.</p>
      )}
    </Layout>
  );
}
