import { useEffect, useState } from 'react';
import ErrorCard from '../../components/ErrorCards';
import Layout from '../../components/Layouts';
import Loading from '../../components/Loading';
import DoaCard from '../../components/husna/HusnaCard';
import { fetchDoaList } from '../../utils/husna';

export default function DoaHarian() {
  const [doas, setDoas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDoas = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchDoaList(); // Fetch the list of doas
        console.log("Fetched Doas:", data);  // Log the data to verify
        setDoas(data);  // Set the doas into the state
      } catch (err) {
        console.error("Error fetching doas:", err);
        setError('Terjadi kesalahan. Silakan coba lagi.');
      } finally {
        setLoading(false);
      }
    };

    getDoas();
  }, []);

  return (
    <Layout name="Doa Harian">
      <h1 className="text-3xl font-bold text-green-500 mb-3">Doa Harian</h1>

      {loading && <Loading message="Memuat doa harian..." />}
      {error && (
        <ErrorCard message="Gagal memuat data, silakan periksa koneksi internet Anda lalu refresh halaman ini." />
      )}

      {doas && doas.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-4">
          {doas.map((doa, i) => (
            <DoaCard key={i} doa={doa} />  // Display each doa using the DoaCard component
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-500">Tidak ada doa yang ditemukan.</p>
      )}
    </Layout>
  );
}

