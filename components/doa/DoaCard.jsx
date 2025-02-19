export default function DoaCard({ doa }) {
    const { nama, arab, arti } = doa;
  
    return (
      <div className="shadow rounded-lg flex w-full hover:bg-rose-50 hover:shadow-md hover:scale-105 duration-300">
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="px-3 py-2.5">
                <h2 className="text-lg md:text-xl font-bold text-rose-400">{nama}</h2>
              </div>
            </div>
  
            <div className="text-right flex items-center">
              <div className="px-3">
                <h1 className="text-xl md:text-2xl font-bold font-serif">
                  <span className="font-mushaf">Doa</span>
                </h1>
              </div>
            </div>
          </div>
  
          <div className="text-sm mt-1 flex justify-between px-3 pb-3">
            <div className="">{arti}</div>
          </div>
        </div>
      </div>
    );
  }
  