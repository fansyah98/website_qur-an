
const DoaKategori = ({ handleClickKategori }) => {
  const categories = [
    { name: 'Doa Harian', id: 'doa-harian' },
    { name: 'Doa Haji', id: 'doa-haji' },
    { name: 'Doa Qur\'an', id: 'doa-quran' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
      {categories.map((category) => (
        <div
          key={category.id}
          className="p-4 bg-green-200 rounded-lg shadow-lg hover:bg-green-300 cursor-pointer"
          onClick={() => handleClickKategori(category.id)}
        >
          <h3 className="text-center text-xl font-semibold text-green-600">{category.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default DoaKategori;
