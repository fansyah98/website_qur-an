import { useState } from "react";

export default function DoaCard({ doa }) {
  const { judul, arab, indo, source } = doa;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="shadow rounded-lg flex w-full hover:bg-green-100 hover:shadow-md hover:scale-105 duration-300">
      <div className="w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="px-3 py-2.5">
              <h2 className="text-lg md:text-xl font-bold text-green-400">{judul}</h2>
            </div>
          </div>
        </div>
        <div className="text-sm mt-1 flex justify-between px-3 pb-3">
          <div className="hover:text-rose-500">
          {source}
          </div>
          <div className="hover:text-rose-500">
            <div >
       
            <div title="Lihat Tafsir" onClick={handleOpenModal}>
              Detail
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for detail */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-xl w-96 p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-green-400">{judul}</h3>
              <button
                className="text-xl text-gray-500 hover:text-green-500"
                onClick={handleCloseModal}
              >
                &times;
              </button>
            </div>
            <div className="mt-4 text-sm">
              <p className="text-md font-bold">Arabic:</p>
              <p className="text-lg">{arab}</p>
            </div>
            <div className="mt-4 text-sm">
              <p className="text-md font-bold">Artinya:</p>
              <p className="text-lg">{indo}</p>
            </div>
            <div className="mt-4 text-sm">
              <p className="text-md font-bold">Jenis Doa:</p>
              <p className="text-lg">{source}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
