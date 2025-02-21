import { useEffect, useState } from 'react';
import ErrorCard from '../../components/ErrorCards';
import Layout from '../../components/Layouts';
import Loading from '../../components/Loading';
import DoaCard from '../../components/doa/DoaCard';
import DoaKategori from '../../components/doa/DoaKategori';
import { fetchDoaList } from '../../utils/doa'; // Fungsi fetch untuk mengambil data dari API

export default function DoaHarian() {
  const [doas, setDoas] = useState([]); // State untuk menyimpan doa
  const [loading, setLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // State untuk error
  const [selectedCategory, setSelectedCategory] = useState('doa harian'); // State untuk kategori yang dipilih

  useEffect(() => {
    const getDoas = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchDoaList(selectedCategory); // Mengambil data doa berdasarkan kategori
        console.log("Fetched Doas:", data);
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

  // Menangani klik kategori
  const handleClickKategori = (categoryId) => {
    setSelectedCategory(categoryId); // Mengubah kategori yang dipilih
  };

  return (
    <Layout name="Doa Harian">
      <h1 className="text-3xl font-bold text-green-500 mb-3">Doa Harian</h1>

      {/* Menampilkan Kategori Kartu */}
      <DoaKategori handleClickKategori={handleClickKategori} />
      <br />
      {loading && <Loading message="Memuat doa harian..." />}
      {error && (
        <ErrorCard message="Gagal memuat data, silakan periksa koneksi internet Anda lalu refresh halaman ini." />
      )}

      {doas && doas.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-4">
          {doas.map((doa, i) => (
            <DoaCard key={i} doa={doa} />  // Menampilkan doa berdasarkan kategori yang dipilih
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-500">Tidak ada doa yang ditemukan untuk kategori ini.</p>
      )}
    </Layout>
  );
}
