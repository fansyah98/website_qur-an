// pages/index.js
import NextLink from 'next/link';
import Layout from '../components/Layouts';


export default function Home() {
  const menuList = [
    { text: "Daftar AlQur'an", icon: "/images/surat.png", href: "/quran"},
    { text: "Asmaul Husna", icon: "/images/tasbih.png", href: "/husna"},
    { text: "Kumpulan Do'a", icon: "/images/doa-tahlil.png", href: "/doa" },
    { text: "Berita Islami", icon: "/images/b.png", href: "/berita" },
    { text: "Waktu Sholat", icon: "/images/waktu.png", href: "/sholat" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
    

      {/* Content */}
      <Layout name="Home">
      <h1 className="text-3xl font-bold text-green-500 mb-3">Home</h1>
      <span>Al-Qur'an digital adalah teks Al-Qur'an yang disajikan dalam bentuk elektronik. Al-Qur'an digital dapat diakses secara online maupun offline melalui perangkat elektronik. Al-Qur'an digital dapat digunakan untuk: Membaca ayat Al-Qur'an, Menulis buku dan artikel Islam, Menulis kisah nabi dan rasul, Menghafal Al-Qur'an, Mengamalkan Al-Qur'an</span>
      <span>
      ukum membaca Al-Qur'an di gawai, termasuk HP, menurut para ulama adalah mubah atau boleh. Namun, ada ulama yang berpendapat bahwa hukum membaca Al-Qur'an di HP saat haid tetap haram
      </span>

      <main className="px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {menuList.map((menu, idx) => (
            <NextLink href={menu.href} key={idx}>
              <div className="block p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  <img
                    src={menu.icon}
                    alt={menu.text}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h2 className="text-lg font-semibold text-center text-gray-800">{menu.text}</h2>
              </div>
            </NextLink>
          ))}
        </div>
      </main>
      </Layout>
    </div>
  );
}
