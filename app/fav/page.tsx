"use client";
import { FaTrash } from "react-icons/fa";
import { useFav } from "../context/fav";

export default function Fav() {
  const { Arrfav, removeFav, clearFav } = useFav();

  return (
    <section className="px-6 py-10 bg-gray-50 min-h-screen">
      <div className="max-[270px]:flex-col flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-right text-gray-800">المفضلة ❤️</h2>
        {Arrfav.length > 0 && (
          <button
            onClick={clearFav}
            className=" cursor-pointer  bg-red-500 text-white px-2 py-2 rounded-xl hover:bg-red-600 transition"
          >
            إزالة الكل
          </button>
        )}
      </div>

      {Arrfav.length > 0 ? (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Arrfav.map((product : any) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
              <div className="p-4 flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-500 mb-4">${product.price}</p>

                <button
                  onClick={() => removeFav(product.id)}
                  className=" cursor-pointer flex items-center justify-center gap-2 text-white bg-red-500 px-2 py-2 rounded-xl hover:bg-red-600 transition"
                >
                  <FaTrash /> إزالة من المفضلة
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-20 text-xl">
          لا توجد منتجات في المفضلة بعد ❤️
        </p>
      )}
    </section>
  );
}
