import { useState } from "react";

export default function HusnaCard({ doa }) {
  const { judul, arab, indo, latin } = doa;
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Doa Card */}
      <div className="shadow rounded-lg flex w-full hover:bg-rose-50 hover:shadow-md hover:scale-105 duration-300">
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="px-3 py-2.5">
                <h2 className="text-lg md:text-xl font-bold text-green-400">{arab}</h2>
              </div>
            </div>
          </div>
          <div className="text-l flex justify-between px-3 pb-3">
            <div className="hover:green-rose-500">
              <div
                className=""
                title="Lihat Tafsir"
                onClick={handleOpenModal}
              >
                {latin}
              </div>
            </div>
          </div>
          
        </div>
        <div className="text-l flex justify-between px-3 pb-3">
            <div className="hover:green-rose-500">
              <div
                className=""
                title="Lihat Tafsir"
                onClick={handleOpenModal}
              >
               <span>Detail</span>
              </div>
            </div>
          </div>
      </div>

      {/* Modal for detail */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-xl w-96 p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-green-400">{arab}</h3>
              <button
                className="text-xl text-gray-500 hover:text-rose-500"
                onClick={handleCloseModal}
              >
                &times;
              </button>
            </div>
            <div className="mt-4 text-sm">
              <p className="text-md font-bold">Menu ini sedang disiapkan</p>
              <p className="text-lg">Mohon bersabar, kami sedang mempersiapkan informasi lebih lanjut.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
